from django.db import models
from users.models import Tenant  # Adjust the import path as needed
from patients.models import Patient  # Adjust the import path as needed

# Create your models here.

class Bed(models.Model):
    tenant = models.ForeignKey(
        Tenant, on_delete=models.CASCADE, null=True, blank=True, related_name='beds'
    )
    patient = models.ForeignKey(
        Patient, on_delete=models.CASCADE, null=True, blank=True, related_name='patient_assigned'
    )
    bed_type = models.CharField(max_length=100, null=True, blank=True)
    bed_number = models.CharField(max_length=20, unique=True)
    ward = models.CharField(max_length=100, null=True, blank=True)
    floor = models.CharField(max_length=50, null=True, blank=True)
    bed_charges = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    bed_status = models.CharField(max_length=50, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Settings-Bed'
        verbose_name = 'Bed'
        verbose_name_plural = 'Beds'

    def __str__(self):
        return f"{self.bed_type or 'Bed'} - {self.bed_number}"