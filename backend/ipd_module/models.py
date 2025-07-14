from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee
from appointments_list.models import Appointment

class IPD(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    appointment = models.ForeignKey(Appointment, on_delete=models.SET_NULL, null=True)
    ipd_record_id = models.CharField(max_length=50, blank=True, null=True)
    
    admission_date = models.DateField(blank=True, null=True)
    discharge_date = models.DateField(blank=True, null=True)
    
    height = models.CharField(max_length=10, blank=True, null=True)
    weight = models.CharField(max_length=10, blank=True, null=True)
    bp = models.CharField(max_length=10, blank=True, null=True)
    pulse = models.CharField(max_length=10, blank=True, null=True)
    temperature = models.CharField(max_length=10, blank=True, null=True)
    respiration = models.CharField(max_length=10, blank=True, null=True)
    symptoms = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    
    previous_medical_issue = models.TextField(blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    
    bed_ward_history = models.JSONField(blank=True, null=True) # added extra
    ipd_patient_history = models.JSONField(blank=True, null=True) # added extra
    
    casualty = models.CharField(max_length=10, blank=True, null=True)
    old_patient = models.CharField(max_length=10, blank=True, null=True)
    tpa = models.CharField(max_length=255,blank=True, null=True)
    status = models.CharField(max_length=50, blank=True, null=True, default='Admitted')
    
    
    bed_charge = models.CharField(max_length=50, blank=True, null=True)
    service_charge = models.CharField(max_length=50, blank=True, null=True)
    miscellaneous_charge = models.CharField(max_length=50, blank=True, null=True)
    total_charge = models.CharField(max_length=50, blank=True, null=True)
    
    

    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)


    class Meta:
        db_table = 'IPD-Data'


    def __str__(self):
        return self.ipd_record_id
    





# class IPDBill(models.Model):
    
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
#     tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
#     patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
#     doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
#     medicine_category = models.CharField(max_length=255, blank=True, null=True)
#     medicine_name = models.CharField(max_length=10, blank=True, null=True)
#     cost = models.CharField(max_length=10, blank=True, null=True)
#     qty = models.CharField(max_length=10, blank=True, null=True)
#     amount = models.CharField(max_length=10, blank=True, null=True)
#     tax = models.CharField(max_length=10, blank=True, null=True)
#     tax_amount = models.CharField(max_length=10, blank=True, null=True)
#     discount = models.CharField(max_length=10, blank=True, null=True)
#     total_amount = models.CharField(max_length=10, blank=True, null=True)
#     subtotal = models.CharField(max_length=10, blank=True, null=True)
#     payment_mode = models.CharField(max_length=255, blank=True, null=True)
#     net_amount = models.CharField(max_length=50, blank=True, null=True)
#     paid_amount = models.CharField(max_length=50, blank=True, null=True)
#     due_amount = models.CharField(max_length=50, blank=True, null=True)

#     created_at = models.DateField(auto_now_add=True, null=True, blank=True)
#     updated_at = models.DateField(auto_now=True, null=True, blank=True)

    