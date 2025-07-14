from django.db import IntegrityError
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from saas_admin.middleware import permission_required
from .serializers import *
from .models import OPD
from staff_management.models import Employee
from patients.models import Patient
from appointments_list.models import Appointment
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from appointments_list.serializers import AppointmentSerializer
from rest_framework.permissions import IsAuthenticated
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.http import JsonResponse
from django.template.response import TemplateResponse

from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)


# OPD Module #

@permission_required('opd-list')
def opd_list(request):
    
    all_opd = OPD.objects.all()
    opd_patient_serializer = OPDSerializer(all_opd, many=True)
    
    doctors = Employee.objects.filter(role_id=2)
    doctorSerializer = EmployeeSerializer(doctors, many=True)
    
    patients = Patient.objects.all()
    patientSerializer = PatientSerializer(patients, many=True)
    
    appointments = Appointment.objects.all()
    appointmentSerializer = AppointmentSerializer(appointments, many=True)
    
   
    return render(request, 'OPD/list.html',{
                            "all_opd": opd_patient_serializer.data,
                            "patients": patientSerializer.data,
                            "doctors": doctorSerializer.data,
                            "appointments": appointmentSerializer.data
                            })



@permission_required('opd-edit')
def opd_edit(request,id):
    return render(request, 'OPD/add.html')

@permission_required('opd-delete')
def opd_delete(request,id):
    pass

@permission_required('opd-view')
def opd_view(request,id):
    
    opd = get_object_or_404(OPD, pk=id)
    opd_data = OPDSerializer(opd).data    
    # fetched... here the  related foreign key data...
    doctor = EmployeeSerializer(opd.doctor).data if opd.doctor else None
    patient = PatientSerializer(opd.patient).data if opd.patient else None
    appointment = AppointmentSerializer(opd.appointment).data if opd.appointment else None
    
    opd_data['doctor'] = doctor
    opd_data['patient'] = patient
    opd_data['appointment'] = appointment
    
    if request.GET.get('api') == 'true':
        logger.info("Fetching opd for the authenticated user and tenant.")
        return JsonResponse({"data": opd_data}, status=status.HTTP_200_OK)
      
    return render(request, 'OPD/view.html',{"opd": opd_data})


@permission_required('opd-edit')
def opd_update(request, pk):
    # Retrieve the appointment instance
    opd = get_object_or_404(OPD, pk=pk) 
    doctors = Employee.objects.filter(role_id=2)
    doctorSerializer = EmployeeSerializer(doctors, many=True)    
    patients = Patient.objects.all()
    patientSerializer = PatientSerializer(patients, many=True)
    appointments = Appointment.objects.all()
    appointmentSerializer = AppointmentSerializer(appointments, many=True)

    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user        
        print('User  ID:', user_id)
        print('User :', user)
        print('Request User:', request.user)

        serializer = OPDCreateUpdateSerializer(opd, data=request.POST)
        
        if serializer.is_valid(raise_exception=True):
            try:
                serializer.save(user=request.user, tenant=request.tenant)
                
                if request.GET.get('api') == 'true':
                    logger.info("OPD patient updated successfully for the authenticated user and tenant.")
                    return JsonResponse({"msg": "OPD updated successfully!"}, status=200)
                
                messages.success(request, "OPD patient updated successfully")
                return redirect('/opd/list')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        
        return TemplateResponse(request, 'OPD/update.html', {"errors": serializer.errors, "appointments": appointmentSerializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data})

    return TemplateResponse(request, 'OPD/update.html', {"opd": opd, "appointments": appointmentSerializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data})
    





def get_patient_doctor(request, appointment_id):
    try:
        appointment = Appointment.objects.get(id=appointment_id)
        return JsonResponse({"patient_id": appointment.patient.id,"doctor_id": appointment.doctor.id})
    except Employee.DoesNotExist:
        return JsonResponse({"error": "Patient & Doctor not found"}, status=404)





class OPDListView(APIView):
    

    def post(self, request):
        serializer = OPDCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            try:
                
                # Generate opd_record_id
                last_opd = OPD.objects.order_by('id').last()
                if not last_opd:
                    opd_record_id = 'OPD - #00001'
                else:
                    last_id = last_opd.opd_record_id.split('-')[1].strip().replace('#', '')
                    opd_record_id = f'OPD - #{int(last_id) + 1:05d}'
                    
                # Save OPD with user and tenant
                serializer.save(tenant=request.tenant, opd_record_id=opd_record_id)
                
                messages.success(request, "OPD added successfully.")
                
                if request.GET.get('api') == 'true':
                    logger.info("Fetching opd_patients for the authenticated user and tenant.")
                    return JsonResponse({"data": serializer.data, "msg": "OPD added successfully!"}, status=status.HTTP_200_OK)
                
                return redirect('/opd/list')
            except IntegrityError as e:
                    raise ValidationError({"error": str(e)})

        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

