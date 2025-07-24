from django.db import IntegrityError
from elevenlabs import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from saas_admin.middleware import permission_required
from .serializers import *
from .models import Billing
from pathology_module.serializers import *
from radiology_module.serializers import *
from rest_framework.permissions import IsAuthenticated
from clients.custom_permissions import IsTenantAdminOrIsUserPartOfTenant
from django.db import transaction
from django.contrib import messages
from appointments_list.models import Appointment
from patients.models import Patient
from staff_management.models import Employee
from departments.models import Department
from patients.serializers import PatientSerializer
from staff_management.serializers import EmployeeSerializer
from pathology_module.models import PathologyTest
from services.serializers import *
from appointments_list.serializers import *
from departments.serializers import DepartmentSerializer
from billing_counter.serializers import BillingSerializer, FinalBillSerializer
from ipd_module.models import  IPD
from ipd_module.serializers import IPDSerializer
from surgery_module.models import Surgery
from surgery_module.serializers import SurgerySerializer
from pharmacy_module.models import PharmacyBill
from pharmacy_module.serializers import PharmacyBillCreateUpdateSerializer
from rest_framework.exceptions import ValidationError
import logging
from django.shortcuts import render, redirect, get_object_or_404
from django.template.response import TemplateResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
import json
from icecream import ic
from datetime import datetime

User = get_user_model()

logger = logging.getLogger(__name__)


@csrf_exempt
@permission_required('general-billing-list')
def billing_list(request):     
        
        patient_id = request.GET.get("patient") 
        auth_id = request.session.get("employee_id") 
        role_id = request.session.get('role_id')      
        if patient_id:
            billings = Billing.objects.filter(tenant=request.tenant, patient__id=patient_id).order_by('-updated_at')
        else:
            if role_id == 2:
                billings = Billing.objects.filter(doctor=auth_id,tenant=request.tenant).order_by('-updated_at')
            else:
                billings = Billing.objects.filter(tenant=request.tenant).order_by('-updated_at') 
                       
        serializer = BillingSerializer(billings, many=True)  
             
        doctors = Employee.objects.filter(role=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)  
              
        patients = Patient.objects.all()
        patientSerializer = PatientSerializer(patients, many=True) 
        
        dapartements = Department.objects.all()
        dapartmentSerializer = DepartmentSerializer(dapartements, many=True)   
        
        services = Service.objects.all()
        services_serializer = ServiceSerializer(services, many=True)   
            
        if request.GET.get('api') == 'true':
            logger.info("Fetching billings for the authenticated user and tenant.")
            return JsonResponse({"data": serializer.data}, status=status.HTTP_200_OK)        
        return render(request, 'billing-counter/general-billing/billing-list.html', {"all_billings": serializer.data, "patients": patientSerializer.data, "doctors": doctorSerializer.data, "departments": dapartmentSerializer.data, "service_list": services_serializer.data})
             

@csrf_exempt
@permission_required('general-billing-add')
def create_patient_appointment_billing(request):
    
    if request.method == 'GET':
        doctors = Employee.objects.filter(role=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)  
                
        patients = Patient.objects.all()
        patientSerializer = PatientSerializer(patients, many=True) 
        
        dapartements = Department.objects.all()
        dapartmentSerializer = DepartmentSerializer(dapartements, many=True)   
        
        services = Service.objects.all()
        services_serializer = ServiceSerializer(services, many=True)  
        return TemplateResponse(request, 'billing-counter/general-billing/billing-create.html', {'doctors':doctorSerializer.data, 'patients':patientSerializer.data, 'departments':dapartmentSerializer.data, 'services':services_serializer.data})
    
    if request.method == 'POST':
        try:
            data = request.POST.copy()
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        try:
            with transaction.atomic():
                user_id = request.session.get('user_id')
                if not user_id:
                    return JsonResponse({"error": "User not found in session"}, status=400)

                try:
                    user = User.objects.get(id=user_id)
                    request.user = user
                except User.DoesNotExist:
                    return JsonResponse({"error": "User not found"}, status=400)

                phone = data.get('phone')
                existing_patient = Patient.objects.filter(phone=phone).first()
                patient_history = []

                if not existing_patient:
                    return JsonResponse({"error":"please first register the patient from Receptionist Panel"})
                    # patient_data = data.copy()
                    # patient_data["user"] = user.id
                    # doctor_id = data.get('doctor')

                    # try:
                    #     doctor = Employee.objects.get(id=doctor_id)
                    # except Employee.DoesNotExist:
                    #     return JsonResponse({"error": "Invalid doctor ID"}, status=400)

                    # patient_data["tenant"] = request.tenant.id
                    # patient_data["doctor"] = doctor.id

                    # last_patient = Patient.objects.order_by('id').last()
                    # if not last_patient:
                    #     patient_record_id = 'PAT00001'
                    # else:
                    #     try:
                    #         if last_patient.patient_record_id:
                    #             last_id = last_patient.patient_record_id.split('PAT')[1].strip()
                    #             patient_record_id = f'PAT{int(last_id) + 1:05d}'
                    #         else:
                    #             return JsonResponse({"error": "Invalid interview_custom_id format."}, status=400)
                    #     except (IndexError, ValueError):
                    #         return JsonResponse({"error": "Invalid interview_custom_id format."}, status=400)

                    # patient_data["patient_record_id"] = patient_record_id
                    # patient_serializer = PatientSerializer(data=patient_data)
                    # if patient_serializer.is_valid():
                    #     patient = patient_serializer.save(tenant=request.tenant, doctor=doctor)
                    #     patient_history.append({'id': patient.id, 'message': 'Patient Created'})
                    # else:
                    #     return JsonResponse({"error": patient_serializer.errors}, status=400)

                    # appointment_data = data.copy()
                    # appointment_data.update({
                    #     "user": user.id,
                    #     "tenant": request.tenant.id,
                    #     "patient": patient.id,
                    #     "doctor": doctor.id
                    # })

                    # last_appointment = Appointment.objects.order_by('id').last()
                    # appointment_data["appointment_record_id"] = 'APT1001' if not last_appointment else f'APT{int(last_appointment.appointment_record_id.replace("APT", "").strip()) + 1}'

                    # appointment_serializer = AppointmentCreateUpdateSerializer(data=appointment_data)
                    # if appointment_serializer.is_valid():
                    #     print("Appointment serializer is valid")
                    #     appointment = appointment_serializer.save()
                    #     patient_history.append({'id': appointment.id, 'message': 'Appointment Created'})
                    # else:
                    #     return JsonResponse({"error": appointment_serializer.errors}, status=400)

                else:
                    patient = existing_patient
                    doctor = Employee.objects.get(id=data.get('doctor'))

                    appointment = Appointment.objects.filter(patient=patient).last()
                    if patient and data.get('bill_type') == 'Appointment(OPD)':
                        appointment_data = data.copy()
                        appointment_data.update({
                            "user": user.id,
                            "tenant": request.tenant.id,
                            "patient": patient.id,
                            "doctor": doctor.id
                        })

                        last_appointment = Appointment.objects.order_by('id').last()

                        if last_appointment and last_appointment.appointment_record_id:
                            try:
                                last_number = int(last_appointment.appointment_record_id.replace("APT", ""))
                            except ValueError:
                                last_number = 1000
                            next_number = last_number + 1
                        else:
                            next_number = 1001
                        appointment_data["appointment_record_id"] = f'APT{next_number}'

                        appointment_serializer = AppointmentCreateUpdateSerializer(data=appointment_data)
                        if appointment_serializer.is_valid():
                            print("Appointment serializer is valid")
                            appointment = appointment_serializer.save()
                            patient_history.append({'id': appointment.id, 'message': 'Appointment Created for Existing Patient'})
                        else:
                            return JsonResponse({"error": appointment_serializer.errors}, status=400)

                    # elif not appointment:
                    #     return JsonResponse({"error": "No appointment found for the existing patient"}, status=400)
                billing_data = data.copy()
                billing_data.update({
                    "user": user.id,
                    "tenant": request.tenant.id,
                    "patient": patient.id,
                    "doctor": doctor.id
                })

                last_billing = Billing.objects.order_by('id').last()
                billing_data["billing_record_id"] = 'BILL00001' if not last_billing else f'BILL0000{int(last_billing.billing_record_id.replace("BILL0000", "").strip()) + 1}'

                billing_serializer = BillingSerializer(data=billing_data)

                if billing_serializer.is_valid():
                    services = data.getlist('service[]') or data.getlist('service')
                    costs = data.getlist('cost[]') or data.getlist('cost')
                    qtys = data.getlist('qty[]') or data.getlist('qty')
                    prices = data.getlist('price[]') or data.getlist('price')
                    amounts = data.getlist('amount[]') or data.getlist('amount')
                    # print("Services:", services, "Costs:", costs, "Qtys:", qtys, "Prices:", prices, "Amounts:", amounts)


                    if not (len(services) == len(costs) == len(qtys) == len(prices) == len(amounts)):
                        return JsonResponse({"error": "Mismatch in service details."}, status=400)

                    service_details = [
                        {
                            'service': s, 'cost': c, 'qty': q, 'price': p, 'amount': a
                        } for s, c, q, p, a in zip(services, costs, qtys, prices, amounts)
                    ]

                    billing = Billing.objects.create(
                        user=user,
                        tenant=request.tenant,
                        patient=patient,
                        doctor=doctor,
                        billing_record_id=billing_data["billing_record_id"],
                        bill_type=data.get('bill_type'),
                        service_type=data.get('service_type'),
                        subtotal=data.get('subtotal'),
                        amount_paid=data.get('paid_payment'),
                        amount_due=data.get('due_payment'),
                        payment_mode=data.get('payment_mode'),
                        discount_percentage=data.get('discount_percentage'),
                        round_off=data.get('round_off'),
                        service_details=service_details
                    )
                    
                    if appointment:
                        appointment.billing = billing
                        appointment.save(update_fields=["billing"])
                    else:
                        print("No appointment found or created — skipping billing link.")


                    bill_type = data.get('bill_type')

                    if bill_type == 'Pathology':
                        for i in range(len(services)):
                            pathology_data = {
                                "tenant": request.tenant.id,
                                "patient": patient.id,
                                "referral_doctor": doctor.id,
                                "subtotal": data.get('subtotal'),
                                "net_amount": data.get('paid_payment'),
                                "payable_amount": data.get('paid_payment'),
                                "total_amount": data.get('paid_payment'),
                                "report_days": '1',
                                "bill": billing.id,
                                "payment_status": 'Paid' if float(data.get('due_payment', 0)) == 0 else 'Pending',
                                "service": services[i]
                            }

                            serializer = PathoCreateSerializer(data=pathology_data)
                            if serializer.is_valid():
                                serializer.save(
                                    tenant=request.tenant,
                                    patient=patient,
                                    referral_doctor=doctor
                                )
                            else:
                                print(f"Pathology serializer failed for service index {i}:", serializer.errors)
                                return JsonResponse({"error": serializer.errors}, status=400)


                    elif bill_type == 'Radiology':
                        for i in range(len(services)):
                            radiology_data = {
                                "tenant": request.tenant.id,
                                "patient": patient.id,
                                "referral_doctor": doctor.id,
                                "subtotal": data.get('subtotal'),
                                "net_amount": data.get('paid_payment'),
                                "payable_amount": data.get('paid_payment'),
                                "total_amount": data.get('paid_payment'),
                                "report_days": '1',
                                "bill": billing.id,
                                "payment_status": 'Paid' if float(data.get('due_payment', 0)) == 0 else 'Pending',
                                "service": services[i]
                            }

                            serializer = RadiologyReportsSerializer(data=radiology_data)
                            if serializer.is_valid():
                                serializer.save(
                                    tenant=request.tenant,
                                    user=user,
                                    patient=patient,
                                    referral_doctor=doctor
                                )
                            else:
                                print(f"Radiology serializer failed for service index {i}:", serializer.errors)
                                return JsonResponse({"error": serializer.errors}, status=400)
                            
                            
                    elif bill_type == 'Surgery':
                        surgery_data = data.copy()
                        surgery_data["doctor_id"] = doctor.id
                        surgery_data["patient_id"] = patient.id
                        surgery_data["user"] = user.id
                        surgery_data["tenant"] = request.tenant.id

                        serializer = SurgerySerializer(data=surgery_data)
                        if serializer.is_valid():
                            serializer.save(
                                tenant=request.tenant,
                                user=user,
                                patient=patient,
                                doctor=doctor
                            )
                        else:
                            print("Surgery serializer validation failed:", serializer.errors)
                            return JsonResponse({"error": serializer.errors}, status=400)

                    elif bill_type == 'IPD':
                        ipd_data = data.copy()
                        ipd_data.update({
                            "user": user.id,
                            "tenant": request.tenant.id,
                            "patient": patient.id,
                            "doctor": doctor.id,
                            "appointment": appointment.id,
                            "bed_charges": costs[0] if costs else None
                        })
                        # print(ipd_data)
                        ipdserializer = IPDSerializer(data=ipd_data)
                        
                        if ipdserializer.is_valid():
                            ipdserializer.save(tenant=request.tenant, user=user, patient=patient, doctor=doctor, appointment=appointment)
                        else:
                            errors = {
                                "ipd_serializer_errors": ipdserializer.errors if not ipdserializer.is_valid() else None,
                                "ipd_bill_serializer_errors": IPDSerializer.errors if not IPDSerializer.is_valid() else None,
                            }
                            return JsonResponse({"error": errors}, status=400)

                    patient_history.append({'id': billing.id, 'message': f'{bill_type} Billing Generated'})
                    patient.patient_history = patient_history
                    patient.save(update_fields=['patient_history'])

                    print('Billing created successfully.')

                    if request.GET.get('api') == 'true':
                        return JsonResponse({"msg": "Billing created successfully!"}, status=201)

                    messages.success(request, "Billing created successfully.")
                    return redirect('/billing/billing')

                return JsonResponse({"error": billing_serializer.errors}, status=400)

        except IntegrityError as e:
            return JsonResponse({"error": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)   
            


@permission_required('general-billing-delete')
def billing_delete(request, id):
    billing = get_object_or_404(Billing, id=id)
    billing.delete()
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Billing deleted successfully!"}, status=status.HTTP_200_OK)
    messages.error(request, "Billing deleted successfully.")
    return redirect('/billing/billing')



@permission_required('general-billing-view')
def billing_view(request, id):
    billing = get_object_or_404(Billing, id=id)
    billingSerializer = BillingSerializer(billing)
    
    if request.GET.get('api') == 'true':
        return JsonResponse({"msg": "Billing fetched view successfully!","billing":billingSerializer.data}, status=status.HTTP_200_OK)
    return render(request, 'billing-counter/general-billing/billing-view.html', context={"billing": billingSerializer.data})
        








def get_patient_by_phone(request):
    phone = request.GET.get('phone')
    # print(phone)
    try:
        patient = Patient.objects.get(phone=phone)
        patientSerializer = PatientSerializer(patient)
        return JsonResponse({"success":True, "patient": patientSerializer.data}, status=status.HTTP_200_OK)
    except Patient.DoesNotExist:
        return JsonResponse({"error": "Patient not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
def get_billing_details_by_patient_id(request, patient_id):
    try:        
        billings = Billing.objects.filter(patient=patient_id)
        billingSerializer = BillingSerializer(billings, many=True)
        final_data = billingSerializer.data
        
        ipd = IPD.objects.filter(patient=patient_id).last()
        ipd_data = IPDSerializer(ipd).data if ipd else None
        # print(ipd_data)
        pharmacy = PharmacyBill.objects.filter(patient=patient_id).last()
        pharmacy_data = PharmacyBillCreateUpdateSerializer(pharmacy).data if pharmacy else None
        return JsonResponse({"data": final_data,"ipd": ipd_data,"pharmacy_data": pharmacy_data}, status=status.HTTP_200_OK)
    
    except Billing.DoesNotExist:
        return JsonResponse({"error": "Billing not found"}, status=status.HTTP_404_NOT_FOUND)
    




# def get_billing_details_by_patient_id(request, patient_id):
#     try:        
#         billings = Billing.objects.filter(patient=patient_id)
#         billingSerializer = BillingSerializer(billings, many=True)
#         # Attach latest IPD data to each billing entry for this patient
#         ipd = IPD.objects.filter(patient=patient_id).last()
#         ipd_data = IPDSerializer(ipd).data if ipd else None

#         final_data = []
#         for billing in billingSerializer.data:
#             billing_with_ipd = dict(billing)
#             billing_with_ipd["ipd"] = ipd_data
#             final_data.append(billing_with_ipd)
#         return JsonResponse({"data": final_data}, status=status.HTTP_200_OK)
    
#     except Billing.DoesNotExist:
#         return JsonResponse({"error": "Billing not found"}, status=status.HTTP_404_NOT_FOUND)
    
    
    
    
    
@permission_required('final-billing-list')   
def final_bill(request):   
        bills = FinalBilling.objects.all().order_by('-updated_at')
        final_bills = FinalBillSerializer(bills, many=True) 
        if request.GET.get('api')=='true':
            return JsonResponse({'response':200, "final_bills": final_bills.data})
        return TemplateResponse(request, 'billing-counter/final-billing-list.html', {"final_bills": final_bills.data})

    
    
    
@csrf_exempt
@permission_required('final-billing-add')  
def create_final_bill(request):
    if request.method == 'GET':
        doctors = Employee.objects.filter(role=2)
        doctorSerializer = EmployeeSerializer(doctors, many=True)  
        return TemplateResponse(request, 'billing-counter/final-billing-create.html', {'doctors': doctorSerializer.data})

    if request.method == 'POST':
        print("POST Data:", request.POST)
        serializer = FinalBillSerializer(data=request.POST)

        data = request.POST.copy()

        if serializer.is_valid():
            billing_record_ids = data.getlist('billing_record_id[]') or data.getlist('billing_record_id')
            bill_types = data.getlist('bill_type[]') or data.getlist('bill_type')
            patient_names = data.getlist('patient_name[]') or data.getlist('patient_name')
            subtotals = data.getlist('subtotal[]') or data.getlist('subtotal')
            discount_percentages = data.getlist('discount_percentage[]') or data.getlist('discount_percentage')
            amount_paids = data.getlist('amount_paid[]') or data.getlist('amount_paid')
            amount_dues = data.getlist('amount_due[]') or data.getlist('amount_due')

            if not (len(billing_record_ids) == len(bill_types) == len(patient_names) == len(subtotals) == len(discount_percentages) == len(amount_paids) == len(amount_dues)):
                return JsonResponse({"error": "Mismatch in Billing details."}, status=400)

            billing_info = [
                {
                    'billing_record_id': a,
                    'bill_type': b,
                    'patient_name': c,
                    'subtotal': d,
                    'discount_percentage': e,
                    'amount_paid': f,
                    'amount_due': g
                }
                for a, b, c, d, e, f, g in zip(
                    billing_record_ids, bill_types, patient_names,
                    subtotals, discount_percentages, amount_paids, amount_dues
                )
            ]

            billing_details = {
                'billing_info': billing_info,

                'services': [
                    {
                        'date': date,
                        'name': name,
                        'cost': cost,
                        'qty': qty,
                        'amount': amount
                    }
                    for name, date, cost, qty, amount in zip(
                        data.getlist('service_name[]'),
                        data.getlist('service_date[]'),
                        data.getlist('service_cost[]'),
                        data.getlist('service_qty[]'),
                        data.getlist('service_amount[]')
                    )
                ],
                'ipd_entries': [
                    {
                        'date': date,
                        'description': desc,
                        'cost': cost,
                        'qty': qty,
                        'amount': amount
                    }
                    for  date, desc, cost, qty, amount in zip(
                        data.getlist('ipd_date[]'),
                        data.getlist('ipd_description[]'),
                        data.getlist('ipd_cost[]'),
                        data.getlist('ipd_qty[]'),
                        data.getlist('ipd_amount[]')
                    )
                ],
                'ipd_services': [
                    {
                        'date': date,
                        'description': desc,
                        'cost': cost,
                        'qty': qty,
                        'amount': amount
                    }
                    for date, desc, cost, qty, amount in zip(
                        data.getlist('ipd_srv_date[]'),
                        data.getlist('ipd_srv_description[]'),
                        data.getlist('ipd_srv_cost[]'),
                        data.getlist('ipd_srv_qty[]'),
                        data.getlist('ipd_srv_amount[]')
                    )
                ],
                'pharmacy_items': [
                    {
                        'date': date,
                        'name': name,
                        'cost': cost,
                        'qty': qty,
                        'amount': amount
                    }
                    for date, name, cost, qty, amount in zip(
                        data.getlist('pharma_date[]'),
                        data.getlist('pharma_name[]'),
                        data.getlist('pharma_cost[]'),
                        data.getlist('pharma_qty[]'),
                        data.getlist('pharma_amount[]')
                    )
                ]
            }

            serializer.save(
                tenant=request.tenant,
                billing_details=billing_details
            )

            print("Saved Final Bill:", serializer.data)
            messages.success(request, 'Final billing created successfully!')
            return redirect('/billing/billing/final')

        else:
            print("Serializer Errors:", serializer.errors)
            messages.error(request, 'Error creating final bill: ' + str(serializer.errors))
            return TemplateResponse(
                request,
                'billing-counter/final-billing-create.html',
                {
                    'serializer': serializer,
                    'errors': serializer.errors,
                }
            )





# def update_final_bill(request, pk):
#     final_bill = get_object_or_404(FinalBilling, pk=pk)
#     if request.method == 'POST':
#         serializer = FinalBillSerializer(final_bill, data=request.POST)
#         if serializer.is_valid():
#             serializer.save()
#             messages.success(request, 'Final bill updated successfully!')
#             return redirect('/billing/billing/final')
#         else:
#             messages.error(request, 'Error updating final bill: ' + str(serializer.errors))
#     else:
#         serializer = FinalBillSerializer(final_bill)
#     return render(request, 'update_final_bill.html', {'final_bills': serializer.data}) 




@permission_required('final-billing-view')  
def view_final_bill(request, pk):
    final_bill = get_object_or_404(FinalBilling, pk=pk)
    serializer = GetFinalBillSerializer(final_bill)
    return render(request, 'billing-counter/final-billing-view.html', {'billing': serializer.data})



@csrf_exempt
@permission_required('final-billing-delete')
def delete_final_bill(request, pk):
    final_bill = get_object_or_404(FinalBilling, pk=pk)
    if request.method == 'POST':
        final_bill.delete()
        messages.success(request, 'Final billing deleted successfully!')
        return redirect('/billing/billing/final')
    return render(request, 'billing-counter/confirm_delete.html', {'final_bill': final_bill})





