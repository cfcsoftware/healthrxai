from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import make_password
from django.contrib.auth import logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from icecream import ic
from django.db import IntegrityError
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from saas_admin.storage import *
from saas_admin.middleware import permission_required
from rest_framework.permissions import IsAuthenticated
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from .storage import *
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse
from django.contrib import messages
from django.contrib.auth import get_user_model
from .storage import *
User = get_user_model()



from appointments_list.models import *
from appointments_list.serializers import *
from ipd_module.models import *
from ipd_module.serializers import *
from pathology_module.models import *
from pathology_module.serializers import *
from radiology_module.models import *
from radiology_module.serializers import *
from surgery_module.models import *
from surgery_module.serializers import *