from django.urls import path
from .views import *


app_name = "departments"

urlpatterns = [
    path("department/", DepartmentListView.as_view(), name="department-list"),
    path('department/add', DepartmentCreateView.as_view(), name='department-create'),
    path("department/<int:department_id>", DepartmentManagementView.as_view(), name="department-manage"),
    
    
    path('department/edit/<int:pk>', department_edit, name='department_edit'),
    path('department/delete/<int:pk>', department_delete, name='department_delete'),
    path('department/view/<int:id>', department_view, name='department_view'),

]
