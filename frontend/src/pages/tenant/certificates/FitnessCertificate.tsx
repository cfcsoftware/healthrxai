import React, { useState } from 'react';
import { Search, Download, Award, Calendar, User, CheckCircle, Clock, Star, Plus, Edit, Eye } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface Certificate {
  id: string;
  name: string;
  type: 'fitness' | 'nutrition' | 'personal-training' | 'yoga' | 'pilates' | 'crossfit';
  issuer: string;
  dateIssued: string;
  expiryDate: string;
  status: 'active' | 'expired' | 'expiring-soon';
  rating: number;
  description: string;
  imageUrl: string;
  skills: string[];
  credentialId: string;
}

const FitnessCertificatesPage: React.FC = () => {
  const [certificates] = useState<Certificate[]>([
    {
      id: '1',
      name: 'Certified Personal Trainer',
      type: 'personal-training',
      issuer: 'ACSM',
      dateIssued: '2024-01-15',
      expiryDate: '2026-01-15',
      status: 'active',
      rating: 4.9,
      description: 'Comprehensive personal training certification covering exercise science, program design, and client assessment.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Exercise Programming', 'Client Assessment', 'Injury Prevention'],
      credentialId: 'ACSM-CPT-2024-001'
    },
    {
      id: '2',
      name: 'Nutrition Specialist',
      type: 'nutrition',
      issuer: 'NASM',
      dateIssued: '2023-06-10',
      expiryDate: '2025-06-10',
      status: 'expiring-soon',
      rating: 4.7,
      description: 'Advanced nutrition certification for fitness professionals focusing on sports nutrition and dietary planning.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Meal Planning', 'Sports Nutrition', 'Dietary Assessment'],
      credentialId: 'NASM-NS-2023-045'
    },
    {
      id: '3',
      name: 'Yoga Instructor - RYT 200',
      type: 'yoga',
      issuer: 'Yoga Alliance',
      dateIssued: '2023-03-20',
      expiryDate: '2025-03-20',
      status: 'active',
      rating: 4.8,
      description: '200-hour registered yoga teacher certification with focus on Hatha and Vinyasa styles.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation'],
      credentialId: 'YA-RYT200-2023-078'
    },
    {
      id: '4',
      name: 'CrossFit Level 1 Trainer',
      type: 'crossfit',
      issuer: 'CrossFit Inc.',
      dateIssued: '2022-11-05',
      expiryDate: '2024-11-05',
      status: 'expired',
      rating: 4.6,
      description: 'Foundational CrossFit certification covering methodology, movement patterns, and programming.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Olympic Lifting', 'Functional Movement', 'Program Design'],
      credentialId: 'CF-L1-2022-234'
    },
    {
      id: '5',
      name: 'Pilates Mat Instructor',
      type: 'pilates',
      issuer: 'Pilates Method Alliance',
      dateIssued: '2024-02-28',
      expiryDate: '2026-02-28',
      status: 'active',
      rating: 4.5,
      description: 'Comprehensive Pilates mat work certification with emphasis on core strength and flexibility.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Core Strength', 'Flexibility', 'Body Alignment'],
      credentialId: 'PMA-MAT-2024-012'
    },
    {
      id: '6',
      name: 'Strength & Conditioning Specialist',
      type: 'fitness',
      issuer: 'NSCA',
      dateIssued: '2023-09-12',
      expiryDate: '2025-09-12',
      status: 'active',
      rating: 4.9,
      description: 'Advanced certification in strength and conditioning for athletes and fitness enthusiasts.',
      imageUrl: '/api/placeholder/300/200',
      skills: ['Strength Training', 'Conditioning', 'Performance Testing'],
      credentialId: 'NSCA-CSCS-2023-156'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [, setShowAddModal] = useState(false);

  const certificateTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'personal-training', label: 'Personal Training' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'pilates', label: 'Pilates' },
    { value: 'crossfit', label: 'CrossFit' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'expiring-soon', label: 'Expiring Soon' },
    { value: 'expired', label: 'Expired' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'expiring-soon': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'expiring-soon': return <Clock className="w-4 h-4" />;
      case 'expired': return <Clock className="w-4 h-4" />;
      default: return null;
    }
  };

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || cert.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || cert.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.dateIssued).getTime() - new Date(a.dateIssued).getTime();
      case 'date-asc':
        return new Date(a.dateIssued).getTime() - new Date(b.dateIssued).getTime();
      case 'expiry-desc':
        return new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime();
      case 'expiry-asc':
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      case 'rating-desc':
        return b.rating - a.rating;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const stats = {
    total: certificates.length,
    active: certificates.filter(c => c.status === 'active').length,
    expiring: certificates.filter(c => c.status === 'expiring-soon').length,
    expired: certificates.filter(c => c.status === 'expired').length
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <Award className="w-16 h-16 text-blue-600 opacity-70" />
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(certificate.status)}`}>
          {getStatusIcon(certificate.status)}
          {certificate.status.replace('-', ' ')}
        </div>
        <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-lg shadow-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{certificate.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {certificate.name}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <User className="w-4 h-4" />
          <span className="font-medium">{certificate.issuer}</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {certificate.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{certificate.skills.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Issued: {formatDate(certificate.dateIssued)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Expires: {formatDate(certificate.expiryDate)}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" />
            View
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 text-gray-600" />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );

  const CertificateListItem = ({ certificate }: { certificate: Certificate }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{certificate.name}</h3>
            <p className="text-gray-600 flex items-center gap-2">
              <User className="w-4 h-4" />
              {certificate.issuer}
            </p>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
              <span>Issued: {formatDate(certificate.dateIssued)}</span>
              <span>Expires: {formatDate(certificate.expiryDate)}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>{certificate.rating}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(certificate.status)}`}>
            {getStatusIcon(certificate.status)}
            {certificate.status.replace('-', ' ')}
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Fitness Certificates</h1>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Certificate
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Certificates</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{stats.active}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expiring Soon</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.expiring}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expired</p>
                <p className="text-2xl font-bold text-red-600">{stats.expired}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search certificates, issuers, or skills..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {certificateTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
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
            </div>
            
            <div className="flex items-center gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="expiry-asc">Expiring Soon</option>
                <option value="expiry-desc">Latest Expiry</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="name-asc">Name A-Z</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
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

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {sortedCertificates.length} of {certificates.length} certificates
          </p>
        </div>

        {/* Certificates Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCertificates.map(certificate => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCertificates.map(certificate => (
              <CertificateListItem key={certificate.id} certificate={certificate} />
            ))}
          </div>
        )}

        {sortedCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
    </AdminLayout>
  );
};

export default FitnessCertificatesPage;