from django.urls import path
from .views import *

app_name = "certificate"

urlpatterns = [
   
    # discharge certificate
    
    path('discharge-certificate', discharge_certificate_list, name='discharge_certificate_list'),
    path('discharge-certificate/add/', discharge_certificate_add, name='discharge_certificate_add'),
    path('discharge-certificate/edit/<int:id>', discharge_certificate_edit, name='discharge_certificate_edit'),
    path('discharge-certificate/delete/<int:id>', discharge_certificate_delete, name='discharge_certificate_delete'),
    path('discharge-certificate/view/<int:id>', discharge_certificate_view, name='discharge_certificate_view'),

    # medical certificate
    
    path('medical-certificate', medical_certificate_list, name='medical_certificate_list'),
    path('medical-certificate/add/', medical_certificate_add, name='medical_certificate_add'),
    path('medical-certificate/edit/<int:id>', medical_certificate_edit, name='medical_certificate_edit'),
    path('medical-certificate/delete/<int:id>', medical_certificate_delete, name='medical_certificate_delete'),
    path('medical-certificate/view/<int:id>', medical_certificate_view, name='medical_certificate_view'),

    # fitness certificate
    
    path('fitness-certificate', fitness_certificate_list, name='fitness_certificate_list'),
    path('fitness-certificate/add/', fitness_certificate_add, name='fitness_certificate_add'),
    path('fitness-certificate/edit/<int:id>', fitness_certificate_edit, name='fitness_certificate_edit'),
    path('fitness-certificate/delete/<int:id>', fitness_certificate_delete, name='fitness_certificate_delete'),
    path('fitness-certificate/view/<int:id>', fitness_certificate_view, name='fitness_certificate_view'),

    # birth certificate
    
    path('birth-certificate', birth_certificate_list, name='birth_certificate_list'),
    path('birth-certificate/add/', birth_certificate_add, name='birth_certificate_add'),
    path('birth-certificate/edit/<int:id>', birth_certificate_edit, name='birth_certificate_edit'),
    path('birth-certificate/delete/<int:id>', birth_certificate_delete, name='birth_certificate_delete'),
    path('birth-certificate/view/<int:id>', birth_certificate_view, name='birth_certificate_view'),

    # death certificate
    
    path('death-certificate', death_certificate_list, name='death_certificate_list'),
    path('death-certificate/add/', death_certificate_add, name='death_certificate_add'),
    path('death-certificate/edit/<int:id>', death_certificate_edit, name='death_certificate_edit'),
    path('death-certificate/delete/<int:id>', death_certificate_delete, name='death_certificate_delete'),
    path('death-certificate/view/<int:id>', death_certificate_view, name='death_certificate_view'),
    
]
