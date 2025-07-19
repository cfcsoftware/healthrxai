from django.http import JsonResponse
from rest_framework.views import APIView
import logging, json
from search.documents import BlogDocument
from django.shortcuts import redirect, render


# for the super admin (saas login)
from rest_framework import generics, status
from rest_framework.response import Response

from users.setup_demo_cms import handle
from .models import CustomUser, Domain, Tenant
from .serializers import CustomUserSerializer, DomainSerializer, TenantSerializer, TenantRegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny 
from .permissions import IsGlobalSuperAdmin
from django.views.decorators.csrf import csrf_exempt
from clients.models import Role, UserRole
from django_tenants.utils import schema_context
from saas_admin.cloudflare import create_cloudflare_subdomain
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import CustomUser 

logger = logging.getLogger(__name__)


@csrf_exempt
def get_tenant_domain(request):
    try:
        data = json.loads(request.body)
        custom_tenant_id = data.get('hospital_id')
        if not custom_tenant_id:
            return JsonResponse({"success": False, "message": "custom_tenant_id is required"}, status=400)
        tenant = Tenant.objects.get(custom_tenant_id=custom_tenant_id)
        domain = Domain.objects.filter(tenant=tenant).first()
        if domain:
            if 'localhost' in domain.domain:
                new_url = f'http://{domain.domain}:8000'
            else:
                new_url = f'https://{domain.domain}'            
            return JsonResponse({"success": True, "domain": new_url,"hospital_name": tenant.username}, status=200)
        else:
            return JsonResponse({"success": False, "message": "No domain found for the given tenant"}, status=404)
    except Tenant.DoesNotExist:
        return JsonResponse({"success": False, "message": "Tenant not found"}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({"success": False, "message": "Invalid JSON format"}, status=400)



class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user

        # Ensure the user is a global superuser
        if not user.is_superuser or user.tenant is not None:
            raise AuthenticationFailed("Only global superusers are allowed to generate tokens.")
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer




class TenantRegister(APIView):
    def get(self, request):
        logger.info("Rendering tenant registration page.")
        return render(request, 'authentication/tenant_register.html', {})

    def post(self, request):
        logger.info("Registering new tenant!")
        serializer = TenantRegisterSerializer(
            data=request.data, context={"request": request}
        )
        
        if serializer.is_valid():
            data = serializer.save()  # Here roles and user are created
            
            tenant = data["tenant"]
            domain = data["domain"]
            username = data["username"]
            
            if domain:
                if 'localhost' in domain:
                    new_url = f'http://{domain}:8000/login'
                else:
                    new_url = f'https://{domain}/login'    
            
            if "localhost" in domain:      
                tenant_url = f'http://{username}.{domain}'
            else:
                tenant_url = f'https://{username}.{domain}'
            
            response_data = {
                "msg": "Tenant created successfully!",
                "tenant_url": tenant_url,
                "user_data": {
                    "email": data["user"].email,
                    "username": data["user"].username,
                },
            }
            
            # Here we are ensuring the tenant is set up with roles and user profiles
            user = data["user"]
            with schema_context(tenant.schema_name):
                # Assigning default roles
                role = Role.objects.get(name="Admin")
                UserRole.objects.create(user=user, role=role)

            logger.info(f"New tenant {username} registered at {domain}.")
            print(response_data)
            
            if request.content_type == "application/json":
                return JsonResponse(response_data, status=status.HTTP_201_CREATED)
            else:
                # Redirecting after success if it's an HTML form submission
                # return redirect(response_data["tenant_url"] + '/login')
                return redirect ('/tenant/register', response_data)

        logger.error("Something went wrong!")
        print("Something went wrong!")
        
        if request.content_type == "application/json":
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return render(request, 'authentication/tenant_register.html', {"errors": serializer.errors})






def create_index_for_tenant(tenant_name):
    blog_document = BlogDocument.for_tenant(tenant_name)

    # Create the index
    blog_document._index.create(ignore=400)

    print(f"Index {blog_document._index._name} created for tenant {tenant_name}")


    logger = logging.getLogger(__name__)


def index(request):
    context = "you are at public view"
    return JsonResponse({"msg": context})


@csrf_exempt
def dashboard(request):
    return render(request, 'saas-admin/dashboard.html')


@csrf_exempt
def saas_login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            if user.is_staff and user.tenant is None:
                login(request, user) 
                if request.GET.get('api') == 'true':
                    # return JsonResponse()
                    return TokenObtainPairView.as_view()(request)
                return redirect('/saas/dashboard')
            else:
                return HttpResponse("You must be a superadmin and have no Hospital associated.", status=403)
        else:
            return HttpResponse("Invalid credentials.", status=400)
    return render(request, 'saas-admin/auth/login.html')



from django.contrib.auth import logout

def saas_logout(request):
    logout(request)
    return redirect('/saas/login')

class TenantListView(generics.ListCreateAPIView):
    serializer_class = TenantSerializer
    permission_classes = [IsGlobalSuperAdmin]

    def get_queryset(self):
        return Tenant.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse(serializer.data, safe=False)
        else:
            return render(request, 'saas-admin/tenants.html', {'tenants': serializer.data})


class DomainListView(generics.ListCreateAPIView):
    serializer_class = DomainSerializer
    permission_classes = [IsGlobalSuperAdmin]

    def get_queryset(self):
        return Domain.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse(serializer.data, safe=False)
        else:
            return render(request, 'saas-admin/domains.html', {'tenants': serializer.data})







@csrf_exempt
def update_domain(request, pk):
    try:
        domain = Domain.objects.get(pk=pk)
    except Domain.DoesNotExist:
        return HttpResponse("Domain not found.", status=404)

    if request.method == 'POST':
        data = {
            'domain': request.POST.get('domain'),
            'custom_domain_url': request.POST.get('custom_domain_url')
        }
        serializer = DomainSerializer(domain, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api')=='true':
                return JsonResponse({'status':"success",'data': serializer.data})
            return redirect('/saas/domains')
        else:
            return render(request, 'saas-admin/domains.html', {'form': serializer.errors, 'tenants': Domain.objects.all()})
    else:
        serializer = DomainSerializer(domain)
    
    return render(request, 'saas-admin/domains.html', {'form': serializer.data, 'tenants': Domain.objects.all()})



class CustomUserListView(generics.ListCreateAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsGlobalSuperAdmin]

    def get_queryset(self):
        return CustomUser.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse(serializer.data, safe=False)  # this i changes to false
        else:
            return render(request, 'saas-admin/users.html', {'tenants': serializer.data})
    # for the super admin (saas login) end






class CheckTenant(APIView):
    def get(self, request):
        username = request.query_params.get("username", None)
        print("Checking if the tenant exists!")
        if Tenant.objects.filter(schema_name=username).exists():
            return JsonResponse({"msg": True}, status=status.HTTP_200_OK)

        return JsonResponse({"msg": False}, status=status.HTTP_404_NOT_FOUND)




@csrf_exempt
def theme_setting(request):
    return render(request, 'saas-admin/settings/theme-setting.html')