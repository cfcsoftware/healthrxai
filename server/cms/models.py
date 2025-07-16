from django.db import models
from django.contrib.auth import get_user_model
from users.models import Tenant
from ckeditor.fields import RichTextField

User = get_user_model()


class WebsiteSettings(models.Model):
    """Model to store tenant-specific website settings"""
    tenant = models.OneToOneField(Tenant, on_delete=models.CASCADE, related_name='website_settings')
    site_title = models.CharField(max_length=200, default="Hospital Management System")
    site_description = models.TextField(blank=True, null=True)
    logo = models.ImageField(upload_to='cms/logos/', blank=True, null=True)
    favicon = models.ImageField(upload_to='cms/favicons/', blank=True, null=True)
    primary_color = models.CharField(max_length=7, default="#007bff")  # Hex color
    secondary_color = models.CharField(max_length=7, default="#6c757d")  # Hex color
    font_family = models.CharField(max_length=100, default="Arial, sans-serif")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = "CMS-website-Setting"
        verbose_name = "Website Settings"
        verbose_name_plural = "Website Settings"
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - Website Settings"


class MenuCategory(models.Model):
    """Model for menu categories"""
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='menu_categories')
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "CMS-Menubar"
        verbose_name = "Menu Category"
        verbose_name_plural = "Menu Categories"
        ordering = ['order', 'name']
        unique_together = ['tenant', 'slug']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.name}"


class MenuItem(models.Model):
    """Model for individual menu items"""
    TARGET_CHOICES = [
        ('_self', 'Same Window'),
        ('_blank', 'New Window'),
    ]
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='menu_items')
    category = models.ForeignKey(MenuCategory, on_delete=models.CASCADE, related_name='items', blank=True, null=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='children')
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    target = models.CharField(max_length=10, choices=TARGET_CHOICES, default='_self')
    icon_class = models.CharField(max_length=100, blank=True, null=True)  # For font awesome icons
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "CMS-Menu-Items"
        verbose_name = "Menu Item"
        verbose_name_plural = "Menu Items"
        ordering = ['order', 'title']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.title}"


class FooterSettings(models.Model):
    """Model to store tenant-specific footer settings"""
    tenant = models.OneToOneField(Tenant, on_delete=models.CASCADE, related_name='footer_settings')
    logo = models.ImageField(upload_to='cms/footer_logos/', blank=True, null=True)
    company_name = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    copyright_text = models.CharField(max_length=200, blank=True, null=True)
    show_social_links = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = "CMS-Footer-Settings"
        verbose_name = "Footer Settings"
        verbose_name_plural = "Footer Settings"
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - Footer Settings"


class SocialLink(models.Model):
    """Model for social media links in footer"""
    PLATFORM_CHOICES = [
        ('facebook', 'Facebook'),
        ('twitter', 'Twitter'),
        ('instagram', 'Instagram'),
        ('linkedin', 'LinkedIn'),
        ('youtube', 'YouTube'),
        ('whatsapp', 'WhatsApp'),
        ('telegram', 'Telegram'),
    ]
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='social_links')
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    url = models.URLField()
    icon_class = models.CharField(max_length=100, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        db_table = "CMS-Social-Links"
        verbose_name = "Social Link"
        verbose_name_plural = "Social Links"
        ordering = ['order']
        unique_together = ['tenant', 'platform']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.platform}"


class UsefulLink(models.Model):
    """Model for useful links in footer"""
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='useful_links')
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    target = models.CharField(max_length=10, choices=[('_self', 'Same Window'), ('_blank', 'New Window')], default='_self')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "CMS-Useful-Links"
        verbose_name = "Useful Link"
        verbose_name_plural = "Useful Links"
        ordering = ['order', 'title']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.title}"


class LandingPageSection(models.Model):
    """Model for different sections of the landing page"""
    SECTION_TYPES = [
        ('hero', 'Hero Section'),
        ('about', 'About Section'),
        ('services', 'Services Section'),
        ('features', 'Features Section'),
        ('testimonials', 'Testimonials Section'),
        ('contact', 'Contact Section'),
        ('custom', 'Custom Section'),
    ]
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='landing_sections')
    section_type = models.CharField(max_length=20, choices=SECTION_TYPES)
    title = models.CharField(max_length=200, blank=True, null=True)
    subtitle = models.CharField(max_length=300, blank=True, null=True)
    content = RichTextField(blank=True, null=True)
    background_image = models.ImageField(upload_to='cms/section_backgrounds/', blank=True, null=True)
    background_color = models.CharField(max_length=7, blank=True, null=True)  # Hex color
    text_color = models.CharField(max_length=7, default="#000000")  # Hex color
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = "CMS-Landing-Page"
        verbose_name = "Landing Page Section"
        verbose_name_plural = "Landing Page Sections"
        ordering = ['order']
        unique_together = ['tenant', 'section_type']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.get_section_type_display()}"


class Feature(models.Model):
    """Model for features/services displayed on landing page"""
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='features')
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.ImageField(upload_to='cms/feature_icons/', blank=True, null=True)
    icon_class = models.CharField(max_length=100, blank=True, null=True)  # For font awesome icons
    url = models.CharField(max_length=500, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = "CMS-Feature-Section"
        verbose_name = "Feature"
        verbose_name_plural = "Features"
        ordering = ['order', 'title']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.title}"


class Page(models.Model):
    """Model for custom pages"""
    PAGE_TYPES = [
        ('static', 'Static Page'),
        ('dynamic', 'Dynamic Page'),
    ]
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='pages')
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    content = RichTextField()
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.CharField(max_length=500, blank=True, null=True)
    page_type = models.CharField(max_length=10, choices=PAGE_TYPES, default='static')
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    featured_image = models.ImageField(upload_to='cms/page_images/', blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='authored_pages')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        db_table = "CMS-Pages"
        verbose_name = "Page"
        verbose_name_plural = "Pages"
        ordering = ['-created_at']
        unique_together = ['tenant', 'slug']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.title}"


class Gallery(models.Model):
    """Model for image gallery"""
    GALLERY_TYPES = [
        ('general', 'General'),
        ('facilities', 'Facilities'),
        ('staff', 'Staff'),
        ('events', 'Events'),
    ]
    
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='gallery_images')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='cms/gallery/')
    gallery_type = models.CharField(max_length=20, choices=GALLERY_TYPES, default='general')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "CMS-Gallery-Images"
        verbose_name = "Gallery Image"
        verbose_name_plural = "Gallery Images"
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.title}"


class ContactForm(models.Model):
    """Model to store contact form submissions"""
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, related_name='contact_submissions')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "CMS-Contact-Forms"
        verbose_name = "Contact Form Submission"
        verbose_name_plural = "Contact Form Submissions"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.tenant.hospital_name} - {self.name} - {self.subject}"
