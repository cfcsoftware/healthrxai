from django.core.management.base import BaseCommand
from django.core.files.base import ContentFile
from django_tenants.utils import schema_context
from users.models import Tenant
from cms.models import (
    WebsiteSettings, MenuItem, FooterSettings, SocialLink, UsefulLink,
    LandingPageSection, Feature, Page, Gallery
)



    
def handle(tenant_name):
    
    # Try to find tenant by hospital_name or full_name
    tenant = None
    try:
        # First try by hospital_name
        tenant = Tenant.objects.get(hospital_name__iexact=tenant_name)
    except Tenant.DoesNotExist:
        try:
            # Then try by full_name
            tenant = Tenant.objects.get(full_name__iexact=tenant_name)
        except Tenant.DoesNotExist:
            # List available tenants for help
            print(f'Tenant "{tenant_name}" not found')
            print('Available tenants:')
            for t in Tenant.objects.exclude(schema_name='public'):
                print(f'  - Hospital Name: "{t.hospital_name}", Full Name: "{t.full_name}", Schema: "{t.schema_name}"')
            return

    print(f'Setting up demo CMS content for tenant: {tenant.full_name or tenant.hospital_name}')

    # Get display name for tenant
    tenant_display_name = tenant.full_name or tenant.hospital_name or tenant.schema_name

    # Use schema context to ensure we're working in the correct tenant schema
    with schema_context(tenant.schema_name):
        # Create website settings
        website_settings, created = WebsiteSettings.objects.get_or_create(
            tenant=tenant,
            defaults={
                'site_title': f'{tenant_display_name} Hospital',
                'site_description': f'Welcome to {tenant_display_name} Hospital - providing quality healthcare services.',
                'primary_color': '#667eea',
                'secondary_color': '#764ba2',
                'font_family': 'Inter, sans-serif',
            }
        )
        
        if created:
            print('✓ Website settings created')
        else:
            print('✓ Website settings already exist')

        # Create menu items
        home_menu, created = MenuItem.objects.get_or_create(
            tenant=tenant,
            title='Home',
            defaults={
                'url': '/',
                'order': 1,
                'is_active': True,
            }
        )
        
        services_menu, created = MenuItem.objects.get_or_create(
            tenant=tenant,
            title='Services',
            defaults={
                'url': '/services/',
                'order': 2,
                'is_active': True,
            }
        )
        
        about_menu, created = MenuItem.objects.get_or_create(
            tenant=tenant,
            title='About',
            defaults={
                'url': '/about/',
                'order': 3,
                'is_active': True,
            }
        )
        
        contact_menu, created = MenuItem.objects.get_or_create(
            tenant=tenant,
            title='Contact',
            defaults={
                'url': '/contact/',
                'order': 4,
                'is_active': True,
            }
        )
        login_menu, created = MenuItem.objects.get_or_create(
            tenant=tenant,
            title='Login',
            defaults={
                'url': '/login',
                'order': 5,
                'is_active': True,
            }
        )
        
        print('✓ Menu items created')

        # Create footer settings
        footer_settings, created = FooterSettings.objects.get_or_create(
            tenant=tenant,
            defaults={
                'company_name': f'{tenant_display_name} Hospital',
                'description': 'Providing exceptional healthcare services with compassion and expertise.',
                'address': '123 Healthcare Drive, Medical City, MC 12345',
                'phone': '+1 (555) 123-4567',
                'email': f'info@{tenant_display_name.lower().replace(" ", "")}.com',
                'copyright_text': f'© 2024 {tenant_display_name} Hospital. All rights reserved.',
            }
        )
        
        if created:
            print('✓ Footer settings created')

        # Create social links
        social_links_data = [
            {'platform': 'facebook', 'url': 'https://facebook.com/hospital', 'order': 1},
            {'platform': 'twitter', 'url': 'https://twitter.com/hospital', 'order': 2},
            {'platform': 'linkedin', 'url': 'https://linkedin.com/company/hospital', 'order': 3},
            {'platform': 'instagram', 'url': 'https://instagram.com/hospital', 'order': 4},
        ]
        
        for social_data in social_links_data:
            SocialLink.objects.get_or_create(
                tenant=tenant,
                platform=social_data['platform'],
                defaults={
                    'url': social_data['url'],
                    'order': social_data['order'],
                    'is_active': True,
                }
            )
        
        print('✓ Social links created')

        # Create useful links
        useful_links_data = [
            {'title': 'Patient Portal', 'url': '/patient-portal/', 'order': 1},
            {'title': 'Emergency Services', 'url': '/emergency/', 'order': 2},
            {'title': 'Appointments', 'url': '/appointments/', 'order': 3},
            {'title': 'Health Resources', 'url': '/resources/', 'order': 4},
        ]
        
        for link_data in useful_links_data:
            UsefulLink.objects.get_or_create(
                tenant=tenant,
                title=link_data['title'],
                defaults={
                    'url': link_data['url'],
                    'order': link_data['order'],
                    'is_active': True,
                }
            )
        
        print('✓ Useful links created')

        # Create landing page sections
        hero_section, created = LandingPageSection.objects.get_or_create(
            tenant=tenant,
            section_type='hero',
            defaults={
                'title': f'Welcome to {tenant_display_name} Hospital',
                'subtitle': 'Quality Healthcare Services',
                'content': 'Providing exceptional healthcare services with state-of-the-art facilities and compassionate care.',
                'order': 1,
                'is_active': True,
            }
        )
        
        about_section, created = LandingPageSection.objects.get_or_create(
            tenant=tenant,
            section_type='about',
            defaults={
                'title': 'About Our Hospital',
                'content': 'With over 50 years of experience in healthcare, we are committed to providing the highest quality medical care to our community. Our team of experienced doctors and nurses work around the clock to ensure your health and well-being.',
                'order': 2,
                'is_active': True,
            }
        )
        
        services_section, created = LandingPageSection.objects.get_or_create(
            tenant=tenant,
            section_type='services',
            defaults={
                'title': 'Our Services',
                'content': 'We offer a comprehensive range of medical services to meet all your healthcare needs.',
                'order': 3,
                'is_active': True,
            }
        )
        
        print('✓ Landing page sections created')

        # Create features
        features_data = [
            {
                'title': 'Emergency Care',
                'description': '24/7 emergency medical services with rapid response team.',
                'icon_class': 'fas fa-ambulance',
                'order': 1,
            },
            {
                'title': 'Expert Doctors',
                'description': 'Board-certified physicians with years of experience.',
                'icon_class': 'fas fa-user-md',
                'order': 2,
            },
            {
                'title': 'Modern Equipment',
                'description': 'State-of-the-art medical technology and facilities.',
                'icon_class': 'fas fa-microscope',
                'order': 3,
            },
            {
                'title': 'Patient Care',
                'description': 'Compassionate care focused on patient comfort and recovery.',
                'icon_class': 'fas fa-heart',
                'order': 4,
            },
        ]
        
        for feature_data in features_data:
            Feature.objects.get_or_create(
                tenant=tenant,
                title=feature_data['title'],
                defaults={
                    'description': feature_data['description'],
                    'icon_class': feature_data['icon_class'],
                    'order': feature_data['order'],
                    'is_active': True,
                }
            )
        
        print('✓ Features created')

        # Create a sample page
        Page.objects.get_or_create(
            tenant=tenant,
            title='Our Story',
            defaults={
                'slug': 'our-story',
                'content': '''
                <h2>Our Story</h2>
                <p>Founded in 1970, our hospital has been serving the community for over five decades. What started as a small clinic has grown into a full-service medical facility, providing comprehensive healthcare services to thousands of patients each year.</p>
                
                <h3>Our Mission</h3>
                <p>To provide exceptional healthcare services with compassion, innovation, and excellence, improving the health and well-being of our community.</p>
                
                <h3>Our Vision</h3>
                <p>To be the leading healthcare provider in the region, recognized for our commitment to patient care, medical excellence, and community service.</p>
                ''',
                'is_published': True,
                'is_featured': True,
                'meta_description': 'Learn about our hospital\'s history, mission, and commitment to healthcare excellence.',
            }
        )
        
        print('✓ Sample page created')

    print(
        f'Successfully set up demo CMS content for {tenant_display_name}!'
    )
    print(
        'Note: You can now visit your tenant domain to see the CMS landing page.'
    )