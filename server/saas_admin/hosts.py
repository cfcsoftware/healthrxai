from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'www', 'saas_admin.urls', name='www'),
    host(r'(?P<tenant>[a-z0-9-]+)', 'saas_admin.tenant_urls', name='tenant'),
)
