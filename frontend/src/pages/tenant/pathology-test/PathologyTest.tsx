import React, { useState, useMemo } from 'react';
import {
  Search,
  Download,
  Plus,
  Edit,
  Trash2,
  TestTube,
  Eye,
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface PathologyReport {
  id: string;
  patientId: string;
  patientName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  phoneNumber: string;
  testType: string;
  testCategory: string;
  orderDate: string;
  collectionDate: string;
  reportDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'delivered' | 'critical';
  priority: 'normal' | 'urgent' | 'stat';
  referredBy: string;
  department: string;
  technician: string;
  pathologist: string;
  totalAmount: number;
  paidAmount: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  criticalValues: boolean;
  reportUrl?: string;
  notes?: string;
}

const PathologyTestPage: React.FC = () => {
  const [reports] = useState<PathologyReport[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory] = useState('all');
  const [selectedPriority] = useState('all');
  const [sortBy] = useState('orderDate');
  const [sortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredReports = useMemo(() => {
    const filtered = reports.filter((report) => {
      const matchesSearch =
        report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.testType.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus;
      const matchesCategory = selectedCategory === 'all' || report.testCategory === selectedCategory;
      const matchesPriority = selectedPriority === 'all' || report.priority === selectedPriority;
      return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
    });

    filtered.sort((a, b) => {
      let aValue = a[sortBy as keyof PathologyReport];
      let bValue = b[sortBy as keyof PathologyReport];

      if (sortBy.includes('Date')) {
        aValue = new Date(aValue as string );
        bValue = new Date(bValue as string);
      }

      return sortOrder === 'asc'
        ? aValue < bValue
          ? -1
          : 1
        : aValue > bValue
        ? -1
        : 1;
    });

    return filtered;
  }, [reports, searchTerm, selectedStatus, selectedCategory, selectedPriority, sortBy, sortOrder]);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <TestTube className="w-6 h-6 text-purple-600 mr-2" /> Pathology Test
          </h1>
          <div className="flex gap-2">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Plus className="w-4 h-4 mr-2" /> New Report
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
              <Download className="w-4 h-4 mr-2" /> Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Add your stat cards here */}
        </div>

        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="delivered">Delivered</option>
              <option value="critical">Critical</option>
            </select>
            {/* Add more filters similarly */}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Report ID</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Patient</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Test</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Dates</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Status</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Priority</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 text-sm text-gray-800">{report.id}</td>
                    <td className="p-4 text-sm text-gray-800">{report.patientName}</td>
                    <td className="p-4 text-sm text-gray-800">{report.testType}</td>
                    <td className="p-4 text-sm text-gray-800">{report.orderDate}</td>
                    <td className="p-4 text-sm text-gray-800">{report.status}</td>
                    <td className="p-4 text-sm text-gray-800">{report.priority}</td>
                    <td className="p-4 flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    No reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PathologyTestPage;
