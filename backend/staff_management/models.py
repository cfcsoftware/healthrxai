from django.db import models
from users.models import CustomUser, Tenant, CustomUserManager
from clients.models import Role


class Employee(models.Model):
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True, related_name="employee_profile")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name="employee_profile")
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255)
    staff_member_id = models.CharField(max_length=100, unique=True, null=True)
    username = models.CharField(max_length=100, unique=True, null=True)
    email = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=50, null=True)
    dob = models.DateField(null=True)
    gender = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='emp_img/', blank=True, null=True)
    phone = models.CharField(max_length=15, unique=True, null=True)
    address = models.TextField(null=True)
    city = models.CharField(max_length=100, null=True)
    state = models.CharField(max_length=50, null=True)
    zip_code = models.CharField(max_length=10, null=True)
    aadhar_no = models.CharField(max_length=12, null=True)
    aadhar_front_image = models.TextField(blank=True, null=True)
    aadhar_back_image = models.TextField(blank=True, null=True)
    pan_no = models.CharField(max_length=10, null=True)
    pan_image = models.TextField(blank=True, null=True)
    bank_name = models.CharField(max_length=100, null=True)
    account_no = models.CharField(max_length=50, null=True)
    account_holder_name = models.CharField(max_length=50, null=True)
    ifsc_code = models.CharField(max_length=20, null=True)
    upi_id = models.CharField(max_length=50, null=True)
    other1 = models.TextField(max_length=100, null=True)
    other2 = models.TextField(max_length=100, null=True)
    latitude = models.CharField(max_length=50, null=True)
    longitude = models.CharField(max_length=50, null=True)
    location = models.CharField(max_length=50, null=True)
    fees = models.CharField(max_length=10, null=True)
    designation = models.CharField(max_length=50, null=True)
    last_login = models.CharField(max_length=50, null=True)
    last_login_ip = models.CharField(max_length=50, null=True)
    notification_token = models.TextField(blank=True, null=True)
    is_active = models.CharField(max_length=100, blank=True, null=True)
    plan_id = models.CharField(max_length=12, null=True)
    plan_expire_date = models.CharField(max_length=10, null=True)
    otp = models.CharField(max_length=5, null=True)
    otp_expire = models.CharField(max_length=10, null=True)
    
    blood_group = models.CharField(max_length=10, null=True)
    height = models.CharField(max_length=10, null=True)
    weight = models.CharField(max_length=10, null=True)
    
    languages = models.JSONField(null=True, blank=True)
    services = models.JSONField(null=True, blank=True)
    expertise = models.CharField(max_length=50, null=True)
    service_location = models.JSONField(null=True, blank=True)
    
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Employees'
        
    def __str__(self):
        return f"{self.name} ({self.role.name})"

