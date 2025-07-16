from rest_framework import serializers
from .models import *



class DoctorChatSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorChatSession
        fields = '__all__'
        
        
class DoctorChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorChatMessage
        fields = '__all__'

