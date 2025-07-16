from django.db import IntegrityError
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from saas_admin.utils import csrf_exempt
from saas_admin.middleware import permission_required
from .serializers import *
from .models import IPD
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
from settings.models import Bed
from settings.serializers import BedSerializer

from django.contrib.auth import get_user_model
from icecream import ic

User = get_user_model()

logger = logging.getLogger(__name__)


# IPD Module #
@permission_required('ipd-list')
def ipd_list(request):
    
    all_ipd = IPD.objects.all()
    ipd_patient_serializer = IPDSerializer(all_ipd, many=True)
    
    doctors = Employee.objects.filter(role_id=2)
    doctorSerializer = EmployeeSerializer(doctors, many=True)
    
    patients = Patient.objects.all()
    patientSerializer = PatientSerializer(patients, many=True)
    
    appointments = Appointment.objects.all()
    appointmentSerializer = AppointmentSerializer(appointments, many=True)
    
    if request.GET.get('api') == 'true':
        logger.info("Fetching ipd_patients for the authenticated user and tenant.")
        return JsonResponse({"data": ipd_patient_serializer.data}, status=status.HTTP_200_OK)
    
    return render(request, 'IPD/list.html',{
                            "all_ipd": ipd_patient_serializer.data,
                            "patients": patientSerializer.data,
                            "doctors": doctorSerializer.data,
                            "appointments": appointmentSerializer.data
                            })


@permission_required('ipd-delete')
def ipd_delete(request,id):
    pass


@permission_required('ipd-view')
def ipd_view(request,id):
    
    ipd = get_object_or_404(IPD, pk=id)
    ipd_data = IPDSerializer(ipd).data    
    # fetched... here the  related foreign key data...
    doctor = EmployeeSerializer(ipd.doctor).data if ipd.doctor else None
    patient = PatientSerializer(ipd.patient).data if ipd.patient else None
    appointment = AppointmentSerializer(ipd.appointment).data if ipd.appointment else None
    
    ipd_data['doctor'] = doctor
    ipd_data['patient'] = patient
    ipd_data['appointment'] = appointment
    
    if request.GET.get('api') == 'true':
        logger.info("Fetching ipd for the authenticated user and tenant.")
        return JsonResponse({"data": ipd_data}, status=status.HTTP_200_OK)
      
    return render(request, 'IPD/view.html',{"ipd": ipd_data})


@csrf_exempt
@permission_required('ipd-edit')
def ipd_update(request, pk):
    # Retrieve the appointment instance
    ipd = get_object_or_404(IPD, pk=pk) 
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
        print('User ID:', user_id)
        print('User :', user)
        print('Request User:', request.user)
        
        ic("Updating IPD patient for data:", request.POST)

        post_data = request.POST.copy()

        # Convert patient and doctor names to IDs
        try:
            patient_instance = Patient.objects.get(name=post_data.get('patient'))
            doctor_instance = Employee.objects.get(name=post_data.get('doctor'), role_id=2)
            
            post_data['patient'] = patient_instance.id
            post_data['doctor'] = doctor_instance.id
        except Patient.DoesNotExist:
            return JsonResponse({'error': 'Patient not found'}, status=400)
        except Employee.DoesNotExist:
            return JsonResponse({'error': 'Doctor not found'}, status=400)

        serializer = IPDCreateUpdateSerializer(ipd, data=post_data)
        
        if serializer.is_valid(raise_exception=True):
            try:
                date = request.POST.getlist('date[]')
                floor = request.POST.getlist('floor[]')
                ward = request.POST.getlist('ward[]')
                bed_no = request.POST.getlist('bed_no[]')
                bed_charge = request.POST.getlist('bed_charge[]')
                
                date_time = request.POST.getlist('date_time[]')
                remarks = request.POST.getlist('remarks[]')
                medicine_details = request.POST.getlist('medicine_details[]')
                nurse_name = request.POST.getlist('nurse_name[]')
                amount = request.POST.getlist('amount[]')
                
                bed_ward_history = []
                for i in range(len(date)):
                    bed_ward_history.append({
                        'date': date[i],
                        'floor': floor[i],
                        'ward': ward[i],
                        'bed_no': bed_no[i],
                        'bed_charge': bed_charge[i],
                    })
                
                ipd_patient_history = []
                for i in range(len(date_time)):
                    ipd_patient_history.append({
                        'date_time': date_time[i],
                        'remarks': remarks[i],
                        'medicine_details': medicine_details[i],
                        'nurse_name': nurse_name[i],
                        'amount': amount[i],
                    })
                
                serializer.save(
                    bed_ward_history=bed_ward_history,
                    ipd_patient_history=ipd_patient_history,
                    user=request.user,
                    tenant=request.tenant
                )

                # --- Update patient_id in Bed setting for the last bed_no ---
                if bed_no:
                    last_bed_no = bed_no[-1]
                    try:
                        previous_beds = Bed.objects.filter(patient_id=ipd.patient.id)
                        for prev_bed in previous_beds:
                            prev_bed.patient_id = None
                            prev_bed.bed_status = "Available"
                            prev_bed.save()

                        bed_instance = Bed.objects.filter(bed_number=last_bed_no).last()
                        if bed_instance:
                            bed_instance.patient_id = ipd.patient.id  
                            bed_instance.bed_status = "Occupied"
                            bed_instance.save()
                    except Exception as e:
                        logger.error(f"Error updating patient_id in Bed: {e}")
                # ----------------------------------------------------------

                if request.GET.get('api') == 'true':
                    logger.info("IPD patient updated successfully for the authenticated user and tenant.")
                    return JsonResponse({"msg": "IPD updated successfully!"}, status=200)
                
                messages.success(request, "IPD patient updated successfully")
                return redirect('/ipd/list')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        
        return TemplateResponse(request, 'IPD/update.html', {"errors": serializer.errors, "appointments": appointmentSerializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data})

    return TemplateResponse(request, 'IPD/update.html', {"ipd": ipd, "appointments": appointmentSerializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data})





def get_patient_doctor(request, appointment_id):
    try:
        appointment = Appointment.objects.get(id=appointment_id)
        return JsonResponse({"patient_id": appointment.patient.id,"doctor_id": appointment.doctor.id})
    except Employee.DoesNotExist:
        return JsonResponse({"error": "Patient & Doctor not found"}, status=404)



@csrf_exempt
def get_bed_ward(request):
    
    try:
        floor = request.POST.get('floor')
        beds = Bed.objects.all()
        if floor:
            beds = beds.filter(floor=floor)
        serializer = BedSerializer(beds, many=True)
        print("aa",serializer.data)
        return JsonResponse({"success":True, "data": serializer.data}, status=200)
        
    except Exception as e:
        logger.error(f"Error in get_bed_ward: {e}")
        return JsonResponse({"error": str(e)}, status=500)
        


@csrf_exempt
def get_bed_charges(request):
    
    try:
        bed_no = request.POST.get('bed_no')
        beds = Bed.objects.filter(bed_number=bed_no)
        if not beds.exists():
            return JsonResponse({"error": "Bed not found"}, status=404)
        bed = beds.first()
        bed_charges = bed.bed_charges
        return JsonResponse({"success": True, "bed_charges": bed_charges}, status=200)
    except Exception as e:
        logger.error(f"Error in getting bed charges: {e}")
        return JsonResponse({"error": str(e)}, status=500)
    
        