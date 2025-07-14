from django.urls import path
from .views import *

urlpatterns = [
    
    path("tests/list", radiology_test_list, name="radiology_test_list"),
    path('tests/add', radiology_test_add, name='radiology_test_add'),

    path("tests/update/<int:id>", radiology_test_update, name="radiology_test_update"),
    path("tests/view/<int:id>", radiology_test_view, name="radiology_test_view"),
    path("tests/delete/<int:id>", radiology_test_delete, name="radiology_test_delete"),

    
    
    path("reports/list", radiology_report_list, name="radiology_report_list"),
    path("reports/update/<int:id>", radiology_report_update, name="radiology_report_update"),
    path("reports/view/<int:id>", radiology_report_view, name="radiology_report_view"),
    # path("reports/delete/<int:id>", radiology_report_delete, name="radiology_report_delete"),
    
    
]
