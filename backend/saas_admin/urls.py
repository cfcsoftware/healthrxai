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
    path('', include('cms.urls')),
    path('backend/', include('users.urls')), 
    
    # Main client URLs (includes website URLs)
    path("", include("clients.urls")),
    
    # API and search URLs
    path("api/", include("notifications.urls")),
    path("search/", include("search.urls")),

    # HMS module URLs
    path('', include('dashboard.urls')),
    path('patients/', include('patients.urls')),
    path('appointments/', include('appointments_list.urls')),
    path('ambulance/', include('ambulance.urls')),
    path('opd/', include('opd_module.urls')),
    path('ipd/', include('ipd_module.urls')),
    path('pathology/', include('pathology_module.urls')),
    path('staff/', include('staff_management.urls')),
    path('departments/', include('departments.urls')),
    path('billing/', include('billing_counter.urls')),
    path('bed-management/', include('bed_management.urls')),
    path('blood-bank/', include('blood_bank.urls')),
    path('certificate/', include('certificate_module.urls')),

    path('notifications/', include('notifications.urls')),
    path('ops/', include('opd_module.urls')),
    path('pharmacy/', include('pharmacy_module.urls')),
    path('radiology/', include('radiology_module.urls')),
    path('mails/', include('mail_box.urls')),
    path('notice/', include('notice_services.urls')),
    path('research/', include('research_module.urls')),   
    path('reports/', include('reports.urls')),
    path('', include('settings.urls')),
    path('surgery/', include('surgery_module.urls')),
    path('services/', include('services.urls')),
    path('visitors/', include('visitor_management.urls')),   
    
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),


]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


