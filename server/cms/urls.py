from django.urls import path, include
from . import views

app_name = 'cms'

# Public URLs (for visitors)
public_urlpatterns = [
    path('', views.index_redirect, name='index_redirect'),
    path('cms-landing/', views.public_landing_page, name='landing_page'),
    path('page/<slug:slug>/', views.page_detail, name='page_detail'),
    path('gallery/', views.gallery_view, name='gallery'),
    path('contact/submit/', views.contact_form_submit, name='contact_submit'),
]

# Tenant Admin URLs (for CMS management)
admin_urlpatterns = [
    path('cms/', views.tenant_dashboard, name='dashboard'),
    path('cms/settings/', views.cms_settings, name='settings'),
    path('cms/menu-builder/', views.cms_menu_builder, name='menu_builder'),
    path('cms/menu/save/', views.save_menu_item, name='save_menu_item'),
    path('cms/menu/delete/<int:item_id>/', views.delete_menu_item, name='delete_menu_item'),
    path('cms/features/', views.feature_management, name='features'),
    path('cms/pages/', views.cms_pages, name='pages'),
    path('cms/pages/edit/', views.cms_page_edit, name='page_create'),
    path('cms/pages/edit/<int:page_id>/', views.cms_page_edit, name='page_edit'),
    path('cms/gallery/', views.cms_gallery, name='gallery'),
    path('cms/contacts/', views.cms_contacts, name='contacts'),
]

# Combined URL patterns
urlpatterns = public_urlpatterns + admin_urlpatterns 