from django.urls import path
from .views import *


urlpatterns = [
        
        
   

    # path('patient/list', patient_list, name='patient_list'),
    path('patient/add', patient_add, name='patient_add'),
    path("all-patient", patient_list, name='patient_list'),
    path('patient/edit/<int:id>', patient_edit, name='patient_edit'),
    path('patient/delete/<int:id>', patient_delete, name='patient_delete'),
    path('patient/view/<int:id>', patient_view, name='patient_view'),
    path('doctor_panel/patients', patients_by_doctor, name='patients_by_doctor'),  
    
      
    path('global/search', global_search, name='global_search'),
    path('upload_data', upload_patients_data, name='upload_patients_data'),
    
    
    path("history/<int:patient_id>", patient_history, name="patients-history"),
    path('history/<int:patient_id>/ai-report', patient_health_ai_report, name='patient_health_ai_report'),
    path("get_patient_details_by_id", get_patient_details_by_id, name="get_patient_details_by_id"),
    path("get_patient_details_by_mobile", get_patient_details_by_mobile, name="get_patient_details_by_mobile"),
    
]