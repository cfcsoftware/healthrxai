permissions_list = [
    # Dashboard
    ("view-dashboard", "Dashboard", "Dashboard Permission"),

    # Patient
    ("patient-list", "Patient Manager", "Patient Manager Permission"),
    ("patient-add", "Patient Manager", "Patient Manager Permission"),
    ("patient-edit", "Patient Manager", "Patient Manager Permission"),
    ("patient-delete", "Patient Manager", "Patient Manager Permission"),
    ("patient-view", "Patient Manager", "Patient Manager Permission"),

    # Billing
    ("general-billing-list", "General Billing", "Billing Permission"),
    ("general-billing-add", "General Billing", "Billing Permission"),
    ("general-billing-delete", "General Billing", "Billing Permission"),
    ("general-billing-view", "General Billing", "Billing Permission"),
    ("final-billing-list", "Final Billing", "Billing Permission"),
    ("final-billing-add", "Final Billing", "Billing Permission"),
    ("final-billing-delete", "Final Billing", "Billing Permission"),
    ("final-billing-view", "Final Billing", "Billing Permission"),

    # Appointment
    ("appointment-list", "Appointment", "Appointment Permission"),
    ("appointment-add", "Appointment", "Appointment Permission"),
    ("appointment-edit", "Appointment", "Appointment Permission"),
    ("appointment-delete", "Appointment", "Appointment Permission"),
    ("appointment-view", "Appointment", "Appointment Permission"),

    # IPD
    ("ipd-list", "IPD", "IPD Permission"),
    ("ipd-add", "IPD", "IPD Permission"),
    ("ipd-edit", "IPD", "IPD Permission"),
    ("ipd-delete", "IPD", "IPD Permission"),
    ("ipd-view", "IPD", "IPD Permission"),

    # Bed Management
    ("bed-management-list", "Bed Management", "Bed Management Permission"),

    # Pharmacy Module
    ("pharmacy-bill-list", "Pharmacy Module", "Pharmacy Module Permission"),
    ("pharmacy-bill-add", "Pharmacy Module", "Pharmacy Module Permission"),
    ("pharmacy-bill-edit", "Pharmacy Module", "Pharmacy Module Permission"),
    ("pharmacy-bill-delete", "Pharmacy Module", "Pharmacy Module Permission"),
    ("pharmacy-bill-view", "Pharmacy Module", "Pharmacy Module Permission"),

    ("medicine-list", "Pharmacy Module", "Pharmacy Module Permission"),
    ("medicine-add", "Pharmacy Module", "Pharmacy Module Permission"),
    ("medicine-edit", "Pharmacy Module", "Pharmacy Module Permission"),
    ("medicine-delete", "Pharmacy Module", "Pharmacy Module Permission"),
    ("medicine-view", "Pharmacy Module", "Pharmacy Module Permission"),

    # Pathology Module
    ("pathology-report-list", "Pathology Module", "Pathology Module Permission"),
    ("pathology-report-add", "Pathology Module", "Pathology Module Permission"),
    ("pathology-report-edit", "Pathology Module", "Pathology Module Permission"),
    ("pathology-report-delete", "Pathology Module", "Pathology Module Permission"),
    ("pathology-report-view", "Pathology Module", "Pathology Module Permission"),

    ("pathology-test-list", "Pathology Module", "Pathology Module Permission"),
    ("pathology-test-add", "Pathology Module", "Pathology Module Permission"),
    ("pathology-test-edit", "Pathology Module", "Pathology Module Permission"),
    ("pathology-test-delete", "Pathology Module", "Pathology Module Permission"),
    ("pathology-test-view", "Pathology Module", "Pathology Module Permission"),

    # Radiology Module
    ("radiology-report-list", "Radiology Module", "Radiology Module Permission"),
    ("radiology-report-add", "Radiology Module", "Radiology Module Permission"),
    ("radiology-report-edit", "Radiology Module", "Radiology Module Permission"),
    ("radiology-report-delete", "Radiology Module", "Radiology Module Permission"),
    ("radiology-report-view", "Radiology Module", "Radiology Module Permission"),

    ("radiology-test-list", "Radiology Module", "Radiology Module Permission"),
    ("radiology-test-add", "Radiology Module", "Radiology Module Permission"),
    ("radiology-test-edit", "Radiology Module", "Radiology Module Permission"),
    ("radiology-test-delete", "Radiology Module", "Radiology Module Permission"),
    ("radiology-test-view", "Radiology Module", "Radiology Module Permission"),

    # Blood Bank
    ("blood-bank-list", "Blood Bank", "Blood Bank Permission"),
    ("blood-bank-add", "Blood Bank", "Blood Bank Permission"),
    ("blood-bank-edit", "Blood Bank", "Blood Bank Permission"),
    ("blood-bank-delete", "Blood Bank", "Blood Bank Permission"),
    ("blood-bank-view", "Blood Bank", "Blood Bank Permission"),

    # Certificate
    ("discharge-certificate-list", "Discharge Certificate Module", "Certificate Module Permission"),
    ("discharge-certificate-add", "Discharge Certificate Module", "Certificate Module Permission"),
    ("discharge-certificate-edit", "Discharge Certificate Module", "Certificate Module Permission"),
    ("discharge-certificate-delete", "Discharge Certificate Module", "Certificate Module Permission"),
    ("discharge-certificate-view", "Discharge Certificate Module", "Certificate Module Permission"),

    ("medical-certificate-list", "Medical Certificate Module", "Certificate Module Permission"),
    ("medical-certificate-add", "Medical Certificate Module", "Certificate Module Permission"),
    ("medical-certificate-edit", "Medical Certificate Module", "Certificate Module Permission"),
    ("medical-certificate-delete", "Medical Certificate Module", "Certificate Module Permission"),
    ("medical-certificate-view", "Medical Certificate Module", "Certificate Module Permission"),

    ("fitness-certificate-list", "Fitness Certificate Module", "Certificate Module Permission"),
    ("fitness-certificate-add", "Fitness Certificate Module", "Certificate Module Permission"),
    ("fitness-certificate-edit", "Fitness Certificate Module", "Certificate Module Permission"),
    ("fitness-certificate-delete", "Fitness Certificate Module", "Certificate Module Permission"),
    ("fitness-certificate-view", "Fitness Certificate Module", "Certificate Module Permission"),

    ("birth-certificate-list", "Birth Certificate Module", "Certificate Module Permission"),
    ("birth-certificate-add", "Birth Certificate Module", "Certificate Module Permission"),
    ("birth-certificate-edit", "Birth Certificate Module", "Certificate Module Permission"),
    ("birth-certificate-delete", "Birth Certificate Module", "Certificate Module Permission"),
    ("birth-certificate-view", "Birth Certificate Module", "Certificate Module Permission"),

    ("death-certificate-list", "Death Certificate Module", "Certificate Module Permission"),
    ("death-certificate-add", "Death Certificate Module", "Certificate Module Permission"),
    ("death-certificate-edit", "Death Certificate Module", "Certificate Module Permission"),
    ("death-certificate-delete", "Death Certificate Module", "Certificate Module Permission"),
    ("death-certificate-view", "Death Certificate Module", "Certificate Module Permission"),

    # Accounting
    ("income-list", "Accounting", "Accounting Permission"),
    ("income-add", "Accounting", "Accounting Permission"),
    ("income-edit", "Accounting", "Accounting Permission"),
    ("income-delete", "Accounting", "Accounting Permission"),
    ("income-view", "Accounting", "Accounting Permission"),

    ("expenses-list", "Accounting", "Accounting Permission"),
    ("expenses-add", "Accounting", "Accounting Permission"),
    ("expenses-edit", "Accounting", "Accounting Permission"),
    ("expenses-delete", "Accounting", "Accounting Permission"),
    ("expenses-view", "Accounting", "Accounting Permission"),

    # Staff Management
    ("staff-list", "Staff Management", "Staff Management Permission"),
    ("staff-add", "Staff Management", "Staff Management Permission"),
    ("staff-edit", "Staff Management", "Staff Management Permission"),
    ("staff-delete", "Staff Management", "Staff Management Permission"),
    ("staff-view", "Staff Management", "Staff Management Permission"),

    # Role & Permission
    ("role-list", "Role Permission", "Role"),
    ("role-add", "Role Permission", "Role"),
    ("role-edit", "Role Permission", "Role"),
    ("role-delete", "Role Permission", "Role"),
    ("role-view", "Role Permission", "Role"),

    ("permission-list", "Role Permission", "Permission"),
    ("permission-add", "Role Permission", "Permission"),
    ("permission-edit", "Role Permission", "Permission"),
    ("permission-delete", "Role Permission", "Permission"),
    ("permission-view", "Role Permission", "Permission"),

    ("role-permission-assign-list", "Role Permission", "Role Permission Assign"),
    ("role-permission-assign-add", "Role Permission", "Role Permission Assign"),
    ("role-permission-assign-edit", "Role Permission", "Role Permission Assign"),
    ("role-permission-assign-delete", "Role Permission", "Role Permission Assign"),
    ("role-permission-assign-view", "Role Permission", "Role Permission Assign"),

    # Department
    ("department-list", "Department", "Department Permission"),
    ("department-add", "Department", "Department Permission"),
    ("department-edit", "Department", "Department Permission"),
    ("department-delete", "Department", "Department Permission"),
    ("department-view", "Department", "Department Permission"),

    # Surgery
    ("surgery-list", "Surgery", "Surgery Permission"),
    ("surgery-add", "Surgery", "Surgery Permission"),
    ("surgery-edit", "Surgery", "Surgery Permission"),
    ("surgery-delete", "Surgery", "Surgery Permission"),
    ("surgery-view", "Surgery", "Surgery Permission"),

    # Services
    ("service-list", "Service", "Service Permission"),
    ("service-add", "Service", "Service Permission"),
    ("service-edit", "Service", "Service Permission"),
    ("service-delete", "Service", "Service Permission"),
    ("service-view", "Service", "Service Permission"),

    #Website CMS
    ("cms-dashboard", "CMS", "CMS Permission"),
    ("cms-setting", "CMS", "CMS Permission"),
    ("cms-menu-builder", "CMS", "CMS Permission"),
    ("cms-pages", "CMS", "CMS Permission"),
    ("cms-features", "CMS", "CMS Permission"),
    ("cms-gallery", "CMS", "CMS Permission"),
    ("cms-contacts", "CMS", "CMS Permission"),

    # Reports
    ("appointment-report", "Report", "Report Permission"),
    ("accounting-report", "Report", "Report Permission"),
    ("opd-report", "Report", "Report Permission"),
    ("ipd-report", "Report", "Report Permission"),
    ("pharmacy-report", "Report", "Report Permission"),
    ("pathology-report", "Report", "Report Permission"),
    ("radiology-report", "Report", "Report Permission"),
    ("blood-bank-report", "Report", "Report Permission"),
    ("ambulance-report", "Report", "Report Permission"),
    ("birth-death-report", "Report", "Report Permission"),
    ("human-resource-report", "Report", "Report Permission"),
    ("insurance-report", "Report", "Report Permission"),
    ("inventory-report", "Report", "Report Permission"),
    ("operation-report", "Report", "Report Permission"),
    ("patient-report", "Report", "Report Permission"),

    # Settings
    ("general-setting", "Setting", "Setting Permission"),
    ("patient-setting", "Setting", "Setting Permission"),
    ("pharmacy-setting", "Setting", "Setting Permission"),
    ("pathology-setting", "Setting", "Setting Permission"),
    ("radiology-setting", "Setting", "Setting Permission"),
    ("blood-bank-setting", "Setting", "Setting Permission"),
    ("bed-setting", "Setting", "Setting Permission"),
    ("human-resource-setting", "Setting", "Setting Permission"),
    ("insurance-setting", "Setting", "Setting Permission"),
    ("inventory-setting", "Setting", "Setting Permission"),
    ("operation-setting", "Setting", "Setting Permission"),
    ("theme-setting", "Setting", "Setting Permission"),
]


doctor_permissions_list = [
"view-dashboard",
"patient-list",
"patient-view",
"appointment-list",
"appointment-edit",
"appointment-view",
"ipd-list",
"ipd-edit",
"ipd-view",
"bed-management-list",
"surgery-list",
"surgery-add",
"surgery-edit",
"surgery-view", 

]


nurse_permissions_list = [
"view-dashboard",
"patient-list",
"patient-view",
"appointment-list",
"appointment-edit",
"appointment-view",
"ipd-list",
"ipd-edit",
"ipd-view",
"bed-management-list",
"surgery-list",
"surgery-add",
"surgery-edit",
"surgery-view", 
]


receptonist_permissions_list = [
"view-dashboard", 
"patient-list",
"patient-add",
"patient-edit",
"patient-view",
"general-billing-list",
"general-billing-add",
"final-billing-list",
"final-billing-add",
"appointment-list",
"appointment-add",
"appointment-edit",
"appointment-delete",
"appointment-view",
]


pharmacy_permissions_list = [
"view-dashboard",
"pharmacy-bill-list",
"pharmacy-bill-add", 
"pharmacy-bill-edit",
"pharmacy-bill-view",
"medicine-list",
"medicine-add",
"medicine-edit",
"medicine-view",
]


pathology_permissions_list = [
"view-dashboard",
"pathology-report-list",
"pathology-report-add",
"pathology-report-edit",
"pathology-report-view",
"pathology-test-list",
"pathology-test-add",
"pathology-test-edit",
"pathology-test-view",
]


radiology_permissions_list = [
"view-dashboard",
"radiology-report-list",
"radiology-report-add",
"radiology-report-edit",
"radiology-report-view",
"radiology-test-list",
"radiology-test-add",
"radiology-test-edit",
"radiology-test-view",
]


accountant_permissions_list = [
"view-dashboard",
"final-billing-list",
"appointment-report",
"accounting-report",
"opd-report",
"ipd-report",
"pharmacy-report",
"pathology-report",
"radiology-report",
"blood-bank-report",
"ambulance-report",
"birth-death-report",
"human-resource-report",
"insurance-report",
"inventory-report",
"operation-report",
"patient-report",
]


manager_permissions_list = [
]


default_services = [
    {"name": "First Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "500"},
    {"name": "Follow-up Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "300"},
    {"name": "General Physician", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "400"},
    {"name": "Pediatric Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "450"},
    {"name": "Dermatology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "500"},
    {"name": "Neurology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "700"},
    {"name": "Gynecology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "600"},
    {"name": "Cardiology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "800"},
    {"name": "Psychiatry Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "750"},
    {"name": "ENT Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "500"},
    {"name": "Dental Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "300"},
    {"name": "Ophthalmology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "450"},
    {"name": "Rheumatology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "700"},
    {"name": "Endocrinology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "750"},
    {"name": "Nephrology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "800"},
    {"name": "Oncology Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "850"},
    {"name": "Geriatric Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "600"},
    {"name": "Pain Management Consultation", "bill_type": "Appointment(OPD)", "service_type": "Consultation", "charge": "650"},

    {"name": "X-Ray (Plain Radiograph)", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "500"},
    {"name": "Chest X-Ray", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "350"},
    {"name": "Knee X-Ray", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "400"},
    {"name": "Wrist X-Ray", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "350"},
    {"name": "Spine X-Ray", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "500"},
    {"name": "MRI Brain", "bill_type": "Radiology", "service_type": "MRI", "charge": "4500"},
    {"name": "MRI Spine", "bill_type": "Radiology", "service_type": "MRI", "charge": "7500"},
    {"name": "MRI Knee", "bill_type": "Radiology", "service_type": "MRI", "charge": "7200"},
    {"name": "MRI Pelvis", "bill_type": "Radiology", "service_type": "MRI", "charge": "7400"},
    {"name": "MRI Cervical Spine", "bill_type": "Radiology", "service_type": "MRI", "charge": "7600"},
    {"name": "Mammography", "bill_type": "Radiology", "service_type": "MRI", "charge": "1200"},
    {"name": "Head CT Scan", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "5000"},
    {"name": "CT Abdomen", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "3500"},
    {"name": "DEXA Scan", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "2000"},
    {"name": "X-Ray Knee Joint", "bill_type": "Radiology", "service_type": "X-Ray", "charge": "600"},
    {"name": "CT Chest", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "3800"},
    {"name": "CT Brain", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "3200"},
    {"name": "CT Sinus", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "2200"},
    {"name": "X-ray Spine", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "650"},
    {"name": "Ultrasound Pregnancy (Obstetric)", "bill_type": "Radiology", "service_type": "CT Scan", "charge": "1200"},
    {"name": "Ultrasound Pelvis", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1500"},
    {"name": "Ultrasound Abdomen", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1000"},
    {"name": "Hysterosalpingography (HSG)", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "2500"},
    {"name": "Ultrasound Obstetric", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1600"},
    {"name": "Ultrasound Neck", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1700"},
    {"name": "Ultrasound Breast", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1900"},
    {"name": "Ultrasound Thyriod", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "700"},
    {"name": "PET-CT Scan", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "18000"},
    {"name": "Barium Swallow", "bill_type": "Radiology", "service_type": "Ultrasound", "charge": "1600"},

    {"name": "Fasting Blood Sugar (FBS)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "80"},
    {"name": "Postprandial Blood Sugar (PPBS)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "90"},
    {"name": "Liver Function Test (LFT)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "800"},
    {"name": "Kidney Function Test (KFT)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "900"},
    {"name": "Complete Blood Count (CBC)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "300"},
    {"name": "Lipid Profile", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "400"},
    {"name": "Thyroid Profile Total (T3, T4, TSH)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "350"},
    {"name": "Vitamin D (25‑Hydroxy)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "800"},
    {"name": "Vitamin B12 (Cobalamin)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "600"},
    {"name": "Erythrocyte Sedimentation Rate (ESR)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "100"},
    {"name": "Glycosylated Hemoglobin (HbA1c)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "350"},
    {"name": "Serum Creatinine", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "150"},
    {"name": "Serum Calcium", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "180"},
    {"name": "Serum Electrolytes", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "250"},
    {"name": "Diabetes Profile", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "500"},
    {"name": "Iron Profile", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "450"},
    {"name": "Coagulation Profile (PT/INR & aPTT)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "600"},
    {"name": "Urea / Blood Urea Nitrogen (BUN)", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "150"},
    {"name": "Uric Acid", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "160"},
    {"name": "CRP", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "400"},
    {"name": "D-Dimer", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "1000"},
    {"name": "Ferritin", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "900"},
    {"name": "Prothrombin Time", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "500"},
    {"name": "Troponin I", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "1100"},
    {"name": "Dengue NS1 Antigen", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "600"},
    {"name": "Malaria Antigen Test", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "500"},
    {"name": "Widal Test", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "300"},
    {"name": "HBsAg", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "400"},
    {"name": "HIV Test", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "500"},
    {"name": "COVID RT-PCR", "bill_type": "Pathology", "service_type": "Blood Test", "charge": "1200"},
    {"name": "Routine Urine Examination", "bill_type": "Pathology", "service_type": "Urine Test", "charge": "300"},
    {"name": "Urine Culture", "bill_type": "Pathology", "service_type": "Urine Test", "charge": "500"},

    {"name": "Appendectomy", "bill_type": "Surgery", "service_type": "General", "charge": "25000"},
    {"name": "Gallbladder Removal", "bill_type": "Surgery", "service_type": "General", "charge": "30000"},
    {"name": "Hernia Repair", "bill_type": "Surgery", "service_type": "General", "charge": "28000"},
    {"name": "Bypass Surgery", "bill_type": "Surgery", "service_type": "Cardiac", "charge": "150000"},
    {"name": "Angioplasty", "bill_type": "Surgery", "service_type": "Cardiac", "charge": "120000"},
    {"name": "Hip Replacement", "bill_type": "Surgery", "service_type": "Orthopedic", "charge": "130000"},
    {"name": "Shoulder Arthroscopy", "bill_type": "Surgery", "service_type": "Orthopedic", "charge": "45000"},
    {"name": "Tonsillectomy", "bill_type": "Surgery", "service_type": "ENT", "charge": "20000"},
    {"name": "Nasal Polyp Removal", "bill_type": "Surgery", "service_type": "ENT", "charge": "22000"},
    {"name": "Cataract Surgery", "bill_type": "Surgery", "service_type": "Ophthalmology", "charge": "18000"},
    {"name": "LASIK Surgery", "bill_type": "Surgery", "service_type": "Ophthalmology", "charge": "60000"},
    {"name": "C-Section Delivery", "bill_type": "Surgery", "service_type": "Gynecology", "charge": "50000"},
    {"name": "Hysterectomy", "bill_type": "Surgery", "service_type": "Gynecology", "charge": "60000"},
    {"name": "Kidney Stone Removal", "bill_type": "Surgery", "service_type": "Urology", "charge": "40000"},
    {"name": "Prostate Surgery", "bill_type": "Surgery", "service_type": "Urology", "charge": "70000"},
    {"name": "Wisdom Tooth Extraction", "bill_type": "Surgery", "service_type": "Dental", "charge": "8000"},
    {"name": "Root Canal Surgery", "bill_type": "Surgery", "service_type": "Dental", "charge": "6000"},

    {"name": "General Ward (per day)", "bill_type": "Inpatient", "service_type": "Room Rent", "charge": "1000"},
    {"name": "Semi-Private Room (per day)", "bill_type": "Inpatient", "service_type": "Room Rent", "charge": "2000"},
    {"name": "Private Room (per day)", "bill_type": "Inpatient", "service_type": "Room Rent", "charge": "3500"},
    {"name": "Deluxe Private Room (per day)", "bill_type": "Inpatient", "service_type": "Room Rent", "charge": "5000"},
    {"name": "ICU Charges (per day)", "bill_type": "Inpatient", "service_type": "ICU", "charge": "8000"},
    {"name": "NICU Charges (per day)", "bill_type": "Inpatient", "service_type": "ICU", "charge": "9000"},
    {"name": "PICU Charges (per day)", "bill_type": "Inpatient", "service_type": "ICU", "charge": "8500"},
    {"name": "Ventilator Support (per day)", "bill_type": "Inpatient", "service_type": "ICU", "charge": "9500"},
    {"name": "Normal Delivery Package", "bill_type": "Inpatient", "service_type": "Maternity", "charge": "40000"},
    {"name": "High-Risk Pregnancy Package", "bill_type": "Inpatient", "service_type": "Maternity", "charge": "65000"},

    {"name": "Local Ambulance Service", "bill_type": "Miscellaneous", "service_type": "Ambulance", "charge": "1000"},
    {"name": "Emergency ICU Ambulance", "bill_type": "Miscellaneous", "service_type": "Ambulance", "charge": "2500"},
    {"name": "Outstation Ambulance (per km)", "bill_type": "Miscellaneous", "service_type": "Ambulance", "charge": "20"},
    {"name": "Neonatal Ambulance", "bill_type": "Miscellaneous", "service_type": "Ambulance", "charge": "3000"},
    {"name": "Attendant/Nursing Care (per day)", "bill_type": "Miscellaneous", "service_type": "Nursing", "charge": "1500"},
    {"name": "Post-Surgery Physio Session", "bill_type": "Miscellaneous", "service_type": "Physiotherapy", "charge": "800"},
    {"name": "Stroke Rehab Session", "bill_type": "Miscellaneous", "service_type": "Physiotherapy", "charge": "1000"},
    {"name": "Sports Injury Rehab", "bill_type": "Miscellaneous", "service_type": "Physiotherapy", "charge": "900"},
    {"name": "Inpatient Medicine Charges (avg/day)", "bill_type": "Miscellaneous", "service_type": "Pharmacy", "charge": "2000"},
    {"name": "Injection Charges", "bill_type": "Miscellaneous", "service_type": "Pharmacy", "charge": "250"},
    {"name": "Dressing Charges", "bill_type": "Miscellaneous", "service_type": "Pharmacy", "charge": "300"},
    {"name": "Dietician Consultation", "bill_type": "Miscellaneous", "service_type": "Counseling", "charge": "500"},
    {"name": "Psychological Counseling", "bill_type": "Miscellaneous", "service_type": "Counseling", "charge": "700"},
    {"name": "Crutches (Rental per week)", "bill_type": "Miscellaneous", "service_type": "Equipment", "charge": "500"},
    {"name": "Wheelchair (Rental per week)", "bill_type": "Miscellaneous", "service_type": "Equipment", "charge": "800"},
    {"name": "Oxygen Cylinder (per day)", "bill_type": "Miscellaneous", "service_type": "Equipment", "charge": "1000"},
    {"name": "CPAP Machine (Rental per day)", "bill_type": "Miscellaneous", "service_type": "Equipment", "charge": "1200"},
]


default_medicines = [
    {"medicine_name": "Paracetamol", "composition": "Paracetamol 500mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Crocin", "composition": "Paracetamol 500mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Dolo 650", "composition": "Paracetamol 650mg", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Combiflam", "composition": "Ibuprofen 400mg + Paracetamol 325mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Calpol", "composition": "Paracetamol 500mg or 650mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Brufen", "composition": "Ibuprofen 400mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Meftal Spas", "composition": "Mefenamic Acid + Dicyclomine", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Nise", "composition": "Nimesulide 100mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Voveran", "composition": "Diclofenac Sodium 50mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zerodol", "composition": "Aceclofenac 100mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Cetirizine", "composition": "Cetirizine 10mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Allegra", "composition": "Fexofenadine 120mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Montair LC", "composition": "Levocetirizine + Montelukast", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Sinarest", "composition": "Paracetamol + Phenylephrine + Chlorpheniramine", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "D-Cold Total", "composition": "Paracetamol + Phenylephrine + Chlorpheniramine", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Ascoril", "composition": "Bromhexine + Guaifenesin + Terbutaline", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Benadryl", "composition": "Diphenhydramine + Ammonium Chloride", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Corex", "composition": "Codeine Phosphate + Chlorpheniramine", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Honitus", "composition": "Honey + Tulsi + Mulethi etc.", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zyrtec", "composition": "Cetirizine 10mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Augmentin", "composition": "Amoxicillin + Clavulanic Acid", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Azithral", "composition": "Azithromycin 500mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Taxim-O", "composition": "Cefixime 200mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Moxikind-CV", "composition": "Amoxicillin + Clavulanic Acid", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Ciplox", "composition": "Ciprofloxacin 500mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Norflox", "composition": "Norfloxacin 400mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Doxy 1", "composition": "Doxycycline 100mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Levoflox", "composition": "Levofloxacin 500mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Metrogyl", "composition": "Metronidazole 400mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zifi", "composition": "Cefixime 200mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Glycomet GP", "composition": "Metformin + Glimepiride", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Janumet", "composition": "Sitagliptin + Metformin", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Galvus Met", "composition": "Vildagliptin + Metformin", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Jardiance", "composition": "Empagliflozin 10mg/25mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Gluconorm", "composition": "Gliclazide", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Trajenta", "composition": "Linagliptin", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Huminsulin", "composition": "Regular Insulin", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Mixtard", "composition": "Insulin Isophane + Insulin Regular", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Basalog", "composition": "Insulin Glargine", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Glimestar", "composition": "Glimepiride", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Telma", "composition": "Telmisartan 40mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Amlodipine", "composition": "Amlodipine 5mg", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Telma-H", "composition": "Telmisartan + Hydrochlorothiazide", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Stamlo", "composition": "Amlodipine 5/10mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Nebicard", "composition": "Nebivolol 5mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Cilacar", "composition": "Cilnidipine 10mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Metoprolol", "composition": "Metoprolol 25mg/50mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Losar", "composition": "Losartan Potassium", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Olmesar", "composition": "Olmesartan 20mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Aten", "composition": "Atenolol 25mg/50mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Pantop", "composition": "Pantoprazole 40mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Omez", "composition": "Omeprazole 20mg", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Rantac", "composition": "Ranitidine 150mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Nexpro", "composition": "Esomeprazole 40mg", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Pan-D", "composition": "Pantoprazole + Domperidone", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Aciloc", "composition": "Ranitidine", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zinetac", "composition": "Ranitidine", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Digene", "composition": "Magnesium + Aluminium Hydroxide", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Gelusil", "composition": "Simethicone + Aluminium Hydroxide + Magnesium", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Rabicip", "composition": "Rabeprazole 20mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Becosules", "composition": "B-complex + Vitamin C", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Neurobion Forte", "composition": "B1, B6, B12", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Revital H", "composition": "Ginseng + Vitamins + Minerals", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zincovit", "composition": "Zinc + Multivitamins", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Supradyn", "composition": "Multivitamins + Minerals", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Shelcal", "composition": "Calcium + Vitamin D3", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "D3 Must", "composition": "Vitamin D3 60,000 IU", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Evion", "composition": "Vitamin E", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Limcee", "composition": "Vitamin C 500mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "A to Z", "composition": "Multivitamin tablet", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Isabgol", "composition": "Psyllium Husk", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Lactifiber", "composition": "Lactitol + Ispaghula", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Cremaffin", "composition": "Milk of Magnesia + Liquid Paraffin", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Dulcolax", "composition": "Bisacodyl", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Digiplex", "composition": "Enzymes", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Aristozyme", "composition": "Fungal Diastase + Pepsin", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Unienzyme", "composition": "Charcoal + Fungal Diastase + Papain", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Himalaya Liv 52", "composition": "Herbal liver tonic", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Livogen", "composition": "Iron + Folic Acid", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Nexito", "composition": "Escitalopram", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Alprax", "composition": "Alprazolam", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Clonotril", "composition": "Clonazepam", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Sertraline", "composition": "Sertraline 50mg", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Etizola", "composition": "Etizolam", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Zolfresh", "composition": "Zolpidem", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Lonazep", "composition": "Clonazepam", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Risdone", "composition": "Risperidone", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Fluoxetine", "composition": "Fluoxetine 20mg", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Oleanz", "composition": "Olanzapine", "strength": "650", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Betadine", "composition": "Povidone Iodine", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Soframycin", "composition": "Framycetin", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Neosporin", "composition": "Neomycin + Bacitracin", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Quadriderm", "composition": "Beclomethasone + Neomycin + Clotrimazole", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Clotrimazole", "composition": "Clotrimazole 1%", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Fucidin", "composition": "Fusidic Acid", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Luliconazole", "composition": "Luliconazole 1%", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Dermadew", "composition": "Moisturizing agent", "strength": "250", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Candid", "composition": "Clotrimazole 1%", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Betnovate", "composition": "Betamethasone Valerate", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Mupirocin", "composition": "Mupirocin 2%", "strength": "100", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "T-Bact", "composition": "Bacitracin + Neomycin", "strength": "500", "types": "tablet", "category": "antibiotic"},
    {"medicine_name": "Cipla Cough Syrup", "composition": "Cough syrup with multiple ingredients", "strength": "", "types": "syrup", "category": ""}
]


default_beds = [
  {"bed_type": "General", "bed_number": "GF-001", "ward": "General", "floor": "Ground Floor", "bed_charges": 1000, "bed_status": "Available"},
  {"bed_type": "Private", "bed_number": "GF-002", "ward": "Private", "floor": "Ground Floor", "bed_charges": 3000, "bed_status": "Available"},
  {"bed_type": "Semi-Private", "bed_number": "GF-003", "ward": "Semi-Private", "floor": "Ground Floor", "bed_charges": 2500, "bed_status": "Available"},
  {"bed_type": "ICU", "bed_number": "GF-004", "ward": "ICU", "floor": "Ground Floor", "bed_charges": 5000, "bed_status": "Available"},
  {"bed_type": "Emergency", "bed_number": "GF-005", "ward": "Emergency", "floor": "Ground Floor", "bed_charges": 4000, "bed_status": "Available"},
  {"bed_type": "Other", "bed_number": "GF-006", "ward": "Other", "floor": "Ground Floor", "bed_charges": 1500, "bed_status": "Available"},
  {"bed_type": "General", "bed_number": "GF-007", "ward": "General", "floor": "Ground Floor", "bed_charges": 1000, "bed_status": "Available"},
  {"bed_type": "Private", "bed_number": "GF-008", "ward": "Private", "floor": "Ground Floor", "bed_charges": 3000, "bed_status": "Available"},
  {"bed_type": "ICU", "bed_number": "GF-009", "ward": "ICU", "floor": "Ground Floor", "bed_charges": 5000, "bed_status": "Available"},
  {"bed_type": "Semi-Private", "bed_number": "GF-010", "ward": "Semi-Private", "floor": "Ground Floor", "bed_charges": 2500, "bed_status": "Available"},

  {"bed_type": "General", "bed_number": "1F-101", "ward": "General", "floor": "1st Floor", "bed_charges": 2000, "bed_status": "Available"},
  {"bed_type": "Private", "bed_number": "1F-102", "ward": "Private", "floor": "1st Floor", "bed_charges": 3500, "bed_status": "Available"},
  {"bed_type": "Semi-Private", "bed_number": "1F-103", "ward": "Semi-Private", "floor": "1st Floor", "bed_charges": 2700, "bed_status": "Available"},
  {"bed_type": "ICU", "bed_number": "1F-104", "ward": "ICU", "floor": "1st Floor", "bed_charges": 5200, "bed_status": "Available"},
  {"bed_type": "Emergency", "bed_number": "1F-105", "ward": "Emergency", "floor": "1st Floor", "bed_charges": 4200, "bed_status": "Available"},
  {"bed_type": "Other", "bed_number": "1F-106", "ward": "Other", "floor": "1st Floor", "bed_charges": 1600, "bed_status": "Available"},
  {"bed_type": "General", "bed_number": "1F-107", "ward": "General", "floor": "1st Floor", "bed_charges": 2000, "bed_status": "Available"},
  {"bed_type": "Private", "bed_number": "1F-108", "ward": "Private", "floor": "1st Floor", "bed_charges": 3500, "bed_status": "Available"},
  {"bed_type": "ICU", "bed_number": "1F-109", "ward": "ICU", "floor": "1st Floor", "bed_charges": 5200, "bed_status": "Available"},
  {"bed_type": "Semi-Private", "bed_number": "1F-110", "ward": "Semi-Private", "floor": "1st Floor", "bed_charges": 2700, "bed_status": "Available"}
]


default_pathology = [
  {
    "test_name": "Complete Blood Count (CBC)",
    "short_name": "CBC",
    "sample_type": "Blood",
    "total_amount": 300,
    "precaution": "p",
    "title": [],
    "component_name": [
      "Hemoglobin ",
      "Total Leukocyte Count (TLC)",
      "Red Blood Cell ",
      "Hematocrit (Hct or PCV)",
      "Mean Corpuscular Volume (MCV)",
      "Mean Corpuscular Hemoglobin (MCH)",
      "Mean Corpuscular Hemoglobin Concentration (MCHC)",
      "Red Cell Distribution Width (RDW)",
      "Platelet Count (PLT)",
      "Mean Platelet Volume (MPV)",
      "Differential Leukocyte Count (DLC)"
    ],
    "component_unit": ["g/L", "cells/uL", "cells/uL", "%", "U/L", "pg/mL", "g/L", "%", "U/L", "g/L", "%"],
    "component_result": ["", "", "", "", "", "", "", "", "", "", ""],
    "test_status": ["", "", "", "", "", "", "", "", "", "", ""],
    "female_reference_range": [
      "13.5 – 17.5",
      "4,000 – 11,000",
      "4.7 – 6.1",
      "41 – 53",
      "80 – 100",
      "27 – 33",
      "32 – 36",
      "11.5 – 14.5",
      "150,000 – 450,000",
      "7.5 – 11.5",
      "40 – 75"
    ],
    "male_reference_range": [
      "13.5 – 17.5",
      "4,000 – 11,000",
      "4.7 – 6.1",
      "41 – 53",
      "80 – 100",
      "27 – 33",
      "32 – 36",
      "11.5 – 14.5",
      "150,000 – 450,000",
      "7.5 – 11.5",
      "40 – 75"
    ]
  },
  {
    "test_name": "Diabetes Profile",
    "short_name": "DP",
    "sample_type": "Blood",
    "total_amount": 500,
    "precaution": "Fasting 8-10 hour's",
    "title": [],
    "component_name": ["Glycosylated Hemoglobin (HbA1c)", "Glucose – Fasting"],
    "component_unit": ["%", "mg/dL"],
    "component_result": ["", ""],
    "test_status": ["", ""],
    "female_reference_range": ["4 – 5.6", "80"],
    "male_reference_range": ["4 – 5.6", "80"]
  },
  {
    "test_name": "Kidney Function Test (KFT)",
    "short_name": "KFT",
    "sample_type": "Blood",
    "total_amount": 550,
    "precaution": "No special precautions",
    "title": [],
    "component_name": [
      "Blood Urea Nitrogen",
      "Urea",
      "Creatinine",
      "Uric Acid",
      "Sodium",
      "Blood Urea",
      "BUN/Creatinine Ratio",
      "Electrolytes",
      "Calcium (Total Serum Calcium)",
      "Phosphorus (Inorganic Phosphate)",
      "Estimated Glomerular Filtration Rate (eGFR)",
      "Cystatin C"
    ],
    "component_unit": ["mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "mEq/L", "mg/dL", "mg/dL", "mg/dL", "mg/dL"],
    "component_result": ["", "", "", "", "", "", "", "", "", "", "", ""],
    "test_status": ["", "", "", "", "", "", "", "", "", "", "", ""],
    "female_reference_range": [
      "6.0 – 20.0",
      "12.84 – 42.80",
      "0.6 – 1.2",
      "3.7 – 7.7",
      "136 – 145",
      "10 – 40",
      "10:1 – 20:1",
      "135 – 145",
      "8.5 – 10.2",
      "2.5 – 4.5",
      "",
      "0.6 – 1.0"
    ],
    "male_reference_range": [
      "6.0 – 20.0",
      "12.84 – 42.80",
      "0.6 – 1.2",
      "3.7 – 7.7",
      "136 – 145",
      "10 – 40",
      "10:1 – 20:1",
      "135 – 145",
      "8.5 – 10.2",
      "2.5 – 4.5",
      "",
      "0.6 – 1.0"
    ]
  },
  {
    "test_name": "Coagulation Profile (PT/INR & aPTT)",
    "short_name": "COAG",
    "sample_type": "Blood",
    "total_amount": 600,
    "precaution": "Avoid blood thinners before test (consult doctor)",
    "title": [],
    "component_name": [
      "Prothrombin Time (PT)",
      "International Normalized Ratio (INR)",
      "Activated Partial Thromboplastin Time (aPTT or APTT)",
      "Thrombin Time (TT)",
      "Fibrinogen Level",
      "D-Dimer (if included in extended coagulation panel)"
    ],
    "component_unit": ["mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "ng/mL"],
    "component_result": ["", "", "", "", "", ""],
    "test_status": ["", "", "", "", "", ""],
    "female_reference_range": ["11 – 13.5", "0.8 – 1.1", "25 – 35", "14 – 16 ", "200 – 400", "< 0.5"],
    "male_reference_range": ["11 – 13.5", "0.8 – 1.1", "25 – 35", "14 – 16 ", "200 – 400", "< 0.5"]
  },
  {
    "test_name": "Fasting Blood Sugar (FBS)",
    "short_name": "FBS",
    "sample_type": "Blood",
    "total_amount": 80,
    "precaution": "Patient must fast for 8–12 hours before sample collection",
    "title": [],
    "component_name": [
      "Fasting Blood Sugar (FBS)",
      "Postprandial Blood Sugar (PPBS / 2-Hour Post Meal)",
      "Random Blood Sugar (RBS)",
      "HbA1c (Glycated Hemoglobin)",
      "Insulin (Fasting)",
      "C-Peptide (Fasting)",
      "Oral Glucose Tolerance Test (OGTT) – 2 Hour (75g Glucose)"
    ],
    "component_unit": ["mg/dL", "mg/dL", "mg/dL", "%", "IU/L", "ng/mL", "mg/dL"],
    "component_result": ["", "", "", "", "", "", ""],
    "test_status": ["", "", "", "", "", "", ""],
    "female_reference_range": ["70 – 99", "140 – 199", "70 – 140", "5.7 – 6.4", "2 – 25", "0.8 – 3.1", "< 140"],
    "male_reference_range": ["70 – 99", "140 – 199", "70 – 140", "5.7 – 6.4", "2 – 25", "0.8 – 3.1", "< 140"]
  },
  {
    "test_name": "Postprandial Blood Sugar (PPBS)",
    "short_name": "PPBS",
    "sample_type": "Blood",
    "total_amount": 90,
    "precaution": "Sample should be collected exactly 2 hours after a meal.",
    "title": [],
    "component_name": ["Fasting Blood Sugar (FBS)", "Random Blood Sugar (RBS)", "HbA1c (Glycated Hemoglobin)", "Oral Glucose Tolerance Test (OGTT)"],
    "component_unit": ["mg/dL", "mg/dL", "%", "mg/dL"],
    "component_result": ["", "", "", ""],
    "test_status": ["", "", "", ""],
    "female_reference_range": ["70–99", "< 140", "5.7–6.4", "< 140"],
    "male_reference_range": ["70–99", "< 140", "5.7–6.4", "< 140"]
  },
  {
    "test_name": "Glycosylated Hemoglobin (HbA1c)",
    "short_name": "HbA1c",
    "sample_type": "Blood",
    "total_amount": 350,
    "precaution": "No fasting required. Avoid test if recently transfused.",
    "title": [],
    "component_name": ["Hemoglobin A1c (HbA1c)", "Estimated Average Glucose (eAG)", "Total Hemoglobin (optional)"],
    "component_unit": ["%", "mg/dL", "g/L"],
    "component_result": ["", "", ""],
    "test_status": ["", "", ""],
    "female_reference_range": ["4.0–5.6", "68–126", "13.0–17.0"],
    "male_reference_range": ["4.0–5.6", "68–126", "13.0–17.0"]
  },
  {
    "test_name": "Lipid Profile",
    "short_name": "LIPID",
    "sample_type": "Blood",
    "total_amount": 400,
    "precaution": "Fasting for 9–12 hours is recommended before the test.",
    "title": [],
    "component_name": [
      "Total Cholesterol",
      "HDL Cholesterol (Good)",
      "LDL Cholesterol (Bad)",
      "Triglycerides",
      "VLDL Cholesterol",
      "TC/HDL Ratio (Total/HDL)",
      "LDL/HDL Ratio"
    ],
    "component_unit": ["mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL", "mg/dL"],
    "component_result": ["", "", "", "", "", "", ""],
    "test_status": ["", "", "", "", "", "", ""],
    "female_reference_range": ["< 200", "> 40", "100–129", "< 150", "2–30", "< 5", "< 3.5"],
    "male_reference_range": ["< 200", "> 40", "100–129", "< 150", "2–30", "< 5", "< 3.5"]
  },
  {
    "test_name": "Thyroid Profile Total (T3, T4, TSH)",
    "short_name": "TPT",
    "sample_type": "Blood",
    "total_amount": 350,
    "precaution": "No special preparation needed; however, test should ideally be done in the morning.",
    "title": [],
    "component_name": ["Total T3", "Total T4", "TSH"],
    "component_unit": ["ng/mL", "U/L", "U/L"],
    "component_result": ["", "", ""],
    "test_status": ["", "", ""],
    "female_reference_range": ["80 – 200", "5.0 – 12.0", "0.4 – 4.0"],
    "male_reference_range": ["80 – 200", "5.0 – 12.0", "0.4 – 4.0"]
  },
  {
    "test_name": "Serum Electrolytes",
    "short_name": "ELECTRO",
    "sample_type": "Blood",
    "total_amount": 250,
    "precaution": "No fasting required; avoid dehydration before test.",
    "title": [],
    "component_name": ["Sodium (Na⁺)", "Potassium (K⁺)", "Chloride (Cl⁻)", "Bicarbonate (HCO₃⁻) (optional)"],
    "component_unit": ["mmol/L", "mmol/L", "mmol/L", "mmol/L"],
    "component_result": ["", "", "", ""],
    "test_status": ["", "", "", ""],
    "female_reference_range": ["135 – 145", "3.5 – 5.1", "96 – 106", "22 – 29"],
    "male_reference_range": ["135 – 145", "3.5 – 5.1", "96 – 106", "22 – 29"]
  },
  {
    "test_name": "Serum Calcium",
    "short_name": "CA",
    "sample_type": "Blood",
    "total_amount": 180,
    "precaution": "No special preparation needed; sample should be taken in a calm, seated position if possible.",
    "title": [],
    "component_name": ["Serum Calcium", "Ionized Calcium (optional)"],
    "component_unit": ["mg/dL", "mg/dL"],
    "component_result": ["", ""],
    "test_status": ["", ""],
    "female_reference_range": ["8.5 – 10.5", "4.5 – 5.6"],
    "male_reference_range": ["8.5 – 10.5", "4.5 – 5.6"]
  },
  {
    "test_name": "Serum Creatinine",
    "short_name": "CRE",
    "sample_type": "Blood",
    "total_amount": 150,
    "precaution": "Avoid eating cooked meat 24 hours before test; stay hydrated.",
    "title": [],
    "component_name": ["Serum Creatinine", "eGFR (Optional)"],
    "component_unit": ["mg/dL", "mg/dL"],
    "component_result": ["", ""],
    "test_status": ["", ""],
    "female_reference_range": ["0.7 – 1.3", "> 90"],
    "male_reference_range": ["0.7 – 1.3", "> 90"]
  },
  {
    "test_name": "Uric Acid",
    "short_name": "UA",
    "sample_type": "Urine",
    "total_amount": 160,
    "precaution": "Avoid high-protein and purine-rich foods 24 hours before test. Stay hydrated.",
    "title": [],
    "component_name": ["Uric Acid"],
    "component_unit": ["mg/dL"],
    "component_result": [""],
    "test_status": [""],
    "female_reference_range": ["3.4 – 7.0"],
    "male_reference_range": ["3.4 – 7.0"]
  },
  {
    "test_name": "Urea / Blood Urea Nitrogen (BUN)",
    "short_name": "BUN",
    "sample_type": "Blood",
    "total_amount": 150,
    "precaution": "No special preparation required; sample should be taken on an empty stomach if combined with other tests.",
    "title": [],
    "component_name": ["Blood Urea", "Blood Urea Nitrogen (BUN)", "BUN/Urea Ratio (Optional)"],
    "component_unit": ["mg/dL", "mg/dL", "mg/dL"],
    "component_result": ["", "", ""],
    "test_status": ["", "", ""],
    "female_reference_range": ["10 – 50", "7 – 20", "10:1 – 20:1"],
    "male_reference_range": ["10 – 50", "7 – 20", "10:1 – 20:1"]
  },
  {
    "test_name": "Vitamin D (25‑Hydroxy)",
    "short_name": "VITD",
    "sample_type": "Blood",
    "total_amount": 800,
    "precaution": "No fasting required; avoid taking supplements 24 hours before test.",
    "title": [],
    "component_name": ["Vitamin D Total (25‑OH)", "Vitamin D2", "Vitamin D3"],
    "component_unit": ["ng/mL", "mg/dL", "mg/dL"],
    "component_result": ["", "", ""],
    "test_status": ["", "", ""],
    "female_reference_range": ["30 – 100", "— (no defined range)", "— (no defined range)"],
    "male_reference_range": ["30 – 100", "— (no defined range)", "— (no defined range)"]
  },
  {
    "test_name": "Vitamin B12 (Cobalamin)",
    "short_name": "VB12",
    "sample_type": "Blood",
    "total_amount": 600,
    "precaution": "6–8 hours fasting preferred; avoid B12 supplements 24 hours before test.",
    "title": [],
    "component_name": ["Vitamin B12", "Interpretation (Optional)"],
    "component_unit": ["pg/mL", "pg/mL"],
    "component_result": ["", ""],
    "test_status": ["", ""],
    "female_reference_range": ["211 – 911", "> 300"],
    "male_reference_range": ["211 – 911", "> 300"]
  },
  {
    "test_name": "Erythrocyte Sedimentation Rate (ESR)",
    "short_name": "ESR",
    "sample_type": "Blood",
    "total_amount": 100,
    "precaution": "No fasting required.",
    "title": [],
    "component_name": ["ESR"],
    "component_unit": ["mmol/L"],
    "component_result": [""],
    "test_status": [""],
    "female_reference_range": ["0 – 15"],
    "male_reference_range": ["0 – 15"]
  },
  {
    "test_name": "Iron Profile",
    "short_name": "IRON",
    "sample_type": "Blood",
    "total_amount": 450,
    "precaution": "Fasting for 8–12 hours recommended; avoid iron supplements 24 hours before test.",
    "title": [],
    "component_name": ["Serum Iron", "Total Iron Binding Capacity (TIBC)", "Unsaturated Iron Binding Capacity (UIBC)", "Transferrin Saturation"],
    "component_unit": ["pg/mL", "pg/mL", "pg/mL", "%"],
    "component_result": ["", "", "", ""],
    "test_status": ["", "", "", ""],
    "female_reference_range": ["65–175", "250–450", "150–375", "20–50"],
    "male_reference_range": ["65–175", "250–450", "150–375", "20–50"]
  }
]


default_radiology = [
  {
    "test_name": "X-Ray (Plain Radiograph)",
    "short_name": "X-Ray",
    "sample_type": "Scan",
    "total_amount": 500,
    "precaution": "drink lots of water",
    "title": ["Investigation:-", "description:- Standard projectional radiography"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Chest X-Ray",
    "short_name": "CXR",
    "sample_type": "Scan",
    "total_amount": 500,
    "precaution": "No Precaution",
    "title": ["Investigation:-", "description:- Assessment of lungs, heart, chest structures"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "MRI Brain",
    "short_name": "MRI-B",
    "sample_type": "Scan",
    "total_amount": 4500,
    "precaution": "Remove all metal objects",
    "title": ["Investigation:-", "description:- Brain soft tissue and abnormalities"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "CT Abdomen",
    "short_name": "CT-ABD",
    "sample_type": "Scan",
    "total_amount": 3500,
    "precaution": "Fasting 4-6 hours",
    "title": ["Investigation:-", "description:- Detailed cross-sectional abdominal imaging"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Ultrasound Pelvis",
    "short_name": "USG-P",
    "sample_type": "Scan",
    "total_amount": 800,
    "precaution": "Drink water, full bladder required",
    "title": ["Investigation:-", "description:- Assessment of pelvic organs"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Mammography",
    "short_name": "Mammo",
    "sample_type": "Scan",
    "total_amount": 1200,
    "precaution": "Avoid deodorants or powders",
    "title": ["Investigation:-", "description:- Breast tissue imaging for cancer screening"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "DEXA Scan",
    "short_name": "DEXA",
    "sample_type": "Scan",
    "total_amount": 2000,
    "precaution": "Avoid calcium supplements 24 hrs before test",
    "title": ["Investigation:-", "description:- Bone density measurement"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "CT Chest",
    "short_name": "CT-CHEST",
    "sample_type": "Scan",
    "total_amount": 3800,
    "precaution": "Fasting 4 hours; contrast possible",
    "title": ["Investigation:-", "description:- Lung and chest cavity analysis"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "MRI Spine",
    "short_name": "MRI-SP",
    "sample_type": "Scan",
    "total_amount": 4800,
    "precaution": "Remove all metal items",
    "title": ["Investigation:-", "description:- Evaluate vertebrae, spinal cord"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Ultrasound Abdomen",
    "short_name": "USG-ABD",
    "sample_type": "Scan",
    "total_amount": 1000,
    "precaution": "Fasting 6 hours",
    "title": ["Investigation:-", "description:- Liver, kidney, pancreas scan"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "X-Ray Knee Joint",
    "short_name": "XKJ",
    "sample_type": "Scan",
    "total_amount": 600,
    "precaution": "No precaution required",
    "title": ["Investigation:-", "description:- Assessment of joint space, bone structure"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "CT Brain",
    "short_name": "CT-BR",
    "sample_type": "Scan",
    "total_amount": 3200,
    "precaution": "May require contrast, fasting 4 hours",
    "title": ["Investigation:-", "description:- Brain hemorrhage or stroke detection"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "MRI Knee",
    "short_name": "MRI-KNEE",
    "sample_type": "Scan",
    "total_amount": 4000,
    "precaution": "No metal objects allowed",
    "title": ["Investigation:-", "description:- Meniscus, ligament injury scan"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Hysterosalpingography (HSG)",
    "short_name": "HSG",
    "sample_type": "Scan",
    "total_amount": 2500,
    "precaution": "Schedule post-menstruation",
    "title": ["Investigation:-", "description:- Uterus and fallopian tube x-ray"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Ultrasound Thyroid",
    "short_name": "USG-THY",
    "sample_type": "Scan",
    "total_amount": 700,
    "precaution": "No specific preparation",
    "title": ["Investigation:-", "description:- Thyroid gland size and nodules"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "PET-CT Scan",
    "short_name": "PET-CT",
    "sample_type": "Scan",
    "total_amount": 18000,
    "precaution": "Fasting 6 hours, no exercise 24 hours prior",
    "title": ["Investigation:-", "description:- Cancer detection and staging"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Barium Swallow",
    "short_name": "BSW",
    "sample_type": "Scan",
    "total_amount": 1600,
    "precaution": "Fasting 8 hours",
    "title": ["Investigation:-", "description:- Esophagus and upper GI tract study"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "X-Ray Spine",
    "short_name": "X-SP",
    "sample_type": "Scan",
    "total_amount": 650,
    "precaution": "No special preparation",
    "title": ["Investigation:-", "description:- Spinal curvature and fractures"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "Ultrasound Pregnancy (Obstetric)",
    "short_name": "USG-OBS",
    "sample_type": "Scan",
    "total_amount": 1200,
    "precaution": "Full bladder required",
    "title": ["Investigation:-", "description:- Fetal growth, gestation age check"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  },
  {
    "test_name": "CT Sinus",
    "short_name": "CT-SIN",
    "sample_type": "Scan",
    "total_amount": 2200,
    "precaution": "No metal objects",
    "title": ["Investigation:-", "description:- Evaluate sinusitis or inflammation"],
    "component_name": [],
    "component_unit": [],
    "component_result": [],
    "test_status": [],
    "reference_range": []
  }
]



default_patient_data = [
  {
    "patient_record_id": "PATIENT00001",
    "name": "Raman bhalla",
    "phone": "7458965236",
    "guardian_name": "Ram Bhalla",
    "guardian_phone": "7458965237",
    "age": 27,
    "gender": "Male",
    "blood_group": "A+",
    "marital_status": "Single",
    "email": "raman@gmail.com",
    "address": "East Malabar Hills",
    "city": "Mumbai",
    "state": "Maharastra",
    "tpa_validity": "2025-06-14",
    "patient_history": [
      { "id": 1, "message": "Appointment Created for Existing Patient" },
      { "id": 1, "message": "Appointment(OPD) Billing Generated" }
    ],
    "ayushman_card": "GYGU*UBYT&",
    "created_at": "2025-06-14",
    "updated_at": "2025-06-14",
    "aadhar_card": "665259000000",
    "social_security_number": "HTJY875JH"
  }
]






default_employees = [
    {
        "role": 2,
        "user": {
            "name": "Doctor 1",
            "username": "doctor1",
            "email": "doctor@gmail.com",
            "phone": "9999990001",
            "password": "123456",
            "gender": "Male"
        }
    },
    {
        "role": 3,
        "user": {
            "name": "Receptionist 1",
            "username": "receptionist1",
            "email": "receptionist@gmail.com",
            "phone": "9999990002",
            "password": "123456",
            "gender": "Female"
        }
    },
    {
        "role": 4,
        "user": {
            "name": "Manager 1",
            "username": "manager1",
            "email": "manager@gmail.com",
            "phone": "9999990003",
            "password": "123456",
            "gender": "Male"
        }
    },
    {
        "role": 5,
        "user": {
            "name": "Nurse",
            "username": "nurse1",
            "email": "nurse@gmail.com",
            "phone": "9999990004",
            "password": "123456",
            "gender": "Female"
        }
    },
    {
        "role": 6,
        "user": {
            "name": "Pharmacist 1",
            "username": "pharmacist1",
            "email": "pharmacist@gmail.com",
            "phone": "9999990005",
            "password": "123456",
            "gender": "Male"
        }
    },
    {
        "role": 7,
        "user": {
            "name": "Pathologist 1",
            "username": "pathologist1",
            "email": "pathologist@gmail.com",
            "phone": "9999990006",
            "password": "123456",
            "gender": "Male"
        }
    },
    {
        "role": 8,
        "user": {
            "name": "Radiologist 1",            
            "username": "radiologist1",
            "email": "radiologist@gmail.com",
            "phone": "9999990007",
            "password": "123456",
            "gender": "Female"
        }
    },
    {
        "role": 9,
        "user": {
            "name": "Accountant 1",
            "username": "accountant1",
            "email": "accountant@gmail.com",
            "phone": "9999990008",
            "password": "123456",
            "gender": "Male"
        }
    }
]









# default_billing_data = [ 
#     {
#         "id": 1,  
#         "billing_record_id": "BILL00001",
#         "bill_type": "Appointment(OPD)",
#         "service_type": "Consultation",
#         "subtotal": "500", 
#         "amount_paid": "500",
#         "amount_due": "0",
#         "discount_percentage": "0",  
#         "round_off": "0",  
#         "payment_mode": "cash",
#         "created_at": "2025-06-14",
#         "updated_at": "2025-06-14",
#         "service_details": [
#             {
#                 "qty": "1",
#                 "cost": "500",
#                 "price": "500",
#                 "amount": "500",
#                 "service": "First Consultation"
#             }
#         ],
#         "doctor_id": 1,
#         "patient_id": 1,
#         "tenant_id": 2,
#         "user_id": 1,
#     },
# ]




default_appointment_data = [
  {
    "appointment_record_id": "APPOINTMENT00001",
    "appointment_date": "2025-06-14",
    "appointment_time": "18:32:00",
    "payment_mode": "cash",
    "total_payment": 500,
    "due_payment": 0,
    "height": 170,
    "weight": 65,
    "bp": "100/80",
    "pulse": 72,
    "temperature": 36.6,
    "spo2": 98,
    "rbs": 110,
    "created_at": "2025-06-14",
    "updated_at": "2025-06-17",
    "billing_id": 1,
    "doctor_id": 1,
    "patient_id": 1,
    "audio_recordings": [],
    "soap_data": []
  }
]
