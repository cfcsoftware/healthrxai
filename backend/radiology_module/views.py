from .serializers import *
from .models import RadiologyTest
from django.contrib.auth.models import User
from saas_admin.utils import *
import json

User = get_user_model()

logger = logging.getLogger(__name__)



@permission_required('radiology-test-list')
def radiology_test_list(request):
    if User.is_authenticated:
        user = request.user
        id = user.id
        ic(f'User ID: {id}')
        ic(f'User: {user}')
        ic('User is authenticated')
    if request.method == 'GET':
        radio_test = RadiologyTest.objects.all()
        serializer = RadiologyTestSerializer(radio_test, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        return TemplateResponse(request, 'radiology-module/radiology-test/list.html', {'radiology_tests': serializer.data})
        

@csrf_exempt
@permission_required('radiology-test-add')
def radiology_test_add(request):
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
        reference_range = request.POST.getlist('reference_range[]')
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
            'reference_range': reference_range,
            'test_status': test_status,
            'title': title,
        }

        serializer = RadiologyTestSerializer(data=full_data)

        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": serializer.data}, status=status.HTTP_201_CREATED)
            return redirect('/radiology/tests/list')
        else:
            print("Serializer errors:", serializer.errors)
            return TemplateResponse(request, 'radiology-module/radiology-test/list.html', {
                'errors': serializer.errors
            })


@csrf_exempt
@permission_required('radiology-test-edit')
def radiology_test_update(request, id):
    print('Radiology Test Update View Called with ID:', id)
    # if not request.user.is_authenticated:
    #     return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        instance = RadiologyTest.objects.get(id=id)
        serializer = RadiologyTestSerializer(instance)
        
         # Prepare zipped components to send to template
        data = serializer.data
        print(f'Radiology Test Data: {data}')
        component_name = data.get('component_name', [])
        component_unit = data.get('component_unit', [])
        component_result = data.get('component_result', [])
        reference_range = data.get('reference_range', [])
        test_status = data.get('test_status', [])
        title = data.get('title', [])
        
        print('component_name:', component_name)
        print('component_unit:', component_unit)
        print('component_result:', component_result)
        print('reference_range:', reference_range)
        print('test_status:', test_status)
        print('title:', title)

        # Zip all fields together for iteration in template
        components = list(zip(component_name, component_unit, component_result, reference_range, test_status))
        ic(f'Components: {components}')
        
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        
        return TemplateResponse(request, 'radiology-module/radiology-test/update.html', {
            'radiology_test': data,
            'components': components,
            'title': title,  # Include title in context
        })
        
    if request.method == 'POST':
        try:
            instance = RadiologyTest.objects.get(id=id)
        except RadiologyTest.DoesNotExist:
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
        reference_range = request.POST.getlist('reference_range[]')
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
            'reference_range': reference_range,
            'test_status': test_status,
            'title': title,
        }

        serializer = RadiologyTestSerializer(instance, data=update_data)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
            return redirect('/radiology/tests/list')
        else:
            print("Update serializer errors:", serializer.errors)
            return TemplateResponse(request, 'radiology-module/radiology-test/update.html', {
                'errors': serializer.errors,
                'radiology_test': update_data,  # So the form doesn't go blank
                'components': zip(component_name, component_unit, component_result, reference_range, test_status, title)
            })
        

@csrf_exempt
@permission_required('radiology-test-delete')
def radiology_test_delete(request,id):
    try:
        instance = RadiologyTest.objects.get(id=id)
        instance.delete()
        return redirect('/radiology/tests/list')
    except RadiologyTest.DoesNotExist:
        return JsonResponse({'error': 'Test not found'}, status=404)


@permission_required('radiology-test-view')
def radiology_test_view(request, id):
    instance = RadiologyTest.objects.get(id=id)
    serializer = RadiologyTestSerializer(instance)
    data = serializer.data
    print(f'Radiology Test Data: {data}')

    # Safely extract component arrays (handle missing keys or None)
    titles = data.get('title') or []
    names = data.get('component_name') or []
    units = data.get('component_unit') or []
    results = data.get('component_result') or []
    statuses = data.get('test_status') or []
    references = data.get('reference_range') or []

    # Zip all component info into row-wise structure
    # Combine all component info and title into a single structure
    test_components = []
    for i in range(max(len(names), len(units), len(results), len(statuses), len(references), len(titles))):
        test_components.append({
            'title': titles[i] if i < len(titles) else '',
            'name': names[i] if i < len(names) else '',
            'unit': units[i] if i < len(units) else '',
            'result': results[i] if i < len(results) else '',
            'status': statuses[i] if i < len(statuses) else '',
            'reference': references[i] if i < len(references) else '',
        })
    test_title = titles

    print(f'Test Components: {test_components}')
    print(f'Test Titles: {titles}')

    # If API request, return JSON
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": data}, status=status.HTTP_200_OK)

    # Render template with structured test_components
    return TemplateResponse(request, 'radiology-module/radiology-test/view.html', {
        'radiology_test': data,
        'test_components': test_components,
        'test_title': test_title,  # Include title in context
    })








@permission_required('radiology-report-list')
def radiology_report_list(request):
    if request.method == 'GET':
        radio_report = RadiologyReports.objects.all()
        serializer = RadiologyReportsSerializer(radio_report, many=True)
        if request.GET.get('api') == 'true':
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
        return TemplateResponse(request, 'radiology-module/radiology-report/list.html', {'radiology_reports': serializer.data})  


@permission_required('radiology-report-view')
def radiology_report_view(request, id):
    instance = RadiologyReports.objects.get(id=id)
    serializer = RadiologyReportsSerializer(instance)
    if request.GET.get('api') == 'true':
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'radiology-module/radiology-report/view.html', {'radiology_report': serializer.data})


@csrf_exempt
@permission_required('radiology-report-edit')
def radiology_report_update(request, id):
    print('radiology update view called with ID:', id)
    if request.method == 'GET':
        radiology_report = get_object_or_404(RadiologyReports, id=id)
        serializer = RadiologyReportsSerializer(radiology_report)  
        service = serializer.data['service']   
        test_data = RadiologyTest.objects.filter(test_name=service)
        test_serializer = RadiologyTestSerializer(test_data, many=True)

        data = test_serializer.data
        radiology_report = get_object_or_404(RadiologyReports, id=id)
        report_data = RadiologyReportsSerializer(radiology_report).data

        test_details = radiology_report.test_details
        print('Test Details:', test_details)
        components = []

        if test_details:

            component_name = [c.get('name') for c in test_details.get('components', [])]
            component_unit = [c.get('unit') for c in test_details.get('components', [])]
            component_result = [c.get('result') for c in test_details.get('components', [])]
            reference_range = [c.get('reference_range') for c in test_details.get('components', [])]
            test_status = [c.get('status') for c in test_details.get('components', [])]
            title = test_details.get('title', [])
            
            print('Component Name:', component_name)
            print('Component Unit:', component_unit)
            print('Component Result:', component_result)
            print('Reference Range:', reference_range)
            print('Test Status:', test_status)
            print('Title:', title)

            components = zip(component_name, component_unit, component_result, reference_range, test_status, title)

            return TemplateResponse(request, 'radiology-module/radiology-report/update.html', {
                'radiology_report': report_data,
                'radiology_tests': [test_details],
                'components': components,
                'title': title
            })


        service = report_data['service']
        test_data = RadiologyTest.objects.filter(test_name=service)
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
            reference_range = ensure_list(test.reference_range)
            test_status = ensure_list(test.test_status)
            title = ensure_list(test.title)

            components = zip(component_name, component_unit, component_result, reference_range, test_status, title)

            return TemplateResponse(request, 'radiology-module/radiology-report/update.html', {
                'radiology_report': report_data,
                'radiology_tests': [test],  
                'components': components,
            })

        return TemplateResponse(request, 'radiology-module/radiology-report/update.html', {
            'radiology_report': report_data,
            'radiology_tests': [],
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
        reference_range = request.POST.getlist('reference_range[]')
        test_status = request.POST.getlist('test_status[]')
        title = request.POST.getlist('title[]')

        components = []
        for name, unit, result, reference, status in zip(component_name, component_unit, component_result, reference_range, test_status, title):
            components.append({
                "name": name,
                "unit": unit,
                "result": result,
                "reference_range": reference,
                "status": status,
                "title": title
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
            report = RadiologyReports.objects.get(id=id)
        except RadiologyReports.DoesNotExist:
            return JsonResponse({'error': 'Report not found'}, status=404)

        report.test_details = test_details
        report.user_id = user
        report.tenant_id = tenant
        if report:
            report.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": RadiologyReportsSerializer(report).data}, status=status.HTTP_200_OK)
            return redirect('/radiology/reports/list')
        else:
            print("Update serializer errors:", serializer.errors)
            return TemplateResponse(request, 'radiology-module/radiology-report/update.html', {
                'errors': serializer.errors,
                'radiology_report': data, 
            })  
            
