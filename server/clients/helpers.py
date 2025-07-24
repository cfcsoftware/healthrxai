"""
This module provides functionality for generating JSON Web Tokens (JWT) for user authorization.

Function:
- `get_tokens_for_user(user)`:
    - Generates JWT tokens for the given user.
    - Uses the `RefreshToken` class from `rest_framework_simplejwt.tokens` to create a refresh token and an access token.
    - Returns a dictionary containing:
        - `refresh`: The refresh token as a string.
        - `access`: The access token as a string.

    Parameters:
    - `user`: An instance of the `CustomUser` model for which the tokens are generated.

    Returns:
    - A dictionary with two keys:
        - `'refresh'`: The refresh token as a string.
        - `'access'`: The access token as a string.

    Usage:
    - This function is typically used to generate JWT tokens upon user authentication, allowing the user to access protected resources and refresh their authentication session.

Dependencies:
- `RefreshToken` from `rest_framework_simplejwt.tokens` for creating JWT tokens.

This file provides a utility function for generating JWT tokens, which are used for user authentication and authorization in the application.
"""
#helpers.py
from rest_framework_simplejwt.tokens import RefreshToken
from .models import RolePermission,UserRole

# def get_tokens_for_user(user):
#     refresh = RefreshToken.for_user(user)
#     return {
#         # 'user': str(user),
#         # 'user_id': str(user.id),
#         "refresh": str(refresh),
#         "access": str(refresh.access_token),
#     }



# new one for react setting is below

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    # Get role & permissions safely
    user_role = UserRole.objects.filter(user=user).select_related("role").first()
    if user_role:
        permissions = [p.permission.code for p in RolePermission.objects.filter(role=user_role.role)]
        role_id = user_role.role.id
        role_name = user_role.role.name
    else:
        permissions = []
        role_id = None
        role_name = None

    # Embed custom claims
    refresh["user_permissions"] = permissions
    refresh["role_id"] = role_id
    refresh["role_name"] = role_name

    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }