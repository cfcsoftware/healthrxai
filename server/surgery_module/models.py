from django.db import models
from users.models import CustomUser, Tenant
from patients.models import Patient
from staff_management.models import Employee


class Surgery(models.Model): 
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="surgery")
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, related_name="surgery")
    
    # patient_code = models.CharField(max_length=255, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=255, null=True, blank=True)
    

    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, related_name="surgery")
    assistant_surgeon_details = models.JSONField(default=[])
    anesthesiologist_name = models.CharField(max_length=255, null=True, blank=True)

    surgery_type = models.CharField(max_length=255, null=True, blank=True)
    surgery_code = models.CharField(max_length=255, null=True, blank=True)
    surgery_description = models.TextField(null=True, blank=True)
    surgery_department = models.CharField(max_length=255, null=True, blank=True)
    scheduled_datetime = models.DateTimeField(null=True, blank=True)  # Renamed to match form
    expected_duration = models.CharField(max_length=255, null=True, blank=True)
    surgery_room = models.CharField(max_length=255, null=True, blank=True)

    pre_surgery_notes = models.TextField(null=True, blank=True)
    post_surgery_notes = models.TextField(null=True, blank=True)
    required_equipment = models.TextField(null=True, blank=True)
    required_tests = models.TextField(null=True, blank=True)
    medications_prescribed = models.TextField(null=True, blank=True)

    follow_up_date = models.DateField(null=True, blank=True)

    surgery_images = models.JSONField(default=[])

    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        
        db_table = 'Surgery'

    def __str__(self):
        return self.surgery_code or f"Surgery #{self.id}"