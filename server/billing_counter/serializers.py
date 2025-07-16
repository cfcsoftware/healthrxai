from .models import Billing, FinalBilling
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from patients.models import Patient
from staff_management.models import Employee



class BillingSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    doctor = EmployeeSerializer(read_only=True)
    
    class Meta:
        model = Billing
        fields = "__all__"




class BillingCreateUpdateSerializer(serializers.ModelSerializer):
    
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source="patient", write_only=True
    )
    doctor_id = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), source="doctor", write_only=True
    )
    patient = serializers.StringRelatedField(read_only=True)
    doctor = serializers.StringRelatedField(read_only=True)

    
    class Meta:
        model = Billing
        fields = "__all__"



class FinalBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinalBilling
        fields = "__all__"
        


class GetFinalBillSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    doctor = EmployeeSerializer(read_only=True)
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source="patient", write_only=True
    )
    doctor_id = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), source="doctor", write_only=True
    )
    
    class Meta:
        model = FinalBilling
        fields = "__all__"