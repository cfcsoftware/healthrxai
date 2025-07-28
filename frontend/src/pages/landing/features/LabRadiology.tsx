import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Clock, 
  FileText, 
  Download, 
  Eye, 
  AlertCircle, 
  MoreHorizontal,
  TrendingUp,
  Users,
  FileImage,
  Microscope,
  Stethoscope,
  Heart,
  Brain,
} from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

interface Report {
  id: string;
  patientName: string;
  patientId: string;
  testType: string;
  status: 'pending' | 'completed' | 'critical' | 'reviewed';
  priority: 'normal' | 'urgent' | 'critical';
  date: string;
  technician: string;
  physician: string;
  department: 'radiology' | 'laboratory' | 'pathology';
}
import type { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
 icon: LucideIcon;
}

const LabRadiology: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reports' | 'patients'>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const mockReports: Report[] = [
    {
      id: 'RPT-001',
      patientName: 'Sarah Johnson',
      patientId: 'PT-2024-001',
      testType: 'Chest X-Ray',
      status: 'critical',
      priority: 'critical',
      date: '2024-01-15T14:30:00Z',
      technician: 'Dr. Mike Chen',
      physician: 'Dr. Lisa Wong',
      department: 'radiology'
    },
    {
      id: 'RPT-002',
      patientName: 'Robert Smith',
      patientId: 'PT-2024-002',
      testType: 'Blood Panel',
      status: 'completed',
      priority: 'normal',
      date: '2024-01-15T13:15:00Z',
      technician: 'Emily Davis',
      physician: 'Dr. James Wilson',
      department: 'laboratory'
    },
    {
      id: 'RPT-003',
      patientName: 'Maria Garcia',
      patientId: 'PT-2024-003',
      testType: 'MRI Brain',
      status: 'pending',
      priority: 'urgent',
      date: '2024-01-15T16:45:00Z',
      technician: 'Dr. Alex Kumar',
      physician: 'Dr. Sarah Thompson',
      department: 'radiology'
    },
    {
      id: 'RPT-004',
      patientName: 'David Lee',
      patientId: 'PT-2024-004',
      testType: 'Tissue Biopsy',
      status: 'reviewed',
      priority: 'normal',
      date: '2024-01-15T11:20:00Z',
      technician: 'Dr. Rachel Green',
      physician: 'Dr. Michael Brown',
      department: 'pathology'
    }
  ];

  const stats: Stat[] = [
    {
      label: 'Total Reports',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: FileText
    },
    {
      label: 'Pending Reviews',
      value: '23',
      change: '-5%',
      trend: 'down',
      icon: Clock
    },
    {
      label: 'Critical Cases',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: AlertCircle
    },
    {
      label: 'Active Patients',
      value: '342',
      change: '+18%',
      trend: 'up',
      icon: Users
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400 bg-red-900/20';
      case 'pending': return 'text-yellow-400 bg-yellow-900/20';
      case 'completed': return 'text-green-400 bg-green-900/20';
      case 'reviewed': return 'text-blue-400 bg-blue-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400';
      case 'urgent': return 'text-orange-400';
      case 'normal': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'radiology': return <FileImage className="w-4 h-4" />;
      case 'laboratory': return <Microscope className="w-4 h-4" />;
      case 'pathology': return <Stethoscope className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.testType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesDepartment = selectedDepartment === 'all' || report.department === selectedDepartment;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
          <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
          <div className="flex items-center mt-2">
            <TrendingUp className={`w-4 h-4 mr-1 ${stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`} />
            <span className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
              {stat.change}
            </span>
            <span className="text-gray-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
        <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
          <stat.icon className="w-6 h-6 text-blue-400" />
        </div>
      </div>
    </div>
  );

  const ReportRow: React.FC<{ report: Report }> = ({ report }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {getDepartmentIcon(report.department)}
            <div>
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{report.patientName}</h3>
              <p className="text-sm text-gray-400">{report.patientId}</p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-300">{report.testType}</p>
            <p className="text-xs text-gray-500">{report.department.charAt(0).toUpperCase() + report.department.slice(1)}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden lg:block text-right">
            <p className="text-sm text-gray-300">{report.technician}</p>
            <p className="text-xs text-gray-500">{report.physician}</p>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-300">{new Date(report.date).toLocaleDateString()}</p>
            <p className="text-xs text-gray-500">{new Date(report.date).toLocaleTimeString()}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
              {report.priority.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
              {report.status.toUpperCase()}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 rounded-lg transition-all">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/20 rounded-lg transition-all">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-500/20 rounded-lg transition-all">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <HomeLayout>
    <div className="min-h-screen bg-gradient-to-br pt-20 from-gray-900 via-gray-800 to-gray-900 text-white">
     

      {/* Navigation */}
      <nav className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {['dashboard', 'reports', 'patients'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as never)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all ${
                  activeTab === tab
                    ? 'border-blue-400 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: FileImage, label: 'New Scan', color: 'blue' },
                  { icon: Microscope, label: 'Lab Test', color: 'green' },
                  { icon: Heart, label: 'Cardiology', color: 'red' },
                  { icon: Brain, label: 'Neurology', color: 'purple' }
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-lg border border-gray-700/50 hover:border-${action.color}-500/50 bg-${action.color}-500/10 hover:bg-${action.color}-500/20 transition-all group`}
                  >
                    <action.icon className={`w-6 h-6 text-${action.color}-400 mb-2 group-hover:scale-110 transition-transform`} />
                    <p className="text-sm font-medium text-gray-300">{action.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {mockReports.slice(0, 3).map((report) => (
                  <ReportRow key={report.id} report={report} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search patients, tests, or IDs..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-4">
                  <select
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="critical">Critical</option>
                    <option value="reviewed">Reviewed</option>
                  </select>
                  
                  <select
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="all">All Departments</option>
                    <option value="radiology">Radiology</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="pathology">Pathology</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reports List */}
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <ReportRow key={report.id} report={report} />
              ))}
            </div>

            {filteredReports.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No reports found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-6">Patient Management</h2>
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Patient management interface coming soon.</p>
            </div>
          </div>
        )}
      </main>
    </div>
    </HomeLayout>
  );
};

export default LabRadiology;