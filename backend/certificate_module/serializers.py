from rest_framework import serializers
from .models import DischargeCertificate, MedicalCertificate, FitnessCertificate, BirthCertificate, DeathCertificate 
from patients.serializers import PatientSerializer  # Make sure PatientSerializer is defined in serializers.py or adjust the import path accordingly
from staff_management.serializers import EmployeeSerializer  # Adjust the import path if necessary

class DischargeCertificateSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = DischargeCertificate
        fields = "__all__"

class MedicalCertificateSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    doctor = EmployeeSerializer(read_only=True)
    class Meta:
        model = MedicalCertificate
        fields = "__all__"

class FitnessCertificateSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    doctor = EmployeeSerializer(read_only=True)
    class Meta:
        model = FitnessCertificate
        fields = "__all__"

class BirthCertificateSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = BirthCertificate
        fields = "__all__"

class DeathCertificateSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = DeathCertificate
        fields = "__all__"

    