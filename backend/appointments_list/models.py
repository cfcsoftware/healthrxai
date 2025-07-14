from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee
from billing_counter.models import Billing

class Appointment(models.Model):
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant=models.ForeignKey(Tenant, on_delete=models.CASCADE,null=True)
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True ,related_name="patients")
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True,related_name='doctors')
    billing = models.ForeignKey(Billing, on_delete=models.SET_NULL, null=True,related_name='billings')
    appointment_record_id = models.CharField(max_length=100, unique=True, null=True)
    fees = models.CharField(max_length=5, null=True)
    shift = models.CharField(max_length=50, null=True, blank=True)
    appointment_date = models.DateField(blank=True, null=True)
    appointment_time = models.TimeField(blank=True, null=True)
    priority = models.CharField(max_length=50, null=True, blank=True)
    payment_mode = models.CharField(max_length=50, null=True, blank=True)
    advance_payment = models.CharField(max_length=50, null=True, blank=True)
    total_payment = models.CharField(max_length=50, null=True, blank=True)
    due_payment = models.CharField(max_length=50, null=True, blank=True)
    aadhar_card_no = models.CharField(max_length=50, null=True, blank=True)
    ayushman_card_no = models.CharField(max_length=50, null=True, blank=True)
    aabha_card_no = models.CharField(max_length=50, null=True, blank=True)
    upi_id = models.CharField(max_length=50, null=True, blank=True)
    credit_card_no = models.CharField(max_length=50, null=True, blank=True)
    debit_card_no = models.CharField(max_length=50, null=True, blank=True)
    bank_name = models.CharField(max_length=50, null=True, blank=True)
    bank_acc_no = models.CharField(max_length=50, null=True, blank=True)
    acc_holder_name = models.CharField(max_length=50, null=True, blank=True)
    insurance_policy_no = models.CharField(max_length=50, null=True, blank=True)
    appointment_type = models.CharField(max_length=255, blank=True, null=True)
    
    audio_recordings = models.JSONField(default=list, blank=True, null=True) 
    trasncription = models.TextField(blank=True, null=True)
    soap_data = models.TextField(blank=True, null=True)
    pescription_suggestion = models.TextField(blank=True, null=True)

    # general information
    height = models.CharField(max_length=10, blank=True, null=True)
    weight = models.CharField(max_length=10, blank=True, null=True)
    bp = models.CharField(max_length=10, blank=True, null=True)
    pulse = models.CharField(max_length=10, blank=True, null=True)
    temperature = models.CharField(max_length=10, blank=True, null=True)
    spo2 = models.CharField(max_length=10, blank=True, null=True)
    rbs = models.CharField(max_length=10, blank=True, null=True)

    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)


    class Meta:
        db_table = 'Patient-Appointments'




class Pescription(models.Model):
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE, null=True ,related_name="prescriptions")
    tenant=models.ForeignKey(Tenant, on_delete=models.CASCADE,null=True ,related_name="prescriptions")
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True ,related_name="prescriptions")
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True ,related_name="prescriptions")
    pescription_custom_id = models.CharField(max_length=100, unique=True, null=True)
    prescription = models.JSONField(default=dict)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Patient-Prescriptions'