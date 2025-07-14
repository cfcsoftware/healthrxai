from django.urls import path
from .views import *



urlpatterns = [
    
    path('list', bed_management, name='bed-management'),

]
