"""
This module defines API views for handling user and blog operations in a multi-tenant environment.

Views:
1. `index(request)`:
    - Endpoint for a basic view that returns a JSON response with a message indicating the current tenant's context.

2. `UserRegister(APIView)`:
    - Handles user registration.
    - Method: `POST`
    - Receives user registration data, validates it using `UserRegisterSerializer`, and creates a new user if valid.
    - Returns a success message or error details based on the result of the operation.

3. `UserLoginView(APIView)`:
    - Handles user authentication.
    - Method: `POST`
    - Receives email and password, and uses `TenantEmailBackend` for authentication.
    - Returns an authentication token if successful, or an error message if authentication fails.
    - Differentiates between tenant users and tenant admins.

4. BlogView(APIView)`:
    - Manages blog-related operations.
    - Method: `POST`:
        - Creates a new blog post associated with the current user and tenant.
        - Also adds blog to specific elastic search index
    - Method: `GET`:
        - Retrieves blog posts. Allows filtering by `blog_id` and user.
    - Method: `PATCH`:
        - Updates a blog post. Allows partial updates and ensures the operation is scoped to the current user or tenant admin.
    - Method: `DELETE`:
        - Deletes a blog post identified by `blog_id`. Ensures the deletion is scoped to the current user or tenant admin.

5. `TenantView(APIView)`:
    - Manages tenant-specific user operations.
    - Method: `GET`:
        - Retrieves user profiles for tenant admins. Allows filtering by `user_id`.
    - Method: `PATCH`:
        - Updates user profiles. Allows partial updates and is restricted to tenant admins.
    - Method: `DELETE`:
        - Deletes a user profile identified by `user_id`. Ensures the operation is performed by a tenant admin.

6. `FetchAllBlogs(APIView)`:
    - Method: `GET`:
    - Simply fetches all blogs as per the tenant.


Dependencies:
- `logging` for logging messages and errors.
- `JsonResponse` from `django.http` for standard JSON responses.
- `APIView`, `Response`, `status`, and `filters` from `rest_framework` for API views and responses.
- `TenantEmailBackend` for custom authentication backend.
- `get_tokens_for_user` for generating authentication tokens.
- `IsTenantAdmin` from `custom_permissions` for custom permission handling.
- `swagger_auto_schema` and `openapi` from `drf_yasg` for API documentation.
- `IsAuthenticated` for securing views.
- `UserRegisterSerializer`, `UserLoginSerializer`, `BlogSerializer`, `UserSerializer` from `serializers` for data validation and serialization.
- `UserProfile`, `Blog` models for user and blog data management.

This file sets up the API endpoints for user and blog management in a multi-tenant system and includes a commented-out search view for potential future use.
"""

import logging
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from rest_framework import status

from saas_admin.middleware import permission_required
from .serializers import *
from .models import UserProfile,  Blog
from users.models import CustomUser

from users.auth_backends import TenantEmailBackend
from .helpers import get_tokens_for_user
from .custom_permissions import IsTenantAdmin, IsTenantAdminOrIsUserPartOfTenant
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from search.documents import BlogDocument
from .models import Tenant
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from appointments_list.models import Appointment  
from patients.models import Patient 
from staff_management.models import Employee
from staff_management.serializers import EmployeeSerializer
from django.contrib.auth import login, authenticate
from collections import defaultdict
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login as auth_login
from django.contrib import messages
from .models import Role, UserRole, RolePermission
from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)


# def index(request):
#     context = f"you are at {request.tenant} view"
#     return JsonResponse({"msg": context})




# for roles and  permissions




@permission_required('role-list')
def role_list(request):
    if request.method == 'GET':
        roles = Role.objects.all()
        serializer = RoleSerializer(roles, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        return TemplateResponse(request, 'role-permission/role/list.html', {'all_roles': serializer.data})


@csrf_exempt
@permission_required('role-add')
def role_create(request):
    if request.method == 'POST':
        # Check if the role already exists
        role_name = request.POST.get("name")
        if Role.objects.filter(name=role_name).exists():
            return JsonResponse({"error": f"Role {role_name} already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = RoleSerializer(data=request.POST)
        if serializer.is_valid():
            role = serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": f"Role {role.name} created successfully"}, status=status.HTTP_201_CREATED)
            return redirect('/roles/list')
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@permission_required('role-edit')
def role_update(request, pk):
    # Fetch the role object
    role = get_object_or_404(Role, pk=pk)

    if request.method == 'POST':
        # print("request.POST:", request.POST)
        role_name = request.POST.get('name')
        # print("role_name:", role_name)
        if role_name:
            role.name = role_name
            print("role:", role)
            role.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": f"Role {role.name} updated successfully"}, status=status.HTTP_200_OK)
            
            return redirect('role-list')  # Redirect to role list page after update
        else:
            return JsonResponse({"error": "Role name is required"}, status=400)

    return render(request, 'role-permission/role/update.html', {'role': role})



@csrf_exempt
@permission_required('role-delete')
def role_delete(request, pk):
    # Fetch the role object
    role = get_object_or_404(Role, pk=pk)

    if request.method == 'POST':
        role.delete()
        if request.GET.get('api') == 'true':
            return JsonResponse({"msg": "Role deleted successfully"}, status=status.HTTP_200_OK)        
        return redirect('role-list')
    return render(request, 'role-permission/role/list.html', {"msg": "Role deletion failed"})


@csrf_exempt
@permission_required('permission-list')
def permission_list(request):
    if request.method == 'GET':
        permissions = Permission.objects.all()
        serializer = PermissionSerializer(permissions, many=True)
        if request.GET.get('api') == 'true':        
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        return TemplateResponse(request, 'role-permission/permission/list.html', {'all_permissions': serializer.data})
    


@csrf_exempt
@permission_required('permission-add')
def permission_create(request):
    if request.method == 'POST':
        # Check if the permission already exists
        permission_name = request.POST.get("code")
        if Permission.objects.filter(code=permission_name).exists():
            return JsonResponse({"error": f"Permission Code {permission_name} already exists"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = PermissionSerializer(data=request.POST)
        if serializer.is_valid():
            permission = serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": f"Permission {permission.code} created successfully"}, status=status.HTTP_201_CREATED)
            return redirect('/permissions/list')
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return TemplateResponse(request, 'role-permission/permission/list.html', {"msg": f"Permission {permission.code} created successfully"})


@csrf_exempt
@permission_required('permission-edit')
def permission_update(request, pk):
    permission = get_object_or_404(Permission, pk=pk)
    if request.method == 'POST':
        serializer = PermissionSerializer(permission, data=request.POST, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": f"Permission {permission.code} updated successfully"}, status=status.HTTP_200_OK)
            return redirect('/permissions/list')
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@csrf_exempt
@permission_required('permission-delete')
def permission_delete(request, pk):
    permission = get_object_or_404(Permission, pk=pk)
    if request.method == 'POST':
        permission.delete()
        if request.GET.get('api') == 'true':
            return JsonResponse({"msg": f"Permission {permission.code} deleted successfully"}, status=status.HTTP_200_OK)
        return redirect('/permissions/list')
    return JsonResponse({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class AssignRoleToUserView(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        try:
            user = CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        role_id = request.data.get("role_id")
        try:
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Check if the role is already assigned to the user
        if UserRole.objects.filter(user=user, role=role).exists():
            return JsonResponse({"msg": f"Role {role.name} is already assigned to user {user.email}"}, status=status.HTTP_200_OK)

        UserRole.objects.create(user=user, role=role)
        return JsonResponse({"msg": f"Role {role.name} assigned to user {user.email}"}, status=status.HTTP_200_OK)
    

class AssignPermissionsToRoleView(APIView):
    
    # @permission_required('role-permission-assign-add')
    def get(self, request):
        # Fetch all permissions
        permissions = Permission.objects.all()
        roles = Role.objects.all()

        # Group permissions by name and list all associated permissions
        module_permissions = {}
        for permission in permissions:
            permission_name = permission.name
            if permission_name not in module_permissions:
                module_permissions[permission_name] = []
            module_permissions[permission_name].append({
                "id": permission.id,
                "code": permission.code
            })


        # Serialize roles
        role_serializer = RoleSerializer(roles, many=True)

        if request.GET.get('api') == 'true':
            # Return structured data for API
            return JsonResponse({
                "roles": role_serializer.data,
                "permissions": module_permissions
            }, status=status.HTTP_200_OK)

        # print(module_permissions)
        return TemplateResponse(request, 'role-permission/add.html', {
            "roles": role_serializer.data,
            "permissions": module_permissions
        })
    
    # @permission_required('role-permission-assign-list')
    def post(self, request):
        role_id = request.data.get("role_id")
        permission_ids = request.data.getlist("permission_id[]")

        try:
            # Fetch the role by its ID
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Validate the provided permission IDs
        permissions = Permission.objects.filter(id__in=permission_ids)

        if not permissions.exists():
            return JsonResponse({"error": "No valid permissions found."}, status=status.HTTP_400_BAD_REQUEST)

        # Assign permissions to the role
        for permission in permissions:
            RolePermission.objects.get_or_create(role=role, permission=permission)

        if request.GET.get('api') == 'true':
            return JsonResponse(
                        {"msg": "Permissions assigned to role successfully."},
                        status=status.HTTP_200_OK,
                    )
        return redirect('/role/permissions/')
        # return TemplateResponse(request, 'role-permission/list.html', {"role": role.name, "permissions": permissions})
        



class ListRolePermissionsView(APIView):
    
    # @permission_required('role-permission-assign-list')
    def get(self, request, role_id=None):
        if role_id:
            try:
                # Fetch the specific role
                role = Role.objects.get(id=role_id)
            except Role.DoesNotExist:
                return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

            # Fetch permissions for the specific role
            role_permissions = RolePermission.objects.filter(role=role).select_related("permission")

            permissions = [
                {"id": rp.permission.id, "name": rp.permission.name, "code": rp.permission.code}
                for rp in role_permissions
            ]

            if request.GET.get('api') == 'true':
                return JsonResponse({"role": role.name, "permissions": permissions}, status=status.HTTP_200_OK)
            return TemplateResponse( request,'role-permission/list.html',{"role": role.name, "permissions": permissions}
            )
        else:
            # Fetch all roles with their permissions
            roles = Role.objects.all()
            all_roles_permissions = []

            for role in roles:
                role_permissions = RolePermission.objects.filter(role=role).select_related("permission")
                permissions = [
                    {"id": rp.permission.id, "name": rp.permission.name, "code": rp.permission.code}
                    for rp in role_permissions
                ]
                all_roles_permissions.append({"id":role.id,"role": role.name,"permissions": permissions})
            # print(all_roles_permissions)
            if request.GET.get('api') == 'true':
                return JsonResponse(all_roles_permissions, status=status.HTTP_200_OK)
            return TemplateResponse(request,'role-permission/list.html',{"all_roles_permissions": all_roles_permissions})





class AssignRolePermissionsView(APIView):  
    def get(self, request, role_id):
        try:
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Fetch all permissions and the ones assigned to this role
        permissions = Permission.objects.all()
        all_roles = Role.objects.all()
        assigned_permissions = Permission.objects.filter(rolepermission__role=role)

        # Group permissions by name and indicate whether they are assigned
        module_permissions = {}
        for permission in permissions:
            permission_name = permission.name
            if permission_name not in module_permissions:
                module_permissions[permission_name] = []
            module_permissions[permission_name].append({
                "id": permission.id,
                "code": permission.code,
                "assigned": permission in assigned_permissions
            })

        # Serialize the role
        role_serializer = RoleSerializer(role)
        all_role_serializer = RoleSerializer(all_roles, many=True)

        if request.GET.get('api') == 'true':
            return JsonResponse({
                                "role": role_serializer.data,
                                "permissions": module_permissions
                            }, status=status.HTTP_200_OK)

        # print('roles')
        # print(role_serializer.data)
        # print('permissions')
        # print(module_permissions)
        return TemplateResponse(request, 'role-permission/edit.html', {
            "role": role_serializer.data,
            "all_roles": all_role_serializer.data,
            "permissions": module_permissions
        })

    def post(self, request, role_id):
        # Fetch the role by its ID
        try:
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Get the new permissions from the request
        permission_ids = request.data.get("permission_id[]", [])
        if not isinstance(permission_ids, list):
            permission_ids = [permission_ids]

        # Validate the provided permission IDs
        permissions = Permission.objects.filter(id__in=permission_ids)

        if not permissions.exists():
            return JsonResponse({"error": "No valid permissions found."}, status=status.HTTP_400_BAD_REQUEST)

        # Clear existing permissions for the role
        RolePermission.objects.filter(role=role).delete()

        # Assign new permissions to the role
        for permission in permissions:
            RolePermission.objects.get_or_create(role=role, permission=permission)

        if request.GET.get('api') == 'true':
            return JsonResponse(
                {"msg": "Permissions updated for role successfully."},
                status=status.HTTP_200_OK
            )

        return redirect('/role/permissions/')



class UpdateRolePermissionsView(APIView):
        
    def get(self, request, role_id):
        try:
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Fetch all permissions and the ones assigned to this role
        permissions = Permission.objects.all()
        all_roles = Role.objects.all()
        assigned_permissions = Permission.objects.filter(rolepermission__role=role)

        # Group permissions by name and indicate whether they are assigned
        module_permissions = {}
        for permission in permissions:
            permission_name = permission.name
            if permission_name not in module_permissions:
                module_permissions[permission_name] = []
            module_permissions[permission_name].append({
                "id": permission.id,
                "code": permission.code,
                "assigned": permission in assigned_permissions
            })

        # Serialize the role
        role_serializer = RoleSerializer(role)
        all_role_serializer = RoleSerializer(all_roles, many=True)

        if request.GET.get('api') == 'true':
            return JsonResponse({
                                "role": role_serializer.data,
                                "permissions": module_permissions
                            }, status=status.HTTP_200_OK)

        # print('roles')
        # print(role_serializer.data)
        # print('permissions')
        # print(module_permissions)
        return TemplateResponse(request, 'role-permission/edit.html', {
            "role": role_serializer.data,
            "all_roles": all_role_serializer.data,
            "permissions": module_permissions
        })



    def post(self, request, role_id):
        try:
            role = Role.objects.get(id=role_id)
        except Role.DoesNotExist:
            return JsonResponse({"error": "Role not found"}, status=status.HTTP_404_NOT_FOUND)

        # Get the new permissions from the request
        permission_ids = request.data.getlist("permission_id[]")  # getlist ensures multiple values are fetched
        if not permission_ids:
            return JsonResponse({"error": "No permissions selected."}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch the permissions objects based on the selected IDs
        permissions = Permission.objects.filter(id__in=permission_ids)

        if not permissions.exists():
            return JsonResponse({"error": "No valid permissions found."}, status=status.HTTP_400_BAD_REQUEST)

        # Clear existing permissions for the role
        RolePermission.objects.filter(role=role).delete()

        # Assign new permissions to the role
        for permission in permissions:
            RolePermission.objects.get_or_create(role=role, permission=permission)

        # Redirect or respond with a success message
        if request.GET.get('api') == 'true':
            return JsonResponse({"msg": "Permissions updated for role successfully."}, status=status.HTTP_200_OK)

        # Redirect after updating permissions
        return redirect('/role/permissions/')






def logout(request):
    """
    Log the user out and clear the session.
    """
    try:
        logger.info(f"Logging out user: {request.user}")
        request.session.flush()
        logger.info("User logged out successfully.")
        return HttpResponseRedirect('/login')
    except Exception as e:
        logger.error(f"Error during logout: {e}")
        return JsonResponse({"error": "Failed to log out."}, status=500)
    




class TotalPatients(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_tenant_admin:
            return JsonResponse(
                {"error": "You do not have permission to access this data."},
                status=403,
            )
        
        try:
            tenant_patients = Patient.objects.filter(tenant=request.tenant).count()
            logger.info(f"Total patients fetched for tenant {request.tenant.full_name}.")
            return JsonResponse(
                {"total_patients": tenant_patients},
                status=200,
            )
        except Exception as e:
            logger.error(f"Error fetching total patients: {e}")
            return JsonResponse(
                {"error": {"error": f"{e}" }, "error": "Failed to fetch total patients."},
                status=500,
            )


class TotalAppointments(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_tenant_admin:
            return JsonResponse(
                {"error": "You do not have permission to access this data."},
                status=403,
            )

        try:
            tenant_appointments = Appointment.objects.filter(tenant=request.tenant).count()
            logger.info(f"Total appointments fetched for tenant {request.tenant.full_name}.")
            return JsonResponse(
                {"total_appointments": tenant_appointments},
                status=200,
            )
        except Exception as e:
            logger.error(f"Error fetching total appointments: {e}")
            return JsonResponse(
                {"error": "Failed to fetch total appointments."},
                status=500,
            )


class TotalDoctors(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_tenant_admin:
            return JsonResponse(
                {"error": "You do not have permission to access this data."},
                status=403,
            )

        try:
            tenant_doctors = UserProfile.objects.filter(tenant=request.tenant).count()
            logger.info(f"Total doctors fetched for tenant {request.tenant.full_name}.")
            return JsonResponse(
                {"total_doctors": tenant_doctors},
                status=200,
            )
        except Exception as e:
            logger.error(f"Error fetching total doctors: {e}")
            return JsonResponse(
                {"error": "Failed to fetch total doctors."},
                status=500,
            )


def add_blog_to_index(request, blog):
    """View to add a blog to the tenant-specific index."""
    tenant_name = request.tenant.name
    # Get the tenant-specific document
    blog_document = BlogDocument.for_tenant(tenant_name)

    # Add the blog to Elasticsearch
    blog_document.update(blog)

    logger.info(f"New tanant '{tenant_name}' added to elastic search index.")
    return JsonResponse(
        {"status": "indexed", "tenant": tenant_name, "blog_title": blog.title}
    )


class UserRegister(APIView):
    def post(self, request):
        serializer = UserRegisterSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            logger.info("user created!")
            return JsonResponse(
                {"data": serializer.data, "msg": "User created successfully"},
                status=status.HTTP_201_CREATED,
            )

        logger.error(f"something went wrong {serializer.errors}")
        return JsonResponse(
            {"data": serializer.errors, "msg": "Something went wrong"},
            status=status.HTTP_400_BAD_REQUEST,
        )




class UserLoginView(APIView):
    def get(self, request):
        return TemplateResponse(request, "authentication/login.html", {})

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        password = serializer.data.get("password")
        
        # Authenticating the user using TenantEmailBackend
        is_user = TenantEmailBackend().authenticate(
            request, email=email, password=password, tenant=request.tenant
        )
        
        if is_user is not None:
            try:
                # Check if user is assigned to a role
                user_role = UserRole.objects.filter(user=is_user).select_related('role').first()
                role_id = user_role.role.id if user_role else None
                role_name = user_role.role.name if user_role else None
                print("role_name", role_name)
                
                employeeData = Employee.objects.filter(email=email).first()
                print("employeeData", employeeData)
                if not employeeData:
                    logger.warning(f"No employee data found for email: {email}")
                    employeeData = None
                else:
                    employeeData = EmployeeSerializer(employeeData).data

                # Check if the user has a profile (this could indicate it's a regular user)
                _ = UserProfile.objects.get(user=is_user)
                token = get_tokens_for_user(is_user)
                logger.info("Tenant user logged in!")
                
                # Store user details and token in the session
                request.session['user_id'] = is_user.id
                request.session['employee_id'] = employeeData.get('id') if employeeData else None
                request.session['email'] = is_user.email
                request.session['username'] = is_user.username
                request.session['access_token'] = token
                request.session['tenant_id'] = is_user.tenant.id
                request.session['is_tenant_admin'] = is_user.is_tenant_admin
                request.session['role_id'] = role_id
                request.session['role_name'] = role_name
                user_permissions = [permission.permission.code for permission in RolePermission.objects.filter(role_id=role_id)]
                request.session['user_permissions'] = user_permissions
                request.session['profile_image'] = is_user.profile_image if is_user.profile_image else None
                
                if request.query_params.get('api', 'false').lower() == 'true':
                    return JsonResponse(
                        {
                            "employeeData": employeeData if employeeData else None,
                            "username": is_user.username,
                            "employeeData": employeeData,
                            "msg": "User Logged in Successfully!",
                            "is_tenant_admin": is_user.is_tenant_admin,
                            "access_token": token,
                            "tenant_id": is_user.tenant.id,
                            "role_id": role_id,
                            "role_name": role_name,
                            "user_permissions": user_permissions,
                            "profile_image": is_user.profile_image if is_user.profile_image else None,
                        },
                        status=status.HTTP_200_OK,
                    )
                else:
                    return redirect('/dashboard')

            except UserProfile.DoesNotExist:
                logger.info("Checking if tenant admin is trying to login!")
                try:

                    # Check if user is assigned to a role or not....
                    user_role = UserRole.objects.filter(user=is_user).select_related('role').first()
                    role_id = user_role.role.id if user_role else None
                    role_name = user_role.role.name if user_role else None                    

                    _ = CustomUser.objects.get(email=is_user.email)
                    if is_user.is_tenant_admin:
                        logger.info("Tenant admin logged in!")
                        token = get_tokens_for_user(is_user)
                        
                        # Store tenant admin details and token in the session
                        request.session['user_id'] = is_user.id
                        request.session['email'] = is_user.email
                        request.session['username'] = is_user.username
                        request.session['access_token'] = token
                        request.session['is_tenant_admin'] = is_user.is_tenant_admin
                        request.session['tenant_id'] = is_user.tenant.id
                        request.session['role_id'] = role_id                        
                        request.session['role_name'] = role_name   
                        user_permissions = [permission.permission.code for permission in RolePermission.objects.filter(role_id=role_id)]
                        request.session['user_permissions'] = user_permissions   
                        request.session['profile_image'] = is_user.profile_image if is_user.profile_image else None                  

                        if request.query_params.get('api', 'false').lower() == 'true':
                            return JsonResponse(
                                {
                                    "email": str(is_user),
                                    "username": is_user.username,
                                    "msg": "Tenant admin Logged in Successfully!",
                                    "is_tenant_admin": is_user.is_tenant_admin,
                                    "tenant_id": is_user.tenant.id,
                                    "role_id": role_id,
                                    "role_name": role_name,
                                    "access_token": token,
                                    "user_permissions": user_permissions,
                                    "profile_image": is_user.profile_image if is_user.profile_image else None,
                                },
                                status=status.HTTP_200_OK,
                            )
                        else:
                            return redirect('/dashboard')
                except CustomUser.DoesNotExist as e:
                    logger.critical(f"User login went wrong {e}")
                    return JsonResponse(
                        {"msg": f"user {is_user} does not exist in this tenant!"},
                        status=status.HTTP_401_UNAUTHORIZED,
                    )

            return JsonResponse(
                {"msg": f"User {is_user} doesn't exist in this tenant!"},
                status=status.HTTP_404_NOT_FOUND,
            )

        logger.critical("Authentication failed!")
        if request.query_params.get('api') == 'true':
            return JsonResponse(
            {
                "data": serializer.errors,
                "msg": "Unfortunately, the credentials you are entering are not matching our records. "
                   "Please try again later or try resetting the credentials",
            },
            status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            # Render the login page with an error message for non-API requests
            messages.error(request, 'Unfortunately, the credentials you are entering are not matching our records.')
            return TemplateResponse(
                request,
                "authentication/login.html",
                {
                    "message": {
                        "error": "Unfortunately, the credentials you are entering are not matching our records. "
                                 "Please try again later or try resetting the credentials"
                    }
                }
            )



class TenantView(APIView):
    permission_classes = [IsTenantAdmin]

    def get(self, request):
        logger.info("Getting all user for tenant admin!")
        users = UserProfile.objects.all()
        users = Tenant.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user_obj = UserProfile.objects.get(user=request.user)
        except UserProfile.DoesNotExist:
            return JsonResponse(
                {"msg": f" {request.user} doesn't exists!"}, status=status.HTTP_200_OK
            )

        serializer = UserSerializer(user_obj)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)


class TenantManagementView(APIView):
    permission_classes = [IsAuthenticated, IsTenantAdminOrIsUserPartOfTenant]

    def get(self, request, user_id):
        try:
            logger.info("Getting user for tenant admin with user_id!")
            user_instance = UserProfile.objects.get(id=user_id)
        except UserProfile.DoesNotExist as e:
            logger.critical(
                f"Something went wrong while getting user with {user_id}: {e}"
            )
            return JsonResponse(
                {"msg": f"User with this {user_id} not found!"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = UserSerializer(user_instance)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request, user_id):
        try:
            if request.user.is_tenant_admin:
                logger.info("Getting user for tenant admin with user_id for patch!")
                user_instance = UserProfile.objects.get(id=user_id)
            else:
                logger.info("Getting user with user_id for patch!")
                user_instance = UserProfile.objects.get(user=request.user)

        except UserProfile.DoesNotExist as e:
            logger.critical(
                f"Something went wrong while getting user for patch with {user_id}: {e}"
            )
            return JsonResponse(
                {"msg": f"User with this {user_id} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = UserSerializer(user_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(
                {"msg": "User Updated Successfully!"}, status=status.HTTP_200_OK
            )

        return JsonResponse(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, user_id):
        try:
            if request.user.is_tenant_admin:
                logger.info("Getting user for tenant admin with user_id for delete!")
                user_instance = UserProfile.objects.get(id=user_id)
            else:
                logger.info("Getting user with user_id for delete!")
                user_instance = UserProfile.objects.get(user=request.user)

        except UserProfile.DoesNotExist as e:
            logger.critical(
                f"Something went wrong while getting user for delete with {user_id}: {e}"
            )
            return JsonResponse(
                {"msg": f"User with this {user_id} not found or already deleted"},
                status=status.HTTP_404_NOT_FOUND,
            )

        user_instance.delete()
        return JsonResponse(
            {"msg": "User Deleted Successfully!"}, status=status.HTTP_200_OK
        )



class BlogView(APIView):
    permission_classes = [IsAuthenticated, IsTenantAdminOrIsUserPartOfTenant]

    @swagger_auto_schema(
        request_body=BlogSerializer,
        responses={200: "Success", 400: "Bad Request"},
    )
    def post(self, request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            blog = serializer.save(user=request.user, tenant=request.tenant)
            logger.info("Blog added!")

            add_blog_to_index(request, blog)

            return JsonResponse(
                {"msg": "Blog added Successfully!", "blog_id": blog.id},
                status=status.HTTP_200_OK,
            )

        logger.error(f"something went wrong while adding blog {serializer.errors}")
        return JsonResponse(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )

    def get(self, request):

        logger.info("getting blogs with respect to tenant and user!")
        blogs = Blog.objects.filter(user=request.user)

        serializer = BlogSerializer(blogs, many=True)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)


class FetchAllBlogs(APIView):
    permission_classes = [IsAuthenticated, IsTenantAdminOrIsUserPartOfTenant]
    def get(self, request):

        logger.info("getting all blogs respect to their own tenant!")
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)



class BlogManagementView(APIView):
    permission_classes = [IsAuthenticated, IsTenantAdminOrIsUserPartOfTenant]

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "blog_id",
                openapi.IN_QUERY,
                description="Blog id",
                type=openapi.TYPE_INTEGER,
            )
        ],
        request_body=BlogSerializer,
        responses={200: "Success", 400: "Bad Request"},
    )
    def get(self, request, blog_id):
        try:
            if request.user.is_tenant_admin:
                logger.info(
                    "getting blog for admin with respect to their own tenant and blog_id!"
                )
                blog_instance = Blog.objects.get(id=blog_id)
            else:
                logger.info("getting blog with respect to tenant, blog id and user!")
                blog_instance = Blog.objects.get(id=blog_id, user=request.user)

        except Blog.DoesNotExist as e:
            logger.critical(f"Getting blog went wrong: {e}")
            return JsonResponse(
                {"msg": f"Blog with this {blog_id} not found!"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = BlogSerializer(blog_instance)
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request, blog_id):
        try:
            if request.user.is_tenant_admin:
                logger.info("Getting blog for admin to patch with respect to blog_id!")
                blog_instance = Blog.objects.get(id=blog_id)
            else:
                logger.info("Getting blog to patch with respect to blog_id and user!")
                blog_instance = Blog.objects.get(id=blog_id, user=request.user)
        except Blog.DoesNotExist as e:
            logger.critical(f"Getting blog during patch went wrong: {e}")
            return JsonResponse(
                {"msg": f"Blog with this {blog_id} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = BlogSerializer(blog_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save(user=request.user, tenant=request.tenant)
            return JsonResponse(
                {"msg": "Blog Updated Successfully!"}, status=status.HTTP_200_OK
            )

        logger.error(f"Getting blog during patch went wrong {serializer.errors}")
        return JsonResponse(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, blog_id):
        try:
            if request.user.is_tenant_admin:
                logger.info("Getting blog for admin to delete with respect to blog_id!")
                blog_instance = Blog.objects.get(id=blog_id)
            else:
                logger.info("Getting blog to delete with respect to blog_id and user!")
                blog_instance = Blog.objects.get(id=blog_id, user=request.user)

        except Blog.DoesNotExist as e:
            logger.critical(f"while deleting blog something went wrong {e}")
            return JsonResponse(
                {"msg": f"Blog with this {blog_id} not found or already deleted!"},
                status=status.HTTP_404_NOT_FOUND,
            )

        blog_instance.delete()
        logger.info("Blog Deleted!")
        return JsonResponse(
            {"msg": "Blog Deleted Successfully!"}, status=status.HTTP_200_OK
        )
