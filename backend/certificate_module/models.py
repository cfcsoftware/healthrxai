from django.db import models
from users.models import Tenant
from patients.models import Patient
from staff_management.models import Employee

# Create your models here.
class DischargeCertificate(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="discharge_certificates")
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True)
    patient_mobile = models.CharField(max_length=15, blank=True, null=True)
    patient_name = models.CharField(max_length=255, blank=True, null=True)
    admission_date = models.DateField(blank=True, null=True)
    discharge_date = models.DateField(blank=True, null=True)
    state = models.CharField(max_length=32,blank=True, null=True )
    pincode = models.CharField(max_length=10,blank=True, null=True)
    district = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    discharge_certificate = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "Discharge-Certificates"
        verbose_name = "Discharge Certificate"
        verbose_name_plural = "Discharge Certificates"
        ordering = ['-created_at']

    def __str__(self):
        return self.patient_name

class MedicalCertificate(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="medical_certificates")
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    doctor_name = models.CharField(max_length=20, blank=True, null=True)
    patient_mobile = models.CharField(max_length=15, blank=True, null=True)
    patient_name = models.CharField(max_length=255, blank=True, null=True)
    examination_date = models.DateField(blank=True, null=True)
    health_status = models.CharField(max_length=32, blank=True, null=True)
    purpose = models.CharField(max_length=10, blank=True, null=True)
    validity = models.CharField(max_length=100, blank=True, null=True)
    medical_certificate = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "Medical-Certificates"
        verbose_name = "Medical Certificate"
        verbose_name_plural = "Medical Certificates"
        ordering = ['-created_at']

    def __str__(self):
        return self.patient_name

class FitnessCertificate(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="fitness_certificates")
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    doctor_name = models.CharField(max_length=20, blank=True, null=True)
    patient_mobile = models.CharField(max_length=15, blank=True, null=True)
    patient_name = models.CharField(max_length=255, blank=True, null=True)
    examination_date = models.DateField(blank=True, null=True)
    fitness_status = models.CharField(max_length=32, blank=True, null=True)
    remarks = models.CharField(max_length=255, blank=True, null=True)
    fitness_certificate = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "Fitness-Certificates"
        verbose_name = "Fitness Certificate"
        verbose_name_plural = "Fitness Certificates"
        ordering = ['-created_at']

    def __str__(self):
        return self.patient_name

class BirthCertificate(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="birth_certificates")
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True)
    patient_name = models.CharField(max_length=255, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=255, blank=True, null=True)
    child_name = models.CharField(max_length=255, blank=True, null=True)
    child_gender = models.CharField(max_length=255, blank=True, null=True)
    mother_name = models.CharField(max_length=255, blank=True, null=True)
    father_name = models.CharField(max_length=255, blank=True, null=True)
    birth_certificate = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = "Birth-Certificates"
        verbose_name = "Birth Certificate"
        verbose_name_plural = "Birth Certificates"
        ordering = ['-created_at']

    def __str__(self):
        return self.patient_name

class DeathCertificate(models.Model):
        tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="death_certificates")
        patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True)
        patient_name = models.CharField(max_length=255, blank=True, null=True)
        date_of_death = models.DateField(blank=True, null=True)
        place_of_death = models.CharField(max_length=255, blank=True, null=True)
        cause_of_death = models.CharField(max_length=255, blank=True, null=True)
        death_certificate = models.TextField(blank=True, null=True)
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
        class Meta:
            db_table = "Death-Certificates"
            verbose_name = "Death Certificate"
            verbose_name_plural = "Death Certificates"
            ordering = ['-created_at']

        def __str__(self):
            return self.patient_name
