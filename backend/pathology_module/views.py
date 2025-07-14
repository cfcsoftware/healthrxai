from rest_framework import status
from rest_framework.response import Response
from saas_admin.utils import *
from saas_admin.middleware import permission_required
from .serializers import *
import json
from .models import PathologyTest
from staff_management.models import Employee
from patients.models import Patient
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from django.http import JsonResponse
import logging
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse
from django.contrib.auth.models import User

from django.contrib.auth import get_user_model

User = get_user_model()

logger = logging.getLogger(__name__)






@permission_required('pathology-test-list')
def pathology_test_list(request):
    if User.is_authenticated:
        user = request.user
        id = user.id
        ic(f'User ID: {id}')
        ic(f'User: {user}')
        ic('User is authenticated')
    if request.method == 'GET':
        patho_test = PathologyTest.objects.all()
        serializer = PathologyTestSerializer(patho_test, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        return TemplateResponse(request, 'pathology-module/pathology-test/list.html', {'pathology_tests': serializer.data})
        

@csrf_exempt
@permission_required('pathology-test-add')
def pathology_test_add(request):
    if request.method == 'POST':
        test_name = request.POST.get('test_name')
        short_name = request.POST.get('short_name')
        sample_type = request.POST.get('sample_type')
        total_amount = request.POST.get('total_amount')
        precaution = request.POST.get('precaution')
        user = request.session.get('user_id')
        tenant = request.session.get('tenant_id')

        component_name = request.POST.getlist('component_name[]')
        component_unit = request.POST.getlist('component_unit[]')
        component_result = request.POST.getlist('component_result[]')
        male_reference_range = request.POST.getlist('male_reference_range[]')
        female_reference_range = request.POST.getlist('female_reference_range[]')
        test_status = request.POST.getlist('test_status[]')
        title = request.POST.getlist('title[]')

        full_data = {
            'test_name': test_name,
            'short_name': short_name,
            'sample_type': sample_type,
            'total_amount': total_amount,
            'precaution': precaution,
            'user': user,
            'tenant': tenant,
            'component_name': component_name,
            'component_unit': component_unit,
            'component_result': component_result,
            'male_reference_range': male_reference_range,
            "female_reference_range": female_reference_range,
            'test_status': test_status,
            'title': title,
        }

        serializer = PathologyTestSerializer(data=full_data)

        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": serializer.data}, status=status.HTTP_201_CREATED)
            return redirect('/pathology/test/list')
        else:
            print("Serializer errors:", serializer.errors)
            return TemplateResponse(request, 'pathology-module/pathology-test/list.html', {
                'errors': serializer.errors
            })


@csrf_exempt
@permission_required('pathology-test-edit')
def pathology_test_update(request, id):
    # if not request.user.is_authenticated:
    #     return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        instance = PathologyTest.objects.get(id=id)
        serializer = PathologyTestSerializer(instance)
        
         # Prepare zipped components to send to template
        data = serializer.data
        component_name = data.get('component_name', [])
        component_unit = data.get('component_unit', [])
        component_result = data.get('component_result', [])
        male_reference_range = data.get('male_reference_range', [])
        female_reference_range = data.get('female_reference_range', [])
        
        test_status = data.get('test_status', [])

        # Zip all fields together for iteration in template
        components = zip(component_name, component_unit, component_result, male_reference_range,female_reference_range, test_status)

        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)

        return TemplateResponse(request, 'pathology-module/pathology-test/update.html', {
            'pathology_test': data,
            'components': components
        })
        
    if request.method == 'POST':
        try:
            instance = PathologyTest.objects.get(id=id)
        except PathologyTest.DoesNotExist:
            return JsonResponse({'error': 'Test not found'}, status=404)

        test_name = request.POST.get('test_name')
        short_name = request.POST.get('short_name')
        sample_type = request.POST.get('sample_type')
        total_amount = request.POST.get('total_amount')
        precaution = request.POST.get('precaution')
        user = request.session.get('user_id')
        tenant = request.session.get('tenant_id')

        component_name = request.POST.getlist('component_name[]')
        component_unit = request.POST.getlist('component_unit[]')
        component_result = request.POST.getlist('component_result[]')
        male_reference_range = request.POST.getlist('male_reference_range[]')
        female_reference_range = request.POST.getlist('female_reference_range[]')
        
        test_status = request.POST.getlist('test_status[]')
        title = request.POST.getlist('title[]')

        update_data = {
            'test_name': test_name,
            'short_name': short_name,
            'sample_type': sample_type,
            'total_amount': total_amount,
            'precaution': precaution,
            'user': user,
            'tenant': tenant,
            'component_name': component_name,
            'component_unit': component_unit,
            'component_result': component_result,
            'male_reference_range': male_reference_range,
            'female_reference_range':female_reference_range,
            'test_status': test_status,
            'title': title,
        }

        serializer = PathologyTestSerializer(instance, data=update_data)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            return redirect('/pathology/test/list')
        else:
            print("Update serializer errors:", serializer.errors)
            return TemplateResponse(request, 'pathology-module/pathology-test/update.html', {
                'errors': serializer.errors,
                'pathology_test': update_data,  # So the form doesn't go blank
                'components': zip(component_name, component_unit, component_result,male_reference_range, female_reference_range, test_status)
            })
        

@csrf_exempt
@permission_required('pathology-test-delete')
def pathology_test_delete(request,id):
    try:
        instance = PathologyTest.objects.get(id=id)
        instance.delete()
        return redirect('/pathology/test/list')
    except PathologyTest.DoesNotExist:
        return JsonResponse({'error': 'Test not found'}, status=404)



@permission_required('pathology-test-view')
def pathology_test_view(request,id):
    instance = PathologyTest.objects.get(id=id)
    serializer = PathologyTestSerializer(instance)
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'pathology-module/pathology-test/view.html', {'pathology_test': serializer.data})







@permission_required('pathology-report-view')
def pathology_report_view(request,id):
        data = get_object_or_404(PathologyReports, id=id)
        serializer = PathologyReportsSerializer(data)
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        
        return TemplateResponse(request, 'pathology-module/pathology-report/view.html', {"pathology_report": serializer.data})
   
    

@permission_required('pathology-report-list')
def pathology_report_list(request):
        pathology_bills = PathologyReports.objects.all()
        serializer = PathologyReportsSerializer(pathology_bills, many=True)

        pathology_tests = PathologyTest.objects.all()
        patho_test_serializer = PathologyTestSerializer(pathology_tests, many=True)
                
        doctors = Employee.objects.filter(role_id=2)
        doctor_serializer = EmployeeSerializer(doctors, many=True)
        
        patients = Patient.objects.all()
        patient_serializer = PatientSerializer(patients, many=True)
       
        
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return TemplateResponse(request, 'pathology-module/pathology-report/list.html', {'pathology_reports': serializer.data, 'pathology_tests': patho_test_serializer.data,'doctors': doctor_serializer.data, 'patients': patient_serializer.data})



@csrf_exempt
@permission_required('pathology-report-edit')
def pathology_report_update(request, id):
    if request.method == 'GET':
        pathology_report = get_object_or_404(PathologyReports, id=id)
        serializer = PathologyReportsSerializer(pathology_report)  
        service = serializer.data['service']   
        test_data = PathologyTest.objects.filter(test_name=service)
        test_serializer = PathologyTestSerializer(test_data, many=True)

        data = test_serializer.data
        pathology_report = get_object_or_404(PathologyReports, id=id)
        report_data = PathologyReportsSerializer(pathology_report).data

        test_details = pathology_report.test_details
        components = []

        if test_details:

            component_name = [c.get('name') for c in test_details.get('components', [])]
            component_unit = [c.get('unit') for c in test_details.get('components', [])]
            component_result = [c.get('result') for c in test_details.get('components', [])]
            male_reference_range = [c.get('male_reference_range') for c in test_details.get('components', [])]
            female_reference_range = [c.get('female_reference_range') for c in test_details.get('components', [])]
            
            test_status = [c.get('status') for c in test_details.get('components', [])]

            components = zip(component_name, component_unit, component_result,male_reference_range, female_reference_range, test_status)

            return TemplateResponse(request, 'pathology-module/pathology-report/update.html', {
                'pathology_report': report_data,
                'pathology_tests': [test_details],
                'components': components,
            })


        service = report_data['service']
        test_data = PathologyTest.objects.filter(test_name=service)
        if test_data.exists():
            test = test_data.first()
            def ensure_list(val):
                if isinstance(val, list):
                    return val
                try:
                    return json.loads(val or '[]')
                except Exception:
                    return []
            component_name = ensure_list(test.component_name)
            component_unit = ensure_list(test.component_unit)
            component_result = ensure_list(test.component_result)
            male_reference_range = ensure_list(test.male_reference_range)
            female_reference_range = ensure_list(test.female_reference_range)
            
            test_status = ensure_list(test.test_status)

            components = zip(component_name, component_unit, component_result,male_reference_range, female_reference_range, test_status)

            return TemplateResponse(request, 'pathology-module/pathology-report/update.html', {
                'pathology_report': report_data,
                'pathology_tests': [test],  
                'components': components,
            })

        return TemplateResponse(request, 'pathology-module/pathology-report/update.html', {
            'pathology_report': report_data,
            'pathology_tests': [],
            'components': [],
        })
    
    if request.method == 'POST':
        test_name = request.POST.get('test_name')
        short_name = request.POST.get('short_name')
        sample_type = request.POST.get('sample_type')
        total_amount = request.POST.get('total_amount')
        precaution = request.POST.get('precaution')
        user = request.session.get('user_id')
        tenant = request.session.get('tenant_id')

        component_name = request.POST.getlist('component_name[]')
        component_unit = request.POST.getlist('component_unit[]')
        component_result = request.POST.getlist('component_result[]')
        male_reference_range = request.POST.getlist('male_reference_range[]')
        female_reference_range = request.POST.getlist('female_reference_range[]')
        
        test_status = request.POST.getlist('test_status[]')
        title = request.POST.getlist('title[]')

        components = []
        for name, unit, result, male_reference_range,female_reference_range, status in zip(component_name, component_unit, component_result,male_reference_range, female_reference_range, test_status):
            components.append({
                "name": name,
                "unit": unit,
                "result": result,
                "male_reference_range": male_reference_range,
                "female_reference_range": female_reference_range,
                "status": status,
            })

        test_details = {
            "test_name": test_name,
            "short_name": short_name,
            "sample_type": sample_type,
            "total_amount": total_amount,
            "precaution": precaution,
            "components": components,
            "title": title,
        }

        try:
            report = PathologyReports.objects.get(id=id)
        except PathologyReports.DoesNotExist:
            return JsonResponse({'error': 'Report not found'}, status=404)

        report.test_details = test_details
        report.user_id = user
        report.tenant_id = tenant
        if report:
            report.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": PathologyReportsSerializer(report).data}, status=status.HTTP_200_OK)
            return redirect('/pathology/report/list')
        else:
            print("Update serializer errors:", serializer.errors)
            return TemplateResponse(request, 'pathology-module/pathology-report/update.html', {
                'errors': serializer.errors,
                'pathology_reports': data, 
            })  
            