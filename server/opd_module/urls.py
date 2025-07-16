from django.urls import path
from .views import *

urlpatterns = [
    
    # OPD Module
    path("opd", OPDListView.as_view(), name="opd-list"),
    
    path('list', opd_list, name='opd_list'),
    # path('add', opd_add, name='opd_add'),
    path('edit/<int:id>', opd_edit, name='opd_edit'),
    path('delete/<int:id>', opd_delete, name='opd_delete'),
    path('view/<int:id>', opd_view, name='opd_view'),
    path("update/<int:pk>", opd_update, name="opd_update"),
    
    path('get-patient-doctor/<int:appointment_id>', get_patient_doctor, name='get_patient_doctor'),
    
]
