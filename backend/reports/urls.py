from django.urls import path
from .views import *

app_name = "reports"

urlpatterns = [
    
            path("report/appointment", ReportAppointmentListView.as_view(), name="report-appointment-list"),
            path("report/opd", ReportOPDListView.as_view(), name="report-opd-list"),
            path("report/ipd", ReportIPDListView.as_view(), name="report-ipd-list"),
            path("report/pharmacy", ReportPharmacyListView.as_view(), name="report-pharmacy-list"),
            path("report/pathology", ReportPathologyListView.as_view(), name="report-pathology-list"),
            path("report/radiology", ReportRadiologyListView.as_view(), name="report-radiology-list"),
            path("report/blood-bank", ReportBloodBankListView.as_view(), name="report-blood-bank-list"),
            path("report/ambulance", ReportAmbulanceListView.as_view(), name="report-ambulance-list"),
            path("report/birth-death", ReportBirthDeathListView.as_view(), name="report-birth-death-list"),
            path("report/human-resource", ReportHumanResourceListView.as_view(), name="report-human-resource-list"),
            path("report/insurance", ReportInsuranceListView.as_view(), name="report-insurance-list"),
            path("report/accounting", ReportAccountingListView.as_view(), name="report-accounting-list"),
            path("report/inventory", ReportInventoryListView.as_view(), name="report-inventory-list"),
            path("report/operation", ReportOperationListView.as_view(), name="report-operation-list"),
            path("report/patient", ReportPatientListView.as_view(), name="report-patient-list"),
           
]
