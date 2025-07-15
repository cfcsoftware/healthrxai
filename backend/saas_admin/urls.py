"""
URL configuration for saas_admin project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from django.urls import include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin


urlpatterns = [
    # CMS URLs - MUST come first to handle root path redirection
    path('backend/', include('cms.urls')),
    
    # Main client URLs (includes website URLs)
    path("backend/", include("clients.urls")),
    
    # API and search URLs
    path("api/", include("notifications.urls")),
    path("search/", include("search.urls")),

    # HMS module URLs
    path('backend/', include('dashboard.urls')),
    path('backend/patients/', include('patients.urls')),
    path('backend/appointments/', include('appointments_list.urls')),
    path('backend/ambulance/', include('ambulance.urls')),
    path('backend/opd/', include('opd_module.urls')),
    path('backend/ipd/', include('ipd_module.urls')),
    path('backend/pathology/', include('pathology_module.urls')),
    path('backend/staff/', include('staff_management.urls')),
    path('backend/departments/', include('departments.urls')),
    path('backend/billing/', include('billing_counter.urls')),
    path('backend/bed-management/', include('bed_management.urls')),
    path('backend/blood-bank/', include('blood_bank.urls')),
    path('backend/certificate/', include('certificate_module.urls')),

    path('notifications/', include('notifications.urls')),
    path('backend/ops/', include('opd_module.urls')),
    path('backend/pharmacy/', include('pharmacy_module.urls')),
    path('backend/radiology/', include('radiology_module.urls')),
    path('backend/mails/', include('mail_box.urls')),
    path('backend/notice/', include('notice_services.urls')),
    path('backend/research/', include('research_module.urls')),   
    path('backend/reports/', include('reports.urls')),
    path('backend/', include('settings.urls')),
    path('backend/surgery/', include('surgery_module.urls')),
    path('backend/services/', include('services.urls')),
    path('backend/visitors/', include('visitor_management.urls')),   
    
    path('admin/', admin.site.urls),
    path('backend/ckeditor/', include('ckeditor_uploader.urls')),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


