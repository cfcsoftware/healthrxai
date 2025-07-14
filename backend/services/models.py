from django.db import models
from users.models import Tenant

# Create your models here.


# class ServiceType(models.Model):
#     tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="service_type")
#     name = models.CharField(max_length=255)
#     description = models.TextField(max_length=255,blank=True, null=True)

#     def __str__(self):
#         return self.name


class Service(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="service")
    bill_type = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    charge = models.CharField(max_length=255, null=True)
    service_type = models.CharField(max_length=255, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Services'

    def __str__(self):
        return self.name
