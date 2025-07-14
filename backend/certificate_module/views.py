from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from saas_admin.middleware import permission_required
from users.models import Tenant
from patients.models import Patient
from clients.serializers import UserRegisterSerializer
from .models import DischargeCertificate, MedicalCertificate, FitnessCertificate, BirthCertificate, DeathCertificate
from .serializers import DischargeCertificateSerializer, MedicalCertificateSerializer,FitnessCertificateSerializer, BirthCertificateSerializer, DeathCertificateSerializer
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from django.shortcuts import render, redirect
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from django.template.response import TemplateResponse
from django.contrib.auth.models import User

from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)

#################### Discharge Certificate ####################
    
@permission_required('discharge-certificate-list')
def discharge_certificate_list(request):
    discharge =DischargeCertificate.objects.all()
    discharge_serializer = DischargeCertificateSerializer(discharge, many=True)
        
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": discharge_serializer.data}, status=status.HTTP_200_OK)
    else:
        return TemplateResponse(request, 'certificate/discharge/list.html', {'discharge': discharge_serializer.data})


@csrf_exempt
@permission_required('discharge-certificate-add')
def discharge_certificate_add(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        data = request.POST.copy()
        print('Request data:', data)  # Debugging line to check incoming data
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        request.user = user
        print(f"User ID from session: {user_id}")
        try:
            tenant_id = request.session.get('tenant_id')
            Tenant.objects.get(id=tenant_id)
        except Tenant.DoesNotExist:
            return JsonResponse({"error": "Tenant not found"}, status=status.HTTP_404_NOT_FOUND)

        data['patient'] = request.POST.get("patient")
        data['tenant'] = request.tenant.id if hasattr(request, 'tenant') else None

        try:
            patient_instance = Patient.objects.get(id=data['patient'])
        except Patient.DoesNotExist:
            return JsonResponse({"error": "Patient not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = DischargeCertificateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save(patient=patient_instance)
            print('serializer data:', DischargeCertificateSerializer(instance).data)
            print('Discharge Certificate added successfully!')
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': DischargeCertificateSerializer(instance).data, "msg": "Discharge Certificate added successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('certificate:discharge_certificate_list')
        else:
            print('serializer is not valid')
            return TemplateResponse(request, 'certificate/discharge/add.html', {'errors': serializer.errors})

    else:
        # Handle GET request to render the form
        return TemplateResponse(request, 'certificate/discharge/add.html', {})


@csrf_exempt
@permission_required('discharge-certificate-edit')
def discharge_certificate_edit(request, id):
    try:
        discharge = DischargeCertificate.objects.get(id=id)
    except DischargeCertificate.DoesNotExist:
        return JsonResponse({"error": "Discharge Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.POST.copy()
        serializer = DischargeCertificateSerializer(discharge, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "Discharge Certificate updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('certificate:discharge_certificate_list')
        else:
            return TemplateResponse(request, 'certificate/discharge/update.html', {'errors': serializer.errors, 'discharge': discharge})
    else:
        serializer = DischargeCertificateSerializer(discharge)
        return TemplateResponse(request, 'certificate/discharge/update.html', {'discharge': serializer.data})





@csrf_exempt
@permission_required('discharge-certificate-view')
def discharge_certificate_delete(request, id):
    try:
        discharge = DischargeCertificate.objects.get(id=id)
        discharge.delete()
    except DischargeCertificate.DoesNotExist:
        return JsonResponse({"error": "Discharge Certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Discharge Certificate deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
    return redirect('certificate:discharge_certificate_list')



@permission_required('discharge-certificate-view')
def discharge_certificate_view(request, id):
    try:
        discharge = DischargeCertificate.objects.get(id=id)
    except DischargeCertificate.DoesNotExist:
        return JsonResponse({"error": "Discharge Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = DischargeCertificateSerializer(discharge)
    if request.GET.get('api') == 'true':
        return JsonResponse({'data': serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'certificate/discharge/view.html', {'discharge': serializer.data})



#################### Medical Certificate ####################

@permission_required('medical-certificate-list')
def medical_certificate_list(request):
    medical =MedicalCertificate.objects.all()
    medical_serializer = MedicalCertificateSerializer(medical, many=True)
        
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": medical_serializer.data}, status=status.HTTP_200_OK)
    else:
        return TemplateResponse(request, 'certificate/medical/list.html', {'medical': medical_serializer.data})




@csrf_exempt
@permission_required('medical-certificate-add')
def medical_certificate_add(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        data = request.POST.copy()
        print('Request data:', data)  # Debugging line to check incoming data
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        request.user = user
        print(f"User ID from session: {user_id}")
        try:
            tenant_id = request.session.get('tenant_id')
            Tenant.objects.get(id=tenant_id)
        except Tenant.DoesNotExist:
            return JsonResponse({"error": "Tenant not found"}, status=status.HTTP_404_NOT_FOUND)

        data['patient'] = request.POST.get("patient_id")
        data['tenant'] = request.tenant.id if hasattr(request, 'tenant') else None
        serializer = MedicalCertificateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print('serializer data:', serializer.data)
            print('Medical Certificate added successfully!')
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "Medical Certificate added successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('certificate:medical_certificate_list')
        else:
            print('serializer is not valid')
            return TemplateResponse(request, 'certificate/medical/add.html', {'errors': serializer.errors})

    else:
        # Handle GET request to render the form
        return TemplateResponse(request, 'certificate/medical/add.html', {})




@csrf_exempt
@permission_required('medical-certificate-edit')
def medical_certificate_edit(request, id):
    try:
        medical = MedicalCertificate.objects.get(id=id)
    except MedicalCertificate.DoesNotExist:
        return JsonResponse({"error": "Medical Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.POST.copy()
        serializer = MedicalCertificateSerializer(medical, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "Medical Certificate updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('certificate:medical_certificate_list')
        else:
            return TemplateResponse(request, 'certificate/medical/update.html', {'errors': serializer.errors, 'medical': medical})
    else:
        serializer = MedicalCertificateSerializer(medical)
        return TemplateResponse(request, 'certificate/medical/update.html', {'medical': serializer.data})




@csrf_exempt
@permission_required('medical-certificate-view')
def medical_certificate_delete(request, id):
    try:
        medical = MedicalCertificate.objects.get(id=id)
        medical.delete()
    except MedicalCertificate.DoesNotExist:
        return JsonResponse({"error": "Medical Certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Medical Certificate deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
    return redirect('certificate:medical_certificate_list')

@permission_required('medical-certificate-view')
def medical_certificate_view(request, id):
    try:
        medical = MedicalCertificate.objects.get(id=id)
    except MedicalCertificate.DoesNotExist:
        return JsonResponse({"error": "Medical Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = MedicalCertificateSerializer(medical)
    if request.GET.get('api') == 'true':
        return JsonResponse({'data': serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'certificate/medical/view.html', {'medical': serializer.data})



#################### Fitness Certificate ####################

@permission_required('fitness-certificate-list')
def fitness_certificate_list(request):
    fitness =FitnessCertificate.objects.all()
    fitness_serializer = FitnessCertificateSerializer(fitness, many=True)
        
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": fitness_serializer.data}, status=status.HTTP_200_OK)
    else:
        return TemplateResponse(request, 'certificate/fitness/list.html', {'fitness': fitness_serializer.data})




@csrf_exempt
@permission_required('fitness-certificate-add')
def fitness_certificate_add(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        data = request.POST.copy()
        print('Request data:', data)  # Debugging line to check incoming data
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        request.user = user
        print(f"User ID from session: {user_id}")
        try:
            tenant_id = request.session.get('tenant_id')
            Tenant.objects.get(id=tenant_id)
        except Tenant.DoesNotExist:
            return JsonResponse({"error": "Tenant not found"}, status=status.HTTP_404_NOT_FOUND)

        data['patient'] = request.POST.get("patient_id")
        data['tenant'] = request.tenant.id if hasattr(request, 'tenant') else None
        serializer = FitnessCertificateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print('serializer data:', serializer.data)
            print('fitness Certificate added successfully!')
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "fitness Certificate added successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('certificate:fitness_certificate_list')
        else:
            print('serializer is not valid')
            return TemplateResponse(request, 'certificate/fitness/add.html', {'errors': serializer.errors})

    else:
        # Handle GET request to render the form
        return TemplateResponse(request, 'certificate/fitness/add.html', {})



@csrf_exempt
@permission_required('fitness-certificate-edit')
def fitness_certificate_edit(request, id):
    try:
        fitness = FitnessCertificate.objects.get(id=id)
    except FitnessCertificate.DoesNotExist:
        return JsonResponse({"error": "fitness Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.POST.copy()
        serializer = FitnessCertificateSerializer(fitness, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "fitness Certificate updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('certificate:fitness_certificate_list')
        else:
            return TemplateResponse(request, 'certificate/fitness/update.html', {'errors': serializer.errors, 'fitness': fitness})
    else:
        serializer = FitnessCertificateSerializer(fitness)
        return TemplateResponse(request, 'certificate/fitness/update.html', {'fitness': serializer.data})




@csrf_exempt
@permission_required('fitness-certificate-view')
def fitness_certificate_delete(request, id):
    try:
        fitness = FitnessCertificate.objects.get(id=id)
        fitness.delete()
    except FitnessCertificate.DoesNotExist:
        return JsonResponse({"error": "fitness Certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Fitness Certificate deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
    return redirect('certificate:fitness_certificate_list')




@permission_required('fitness-certificate-view')
def fitness_certificate_view(request, id):
    try:
        fitness = FitnessCertificate.objects.get(id=id)
    except FitnessCertificate.DoesNotExist:
        return JsonResponse({"error": "fitness Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = FitnessCertificateSerializer(fitness)
    if request.GET.get('api') == 'true':
        return JsonResponse({'data': serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'certificate/fitness/view.html', {'fitness': serializer.data})


##################### Birth Certificate ####################

@permission_required('birth-certificate-list')
def birth_certificate_list(request):
    birth = BirthCertificate.objects.all()
    birth_serializer = BirthCertificateSerializer(birth, many=True)
        
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": birth_serializer.data}, status=status.HTTP_200_OK)
    else:
        return TemplateResponse(request, 'certificate/birth/list.html', {'birth': birth_serializer.data})



@csrf_exempt
@permission_required('birth-certificate-add')
def birth_certificate_add(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        data = request.POST.copy()
        print('Request data:', data)  # Debugging line to check incoming data
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        request.user = user
        print(f"User ID from session: {user_id}")
        try:
            tenant_id = request.session.get('tenant_id')
            Tenant.objects.get(id=tenant_id)
        except Tenant.DoesNotExist:
            return JsonResponse({"error": "Tenant not found"}, status=status.HTTP_404_NOT_FOUND)

        data['patient'] = request.POST.get("patient_id")
        data['tenant'] = request.tenant.id if hasattr(request, 'tenant') else None
        serializer = BirthCertificateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print('serializer data:', serializer.data)
            print('birth Certificate added successfully!')
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "birth Certificate added successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('certificate:birth_certificate_list')
        else:
            print('serializer is not valid')
            return TemplateResponse(request, 'certificate/birth/add.html', {'errors': serializer.errors})

    else:
        # Handle GET request to render the form
        return TemplateResponse(request, 'certificate/birth/add.html', {})



@csrf_exempt
@permission_required('birth-certificate-edit')
def birth_certificate_edit(request, id):
    try:
        birth = BirthCertificate.objects.get(id=id)
    except BirthCertificate.DoesNotExist:
        return JsonResponse({"error": "birth Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.POST.copy()
        serializer = BirthCertificateSerializer(birth, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "birth Certificate updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('certificate:birth_certificate_list')
        else:
            return TemplateResponse(request, 'certificate/birth/update.html', {'errors': serializer.errors, 'birth': birth})
    else:
        serializer = BirthCertificateSerializer(birth)
        return TemplateResponse(request, 'certificate/birth/update.html', {'birth': serializer.data})





@csrf_exempt
@permission_required('birth-certificate-view')
def birth_certificate_delete(request, id):
    try:
        birth = BirthCertificate.objects.get(id=id)
        birth.delete()
    except BirthCertificate.DoesNotExist:
        return JsonResponse({"error": "birth Certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Birth Certificate deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
    return redirect('certificate:birth_certificate_list')



@permission_required('birth-certificate-view')
def birth_certificate_view(request, id):
    try:
        birth = BirthCertificate.objects.get(id=id)
    except BirthCertificate.DoesNotExist:
        return JsonResponse({"error": "birth Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = BirthCertificateSerializer(birth)
    if request.GET.get('api') == 'true':
        return JsonResponse({'data': serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'certificate/birth/view.html', {'birth': serializer.data})



##################### Death Certificate ####################

@permission_required('death-certificate-list')
def death_certificate_list(request):
    death = DeathCertificate.objects.all()
    death_serializer = DeathCertificateSerializer(death, many=True)
        
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": death_serializer.data}, status=status.HTTP_200_OK)
    else:
        return TemplateResponse(request, 'certificate/death/list.html', {'death': death_serializer.data})



@csrf_exempt
@permission_required('death-certificate-add')
def death_certificate_add(request):
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        data = request.POST.copy()
        print('Request data:', data)  # Debugging line to check incoming data
        user_id = request.session.get('user_id')
        if not user_id:
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        request.user = user
        print(f"User ID from session: {user_id}")
        try:
            tenant_id = request.session.get('tenant_id')
            Tenant.objects.get(id=tenant_id)
        except Tenant.DoesNotExist:
            return JsonResponse({"error": "Tenant not found"}, status=status.HTTP_404_NOT_FOUND)

        data['patient'] = request.POST.get("patient_id")
        data['tenant'] = request.tenant.id if hasattr(request, 'tenant') else None
        serializer = DeathCertificateSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            print('serializer data:', serializer.data)
            print('death Certificate added successfully!')
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "death Certificate added successfully!"}, status=status.HTTP_201_CREATED)
            return redirect('certificate:death_certificate_list')
        else:
            print('serializer is not valid')
            return TemplateResponse(request, 'certificate/death/add.html', {'errors': serializer.errors})

    else:
        # Handle GET request to render the form
        return TemplateResponse(request, 'certificate/death/add.html', {})






@csrf_exempt
@permission_required('death-certificate-edit')
def death_certificate_edit(request, id):
    try:
        death = DeathCertificate.objects.get(id=id)
    except DeathCertificate.DoesNotExist:
        return JsonResponse({"error": "death Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        data = request.POST.copy()
        serializer = DeathCertificateSerializer(death, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'data': serializer.data, "msg": "death Certificate updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('certificate:death_certificate_list')
        else:
            return TemplateResponse(request, 'certificate/death/update.html', {'errors': serializer.errors, 'death': death})
    else:
        serializer = DeathCertificateSerializer(death)
        return TemplateResponse(request, 'certificate/death/update.html', {'death': serializer.data})






@csrf_exempt
@permission_required('death-certificate-delete')
def death_certificate_delete(request, id):
    try:
        death = DeathCertificate.objects.get(id=id)
        death.delete()
    except DeathCertificate.DoesNotExist:
        return JsonResponse({"error": "Death Certificate not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Death Certificate deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
    return redirect('certificate:death_certificate_list')

@permission_required('death-certificate-view')
def death_certificate_view(request, id):
    try:
        death = DeathCertificate.objects.get(id=id)
    except DeathCertificate.DoesNotExist:
        return JsonResponse({"error": "Death Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = DeathCertificateSerializer(death)
    if request.GET.get('api') == 'true':
        return JsonResponse({'data': serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'certificate/death/view.html', {'death': serializer.data})




