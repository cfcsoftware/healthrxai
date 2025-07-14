from django.urls import path
from .views import *

app_name = 'pharmacy'

urlpatterns = [
    
    # Pharmacy Billing
    path("pharmacy-bill", pharmacy_bill_list, name="pharmacy-bill"),
    path("pharmacy-bill/add", pharmacy_bill_create, name="pharmacy-create"),
    # path("pharmacy-bill/add", pharmacy_bill_create, name="pharmacy-create"),
    path("pharmacy-bill/<int:pk>/view", pharmacy_bill_view, name="pharmacy-view"),
    
    # Fetch Medicine Details
    path("get-medicine-details/<int:medicine_id>", get_medicine_details, name="get_medicine_details"),
    path("get-medicine-details-by-generic-name", get_medicine_details_by_generic_name, name="get_medicine_details_by_generic_name"),
    path("get-medicine-details-by-name", get_medicine_details_by_name, name="get_medicine_details_by_name"),
    path("search-medicine-names", search_medicine_names, name='search_medicine_names'),

    # Medicine List
    path("medicine-list", medicine_list, name="medicine-list"),
    path("medicine/add", medicine_create, name="medicine-create"),
    path("medicine/update/<int:pk>", medicine_update, name="medicine-update"),
    path("medicine/delete/<int:pk>", medicine_delete, name="medicine-delete"),
    path('medicine/upload_csv/', upload_medicine_csv, name='upload_medicine_csv'),

    # path("medicine-stock", medicine_stock_list, name="medicine-stock-list"),
    # path("medicine-stock/add", medicine_stock_add, name="medicine-stock-create"),
    # path("medicine-stock/update/<int:pk>", medicine_stock_update, name="medicine-stock-update"),
    # path("medicine-stock/delete/<int:pk>", medicine_stock_delete, name="medicine-stock-delete"),
    # path("medicine-stock/<int:medicine_stock_id>", medicine_stock_manage, name="medicine-stock-manage"),

    # purchase medicine
    # path("purchase-medicine", PurchaseMedicineView.as_view(), name="purchase-medicine"),
    # path("purchase-medicine/add", PurchaseMedicineCreateView.as_view(), name="purchase-medicine-create"),
    # path("purchase-medicine/<int:purchase_medicine_id>", PurchaseMedicineManagementView.as_view(), name="purchase-medicine-manage"),
    


]
