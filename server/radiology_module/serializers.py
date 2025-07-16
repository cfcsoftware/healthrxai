from .models import *
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer

class RadiologyTestSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = RadiologyTest
        fields = "__all__"



class RadiologyReportsSerializer(serializers.ModelSerializer):
    referral_doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)

    referral_doctor_id = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), source='referral_doctor', write_only=True, required=False
    )
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source='patient', write_only=True, required=False
    )
    class Meta:
        model = RadiologyReports
        fields = "__all__"
        
        
        
class RadiologyTestreportSerializer(serializers.ModelSerializer):
    class Meta:
        model = RadiologyReports
        fields = "__all__"
