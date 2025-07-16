from django.urls import path
from .views import *

app_name = "settings"

urlpatterns = [
    
            path("setting/bed", bed_setting, name="setting-bed-list"),
            path("setting/bed/add", bed_setting_add, name="setting-bed-add"),
            path("setting/bed/update/<int:pk>", bed_setting_update, name="setting-bed-update"),
            path("setting/bed/delete/<int:pk>", bed_setting_delete, name="setting-bed-delete"),
            
            
            
            path('setting/change-password', change_password, name='change_password'),
            path("setting/user-profile", profile, name="profile"),
            
            path("setting/get-logo", get_hospital_logo, name="get_hospital_logo"),
            # -> file upload
            path("upload", upload_file, name="upload_file"),


            
            
           
]
