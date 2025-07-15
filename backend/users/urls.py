from django.contrib import admin
from .views import CheckTenant, TenantRegister
from .views import *
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import path, re_path
from clients.views import TenantView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from website.urls import urlpatterns as website_urls

schema_view = get_schema_view(
    openapi.Info(title="Tenant API",default_version="v1",description="API documentation for Multi-tenant Project",),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    # for the super admin(saas login)
    path("admin", admin.site.urls),
    path('saas/login/', TokenObtainPairView.as_view(), name='token_obtain_pair-saas-login'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('saas/users', CustomUserListView.as_view(), name='custom-user-list'),
    path('saas/domains', DomainListView.as_view(), name='domain-list'),
    path('saas/domains/update/<int:pk>', update_domain, name='domain-update'),
    path('saas/admins', TenantListView.as_view(), name='tenant-list'),
    path('saas/dashboard', dashboard, name='dashboard'),
    path('saas/login', saas_login, name='saas_login'),
    path('saas/logout', saas_logout, name ='saas_logout'),

    path('saas/theme-settings', theme_setting, name='theme_setting'),

    
    # get domain
    path('backend/get-domain', get_tenant_domain, name='get_tenant_domain'),

    path("backend/tenant/register", TenantRegister.as_view(), name="tenant-register"),
    path("backend/check-tenant", CheckTenant.as_view(), name="check-tenant"),
    re_path(r"^swagger(?P<format>\.json|\.yaml)$",schema_view.without_ui(cache_timeout=0),name="schema-json"),
    path("docs/",schema_view.with_ui("swagger", cache_timeout=0),name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),

]+website_urls