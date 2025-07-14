from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee

class Billing(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    billing_record_id = models.CharField(max_length=100, unique=True, null=True)
    bill_type = models.CharField(max_length=100, blank=True, null=True)
    service_type = models.CharField(max_length=100, blank=True, null=True)
    subtotal = models.CharField(max_length=50, blank=True, null=True)
    amount_paid = models.CharField(max_length=50, blank=True, null=True)
    amount_due = models.CharField(max_length=50, blank=True, null=True)
    discount_percentage = models.CharField(max_length=50, blank=True, null=True)
    round_off = models.CharField(max_length=50, blank=True, null=True)
    payment_mode = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    service_details = models.JSONField(blank=True, null=True) # added extra

    class Meta:
        db_table = 'Billing-General'

    def __str__(self):
        return self.billing_record_id
    




class FinalBilling(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True)
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    patient_name = models.CharField(max_length=225, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    doctor_name = models.CharField(max_length=30, null=True, blank=True)
    category = models.CharField(max_length=10, null=True, blank=True)
    aadhar_card = models.CharField(max_length=50, null=True, blank=True)
    ayushman_card = models.CharField(max_length=50, null=True, blank=True)
    category = models.CharField(max_length=20, null=True, blank=True)

    ward = models.CharField(max_length=20, null=True, blank=True)
    floor = models.CharField(max_length=10, null=True, blank=True)
    bed = models.CharField(max_length=10, null=True, blank=True)

    admission_date = models.DateField(null=True,blank=True)
    surgeon = models.CharField(max_length=50, null=True, blank=True)
    admission_purpose = models.CharField(max_length=50, null=True, blank=True)
    patient_status = models.CharField(max_length=10, null=True, blank=True)
    package_details = models.CharField(max_length=50, null=True, blank=True)

    billing_details = models.JSONField(blank=True, null=True) # added extra

    remarks = models.CharField(max_length=225, null=True, blank=True)
    payment_type = models.CharField(max_length=20, null=True, blank=True)
    
    total_bill_amount = models.CharField(max_length=50, blank=True, null=True)
    total_paid_amount = models.CharField(max_length=50, blank=True, null=True)
    total_due_amount = models.CharField(max_length=50, blank=True, null=True)
    final_discount = models.CharField(max_length=50, blank=True, null=True)
    final_billing_amount = models.CharField(max_length=50, blank=True, null=True)
    ipd_bed_charges = models.CharField(max_length=50, blank=True, null=True)
    ipd_service_charges = models.CharField(max_length=50, blank=True, null=True)
    ipd_misc_charges = models.CharField(max_length=50, blank=True, null=True)
    
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Billing-Final'

    def __str__(self):
        return self.patient_name
