import logging
from rest_framework import status
from saas_admin.middleware import permission_required
from .serializers import *
from .models import *
from ipd_module.models import IPD
from django.http import JsonResponse
from saas_admin.utils import *
logger = logging.getLogger(__name__)
from django.template.response import TemplateResponse
from settings.models import Bed
from settings.serializers import BedSerializer
from collections import defaultdict





@permission_required('bed-management-list')
def bed_management(request):
    if request.method == 'GET':
        beds = Bed.objects.all().order_by('id')
        serializer = BedSerializer(beds, many=True)

        grouped_beds = defaultdict(list)
        for bed in serializer.data:
            grouped_beds[bed['floor']].append(bed)

        context = {
            "grouped_beds": dict(grouped_beds)
        }

        print("Grouped Beds:", context["grouped_beds"])
        
        if request.GET.get('api')=='true':
            return JsonResponse({'data': context})

        return TemplateResponse(request, 'bed-management/list.html', context)

    return JsonResponse({"error": "Method not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


