from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.paginator import Paginator
from django.db.models import Q
from django.utils import timezone
from django.template.loader import render_to_string
from users.models import Tenant
from .models import (
    WebsiteSettings, MenuItem, FooterSettings, SocialLink, UsefulLink,
    LandingPageSection, Feature, Page, Gallery, ContactForm
)
import json
import logging
from django.contrib.auth import get_user_model

User = get_user_model()

# Configure the logger
logger = logging.getLogger(__name__)


def get_tenant_from_request(request):
    """
    Helper function to get tenant from request.
    Returns tenant if valid, raises Http404 if not a tenant domain.
    """
    # Log the request details for debugging
    logger.debug(f"Request domain: {request.get_host()}")
    logger.debug(f"Request tenant: {getattr(request, 'tenant', 'No tenant attribute')}")
    
    if hasattr(request, 'tenant') and request.tenant:
        logger.debug(f"Tenant found: {request.tenant}")
        logger.debug(f"Tenant schema: {getattr(request.tenant, 'schema_name', 'No schema')}")
        return request.tenant
    else:
        logger.debug("No tenant found in request")
        return None


def check_tenant_access(request):
    """
    Check if request has proper tenant access for CMS.
    Returns tenant if valid, raises Http404 with helpful message if not.
    """
    if not hasattr(request, 'tenant') or not request.tenant:
        messages.error(request, 'CMS is only available on tenant domains. Please access from your hospital domain (e.g., yourhospital.localhost:8000)')
        raise Http404("CMS not available on public domain")
    
    # Check if this is the public schema
    if hasattr(request.tenant, 'schema_name') and request.tenant.schema_name == 'public':
        messages.error(request, 'CMS is only available on tenant domains. Please access from your hospital domain.')
        raise Http404("CMS not available on public domain")
    
    return request.tenant

@csrf_exempt
def get_cms_context(tenant):
    """Helper function to get common CMS context for a tenant"""
    if not tenant:
        return {}
    
    context = {}
    
    # Website settings
    try:
        context['website_settings'] = WebsiteSettings.objects.get(tenant=tenant)
    except WebsiteSettings.DoesNotExist:
        context['website_settings'] = None
    
    # Menu items
    context['menu_items'] = MenuItem.objects.filter(
        tenant=tenant, 
        is_active=True,
        parent__isnull=True
    ).order_by('order', 'title')
    
    # Footer settings
    try:
        context['footer_settings'] = FooterSettings.objects.get(tenant=tenant)
        context['social_links'] = SocialLink.objects.filter(
            tenant=tenant, 
            is_active=True
        ).order_by('order')
        context['useful_links'] = UsefulLink.objects.filter(
            tenant=tenant, 
            is_active=True
        ).order_by('order', 'title')
    except FooterSettings.DoesNotExist:
        context['footer_settings'] = None
        context['social_links'] = []
        context['useful_links'] = []
    
    return context


def index_redirect(request):
    """
    Main index view that redirects based on tenant/public domain logic
    - If tenant domain: Show CMS landing page
    - If public domain: Redirect to website index
    """
    tenant = get_tenant_from_request(request)
    
    # Debug information
    domain = request.get_host().split(':')[0]
    print(f"DEBUG: Domain={domain}, Tenant={tenant}")
    
    # Check if we're on a tenant domain with CMS setup
    if tenant:
        # Check if tenant has CMS content configured
        has_cms_content = (
            WebsiteSettings.objects.filter(tenant=tenant).exists() or
            LandingPageSection.objects.filter(tenant=tenant, is_active=True).exists() or
            Feature.objects.filter(tenant=tenant, is_active=True).exists()
        )
        
        print(f"DEBUG: Tenant {tenant.hospital_name} has CMS content: {has_cms_content}")
        
        if has_cms_content:
            # Show CMS landing page
            return public_landing_page(request)
    
    # Fallback to website index for public domain or tenants without CMS
    try:
        from website.views import index as website_index
        return website_index(request)
    except Exception as e:
        print(f"DEBUG: Error calling website index: {e}")
        # If website index fails, show a simple default page
        return render(request, 'cms/public/default_landing.html', {
            'domain': domain,
            'tenant': tenant,
            'debug_info': f"Domain: {domain}, Tenant: {tenant}"
        })

@csrf_exempt
def public_landing_page(request):
    """Public landing page view"""
    tenant = get_tenant_from_request(request)
    
    if not tenant:
        # Show default public page
        return render(request, 'cms/public/default_landing.html')
    
    context = get_cms_context(tenant)
    
    # Landing page sections
    context['landing_sections'] = LandingPageSection.objects.filter(
        tenant=tenant, 
        is_active=True
    ).order_by('order')
    
    # Features
    context['features'] = Feature.objects.filter(
        tenant=tenant, 
        is_active=True
    ).order_by('order', 'title')
    
    # Recent pages/news
    context['recent_pages'] = Page.objects.filter(
        tenant=tenant, 
        is_published=True,
        is_featured=True
    ).order_by('-published_at')[:3]
    
    # Gallery images
    context['gallery_images'] = Gallery.objects.filter(
        tenant=tenant, 
        is_active=True
    ).order_by('order', '-created_at')[:6]
    
    return render(request, 'cms/public/landing_page.html', context)

@csrf_exempt
def tenant_dashboard(request):
    """Tenant-specific dashboard view"""
    if not hasattr(request, 'tenant') or not request.tenant:
        raise Http404("Tenant not found")
    
    tenant = request.tenant
    context = get_cms_context(tenant)
    
    # Dashboard statistics
    context['stats'] = {
        'total_pages': Page.objects.filter(tenant=tenant).count(),
        'published_pages': Page.objects.filter(tenant=tenant, is_published=True).count(),
        'total_features': Feature.objects.filter(tenant=tenant).count(),
        'contact_submissions': ContactForm.objects.filter(tenant=tenant, is_read=False).count(),
        'gallery_images': Gallery.objects.filter(tenant=tenant).count(),
    }
    
    # Recent activities
    context['recent_pages'] = Page.objects.filter(
        tenant=tenant
    ).order_by('-updated_at')[:5]
    
    context['recent_contacts'] = ContactForm.objects.filter(
        tenant=tenant
    ).order_by('-created_at')[:5]
    
    return render(request, 'cms/dashboard.html', context)


def page_detail(request, slug):
    """Page detail view"""
    tenant = get_tenant_from_request(request)
    
    if not tenant:
        raise Http404("Page not found")
    
    page = get_object_or_404(
        Page, 
        tenant=tenant, 
        slug=slug, 
        is_published=True
    )
    
    context = get_cms_context(tenant)
    context['page'] = page
    
    return render(request, 'cms/public/page_detail.html', context)

@csrf_exempt
def gallery_view(request):
    """Gallery view"""
    tenant = get_tenant_from_request(request)
    
    if not tenant:
        raise Http404("Gallery not found")
    
    context = get_cms_context(tenant)
    
    gallery_type = request.GET.get('type', 'all')
    search_query = request.GET.get('search', '')
    
    images = Gallery.objects.filter(tenant=tenant, is_active=True)
    
    if gallery_type != 'all':
        images = images.filter(gallery_type=gallery_type)
    
    if search_query:
        images = images.filter(
            Q(title__icontains=search_query) | 
            Q(description__icontains=search_query)
        )
    
    images = images.order_by('order', '-created_at')
    
    # Pagination
    paginator = Paginator(images, 12)  # 12 images per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context.update({
        'images': page_obj,
        'gallery_types': Gallery.GALLERY_TYPES,
        'current_type': gallery_type,
        'search_query': search_query,
    })
    
    return render(request, 'cms/public/gallery.html', context)


@csrf_exempt
@require_http_methods(["POST"])
def contact_form_submit(request):
    """Handle contact form submissions"""
    tenant = get_tenant_from_request(request)
    
    if not tenant:
        return JsonResponse({'error': 'Invalid request'}, status=400)
    
    try:
        data = json.loads(request.body) if request.content_type == 'application/json' else request.POST
        
        contact = ContactForm.objects.create(
            tenant=tenant,
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            subject=data.get('subject', ''),
            message=data.get('message', '')
        )
        
        return JsonResponse({
            'success': True,
            'message': 'Thank you for your message. We will get back to you soon!'
        })
        
    except Exception as e:
        return JsonResponse({
            'error': 'Failed to submit form. Please try again.',
            'details': str(e)
        }, status=500)


# Tenant Admin Views (for CMS management)

# @login_required
@csrf_exempt
def cms_menu_builder(request):
    """Menu builder interface"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    # Get all menu items for this tenant
    context['menu_items'] = MenuItem.objects.filter(
        tenant=tenant
    ).order_by('order', 'title')
    
    return render(request, 'cms/tenant/menu_builder.html', context)


# @login_required
@csrf_exempt
def save_menu_item(request):
    """Save/Update menu item via AJAX"""
    tenant = check_tenant_access(request)
    
    if request.method != 'POST':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    
    try:
        data = json.loads(request.body)
        logger.debug(f"Received menu item data: {data}")
        
        # Validate required fields
        if not data.get('title') or not data.get('url'):
            return JsonResponse({
                'error': 'Title and URL are required fields'
            }, status=400)
        
        item_id = data.get('id')
        
        if item_id:
            # Update existing item
            item = get_object_or_404(MenuItem, id=item_id, tenant=tenant)
        else:
            # Create new item
            item = MenuItem(tenant=tenant)
        
        item.title = data.get('title', '')
        item.url = data.get('url', '')
        item.target = data.get('target', '_self')
        item.icon_class = data.get('icon_class', '')
        
        # Handle order conversion
        try:
            item.order = int(data.get('order', 0))
        except (ValueError, TypeError):
            item.order = 0
            
        item.is_active = bool(data.get('is_active', True))
        
        # Handle parent relationship
        parent_id = data.get('parent_id')
        if parent_id:
            item.parent = get_object_or_404(MenuItem, id=parent_id, tenant=tenant)
        else:
            item.parent = None
        
        item.save()
        logger.info(f"Menu item saved successfully: {item.id}")
        
        return JsonResponse({
            'success': True,
            'item_id': item.id,
            'message': 'Menu item saved successfully!'
        })
        
    except json.JSONDecodeError as e:
        logger.error(f"JSON decode error: {e}")
        return JsonResponse({
            'error': 'Invalid JSON data',
            'details': str(e)
        }, status=400)
    except Exception as e:
        logger.error(f"Error saving menu item: {e}")
        return JsonResponse({
            'error': 'Failed to save menu item',
            'details': str(e)
        }, status=500)


# @login_required
@csrf_exempt
def delete_menu_item(request, item_id):
    """Delete menu item"""
    tenant = check_tenant_access(request)
    
    if request.method != 'DELETE':
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    
    try:
        item = get_object_or_404(MenuItem, id=item_id, tenant=tenant)
        item.delete()
        
        return JsonResponse({
            'success': True,
            'message': 'Menu item deleted successfully!'
        })
        
    except Exception as e:
        return JsonResponse({
            'error': 'Failed to delete menu item',
            'details': str(e)
        }, status=500)

# @login_required
@csrf_exempt
def cms_settings(request):
    """CMS settings management view"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    # Get or create website settings and footer settings
    website_settings, created = WebsiteSettings.objects.get_or_create(
        tenant=tenant,
        defaults={
            'site_title': f"{tenant.hospital_name} - Hospital Management System"
        }
    )
    
    footer_settings, created = FooterSettings.objects.get_or_create(
        tenant=tenant,
        defaults={
            'company_name': tenant.hospital_name
        }
    )
    
    context.update({
        'website_settings': website_settings,
        'footer_settings': footer_settings,
    })
    
    if request.method == 'POST':
        # Handle website settings form
        website_settings.site_title = request.POST.get('site_title', '')
        website_settings.site_description = request.POST.get('site_description', '')
        website_settings.primary_color = request.POST.get('primary_color', '#007bff')
        website_settings.secondary_color = request.POST.get('secondary_color', '#6c757d')
        website_settings.font_family = request.POST.get('font_family', 'Arial, sans-serif')
        
        if 'logo' in request.FILES:
            website_settings.logo = request.FILES['logo']
        if 'favicon' in request.FILES:
            website_settings.favicon = request.FILES['favicon']
            
        website_settings.save()
        
        # Handle footer settings
        footer_settings.company_name = request.POST.get('company_name', '')
        footer_settings.description = request.POST.get('description', '')
        footer_settings.address = request.POST.get('address', '')
        footer_settings.phone = request.POST.get('phone', '')
        footer_settings.email = request.POST.get('email', '')
        footer_settings.copyright_text = request.POST.get('copyright_text', '')
        
        if 'footer_logo' in request.FILES:
            footer_settings.logo = request.FILES['footer_logo']
            
        footer_settings.save()
        
        messages.success(request, 'Website settings updated successfully!')
        return redirect('cms:settings')
    
    return render(request, 'cms/settings.html', context)


# @login_required
@csrf_exempt
def cms_pages(request):
    """CMS pages management view"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    # Get all pages for this tenant
    pages = Page.objects.filter(tenant=tenant).order_by('-updated_at')
    
    context.update({
        'pages': pages,
    })
    
    return render(request, 'cms/pages.html', context)


# @login_required
@csrf_exempt
def cms_page_edit(request, page_id=None):
    """CMS page create/edit view"""
    tenant = check_tenant_access(request)
    
    # Ensure user is authenticated
    # if not request.user.is_authenticated:
    #     return redirect('login')
    
    context = get_cms_context(tenant)
    
    page = None
    if page_id:
        page = get_object_or_404(Page, id=page_id, tenant=tenant)
    
    if request.method == 'POST':
        title = request.POST.get('title', '')
        slug = request.POST.get('slug', '')
        content = request.POST.get('content', '')
        meta_description = request.POST.get('meta_description', '')
        meta_keywords = request.POST.get('meta_keywords', '')
        is_published = request.POST.get('is_published') == 'on'
        is_featured = request.POST.get('is_featured') == 'on'
        
        if page:
            # Update existing page
            page.title = title
            page.slug = slug
            page.content = content
            page.meta_description = meta_description
            page.meta_keywords = meta_keywords
            page.is_published = is_published
            page.is_featured = is_featured
            
            if 'featured_image' in request.FILES:
                page.featured_image = request.FILES['featured_image']
                
            page.save()
            messages.success(request, 'Page updated successfully!')
        else:
            # Create new page - ensure we have a valid user
            # author = request.user if request.user.is_authenticated else None
            # if not author:
            #     messages.error(request, 'Authentication required to create pages.')
            #     return redirect('login')
            author=User.objects.get(id=request.session['user_id']) 
            # author=request.user
            
            page = Page.objects.create(
                tenant=tenant,
                title=title,
                slug=slug,
                content=content,
                meta_description=meta_description,
                meta_keywords=meta_keywords,
                is_published=is_published,
                is_featured=is_featured,
                author=author
            )
            
            if 'featured_image' in request.FILES:
                page.featured_image = request.FILES['featured_image']
                page.save()
                
            messages.success(request, 'Page created successfully!')
        
        return redirect('cms:pages')
    
    context['page'] = page
    return render(request, 'cms/page_edit.html', context)


# @login_required
@csrf_exempt
def cms_gallery(request):
    """CMS gallery management view"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    if request.method == 'POST':
        # Handle image upload
        title = request.POST.get('title', '')
        description = request.POST.get('description', '')
        gallery_type = request.POST.get('gallery_type', 'general')
        
        if 'image' in request.FILES:
            gallery_image = Gallery.objects.create(
                tenant=tenant,
                title=title,
                description=description,
                image=request.FILES['image'],
                gallery_type=gallery_type,
            )
            messages.success(request, 'Image uploaded successfully!')
        else:
            messages.error(request, 'Please select an image to upload.')
        
        return redirect('cms:gallery')
    
    # Get all gallery images for this tenant
    images = Gallery.objects.filter(tenant=tenant).order_by('-created_at')
    
    context.update({
        'images': images,
        'gallery_types': Gallery.GALLERY_TYPES,
    })
    
    return render(request, 'cms/gallery.html', context)


# @login_required
@csrf_exempt
def cms_contacts(request):
    """CMS contact submissions view"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    # Get all contact submissions for this tenant
    contacts = ContactForm.objects.filter(tenant=tenant).order_by('-created_at')
    
    # Mark as read if viewing
    if request.GET.get('mark_read'):
        contact_id = request.GET.get('mark_read')
        try:
            contact = ContactForm.objects.get(id=contact_id, tenant=tenant)
            contact.is_read = True
            contact.save()
            messages.success(request, 'Contact marked as read.')
        except ContactForm.DoesNotExist:
            messages.error(request, 'Contact not found.')
        return redirect('cms:contacts')
    
    context.update({
        'contacts': contacts,
        'unread_count': contacts.filter(is_read=False).count(),
    })
    
    return render(request, 'cms/contacts.html', context)


# @login_required
@csrf_exempt
def feature_management(request):
    """Feature management view"""
    tenant = check_tenant_access(request)
    context = get_cms_context(tenant)
    
    if request.method == 'POST':
        # Handle feature creation/update
        feature_id = request.POST.get('feature_id')
        title = request.POST.get('title', '')
        description = request.POST.get('description', '')
        icon_class = request.POST.get('icon_class', '')
        url = request.POST.get('url', '')
        order = request.POST.get('order', 0)
        is_active = request.POST.get('is_active') == 'on'
        
        if feature_id:
            # Update existing feature
            try:
                feature = Feature.objects.get(id=feature_id, tenant=tenant)
                feature.title = title
                feature.description = description
                feature.icon_class = icon_class
                feature.url = url
                feature.order = order
                feature.is_active = is_active
                
                if 'icon' in request.FILES:
                    feature.icon = request.FILES['icon']
                    
                feature.save()
                messages.success(request, 'Feature updated successfully!')
            except Feature.DoesNotExist:
                messages.error(request, 'Feature not found.')
        else:
            # Create new feature
            feature = Feature.objects.create(
                tenant=tenant,
                title=title,
                description=description,
                icon_class=icon_class,
                url=url,
                order=order,
                is_active=is_active
            )
            
            if 'icon' in request.FILES:
                feature.icon = request.FILES['icon']
                feature.save()
                
            messages.success(request, 'Feature created successfully!')
        
        return redirect('cms:features')
    
    # Get all features for this tenant
    features = Feature.objects.filter(tenant=tenant).order_by('order', 'title')
    
    context.update({
        'features': features,
    })
    
    return render(request, 'cms/features.html', context)


def custom_404(request, exception):
    """Custom 404 handler with tenant context"""
    tenant = get_tenant_from_request(request)
    context = get_cms_context(tenant) if tenant else {}
    return render(request, 'cms/public/404.html', context, status=404)
