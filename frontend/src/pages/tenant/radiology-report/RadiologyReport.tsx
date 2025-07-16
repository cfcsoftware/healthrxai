import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar,  FileText, AlertCircle, CheckCircle, Clock, Plus, RefreshCw, Settings, ChevronDown, ChevronRight, X } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

const RadiologyReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedModality, setSelectedModality] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedReports, setSelectedReports] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [showReportDetail, setShowReportDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const [reports] = useState([
    {
      id: 'RPT-2024-001',
      patientName: 'John Anderson',
      patientId: 'PAT-789123',
      studyDate: '2024-07-14',
      reportDate: '2024-07-14',
      modality: 'CT',
      studyType: 'Chest CT with Contrast',
      radiologist: 'Dr. Sarah Chen',
      status: 'finalized',
      priority: 'routine',
      accessionNumber: 'ACC-2024-001',
      findings: 'No acute findings. Lungs are clear. Heart size normal.',
      impression: 'Normal chest CT examination.',
      department: 'Radiology',
      referringPhysician: 'Dr. Michael Brown',
      age: 45,
      gender: 'Male'
    },
    {
      id: 'RPT-2024-002',
      patientName: 'Emily Rodriguez',
      patientId: 'PAT-456789',
      studyDate: '2024-07-13',
      reportDate: '2024-07-13',
      modality: 'MRI',
      studyType: 'Brain MRI',
      radiologist: 'Dr. James Wilson',
      status: 'pending',
      priority: 'urgent',
      accessionNumber: 'ACC-2024-002',
      findings: 'Study in progress...',
      impression: 'Preliminary findings pending final review.',
      department: 'Radiology',
      referringPhysician: 'Dr. Lisa Johnson',
      age: 32,
      gender: 'Female'
    },
    {
      id: 'RPT-2024-003',
      patientName: 'Robert Taylor',
      patientId: 'PAT-123456',
      studyDate: '2024-07-12',
      reportDate: '2024-07-12',
      modality: 'X-Ray',
      studyType: 'Chest X-Ray',
      radiologist: 'Dr. Maria Garcia',
      status: 'finalized',
      priority: 'routine',
      accessionNumber: 'ACC-2024-003',
      findings: 'Mild cardiomegaly noted. No acute pulmonary findings.',
      impression: 'Borderline cardiomegaly. Recommend follow-up.',
      department: 'Radiology',
      referringPhysician: 'Dr. David Lee',
      age: 58,
      gender: 'Male'
    },
    {
      id: 'RPT-2024-004',
      patientName: 'Jennifer Kim',
      patientId: 'PAT-987654',
      studyDate: '2024-07-11',
      reportDate: '2024-07-11',
      modality: 'Ultrasound',
      studyType: 'Abdominal Ultrasound',
      radiologist: 'Dr. Thomas Anderson',
      status: 'reviewed',
      priority: 'stat',
      accessionNumber: 'ACC-2024-004',
      findings: 'Gallbladder wall thickening with stones present.',
      impression: 'Chronic cholecystitis with cholelithiasis.',
      department: 'Radiology',
      referringPhysician: 'Dr. Anna Martinez',
      age: 42,
      gender: 'Female'
    },
    {
      id: 'RPT-2024-005',
      patientName: 'Michael Davis',
      patientId: 'PAT-555777',
      studyDate: '2024-07-10',
      reportDate: '2024-07-10',
      modality: 'CT',
      studyType: 'Abdomen/Pelvis CT',
      radiologist: 'Dr. Sarah Chen',
      status: 'draft',
      priority: 'routine',
      accessionNumber: 'ACC-2024-005',
      findings: 'Draft report - preliminary findings...',
      impression: 'Under review.',
      department: 'Radiology',
      referringPhysician: 'Dr. Robert Wilson',
      age: 35,
      gender: 'Male'
    }
  ]);

  const statusColors = {
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    pending: 'bg-blue-100 text-blue-800 border-blue-200',
    reviewed: 'bg-purple-100 text-purple-800 border-purple-200',
    finalized: 'bg-green-100 text-green-800 border-green-200'
  };

  const priorityColors = {
    routine: 'bg-gray-100 text-gray-800 border-gray-200',
    urgent: 'bg-orange-100 text-orange-800 border-orange-200',
    stat: 'bg-red-100 text-red-800 border-red-200'
  };

  const modalityColors = {
    'CT': 'bg-blue-50 text-blue-700 border-blue-200',
    'MRI': 'bg-purple-50 text-purple-700 border-purple-200',
    'X-Ray': 'bg-green-50 text-green-700 border-green-200',
    'Ultrasound': 'bg-orange-50 text-orange-700 border-orange-200'
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.studyType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus;
    const matchesModality = selectedModality === 'all' || report.modality === selectedModality;
    const matchesPriority = selectedPriority === 'all' || report.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesModality && matchesPriority;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'finalized': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'reviewed': return <Eye className="w-4 h-4" />;
      case 'draft': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const handleSelectReport = (reportId) => {
    setSelectedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };

  const handleSelectAll = () => {
    if (selectedReports.length === filteredReports.length) {
      setSelectedReports([]);
    } else {
      setSelectedReports(filteredReports.map(report => report.id));
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const ReportCard = ({ report }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedReports.includes(report.id)}
              onChange={() => handleSelectReport(report.id)}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{report.patientName}</h3>
              <p className="text-sm text-gray-500">{report.patientId}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[report.priority]}`}>
              {report.priority.toUpperCase()}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[report.status]}`}>
              {getStatusIcon(report.status)}
              <span className="ml-1">{report.status.toUpperCase()}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Study Type</p>
            <p className="text-sm font-medium text-gray-900">{report.studyType}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Modality</p>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${modalityColors[report.modality]}`}>
              {report.modality}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Study Date</p>
            <p className="text-sm text-gray-900">{new Date(report.studyDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Radiologist</p>
            <p className="text-sm text-gray-900">{report.radiologist}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Findings</p>
          <p className="text-sm text-gray-700 line-clamp-2">{report.findings}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Report: {new Date(report.reportDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowReportDetail(report)}
              className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
            >
              View Details
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ReportDetailModal = ({ report, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Report Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Patient Information</h3>
                <div className="space-y-2">
                  <p><span className="text-gray-500">Name:</span> {report.patientName}</p>
                  <p><span className="text-gray-500">ID:</span> {report.patientId}</p>
                  <p><span className="text-gray-500">Age:</span> {report.age}</p>
                  <p><span className="text-gray-500">Gender:</span> {report.gender}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Study Information</h3>
                <div className="space-y-2">
                  <p><span className="text-gray-500">Study Type:</span> {report.studyType}</p>
                  <p><span className="text-gray-500">Modality:</span> {report.modality}</p>
                  <p><span className="text-gray-500">Study Date:</span> {new Date(report.studyDate).toLocaleDateString()}</p>
                  <p><span className="text-gray-500">Accession:</span> {report.accessionNumber}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Report Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[report.status]}`}>
                      {getStatusIcon(report.status)}
                      <span className="ml-1">{report.status.toUpperCase()}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${priorityColors[report.priority]}`}>
                      {report.priority.toUpperCase()}
                    </span>
                  </div>
                  <p><span className="text-gray-500">Report Date:</span> {new Date(report.reportDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Medical Team</h3>
                <div className="space-y-2">
                  <p><span className="text-gray-500">Radiologist:</span> {report.radiologist}</p>
                  <p><span className="text-gray-500">Referring Physician:</span> {report.referringPhysician}</p>
                  <p><span className="text-gray-500">Department:</span> {report.department}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Findings</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed">{report.findings}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Impression</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed">{report.impression}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 mt-6 pt-6 border-t border-gray-200">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Print Report
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Radiology Reports</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>New Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by patient name, ID, or study type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                {showFilters ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="draft">Draft</option>
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="finalized">Finalized</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Modality</label>
                  <select
                    value={selectedModality}
                    onChange={(e) => setSelectedModality(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Modalities</option>
                    <option value="CT">CT</option>
                    <option value="MRI">MRI</option>
                    <option value="X-Ray">X-Ray</option>
                    <option value="Ultrasound">Ultrasound</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Priorities</option>
                    <option value="routine">Routine</option>
                    <option value="urgent">Urgent</option>
                    <option value="stat">STAT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Dates</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reports Summary */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Reports</p>
                <p className="text-2xl font-bold text-gray-900">{reports.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Review</p>
                <p className="text-2xl font-bold text-orange-600">{reports.filter(r => r.status === 'pending').length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Finalized</p>
                <p className="text-2xl font-bold text-green-600">{reports.filter(r => r.status === 'finalized').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">STAT Priority</p>
                <p className="text-2xl font-bold text-red-600">{reports.filter(r => r.priority === 'stat').length}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedReports.length === filteredReports.length && filteredReports.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    {selectedReports.length > 0 ? `${selectedReports.length} selected` : `${filteredReports.length} reports`}
                  </span>
                </div>
                {selectedReports.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                      Download Selected
                    </button>
                    <button className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                      Export
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <div className="w-4 h-4 flex flex-col space-y-1">
                    <div className="bg-current h-0.5 rounded-sm"></div>
                    <div className="bg-current h-0.5 rounded-sm"></div>
                    <div className="bg-current h-0.5 rounded-sm"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReports.map((report) => (
                  <ReportCard key={report.id} report={report} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Report Detail Modal */}
      {showReportDetail && (
        <ReportDetailModal
          report={showReportDetail}
          onClose={() => setShowReportDetail(null)}
        />
      )}
    </div>
    </AdminLayout>
  );
};

export default RadiologyReports;