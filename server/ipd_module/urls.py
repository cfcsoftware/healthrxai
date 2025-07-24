from django.urls import path
from .views import *

urlpatterns = [
    
    # IPD Module
    path('ipd/list', ipd_list, name='ipd_list'),
    path("update/<int:pk>", ipd_update, name="ipd_update"),
    path('delete/<int:id>', ipd_delete, name='ipd_delete'),
    path('view/<int:id>', ipd_view, name='ipd_view'),
    
    path('get-patient-doctor/<int:appointment_id>', get_patient_doctor, name='get_patient_doctor'),
    path('get-bed-ward', get_bed_ward, name='get_bed_ward'),
    path('get-bed-charges', get_bed_charges, name='get_bed_charges'),
    
    
]
