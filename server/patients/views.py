from rest_framework import status
from saas_admin.middleware import permission_required
from .serializers import *
from .models import Patient
from staff_management.models import Employee
from appointments_list.models import Appointment
from staff_management.serializers import EmployeeSerializer
from appointments_list.serializers import AppointmentSerializer
import logging,json
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.template.response import TemplateResponse
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from icecream import ic
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pharmacy_module.models import PharmacyBill
from pharmacy_module.serializers import PharmacyBillSerializer
from billing_counter.models import Billing
from billing_counter.serializers import BillingCreateUpdateSerializer
from .ai_report import *
from datetime import datetime
import io
import csv


User = get_user_model()

logger = logging.getLogger(__name__)




@csrf_exempt
@permission_required('patient-list')
def patient_list(request):
    logger.info("Fetching all patients within the same tenant.")
    
    # tenant = request.session.get("tenant_id")
    # ic(tenant)
    # if tenant:
    #     patients = Patient.objects.all().order_by('-updated_at')
    # else:
    patients = Patient.objects.all().order_by('-updated_at')    
    total_patients = patients.count()
    serializer = PatientSerializer(patients, many=True)

    doctors = Employee.objects.filter(role_id=2)
    doctorSerializer = EmployeeSerializer(doctors, many=True)

    if request.GET.get('api') == 'true':
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)

    return render(request, 'patient-manager/list.html', {
        "total_patients": total_patients,
        "all_patients": serializer.data,
        "doctors": doctorSerializer.data
    })



@csrf_exempt
@permission_required('patient-add')
def patient_add(request):
    doctors = Employee.objects.filter(role_id=2)
    doctorSerializer = EmployeeSerializer(doctors, many=True)
    
    if request.method == 'POST':
        tenant = request.tenant
        name = getattr(tenant, 'full_name', None)
        phone = request.POST.get('phone')
        
        if not phone:
            return JsonResponse({"error": "Enter the Patient phone number."})
        first_four_letter = name[:3].upper() if name else ''
        last_patient = Patient.objects.order_by('-id').first()
        
        try:
            last_pid = last_patient.patient_record_id if last_patient else ''
            prefix = f'{first_four_letter}/PID'
            if last_pid.startswith(prefix):
                number_part = last_pid[len(prefix):]

                if number_part.isdigit():
                    next_id = int(number_part) + 1
                    patient_record_id = f'{prefix}{next_id}'
                else:
                    patient_record_id = f'{prefix}1001'
            else:
                patient_record_id = f'{prefix}1001'

        except Exception as e:
            logger.warning(f"Falling back to default patient_record_id due to: {e}")
            patient_record_id = f'{first_four_letter}/PID1001'

        user_data = request.POST.copy()
        name_value = user_data.get("name") or ""
        username = name_value.replace(' ', '_')
        custom_email = f"{username}.{phone}@healthrxai.com"
        email = custom_email
        password = 'user@#1234'
        last_user_with_serial = CustomUser.objects.exclude(serial_id__isnull=True).exclude(serial_id__exact='').order_by('-id').first()
        if not last_user_with_serial or not last_user_with_serial.serial_id:
            serial_id = 'HPID1001'
        else:
            try:
                last_num = int(''.join(filter(str.isdigit, last_user_with_serial.serial_id)))
            except (IndexError, ValueError):
                last_num = 1000
            serial_id = f'HPID{last_num + 1}'

        user = CustomUser.objects.create_user(
            email=email,
            username=username,
            password=password,
            tenant=tenant,
            is_tenant_admin=False,
            is_superuser=False,
            is_staff=False,
            serial_id=serial_id
        )
        print("Created user:", user,user.id)

        data = request.POST.copy()
        form = PatientCreateUpdateSerializer(data=data)
        if form.is_valid():
            phone = form.validated_data.get('phone')
            if Patient.objects.filter(phone=phone).exists():
                messages.warning(f"Patient with phone {phone} already exists.")
                return TemplateResponse(request, 'patient-manager/list.html',{})
            
            patient = form.save(
                tenant=request.tenant,
                patient_record_id=patient_record_id,
                user = user
            )
            if request.GET.get('api') == 'true':
                return JsonResponse(
                    {'msg': 'Patient added successfully!', 'patient_id': patient.id},
                    status=status.HTTP_201_CREATED
                )
            return redirect('/patients/all-patient')
        logger.error(f"Form errors: {form.errors}")
        return JsonResponse({'error': form.errors}, status=status.HTTP_400_BAD_REQUEST)
    return render(request, 'patient-manager/list.html', {
        "doctors": doctorSerializer.data
    })

  
@csrf_exempt
@permission_required('patient-edit')
def patient_edit(request, id):
    if request.method == 'GET':
        patient = get_object_or_404(Patient, id=id)
        form = PatientCreateUpdateSerializer(instance=patient)
        doctors = Employee.objects.filter(role_id=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)
        return render(request, 'patient-manager/edit.html', {
            'form': form,
            'patient': patient,
            'doctors': doctorSerializer.data
        })
        
    if request.method == 'POST':
        patient = get_object_or_404(Patient, id=id)
        form = PatientCreateUpdateSerializer(instance=patient, data=request.POST)
        image = request.FILES.get('image')
        initial_data = form.initial if form.initial else {}
        if image:
            file_name = image.name.replace(" ", "_")
            folder = "patients"
            file_url = upload_file_to_vps(image, file_name, folder)
            initial_data['image'] = file_url
        else:
            initial_data['image'] = patient.image
        form.initial = initial_data
        if form.is_valid():
            phone = form.validated_data.get('phone')
            if Patient.objects.filter(phone=phone).exclude(id=id).exists():
                messages.warning(request, f"Patient with phone {phone} already exists.")
                return TemplateResponse(request, 'patient-manager/edit.html', {'form': form, 'patient': patient})

            form.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({'msg': 'Patient updated successfully!'}, status=status.HTTP_200_OK)
            messages.success(request, "Patient updated successfully.")
            return redirect('/patients/all-patient')
        logger.error(f"Form errors: {form.errors}")
        return JsonResponse({'error': form.errors}, status=status.HTTP_400_BAD_REQUEST)


@permission_required('patient-delete')
def patient_delete(request, id):
    patient = get_object_or_404(Patient, id=id)
    print('patient:', patient)
    try:
        if patient:
            print(1)
            patient.delete()  # Delete the patient record

        if request.GET.get('api') == 'true':
            return JsonResponse({'message': 'Patient deleted successfully.'}, status=status.HTTP_200_OK)

        messages.success(request, "Patient deleted successfully.")
        return redirect('/patients/all-patient')

    except Exception as e:
        print('Error:', e)
        if request.GET.get('api') == 'true':
            return JsonResponse({'error': 'Failed to delete patient.'}, status=status.HTTP_400_BAD_REQUEST)  
        messages.error(request, "Failed to delete patient.")
        return redirect('/patients/all-patient')


@permission_required('patient-view')
def patient_view(request,id):
    return render(request, 'patient-manager/view.html')





# @permission_required('patient-view')
def patients_by_doctor(request):
    user_id = request.session.get('user_id')
    role_id = request.session.get('role_id')
    user = Employee.objects.filter(user=user_id, role=role_id).first()
    if not user:
        return JsonResponse({"error": "User not found or does not have the required role."}, status=status.HTTP_404_NOT_FOUND)
    
    appointment = Appointment.objects.filter(doctor=user.id).order_by('-updated_at')
    appointmentserializer = AppointmentSerializer(appointment, many=True)
    patients_data = []
    for appointment in appointmentserializer.data:
        patient = appointment.get('patient')
        if patient:
            patients_data.append({
                'patient_id': patient.get('id'),
                'patient_name': patient.get('name'),
                'patient_contact': patient.get('phone'),
                'patient_age': patient.get('age'),
                'patient_email': patient.get('email'),
                'patient_image': patient.get('image'),
                'patient_address': patient.get('address'),
                'patient_city': patient.get('city'),
                'patient_state': patient.get('state'),
                'patient_history': patient.get('patient_history', []),
                
            })
    if request.GET.get('api') == 'true':
            return JsonResponse({'patients':patients_data }, status=status.HTTP_200_OK)
    
    return render(request, 'patient-manager/v.html')







from icecream import ic
from saas_admin.utils import *



import logging
import ast 

logger = logging.getLogger(__name__)

def patient_history(request, patient_id):
    try:
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        # Access patient based on tenant admin permission
        patient = Patient.objects.get(id=patient_id)
        
        ai_data = patient.ai_report if patient.ai_report else None

        # Appointments
        appointments = Appointment.objects.filter(patient=patient).order_by('-created_at')
        serialized_appointments = AppointmentSerializer(appointments, many=True).data

        for appt, ser_data in zip(appointments, serialized_appointments):
            ser_data['created_day'] = appt.created_at.strftime('%d')
            ser_data['created_month'] = appt.created_at.strftime('%b')

        # Additional Data Sections
        def get_serialized_or_msg(queryset, serializer_class):
            items = queryset.filter(patient=patient)
            if items.exists():
                return serializer_class(items, many=True).data
            return "No data found"

        prescription_data = get_serialized_or_msg(Pescription.objects, AppointmentpescriptionSerializer)
        ipd_data = get_serialized_or_msg(IPD.objects, IPDSerializer)
        pathology_data = get_serialized_or_msg(PathologyReports.objects, PathologyGetreportSerializer)
        radiology_data = get_serialized_or_msg(RadiologyReports.objects, RadiologyTestreportSerializer)
        surgery_data = get_serialized_or_msg(Surgery.objects, SurgerySerializer)
        medicalbill_data = get_serialized_or_msg(PharmacyBill.objects, PharmacyBillSerializer)
        billing_data = get_serialized_or_msg(Billing.objects, BillingCreateUpdateSerializer)
        
        # getting the audio files to display...
        appointment_audio_qs = Appointment.objects.filter(patient=patient).values_list('audio_recordings', flat=True)
        flattened_audio_list = []
        for item in appointment_audio_qs:
            if isinstance(item, str):
                try:
                    parsed = ast.literal_eval(item)
                    if isinstance(parsed, list):
                        flattened_audio_list.extend(parsed)
                    else:
                        flattened_audio_list.append(item)
                except (ValueError, SyntaxError):
                    flattened_audio_list.append(item)
            elif isinstance(item, list):
                flattened_audio_list.extend(item)
            

        data = {
            "appointments": serialized_appointments if serialized_appointments else "No appointments found",
            "prescriptions": prescription_data if prescription_data else "No prescriptions found",
            "ipd": ipd_data if ipd_data else "No IPD records found",
            "pathology_reports": pathology_data if pathology_data else "No pathology reports found",
            "radiology_reports": radiology_data if radiology_data else "No radiology reports found",
            "surgeries": surgery_data if surgery_data else "No surgeries found",
            "medical_bills": medicalbill_data if medicalbill_data else "No medical bills found",
            "billing": billing_data if billing_data else "No billing data found",
            'appointment_audio': flattened_audio_list if flattened_audio_list else None,
            "ai_report": ai_data if ai_data else "No AI report available",
        }

        # print("appointments data:", serialized_appointments)
        # print("Pathology data:", pathology_data)
        # print("Radiology data:", radiology_data)
    except Patient.DoesNotExist:
        return JsonResponse(
            {"msg": f"Patient with ID {patient_id} not found."},
            status=status.HTTP_404_NOT_FOUND,
        )

    if request.GET.get('api') == 'true':
        logger.info("Fetching patient history for the authenticated user and tenant.")
        return JsonResponse({"data": data}, status=status.HTTP_200_OK)

    return TemplateResponse(request, 'patient-manager/patient-history.html', {"data": data})






def get_patient_details_by_id(request):
    
    try:
        patient_record_id = request.POST.get('patient_record_id')
        
        patient = Patient.objects.get(patient_record_id=patient_record_id)
        patientSerializer = PatientSerializer(patient)
        
        # print('Patient:', patientSerializer.data)
        return JsonResponse({
            "success": True,
            "patient_id": patientSerializer.data['id'],  
            "patient_name": patientSerializer.data['name'],  
            "patient_phone": patientSerializer.data['phone'],  
            "patient_age": patientSerializer.data['age'],  
            "patient_gender": patientSerializer.data['gender'],  
            "patient_doctor_id": patientSerializer.data['doctor']['id'],  
            "patient_doctor_name": patientSerializer.data['doctor']['name'],  
            "patient_admitted_on": patientSerializer.data['created_at'],  
            "patient_record_id": patientSerializer.data['patient_record_id'],  
        })
    except Patient.DoesNotExist:
        return JsonResponse({"success": False, "error": "Patient not found"})
    


@csrf_exempt
def get_patient_details_by_mobile(request):
    
    try:
        patient_phone = request.POST.get('patient_phone')
        
        patient = Patient.objects.get(phone=patient_phone)
        patientSerializer = PatientSerializer(patient)
        
        print('patient details printed successfully')
        return JsonResponse({
            "success": True,
            "patient_id": patientSerializer.data['id'],  
            "patient_name": patientSerializer.data['name'],  
            "patient_phone": patientSerializer.data['phone'],  
            "patient_age": patientSerializer.data['age'],  
            "patient_gender": patientSerializer.data['gender'],  
            "patient_doctor_id": patientSerializer.data['doctor']['id'] if patientSerializer.data.get('doctor') and patientSerializer.data['doctor'].get('id') else '',  
            "patient_doctor_name": patientSerializer.data['doctor']['name'] if patientSerializer.data.get('doctor') and patientSerializer.data['doctor'].get('name') else '',  
            "patient_admitted_on": patientSerializer.data['created_at'],  
            "patient_record_id": patientSerializer.data['patient_record_id'],  
            "aadhar_card": patientSerializer.data['aadhar_card'],  
            "ayushman_card": patientSerializer.data['ayushman_card'],  
        })
    
    except Patient.DoesNotExist:
        return JsonResponse({"success": False, "error": "Patient not found"})
   


@csrf_exempt
def patient_health_ai_report(request, patient_id): 
    if request.method == "POST":
        try:
            try:
                patient = Patient.objects.get(id=patient_id)
                patient_data = PatientSerializer(patient).data
            except Patient.DoesNotExist:
                return JsonResponse({"error": "Patient not found"}, status=404)
            data = {}
            data['name'] = patient.name
            data['allergies'] = patient.allergies
            data['age'] = patient.age
            data['blood_group'] = patient.blood_group
            
            appointment = Appointment.objects.filter(patient=patient).order_by('-created_at')
            appointment_data = AppointmentSerializer(appointment, many=True).data
            data['patient_doctor_conversation'] = [appt.get('trasncription', '') for appt in appointment_data] if appointment_data else []          
            
            raw_text = data
            structured_data = extract_structured_data(raw_text)
            if "error" in structured_data:
                return JsonResponse(structured_data, status=400)

            summary = generate_health_report(structured_data)
            patient.ai_report = summary
            patient.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({
                    "patient_id": patient.id,
                    # "structured_data": structured_data,
                    "summary": summary
                })
                
            return TemplateResponse(request, 'patient-manager/patient-history.html', {
                "patient_id": patient.id,
                # "structured_data": structured_data,
                "summary": summary
             })
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return TemplateResponse(request, 'patient-manager/patient-history.html', {})





@csrf_exempt
def global_search(request):
    if request.method == 'GET':
        return TemplateResponse(request, 'patient-manager/global_search.html')
    if request.method =='POST':
            try:
                patient_phone = request.POST.get('patient_phone')
                
                patient = Patient.objects.get(phone=patient_phone)
                patientSerializer = PatientSerializer(patient)
                
                # Appointments
                appointments = Appointment.objects.filter(patient=patient).order_by('-created_at')
                serialized_appointments = AppointmentSerializer(appointments, many=True).data

                for appt, ser_data in zip(appointments, serialized_appointments):
                    ser_data['created_day'] = appt.created_at.strftime('%d')
                    ser_data['created_month'] = appt.created_at.strftime('%b')

                # Additional Data Sections
                def get_serialized_or_msg(queryset, serializer_class):
                    items = queryset.filter(patient=patient)
                    if items.exists():
                        return serializer_class(items, many=True).data
                    return "No data found"

                prescription_data = get_serialized_or_msg(Pescription.objects, AppointmentpescriptionSerializer)
                ipd_data = get_serialized_or_msg(IPD.objects, IPDSerializer)
                pathology_data = get_serialized_or_msg(PathologyReports.objects, PathologyGetreportSerializer)
                radiology_data = get_serialized_or_msg(RadiologyReports.objects, RadiologyTestreportSerializer)
                surgery_data = get_serialized_or_msg(Surgery.objects, SurgerySerializer)
                medicalbill_data = get_serialized_or_msg(PharmacyBill.objects, PharmacyBillSerializer)
                billing_data = get_serialized_or_msg(Billing.objects, BillingCreateUpdateSerializer)
                
                # getting the audio files to display...
                appointment_audio_qs = Appointment.objects.filter(patient=patient).values_list('audio_recordings', flat=True)
                flattened_audio_list = []
                for item in appointment_audio_qs:
                    if isinstance(item, str):
                        try:
                            parsed = ast.literal_eval(item)
                            if isinstance(parsed, list):
                                flattened_audio_list.extend(parsed)
                            else:
                                flattened_audio_list.append(item)
                        except (ValueError, SyntaxError):
                            flattened_audio_list.append(item)
                    elif isinstance(item, list):
                        flattened_audio_list.extend(item)
                    

                additional_data = {
                    "Appointments": serialized_appointments if serialized_appointments else "No appointments found",
                    "Pescriptions": prescription_data if prescription_data else "No prescriptions found",
                    "IPD Data": ipd_data if ipd_data else "No IPD records found",
                    "pathology Reports": pathology_data if pathology_data else "No pathology reports found",
                    "Radiology Reports": radiology_data if radiology_data else "No radiology reports found",
                    "Surgeries": surgery_data if surgery_data else "No surgeries found",
                    "Medical Bills": medicalbill_data if medicalbill_data else "No medical bills found",
                    "Billings": billing_data if billing_data else "No billing data found",
                    'Appointment Audio': flattened_audio_list if flattened_audio_list else None,
                }
                
                if request.GET.get('api') == 'true':
                    return JsonResponse({'data': patientSerializer.data, "additional_data": additional_data}, status=status.HTTP_200_OK)
                        
                return TemplateResponse(request, 'patient-manager/global_search.html', {'data': patientSerializer.data,"additional_data":additional_data})
            except Patient.DoesNotExist:
                return JsonResponse({"success": False, "error": "Patient not found"})
            
            
            
            
@csrf_exempt
def upload_patients_data(request):
    if request.method == 'POST':
        csv_file = request.FILES.get('upload_data')
        if not csv_file or not csv_file.name.endswith('.csv'):
            messages.error(request, 'File is not CSV type.')
            return redirect('/patients/all-patient')
        try:
            decoded_file = csv_file.read().decode('utf-8')
            reader = csv.DictReader(io.StringIO(decoded_file))

            tenant = request.tenant  
            ic('tenant:', tenant)

            for row in reader:
                Patient.objects.create(
                    bill_type=row.get('bill_type', '').strip(),
                    service_type=row.get('service_type', '').strip(),
                    name=row.get('name', '').strip(),
                    charge=row.get('charge', '').strip(),
                    tenant=tenant if tenant else None,
                )

            messages.success(request, 'CSV file uploaded and data saved successfully.')
        except Exception as e:
            messages.error(request, f'Error processing file: {str(e)}')
    return redirect('/patients/all-patient')
