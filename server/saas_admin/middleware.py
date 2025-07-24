# middleware.py
import jwt
from django.conf import settings
from django.contrib.auth.models import AnonymousUser
from channels.db import database_sync_to_async
from urllib.parse import parse_qs


@database_sync_to_async
def get_user(user_id):
    from django.contrib.auth import get_user_model

    User = get_user_model()
    try:
        return User.objects.get(id=user_id)
    except User.DoesNotExist:
        return AnonymousUser()


class JWTAuthMiddleware:
    def __init__(self, inner):
        self.inner = inner

    async def __call__(self, scope, receive, send):
        # Extract the token from the Authorization header
        auth_header = scope["headers"].get(b'authorization')
        token = None
        if auth_header:
            token = auth_header.decode().split(" ")[1]  # Assuming "Bearer <token>"

        if token:
            try:
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
                user_id = payload.get("user_id")
                scope["user"] = await get_user(user_id)
            except jwt.ExpiredSignatureError:
                scope["user"] = AnonymousUser ()
            except jwt.InvalidTokenError:
                scope["user"] = AnonymousUser ()
        else:
            scope["user"] = AnonymousUser ()

        return await self.inner(scope, receive, send)


# for roles and permissions


from django.http import HttpResponseForbidden
from functools import wraps


# new one for react setting is below

def permission_required(permission_code):
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            # Get JWT token from Authorization header
            auth_header = request.headers.get('Authorization')
            if not auth_header:
                return HttpResponseForbidden("No token found.")
            
            try:
                token = auth_header.split()[1]  # "Bearer <token>"
                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
                user_permissions = payload.get("user_permissions", [])
                
                if permission_code not in user_permissions:
                    return HttpResponseForbidden("You do not have permission to access this page.")
                
                return view_func(request, *args, **kwargs)
            
            except Exception as e:
                print("Permission check error:", e)
                return HttpResponseForbidden("Invalid or expired token.")
            
        return _wrapped_view
    return decorator


# def permission_required(permission_code):
#     """
#     Decorator to check if the user has the required permission.
#     """
#     def decorator(view_func):
#         @wraps(view_func)
#         def _wrapped_view(request, *args, **kwargs):
#             # Get the user's role ID and permissions from the session
#             role_id = request.session.get('role_id')
#             role_name = request.session.get('role_name')
#             user_permissions = request.session.get('user_permissions', [])

#             # Check if the user has the required permission
#             if permission_code not in user_permissions:
#                 return HttpResponseForbidden("You do not have permission to access this page.")

#             return view_func(request, *args, **kwargs)
#         return _wrapped_view
#     return decorator

