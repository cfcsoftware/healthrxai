import React, { useState, useMemo } from 'react';
import { Search, Plus, Edit, Trash2,  X, User } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface Role {
  id: string;
  roleId: string;
  roleName: string;
  description?: string;
  permissions?: string[];
  createdDate: string;
  isActive: boolean;
}

const RolesManagement: React.FC = () => {
  const [roles] = useState<Role[]>([
    {
      id: '1',
      roleId: 'ROLE-0001',
      roleName: 'Admin',
      description: 'Full system access and administrative privileges',
      permissions: ['create', 'read', 'update', 'delete', 'manage_users', 'system_settings'],
      createdDate: '2024-01-15',
      isActive: true
    },
    {
      id: '2',
      roleId: 'ROLE-0002',
      roleName: 'Doctor',
      description: 'Medical staff with patient care responsibilities',
      permissions: ['read', 'update', 'patient_care', 'prescriptions'],
      createdDate: '2024-01-16',
      isActive: true
    },
    {
      id: '3',
      roleId: 'ROLE-0003',
      roleName: 'Receptionist',
      description: 'Front desk operations and patient registration',
      permissions: ['read', 'patient_registration', 'appointments'],
      createdDate: '2024-01-17',
      isActive: true
    },
    {
      id: '4',
      roleId: 'ROLE-0004',
      roleName: 'Manager',
      description: 'Department management and oversight',
      permissions: ['read', 'update', 'manage_department', 'reports'],
      createdDate: '2024-01-18',
      isActive: true
    },
    {
      id: '5',
      roleId: 'ROLE-0005',
      roleName: 'Nurse',
      description: 'Patient care and medical assistance',
      permissions: ['read', 'update', 'patient_care', 'medications'],
      createdDate: '2024-01-19',
      isActive: true
    },
    {
      id: '6',
      roleId: 'ROLE-0006',
      roleName: 'Pharmacist',
      description: 'Medication dispensing and pharmacy management',
      permissions: ['read', 'update', 'pharmacy', 'medications'],
      createdDate: '2024-01-20',
      isActive: true
    },
    {
      id: '7',
      roleId: 'ROLE-0007',
      roleName: 'Pathologist',
      description: 'Laboratory testing and diagnostic services',
      permissions: ['read', 'update', 'lab_tests', 'diagnostics'],
      createdDate: '2024-01-21',
      isActive: true
    },
    {
      id: '8',
      roleId: 'ROLE-0008',
      roleName: 'Radiologist',
      description: 'Medical imaging and radiology services',
      permissions: ['read', 'update', 'radiology', 'imaging'],
      createdDate: '2024-01-22',
      isActive: true
    },
    {
      id: '9',
      roleId: 'ROLE-0009',
      roleName: 'Accountant',
      description: 'Financial operations and billing management',
      permissions: ['read', 'update', 'billing', 'financial_reports'],
      createdDate: '2024-01-23',
      isActive: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const filteredRoles = useMemo(() => {
    return roles.filter(role => 
      role.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.roleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (role.description && role.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [roles, searchTerm]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRoles(filteredRoles.map(role => role.id));
    } else {
      setSelectedRoles([]);
    }
  };

  const handleSelectRole = (roleId: string, checked: boolean) => {
    if (checked) {
      setSelectedRoles(prev => [...prev, roleId]);
    } else {
      setSelectedRoles(prev => prev.filter(id => id !== roleId));
    }
  };

  const handleEdit = (role: Role) => {
    setEditingRole(role);
    setShowAddModal(true);
  };

  const handleDelete = (roleId: string) => {
    // In a real app, this would make an API call
    console.log('Deleting role:', roleId);
  };

  const handleExport = (format: string) => {
    // In a real app, this would export the data
    console.log('Exporting as:', format);
  };

  const allSelected = selectedRoles.length === filteredRoles.length && filteredRoles.length > 0;
  const someSelected = selectedRoles.length > 0 && selectedRoles.length < filteredRoles.length;

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Roles</h1>
              <span className="text-sm text-gray-500">Welcome! cityhospital</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 p-2 rounded-full">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Role</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleExport('copy')}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleExport('csv')}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    CSV
                  </button>
                  <button
                    onClick={() => handleExport('excel')}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    Excel
                  </button>
                  <button
                    onClick={() => handleExport('pdf')}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    PDF
                  </button>
                  <button
                    onClick={() => handleExport('print')}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    Print
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left py-4 px-6 font-medium">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      ref={input => {
                        if (input) input.indeterminate = someSelected;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-white rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </th>
                  <th className="text-left py-4 px-6 font-medium">Role ID</th>
                  <th className="text-left py-4 px-6 font-medium">Role</th>
                  <th className="text-left py-4 px-6 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRoles.map((role, index) => (
                  <tr 
                    key={role.id} 
                    className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role.id)}
                        onChange={(e) => handleSelectRole(role.id, e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">{role.roleId}</td>
                    <td className="py-4 px-6 text-gray-900">{role.roleName}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleEdit(role)}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span className="text-sm">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="text-sm">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {filteredRoles.length} of {roles.length} roles
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredRoles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No roles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Add/Edit Role Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingRole ? 'Edit Role' : 'Add New Role'}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingRole(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role ID
                </label>
                <input
                  type="text"
                  defaultValue={editingRole?.roleId || ''}
                  placeholder="ROLE-0010"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role Name
                </label>
                <input
                  type="text"
                  defaultValue={editingRole?.roleName || ''}
                  placeholder="Enter role name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  defaultValue={editingRole?.description || ''}
                  placeholder="Enter role description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isActive"
                  defaultChecked={editingRole?.isActive ?? true}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isActive" className="text-sm text-gray-700">
                  Active Role
                </label>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingRole(null);
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingRole ? 'Update Role' : 'Add Role'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default RolesManagement;