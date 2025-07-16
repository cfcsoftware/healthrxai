from django.urls import path
from .views import *

app_name = "appointments"

urlpatterns = [
    path("appointment", appointment_list, name="appointment-list"),
    path('doctor/appointment', appointements_by_doctor, name='appointements_by_doctor'),  
    path("appointment/add/", patient_appointment_create, name="appointment-add"),
    path("appointment/update/<int:pk>/", update_appointment, name="appointment-update"),
    path('convert_appointment_to_ipd/<int:pk>', convert_appointment_to_ipd, name='convert_appointment_to_ipd'),
    
    # SOAP Investigation
    path("appointment/transcribe/<int:pk>/", appointment_transcription, name="appointment-transcription"),
    path("appointment/SOAP/<int:pk>/", appointment_SOAP, name="appointment-SOAP"),
    path("appointment/ai_pescription/<int:pk>/", pescription_suggestion, name="pescription_suggestion"),  
    path("appointment/soap_pescription_email/<int:appointment_id>/", pescription_soap_email, name='pescription_soap_email'),  
    
    
    

    # prescription
    path('appointment/<int:pk>/prescription/add/', prescription_add, name='prescription-add'),
    path('appointment/<int:pk>/prescription/view/', prescription_view, name='prescription-view'),
    path('appointment/<int:pk>/prescription/update/', prescription_update, name='prescription-update'),
    # path('appointment/<int:pk>/prescription/delete/', prescription_delete, name='prescription-delete'),
    
    path("appointment/get-doctor-fees/<int:doctor_id>/", get_doctor_fees, name="appointment-get-doctor-fees"),
]
