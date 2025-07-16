from django.db import models
from users.models import CustomUser, Tenant
from departments.models import Department
from staff_management.models import Employee


class Patient(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name='patient')
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    patient_record_id = models.CharField(max_length=100,blank=True, null=True)
    name = models.CharField(max_length=100, default="Patient 1")
    phone = models.CharField(max_length=15, unique=True, null=True)
    guardian_name = models.CharField(max_length=50, null=True)
    guardian_phone = models.CharField(max_length=15, null=True)
    age = models.CharField(max_length=3, default="0")
    gender = models.CharField(max_length=100, blank=True, null=True)
    blood_group = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, null=True)
    state = models.CharField(max_length=50, null=True)
    
    email = models.EmailField(max_length=100, unique=True, null=True)
    aadhar_card = models.CharField(max_length=50, null=True, blank=True)
    ayushman_card = models.CharField(max_length=50, null=True, blank=True)
    marital_status = models.CharField(max_length=100, blank=True, null=True)
    image = models.TextField(blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    tpa_id = models.CharField(max_length=100, null=True, blank=True)
    tpa_validity = models.DateField(auto_now_add=True, null=True, blank=True)
    patient_history = models.JSONField(blank=True, null=True) # added extra
    ai_report = models.TextField(blank=True, null=True)
    social_security_no = models.CharField(max_length=100, null=True, blank=True)
    
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True, blank=True)
    
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Patients'

    def __str__(self):
        return f"{self.name}"