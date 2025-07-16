from django.db import models
from users.models import Tenant
# class BedType(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.name

# class Bed(models.Model):
#     bed_type = models.ForeignKey(BedType, on_delete=models.CASCADE)
#     bed_number = models.CharField(max_length=10, unique=True)
#     is_available = models.BooleanField(default=True)

#     def __str__(self):
#         return f"{self.bed_type.name} - {self.bed_number}"

# class PatientAssignment(models.Model):
#     patient_name = models.CharField(max_length=100)
#     bed = models.ForeignKey(Bed, on_delete=models.CASCADE)
#     assigned_at = models.DateTimeField(auto_now_add=True)
#     discharged_at = models.DateTimeField(blank=True, null=True)

#     def __str__(self):
#         return f"{self.patient_name} assigned to {self.bed.bed_number}"



