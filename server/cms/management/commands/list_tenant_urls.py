from django.core.management.base import BaseCommand
from users.models import Domain, Tenant


class Command(BaseCommand):
    help = 'List all tenant domains and their CMS URLs'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('=== Tenant CMS Access URLs ===\n'))
        
        domains = Domain.objects.exclude(tenant__schema_name='public').select_related('tenant')
        
        if not domains.exists():
            self.stdout.write(self.style.WARNING('No tenant domains found!'))
            self.stdout.write('You need to create tenant domains to access CMS functionality.')
            return
        
        for domain in domains:
            tenant = domain.tenant
            hospital_name = tenant.hospital_name or 'Unknown Hospital'
            
            self.stdout.write(f"🏥 {hospital_name}")
            self.stdout.write(f"   Domain: {domain.domain}")
            self.stdout.write(f"   Schema: {tenant.schema_name}")
            self.stdout.write(f"   CMS URLs:")
            self.stdout.write(f"     Dashboard: http://{domain.domain}:8000/cms/")
            self.stdout.write(f"     Settings:  http://{domain.domain}:8000/cms/settings/")
            self.stdout.write(f"     Pages:     http://{domain.domain}:8000/cms/pages/")
            self.stdout.write(f"     Features:  http://{domain.domain}:8000/cms/features/")
            self.stdout.write(f"     Gallery:   http://{domain.domain}:8000/cms/gallery/")
            self.stdout.write(f"     Contacts:  http://{domain.domain}:8000/cms/contacts/")
            self.stdout.write("")
        
        # Show public domain info
        public_domains = Domain.objects.filter(tenant__schema_name='public')
        if public_domains.exists():
            self.stdout.write(self.style.WARNING('🌐 Public Domain(s):'))
            for domain in public_domains:
                self.stdout.write(f"   {domain.domain} - CMS NOT available (public schema)")
            self.stdout.write("")
        
        self.stdout.write(self.style.SUCCESS('💡 Important:'))
        self.stdout.write('   - CMS is only available on tenant domains (not public domains)')
        self.stdout.write('   - Make sure you are logged in as a user with access to the specific tenant')
        self.stdout.write('   - Use the tenant domain URLs listed above to access CMS features') 