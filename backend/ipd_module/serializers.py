from .models import IPD 
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from appointments_list.serializers import AppointmentSerializer


class IPDSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    appointment = AppointmentSerializer(read_only=True)
    class Meta:
        model = IPD
        fields = "__all__"

class IPDCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = IPD
        fields = "__all__"
