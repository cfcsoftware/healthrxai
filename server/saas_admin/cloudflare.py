import requests
from django.conf import settings
from icecream import ic

def create_cloudflare_subdomain(subdomain, ip="206.72.195.183"):
    url = f"https://api.cloudflare.com/client/v4/zones/{settings.CLOUDFLARE_ZONE_ID}/dns_records"
    ic(url)
    headers = {
        "Authorization": f"Bearer {settings.CLOUDFLARE_API_TOKEN}",
        "Content-Type": "application/json"
    }
    ic(headers)
    payload = {
        "type": "A",
        "name": f"{subdomain}.healthsrx.com",
        "content": ip,
        "ttl": 3600,
        "proxied": False
    }
    ic(payload)
    response = requests.post(url, headers=headers, json=payload)
    ic(response.json())
    return response.json()

