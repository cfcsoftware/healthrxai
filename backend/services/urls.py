from django.urls import path
from .views import *

app_name = "services"

urlpatterns = [
    
            path("", service_list, name="service-list"),
            path("add", service_add, name="service-add"),
            path("update/<int:pk>/", service_update, name="service-update"),
            path("delete/<int:pk>/", service_delete, name="service-delete"),
            # path("/<int:pk>/", service_detail, name="service-detail"),
            # path("/view/<int:pk>/", service_view, name="service-view"),
            
            path('get_service_type_by_bill_type/<str:bill_type>/', get_service_type_by_bill_type, name='get_service_type_by_bill_type'), 
            path('get_service_by_service_type/<str:service_type>/', get_service_by_service_type, name='get_service_by_service_type'), 
            
            path("upload-services/", upload_services_csv, name="upload_services_csv"),
            
            
]
