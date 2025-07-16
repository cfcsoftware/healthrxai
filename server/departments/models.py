from django.db import models
from users.models import Tenant

# Create your models here.
class Department(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="department")
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)


    class Meta:
        db_table = 'Departments'
    def __str__(self):
        return self.name
