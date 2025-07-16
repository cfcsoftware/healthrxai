"""
This module defines the URL routing for the application, including API endpoints for user and blog operations.

URL Patterns:
1. `admin/`:
    - Routed to Django's built-in admin site.
    - Provides the administrative interface for managing application data.

2. `''` (empty path):
    - Routed to the `index` view.
    - Provides a basic view that returns a JSON response with the current tenant's context.

3. `user/register`:
    - Routed to the `UserRegister` view.
    - Endpoint for user registration.
    - Uses the `POST` method to create a new user.

4. `login`:
    - Routed to the `UserLoginView` view.
    - Endpoint for user authentication.
    - Uses the `POST` method to log in users and return authentication tokens.

5. `blog`:
    - Routed to the `BlogView` view.
    - Endpoint for managing blog posts.
    - Supports `POST`, `GET`, `PATCH`, and `DELETE` methods for creating, retrieving, updating, and deleting blog posts.

6. `tenant/user`:
    - Routed to the `TenantView` view.
    - Endpoint for tenant-specific user management.
    - Supports `GET`, `PATCH`, and `DELETE` methods for retrieving, updating, and deleting user profiles by tenant admins.

7. `search/` (commented out):
    - Routed to the `BlogSearchView` view (commented out for potential future use).
    - Intended for searching blog posts based on a query parameter.
    - Supports the `GET` method and utilizes Elasticsearch for search functionality.

Dependencies:
- `admin` from `django.contrib` for the admin interface.
- `path` and `include` from `django.urls` for URL routing.
- Various views (`index`, `UserRegister`, `UserLoginView`, `BlogView`, `TenantView`) from the application's views module.

This file sets up the routing configuration for the application, providing endpoints for core functionalities including user registration, login, blog management, and tenant-specific user operations.
"""

from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("admin/", admin.site.urls),

    # for the tenant admin and  user login system..
    path("user/register", UserRegister.as_view(), name="user-register"),
    path("login", UserLoginView.as_view(), name="user-login"),
    path("logout", logout, name="logout"),
    
    # for the tenant admin ( dashboard modules )
    path('total-patients', TotalPatients.as_view(), name='total-patients'),
    path('total-appointments', TotalAppointments.as_view(), name='total-appointments'),
    path('total-doctors', TotalDoctors.as_view(), name='total-doctors'),



    path("tenant/user", TenantView.as_view(), name="tenant-view"),
    path("tenant/user/<int:user_id>",TenantManagementView.as_view(),name="tenant-manage"),
    path("user/detail", UserView.as_view(), name="user-detail"),

    # for blog system..
    path("blog", BlogView.as_view(), name="blog"),
    path("blog/<int:blog_id>", BlogManagementView.as_view(), name="blog-manage"),
    path("all-blogs", FetchAllBlogs.as_view(), name="Get-all-blogs"),


    # for role 
    path("roles/list/", role_list, name="role-list"), 
    path("roles/add/", role_create, name="role-add"), 
    path("roles/update/<int:pk>/", role_update, name="role-update"), 
    path("roles/delete/<int:pk>/", role_delete, name="role-delete"), 

    # for permission
    path("permissions/list/", permission_list, name="permission-list"),
    path('permissions/create/', permission_create, name="permission-create"),
    path('permissions/update/<int:pk>/', permission_update, name="permission-update"), 
    # path('permissions/detail/<int:pk>/', permission_detail, name="permission-detail"), 
    path('permissions/delete/<int:pk>/', permission_delete, name="permission-delete"),

    # for role permission assign
    path("role/assign/", AssignRoleToUserView.as_view(), name="assign-role-to-user"),
    path("permission/assign-to-role/", AssignPermissionsToRoleView.as_view(), name="assign-permission-to-role"),
    path("role/<int:role_id>/permissions/", ListRolePermissionsView.as_view(), name="role-permissions-list"),
    path("role/permissions/", ListRolePermissionsView.as_view(), name="all-roles-permissions-list"),
    path("permission/assign-to-role/<int:role_id>/", AssignRolePermissionsView.as_view(), name="assign-permission-to-role"),
    path("permission/update-assigned-to-role/<int:role_id>/", UpdateRolePermissionsView.as_view(), name="update-assigned-permission-to-role"),
    
    # Website URLs with prefix to avoid conflicts
    path('website/', include('website.urls')),
]
