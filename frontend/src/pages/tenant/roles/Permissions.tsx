import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Shield, 
  Users, 
  Settings, 
  ChevronDown, 
  ChevronRight,
  Download,
  MoreVertical,
  Copy,
  FileText,
  Calendar,
  Activity
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

const RolePermissionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [expandedRoles, setExpandedRoles] = useState(new Set([1, 2, 3]));
  const [filterStatus, setFilterStatus] = useState('all');

  const roles = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with administrative privileges',
      userCount: 3,
      status: 'active',
      lastModified: '2024-01-15',
      permissions: [
        { id: 'view-dashboard', name: 'VIEW-DASHBOARD', category: 'Dashboard' },
        { id: 'patient-list', name: 'PATIENT-LIST', category: 'Patient' },
        { id: 'patient-add', name: 'PATIENT-ADD', category: 'Patient' },
        { id: 'patient-edit', name: 'PATIENT-EDIT', category: 'Patient' },
        { id: 'patient-delete', name: 'PATIENT-DELETE', category: 'Patient' },
        { id: 'user-management', name: 'USER-MANAGEMENT', category: 'System' },
        { id: 'system-settings', name: 'SYSTEM-SETTINGS', category: 'System' }
      ]
    },
    {
      id: 2,
      name: 'Doctor',
      description: 'Medical professional with patient care permissions',
      userCount: 12,
      status: 'active',
      lastModified: '2024-01-10',
      permissions: [
        { id: 'view-dashboard', name: 'VIEW-DASHBOARD', category: 'Dashboard' },
        { id: 'patient-list', name: 'PATIENT-LIST', category: 'Patient' },
        { id: 'patient-view', name: 'PATIENT-VIEW', category: 'Patient' },
        { id: 'appointment-list', name: 'APPOINTMENT-LIST', category: 'Appointment' },
        { id: 'appointment-edit', name: 'APPOINTMENT-EDIT', category: 'Appointment' },
        { id: 'prescription-create', name: 'PRESCRIPTION-CREATE', category: 'Medical' }
      ]
    },
    {
      id: 3,
      name: 'Receptionist',
      description: 'Front desk operations and patient registration',
      userCount: 8,
      status: 'active',
      lastModified: '2024-01-08',
      permissions: [
        { id: 'view-dashboard', name: 'VIEW-DASHBOARD', category: 'Dashboard' },
        { id: 'patient-list', name: 'PATIENT-LIST', category: 'Patient' },
        { id: 'patient-add', name: 'PATIENT-ADD', category: 'Patient' },
        { id: 'patient-edit', name: 'PATIENT-EDIT', category: 'Patient' },
        { id: 'patient-view', name: 'PATIENT-VIEW', category: 'Patient' },
        { id: 'appointment-schedule', name: 'APPOINTMENT-SCHEDULE', category: 'Appointment' }
      ]
    },
    {
      id: 4,
      name: 'Manager',
      description: 'Department management and reporting access',
      userCount: 5,
      status: 'inactive',
      lastModified: '2024-01-05',
      permissions: []
    },
    {
      id: 5,
      name: 'Nurse',
      description: 'Patient care and medical assistance permissions',
      userCount: 15,
      status: 'active',
      lastModified: '2024-01-12',
      permissions: [
        { id: 'view-dashboard', name: 'VIEW-DASHBOARD', category: 'Dashboard' },
        { id: 'patient-list', name: 'PATIENT-LIST', category: 'Patient' },
        { id: 'patient-view', name: 'PATIENT-VIEW', category: 'Patient' },
        { id: 'appointment-list', name: 'APPOINTMENT-LIST', category: 'Appointment' },
        { id: 'appointment-edit', name: 'APPOINTMENT-EDIT', category: 'Appointment' },
        { id: 'medical-records', name: 'MEDICAL-RECORDS', category: 'Medical' }
      ]
    },
    {
      id: 6,
      name: 'Pharmacist',
      description: 'Pharmacy operations and medication management',
      userCount: 4,
      status: 'active',
      lastModified: '2024-01-14',
      permissions: [
        { id: 'view-dashboard', name: 'VIEW-DASHBOARD', category: 'Dashboard' },
        { id: 'pharmacy-bill-list', name: 'PHARMACY-BILL-LIST', category: 'Pharmacy' },
        { id: 'pharmacy-bill-add', name: 'PHARMACY-BILL-ADD', category: 'Pharmacy' },
        { id: 'pharmacy-bill-edit', name: 'PHARMACY-BILL-EDIT', category: 'Pharmacy' },
        { id: 'pharmacy-bill-view', name: 'PHARMACY-BILL-VIEW', category: 'Pharmacy' },
        { id: 'inventory-management', name: 'INVENTORY-MANAGEMENT', category: 'Pharmacy' }
      ]
    }
  ];
  interface Permission {
  id: string;
  name: string;
  category: string;
}

  const filteredRoles = useMemo(() => {
    return roles.filter(role => {
      const matchesSearch = role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           role.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || role.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, filterStatus]);

  const handleRoleSelection = (roleId) => {
    setSelectedRoles(prev => 
      prev.includes(roleId) 
        ? prev.filter(id => id !== roleId)
        : [...prev, roleId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRoles.length === filteredRoles.length) {
      setSelectedRoles([]);
    } else {
      setSelectedRoles(filteredRoles.map(role => role.id));
    }
  };

  const toggleExpanded = (roleId) => {
    setExpandedRoles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(roleId)) {
        newSet.delete(roleId);
      } else {
        newSet.add(roleId);
      }
      return newSet;
    });
  };

  const getPermissionsByCategory = (permissions) => {
    const categories = {};
    permissions.forEach(permission => {
      if (!categories[permission.category]) {
        categories[permission.category] = [];
      }
      categories[permission.category].push(permission);
    });
    return categories;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Dashboard': return <Activity className="w-4 h-4" />;
      case 'Patient': return <Users className="w-4 h-4" />;
      case 'Appointment': return <Calendar className="w-4 h-4" />;
      case 'Medical': return <FileText className="w-4 h-4" />;
      case 'Pharmacy': return <Shield className="w-4 h-4" />;
      case 'System': return <Settings className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Role & Permission Management</h1>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Assign Role & Permission
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search roles..."
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
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      checked={selectedRoles.length === filteredRoles.length && filteredRoles.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRoles.map((role) => (
                  <React.Fragment key={role.id}>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          checked={selectedRoles.includes(role.id)}
                          onChange={() => handleRoleSelection(role.id)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {role.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleExpanded(role.id)}
                            className="mr-2 p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedRoles.has(role.id) ? (
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            )}
                          </button>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{role.name}</div>
                            <div className="text-sm text-gray-500">{role.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(role.status)}`}>
                          {role.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-1" />
                          {role.userCount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {role.permissions.length > 0 ? (
                          <span className="text-blue-600 font-medium">{role.permissions.length} permissions</span>
                        ) : (
                          <span className="text-gray-500">No permissions assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {role.lastModified}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900 p-1 rounded hover:bg-gray-50">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Row */}
                    {expandedRoles.has(role.id) && role.permissions.length > 0 && (
                      <tr className="bg-gray-50">
                        <td colSpan={8} className="px-6 py-4">
                          <div className="space-y-4">
                            {Object.entries(getPermissionsByCategory(role.permissions)).map(([category, permissions]) => (
                              <div key={category} className="border-l-4 border-blue-500 pl-4">
                                <div className="flex items-center space-x-2 mb-2">
                                  {getCategoryIcon(category)}
                                  <h4 className="text-sm font-semibold text-gray-900">{category}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                 {(permissions as Permission[]).map((permission) => (
  <span
    key={permission.id}
    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
  >
    {permission.name}
  </span>
))}

                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Total Roles</p>
                <p className="text-2xl font-bold text-gray-900">{roles.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Active Roles</p>
                <p className="text-2xl font-bold text-gray-900">{roles.filter(r => r.status === 'active').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{roles.reduce((sum, role) => sum + role.userCount, 0)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Permissions</p>
                <p className="text-2xl font-bold text-gray-900">{roles.reduce((sum, role) => sum + role.permissions.length, 0)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default RolePermissionPage;