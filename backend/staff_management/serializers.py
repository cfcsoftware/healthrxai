from rest_framework import serializers
from .models import Employee
from clients.models import Role
from clients.serializers import RoleSerializer

class EmployeeSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only=True)

    class Meta:
        model = Employee
        fields = "__all__"

class EmployeeCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"
        