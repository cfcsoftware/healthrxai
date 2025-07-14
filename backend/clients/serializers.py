"""
This module defines serializers for various models used in the application, including user registration, login, and blog management.

Serializers:
1. `UserRegisterSerializer`:
    - Serializer for user registration.
    - Inherits from `serializers.ModelSerializer`.
    - Fields: `email`, `phone`, `username`, `password`.
    - Customizes `create` method to:
        - Validate and retrieve the tenant from the request context.
        - Create a new `CustomUser` instance if the tenant exists and no duplicate user is found.
        - Handle potential exceptions and raise appropriate `ValidationError` if a user with the same email already exists for the tenant.
        - Create a corresponding `UserProfile` object with additional information.

2. `UserLoginSerializer`:
    - Serializer for user login.
    - Inherits from `serializers.ModelSerializer`.
    - Fields: `email`, `password`.
    - Used for validating login credentials.

3. `BlogSerializer`:
    - Serializer for blog management.
    - Inherits from `serializers.ModelSerializer`.
    - Fields: `title`, `description`.
    - Used for creating and updating blog posts.

4. `UserSerializer`:
    - Serializer for user profile details.
    - Inherits from `serializers.ModelSerializer`.
    - Fields: `__all__`.
    - Provides full serialization for the `UserProfile` model, including all its fields.

Dependencies:
- `serializers` from `rest_framework` for defining and validating serializer classes.
- `UserProfile`, `Blog` from the application's models for data representation and validation.
- `CustomUser` from `users.models` for user-related operations.
- `ValidationError` from `rest_framework.exceptions` for handling validation errors during serialization.

This file provides serializers used for handling user registration and login, blog post management, and user profile details in the application.
"""

from rest_framework import serializers
from .models import UserProfile, Blog
from users.models import Tenant, CustomUser
from rest_framework.exceptions import ValidationError
from .models import Role, UserRole, RolePermission
from django_tenants.utils import schema_context


class UserRegisterSerializer(serializers.ModelSerializer):
    phone = serializers.CharField(write_only=True)
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ["id","email", "phone", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        request = self.context.get("request")
        tenant = request.tenant
        try:
            tenant = Tenant.objects.get(schema_name=tenant)
        except Tenant.DoesNotExist:
            raise ValidationError("Domain Does not exists")

        try:
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
                username=validated_data["username"],
                email=validated_data["email"],
                password=validated_data["password"],
                tenant=tenant,
                serial_id=serial_id
            )

        except ValueError:
            raise ValidationError(
                "User with this email is already registered for this tenant."
            )

        # Create a UserProfile for the user
        try:
            UserProfile.objects.create(
                user=user, tenant=tenant, phone=int(validated_data.get("phone"))
            )
        except Exception as e:
            print(e)
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["email", "username"]  # Exclude password and other creation-only fields
        extra_kwargs = {
            "email": {"required": True},
            "username": {"required": True},
        }

    def update(self, instance, validated_data):
        """Custom update method to update user details."""
        instance.email = validated_data.get("email", instance.email)
        instance.username = validated_data.get("username", instance.username)
        instance.save()
        return instance




class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = CustomUser
        fields = ["email", "password"]



class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # Assuming this is the model for your users
        fields = [
            'id',
            "email",
            "username",
            "is_tenant_admin",
            "is_staff",
        ]  # Include fields you want to serialize


class UserSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = UserProfile
        fields = "__all__"

    def update(self, instance, validated_data):
        # Pop the user data (CustomUser) from the validated data
        user_data = validated_data.pop("user", None)

        # Update the UserProfile fields
        instance.phone = validated_data.get("phone", instance.phone)
        instance.tenant = validated_data.get("tenant", instance.tenant)
        instance.save()

        # Update the nested CustomUser fields, if provided
        if user_data:
            user_instance = instance.user  # Assuming `user` is the related name
            user_instance.email = user_data.get("email", user_instance.email)
            user_instance.username = user_data.get("username", user_instance.username)
            user_instance.is_tenant_admin = user_data.get(
                "is_tenant_admin", user_instance.is_tenant_admin
            )
            user_instance.is_staff = user_data.get("is_staff", user_instance.is_staff)
            user_instance.save()

        return instance



class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ["id", "title", "description"]


# for role and permission

from .models import Role, Permission

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ["id", "name", "description"]


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ["id", "code", "name", "description"]


class RolePermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RolePermission
        fields = ["id", "role", "permission"]   