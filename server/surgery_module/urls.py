from django.urls import path
from .views import *

app_name = "surgery"

urlpatterns = [
    path("surgery", surgery_list, name="surgery_list"),
    path('surgery/add', surgery_create, name='surgery-create'),
    path('surgery_edit/<int:id>', surgery_edit, name='surgery_edit'),
    path('surgery_delete/<int:id>', surgery_delete, name='surgery_delete'),
    path('surgery_view/<int:id>', surgery_view, name='surgery_view'),

]
