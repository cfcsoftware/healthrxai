from rest_framework import serializers
from .models import Department


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ["id", "name","description",  "tenant"]
        
class DepartmentCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ["id", "name","description", "tenant"]