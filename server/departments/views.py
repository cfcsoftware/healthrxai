from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from saas_admin.middleware import permission_required
from users.models import Tenant
from clients.serializers import UserRegisterSerializer
from .models import Department
from .serializers import DepartmentSerializer, DepartmentCreateUpdateSerializer
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from django.template.response import TemplateResponse
from django.contrib.auth.models import User
from django.http import JsonResponse

from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from icecream import ic
Users = get_user_model()

logger = logging.getLogger(__name__)

@csrf_exempt
@permission_required('department-edit')
def department_edit(request, pk):
    if User.is_authenticated:
        ic('User is authenticated')
    else:
        ic('User is not authenticated')    
    department = get_object_or_404(Department, pk=pk)
    if request.method == 'POST':
        ic(request.POST)
        form = DepartmentSerializer(department, data=request.POST)
        ic(form)
        if form.is_valid():
            form.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'msg': 'Department updated successfully!', 'data': form.data}, status=status.HTTP_200_OK)
            return redirect('/departments/department/')
    else:
        form = DepartmentSerializer(department)
    return render(request, 'departments/list.html', {'form': form})



@csrf_exempt
@permission_required('department-delete')
def department_delete(request, pk):
    if User.is_authenticated:
        ic('User is authenticated')
    else:
        ic('User is not authenticated')
        return redirect('/login')       
    department = get_object_or_404(Department, pk=pk)
    if request.method == 'POST':
        department.delete()        
        if request.GET.get('api') == 'true':
            return JsonResponse({'msg': 'Departement deleted successfully!'}, status=200)
        return redirect('/departments/department/')    
    return TemplateResponse(request, 'departments/list.html', {'error': 'Invalid request method'})





@permission_required('department-view')
def department_view(request,id):
    return render(request, 'departments/view.html')





class DepartmentListView(APIView):
    
    # @permission_required('department-list')
    def get(self, request):
        departments = Department.objects.all()
        if request.query_params.get('api', 'false').lower() == 'true':
            # Return data in JSON format for API requests
            serializer = DepartmentSerializer(departments, many=True)
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return TemplateResponse(request, 'departments/list.html', {'departments': departments})



class DepartmentCreateView(APIView):
    
    # @permission_required('department-add')
    def get(self, request):
        # Proceed with rendering the template or returning the response
        if request.accepts('text/html'):
            print('HTML response accepted')
            return TemplateResponse(request, 'departments/add.html', {})
        return JsonResponse({"msg": "HTML response not accepted."}, status=status.HTTP_406_NOT_ACCEPTABLE)

    
    # @permission_required('department-add')
    def post(self, request):
        user_id = request.session.get('user_id')
        tenant_id = request.session.get('tenant_id')
        print('User ID:', user_id)
        print('Tenant ID:', tenant_id)
        if user_id:
            try:
                user = User.objects.get(id=user_id)
                print('User:', user)
                request.user = user
                print('Request User:', request.user)
            except User.DoesNotExist:
                return JsonResponse({"error": "User not found in session"}, status=status.HTTP_401_UNAUTHORIZED)
        
        if not request.user.is_authenticated:
            print('User is not authenticated')
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = DepartmentCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # Save Department with user and tenant
                serializer.save(tenant=request.tenant)
                if request.GET.get('api') == 'true':
                    logger.info("Fetching departments for the authenticated user and tenant.")
                    return JsonResponse({"msg": "Department added successfully!"}, status=status.HTTP_201_CREATED)
                
                print("Department added successfully!")
                return redirect('/departments/department')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class DepartmentManagementView(APIView):
    
    def get(self, request, department_id):
        try:
            department = Department.objects.get(id=department_id, tenant=request.tenant)
            serializer = DepartmentSerializer(department)
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        except Department.DoesNotExist:
            return JsonResponse({"msg": "Department not found."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = DepartmentCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(tenant=request.tenant)
            return JsonResponse({"msg": "Department added successfully!"}, status=status.HTTP_201_CREATED)
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, department_id):
        try:
            department = Department.objects.get(id=department_id, tenant=request.tenant)
            serializer = DepartmentCreateUpdateSerializer(department, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({"msg": "Department updated successfully!"}, status=status.HTTP_200_OK)
            return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Department.DoesNotExist:
            return JsonResponse({"msg": "Department not found."}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, department_id):
        try:
            department = Department.objects.get(id=department_id, tenant=request.tenant)
            department.delete()
            return JsonResponse({"msg": "Department deleted successfully!"}, status=status.HTTP_200_OK)
        except Department.DoesNotExist:
            return JsonResponse({"msg": "Department not found."}, status=status.HTTP_404_NOT_FOUND)


