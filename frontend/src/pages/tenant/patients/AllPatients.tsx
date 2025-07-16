import React, { useState, useMemo } from 'react';
import { 
  Search, 
  User, 
  FileText, 
  Printer, 
  Copy, 
  History, 
  Edit, 
  Trash2, 
  Plus,
  Upload,
  Filter,
  MoreHorizontal,
  Phone,
  MapPin,
  Users,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  RefreshCw,
  Settings,
  Bell,
  Eye,
  Shield
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface Patient {
  id: number;
  patientId: string;
  patientName: string;
  patientContact: string;
  guardianName: string;
  guardianPhone: string;
  age: number;
  gender: string;
  address: string;
  admissionDate: string;
  status: 'Active' | 'Discharged' | 'Critical' | 'Stable';
  department: string;
  lastVisit: string;
  emergencyContact: string;
  bloodGroup: string;
  avatar?: string;
}

interface StatsCard {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

const PatientListPage: React.FC = () => {
 const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatients, setSelectedPatients] = useState<number[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<keyof Patient>('patientName');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showModal, setShowModal] = useState(false); // Modal state


  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const patients: Patient[] = [
    {
      id: 1,
      patientId: 'CIT/PID1002',
      patientName: 'Ravi Kumar',
      patientContact: '9876543211',
      guardianName: 'Sameer Kumar',
      guardianPhone: '9876543210',
      age: 34,
      gender: 'Male',
      address: '123, Green Avenue, Sector 45, New Delhi - 110045',
      admissionDate: '2025-07-09',
      status: 'Active',
      department: 'Cardiology',
      lastVisit: '2025-07-08',
      emergencyContact: '9876543212',
      bloodGroup: 'B+',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      patientId: 'CIT/PID1005',
      patientName: 'Raman Bhalla',
      patientContact: '7458965236',
      guardianName: 'Ram Bhalla',
      guardianPhone: '7458965237',
      age: 27,
      gender: 'Male',
      address: 'East Malabar Hills, Mumbai - 400006',
      admissionDate: '2025-07-08',
      status: 'Stable',
      department: 'Neurology',
      lastVisit: '2025-07-07',
      emergencyContact: '7458965238',
      bloodGroup: 'A+',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      patientId: 'CIT/PID1001',
      patientName: 'Rajesh Kumar',
      patientContact: '9876543210',
      guardianName: 'Suresh Kumar',
      guardianPhone: '9876501234',
      age: 35,
      gender: 'Male',
      address: '45, Sector 12, Rohini, Mumbai - 400067',
      admissionDate: '2025-07-08',
      status: 'Critical',
      department: 'Emergency',
      lastVisit: '2025-07-09',
      emergencyContact: '9876501235',
      bloodGroup: 'O-',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      patientId: 'CIT/PID1003',
      patientName: 'Priya Sharma',
      patientContact: '8765432109',
      guardianName: 'Vikram Sharma',
      guardianPhone: '8765432110',
      age: 29,
      gender: 'Female',
      address: '78, Park Street, Kolkata - 700016',
      admissionDate: '2025-07-07',
      status: 'Discharged',
      department: 'Orthopedics',
      lastVisit: '2025-07-06',
      emergencyContact: '8765432111',
      bloodGroup: 'AB+',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c64c6e0e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      patientId: 'CIT/PID1004',
      patientName: 'Anjali Patel',
      patientContact: '7654321098',
      guardianName: 'Mahesh Patel',
      guardianPhone: '7654321099',
      age: 42,
      gender: 'Female',
      address: '156, Ring Road, Ahmedabad - 380001',
      admissionDate: '2025-07-06',
      status: 'Active',
      department: 'Pediatrics',
      lastVisit: '2025-07-05',
      emergencyContact: '7654321100',
      bloodGroup: 'O+',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const statsCards: StatsCard[] = [
    {
      title: 'Total Patients',
      value: '1,284',
      change: '+12.5%',
      changeType: 'increase',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Cases',
      value: '856',
      change: '+8.2%',
      changeType: 'increase',
      icon: <Activity className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'Critical Cases',
      value: '23',
      change: '-2.1%',
      changeType: 'decrease',
      icon: <AlertCircle className="w-6 h-6" />,
      color: 'bg-red-500'
    },
    {
      title: 'Discharged Today',
      value: '45',
      change: '+15.3%',
      changeType: 'increase',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-purple-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Stable': return 'bg-green-100 text-green-800 border-green-200';
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Discharged': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <Activity className="w-3 h-3" />;
      case 'Stable': return <CheckCircle className="w-3 h-3" />;
      case 'Critical': return <AlertCircle className="w-3 h-3" />;
      case 'Discharged': return <Clock className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedPatients(filteredPatients.map(p => p.id));
    } else {
      setSelectedPatients([]);
    }
  };

  const handleSelectPatient = (patientId: number, checked: boolean) => {
    if (checked) {
      setSelectedPatients([...selectedPatients, patientId]);
    } else {
      setSelectedPatients(selectedPatients.filter(id => id !== patientId));
    }
  };

  const handleSort = (field: keyof Patient) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredPatients = useMemo(() => {
    const filtered = patients.filter(patient => {
      const matchesSearch = patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           patient.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           patient.patientContact.includes(searchTerm);
      
      const matchesStatus = statusFilter === 'All' || patient.status === statusFilter;
      const matchesDepartment = departmentFilter === 'All' || patient.department === departmentFilter;
      
      return matchesSearch && matchesStatus && matchesDepartment;
    });

    // Sort
    filtered.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [patients, searchTerm, statusFilter, departmentFilter, sortField, sortDirection]);

  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">City Hospital</h1>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <h2 className="text-lg font-semibold text-gray-700">Patient Management</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Dr. Sarah Wilson</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm  font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-xs font-medium ${
                      card.changeType === 'increase' ? 'text-green-600' : 
                      card.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {card.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`${card.color} p-3 rounded-xl text-white`}>
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Action Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-semibold text-gray-900">Patient List</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {filteredPatients.length} patients
                </span>
              </div>
              <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 shadow-sm">
                  <Upload className="w-4 h-4" />
                  <span>Import</span>
                </button>
                  <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-sm"
      >
        <Plus className="w-4 h-4" />
        <span>Add Patient</span>
      </button>

      {/* Add Patient Modal */}
    {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative animate-fade-in">
      
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none"
      >
        &times;
      </button>

      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        🏥 Add New Patient
      </h3>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter patient name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter phone number" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input type="number" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter age" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="e.g. A+, B-" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guardian Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter guardian name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guardian Phone</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Enter guardian phone" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500" rows={2} placeholder="Enter full address"></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200 shadow"
          >
            ➕ Add Patient
          </button>
        </div>
      </form>
    </div>
  </div>
)}

              
              
              </div>
            </div>
          </div>

          

          {/* Filters and Search */}
          <div className="p-6 border-b  border-gray-200 bg-gray-50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Stable">Stable</option>
                  <option value="Critical">Critical</option>
                  <option value="Discharged">Discharged</option>
                </select>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Departments</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>More Filters</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="p-4 bg-gray-50  border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                CSV
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                Excel
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                <FileText className="w-3 h-3" />
                <span>PDF</span>
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors flex items-center space-x-1">
                <Printer className="w-3 h-3" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={selectedPatients.length === filteredPatients.length && filteredPatients.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('patientId')}
                  >
                    Patient ID
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('patientName')}
                  >
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guardian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Visit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedPatients.includes(patient.id)}
                        onChange={(e) => handleSelectPatient(patient.id, e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{patient.patientId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                          {patient.patientName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{patient.patientName}</div>
                          <div className="text-sm text-gray-500">{patient.age} years, {patient.gender}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span>{patient.patientContact}</span>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="truncate max-w-xs">{patient.address}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.guardianName}</div>
                      <div className="text-sm text-gray-500 flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span>{patient.guardianPhone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Blood: {patient.bloodGroup}</div>
                      <div className="text-sm text-gray-500">Emergency: {patient.emergencyContact}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(patient.status)}`}>
                        {getStatusIcon(patient.status)}
                        <span className="ml-1">{patient.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{patient.lastVisit}</div>
                      <div className="text-sm text-gray-500">Admitted: {patient.admissionDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 transition-colors p-1 rounded hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 transition-colors p-1 rounded hover:bg-green-50">
                          <History className="w-4 h-4" />
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900 transition-colors p-1 rounded hover:bg-indigo-50">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors p-1 rounded hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 transition-colors p-1 rounded hover:bg-gray-50">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">
                Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredPatients.length)} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredPatients.length)} of {filteredPatients.length} entries
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 border rounded text-sm transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default PatientListPage;