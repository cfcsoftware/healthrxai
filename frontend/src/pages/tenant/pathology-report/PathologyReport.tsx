import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  Edit, 
  Trash2, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  User,
  Activity,
  TrendingUp,
  Eye,
  Send,
  Printer,
  Share2,
  RefreshCw,
  BarChart3,
  TestTube,
  AlertCircle,
  Target
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

const PathologyReportsPage: React.FC = () => {
  const [reports, setReports] = useState<PathologyReport[]>([
    {
      id: "RPT-2025-001",
      patientId: "PAT-001",
      patientName: "Rajesh Kumar",
      age: 45,
      gender: "Male",
      phoneNumber: "+91 9876543210",
      testType: "Complete Blood Count (CBC)",
      testCategory: "Hematology",
      orderDate: "2025-07-10",
      collectionDate: "2025-07-10",
      reportDate: "2025-07-11",
      status: "completed",
      priority: "normal",
      referredBy: "Dr. Sharma",
      department: "Internal Medicine",
      technician: "Lab Tech A",
      pathologist: "Dr. Patel",
      totalAmount: 800,
      paidAmount: 800,
      paymentStatus: "paid",
      criticalValues: false,
      notes: "Routine checkup"
    },
    {
      id: "RPT-2025-002",
      patientId: "PAT-002",
      patientName: "Priya Singh",
      age: 32,
      gender: "Female",
      phoneNumber: "+91 9876543211",
      testType: "Liver Function Test",
      testCategory: "Biochemistry",
      orderDate: "2025-07-09",
      collectionDate: "2025-07-09",
      reportDate: "2025-07-10",
      status: "delivered",
      priority: "urgent",
      referredBy: "Dr. Gupta",
      department: "Gastroenterology",
      technician: "Lab Tech B",
      pathologist: "Dr. Verma",
      totalAmount: 1200,
      paidAmount: 600,
      paymentStatus: "partial",
      criticalValues: true,
      notes: "Elevated liver enzymes"
    },
    {
      id: "RPT-2025-003",
      patientId: "PAT-003",
      patientName: "Mohammed Ali",
      age: 28,
      gender: "Male",
      phoneNumber: "+91 9876543212",
      testType: "Thyroid Profile",
      testCategory: "Endocrinology",
      orderDate: "2025-07-11",
      collectionDate: "2025-07-11",
      reportDate: "",
      status: "in-progress",
      priority: "normal",
      referredBy: "Dr. Rao",
      department: "Endocrinology",
      technician: "Lab Tech C",
      pathologist: "Dr. Iyer",
      totalAmount: 1500,
      paidAmount: 0,
      paymentStatus: "pending",
      criticalValues: false,
      notes: "Suspected hyperthyroidism"
    },
    {
      id: "RPT-2025-004",
      patientId: "PAT-004",
      patientName: "Sunita Devi",
      age: 55,
      gender: "Female",
      phoneNumber: "+91 9876543213",
      testType: "Cardiac Enzymes",
      testCategory: "Cardiology",
      orderDate: "2025-07-11",
      collectionDate: "2025-07-11",
      reportDate: "",
      status: "critical",
      priority: "stat",
      referredBy: "Dr. Khanna",
      department: "Cardiology",
      technician: "Lab Tech D",
      pathologist: "Dr. Mehta",
      totalAmount: 2000,
      paidAmount: 2000,
      paymentStatus: "paid",
      criticalValues: true,
      notes: "Chest pain evaluation - URGENT"
    },
    {
      id: "RPT-2025-005",
      patientId: "PAT-005",
      patientName: "Arjun Reddy",
      age: 40,
      gender: "Male",
      phoneNumber: "+91 9876543214",
      testType: "Urine Analysis",
      testCategory: "Clinical Pathology",
      orderDate: "2025-07-08",
      collectionDate: "2025-07-08",
      reportDate: "",
      status: "pending",
      priority: "normal",
      referredBy: "Dr. Joshi",
      department: "Urology",
      technician: "Lab Tech E",
      pathologist: "Dr. Nair",
      totalAmount: 500,
      paidAmount: 500,
      paymentStatus: "paid",
      criticalValues: false,
      notes: "Routine screening"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [sortBy, setSortBy] = useState('orderDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedReports, setSelectedReports] = useState<string[]>([]);

  const statuses = ['all', 'pending', 'in-progress', 'completed', 'delivered', 'critical'];
  const categories = ['all', ...Array.from(new Set(reports.map(r => r.testCategory)))];
  const priorities = ['all', 'normal', 'urgent', 'stat'];

  const filteredReports = useMemo(() => {
    let filtered = reports.filter(report => {
      const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           report.testType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           report.referredBy.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus;
      const matchesCategory = selectedCategory === 'all' || report.testCategory === selectedCategory;
      const matchesPriority = selectedPriority === 'all' || report.priority === selectedPriority;
      
      return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
    });

    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof PathologyReport];
      let bValue: any = b[sortBy as keyof PathologyReport];
      
      if (sortBy === 'orderDate' || sortBy === 'collectionDate') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [reports, searchTerm, selectedStatus, selectedCategory, selectedPriority, sortBy, sortOrder]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'delivered': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'in-progress': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'pending': return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'stat': return 'text-red-600 bg-red-50 border-red-200';
      case 'urgent': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'normal': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'delivered': return <Send className="w-4 h-4" />;
      case 'in-progress': return <RefreshCw className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleSelectReport = (id: string) => {
    setSelectedReports(prev => 
      prev.includes(id) 
        ? prev.filter(reportId => reportId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedReports.length === filteredReports.length) {
      setSelectedReports([]);
    } else {
      setSelectedReports(filteredReports.map(r => r.id));
    }
  };

  const totalReports = reports.length;
  const pendingReports = reports.filter(r => r.status === 'pending').length;
  const criticalReports = reports.filter(r => r.status === 'critical').length;
  const completedToday = reports.filter(r => r.reportDate === '2025-07-11').length;
  const totalRevenue = reports.reduce((sum, report) => sum + report.totalAmount, 0);

  return (
    <AdminLayout>

    
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <TestTube className="w-8 h-8 text-purple-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Pathology Reports</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                New Report
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Reports</p>
                <p className="text-2xl font-bold text-gray-900">{totalReports}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{pendingReports}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Critical</p>
                <p className="text-2xl font-bold text-gray-900">{criticalReports}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Completed Today</p>
                <p className="text-2xl font-bold text-gray-900">{completedToday}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>
                    {priority === 'all' ? 'All Priorities' : priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="orderDate">Sort by Order Date</option>
                <option value="patientName">Sort by Patient Name</option>
                <option value="status">Sort by Status</option>
                <option value="priority">Sort by Priority</option>
                <option value="totalAmount">Sort by Amount</option>
              </select>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <TrendingUp className={`w-4 h-4 ${sortOrder === 'desc' ? 'rotate-180' : ''} transition-transform`} />
                <span className="ml-2">{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedReports.length === filteredReports.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Details</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedReports.includes(report.id)}
                        onChange={() => handleSelectReport(report.id)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{report.id}</div>
                      <div className="text-sm text-gray-500">{report.patientId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{report.patientName}</div>
                          <div className="text-sm text-gray-500">{report.age}Y, {report.gender}</div>
                          <div className="text-sm text-gray-500">{report.phoneNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{report.testType}</div>
                      <div className="text-sm text-gray-500">{report.testCategory}</div>
                      <div className="text-sm text-gray-500">By: {report.referredBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                          Order: {report.orderDate}
                        </div>
                        <div className="flex items-center mb-1">
                          <TestTube className="w-4 h-4 mr-1 text-gray-400" />
                          Collection: {report.collectionDate}
                        </div>
                        {report.reportDate && (
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1 text-gray-400" />
                            Report: {report.reportDate}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(report.status)}`}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1 capitalize">{report.status.replace('-', ' ')}</span>
                      </span>
                      {report.criticalValues && (
                        <div className="mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Critical Values
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(report.priority)}`}>
                        <Target className="w-3 h-3 mr-1" />
                        {report.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">₹{report.totalAmount}</div>
                      <div className="text-sm text-gray-500">
                        Paid: ₹{report.paidAmount}
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        report.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                        report.paymentStatus === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {report.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                          title="View Report"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Print Report"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-green-600 hover:text-green-800 transition-colors"
                          title="Share Report"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                          title="Edit Report"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Delete Report"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredReports.length === 0 && (
            <div className="text-center py-12">
              <TestTube className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No pathology reports found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing {filteredReports.length} of {reports.length} reports
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 bg-purple-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default PathologyReportsPage;