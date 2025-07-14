from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from saas_admin.utils import *
from saas_admin.middleware import permission_required
from .models import Surgery
from staff_management.models import Employee
from patients.models import Patient
from departments.models import Department
from .serializers import SurgerySerializer
from staff_management.serializers import EmployeeSerializer
from patients.serializers import PatientSerializer
from departments.serializers import DepartmentSerializer
import logging
from django.shortcuts import redirect
from rest_framework.exceptions import ValidationError
from django.db import IntegrityError
from django.template.response import TemplateResponse


from django.contrib.auth import get_user_model

user = get_user_model()

logger = logging.getLogger(__name__)


@permission_required('surgery-list')
def surgery_list(request):
    if user.is_authenticated:

        if request.method == 'GET':
            surgeries = Surgery.objects.all()
            serializer = SurgerySerializer(surgeries, many=True)       
            doctors = Employee.objects.filter(role_id=2)
            doctorSerializer = EmployeeSerializer(doctors, many=True)        
            departments = Department.objects.all()
            departmentSerializer = DepartmentSerializer(departments, many=True)        
            patients = Patient.objects.all()
            patientSerializer = PatientSerializer(patients, many=True)
            
            if request.GET.get('api') == 'true':
                return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)

            return TemplateResponse(request, 'surgery/list.html', {'surgeries': serializer.data, 'doctors': doctorSerializer.data, 'departments': departmentSerializer.data, 'patients': patientSerializer.data})

    return redirect('/login')



@permission_required('surgery-add')
def surgery_create(request):
    
    if request.method == 'GET':
        user_id = request.session.get('user_id')    
        # Proceed with rendering the template or returning the response
        if request.accepts('text/html'):
            print('HTML response accepted')
            return TemplateResponse(request, 'surgery/add.html', {})
        return JsonResponse({"msg": "HTML response not accepted."}, status=status.HTTP_406_NOT_ACCEPTABLE)

    
    if request.method == 'POST':
        print("Request Data:", request.data)
        
        user_id = request.session.get('user_id')
        tenant_id = request.session.get('tenant_id')
        print('User ID:', user_id)
        print('Tenant ID:', tenant_id)
        if user_id:
            try:
                user = User.objects.get(id=user_id)
                print('User:', user)
                request.user = user
                print('Request User:', request.user)
            except User.DoesNotExist:
                return JsonResponse({"error": "User not found in session"}, status=status.HTTP_401_UNAUTHORIZED)
        
        if not request.user.is_authenticated:
            print('User is not authenticated')
            return JsonResponse({"error": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = SurgerySerializer(data=request.data)
        print("Serializer:", serializer)

        if serializer.is_valid():
            try:
                # Save surgery with user and tenant
                serializer.save(tenant=request.tenant)
                if request.GET.get('api') == 'true':
                    logger.info("Fetching surgery for the authenticated user and tenant.")
                    return JsonResponse({"msg": "Surgery added successfully!"}, status=status.HTTP_201_CREATED)
                
                print("Department added successfully!")
                return redirect('/surgery/surgery')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



@csrf_exempt
@permission_required('surgery-edit')
def surgery_edit(request, id):
    surgery = get_object_or_404(Surgery, pk=id)
    doctors = Employee.objects.filter(role_id=2) 
    doctorSerializer = EmployeeSerializer(doctors, many=True)

    if request.method == 'POST':
        try:
            mutable_post = request.POST.copy()
            # mutable_post['doctor'] = int(mutable_post.get('doctor', 0) or 0)
            # ic(mutable_post)

      
            mutable_post.pop('assistant_surgeon_details[]', None)
            mutable_post.pop('surgery_images', None)  

            serializer = SurgerySerializer(surgery, data=mutable_post, partial=True)

            if serializer.is_valid():
                serializer.save()

              
                assistant_surgeon_details = request.POST.getlist('assistant_surgeon_details[]')
                surgery.assistant_surgeon_details = assistant_surgeon_details

 
                uploaded_images = request.FILES.getlist('surgery_images')
                if uploaded_images:
                    existing_images = surgery.surgery_images or []
                    new_images = []
                    folder = "surgery"
                    for image in uploaded_images:
                        image_name = image.name  
                        image_name = image_name.replace(" ", "_")
                        file_url = upload_file_to_vps(image, image_name, folder)
                        new_images.append(file_url)
                    surgery.surgery_images = existing_images + new_images

                surgery.save()
                messages.success(request, "Surgery updated successfully.")
                return redirect('/surgery/surgery')
            else:
                print("Form validation errors:", serializer.errors)
                messages.error(request, "Form validation failed. Please check the inputs.")
        except Exception as e:
            print("Error in surgery_edit:", str(e))
            messages.error(request, f"An error occurred: {str(e)}")


    surgerySerializer = SurgerySerializer(surgery)
    return TemplateResponse(
        request,
        'surgery/update.html',
        {
            'surgery': surgerySerializer.data,
            'doctors': doctorSerializer.data
        }
    )


@permission_required('surgery-delete')
def surgery_delete(request,id):
    pass



@permission_required('surgery-view')
def surgery_view(request,id):
    surgery = get_object_or_404(Surgery, pk=id)
    serializer = SurgerySerializer(surgery)
    return TemplateResponse(request, 'surgery/view.html', {'surgery': serializer.data})




