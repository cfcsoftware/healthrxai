import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Building2, 
  Users, 
  Activity,
  ChevronDown, 
  ChevronRight,
  Download,
  Copy,
  FileText,
  Stethoscope,
  Pill,
  TestTube,
  Zap,
  Heart,
  User,
  Bed,
  Menu,
  Bell,
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

const DepartmentListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [expandedDepartments, setExpandedDepartments] = useState(new Set());
  const [filterStatus, setFilterStatus] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const departments = [
    {
      id: 1,
      name: 'OPD',
      description: 'Out-patient Department',
      fullDescription: 'Handles all outpatient consultations and examinations',
      status: 'active',
      headOfDepartment: 'Dr. Sarah Johnson',
      staffCount: 25,
      patientCount: 1250,
      established: '2020-01-15',
      location: 'Ground Floor, Block A',
      budget: '$125,000',
      equipment: 15,
      specialties: ['General Medicine', 'Consultation']
    },
    {
      id: 2,
      name: 'IPD',
      description: 'In-patient Department',
      fullDescription: 'Manages all admitted patients and inpatient care services',
      status: 'active',
      headOfDepartment: 'Dr. Michael Chen',
      staffCount: 45,
      patientCount: 89,
      established: '2020-01-15',
      location: 'Floors 2-4, Block B',
      budget: '$320,000',
      equipment: 35,
      specialties: ['Critical Care', 'Patient Management']
    },
    {
      id: 3,
      name: 'Pharmacy',
      description: 'Pharmacy Department',
      fullDescription: 'Pharmaceutical services and medication management',
      status: 'active',
      headOfDepartment: 'Dr. Emily Rodriguez',
      staffCount: 12,
      patientCount: 0,
      established: '2020-02-01',
      location: 'Ground Floor, Block C',
      budget: '$85,000',
      equipment: 8,
      specialties: ['Medication Dispensing', 'Drug Information']
    },
    {
      id: 4,
      name: 'Pathology',
      description: 'Pathology Department',
      fullDescription: 'Laboratory services and diagnostic testing',
      status: 'active',
      headOfDepartment: 'Dr. David Kim',
      staffCount: 18,
      patientCount: 0,
      established: '2020-03-01',
      location: 'Basement, Block A',
      budget: '$150,000',
      equipment: 22,
      specialties: ['Blood Tests', 'Histopathology', 'Microbiology']
    },
    {
      id: 5,
      name: 'Radiology',
      description: 'Radiology Department',
      fullDescription: 'Medical imaging and radiological services',
      status: 'active',
      headOfDepartment: 'Dr. Lisa Wang',
      staffCount: 15,
      patientCount: 0,
      established: '2020-04-01',
      location: 'First Floor, Block D',
      budget: '$200,000',
      equipment: 12,
      specialties: ['X-Ray', 'MRI', 'CT Scan', 'Ultrasound']
    },
    {
      id: 6,
      name: 'Surgery',
      description: 'Surgery Department',
      fullDescription: 'Surgical procedures and operative care',
      status: 'active',
      headOfDepartment: 'Dr. Robert Thompson',
      staffCount: 30,
      patientCount: 45,
      established: '2020-05-01',
      location: 'Third Floor, Block E',
      budget: '$400,000',
      equipment: 28,
      specialties: ['General Surgery', 'Orthopedic', 'Cardiac Surgery']
    }
  ];


  const filteredDepartments = useMemo(() => {
    return departments.filter(dept => {
      const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dept.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || dept.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, filterStatus]);

  const handleDepartmentSelection = (deptId) => {
    setSelectedDepartments(prev => 
      prev.includes(deptId) 
        ? prev.filter(id => id !== deptId)
        : [...prev, deptId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDepartments.length === filteredDepartments.length) {
      setSelectedDepartments([]);
    } else {
      setSelectedDepartments(filteredDepartments.map(dept => dept.id));
    }
  };

  const toggleExpanded = (deptId) => {
    setExpandedDepartments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(deptId)) {
        newSet.delete(deptId);
      } else {
        newSet.add(deptId);
      }
      return newSet;
    });
  };

  const getDepartmentIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'opd': return <Stethoscope className="w-5 h-5" />;
      case 'ipd': return <Bed className="w-5 h-5" />;
      case 'pharmacy': return <Pill className="w-5 h-5" />;
      case 'pathology': return <TestTube className="w-5 h-5" />;
      case 'radiology': return <Zap className="w-5 h-5" />;
      case 'surgery': return <Heart className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };


  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
     

      {/* Main Content */}
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <h1 className="text-lg font-semibold">Department List</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome! cityhospital</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                Add Department
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {/* Controls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search departments..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select 
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <FileText className="w-4 h-4 mr-2" />
                    CSV
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    Excel
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF
                  </button>
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <Download className="w-4 h-4 mr-2" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        checked={selectedDepartments.length === filteredDepartments.length && filteredDepartments.length > 0}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">#</th>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Department Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredDepartments.map((dept) => (
                    <React.Fragment key={dept.id}>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            checked={selectedDepartments.includes(dept.id)}
                            onChange={() => handleDepartmentSelection(dept.id)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button
                              onClick={() => toggleExpanded(dept.id)}
                              className="mr-2 p-1 hover:bg-gray-100 rounded"
                            >
                              {expandedDepartments.has(dept.id) ? (
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                              )}
                            </button>
                            <span className="text-sm font-medium text-gray-900">{dept.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="text-blue-600">
                              {getDepartmentIcon(dept.name)}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                              <div className="text-xs text-gray-500">{dept.headOfDepartment}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{dept.description}</div>
                          <div className="text-xs text-gray-500 mt-1">{dept.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Row */}
                      {expandedDepartments.has(dept.id) && (
                        <tr className="bg-gray-50">
                          <td colSpan={5} className="px-6 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 flex items-center">
                                  <Users className="w-4 h-4 mr-2" />
                                  Staff Information
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Head of Department:</span>
                                    <span className="font-medium">{dept.headOfDepartment}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Staff Count:</span>
                                    <span className="font-medium">{dept.staffCount}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Current Patients:</span>
                                    <span className="font-medium">{dept.patientCount}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 flex items-center">
                                  <Building2 className="w-4 h-4 mr-2" />
                                  Department Details
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Established:</span>
                                    <span className="font-medium">{dept.established}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Location:</span>
                                    <span className="font-medium">{dept.location}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-500">Equipment:</span>
                                    <span className="font-medium">{dept.equipment} units</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900 flex items-center">
                                  <Activity className="w-4 h-4 mr-2" />
                                  Specialties & Budget
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="text-gray-500">Annual Budget:</span>
                                    <span className="font-medium ml-2 text-green-600">{dept.budget}</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Specialties:</span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {dept.specialties.map((specialty, index) => (
                                        <span 
                                          key={index}
                                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                          {specialty}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-700">
                Showing 1 to 6 of 6 entries
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
              </div>
            </div>
          </div>

        
        </main>
      </div>
    </div>
    </AdminLayout>
  );
};

export default DepartmentListPage;