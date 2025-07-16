from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from saas_admin.middleware import permission_required
from users.models import Tenant
from clients.serializers import UserRegisterSerializer
from .models import *
from .serializers import *
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from django.template.response import TemplateResponse
from django.http import JsonResponse
from django.contrib import messages

from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from icecream import ic
Users = get_user_model()

logger = logging.getLogger(__name__)




@csrf_exempt
@permission_required('service-list')
def service_list(request):
        services = Service.objects.all().order_by('-updated_at')
        if request.GET.get('api') == 'true':
            serializer = ServiceSerializer(services, many=True)
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return TemplateResponse(request, 'services/list.html', {'services': services})
        

@csrf_exempt
@permission_required('service-add')
def service_add(request):
    user_id = request.session.get('user_id')
    tenant_id = request.session.get('tenant_id')
    print('User ID:', user_id)
    print('Tenant ID:', tenant_id)
    if user_id:
        try:
            user = get_user_model().objects.get(id=user_id)
            print('User:', user)
            request.user = user
            print('Request User:', request.user)
        except user.DoesNotExist:
            return JsonResponse({"error": "User not found in session"}, status=status.HTTP_401_UNAUTHORIZED)
    
    if not user.is_authenticated:
        print('User is not authenticated')
        return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = ServiceSerializer(data=request.POST)
    if serializer.is_valid():
        try:
            # Save Service with user and tenant
            serializer.save(tenant=request.tenant)
            if request.GET.get('api') == 'true':
                logger.info("Fetching services for the authenticated user and tenant.")
                return JsonResponse({"msg": "Service added successfully!"}, status=status.HTTP_201_CREATED)
            
            print("Service added successfully!")
            messages.success(request, "Service added successfully.")
            return redirect('/services')
        except IntegrityError as e:
            raise ValidationError({"error": str(e)})
    return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@permission_required('service-edit')
def service_update(request, pk):
    if get_user_model().is_authenticated:
        ic('User is authenticated')
    else:
        ic('User is not authenticated')    
    service = get_object_or_404(Service, pk=pk)
    if request.method == 'POST':
        ic(request.POST)
        form = ServiceSerializer(service, data=request.POST)
        ic(form)
        if form.is_valid():
            form.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'msg': 'Service updated successfully!', 'data': form.data}, status=status.HTTP_200_OK)
            messages.success(request, "Service updated successfully.")
            return redirect('/services')
    else:
        form = ServiceSerializer(service)
    return render(request, 'services/list.html', {'form': form})


@csrf_exempt
@permission_required('service-delete')
def service_delete(request, pk):
    if get_user_model().is_authenticated:
        ic('User is authenticated')
    else:
        ic('User is not authenticated')   
        return redirect('/login')       
    service = get_object_or_404(Service, pk=pk)
    if request.method == 'POST':
        service.delete()        
        if request.GET.get('api') == 'true':
            return JsonResponse({'msg': 'Service deleted successfully!'}, status=200)
        messages.error(request, "Service deleted successfully.")
        return redirect('/services')    
    return TemplateResponse(request, 'services/list.html', {'error': 'Invalid request method'})





def get_service_type_by_bill_type(request, bill_type):
    if request.method == 'GET':
        ic(bill_type)
        ic(request.method)
        try:
            services = Service.objects.filter(bill_type=bill_type)
            serializer = ServiceSerializer(services, many=True)
            ic(serializer.data)
            return JsonResponse(serializer.data, safe=False)
        except Service.DoesNotExist:
            return JsonResponse({'error': 'Service Type not found'}, status=404)
    return JsonResponse({'error': 'Invalid request method'}, status=400) 


def get_service_by_service_type(request, service_type):
    if request.method == 'GET':
        ic(service_type)
        ic(request.method)
        try:
            services = Service.objects.filter(service_type=service_type)
            serializer = ServiceSerializer(services, many=True)
            ic(serializer.data)
            return JsonResponse(serializer.data, safe=False)
        except Service.DoesNotExist:
            return JsonResponse({'error': 'Service not found'}, status=404)
    return JsonResponse({'error': 'Invalid request method'}, status=400)





from datetime import datetime
import io
import csv

@csrf_exempt
def upload_services_csv(request):
    if request.method == 'POST':
        csv_file = request.FILES.get('csv_file')
        if not csv_file or not csv_file.name.endswith('.csv'):
            messages.error(request, 'File is not CSV type.')
            return redirect('/services')
        try:
            decoded_file = csv_file.read().decode('utf-8')
            reader = csv.DictReader(io.StringIO(decoded_file))

            tenant = request.tenant  
            ic('tenant:', tenant)

            for row in reader:
                Service.objects.create(
                    bill_type=row.get('bill_type', '').strip(),
                    service_type=row.get('service_type', '').strip(),
                    name=row.get('name', '').strip(),
                    charge=row.get('charge', '').strip(),
                    tenant=tenant if tenant else None,
                )
            
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": "CSV file uploaded and data saved successfully."}, status=status.HTTP_201_CREATED)

            messages.success(request, 'CSV file uploaded and data saved successfully.')
        except Exception as e:
            messages.error(request, f'Error processing file: {str(e)}')
    return redirect('/services')
































# @csrf_exempt
# # @permission_required('service-type-list')
# def service_type_list(request):
#         service_types = Service.objects.all()
#         if request.GET.get('api', 'false').lower() == 'true':
#             # Return data in JSON format for API requests
#             serializer = ServiceSerializer(service_types, many=True)
#             return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
#         else:
#             return TemplateResponse(request, 'service_type/list.html', {'service_types': service_types})


# @csrf_exempt
#  # @permission_required('service-type-add')
# def service_type_add(request):
#     user_id = request.session.get('user_id')
#     tenant_id = request.session.get('tenant_id')
#     print('User ID:', user_id)
#     print('Tenant ID:', tenant_id)
#     if user_id:
#         try:
#             user = get_user_model().objects.get(id=user_id)
#             print('User:', user)
#             request.user = user
#             print('Request User:', request.user)
#         except user.DoesNotExist:
#             return JsonResponse({"error": "User not found in session"}, status=status.HTTP_401_UNAUTHORIZED)
    
#     if not request.user.is_authenticated:
#         print('User is not authenticated')
#         return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
#     serializer = ServiceSerializer(data=request.POST)
#     if serializer.is_valid():
#         try:
#             # Save Service with user and tenant
#             serializer.save(tenant=request.tenant)
#             if request.GET.get('api') == 'true':
#                 logger.info("Fetching service types for the authenticated user and tenant.")
#                 return JsonResponse({"msg": "Service Type added successfully!"}, status=status.HTTP_201_CREATED)
            
#             print("Service Type added successfully!")
#             return redirect('/services/type')
#         except IntegrityError as e:
#             raise ValidationError({"error": str(e)})
#     return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



# @csrf_exempt
# # @permission_required('service-type-edit')
# def service_type_update(request, pk):
#     if get_user_model().is_authenticated:
#         ic('User is authenticated')
#     else:
#         ic('User is not authenticated')    
#     service_type = get_object_or_404(Service, pk=pk)
#     if request.method == 'POST':
#         ic(request.POST)
#         form = ServiceSerializer(service_type, data=request.POST)
#         ic(form)
#         if form.is_valid():
#             form.save()
#             if request.GET.get('api') == 'true':
#                 return JsonResponse({'msg': 'Service type updated successfully!', 'data': form.data}, status=status.HTTP_200_OK)
#             return redirect('/services/type')
#     else:
#         form = ServiceSerializer(service_type)
#     return render(request, 'service_type/list.html', {'form': form})



# @csrf_exempt
# # @permission_required('service-type-delete')
# def service_type_delete(request, pk):
#     if get_user_model().is_authenticated:
#         ic('User is authenticated')
#     else:
#         ic('User is not authenticated')   
#         return redirect('/login')       
#     service_type = get_object_or_404(Service, pk=pk)
#     if request.method == 'POST':
#         service_type.delete()        
#         if request.GET.get('api') == 'true':
#             return JsonResponse({'msg': 'Service type deleted successfully!'}, status=200)
#         return redirect('/services/type')    
#     return TemplateResponse(request, 'service_type/list.html', {'error': 'Invalid request method'})



# # def get_service_by_type(request, types_id):
#     # if request.method == 'GET':
#     #     ic(types_id)
#     #     ic(request.method)
#     #     try:
#     #         services = Service.objects.filter(types_id=types_id)
#     #         serializer = ServiceSerializer(services, many=True)
#     #         ic(serializer.data)
#     #         return JsonResponse(serializer.data, safe=False)
#     #     except Service.DoesNotExist:
#     #         return JsonResponse({'error': 'Service not found'}, status=404)
#     # return JsonResponse({'error': 'Invalid request method'}, status=400) 


# def get_service_by_type(request):
#     if request.method == 'GET':
#         bill_type = request.GET.get('bill_type')
#         search = request.GET.get('search', '').strip()
#         ic(bill_type, search)
#         try:
#             services = Service.objects.filter(types_id=bill_type)
#             if search:
#                 services = services.filter(name__icontains=search)
#             serializer = ServiceSerializer(services, many=True)
#             ic(serializer.data)
#             return JsonResponse(serializer.data, safe=False)
#         except Service.DoesNotExist:
#             return JsonResponse({'error': 'Service not found'}, status=404)
#     return JsonResponse({'error': 'Invalid request method'}, status=400)




