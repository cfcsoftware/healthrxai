from rest_framework import serializers
from .models import Patient
from staff_management.serializers import EmployeeSerializer
from departments.serializers import DepartmentSerializer

class PatientSerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    department = DepartmentSerializer(read_only=True)
    class Meta:
        model = Patient
        fields = '__all__'
    


class PatientCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'