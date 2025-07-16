import logging
from saas_admin.middleware import permission_required  
from django.http import JsonResponse
from django.template.response import TemplateResponse
from django.views.decorators.csrf import csrf_exempt
from billing_counter.models import *
from billing_counter.serializers import *
from patients.models import *
from patients.serializers import *
from appointments_list.models import *
from appointments_list.serializers import *
from staff_management.models import *
from staff_management.serializers import *
from surgery_module.models import *
from surgery_module.serializers import *
from datetime import date
from datetime import datetime, timedelta
import json
from .models import DoctorChatSession, DoctorChatMessage
from .serializers import DoctorChatSessionSerializer
import uuid
import speech_recognition as sr
from saas_admin.utils import *
from django.views.decorators.csrf import csrf_exempt
from .ai_models import OpenAIChatClient, OpenAITitleClient
from django.db.models import Prefetch
from decimal import Decimal

logger = logging.getLogger(__name__)


@permission_required('view-dashboard')
def dashboard(request):
    # session = dict(request.session)
    # print(f"Session data: {session}")    
    
    email = request.session.get('email', '')
    role_id = request.session.get('role_id')
    tenant_id = request.session.get("tenant_id")
    
    patients = Patient.objects.filter(tenant=tenant_id).order_by('-id')
    patients_count = patients.count()
    appoint = Appointment.objects.filter(tenant=tenant_id)
    appoint_count = appoint.count()
    
    today_date = date.today()
    today_appointment = Appointment.objects.filter(tenant=request.tenant, appointment_date=today_date).order_by('-id')
    today_appointment_data = AppointmentSerializer(today_appointment, many=True).data
    appointments_count = today_appointment.count()
    
    staff = Employee.objects.filter(tenant=tenant_id).order_by('-id')
    staff_count = staff.count()
    
    surgery = Surgery.objects.filter(tenant=tenant_id).order_by('-id')
    surgery_count = surgery.count()
    
    bill = Billing.objects.filter(tenant=tenant_id).values('amount_paid').order_by('-id')
    total_bill_sum = sum(Decimal(b['amount_paid']) for b in bill if b['amount_paid'])
    
    all_appointments = Appointment.objects.filter(tenant=request.tenant).order_by('-id')
    appointments = []

    for appt in all_appointments:
        try:
            start_datetime = datetime.combine(appt.appointment_date, appt.appointment_time)
            patient_name = appt.patient.name if appt.patient else "Unknown Patient"
            doctor_name = appt.doctor.name if appt.doctor else "Unknown Doctor"
        except AttributeError:
            continue

        end_datetime = start_datetime + timedelta(minutes=30)

        title = f"{patient_name} - Dr. {doctor_name}"
        appointments.append({
            "title": title,
            "start": start_datetime.isoformat(),
            "end": end_datetime.isoformat(),
        })

    calendar_events = json.dumps(appointments)
    
    
    if role_id == 1:
        return TemplateResponse(request, 'dashboard/dashboard.html', {'email': email,'patients_count':patients_count, 'appointments_count':appoint_count, 'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events, 'staff_count':staff_count,"surgery_count":surgery_count,"total_bill_sum":total_bill_sum})
    
    elif role_id == 2:
        session_id = str(uuid.uuid4())
        request.session['session_id'] = session_id

        doctor_user_id = request.session.get('employee_id')
        tenant = request.tenant

        if not doctor_user_id or not tenant:
            return JsonResponse({"status": 400, "message": "User or tenant not found"}, status=400)

        try:
            doctor_user = Employee.objects.get(id=doctor_user_id)
        except Employee.DoesNotExist:
            return JsonResponse({"status": 400, "message": "Employee not found"}, status=400)

        # Create new session
        chat_session = DoctorChatSession.objects.create(
            user=doctor_user,
            tenant=tenant,
            session_id=session_id,
        )

        # Load all previous sessions with messages
        previous_sessions = DoctorChatSession.objects.filter(
            user=doctor_user,
            tenant=tenant,
            messages__isnull=False
        ).distinct().order_by('-created_at').prefetch_related(
            Prefetch('messages', queryset=DoctorChatMessage.objects.order_by('-timestamp'))
        )

        openai_client = OpenAITitleClient()

        for session in previous_sessions:
            if not session.title:
                messages = session.messages.all()
                user_messages = [
                    msg.content for msg in messages 
                    if msg.role and msg.role.lower() == 'user'
                ]

                if user_messages:
                    prompt = (
                        "Please generate a short 5 words and make sure no punctuations included, relevant title for the following chats\n\n"
                        + "\n".join(user_messages[:10])
                    )

                    try:
                        title = openai_client.get_response(prompt, model="gpt-4o", max_tokens=20)
                        if title:
                            session.title = title
                            session.save(update_fields=['title'])
                    except Exception as e:
                        print(f"Failed to generate title for session {session.id}: {e}")

        chat_session_data = DoctorChatSessionSerializer(chat_session).data
        previous_sessions_data = DoctorChatSessionSerializer(previous_sessions, many=True).data

        if request.GET.get('api') == 'true':
            return JsonResponse({
                "status": 200,
                "message": "Welcome to the Doctor dashboard!",
                "all_chat_sessions": previous_sessions_data,
                "session_id": session_id,
                "email": email
            })

        return TemplateResponse(request, 'dashboard/doctor-dashboard.html', {
            'email': email,
            'chat_session': chat_session_data,
            'session_id': session_id,
            'all_chat_sessions': previous_sessions_data,
        })
        
        
        
    elif role_id == 3:
        return TemplateResponse(request, 'dashboard/receptionist-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    elif role_id == 4:
        return TemplateResponse(request, 'dashboard/manager-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    elif role_id == 5:
        return TemplateResponse(request, 'dashboard/nurse-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    elif role_id == 6:
        return TemplateResponse(request, 'dashboard/pharmacist-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    elif role_id == 7:
        return TemplateResponse(request, 'dashboard/pathologist-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    elif role_id == 8:
        return TemplateResponse(request, 'dashboard/radiologist-dashboard.html',{'email':email,'today_appointment_data':today_appointment_data, 'calendar_events':calendar_events})
    else:
        return TemplateResponse(request, 'dashboard/dashboard.html',{'email':email})









@csrf_exempt
def healthrx_ai(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            prompt = data.get('input', '')
            session_id = data.get('session_id')

            if not session_id:
                return JsonResponse({'error': 'Session ID missing'}, status=400)
            if not prompt:
                return JsonResponse({'error': 'input is required'}, status=400)
            chat_session = DoctorChatSession.objects.filter(session_id=session_id).first()
            if not chat_session:
                return JsonResponse({'error': 'Chat session not found'}, status=404)

            DoctorChatMessage.objects.create(session=chat_session, role="User", content=prompt)

            chat_client = OpenAIChatClient()
            conversation_history = request.session.get('conversation_history', [])
            chat_client.set_conversation_history(conversation_history)

            answer = chat_client.get_response(prompt)

            DoctorChatMessage.objects.create(session=chat_session, role="Assistant", content=answer)

            request.session['conversation_history'] = chat_client.get_conversation_history()
            
            return JsonResponse({
                'answer': answer,
                # 'conversation_history': request.session['conversation_history']
            }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)



def get_history_sessionwise(request, session_id):
    """
    Retrieve chat history for a specific session.
    """
    if not session_id:
        return JsonResponse({'error': 'Session ID is required'}, status=400)

    chat_session = DoctorChatSession.objects.filter(session_id=session_id).first()
    if not chat_session:
        return JsonResponse({'error': 'Chat session not found'}, status=404)

    messages = chat_session.messages.all().order_by('timestamp')
    messages_data = [
        {
            'role': message.role,
            'content': message.content,
            'timestamp': message.timestamp.isoformat()
        }
        for message in messages
    ]

    return JsonResponse({'messages': messages_data}, status=200)





























# for tenant admin dashboard

# def dashboard(request):
#     print(f"Logged in user: {request.user}")
#     print(f"Logged in tenant: {request.tenant}")
#     print(f"Logged in session user: {request.session.items()}")
#     email = request.session.get('email', '')
#     role_id = request.session.get('role_id')
    
#     if role_id == 1:
#         return render(request, 'dashboard/dashboard.html',{'email':email})
#     elif role_id == 2:
#         return render(request, 'dashboard/doctor-dashboard.html',{'email':email})
#     elif role_id == 3:
#         return render(request, 'dashboard/receptionist-dashboard.html',{'email':email})
#     elif role_id == 4:
#         return render(request, 'dashboard/pharmacist-dashboard.html',{'email':email})
#     elif role_id == 5:
#         return render(request, 'dashboard/pathologist-dashboard.html',{'email':email})
#     elif role_id == 6:
#         return render(request, 'dashboard/radiologist-dashboard.html',{'email':email})
    
