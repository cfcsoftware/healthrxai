from .models import OPD 
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from appointments_list.serializers import AppointmentSerializer


class OPDSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    appointment = AppointmentSerializer(read_only=True)
    class Meta:
        model = OPD
        fields = "__all__"

class OPDCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OPD
        fields = "__all__"
