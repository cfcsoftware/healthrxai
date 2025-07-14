from rest_framework import serializers
from .models import Surgery
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from staff_management.models import Employee
from patients.models import Patient


class SurgerySerializer(serializers.ModelSerializer):
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)

    # These fields accept IDs for write operations (creation/update)
    doctor_id = serializers.PrimaryKeyRelatedField(
        queryset=Employee.objects.all(), write_only=True, source='doctor'
    )
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), write_only=True, source='patient'
    )

    class Meta:
        model = Surgery
        fields = '__all__'

        
class SurgeryCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Surgery
        fields = '__all__'