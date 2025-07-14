from django.shortcuts import render


def index(request):
    return render(request, 'website_parent/index.html')

def privacy(request):
    return render(request, 'website_parent/privacy.html')


def terms_conditions(request):
    return render(request, 'website_parent/terms_conditions.html')

def signup(request):
    return render(request, 'authentication/signup.html')






from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from saas_admin.utils import upload_file_to_vps
from icecream import ic

@csrf_exempt
def upload_file_view(request):
    if request.method == 'POST' and request.FILES.get('file'):
        file = request.FILES['file']
        file_name = file.name
        folder = "user_data/test" 

        file_url = upload_file_to_vps(file, file_name, folder)
        return JsonResponse({'message': 'File uploaded successfully!', 'file_url': file_url})

    return JsonResponse({'error': 'No file uploaded'}, status=400)