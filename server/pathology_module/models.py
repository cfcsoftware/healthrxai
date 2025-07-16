from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee


class PathologyTest(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 

    test_name = models.CharField(max_length=100, blank=True, null=True)
    short_name = models.CharField(max_length=100, blank=True, null=True)
    test_type = models.CharField(max_length=255, blank=True, null=True)
    sample_type = models.CharField(max_length=255, blank=True, null=True)
    total_amount = models.TextField(blank=True, null=True)
    precaution = models.TextField(blank=True, null=True)
    # title
    title = models.JSONField(blank=True, null=True)

    # test components
    component_name = models.JSONField(blank=True, null=True)
    component_unit = models.JSONField(blank=True, null=True)
    component_result = models.JSONField(blank=True, null=True)
    test_status = models.JSONField(blank=True, null=True)
    male_reference_range = models.JSONField(blank=True, null=True)
    female_reference_range = models.JSONField(blank=True, null=True)




    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Patho-Test'

    def __str__(self):
        return f"{self.test_name}"
    



from billing_counter.models import Billing   
    
class PathologyReports(models.Model):

    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    bill = models.ForeignKey(Billing, on_delete=models.CASCADE, null=True, related_name="pathology_reports")
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    referral_doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    patho_test = models.ForeignKey(PathologyTest, on_delete=models.SET_NULL, null=True)

    laboratory_doctor = models.CharField(max_length=100, blank=True, null=True)
    report_days = models.CharField(max_length=10, blank=True, null=True)
    report_date = models.CharField(max_length=10, blank=True, null=True)
    test_details = models.JSONField(blank=True, null=True)
    payment_status = models.CharField(max_length=255, blank=True, null=True)
    total_amounts = models.TextField(blank=True, null=True)
    
    remarks = models.TextField(blank=True, null=True)
    service = models.CharField(max_length=225, blank=True, null=True)


    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)


    class Meta:
        db_table = 'Patho-Reports'

    def __str__(self):
        return f"{self.patho_test}"