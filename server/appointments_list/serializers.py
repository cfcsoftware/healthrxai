from clients.serializers import CustomUserSerializer
from users.models import CustomUser
from .models import *
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer



class AppointmentSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = Appointment
        fields = '__all__'
        
class AppointmentCreateUpdateSerializer(serializers.ModelSerializer):
    
    prescription_json = serializers.JSONField(required=False)  # Ensure JSON field is handled
    class Meta:
        model = Appointment
        fields = '__all__'


class AppointmentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'





class AppointmentpescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pescription
        fields = '__all__'