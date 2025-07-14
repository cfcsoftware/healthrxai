import logging
from django.db import IntegrityError
from django.http import JsonResponse
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from saas_admin.middleware import permission_required
from users.models import CustomUser
from users.serializers import *
from .serializers import *
from clients.serializers import *
from departments.serializers import *
from django.db import transaction
from django.contrib import messages
from .models import Appointment
from patients.models import Patient
from pharmacy_module.models import MedicineList 
from pathology_module.models import PathologyTest
from radiology_module.models import RadiologyTest
from staff_management.models import Employee
from patients.serializers import PatientSerializer
from ipd_module.models import IPD
from pharmacy_module.serializers import MedicineListSerializer
from pathology_module.serializers import PathologyTestSerializer
from radiology_module.serializers import RadiologyTestSerializer
from ipd_module.serializers import *
from staff_management.serializers import EmployeeSerializer
from rest_framework.exceptions import ValidationError
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage

from icecream import ic
import json

User = get_user_model()

logger = logging.getLogger(__name__)



@permission_required('appointment-list')
def appointment_list(request):
    
    if request.method == 'GET':
        patient_id = request.GET.get("patient") 
        auth_id = request.session.get("employee_id")         
        role_id = request.session.get("role_id")         
        if patient_id:
            appointments = Appointment.objects.filter(patient__id=patient_id).order_by('-updated_at')
        else:
            if auth_id and (role_id == 3 or role_id == 4):   # doctor or receptionist
                appointments = Appointment.objects.filter(doctor=auth_id).order_by('-updated_at')
            else:
                appointments = Appointment.objects.all().order_by('-updated_at') 
                        
        serializer = AppointmentSerializer(appointments, many=True)   
                
        doctors = Employee.objects.filter(role=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)  
                
        patients = Patient.objects.all()
        patientSerializer = PatientSerializer(patients, many=True) 
        
        dapartements = Department.objects.all()
        dapartmentSerializer = DepartmentSerializer(dapartements, many=True)   
            
        if request.GET.get('api') == 'true':
            logger.info("Fetching appointments for the authenticated user and tenant.")
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)        
        return render(request, 'appointments/list.html', {"all_appointments": serializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data, "departments": dapartmentSerializer.data})
    
    
    if request.method == 'POST':
        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user
        
        serializer = AppointmentCreateUpdateSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            try:
                
                # Generate appointment_record_id
                last_appointment = Appointment.objects.order_by('id').last()
                if not last_appointment:
                    appointment_record_id = 'APPOINT - #00001'
                else:
                    last_id = last_appointment.appointment_record_id.split('-')[1].strip().replace('#', '')
                    appointment_record_id = f'APPOINT - #{int(last_id) + 1:05d}'

                serializer.save(user=request.user, tenant=request.tenant, appointment_record_id=appointment_record_id)
                
                if request.GET.get('api') == 'true':
                    logger.info("Fetching appointments for the authenticated user and tenant.")
                    return JsonResponse({"msg": "Appointment added successfully!"}, status=status.HTTP_201_CREATED)
            
                return redirect('/appointments/appointment')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



@csrf_exempt
@permission_required('appointment-edit')
def update_appointment(request, pk):
    # Retrieve the appointment instance
    if request.method == 'GET':
        appointment = get_object_or_404(Appointment, pk=pk)
        data = AppointmentSerializer(appointment).data
        doctors = Employee.objects.filter(role_id=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)    
        patients = Patient.objects.all()
        patientSerializer = PatientSerializer(patients, many=True)
        
        if request.GET.get('api')== 'true':
            return JsonResponse({'status':'200', 'data':data})
        return TemplateResponse(request, 'appointments/update.html',{'appointment':data})

    if request.method == 'POST':
        appointment = get_object_or_404(Appointment, pk=pk) 
        data = request.POST.dict()

        user_id = request.session.get('user_id')
        user = User.objects.get(id=user_id)
        request.user = user

        serializer = AppointmentSerializer(appointment, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            if request.GET.get('api') == 'true':                
                return JsonResponse({"msg": "Appointment updated successfully!"}, status=status.HTTP_200_OK)
            return redirect('/appointments/appointment')
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    return TemplateResponse(request, 'appointments/update.html',{"appointment": appointment, "patients": patientSerializer.data, "doctors": doctorSerializer.data})





def appointements_by_doctor(request):
    user_id = request.session.get('user_id')
    role_id = request.session.get('role_id')
    user = Employee.objects.filter(user=user_id, role=role_id).first()
    if not user:
        return JsonResponse({"error": "User not found or does not have the required role."}, status=status.HTTP_404_NOT_FOUND)
    
    appointment = Appointment.objects.filter(doctor=user.id).order_by('-updated_at')
    appointmentserializer = AppointmentSerializer(appointment, many=True)
   
    if request.GET.get('api') == 'true':
            return JsonResponse({'appointments': appointmentserializer.data}, status=status.HTTP_200_OK)
    
    return render(request, 'appointements/appoint.html')









import speech_recognition as sr
import tempfile
import os
from saas_admin.utils import *
from django.core.files.storage import default_storage
from django.conf import settings
from datetime import datetime
from saas_admin.settings import OPENAI_API_KEY
import openai,requests

openai.api_key = OPENAI_API_KEY

def transcribe_audio_url_with_openai(url):
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Failed to download audio: {response.status_code}")

    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as temp_audio:
        temp_audio.write(response.content)
        temp_audio_path = temp_audio.name

    with open(temp_audio_path, "rb") as f:
        transcript = openai.Audio.transcribe(
            model="whisper-1",
            file=f
        )

    os.remove(temp_audio_path)
    return transcript["text"]



def format_transcript_with_gpt(transcript_text):
    prompt = (
        "You are a helpful assistant formatting medical conversations. "
        "Label each line of the following transcript as either 'Patient:' or 'Doctor:' "
        "based on who is speaking. Make sure to break it into separate lines whenever the speaker changes.\n\n"
        f"{transcript_text}\n\n"
        "Format it cleanly with each speaker on a new line and with markdown text like this:\n\n"
        "- **Patient:** [first sentence]\n"
        "- **Doctor:** [response]\n"
        "- **Patient:** [next question]\n"
        "- **Doctor:** [answer]\n\n"
        "Only return the cleaned and labeled conversation."
    )

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a medical transcription formatting assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.2
    )

    formatted_text = response['choices'][0]['message']['content'].strip()
    return formatted_text




@csrf_exempt
@permission_required('appointment-view')
def appointment_transcription(request, pk):
    if request.method == 'GET':
        appointment = get_object_or_404(Appointment, pk=pk)
        soap_data = appointment.soap_data
        ai_pescription_view = appointment.pescription_suggestion
        if isinstance(soap_data, list):
            soap_data = "\n".join(str(item) for item in soap_data)
        data = AppointmentDetailsSerializer(appointment).data    
        doctor = EmployeeSerializer(appointment.doctor).data if appointment.doctor else None
        patient = PatientSerializer(appointment.patient).data if appointment.patient else None
        tenant = TenantRegisterSerializer(appointment.tenant).data if appointment.tenant else None
        data['doctor'] = doctor
        data['patient'] = patient
        data['tenant'] = tenant
        return TemplateResponse(request, 'appointments/SOAP.html', {"appointment": data, "ai_pescription_view":ai_pescription_view, "soap_data": soap_data})

    elif request.method == 'POST':
        try:
            if 'audio' not in request.FILES:
                return JsonResponse({'error': 'No audio file provided.'}, status=400)

            audio_file = request.FILES['audio']
            current_date = datetime.now().strftime("%Y%m%d_%H%M%S")
            webm_name = f"audio_{current_date}.webm"

            file_url = upload_file_to_vps(audio_file, webm_name, folder='audio_recordings')

            appointment = get_object_or_404(Appointment, pk=pk)
            if appointment.audio_recordings is None:
                appointment.audio_recordings = []
            appointment.audio_recordings.append(file_url)
            appointment.save()

            raw_transcription = transcribe_audio_url_with_openai(file_url)
            transcription = format_transcript_with_gpt(raw_transcription)

            if not transcription:
                return JsonResponse({'error': 'Transcription failed.'}, status=500)

            appointment = get_object_or_404(Appointment, pk=pk)
            if appointment.trasncription is None:
                appointment.trasncription = transcription
            else:
                appointment.trasncription += f"\n{transcription}"
            appointment.save()
            
            return JsonResponse({
                'file_url': file_url,
                'transcription': transcription
            })

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    


def appointment_SOAP(request, pk):
    try:
        appointment = get_object_or_404(Appointment, pk=pk)
        if appointment.trasncription:
            transcription = appointment.trasncription
        else:
            return JsonResponse({'error': 'No transcription available for this appointment.'}, status=404)
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages = [
                    {
                        "role": "system",
                        "content": "You are a highly skilled and clinically accurate medical assistant. Your task is to extract structured SOAP notes from medical transcriptions using expert-level clinical reasoning. You always produce notes in correct and complete markdown format, with no missing fields."
                    },
                    {
                        "role": "user",
                        "content": f"""
                Extract a detailed and structured **SOAP note** from the transcription provided below.

                🧠 **Instructions:**
                - Format the output strictly using **markdown syntax**.
                - Include **all four sections**: Subjective, Objective, Assessment, Plan.
                - **Never leave any section blank**. Use logical clinical inference if details are missing or implied.
                - Use **bullet points or subheadings** as shown below for clarity.
                - Keep the tone clinical and concise.

                📄 **Markdown Output Template:**

                #### Subjective
                
                - **Chief Complaint:** ...
                - **History of Present Illness:** ...
                - **Associated Symptoms:** ...
                - **Past Medical History:** ...
                - **Medications/Allergies:** ...
                - **Social History:** ...
                - **Review of Systems:** ...
                

                #### Objective 
                
                - **General Appearance:** ...   
                - **Vital Signs:** ...
                - **Physical Examination:**
                - HEENT: ...
                - Cardiovascular: ...
                - Respiratory: ...
                - Abdomen: ...
                - Neurological: ...
                - Musculoskeletal: ...
                - **Lab/Imaging Results:** ...
                

                #### Assessment
                
                - **Primary Diagnosis:** ...
                - **Differential Diagnoses:** ...
                - **Clinical Rationale:** ...
                

                #### Plan
                
                - **Medications Prescribed:** ...
                - **Lab Tests/Imaging Ordered:** ...
                - **Referrals:** ...
                - **Procedures:** ...
                - **Patient Education:** ...
                - **Follow-up Instructions:** ...

                ---

                📝 **Now process this transcription and generate the SOAP note in the markdown format above:**
                {transcription}
                """
                    }
                ],




            max_tokens=1500,
            temperature=0.5
        )
        soap_data = response.choices[0].message['content'].strip()
        # Save SOAP data to the appointment
        if appointment.soap_data is None:
            appointment.soap_data = soap_data
            appointment.save()
        return JsonResponse({'soap_data': soap_data}, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
            
        





def get_doctor_fees(request, doctor_id):
    try:
        doctor = Employee.objects.get(id=doctor_id)
        return JsonResponse({"fees": doctor.fees})
    except Employee.DoesNotExist:
        return JsonResponse({"error": "Doctor not found"}, status=404)




@csrf_exempt
def convert_appointment_to_ipd(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk)
    user_id = request.session.get('user_id')
    user = User.objects.get(id=user_id)
    request.user = user
    print('User  ID:', user_id)
    print('User :', user)
    print('Request User:', request.user)

    existing_ipd = IPD.objects.filter(patient=appointment.patient, appointment=appointment).first()
    if existing_ipd:
        messages.warning(request, "Patient is already admitted in IPD for this appointment.")
        if request.GET.get('api') == 'true':
            return JsonResponse({"msg": "Patient is already admitted in IPD for this appointment."}, status=status.HTTP_400_BAD_REQUEST)
        return redirect('/ipd/list')

    last_ipd = IPD.objects.order_by('id').last()
    # Fix: handle if last_ipd is None or last_ipd.ipd_record_id is None
    if not last_ipd or not getattr(last_ipd, 'ipd_record_id', None):
        ipd_record_id = 'IPD00001'
    else:
        last_ipd_record_id = last_ipd.ipd_record_id
        # Defensive: extract the numeric part safely
        import re
        match = re.search(r'IPD0*(\d+)', str(last_ipd_record_id))
        if match:
            next_id = int(match.group(1)) + 1
            ipd_record_id = f'IPD{next_id:05d}'
        else:
            # fallback if format is unexpected
            ipd_record_id = 'IPD00001'

    ipd_data = {
        "user": user.id,
        "tenant": request.tenant.id,
        "patient": appointment.patient.id,
        "doctor": appointment.doctor.id,
        "appointment": appointment.id,
        "ipd_record_id": ipd_record_id,
    }

    ipd_serializer = IPDCreateUpdateSerializer(data=ipd_data)
    if ipd_serializer.is_valid():
        ipd = ipd_serializer.save(user=request.user, tenant=request.tenant)
    else:
        return JsonResponse({"error": ipd_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    appointment.appointment_type = "IPD"
    appointment.save()
    print("Appointment converted to IPD successfully!")
    logger.info("Appointment converted to IPD successfully!")
    messages.success(request, "Appointment(OPD) converted to IPD successfully!")
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Appointment converted to IPD successfully!"}, status=status.HTTP_200_OK)

    return redirect('/ipd/list')




@csrf_exempt
@permission_required('appointment-add')
def patient_appointment_create(request):
    if request.method == 'POST':
        try:
            with transaction.atomic():
                user_id = request.session.get('user_id')
                if not user_id:
                    return JsonResponse({"error": "User not logged in"}, status=status.HTTP_401_UNAUTHORIZED)
                user = User.objects.get(id=user_id)
                request.user = user
                print('User ID:', user_id)
                print('User:', user)

                # Create patient
                patient_data = request.POST.copy()
                # patient_data["user"] = user.id

                doctor_id = request.POST.get('doctor')
                department_id = request.POST.get('department')

                try:
                    doctor = Employee.objects.get(id=doctor_id)
                    department = Department.objects.get(id=department_id)
                except (Employee.DoesNotExist, Department.DoesNotExist):
                    return JsonResponse({"error": "Invalid doctor or department ID"}, status=status.HTTP_400_BAD_REQUEST)

                patient_data["tenant"] = request.tenant.id
                patient_data["doctor"] = doctor.id
                patient_data["department"] = department.id

            # Generate patient_record_id
            last_patient = Patient.objects.order_by('id').last()
            if not last_patient:
                patient_record_id = 'PID'
            else:
                last_id = last_patient.patient_record_id.split('PID')[1].strip()
                patient_record_id = f'PID{int(last_id) + 1:05d}'
                patient_data["patient_record_id"] = patient_record_id

                patient_serializer = PatientSerializer(data=patient_data)
                if patient_serializer.is_valid():
                    patient = patient_serializer.save(
                        tenant=request.tenant,
                        doctor=doctor,
                        department=department
                    )
                else:
                    return JsonResponse({"error": patient_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

                # Create appointment
                appointment_data = request.POST.copy()
                appointment_data["tenant"] = request.tenant.id
                appointment_data["patient"] = patient.id
                appointment_data["doctor"] = doctor.id

                # Generate appointment_record_id
                last_appointment = Appointment.objects.order_by('id').last()
                if not last_appointment:
                    appointment_data["appointment_record_id"] = 'APPOINT - #00001'
                else:
                    last_id = last_appointment.appointment_record_id.split('-')[1].strip().replace('#', '')
                    appointment_data["appointment_record_id"] = f'APPOINT - #{int(last_id) + 1:05d}'

                appointment_serializer = AppointmentCreateUpdateSerializer(data=appointment_data)
                if appointment_serializer.is_valid():
                    validated_data = appointment_serializer.validated_data
                    appointment_serializer.save()

                    if request.GET.get('api') == 'true':
                        return JsonResponse(
                            {"msg": "Appointment booked successfully!", "data": validated_data},
                            status=status.HTTP_201_CREATED,
                        )
                    messages.success(request, "Appointment booked successfully.")
                    return redirect('/appointments/appointment')
                else:
                    # # user.delete()
                    patient.delete()
                    return JsonResponse({"error": appointment_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        except IntegrityError as e:
            print(f"Integrity error: {str(e)}")
            return JsonResponse({"error": "User with this email already exists."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            return JsonResponse({"error": "Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    doctors = Employee.objects.filter(role_id=2)
    departments = Department.objects.all()

    return render(request, 'appointments/patient_appointment_form.html', {
        "doctors": doctors,
        "departments": departments
    })








# Pescription work

@csrf_exempt
def prescription_add(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk)
    medicine = MedicineList.objects.all()
    medicineSerializer = MedicineListSerializer(medicine, many=True)
    ic(medicineSerializer.data)
    if request.method == 'POST':
        data = request.POST
        medicines = []

        medicine_names = data.getlist('medicine_name[]')
        dosages = data.getlist('dosage[]')
        durations = data.getlist('duration[]')
        times = data.getlist('time[]')
        composition = data.getlist('composition[]')
        stock = data.getlist('stock[]')

        for i in range(len(medicine_names)):
            medicines.append({
                "medicine": medicine_names[i],
                "dosage": dosages[i],
                "duration": durations[i],
                "time": times[i],
                "composition": composition[i],
                "stock": stock[i]
            })

        prescription_json = {
            "medicines": medicines,
            "physical_info": {
                "food_allergies": data.get('food_allergies'),
                "tendency_bleed": data.get('tendency_bleed'),
                "heart_disease": data.get('heart_disease'),
                "blood_pressure": data.get('blood_pressure'),
                "diabetic": data.get('diabetic'),
                "surgery": data.get('surgery'),
                "accident": data.get('accident'),
                "others": data.get('others'),
                "medical_history": data.get('medical_history'),
                "current_medication": data.get('current_medication'),
                "female_pregnancy": data.get('female_pregnancy'),
                "breast_feeding": data.get('breast_feeding'),
                "pulse_rate": data.get('pulse_rate'),
                "temperature": data.get('temperature')
            },
            "problem": data.get('problem'),
            "tests": data.get('tests'),
            "advice": data.get('advice'),
            "diagnosis": data.get('diagnosis'),
            "next_visit_days": data.get('next_visit_days')
        }

        last_prescription = Pescription.objects.order_by('id').last()
        prescription_id = 'PRESC00001' if not last_prescription else f'PRESC{int(last_prescription.pescription_custom_id.replace("PRESC", "")) + 1:05d}'

        prescription = Pescription.objects.create(
            appointment=appointment,
            tenant=appointment.tenant,
            patient=appointment.patient,
            doctor=appointment.doctor,
            pescription_custom_id=prescription_id,
            prescription=prescription_json
        )

        if request.GET.get('api')=='true':
            return JsonResponse({'status':200,"pescription_data":prescription,"appointment": appointment, "medicines":medicineSerializer.data})
        return redirect('appointments:prescription-view', pk=appointment.id) 

    return TemplateResponse(request, 'appointments/prescription/add.html', {"appointment": appointment, "medicines":medicineSerializer.data})



def prescription_view(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk)
    appointment_data = AppointmentSerializer(appointment).data
    prescriptions = Pescription.objects.filter(appointment=appointment).first()

    prescription_content = prescriptions.prescription if prescriptions else None

    if request.GET.get('api')=="true":
        return JsonResponse({"status":200, 'pescription_view':prescription_content,"appointment":appointment_data})
    return TemplateResponse(
        request,
        'appointments/prescription/view.html',
        {
            "prescriptions": prescription_content,
            "appointment": appointment_data,
        }
    )





@csrf_exempt
def prescription_update(request, pk):
    ic(request, pk)
    appointment = get_object_or_404(Appointment, pk=pk)
    medicine = MedicineList.objects.all()
    medicineSerializer = MedicineListSerializer(medicine, many=True)
    prescription = Pescription.objects.filter(appointment=appointment).first()

    if prescription:
        ic(prescription.prescription)

    if request.method == 'POST':
        data = request.POST
        ic(data)

        # Handle medicine data
        medicines = []
        medicine_names = data.getlist('medicine_name[]')
        dosages = data.getlist('dosage[]')
        durations = data.getlist('duration[]')
        times = data.getlist('time[]')
        composition = data.getlist('composition[]')
        stock = data.getlist('stock[]')

        for i in range(len(medicine_names)):
            medicines.append({
                "medicine": medicine_names[i],
                "dosage": dosages[i],
                "duration": durations[i],
                "time": times[i],
                "composition": composition[i],
                "stock": stock[i]
            })

        prescription_json = {
            "medicines": medicines,
            "physical_info": {
                "food_allergies": data.get('food_allergies'),
                "tendency_bleed": data.get('tendency_bleed'),
                "heart_disease": data.get('heart_disease'),
                "blood_pressure": data.get('blood_pressure'),
                "diabetic": data.get('diabetic'),
                "surgery": data.get('surgery'),
                "accident": data.get('accident'),
                "others": data.get('others'),
                "medical_history": data.get('medical_history'),
                "current_medication": data.get('current_medication'),
                "female_pregnancy": data.get('female_pregnancy'),
                "breast_feeding": data.get('breast_feeding'),
                "pulse_rate": data.get('pulse_rate'),
                "temperature": data.get('temperature')
            },
            "problem": data.get('problem'),
            "tests": data.get('tests'),
            "advice": data.get('advice'),
            "diagnosis": data.get('diagnosis'),
            "next_visit_days": data.get('next_visit_days')
        }
        # ic(prescription_json)

        if prescription:
            prescription.prescription = prescription_json
            # ic(prescription.prescription)
            prescription.save()

        return redirect('appointments:prescription-view', pk=appointment.id)
    
    
    duration_options = ["1 day", "3 days", "5 days", "7 days", "10 days", "15 days", "1 month"]
    time_options = ["Before Meal", "After Meal", "Morning", "Night", "Anytime"]
    dosage_options = ["1-0-1", "1-1-1", "1-1-0", "0-1-1", "1-0-0", "0-1-0", "0-0-1"]
    
    physical_fields = [
        ("food_allergies", "Food Allergies"),
        ("tendency_bleed", "Tendency to Bleed"),
        ("heart_disease", "Heart Disease"),
        ("blood_pressure", "Blood Pressure"),
        ("diabetic", "Diabetic"),
        ("surgery", "Surgery"),
        ("accident", "Accident"),
        ("others", "Others"),
        ("medical_history", "Medical History"),
        ("current_medication", "Current Medication"),
        ("female_pregnancy", "Female Pregnancy"),
        ("breast_feeding", "Breast Feeding"),
        ("pulse_rate", "Pulse Rate"),
        ("temperature", "Temperature"),
    ]

    return TemplateResponse(request, 'appointments/prescription/update.html', {
        "prescription": prescription,
        "medicines": medicineSerializer.data,
        "prescription_data": prescription.prescription if prescription else {},
        "duration_options": duration_options,
        "time_options": time_options,
        "dosage_options": dosage_options,
        "physical_fields": physical_fields,
    })




@csrf_exempt
def pescription_suggestion(request, pk):
    if request.method == 'POST':
        try:
            appointment = get_object_or_404(Appointment, pk=pk)
            if appointment.soap_data:
                data = appointment.soap_data
                ic(data)
            else:
                return JsonResponse({'error': 'No soap_data available for this appointment.'}, status=404)

            response = openai.ChatCompletion.create(
                model="gpt-4",
                messages = [
                    {
                        "role": "system",
                        "content": "You are a smart and intelligent medical assistant specialized in writing prescriptions based on SOAP data. Always respond in well-formatted, readable text for human use. Do not return in JSON or bullet points. Include the following sections clearly and always in the same format."
                    },
                    {
                        "role": "user",
                        "content": f"""
                Generate a detailed yet concise medical prescription for a patient based on the following SOAP data and always suggest medications(atleast 3 medicine) and tests if needed that are medically relevant to the patient's condition and provided SOAP data:

                SOAP Data:
                {data}

                Format the output with the following structure:

                Complaint: <brief summary of the patient’s primary complaint>

                Rx (Prescription):
                Medication:
                1. <Medicine Name>, <Dosage>, <Frequency>, <Before/After food>
                2. ...

                Investigation:

                Lab Test:
                1. <Name of test>
                2. ...

                Scan Test:
                <If none, say: No Radiology test Needed>

                Only include medically relevant medications or tests. If any section has no information, provide an appropriate clinical response (e.g., 'No Radiology test Needed').
                """
                    }
                ],

                temperature=0.5,
                max_tokens=700
            )

            suggested_pescription= response['choices'][0]['message']['content'].strip()
            # ic(prescription_suggestion)
            if appointment.pescription_suggestion is None:
                appointment.pescription_suggestion = suggested_pescription
                appointment.save()
                ic(appointment.pescription_suggestion)
            return JsonResponse({'prescription_html': suggested_pescription})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)



def pescription_soap_email(request, appointment_id):
    try:
        appointment = get_object_or_404(Appointment, id=appointment_id)
        if not appointment.soap_data:
            return JsonResponse({"error": "No SOAP data available for this appointment."}, status=404)

        # soap_data = appointment.soap_data
        # pescription_suggestion = appointment.pescription_suggestion

        data = json.loads(request.body)
        print("Received data:", data)

        to = data.get('to')
        cc = data.get('cc', '')
        bcc = data.get('bcc', '')
        subject = data.get('subject', f"SOAP Data and Prescription for Appointment {appointment.appointment_record_id}")
        message = data.get('message', 'Testing email functionality.')

        if not to:
            return JsonResponse({'error': 'Recipient email is required.'}, status=400)

        email = EmailMessage(
            subject=subject,
            body=message,
            to=[to],
            cc=[cc] if cc else [],
            bcc=[bcc] if bcc else [],
        )

        try:
            email.send()
            return JsonResponse({"status": "success","message": "Email sent successfully!"}, status=200)
        except Exception as email_error:
            return JsonResponse({'error': f"Failed to send email: {str(email_error)}"}, status=500)
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)