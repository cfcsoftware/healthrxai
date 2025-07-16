from .models import *
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer

class PathologyTestSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = PathologyTest
        fields = "__all__"


class PathologyReportsSerializer(serializers.ModelSerializer):
    referral_doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)

    referral_doctor_id = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), source='referral_doctor', write_only=True, required=False
    )
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source='patient', write_only=True, required=False
    )
    class Meta:
        model = PathologyReports
        fields = "__all__"



class PathologyGetreportSerializer(serializers.ModelSerializer):
    class Meta:
        model = PathologyReports
        fields = "__all__"
        
        
        
        
class PathoCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PathologyReports
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True},
            'tenant': {'read_only': True},
            'patient': {'read_only': True},
            'referral_doctor': {'read_only': True},
        }

    def create(self, validated_data):
        # Accept externally passed user, tenant, etc. via save()
        return PathologyReports.objects.create(**validated_data)