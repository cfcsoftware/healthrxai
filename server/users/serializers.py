"""
This module defines serializers for tenant registration in the application.

Serializers:
1. `TenantRegisterSerializer`:
    - A serializer class for handling the registration of new tenants.
    - Fields:
        - `username`: Required `CharField` with a maximum length of 100 characters. Represents the schema name for the tenant.
        - `address`: Optional `CharField` with a maximum length of 255 characters. Represents the address of the tenant.
        - `registration_number`: Optional `CharField` with a maximum length of 255 characters. Represents the registration number of the tenant.
        - `company_name`: Required `CharField` with a maximum length of 100 characters. Represents the company name of the tenant.
        - `email`: Required `EmailField`. Represents the email address of the tenant admin.
        - `first_name`: Required `CharField` with a maximum length of 255 characters. Represents the first name of the tenant admin.
        - `password`: Required `CharField`. Write-only field for the password of the tenant admin.

    Methods:
    - `validate_username(value)`:
        - Ensures that the provided `username` (tenant schema name) is unique.
        - Raises `ValidationError` if a tenant with the same schema name already exists.

    - `create(validated_data)`:
        - Creates a new `Tenant` instance with the provided validated data.
        - Creates a primary `Domain` instance associated with the newly created tenant.
        - Creates a new `CustomUser` instance for the tenant admin with the provided email, username (as first name), and password.
        - Returns a dictionary containing the newly created tenant, domain, username, and user details.

Dependencies:
- `serializers` from Django REST Framework for serializing and validating data.
- `Tenant`, `Domain`, and `CustomUser` models for creating and managing tenant-related data.

This serializer handles the complete registration process for new tenants, including tenant, domain, and user creation, and ensures data integrity and uniqueness.
"""

from rest_framework import serializers
from users.setup_demo_cms import handle
from .models import Tenant, Domain, CustomUser
from clients.models import Role, Permission, RolePermission, UserRole, UserProfile
from departments.models import Department
from django_tenants.utils import schema_context
from .permission_list import *
from services.models import Service
from pharmacy_module.models import MedicineList
from staff_management.models import Employee
from billing_counter.models import Billing
from appointments_list.models import Appointment

class TenantRegisterSerializer(serializers.Serializer):
    
    full_name = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=100)
    hospital_name = serializers.CharField(max_length=255)
    mobile_number = serializers.CharField(max_length=50, required=False, allow_blank=True)
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=255,write_only=True)
    
    def validate_username(self, value):
        if Tenant.objects.filter(schema_name=value).exists():
            raise serializers.ValidationError("Tenant name already taken.")
        return value

    
    def assign_default_permissions_to_roles(self, roles, permissions):
        DEFAULT_ROLE_PERMISSIONS = {
            "Doctor": doctor_permissions_list,
            "Receptionist": receptonist_permissions_list,
            "Manager": manager_permissions_list,
            "Nurse": nurse_permissions_list,
            "Pharmacist": pharmacy_permissions_list,
            "Pathologist": pathology_permissions_list,
            "Radiologist": radiology_permissions_list,
            "Accountant": accountant_permissions_list,
        }

        for role_name, role_obj in roles.items():
            perm_codes = DEFAULT_ROLE_PERMISSIONS.get(role_name, [])
            for code in perm_codes:
                if code in permissions:
                    RolePermission.objects.create(permission=permissions[code], role=role_obj)
        print("Assigning default permissions to roles:", "roles:", roles, "permissions:", permissions)

    def create(self, validated_data):
        latest_tenant = Tenant.objects.order_by('-custom_tenant_id').first()
        print("Latest tenant:", latest_tenant)

        if latest_tenant and latest_tenant.custom_tenant_id.startswith("HRX"):
            latest_id_num = int(latest_tenant.custom_tenant_id[3:])
            new_id_num = latest_id_num + 1
        else:
            new_id_num = 1001

        custom_tenant_id = f"HRX{new_id_num}"
        print("Generated custom_tenant_id:", custom_tenant_id)

        # Tenant creation
        tenant = Tenant.objects.create(
            schema_name=validated_data["username"],
            mobile_number=validated_data.get("mobile_number"),
            hospital_name=validated_data["hospital_name"],
            full_name=validated_data["full_name"],
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            custom_tenant_id=custom_tenant_id,
        )
        print("Created tenant:", tenant)

        full_domain = self.context["request"].get_host()
        domain_parts = full_domain.split(":")
        domain = f'{validated_data["username"]}.{domain_parts[0]}'
        Domain.objects.create(domain=domain, tenant=tenant, is_primary=True)
        print("Created domain:", domain)
        
        
        
        # Add Department/////////
        with schema_context(tenant.schema_name):
            opd_department = Department.objects.create(name="OPD", description="Out-patient Department")
            ipd_department = Department.objects.create(name="IPD", description="In-patient Department")
            pharmacy_department = Department.objects.create(name="Pharmacy", description="Pharmacy Department")
            pathology_department = Department.objects.create(name="Pathology", description="Pathology Department")
            radiology_department = Department.objects.create(name="Radiology", description="Radiology Department")
            surgery_department = Department.objects.create(name="Surgery", description="Surgery Department")


        with schema_context(tenant.schema_name):
            admin_role = Role.objects.create(name="Admin", description="Admin role with full permissions")          
            doctor_role = Role.objects.create(name="Doctor", description="Doctor role with specific permissions")
            receptionist_role = Role.objects.create(name="Receptionist", description="Receptionist role with specific permissions")
            manager_role = Role.objects.create(name="Manager", description="Receptionist role with specific permissions")
            nurse_role = Role.objects.create(name="Nurse", description="Manager role with specific permissions")
            pharmacist_role = Role.objects.create(name="Pharmacist", description="Pharmacist role with specific permissions")
            pathology_role = Role.objects.create(name="Pathologist", description="Pathology role with specific permissions")
            radiology_role = Role.objects.create(name="Radiologist", description="Radiology role with specific permissions")
            accountant_role = Role.objects.create(name="Accountant", description="Accountant role with specific permissions")
            # patient_role = Role.objects.create(name="Patient", description="Patient role with specific permissions")


        with schema_context(tenant.schema_name):
            permission_definitions = permissions_list


            # Create and store permissions for later assignment................
            permissions = {
                code: Permission.objects.create(code=code, name=name, description=desc)
                for code, name, desc in permissions_list
            }
            print("Created permissions:", permissions)
                
        last_user_with_serial = CustomUser.objects.exclude(serial_id__isnull=True).exclude(serial_id__exact='').order_by('-id').first()
        if not last_user_with_serial or not last_user_with_serial.serial_id:
            serial_id = 'HPID1001'
        else:
            try:
                last_num = int(''.join(filter(str.isdigit, last_user_with_serial.serial_id)))
            except (IndexError, ValueError):
                last_num = 1000
            serial_id = f'HPID{last_num + 1}'
            
            print(serial_id)              

        user = CustomUser.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"],
            tenant=tenant,
            is_tenant_admin=True,
            is_superuser=True,
            is_staff=True,
            serial_id=serial_id
        )
        print("Created user:", user)
        
        
        with schema_context(tenant.schema_name):
            UserRole.objects.create(user=user, role=admin_role)
            
            print("Assigned admin role to user:", user, "role:", admin_role)
            
        with schema_context(tenant.schema_name):
            for perm in permissions.values():
                RolePermission.objects.create(permission=perm, role=admin_role)
            handle(validated_data["hospital_name"])
            
            print("Assigned all permissions to admin role:", admin_role, "permissions:", permissions)
            

        with schema_context(tenant.schema_name):
            roles = {
                "Doctor": doctor_role,
                "Receptionist": receptionist_role,
                "Manager": manager_role,
                "Nurse": nurse_role,
                "Pharmacist": pharmacist_role,
                "Pathologist": pathology_role,
                "Radiologist": radiology_role,
                "Accountant": accountant_role,
            }

            self.assign_default_permissions_to_roles(roles, permissions)  
            
        print("Assigned default permissions to roles:", roles)
        
        with schema_context(tenant.schema_name):
            # defaut create services...............
            service_objs = [Service(**service) for service in default_services]
            Service.objects.bulk_create(service_objs)
            print("✅ Default services created")

            # default create medicines....
            medicine_objs = [MedicineList(**med) for med in default_medicines]
            MedicineList.objects.bulk_create(medicine_objs)
            print("✅ Default medicines created")
            
            # defaut beds.......
            from settings.models import Bed
            from settings.serializers import BedSerializer
            bed_objs = [Bed(**bed) for bed in default_beds]
            Bed.objects.bulk_create(bed_objs)
            print("✅ Default beds created")
            
            # default patho tests
            from pathology_module.models import PathologyTest
            from pathology_module.serializers import PathologyTestSerializer
            patho_test_objs = [PathologyTest(**test) for test in default_pathology]
            PathologyTest.objects.bulk_create(patho_test_objs)
            print("✅ Default pathology tests created")
            
            # default radiology tests
            from radiology_module.models import RadiologyTest
            from radiology_module.serializers import RadiologyTestSerializer
            radiology_test_objs = [RadiologyTest(**test) for test in default_radiology]
            RadiologyTest.objects.bulk_create(radiology_test_objs)
            print("✅ Default radiology tests created")
            
            
            # default employees

            roles_by_id = {
                2: doctor_role,
                3: receptionist_role,
                4: manager_role,
                5: nurse_role,
                6: pharmacist_role,
                7: pathology_role,
                8: radiology_role,
                9: accountant_role,
            }

            for emp in default_employees:
                user_data = emp["user"]
                password = "123456"  # Password is always 123456

                user = CustomUser.objects.create_user(
                    username=user_data["username"],
                    email=user_data["email"],
                    password=password,
                    tenant=tenant
                )

                role_id = emp["role"]
                role = roles_by_id.get(role_id)
                if not role:
                    print(f"⚠️ Role ID {role_id} not found for employee {user.username}")
                    continue

                UserRole.objects.create(user=user, role=role)

                # Generate staff_member_id
                last_employee = Employee.objects.order_by('-id').first()
                if last_employee and last_employee.staff_member_id:
                    last_id_str = ''.join(filter(str.isdigit, last_employee.staff_member_id))
                    new_id_str = str(int(last_id_str) + 1).zfill(5)
                    staff_id = f"EMP{new_id_str}"
                else:
                    staff_id = "EMP10001"

                Employee.objects.create(
                    user=user,
                    role=role,
                    staff_member_id=staff_id,
                    tenant=tenant,
                    name=user_data.get("name"),
                    email=user_data.get("email"),
                    phone=user_data.get("phone"),
                    gender=user_data.get("gender"),
                )
                
                UserProfile.objects.create(user=user, tenant=tenant, phone=user_data.get("phone"))

            print("✅ Default employees created")
                
            # default patient
            from patients.models import Patient
            # Remove 'social_security_number' if present in patient dicts
            filtered_patient_data = []
            for patient in default_patient_data:
                patient_copy = dict(patient)
                patient_copy.pop('social_security_number', None)
                filtered_patient_data.append(patient_copy)
            patient_objs = [Patient(**patient) for patient in filtered_patient_data]
            Patient.objects.bulk_create(patient_objs)
            print("✅ Default patients created")

            # default appointment...
            doctor_user = CustomUser.objects.filter(username="doctor1").first()
            patient = Patient.objects.first() 

            if doctor_user and patient:
                doctor = Employee.objects.filter(user=doctor_user).first()

                #  Create default Billing object
                default_billing = Billing.objects.create(
                    billing_record_id="BILL00001",
                    bill_type="Appointment(OPD)",
                    service_type="Consultation",
                    subtotal="500", 
                    amount_paid="500",
                    amount_due="0",
                    discount_percentage="0",  
                    round_off="0",             
                    payment_mode="cash",
                    service_details=[
                        {
                            "qty": "1",
                            "cost": "500",
                            "price": "500",
                            "amount": "500",
                            "service": "First Consultation"
                        }
                    ],
                    doctor=doctor,
                    patient=patient,
                    tenant=tenant,
                    user=doctor_user,
                )

                print("✅ Default billing created")

                # Create defaut appointment object
                Appointment.objects.create(
                    appointment_record_id="APT1001",
                    appointment_date="2025-06-14",
                    appointment_time="18:32:00",
                    payment_mode="cash",
                    total_payment=500,
                    due_payment=0,
                    height=170,
                    weight=65,
                    bp="100/80",
                    pulse=72,
                    temperature=36.6,
                    spo2=98,
                    rbs=110,
                    created_at="2025-06-14",
                    updated_at="2025-06-17",
                    billing=default_billing,
                    doctor=doctor,
                    patient=patient,
                    audio_recordings=[],
                    soap_data=[]
                )
                print("✅ Default appointment created")
            else:
                print("⚠️ Doctor or patient missing — cannot create billing/appointment.")
            
            print("Tenant registration completed successfully.")

            
            
        return {
            "tenant": tenant,
            "domain": full_domain,
            "username": validated_data["username"],
            "user": user,
        }





# for super admin (saas login)
from rest_framework import serializers
from .models import CustomUser, Domain, Tenant


class TenantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tenant
        fields = "__all__"


class DomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domain
        fields = "__all__"


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "email", "username", "is_tenant_admin", "is_staff", "is_active", "date_joined", "tenant"]



class GetLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['logo']
