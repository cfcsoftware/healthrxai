from django.urls import path
from .views import *

app_name = "staff_management"

urlpatterns = [

    # Staff management
    path("employee/register", EmployeeRegister.as_view(), name="employees-create"),
    
    path('employee/list', employee_list, name='employee_list'),
    path('employee/add', employee_add, name='employee_add'),
    path('employee/edit/<int:id>', employee_edit, name='employee_edit'),
    path('employee/delete/<int:id>', employee_delete, name='employee_delete'),
    path('employee/view/<int:id>', employee_view, name='employee_view'),
    

]
