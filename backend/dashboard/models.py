from django.db import models
from users.models import CustomUser, Tenant
from staff_management.models import Employee

class DoctorChatSession(models.Model):
    user = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, blank=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=True, blank=True)
    session_id = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'chat-session'
        
        

class DoctorChatMessage(models.Model):
    session = models.ForeignKey(DoctorChatSession, on_delete=models.CASCADE, related_name='messages')
    role = models.CharField(max_length=10, null=True, blank=True)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'chat-message'