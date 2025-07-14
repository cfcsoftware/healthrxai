from .models import *
from rest_framework import serializers
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer

class MedicineListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineList
        fields = "__all__"


class PharmacyBillSerializer(serializers.ModelSerializer):
    medicine_name = MedicineListSerializer(read_only=True)
    doctor = EmployeeSerializer(read_only=True)
    patient = PatientSerializer(read_only=True)
    class Meta:
        model = PharmacyBill
        fields = "__all__"

class PharmacyBillCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PharmacyBill
        fields = "__all__"
        
class PurchaseMedicineSerializer(serializers.ModelSerializer):
    medicine = MedicineListSerializer(read_only=True)
    class Meta:
        model = PurchaseMedicine
        fields = "__all__"

class PurchaseMedicineCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseMedicine
        fields = "__all__"
        
        
