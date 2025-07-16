from django.urls import path
from .views import *

urlpatterns = [
    
    path("test/list", pathology_test_list, name="pathology_test_list"),
    path('test/add', pathology_test_add, name='pathology_test_add'),

    path("test/update/<int:id>", pathology_test_update, name="pathology_test_update"),
    path("test/view/<int:id>", pathology_test_view, name="pathology_test_view"),
    path("test/delete/<int:id>", pathology_test_delete, name="pathology_test_delete"),
    
    
    path("report/list", pathology_report_list, name="pathology-report-list"),
    path("report/update/<int:id>", pathology_report_update, name="pathology-report-update"),
    path("report/view/<int:id>", pathology_report_view, name="pathology-report-view"),
    # path("report/delete/<int:id>", pathology_report_delete, name="pathology-report-delete"),
        
    
]
