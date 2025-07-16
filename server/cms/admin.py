from django.contrib import admin
from django.utils.html import format_html
from .models import (
    WebsiteSettings, MenuCategory, MenuItem, FooterSettings, SocialLink,
    UsefulLink, LandingPageSection, Feature, Page, Gallery, ContactForm
)


class MenuItemInline(admin.TabularInline):
    model = MenuItem
    extra = 0
    fields = ('title', 'url', 'target', 'icon_class', 'order', 'is_active')
    ordering = ('order',)


@admin.register(WebsiteSettings)
class WebsiteSettingsAdmin(admin.ModelAdmin):
    list_display = ('tenant', 'site_title', 'primary_color', 'updated_at')
    list_filter = ('tenant', 'updated_at')
    search_fields = ('tenant__hospital_name', 'site_title')
    fieldsets = (
        ('Basic Information', {
            'fields': ('tenant', 'site_title', 'site_description')
        }),
        ('Visual Settings', {
            'fields': ('logo', 'favicon', 'primary_color', 'secondary_color', 'font_family')
        }),
    )
    
    def has_add_permission(self, request):
        # Only allow one settings per tenant
        return True
    
    def logo_preview(self, obj):
        if obj.logo:
            return format_html('<img src="{}" style="max-height: 50px;">', obj.logo.url)
        return "No logo"
    logo_preview.short_description = "Logo Preview"


@admin.register(MenuCategory)
class MenuCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'tenant', 'order', 'is_active', 'created_at')
    list_filter = ('tenant', 'is_active', 'created_at')
    search_fields = ('name', 'tenant__hospital_name')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [MenuItemInline]
    ordering = ('tenant', 'order', 'name')


@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'category', 'url', 'target', 'order', 'is_active')
    list_filter = ('tenant', 'category', 'target', 'is_active', 'created_at')
    search_fields = ('title', 'url', 'tenant__hospital_name')
    ordering = ('tenant', 'order', 'title')
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.select_related('tenant', 'category')


@admin.register(FooterSettings)
class FooterSettingsAdmin(admin.ModelAdmin):
    list_display = ('tenant', 'company_name', 'email', 'phone', 'show_social_links', 'updated_at')
    list_filter = ('tenant', 'show_social_links', 'updated_at')
    search_fields = ('tenant__hospital_name', 'company_name', 'email')
    fieldsets = (
        ('Company Information', {
            'fields': ('tenant', 'logo', 'company_name', 'description')
        }),
        ('Contact Information', {
            'fields': ('address', 'phone', 'email')
        }),
        ('Settings', {
            'fields': ('copyright_text', 'show_social_links')
        }),
    )
    
    def logo_preview(self, obj):
        if obj.logo:
            return format_html('<img src="{}" style="max-height: 50px;">', obj.logo.url)
        return "No logo"
    logo_preview.short_description = "Logo Preview"


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'tenant', 'url', 'order', 'is_active')
    list_filter = ('tenant', 'platform', 'is_active')
    search_fields = ('tenant__hospital_name', 'platform', 'url')
    ordering = ('tenant', 'order', 'platform')


@admin.register(UsefulLink)
class UsefulLinkAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'url', 'target', 'order', 'is_active')
    list_filter = ('tenant', 'target', 'is_active', 'created_at')
    search_fields = ('title', 'url', 'tenant__hospital_name')
    ordering = ('tenant', 'order', 'title')


@admin.register(LandingPageSection)
class LandingPageSectionAdmin(admin.ModelAdmin):
    list_display = ('section_type', 'tenant', 'title', 'order', 'is_active', 'updated_at')
    list_filter = ('tenant', 'section_type', 'is_active', 'updated_at')
    search_fields = ('title', 'tenant__hospital_name', 'content')
    ordering = ('tenant', 'order', 'section_type')
    fieldsets = (
        ('Basic Information', {
            'fields': ('tenant', 'section_type', 'title', 'subtitle')
        }),
        ('Content', {
            'fields': ('content',)
        }),
        ('Styling', {
            'fields': ('background_image', 'background_color', 'text_color')
        }),
        ('Settings', {
            'fields': ('order', 'is_active')
        }),
    )
    
    def background_preview(self, obj):
        if obj.background_image:
            return format_html('<img src="{}" style="max-height: 50px;">', obj.background_image.url)
        return "No background image"
    background_preview.short_description = "Background Preview"


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'order', 'is_active', 'updated_at')
    list_filter = ('tenant', 'is_active', 'updated_at')
    search_fields = ('title', 'description', 'tenant__hospital_name')
    ordering = ('tenant', 'order', 'title')
    fieldsets = (
        ('Basic Information', {
            'fields': ('tenant', 'title', 'description')
        }),
        ('Visual', {
            'fields': ('icon', 'icon_class')
        }),
        ('Settings', {
            'fields': ('url', 'order', 'is_active')
        }),
    )
    
    def icon_preview(self, obj):
        if obj.icon:
            return format_html('<img src="{}" style="max-height: 30px;">', obj.icon.url)
        elif obj.icon_class:
            return format_html('<i class="{}"></i>', obj.icon_class)
        return "No icon"
    icon_preview.short_description = "Icon Preview"


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'slug', 'page_type', 'is_published', 'is_featured', 'author', 'updated_at')
    list_filter = ('tenant', 'page_type', 'is_published', 'is_featured', 'created_at')
    search_fields = ('title', 'content', 'tenant__hospital_name', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('tenant', '-updated_at')
    date_hierarchy = 'created_at'
    fieldsets = (
        ('Basic Information', {
            'fields': ('tenant', 'title', 'slug', 'page_type', 'author')
        }),
        ('Content', {
            'fields': ('content', 'featured_image')
        }),
        ('SEO', {
            'fields': ('meta_description', 'meta_keywords')
        }),
        ('Settings', {
            'fields': ('is_published', 'is_featured', 'published_at')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new page
            obj.author = request.user
        super().save_model(request, obj, form, change)
    
    def image_preview(self, obj):
        if obj.featured_image:
            return format_html('<img src="{}" style="max-height: 50px;">', obj.featured_image.url)
        return "No image"
    image_preview.short_description = "Featured Image"


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'tenant', 'gallery_type', 'order', 'is_active', 'created_at')
    list_filter = ('tenant', 'gallery_type', 'is_active', 'created_at')
    search_fields = ('title', 'description', 'tenant__hospital_name')
    ordering = ('tenant', 'order', '-created_at')
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 50px;">', obj.image.url)
        return "No image"
    image_preview.short_description = "Image Preview"


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'tenant', 'email', 'subject', 'is_read', 'created_at')
    list_filter = ('tenant', 'is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message', 'tenant__hospital_name')
    readonly_fields = ('name', 'email', 'phone', 'subject', 'message', 'created_at')
    ordering = ('tenant', '-created_at')
    date_hierarchy = 'created_at'
    
    actions = ['mark_as_read', 'mark_as_unread']
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
        self.message_user(request, f"{queryset.count()} submissions marked as read.")
    mark_as_read.short_description = "Mark selected submissions as read"
    
    def mark_as_unread(self, request, queryset):
        queryset.update(is_read=False)
        self.message_user(request, f"{queryset.count()} submissions marked as unread.")
    mark_as_unread.short_description = "Mark selected submissions as unread"
    
    def has_add_permission(self, request):
        return False  # Don't allow adding contact forms through admin
    
    def has_delete_permission(self, request, obj=None):
        return True  # Allow deletion of contact forms
