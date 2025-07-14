from django.db import models
from users.models import CustomUser, Tenant
from staff_management.models import Employee
from patients.models import Patient
from django.db.models import JSONField


class MedicineList(models.Model):
   
   
    medicine_name = models.CharField(max_length=255, blank=True, null=True)
    composition = models.TextField(blank=True, null=True)
    batch = models.CharField(max_length=255, blank=True, null=True)
    strength = models.CharField(max_length=255, blank=True, null=True)
    unit_cost = models.CharField(max_length=255, blank=True, null=True)
    qty = models.CharField(max_length=255, blank=True, null=True)
    total_cost = models.CharField(max_length=255, blank=True, null=True)
    box_size = models.CharField(max_length=255, blank=True, null=True)
    units = models.CharField(max_length=255, blank=True, null=True)
    shelf = models.CharField(max_length=255, blank=True, null=True)
    types = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.TextField(blank=True, null=True)
    bar_code = models.TextField(blank=True, null=True)
    vendor = models.CharField(max_length=255, blank=True, null=True)
    manufacturer_name = models.CharField(max_length=255, blank=True, null=True)
    manufacturer_price = models.CharField(max_length=255, blank=True, null=True)
    manufacturering_date =models.DateField(null=True, blank=True)
    expiry_date = models.DateField(null=True, blank=True)
    low_stock = models.CharField(max_length=255, blank=True, null=True)
    gst_no = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)

    class Meta:
        db_table = 'Pharmacy-Medicines'

    def __str__(self):
        return self.medicine_name





class PharmacyBill(models.Model):      
    
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, null=True) 
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    doctor = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True)
    pharmacy_bill_no = models.CharField(max_length=255, blank=True, null=True)
    patient_age = models.CharField(max_length=255, blank=True, null=True)
    patient_phone = models.CharField(max_length=255, blank=True, null=True)
    patient_gender = models.CharField(max_length=255, blank=True, null=True)
    discharge_status = models.CharField(max_length=255, blank=True, null=True)
    ward_details = models.CharField(max_length=255, blank=True, null=True)
    subtotal = models.CharField(max_length=255, blank=True, null=True)
    discount = models.CharField(max_length=255, blank=True, null=True)
    advance_amount = models.CharField(max_length=255,blank=True, null=True)
    payable_amount = models.CharField(max_length=255,blank=True, null=True)
    payment_mode = models.CharField(max_length=255, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)
    medicine_details = JSONField(blank=True, null=True) 

    class Meta:
        db_table = 'Pharmacy-Bill'

    def __str__(self):
        return self.pharmacy_bill_no





class PurchaseMedicine(models.Model):    
    
    medicine_name = models.ForeignKey(MedicineList, on_delete=models.SET_NULL, null=True)
    manufacturer_name = models.CharField(max_length=255, blank=True, null=True)
    batch = models.CharField(max_length=255, blank=True, null=True)
    expiry_date = models.CharField(max_length=255, blank=True, null=True)
    mrp = models.CharField(max_length=255, blank=True, null=True)
    batch_amount = models.CharField(max_length=255, blank=True, null=True)
    sale_price = models.CharField(max_length=255, blank=True, null=True)
    packing_qty = models.CharField(max_length=255, blank=True, null=True)
    qty = models.CharField(max_length=255, blank=True, null=True)
    purchase_amount = models.CharField(max_length=10, blank=True, null=True)
    tax = models.CharField(max_length=10, blank=True, null=True)
    tax_amount = models.CharField(max_length=10, blank=True, null=True)
    total_amount = models.CharField(max_length=10, blank=True, null=True)
    subtotal = models.CharField(max_length=10, blank=True, null=True)
    discount = models.CharField(max_length=10, blank=True, null=True)
    net_amount = models.CharField(max_length=50,blank=True, null=True)
    payment_mode = models.CharField(max_length=255,blank=True, null=True)
    payment_amount = models.CharField(max_length=50,blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateField(auto_now=True, null=True, blank=True)


    class Meta:
        db_table = 'Pharmacy-Purchase'