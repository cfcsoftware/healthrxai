from django.db import IntegrityError
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from saas_admin.middleware import permission_required
from .serializers import *
from appointments_list.models import Appointment
from appointments_list.serializers import AppointmentSerializer
from opd_module.models import OPD
from ipd_module.models import IPD
from opd_module.serializers import OPDSerializer
from ipd_module.serializers import IPDSerializer
from rest_framework.permissions import IsAuthenticated
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
import logging
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse

from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)


class ReportAppointmentListView(APIView):
    
    @permission_required('appointment-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                appointment = Appointment.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                appointment = Appointment.objects.filter(tenant=request.tenant)
            
            serializer = AppointmentSerializer(appointment, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching appointment reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/appointment-report.html', {"reports": serializer.data})
    
    
class ReportOPDListView(APIView):
    
    @permission_required('opd-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                opd = OPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                opd = OPD.objects.filter(tenant=request.tenant)
            
            serializer = OPDSerializer(opd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/opd-report.html', {"reports": serializer.data})
    
    
class ReportIPDListView(APIView):
    
    @permission_required('ipd-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/ipd-report.html', {"reports": serializer.data})
  
    
class ReportPharmacyListView(APIView):
    
    @permission_required('pharmacy-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/pharmacy-report.html', {"reports": serializer.data})
 
 
class ReportPathologyListView(APIView):
    
    @permission_required('pathology-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/pathology-report.html', {"reports": serializer.data})
       
    
class ReportRadiologyListView(APIView):
    
    @permission_required('radiology-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/radiology-report.html', {"reports": serializer.data})
    
    
class ReportBloodBankListView(APIView):
    
    @permission_required('blood-bank-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/blood-bank-report.html', {"reports": serializer.data})
    
    
class ReportAmbulanceListView(APIView):
    
    @permission_required('ambulance-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/ambulance-report.html', {"reports": serializer.data})
    
      
class ReportBirthDeathListView(APIView):
    
    @permission_required('birth-death-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/birth-death-report.html', {"reports": serializer.data})
    
    
class ReportHumanResourceListView(APIView):
    
    @permission_required('human-resource-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/human-resource-report.html', {"reports": serializer.data})
    
    
class ReportInsuranceListView(APIView):
    
    @permission_required('insurance-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/insurance-report.html', {"reports": serializer.data})


class ReportAccountingListView(APIView):
    
    @permission_required('accounting-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/accounting-report.html', {"reports": serializer.data})


class ReportInventoryListView(APIView):
    
    @permission_required('inventory-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/inventory-report.html', {"reports": serializer.data})


class ReportOperationListView(APIView):
    
    @permission_required('operation-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/operation-report.html', {"reports": serializer.data})


class ReportPatientListView(APIView):
    
    @permission_required('patient-report')
    def get(self, request):
        
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)
        
        if not request.user.is_authenticated:
            return redirect('/login')
        else:
            patient_id = request.query_params.get("patient") 
            if patient_id:
                ipd = IPD.objects.filter(tenant=request.tenant, patient__id=patient_id)
            else:
                ipd = IPD.objects.filter(tenant=request.tenant)
            
            serializer = IPDSerializer(ipd, many=True)
            
            if request.GET.get('api') == 'true':
                logger.info("Fetching IPD reports for the authenticated user and tenant.")
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            
            return TemplateResponse(request, 'reports/patient-report.html', {"reports": serializer.data})
