from django.urls import path
from .views import *



urlpatterns = [
    
    #  Billing
    path("billing", billing_list, name="billing-list"),
    path ('billing/add', create_patient_appointment_billing, name='billing-add'),
    # path('billing/edit/<int:id>', billing_edit, name='billing_edit'),
    path('billing/delete/<int:id>', billing_delete, name='billing_delete'),
    path('billing/view/<int:id>', billing_view, name='billing_view'),
    
    path('get_patient_by_phone', get_patient_by_phone, name='get_patient_by_phone'),
    path('get_billing_details_by_patient_id/<int:patient_id>', get_billing_details_by_patient_id, name='get_billing_details_by_patient_id'),
    
    
    path('billing/final', final_bill, name='final_bill'),   
    path('final/add', create_final_bill, name='create_final_bill'),
    # path('final/edit/<int:pk>', update_final_bill, name='update_final_bill'),
    path('final/view/<int:pk>', view_final_bill, name='view_final_bill'),
    path('final/delete/<int:pk>', delete_final_bill, name='delete_final_bill'),
]
