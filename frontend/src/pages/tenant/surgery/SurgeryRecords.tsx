import React, { useState } from 'react';
import { Search,  Calendar, User, Clock, AlertCircle, CheckCircle, FileText, Edit, Eye, Download, Plus, Activity, Shield, UserCheck, Stethoscope, Heart, Brain, Scissors } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface SurgeryRecord {
  id: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  surgeryType: string;
  surgeryCategory: 'cardiac' | 'orthopedic' | 'neurological' | 'general' | 'plastic' | 'vascular' | 'thoracic' | 'pediatric';
  primarySurgeon: string;
  assistantSurgeons: string[];
  anesthesiologist: string;
  scheduledDate: string;
  actualDate: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled' | 'postponed';
  priority: 'routine' | 'urgent' | 'emergency' | 'elective';
  operatingRoom: string;
  preOpNotes: string;
  postOpNotes: string;
  complications: string[];
  bloodLoss: number; // in ml
  anesthesiaType: string;
  outcome: 'excellent' | 'good' | 'fair' | 'poor';
  followUpRequired: boolean;
  followUpDate?: string;
  estimatedCost: number;
  actualCost: number;
  insuranceProvider: string;
  discharged: boolean;
  dischargeDate?: string;
}

const SurgeryRecordsPage: React.FC = () => {
  const [records] = useState<SurgeryRecord[]>([
    {
      id: 'SR-2024-001',
      patientId: 'P-2024-1001',
      patientName: 'Sarah Johnson',
      patientAge: 45,
      patientGender: 'Female',
      surgeryType: 'Coronary Artery Bypass Graft',
      surgeryCategory: 'cardiac',
      primarySurgeon: 'Dr. Michael Chen',
      assistantSurgeons: ['Dr. Lisa Wang', 'Dr. John Smith'],
      anesthesiologist: 'Dr. Emily Davis',
      scheduledDate: '2024-07-20',
      actualDate: '2024-07-20',
      startTime: '08:00',
      endTime: '12:30',
      duration: 270,
      status: 'completed',
      priority: 'urgent',
      operatingRoom: 'OR-1',
      preOpNotes: 'Patient presented with triple vessel coronary artery disease. Pre-operative cardiac catheterization showed significant stenosis.',
      postOpNotes: 'Successful triple vessel bypass. Patient stable post-operatively. No immediate complications.',
      complications: [],
      bloodLoss: 450,
      anesthesiaType: 'General Anesthesia',
      outcome: 'excellent',
      followUpRequired: true,
      followUpDate: '2024-07-27',
      estimatedCost: 85000,
      actualCost: 87500,
      insuranceProvider: 'Blue Cross Blue Shield',
      discharged: true,
      dischargeDate: '2024-07-25'
    },
    {
      id: 'SR-2024-002',
      patientId: 'P-2024-1002',
      patientName: 'Robert Martinez',
      patientAge: 32,
      patientGender: 'Male',
      surgeryType: 'Anterior Cruciate Ligament Reconstruction',
      surgeryCategory: 'orthopedic',
      primarySurgeon: 'Dr. Amanda Rodriguez',
      assistantSurgeons: ['Dr. Kevin Lee'],
      anesthesiologist: 'Dr. Sarah Thompson',
      scheduledDate: '2024-07-22',
      actualDate: '2024-07-22',
      startTime: '14:00',
      endTime: '16:45',
      duration: 165,
      status: 'completed',
      priority: 'elective',
      operatingRoom: 'OR-3',
      preOpNotes: 'Sports injury with complete ACL tear. MRI shows no additional meniscal damage.',
      postOpNotes: 'Successful ACL reconstruction using hamstring autograft. Good stability achieved.',
      complications: [],
      bloodLoss: 100,
      anesthesiaType: 'Spinal Anesthesia',
      outcome: 'excellent',
      followUpRequired: true,
      followUpDate: '2024-07-29',
      estimatedCost: 25000,
      actualCost: 24500,
      insuranceProvider: 'Aetna',
      discharged: true,
      dischargeDate: '2024-07-23'
    },
    {
      id: 'SR-2024-003',
      patientId: 'P-2024-1003',
      patientName: 'Maria Garcia',
      patientAge: 28,
      patientGender: 'Female',
      surgeryType: 'Craniotomy for Tumor Resection',
      surgeryCategory: 'neurological',
      primarySurgeon: 'Dr. David Park',
      assistantSurgeons: ['Dr. Jennifer Kim', 'Dr. Mark Wilson'],
      anesthesiologist: 'Dr. Robert Johnson',
      scheduledDate: '2024-07-25',
      actualDate: '2024-07-25',
      startTime: '07:30',
      endTime: '13:15',
      duration: 345,
      status: 'completed',
      priority: 'urgent',
      operatingRoom: 'OR-2',
      preOpNotes: 'Benign meningioma identified on MRI. Pre-operative neurological assessment normal.',
      postOpNotes: 'Successful gross total resection achieved. No neurological deficits post-operatively.',
      complications: [],
      bloodLoss: 300,
      anesthesiaType: 'General Anesthesia',
      outcome: 'excellent',
      followUpRequired: true,
      followUpDate: '2024-08-01',
      estimatedCost: 95000,
      actualCost: 92000,
      insuranceProvider: 'Medicare',
      discharged: false
    },
    {
      id: 'SR-2024-004',
      patientId: 'P-2024-1004',
      patientName: 'James Wilson',
      patientAge: 55,
      patientGender: 'Male',
      surgeryType: 'Laparoscopic Cholecystectomy',
      surgeryCategory: 'general',
      primarySurgeon: 'Dr. Lisa Anderson',
      assistantSurgeons: ['Dr. Thomas Brown'],
      anesthesiologist: 'Dr. Michelle White',
      scheduledDate: '2024-07-26',
      actualDate: '2024-07-26',
      startTime: '10:00',
      endTime: '11:30',
      duration: 90,
      status: 'in-progress',
      priority: 'routine',
      operatingRoom: 'OR-4',
      preOpNotes: 'Symptomatic cholelithiasis with recurrent biliary colic. Ultrasound shows multiple gallstones.',
      postOpNotes: '',
      complications: [],
      bloodLoss: 0,
      anesthesiaType: 'General Anesthesia',
      outcome: 'good',
      followUpRequired: true,
      estimatedCost: 15000,
      actualCost: 0,
      insuranceProvider: 'Cigna',
      discharged: false
    },
    {
      id: 'SR-2024-005',
      patientId: 'P-2024-1005',
      patientName: 'Jennifer Davis',
      patientAge: 38,
      patientGender: 'Female',
      surgeryType: 'Rhinoplasty',
      surgeryCategory: 'plastic',
      primarySurgeon: 'Dr. Alexander Kim',
      assistantSurgeons: [],
      anesthesiologist: 'Dr. Carol Martinez',
      scheduledDate: '2024-07-28',
      actualDate: '',
      startTime: '09:00',
      endTime: '',
      duration: 0,
      status: 'scheduled',
      priority: 'elective',
      operatingRoom: 'OR-5',
      preOpNotes: 'Cosmetic rhinoplasty for nasal hump reduction and tip refinement. Patient in good health.',
      postOpNotes: '',
      complications: [],
      bloodLoss: 0,
      anesthesiaType: 'General Anesthesia',
      outcome: 'good',
      followUpRequired: true,
      estimatedCost: 8000,
      actualCost: 0,
      insuranceProvider: 'Self-Pay',
      discharged: false
    },
    {
      id: 'SR-2024-006',
      patientId: 'P-2024-1006',
      patientName: 'Michael Brown',
      patientAge: 67,
      patientGender: 'Male',
      surgeryType: 'Carotid Endarterectomy',
      surgeryCategory: 'vascular',
      primarySurgeon: 'Dr. Patricia Lee',
      assistantSurgeons: ['Dr. Daniel Garcia'],
      anesthesiologist: 'Dr. Steven Taylor',
      scheduledDate: '2024-07-24',
      actualDate: '2024-07-24',
      startTime: '13:00',
      endTime: '15:30',
      duration: 150,
      status: 'completed',
      priority: 'urgent',
      operatingRoom: 'OR-1',
      preOpNotes: 'Severe carotid artery stenosis (85%) identified on duplex ultrasound. High stroke risk.',
      postOpNotes: 'Successful endarterectomy with patch angioplasty. Good flow restoration.',
      complications: ['Minor hematoma'],
      bloodLoss: 200,
      anesthesiaType: 'General Anesthesia',
      outcome: 'good',
      followUpRequired: true,
      followUpDate: '2024-07-31',
      estimatedCost: 35000,
      actualCost: 36500,
      insuranceProvider: 'UnitedHealthcare',
      discharged: true,
      dischargeDate: '2024-07-26'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: ''
  });

  const surgeryCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'cardiac', label: 'Cardiac' },
    { value: 'orthopedic', label: 'Orthopedic' },
    { value: 'neurological', label: 'Neurological' },
    { value: 'general', label: 'General Surgery' },
    { value: 'plastic', label: 'Plastic Surgery' },
    { value: 'vascular', label: 'Vascular' },
    { value: 'thoracic', label: 'Thoracic' },
    { value: 'pediatric', label: 'Pediatric' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'postponed', label: 'Postponed' }
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priorities' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'routine', label: 'Routine' },
    { value: 'elective', label: 'Elective' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      case 'postponed': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'emergency': return 'bg-red-100 text-red-800 border-red-200';
      case 'urgent': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'routine': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'elective': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cardiac': return <Heart className="w-5 h-5" />;
      case 'neurological': return <Brain className="w-5 h-5" />;
      case 'orthopedic': return <Activity className="w-5 h-5" />;
      case 'general': return <Scissors className="w-5 h-5" />;
      case 'plastic': return <UserCheck className="w-5 h-5" />;
      case 'vascular': return <Activity className="w-5 h-5" />;
      case 'thoracic': return <Heart className="w-5 h-5" />;
      case 'pediatric': return <User className="w-5 h-5" />;
      default: return <Stethoscope className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'scheduled': return <Calendar className="w-4 h-4" />;
      case 'cancelled': return <AlertCircle className="w-4 h-4" />;
      case 'postponed': return <Clock className="w-4 h-4" />;
      default: return null;
    }
  };

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.surgeryType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.primarySurgeon.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || record.surgeryCategory === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || record.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || record.priority === selectedPriority;
    
    let matchesDateRange = true;
    if (dateRange.start && dateRange.end) {
      const recordDate = new Date(record.scheduledDate);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      matchesDateRange = recordDate >= startDate && recordDate <= endDate;
    }
    
    return matchesSearch && matchesCategory && matchesStatus && matchesPriority && matchesDateRange;
  });

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime();
      case 'date-asc':
        return new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime();
      case 'patient-asc':
        return a.patientName.localeCompare(b.patientName);
      case 'surgeon-asc':
        return a.primarySurgeon.localeCompare(b.primarySurgeon);
      case 'duration-desc':
        return b.duration - a.duration;
      case 'cost-desc':
        return b.estimatedCost - a.estimatedCost;
      default:
        return 0;
    }
  });

  const stats = {
    total: records.length,
    completed: records.filter(r => r.status === 'completed').length,
    scheduled: records.filter(r => r.status === 'scheduled').length,
    inProgress: records.filter(r => r.status === 'in-progress').length,
    avgDuration: Math.round(records.filter(r => r.duration > 0).reduce((sum, r) => sum + r.duration, 0) / records.filter(r => r.duration > 0).length),
    totalCost: records.reduce((sum, r) => sum + r.actualCost, 0)
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return 'N/A';
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (minutes: number) => {
    if (minutes === 0) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const SurgeryCard = ({ record }: { record: SurgeryRecord }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6 ">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {getCategoryIcon(record.surgeryCategory)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{record.surgeryType}</h3>
              <p className="text-sm text-gray-600">ID: {record.id}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(record.status)}`}>
              {getStatusIcon(record.status)}
              {record.status.replace('-', ' ')}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(record.priority)}`}>
              {record.priority}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Patient</p>
            <p className="font-medium">{record.patientName}</p>
            <p className="text-sm text-gray-500">{record.patientAge}y, {record.patientGender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Primary Surgeon</p>
            <p className="font-medium">{record.primarySurgeon}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Scheduled Date</p>
            <p className="font-medium">{formatDate(record.scheduledDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">OR / Duration</p>
            <p className="font-medium">{record.operatingRoom} / {formatDuration(record.duration)}</p>
          </div>
        </div>

        {record.complications.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Complications</p>
            <div className="flex flex-wrap gap-1">
              {record.complications.map((complication, index) => (
                <span key={index} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full">
                  {complication}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Cost: {formatCurrency(record.actualCost || record.estimatedCost)}
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SurgeryListItem = ({ record }: { record: SurgeryRecord }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {getCategoryIcon(record.surgeryCategory)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{record.surgeryType}</h3>
              <p className="text-sm text-gray-600">ID: {record.id}</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div>
              <p className="text-sm text-gray-600">Patient</p>
              <p className="font-medium">{record.patientName}</p>
              <p className="text-sm text-gray-500">{record.patientAge}y, {record.patientGender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Surgeon</p>
              <p className="font-medium">{record.primarySurgeon}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date & Time</p>
              <p className="font-medium">{formatDate(record.scheduledDate)}</p>
              <p className="text-sm text-gray-500">{formatTime(record.startTime)} - {formatTime(record.endTime)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-medium">{formatDuration(record.duration)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Cost</p>
              <p className="font-medium">{formatCurrency(record.actualCost || record.estimatedCost)}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(record.status)}`}>
              {getStatusIcon(record.status)}
              {record.status.replace('-', ' ')}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(record.priority)}`}>
              {record.priority}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {record.complications.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600 font-medium">Complications:</span>
            <div className="flex gap-1">
              {record.complications.map((complication, index) => (
                <span key={index} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full">
                  {complication}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Surgery Records</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleString()}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Record
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
  {/* Total Records */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Total Records</p>
        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
      </div>
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <FileText className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>

  {/* Completed */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Completed</p>
        <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
      </div>
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-green-600" />
      </div>
    </div>
  </div>

  {/* Scheduled */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Scheduled</p>
        <p className="text-2xl font-bold text-yellow-600">{stats.scheduled}</p>
      </div>
      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
        <Calendar className="w-6 h-6 text-yellow-600" />
      </div>
    </div>
  </div>

  {/* In Progress */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">In Progress</p>
        <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
      </div>
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <Clock className="w-6 h-6 text-blue-600" />
      </div>
    </div>
  </div>

  {/* Total Cost */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Total Cost</p>
        <p className="text-2xl font-bold text-indigo-600">{formatCurrency(stats.totalCost)}</p>
      </div>
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
        <Activity className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
  </div>
</div>
        {/* Filters and Controls */}
     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
    {/* Search and Filters */}
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by patient, surgery type, surgeon, or ID..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {surgeryCategories.map(category => (
            <option key={category.value} value={category.value}>{category.label}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {statusOptions.map(status => (
            <option key={status.value} value={status.value}>{status.label}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
        >
          {priorityOptions.map(priority => (
            <option key={priority.value} value={priority.value}>{priority.label}</option>
          ))}
        </select>
      </div>
    </div>

    {/* Date & Sort Filters */}
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="patient-asc">Patient A-Z</option>
          <option value="surgeon-asc">Surgeon A-Z</option>
          <option value="duration-desc">Longest Duration</option>
          <option value="cost-desc">Highest Cost</option>
        </select>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {sortedRecords.length} of {records.length} surgery records
          </p>
        </div>

        {/* Records Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRecords.map(record => (
              <SurgeryCard key={record.id} record={record} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedRecords.map(record => (
              <SurgeryListItem key={record.id} record={record} />
            ))}
          </div>
        )}

        {sortedRecords.length === 0 && (
          <div className="text-center py-12">
            <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No surgery records found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
    </AdminLayout>
  );
};

export default SurgeryRecordsPage;