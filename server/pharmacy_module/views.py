from django.db import IntegrityError, transaction
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.response import Response
from saas_admin.middleware import permission_required
from .serializers import *
from .models import MedicineList,PharmacyBill
from patients.models import Patient
from staff_management.models import Employee
from pharmacy_module.serializers import *
import logging
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse
from django.contrib import messages
import csv

from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from icecream import ic
from datetime import datetime
import io

User = get_user_model()

logger = logging.getLogger(__name__)




@permission_required('medicine-list')
def medicine_list(request):
    medicine_list = MedicineList.objects.all().order_by('id')    
    serializer = MedicineListSerializer(medicine_list, many=True)
    
    if request.GET.get('api') == 'true':
        logger.info("Fetching appointments for the authenticated user and tenant.")
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
    return TemplateResponse(request, 'pharmacy-module/medicine-management/list.html', {'medicine_list': serializer.data})

@csrf_exempt
@permission_required('medicine-add')
def medicine_create(request):
    
    if request.method == 'GET':
        
        medicine_list = MedicineList.objects.all()
        
        if request.accepts('text/html'):
            print('HTML response accepted')
            return TemplateResponse(request, 'pharmacy-module/medicine-management/add.html', {"medicine_list":medicine_list})
        return JsonResponse({"msg": "HTML response not accepted."}, status=status.HTTP_406_NOT_ACCEPTABLE)

    elif request.method == 'POST':
        
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
        serializer = MedicineListSerializer(data=request.POST, context={'request': request})
        if serializer.is_valid():
            try:
                # Save MedicineList with user and tenant handled in serializer
                serializer.save()
                if request.GET.get('api') == 'true':
                    logger.info("Fetching appointments for the authenticated user and tenant.")
                    messages.success(request, 'Medicine added successfully.')
                    return JsonResponse({"msg": "Medicine added successfully!"}, status=status.HTTP_201_CREATED)
                return redirect('/pharmacy/medicine-list')
            except IntegrityError as e:
                raise ValidationError({"error": str(e)})
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@permission_required('medicine-edit')
def medicine_update(request, pk):
    
    if request.method == 'GET':
        user_id = request.session.get('user_id')
        
        # Retrieve the Meidicine List instance
        medicine_list = get_object_or_404(MedicineList, pk=pk)
        medicineSerializer = MedicineListSerializer(medicine_list)
    
        if request.GET.get('api') == 'true':
            return JsonResponse(medicineSerializer.data, status=status.HTTP_200_OK)

        return render(request, 'pharmacy-module/medicine-management/update.html', {'medicine':medicineSerializer.data})
        
    
    elif request.method == 'POST':
        user_id = request.session.get('user_id')
        print('User ID:', user_id)
        user = User.objects.get(id=user_id)
        print('User:', user)
        request.user = user
        print('Request User:', request.user)

        medicine_list = get_object_or_404(MedicineList, pk=pk)


        serializer = MedicineListSerializer(medicine_list, data=request.POST)
        if serializer.is_valid():
            serializer.save()
            if request.GET.get('api') == 'true':
                return JsonResponse({"msg": "Medicine updated successfully!"}, status=status.HTTP_200_OK)
            messages.success(request, 'Medicine updated successfully.')
            return redirect('/pharmacy/medicine-list')
        return JsonResponse({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@permission_required('medicine-delete')
def medicine_delete(request, pk):
    
    try:
        medicine_list = get_object_or_404(MedicineList, pk=pk)
        medicine_list.delete()
        if request.GET.get('api') == 'true':
            return JsonResponse({"msg": "Medicine deleted successfully!"}, status=200)
        messages.error(request, 'Medicine deleted successfully.')
        return redirect('/pharmacy/medicine-list')
    except MedicineList.DoesNotExist:
        if request.GET.get('api') == 'true':
            return JsonResponse({"error": "Medicine not found."}, status=404)
        messages.error(request, 'Medicine not found.')
        return redirect('/pharmacy/medicine-list')
    


@permission_required('pharmacy-bill-list')
def pharmacy_bill_list(request):       
    pharmacy_bill = PharmacyBill.objects.filter(tenant=request.tenant)        
    serializer = PharmacyBillSerializer(pharmacy_bill, many=True)
    
    medicine_list = MedicineList.objects.all()
    medicine_list_serializer = MedicineListSerializer(medicine_list, many=True)
    
    patient_list = Patient.objects.all()
    patient_list_serializer = PatientSerializer(patient_list, many=True)
    
    doctor_list = Employee.objects.filter(role_id=2)
    doctor_list_serializer = EmployeeSerializer(doctor_list, many=True)
    
    # return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
    if request.GET.get('api') == 'true':
        logger.info("Fetching patient bill for the authenticated user and tenant.")
        return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)
    
    return render(request, 'pharmacy-module/pharmacy-bill/list.html', {
                "all_pharmacy_bill": serializer.data,
                "all_medicine_list": medicine_list_serializer.data,
                "all_patient_list": patient_list_serializer.data,
                "all_doctor_list": doctor_list_serializer.data,   
            })
    


@csrf_exempt
@permission_required('pharmacy-bill-add')    
def pharmacy_bill_create(request):
    
    if request.method == 'GET':
        # Fetch all medicine categories
       
        doctors = Employee.objects.filter(role=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)  
       

        if request.accepts('text/html'):
            print('HTML response accepted')
            return TemplateResponse(request, 'pharmacy-module/pharmacy-bill/create.html', {'doctors':doctorSerializer.data})
        return JsonResponse({"msg": "HTML response not accepted."}, status=status.HTTP_406_NOT_ACCEPTABLE)

    elif request.method == 'POST':
        # Validate and create the pharmacy bill
        serializer = PharmacyBillCreateUpdateSerializer(data=request.POST)
        if serializer.is_valid():              
            user_id = request.session.get('user_id')
            user = User.objects.get(id=user_id)
            request.user = user

        print('serializer',serializer.data)

        # Fetch the patient and doctor instances
        patient_id = request.POST.get('patient')
        doctor_id = request.POST.get('doctor')
        if not patient_id or not doctor_id:
            return JsonResponse({"error": "Patient and Doctor IDs are required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            patient = Patient.objects.get(id=patient_id)
            doctor = Employee.objects.get(id=doctor_id)
        except (Patient.DoesNotExist, Employee.DoesNotExist, ValueError):
            return JsonResponse({"error": "Patient or Doctor not found or invalid ID."}, status=status.HTTP_404_NOT_FOUND)
        
        
        # Generate pharmacy_bill_no
        last_pharmacy_bill = PharmacyBill.objects.order_by('id').last()
        if not last_pharmacy_bill or not last_pharmacy_bill.pharmacy_bill_no:
            pharmacy_bill_no = 'PBILL00001'
        else:
            pharmacy_bill_no = f'PBILL0000{int(last_pharmacy_bill.pharmacy_bill_no.replace("PBILL0000", "").strip()) + 1}'

        # Prepare common data for the PharmacyBill
        common_data = {
            'user': request.user,
            'tenant': request.tenant,
            'patient': patient,
            'doctor': doctor,
            'pharmacy_bill_no': pharmacy_bill_no,
            # 'reg_no': request.data.get('reg_no'),
            'patient_age': request.POST.get('patient_age'),
            'patient_phone': request.POST.get('patient_phone'),
            'patient_gender': request.POST.get('patient_gender'),
            # 'admission_purpose': request.POST.get('admission_purpose'),
            'discharge_status': request.POST.get('discharge_status'),
            'ward_details': request.POST.get('ward_details'),
            'subtotal': request.POST.get('subtotal'),
            'discount': request.POST.get('discount'),
            'advance_amount': request.POST.get('advance_amount'),
            'payable_amount': request.POST.get('payable_amount'),
            'payment_mode': request.POST.get('payment_mode'),
            'notes': request.POST.get('notes'),
        }

        # Get the medicine details
        medicine_details = []
        medicine_names = request.POST.getlist('medicine_name[]')
        medicine_ids = request.POST.getlist('medicine[]')
        costs = request.POST.getlist('cost[]')
        qtys = request.POST.getlist('qty[]')
        amounts = request.POST.getlist('amount[]')
        total_amounts = request.POST.getlist('total_amount[]')

        for i in range(len(medicine_names)):
            medicine_details.append({
                'medicine_name': medicine_names[i],
                'medicine_id': medicine_ids[i],
                'cost': costs[i],
                'qty': qtys[i],
                'amount': amounts[i],
                'total_amount': total_amounts[i],
            })

   
        try:

            with transaction.atomic():
                for i in range(len(medicine_ids)):
                    medicine_id = medicine_ids[i]
                    qty_used = int(qtys[i])

                    try:
                        medicine = MedicineList.objects.get(id=medicine_id)
                        if medicine.qty is None:
                            raise ValueError(f"Medicine '{medicine.medicine_name}' has no quantity set.")
                        current_qty = int(medicine.qty)
                        if current_qty < qty_used:
                            raise ValidationError(f"Not enough stock for medicine: {medicine.medicine_name}. Available: {current_qty}, Required: {qty_used}")

                        medicine.qty = current_qty - qty_used
                        medicine.save()
                    except MedicineList.DoesNotExist:
                        raise ValidationError(f"Medicine with ID {medicine_id} not found.")

                # Create bill
                pharmacy_bill = PharmacyBill.objects.create(
                    **common_data,
                    medicine_details=medicine_details
                )
                pharmacy_bill.save()

                logger.info("Pharmacy Bill created successfully.")
                messages.success(request, 'Pharmacy Bill created successfully.')

                if request.GET.get('api') == 'true':
                    return JsonResponse({"msg": "Pharmacy Bill added successfully!"}, status=status.HTTP_201_CREATED)

            return redirect('/pharmacy/pharmacy-bill')
        except IntegrityError as e:
            raise ValidationError({"error": str(e)})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
            






def pharmacy_bill_view(request, pk):
    try:
        pharmacy_bill = PharmacyBill.objects.get(id=pk)
        serializer = PharmacyBillSerializer(pharmacy_bill)
        
        if request.GET.get('api') == 'true':
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        
        return render(request, 'pharmacy-module/pharmacy-bill/view.html', {'billing': serializer.data})
    
    except PharmacyBill.DoesNotExist:
        if request.GET.get('api') == 'true':
            return JsonResponse({"error": "Pharmacy Bill not found."}, status=status.HTTP_404_NOT_FOUND)
        messages.error(request, 'Pharmacy Bill not found.')
        return redirect('/pharmacy/pharmacy-bill')
    
    
    


def get_medicine_details(request, medicine_id):
    
    try:
        medicine = MedicineList.objects.get(id=medicine_id)
        return JsonResponse({
            "success": True,
            "medicine_category": medicine.category.id,
            "unit_cost": medicine.unit_cost
        })
    except MedicineList.DoesNotExist:
        return JsonResponse({"success": False, "error": "Medicine not found"})
    

def get_medicine_details_by_generic_name(request):
    try:
        generic_name = request.POST.get('generic_name')
        print('Generic Name:', generic_name)
        medicine = MedicineList.objects.filter(generic_name__iexact=generic_name)
        medicine_serializer = MedicineListSerializer(medicine, many=True)
    
        print('medicines:', medicine_serializer.data)
        if medicine_serializer.data:
            return JsonResponse({
                "success": True,
                "medicines": medicine_serializer.data
            })
        else:
            return JsonResponse({"success": False, "error": "Medicine not found"})
    except MedicineList.DoesNotExist:
        return JsonResponse({"success": False, "error": "Medicine not found"})


@csrf_exempt
def get_medicine_details_by_name(request):
    medicine_name = request.POST.get('medicine_name')
    print('Medicine Name:', medicine_name)
    try:
        medicine = MedicineList.objects.get(medicine_name__iexact=medicine_name)
        # medicine = MedicineList.objects.filter(medicine_name__icontains=medicine_name)[:10]
        medicine_serializer = MedicineListSerializer(medicine)
        print('medicines:', medicine_serializer.data)
        if medicine_serializer.data:
            return JsonResponse({
                "success": True,
                "medicines": medicine_serializer.data
            })
        else:
            return JsonResponse({"success": False, "error": "Medicine not found"})
    except MedicineList.DoesNotExist:
        return JsonResponse({"success": False, "error": "Medicine Name incorrect"})
    
    
    
def search_medicine_names(request):
    term = request.GET.get('term', '')
    medicines = MedicineList.objects.filter(medicine_name__icontains=term).order_by('id')[:20]      # Only searches in medicine_name column
    
    data = []
    for med in medicines:
        data.append({
            'medicine_id': med.id or '',
            'medicine_name': med.medicine_name or '',
            'composition': med.composition or '',
            'batch': med.batch or '',
            'stock': med.qty,
            'qty': med.qty,
            'cost': med.unit_cost,
            'strength': med.strength or '',
        })

    print('medicine data:', data)
    return JsonResponse(data, safe=False)


@csrf_exempt
def upload_medicine_csv(request):
    if request.method == 'POST':
        csv_file = request.FILES.get('csv_file')
        if not csv_file or not csv_file.name.endswith('.csv'):
            messages.error(request, 'File is not CSV type.')
            return redirect('/pharmacy/medicine-list')

        try:
            decoded_file = csv_file.read().decode('utf-8')
            reader = csv.DictReader(io.StringIO(decoded_file))

            tenant = request.tenant 
            ic('tenant:', tenant)

            for row in reader:
                def parse_date(date_str):
                    try:
                        return datetime.strptime(date_str, '%d-%m-%Y').date()
                    except (ValueError, TypeError):
                        return None

                MedicineList.objects.create(
                    medicine_name=row.get('medicine_name', '').strip(),
                    composition=row.get('composition', '').strip(),
                    batch=row.get('batch', '').strip(),
                    strength=row.get('strength', '').strip(),
                    unit_cost=row.get('unit_cost', '0').strip(),
                    qty=row.get('qty', '0').strip(),
                    total_cost=row.get('total_cost', '0').strip(),
                    box_size=row.get('box_size', '').strip(),
                    units=row.get('units', '').strip(),
                    manufacturer_name=row.get('manufacturer_name', '').strip(),
                    manufacturer_price=row.get('manufacturer_price', '0').strip(),
                    manufacturering_date=parse_date(row.get('manufacturering_date', '')),
                    expiry_date=parse_date(row.get('expiry_date', '')),
                    low_stock=row.get('low_stock', '0').strip(),
                    gst_no=row.get('gst_no', '').strip(),
                    shelf=row.get('shelf', '').strip(),
                    types=row.get('types', '').strip(),
                    category=row.get('category', '').strip(),
                    description=row.get('description', '').strip(),
                    image=row.get('image', '').strip(),
                    bar_code=row.get('bar_code', '').strip(),
                    vendor=row.get('vendor', '').strip(),
                )

            messages.success(request, 'CSV file uploaded and data saved successfully.')

        except Exception as e:
            messages.error(request, f'Error processing file: {str(e)}')

    return redirect('/pharmacy/medicine-list')





































































