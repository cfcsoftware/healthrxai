from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from clients.models import UserRole
from .serializers import *
from clients.serializers import *
from .models import *
from django.db import IntegrityError
from django.template.response import TemplateResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.db import transaction
from django.db.utils import IntegrityError
from django.contrib import messages
from saas_admin.middleware import permission_required
import logging
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)





# Staff Management #
@permission_required('staff-list')
def employee_list(request):
    employees = Employee.objects.all()
    serializer = EmployeeSerializer(employees, many=True)
    if request.GET.get('api') == 'true':
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'staff_management/list.html',{"employees": serializer.data})



@permission_required('staff-add')
def employee_add(request):
    roles = Role.objects.exclude(id=1)
    serializer = RoleSerializer(roles, many=True)
    if request.GET.get('api') == 'true':
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    return render(request, 'staff_management/add.html',{"roles": serializer.data})


@csrf_exempt
@permission_required('staff-edit')
def employee_edit(request, id):
    # Check if API mode is enabled
    is_api_request = request.GET.get('api') == 'true'

    if request.method == 'GET':
        employee = get_object_or_404(Employee, id=id)
        serializer = EmployeeSerializer(employee)

        roles = Role.objects.exclude(id=1)
        role_serializer = RoleSerializer(roles, many=True)

        return render(request, 'staff_management/update.html', {"employee": serializer.data, "roles": role_serializer.data})

    
    if request.method == 'POST':  # Handle update
        try:
            employee = get_object_or_404(Employee, id=id)
            print('employee',employee)
            user = employee.user  # Get associated user
            print('user',user)
        except Employee.DoesNotExist:
            return JsonResponse({"error": "Employee not found"}, status=status.HTTP_404_NOT_FOUND)

        user_serializer = UserUpdateSerializer(user, data=request.POST, partial=True)
        
        if not user_serializer.is_valid():
            return JsonResponse({"error": user_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        try:
            with transaction.atomic():
                user = user_serializer.save()
                print("User updated successfully!", user.id)
                
                role_id = request.POST.get("role")
                
                if role_id:
                    try:
                        user_role = Role.objects.get(id=role_id)
                        UserRole.objects.update_or_create(user=user, defaults={"role": user_role})
                    except Role.DoesNotExist:
                        return JsonResponse({"error": "Invalid role ID"}, status=status.HTTP_400_BAD_REQUEST)
                
                employee_data = request.POST.copy()
                
                employee_data["user"] = user.id  # Ensure user ID is set properly
                employee_serializer = EmployeeCreateUpdateSerializer(employee, data=employee_data, partial=True)
                
                if employee_serializer.is_valid():
                    
                    employee_serializer.save()
                    if is_api_request:
                        return JsonResponse({"msg": "Employee updated successfully!", "data": employee_serializer.data}, status=status.HTTP_200_OK)
                    messages.success(request, "Employee updated successfully.")
                    return redirect('/staff/employee/list')
                
                return JsonResponse({"error": employee_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        except IntegrityError as e:
            print(f"Integrity error: {str(e)}")
            return JsonResponse({"error": "Conflict occurred during update."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            return JsonResponse({"error": "Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@csrf_exempt
@permission_required('staff-delete')
def employee_delete(request, id):
    employee = get_object_or_404(Employee, id=id)
    user = employee.user  # Get associated user

    try:
        with transaction.atomic():
            if user:
                user.delete()  # Delete the user associated with the employee
            employee.delete()  # Delete the employee record

        if request.GET.get('api') == 'true':
            return JsonResponse({'message': 'Employee deleted successfully.'}, status=status.HTTP_200_OK)

        messages.success(request, "Employee deleted successfully.")
        return redirect('/staff/employee/list')

    except Exception as e:
        if request.GET.get('api') == 'true':
            return JsonResponse({'error': 'Failed to delete employee.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        messages.error(request, "Failed to delete employee.")
        return redirect('/staff/employee/list')



@permission_required('staff-view')
def employee_view(request,id):
    employee = get_object_or_404(Employee, id=id)
    serializer = EmployeeSerializer(employee)
    
    
    return render(request, 'staff_management/view.html',{"employee": serializer.data})




class EmployeeRegister(APIView):
    def post(self, request):
        user_serializer = UserRegisterSerializer(
            data=request.data, context={"request": request}
        )
        if user_serializer.is_valid():
            try:
                with transaction.atomic(): 
                    # Create the user
                    user = user_serializer.save()
                    print("User created successfully!", user.id)  
                    role_id = request.data.get("role")
                    if not role_id:
                        return JsonResponse(
                            {"error": "Role ID is required"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )

                    try:
                        user_role = Role.objects.get(id=role_id)
                        UserRole.objects.create(user=user, role=user_role)
                    except Role.DoesNotExist:
                        return JsonResponse(
                            {"error": "Invalid role ID"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )
                        
                    # Generate staff_member_id
                    last_employee = Employee.objects.order_by('-id').first()
                    if last_employee and last_employee.staff_member_id:
                        last_id_str = ''.join(filter(str.isdigit, last_employee.staff_member_id))
                        new_id_str = str(int(last_id_str) + 1).zfill(5)
                        new_id = f"EMP{new_id_str}"
                    else:
                        new_id = "EMP00001"

                        
                    # Create employee record
                    employee_data = request.data.copy()
                    employee_data["user"] = user.id  
                    employee_data["staff_member_id"] = new_id  # Assign generated ID
                    
                    employee_serializer = EmployeeCreateUpdateSerializer(data=employee_data)
                    if employee_serializer.is_valid():
                        employee_serializer.save(user=user, tenant=request.tenant)
                        messages.success(request, "Employee added successfully.")
                        return redirect('/staff/employee/list')
                    
                    if request.GET.get('api') == 'true':
                        return JsonResponse(
                            {"msg": "User and Employee registered successfully!", "data": employee_serializer.data},
                            status=status.HTTP_201_CREATED,
                        )
                    else:
                        user.delete() 
                        return JsonResponse(
                            {"error": employee_serializer.errors},
                            status=status.HTTP_400_BAD_REQUEST,
                        )
            except IntegrityError as e:
                print(f"Integrity error: {str(e)}") 
                return JsonResponse(
                    {"error": "User with this email already exists."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            except Exception as e:
                print(f"Unexpected error: {str(e)}") 
                return JsonResponse(
                    {"error": "Something went wrong"},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                )
        print(f"User registration failed: {user_serializer.errors}") 
        return JsonResponse(
            {"error": user_serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )
    



