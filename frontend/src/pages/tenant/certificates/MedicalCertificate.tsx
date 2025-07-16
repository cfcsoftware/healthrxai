import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  User, 
  FileText,
  RefreshCw,
  CheckCircle,
  Clock,
  AlertCircle,
  Building,
  X,
  UserCheck,
  Activity,
  TrendingUp,
  FileCheck,
  Stethoscope,
  Bell,
  Settings,
  Mail,
  Shield
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface MedicalCertificate {
  id: string;
  patientName: string;
  patientId: string;
  patientMobile: string;
  certificateType: 'fitness' | 'medical_leave' | 'disability' | 'vaccination' | 'health_checkup';
  issuedDate: string;
  validUntil: string;
  department: string;
  physician: string;
  diagnosis: string;
  status: 'active' | 'expired' | 'revoked' | 'pending';
  certificateNumber: string;
  purpose: string;
  createdAt: string;
  updatedAt: string;
}

interface NewCertificateForm {
  patientName: string;
  patientId: string;
  patientMobile: string;
  certificateType: string;
  department: string;
  physician: string;
  diagnosis: string;
  purpose: string;
  validityPeriod: string;
  certificateFile: File | null;
}

const mockData: MedicalCertificate[] = [
  {
    id: '1',
    patientName: 'John Anderson',
    patientId: 'PT001234',
    patientMobile: '+91 9876543210',
    certificateType: 'fitness',
    issuedDate: '2024-07-10',
    validUntil: '2025-07-10',
    department: 'General Medicine',
    physician: 'Dr. Sarah Wilson',
    diagnosis: 'Medically Fit',
    status: 'active',
    certificateNumber: 'MC-2024-001',
    purpose: 'Employment',
    createdAt: '2024-07-10T10:30:00Z',
    updatedAt: '2024-07-10T14:20:00Z'
  },
  {
    id: '2',
    patientName: 'Emily Rodriguez',
    patientId: 'PT001235',
    patientMobile: '+91 9876543211',
    certificateType: 'medical_leave',
    issuedDate: '2024-07-08',
    validUntil: '2024-07-22',
    department: 'Orthopedics',
    physician: 'Dr. Michael Chen',
    diagnosis: 'Fractured Wrist',
    status: 'active',
    certificateNumber: 'MC-2024-002',
    purpose: 'Work Leave',
    createdAt: '2024-07-08T09:15:00Z',
    updatedAt: '2024-07-08T11:45:00Z'
  },
  {
    id: '3',
    patientName: 'Robert Thompson',
    patientId: 'PT001236',
    patientMobile: '+91 9876543212',
    certificateType: 'disability',
    issuedDate: '2024-07-05',
    validUntil: '2025-07-05',
    department: 'Neurology',
    physician: 'Dr. Lisa Park',
    diagnosis: 'Partial Mobility Impairment',
    status: 'active',
    certificateNumber: 'MC-2024-003',
    purpose: 'Disability Benefits',
    createdAt: '2024-07-05T16:00:00Z',
    updatedAt: '2024-07-05T16:30:00Z'
  },
  {
    id: '4',
    patientName: 'Maria Garcia',
    patientId: 'PT001237',
    patientMobile: '+91 9876543213',
    certificateType: 'vaccination',
    issuedDate: '2024-07-12',
    validUntil: '2025-07-12',
    department: 'Immunology',
    physician: 'Dr. James Kumar',
    diagnosis: 'COVID-19 Vaccination Complete',
    status: 'active',
    certificateNumber: 'MC-2024-004',
    purpose: 'Travel',
    createdAt: '2024-07-12T12:00:00Z',
    updatedAt: '2024-07-12T15:30:00Z'
  },
  {
    id: '5',
    patientName: 'David Kim',
    patientId: 'PT001238',
    patientMobile: '+91 9876543214',
    certificateType: 'health_checkup',
    issuedDate: '2024-07-01',
    validUntil: '2024-10-01',
    department: 'Preventive Medicine',
    physician: 'Dr. Amanda Foster',
    diagnosis: 'Overall Health Normal',
    status: 'expired',
    certificateNumber: 'MC-2024-005',
    purpose: 'Health Insurance',
    createdAt: '2024-07-01T08:45:00Z',
    updatedAt: '2024-07-01T13:15:00Z'
  }
];

const certificateTypeConfig = {
  fitness: { 
    icon: UserCheck, 
    color: 'text-green-600', 
    bg: 'bg-green-50', 
    border: 'border-green-200',
    label: 'Fitness Certificate'
  },
  medical_leave: { 
    icon: Clock, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50', 
    border: 'border-blue-200',
    label: 'Medical Leave'
  },
  disability: { 
    icon: Shield, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50', 
    border: 'border-purple-200',
    label: 'Disability Certificate'
  },
  vaccination: { 
    icon: Activity, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50', 
    border: 'border-indigo-200',
    label: 'Vaccination Certificate'
  },
  health_checkup: { 
    icon: Stethoscope, 
    color: 'text-teal-600', 
    bg: 'bg-teal-50', 
    border: 'border-teal-200',
    label: 'Health Checkup'
  }
};

const statusConfig = {
  active: { 
    icon: CheckCircle, 
    color: 'text-green-600', 
    bg: 'bg-green-50', 
    border: 'border-green-200',
    label: 'Active'
  },
  expired: { 
    icon: Clock, 
    color: 'text-red-600', 
    bg: 'bg-red-50', 
    border: 'border-red-200',
    label: 'Expired'
  },
  revoked: { 
    icon: X, 
    color: 'text-gray-600', 
    bg: 'bg-gray-50', 
    border: 'border-gray-200',
    label: 'Revoked'
  },
  pending: { 
    icon: AlertCircle, 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50', 
    border: 'border-yellow-200',
    label: 'Pending'
  }
};

export default function MedicalCertificateRecords() {
  const [certificates] = useState<MedicalCertificate[]>(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [selectedCertificates, setSelectedCertificates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCertificateForm, setNewCertificateForm] = useState<NewCertificateForm>({
    patientName: '',
    patientId: '',
    patientMobile: '',
    certificateType: '',
    department: '',
    physician: '',
    diagnosis: '',
    purpose: '',
    validityPeriod: '',
    certificateFile: null
  });

  // Filter and search logic
  const filteredCertificates = useMemo(() => {
    return certificates.filter(cert => {
      const matchesSearch = 
        cert.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.patientMobile.includes(searchTerm);
      
      const matchesStatus = statusFilter === 'all' || cert.status === statusFilter;
      const matchesType = typeFilter === 'all' || cert.certificateType === typeFilter;
      const matchesDepartment = departmentFilter === 'all' || cert.department === departmentFilter;
      
      return matchesSearch && matchesStatus && matchesType && matchesDepartment;
    });
  }, [certificates, searchTerm, statusFilter, typeFilter, departmentFilter]);

  const departments = useMemo(() => {
    const depts = Array.from(new Set(certificates.map(cert => cert.department)));
    return depts.sort();
  }, [certificates]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCertificates(filteredCertificates.map(cert => cert.id));
    } else {
      setSelectedCertificates([]);
    }
  };

  const handleSelectCertificate = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedCertificates(prev => [...prev, id]);
    } else {
      setSelectedCertificates(prev => prev.filter(certId => certId !== id));
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleAddCertificate = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewCertificateForm({
      patientName: '',
      patientId: '',
      patientMobile: '',
      certificateType: '',
      department: '',
      physician: '',
      diagnosis: '',
      purpose: '',
      validityPeriod: '',
      certificateFile: null
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', newCertificateForm);
    handleCloseModal();
  };

  const handleInputChange = (field: keyof NewCertificateForm, value: string) => {
    setNewCertificateForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewCertificateForm(prev => ({
      ...prev,
      certificateFile: file
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const StatusBadge = ({ status }: { status: MedicalCertificate['status'] }) => {
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color} ${config.bg} ${config.border} border`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </span>
    );
  };

  const TypeBadge = ({ type }: { type: MedicalCertificate['certificateType'] }) => {
    const config = certificateTypeConfig[type];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color} ${config.bg} ${config.border} border`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.label}
      </span>
    );
  };

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center mr-8">
                <Building className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">City Hospital</span>
              </div>
             
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded-md">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded-md">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700 " >Welcome! cityhospital</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Medical Certificate Records</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button 
                onClick={handleAddCertificate}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Certificates</dt>
                  <dd className="text-lg font-semibold text-gray-900">{certificates.length}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active</dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {certificates.filter(c => c.status === 'active').length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Expired</dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {certificates.filter(c => c.status === 'expired').length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending</dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {certificates.filter(c => c.status === 'pending').length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">This Month</dt>
                  <dd className="text-lg font-semibold text-gray-900">
                    {certificates.filter(c => new Date(c.issuedDate).getMonth() === new Date().getMonth()).length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search certificates, patients, or mobile..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                    <option value="pending">Pending</option>
                    <option value="revoked">Revoked</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="fitness">Fitness</option>
                    <option value="medical_leave">Medical Leave</option>
                    <option value="disability">Disability</option>
                    <option value="vaccination">Vaccination</option>
                    <option value="health_checkup">Health Checkup</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Building className="h-4 w-4 text-gray-400" />
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedCertificates.length > 0 && (
            <div className="p-4 bg-blue-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-900">
                  {selectedCertificates.length} certificate{selectedCertificates.length > 1 ? 's' : ''} selected
                </span>
                <div className="flex items-center space-x-2">
                  <button className="inline-flex items-center px-3 py-1 border border-blue-300 rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                  <button className="inline-flex items-center px-3 py-1 border border-green-300 rounded-md text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </button>
                  <button className="inline-flex items-center px-3 py-1 border border-red-300 rounded-md text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certificates Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedCertificates.length === filteredCertificates.length && filteredCertificates.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Certificate Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Validity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCertificates.map((certificate) => (
                  <tr key={certificate.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedCertificates.includes(certificate.id)}
                        onChange={(e) => handleSelectCertificate(certificate.id, e.target.checked)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{certificate.patientName}</div>
                          <div className="text-sm text-gray-500">{certificate.patientId}</div>
                          <div className="text-sm text-gray-500">{certificate.patientMobile}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                  </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <TypeBadge type={certificate.certificateType} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {certificate.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <span className="text-sm text-gray-500">{formatDate(certificate.issuedDate)} - {formatDate(certificate.validUntil)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={certificate.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-2" onClick={() => console.log('View', certificate.id)}>
                        <Eye className="w-4 h-4 inline" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 mr-2" onClick={() => console.log('Edit', certificate.id)}>
                        <Edit className="w-4 h-4 inline" />
                      </button>
                      <button className="text-red-600 hover:text-red-900" onClick={() => console.log('Delete', certificate.id)}>
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Certificate Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Add New Certificate</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  type="text"
                  value={newCertificateForm.patientName}
                  onChange={(e) => handleInputChange('patientName', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Patient ID</label>
                <input
                  type="text"
                  value={newCertificateForm.patientId}
                  onChange={(e) => handleInputChange('patientId', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Patient Mobile</label>
                <input
                  type="text"
                  value={newCertificateForm.patientMobile}
                  onChange={(e) => handleInputChange('patientMobile', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Certificate Type</label>
                <select
                  value={newCertificateForm.certificateType}
                  onChange={(e) => handleInputChange('certificateType', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Type</option>
                  {Object.keys(certificateTypeConfig).map(type => (
                    <option key={type} value={type}>{certificateTypeConfig[type].label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  value={newCertificateForm.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Physician</label>
                <input
                  type="text"
                  value={newCertificateForm.physician}
                  onChange={(e) => handleInputChange('physician', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Diagnosis</label>
                <input
                  type="text"
                  value={newCertificateForm.diagnosis}
                  onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Purpose</label>
                <input
                  type="text"
                  value={newCertificateForm.purpose}
                  onChange={(e) => handleInputChange('purpose', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Validity Period</label>
                <input
                  type="text"
                  value={newCertificateForm.validityPeriod}
                  onChange={(e) => handleInputChange('validityPeriod', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Certificate File</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>  
  );
}
