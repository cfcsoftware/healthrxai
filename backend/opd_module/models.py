from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee
from appointments_list.models import Appointment


class OPD(models.Model):
    
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    appointment = models.ForeignKey(Appointment, on_delete=models.SET_NULL, null=True)
    appointment_date = models.DateField(blank=True, null=True)
    opd_record_id = models.CharField(max_length=50, blank=True, null=True)
    height = models.CharField(max_length=10, blank=True, null=True)
    weight = models.CharField(max_length=10, blank=True, null=True)
    bp = models.CharField(max_length=10, blank=True, null=True)
    pulse = models.CharField(max_length=10, blank=True, null=True)
    temperature = models.CharField(max_length=10, blank=True, null=True)
    respiration = models.CharField(max_length=10, blank=True, null=True)
    symptoms = models.TextField(blank=True, null=True)
    previous_medical_issue = models.TextField(blank=True, null=True)
    symptoms = models.TextField(blank=True, null=True)
    charge_category = models.CharField(max_length=50, blank=True, null=True)
    charge = models.CharField(max_length=50, blank=True, null=True)
    payment_mode = models.CharField(max_length=50, blank=True, null=True)
    paid_amount = models.CharField(max_length=50, blank=True, null=True)
    due_amount = models.CharField(max_length=50, blank=True, null=True)
    live_consult = models.CharField(max_length=5, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)
