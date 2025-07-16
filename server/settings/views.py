from .serializers import *
from saas_admin.utils import *
from icecream import ic
from staff_management.models import Employee
from users.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
from .models import Bed
from .serializers import BedSerializer
import json
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse
from django.contrib.auth import get_user_model, logout
import logging
User = get_user_model()

logger = logging.getLogger(__name__)





def general_setting(request):
        
    user_id = request.session.get('user_id')
    print('User ID:', user_id)
    user = User.objects.get(id=user_id)
    print('User:', user)
    request.user = user
    print('Request User:', request.user)

    if not request.user.is_authenticated:
        return redirect('/login')
    else:
        
        if request.GET.get('api') == 'true':
            return JsonResponse({"message": 'General Setting Page'}, status=status.HTTP_200_OK)
        
        return TemplateResponse(request, 'settings/general-settings.html', {})
    

    
    
def blood_bank_setting(request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            
            if request.GET.get('api') == 'true':
                return JsonResponse({"message": 'Blood Bank Setting Page'}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'settings/blood-bank-settings.html', {})
    



####################### Bed Setting ###########################


def bed_setting(request):        
    user_id = request.session.get('user_id')
    user = User.objects.get(id=user_id)
    request.user = user
    
    if not request.user.is_authenticated:
        return redirect('/login')
    else: 
        try:
            beds = Bed.objects.all()
            serializer = BedSerializer(beds, many=True)
            ic(serializer.data, "Bed List Data")
            if request.GET.get('api') == 'true':
                return JsonResponse(serializer.data, status=status.HTTP_200_OK, safe=False)
            return TemplateResponse(request, 'settings/bed-settings.html', {'beds': serializer.data})
        
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

@csrf_exempt
def bed_setting_add(request):
    
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except Exception:
            data = request.POST.dict() if hasattr(request.POST, 'dict') else dict(request.POST)
        
        serializer = BedSerializer(data=data)
        if serializer.is_valid():
            serializer.save(tenant=request.tenant)
            if request.GET.get('api') == 'true':
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            return redirect('/setting/bed')
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def bed_setting_update(request, pk):
    try:
        bed = Bed.objects.get(pk=pk)
    except Bed.DoesNotExist:
        return JsonResponse({'message': 'Bed not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
        except Exception:
            data = request.POST.dict() if hasattr(request.POST, 'dict') else dict(request.POST)
        serializer = BedSerializer(bed, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            return redirect('/setting/bed')
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@csrf_exempt
def bed_setting_delete(request, pk):
    try:
        bed = Bed.objects.get(pk=pk)
    except Bed.DoesNotExist:
        return JsonResponse({'message': 'Bed not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        bed.delete()
        if request.GET.get('api') == 'true':
            return JsonResponse({'message': 'Bed deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        return redirect('/setting/bed')
    return JsonResponse({'message': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


####################### Bed Setting ###########################









@csrf_exempt
def profile(request):
    if request.method == 'GET':
        user_id = request.session.get('user_id')
        # session = (dict(request.session))
        # print('Session Data:', session)
        print('User ID:', user_id)
        if not user_id:
            return JsonResponse({'error': 'User ID not found in request.'}, status=404)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found.'}, status=404)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)

        role_id = request.session.get('role_id')
        print('Role ID:', role_id)
        try:
            if role_id == 1:
                if not request.user.id:
                    return JsonResponse({'error': 'User ID not found in request.'}, status=404)
                try:
                    data = CustomUser.objects.get(id=request.user.id)
                except CustomUser.DoesNotExist:
                    return JsonResponse({'error': 'CustomUser not found.'}, status=404)
                # employee_data = CustomUserSerializer(data)  # Removed unused variable
            else:
                try:
                    data = Employee.objects.filter(user=request.user, role_id=role_id).first()
                    if not data:
                        return JsonResponse({'error': 'Employee not found for this user.'}, status=404)

                except Employee.DoesNotExist:
                    return JsonResponse({'error': 'Employee not found.'}, status=404)
                # employee_data = EmployeeSerializer(data)  # Removed unused variable
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

        if request.GET.get('api') == 'true':
            return JsonResponse({'message': 'Profile data fetched successfully.'}, status=200)
        return TemplateResponse(request, 'profile.html', {'data': request.user})

    elif request.method == 'POST':
        post_data = request.POST

        user_id = request.session.get('user_id')
        # print('User ID:', user_id)
        if not user_id:
            return JsonResponse({'error': 'User ID not found in request.'}, status=404)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found.'}, status=404)
        request.user = user

        languages = request.POST.get('languages', '')
        services = request.POST.get('services', '')
        expertise = request.POST.get('expertise', '')
        service_location = request.POST.get('service_location', '')


        languages_list = [lang.strip() for lang in languages.split(',') if lang.strip()]
        services_list = [srv.strip() for srv in services.split(',') if srv.strip()]
        expertise_list = [exp.strip() for exp in expertise.split(',') if exp.strip()]
        service_location_list = [loc.strip() for loc in service_location.split(',') if loc.strip()]
        role_id = request.session.get('role_id')
        if role_id == 1:
            if not request.user.id:
                return JsonResponse({'error': 'User ID not found in request.'}, status=404)
            try:
                user = CustomUser.objects.get(id=request.user.id)
            except CustomUser.DoesNotExist:
                return JsonResponse({'error': 'CustomUser not found.'}, status=404)
            obj = user
        else:
            try:
                employee = Employee.objects.filter(user=request.user, role_id=role_id).first()
            except Employee.DoesNotExist:
                return JsonResponse({'error': 'Employee not found.'}, status=404)
            obj = employee

        # obj.name = post_data.get('name')
        obj.username = post_data.get('username', '')
        obj.email = post_data.get('email')
        obj.phone = post_data.get('phone', '')
        dob_value = post_data.get('dob', '').strip()
        obj.dob = dob_value if dob_value else None
        obj.gender = post_data.get('gender')
        obj.address = post_data.get('address', '')
        obj.city = post_data.get('city', '')
        obj.state = post_data.get('state', '')
        obj.zip_code = post_data.get('zip_code', '')
        obj.aadhar_no = post_data.get('aadhar_no', '')
        obj.pan_no = post_data.get('pan_no', '')
        obj.bank_name = post_data.get('bank_name', '')
        obj.account_no = post_data.get('account_no', '')
        obj.account_holder_name = post_data.get('account_holder_name', '')
        obj.ifsc_code = post_data.get('ifsc_code', '')
        obj.upi_id = post_data.get('upi_id', '')
        obj.blood_group = post_data.get('blood_group', '')
        obj.height = post_data.get('height', '')
        obj.weight = post_data.get('weight', '')
        obj.designation = post_data.get('designation', '')
        obj.other1 = post_data.get('other1', '')
        obj.other2 = post_data.get('other2', '')

        obj.languages = languages_list
        obj.services = services_list
        obj.expertise = expertise_list
        obj.service_location = service_location_list

        # File uploads
        # if 'profile_image' in request.FILES:
        #     obj.profile_image = request.FILES['profile_image']
        # if 'aadhar_front_image' in request.FILES:
        #     obj.aadhar_front_image = request.FILES['aadhar_front_image']
        # if 'aadhar_back_image' in request.FILES:
        #     obj.aadhar_back_image = request.FILES['aadhar_back_image']
        # if 'pan_image' in request.FILES:
        #     obj.pan_image = request.FILES['pan_image']
    
        profile_image = request.FILES.get('profile_image', None)
        if profile_image:
            file_name = profile_image.name.replace(" ", "_")
            folder = "user_data"
            file_url = upload_file_to_vps(profile_image, file_name, folder)
            obj.profile_image = file_url if file_url else None
            
        logo = request.FILES.get('logo', None)
        if logo:
            file_name = logo.name.replace(" ", "_")
            folder = "user_data"
            file_url = upload_file_to_vps(logo, file_name, folder)
            obj.logo = file_url if file_url else None
            
        aadhar_front_image = request.FILES.get('aadhar_front_image', None)
        if aadhar_front_image:
            file_name = aadhar_front_image.name.replace(" ", "_")
            folder = "user_data"
            file_url = upload_file_to_vps(aadhar_front_image, file_name, folder)
            obj.aadhar_front_image = file_url if file_url else None

        aadhar_back_image = request.FILES.get('aadhar_back_image', None)
        if aadhar_back_image:
            file_name = aadhar_back_image.name.replace(" ", "_")
            folder = "user_data"
            file_url = upload_file_to_vps(aadhar_back_image, file_name, folder)
            obj.aadhar_back_image = file_url if file_url else None

        pan_image = request.FILES.get('pan_image', None)
        if pan_image:
            file_name = pan_image.name.replace(" ", "_")
            folder = "user_data"
            file_url = upload_file_to_vps(pan_image, file_name, folder)
            obj.pan_image = file_url if file_url else None



        old_password = post_data.get('old_password')
        new_password = post_data.get('new_password')
        confirm_password = post_data.get('confirm_password')
        if new_password and new_password == confirm_password:
            if role_id == 1 and user.check_password(old_password):
                user.set_password(new_password)
            elif role_id != 1 and hasattr(obj, 'user') and obj.user.check_password(old_password):
                obj.user.set_password(new_password)

        obj.save()

        if request.GET.get('api') == 'true':
            return JsonResponse({"message": 'Profile updated successfully'}, status=200)
        return redirect('/setting/user-profile')

    return JsonResponse({'error': 'Method not allowed'}, status=405)





@csrf_exempt
def change_password(request):
    if request.user.is_authenticated:
        ic('User is authenticated')
        if request.method == 'POST':
            ic(request.POST)
            new_password = request.POST.get('new_password')
            confirm_password = request.POST.get('confirm_password') 
            if new_password != confirm_password:
                return JsonResponse({'error': 'Passwords do not match, Please go back and try again'}, status=400)
            if not new_password:
                return JsonResponse({'error': 'Passwords do not match, Please go back and try again'}, status=400)
            try:
                validate_password(new_password, user=request.user)
                if new_password == request.user.password:
                    return JsonResponse({'error': 'Dont use your old password, Please go back and enter new password'}, status=400)

                request.user.password = make_password(new_password)
                # ic(request.user.password)
                request.user.save()
                logout(request)

                if request.GET.get('api') == 'true':
                    return JsonResponse({'message': 'Password successfully updated, User Logged out.'}, status=200)
                return redirect('/login')

            except ValidationError as e:
                return JsonResponse({'error': e.messages}, status=400)
        return TemplateResponse(request, 'settings/my-profile.html', {'user': request.user})
    else:
        if request.GET.get('api') == 'true':
            return JsonResponse({'error': 'User not authenticated'}, status=401)
        return redirect('/')
    



@csrf_exempt
def upload_file(request):
    try:
        file = request.FILES.get('file', None)
        if file:
            file_name = file.name.replace(" ", "_")
            folder = "reports"
            public_url = upload_file_to_vps(file, file_name, folder)
            return JsonResponse({"status": "success", "message": "File uploaded successfully.", "public_url": public_url})
        else:
            return JsonResponse({"status": "error", "message": "No file provided."}, status=400)
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=400)
    
    
    
    
    
from users.serializers import GetLogoSerializer

def get_hospital_logo(request):
    if request.method == 'GET':
        logo_qs = CustomUser.objects.filter(is_superuser=True, is_tenant_admin=True, tenant=request.tenant)
        logo_data = GetLogoSerializer(logo_qs, many=True).data
        print("logo_data", logo_data)
        if request.GET.get('api') == 'true':
            return JsonResponse({"logo_url": logo_data})
        # return render(request, '.html',{logo_data})