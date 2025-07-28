import React, { useState, useEffect } from 'react';
import { 
  Users, 
  CreditCard, 
  FileText, 
  Video, 
  Pill, 
  Brain,
  Activity,
  Stethoscope,
  TestTube,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  
  Star,
  TrendingUp,
  Award,
  Heart,
  Settings,
  Monitor,
  Smartphone,
  Building2,
  UserCheck,
  DollarSign,
  AlertCircle,
  Search,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Layers,
  Package,
  Network,
  Cpu
} from 'lucide-react';

interface Module {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.ReactElement;
  gradient: string;
  category: string;
  benefits: string[];
  features: string[];
  stats: { label: string; value: string; }[];
  badge?: string;
  isPremium?: boolean;
  isNew?: boolean;
  popularity: number;
  integrations: string[];
  screenshots?: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  moduleCount: number;
}

const FullModuleOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'name' | 'category'>('popularity');
  const [isVisible, setIsVisible] = useState(false);
  const [, setHoveredModule] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories: Category[] = [
    {
      id: 'all',
      name: 'All Modules',
      description: 'Complete healthcare management suite',
      icon: <Grid3X3 className="w-6 h-6" />,
      color: 'from-purple-600 to-blue-600',
      moduleCount: 24
    },
    {
      id: 'patient-care',
      name: 'Patient Care',
      description: 'Direct patient management and care modules',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      moduleCount: 6
    },
    {
      id: 'clinical',
      name: 'Clinical Operations',
      description: 'Clinical workflow and medical operations',
      icon: <Stethoscope className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      moduleCount: 7
    },
    {
      id: 'financial',
      name: 'Financial Management',
      description: 'Billing, payments, and financial operations',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      moduleCount: 4
    },
    {
      id: 'operational',
      name: 'Operations',
      description: 'Hospital operations and management',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      moduleCount: 4
    },
    {
      id: 'technology',
      name: 'Technology & AI',
      description: 'Advanced technology and AI solutions',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-600',
      moduleCount: 3
    }
  ];

  const modules: Module[] = [
    // Patient Care Modules
    {
      id: 'opd-management',
      title: 'OPD Management',
      shortDescription: 'Comprehensive outpatient department management',
      detailedDescription: 'Streamline your outpatient operations with intelligent queue management, appointment scheduling, and patient flow optimization.',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-600',
      category: 'patient-care',
      benefits: ['Reduce wait times by 60%', 'Optimize doctor schedules', 'Improve patient satisfaction'],
      features: ['Queue management', 'Appointment scheduling', 'Patient tracking', 'SMS notifications'],
      stats: [{ label: 'Patients/Day', value: '2000+' }, { label: 'Wait Time', value: '-60%' }],
      badge: 'Most Popular',
      popularity: 95,
      integrations: ['EMR', 'Billing', 'SMS Gateway']
    },
    {
      id: 'ipd-management',
      title: 'IPD Management',
      shortDescription: 'Complete inpatient department management system',
      detailedDescription: 'Manage inpatient care with bed allocation, discharge planning, and comprehensive patient monitoring.',
      icon: <Building2 className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-blue-600',
      category: 'patient-care',
      benefits: ['95% bed utilization', 'Automated discharge planning', 'Real-time monitoring'],
      features: ['Bed management', 'Patient monitoring', 'Discharge planning', 'Nurse station integration'],
      stats: [{ label: 'Bed Utilization', value: '95%' }, { label: 'Discharge Efficiency', value: '+40%' }],
      popularity: 90,
      integrations: ['Nursing', 'Pharmacy', 'Billing']
    },
    {
      id: 'emergency-care',
      title: 'Emergency Care',
      shortDescription: 'Emergency department workflow management',
      detailedDescription: 'Handle emergency cases with triage management, critical care protocols, and real-time patient tracking.',
      icon: <AlertCircle className="w-6 h-6" />,
      gradient: 'from-red-500 to-orange-600',
      category: 'patient-care',
      benefits: ['Faster triage', 'Critical care alerts', 'Emergency protocols'],
      features: ['Triage management', 'Critical alerts', 'Emergency protocols', 'Trauma tracking'],
      stats: [{ label: 'Response Time', value: '3 min' }, { label: 'Triage Accuracy', value: '98%' }],
      badge: 'Critical',
      popularity: 85,
      integrations: ['Lab', 'Radiology', 'Blood Bank']
    },
    {
      id: 'patient-portal',
      title: 'Patient Portal',
      shortDescription: 'Self-service patient engagement platform',
      detailedDescription: 'Empower patients with online appointment booking, medical records access, and health tracking tools.',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      category: 'patient-care',
      benefits: ['24/7 access', 'Reduced admin calls', 'Better engagement'],
      features: ['Online booking', 'Medical records', 'Lab results', 'Prescription refills'],
      stats: [{ label: 'User Adoption', value: '78%' }, { label: 'Admin Reduction', value: '45%' }],
      isNew: true,
      popularity: 80,
      integrations: ['EMR', 'Lab', 'Pharmacy']
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine',
      shortDescription: 'Secure video consultation platform',
      detailedDescription: 'Conduct remote consultations with HD video, digital prescriptions, and integrated health monitoring.',
      icon: <Video className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      category: 'patient-care',
      benefits: ['300% reach increase', 'Reduced no-shows', 'Remote monitoring'],
      features: ['HD video calls', 'Digital prescriptions', 'Health monitoring', 'Multi-device support'],
      stats: [{ label: 'Consultations', value: '10K+/month' }, { label: 'Satisfaction', value: '4.9/5' }],
      badge: 'Trending',
      popularity: 88,
      integrations: ['EMR', 'Pharmacy', 'Payment Gateway']
    },
    {
      id: 'appointment-scheduling',
      title: 'Appointment Scheduling',
      shortDescription: 'Intelligent appointment management system',
      detailedDescription: 'AI-powered scheduling with conflict resolution, automated reminders, and resource optimization.',
      icon: <Calendar className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-600',
      category: 'patient-care',
      benefits: ['Smart scheduling', 'Automated reminders', 'Resource optimization'],
      features: ['AI scheduling', 'Conflict resolution', 'SMS reminders', 'Calendar sync'],
      stats: [{ label: 'No-shows', value: '-50%' }, { label: 'Efficiency', value: '+35%' }],
      popularity: 82,
      integrations: ['OPD', 'Doctor Portal', 'SMS Gateway']
    },

    // Clinical Operations Modules
    {
      id: 'emr-ehr',
      title: 'EMR/EHR',
      shortDescription: 'Electronic medical records system',
      detailedDescription: 'Comprehensive digital health records with AI insights, voice documentation, and clinical decision support.',
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-600',
      category: 'clinical',
      benefits: ['Instant access', 'AI insights', 'Voice documentation'],
      features: ['Digital records', 'Voice-to-text', 'Clinical alerts', 'Audit trails'],
      stats: [{ label: 'Records', value: '5M+' }, { label: 'Search Speed', value: '0.3s' }],
      badge: 'HIPAA Certified',
      isPremium: true,
      popularity: 98,
      integrations: ['All Clinical Modules', 'AI Engine', 'Voice API']
    },
    {
      id: 'laboratory-lis',
      title: 'Laboratory (LIS)',
      shortDescription: 'Laboratory information management system',
      detailedDescription: 'Complete lab workflow management with automated reporting, quality control, and device integration.',
      icon: <TestTube className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-600',
      category: 'clinical',
      benefits: ['Automated reporting', 'Quality control', 'Device integration'],
      features: ['Sample tracking', 'Auto reporting', 'QC management', 'Device connectivity'],
      stats: [{ label: 'Tests/Day', value: '50K+' }, { label: 'Accuracy', value: '99.9%' }],
      popularity: 92,
      integrations: ['EMR', 'Radiology', 'Pharmacy']
    },
    {
      id: 'radiology-ris',
      title: 'Radiology (RIS)',
      shortDescription: 'Radiology information system with PACS',
      detailedDescription: 'Advanced radiology workflow with DICOM support, AI-assisted diagnosis, and cloud storage.',
      icon: <Monitor className="w-6 h-6" />,
      gradient: 'from-purple-500 to-indigo-600',
      category: 'clinical',
      benefits: ['DICOM support', 'AI diagnosis', 'Cloud storage'],
      features: ['PACS integration', 'AI assistance', 'Report templates', 'Image sharing'],
      stats: [{ label: 'Images/Month', value: '100K+' }, { label: 'AI Accuracy', value: '94%' }],
      badge: 'AI Enhanced',
      popularity: 87,
      integrations: ['EMR', 'Laboratory', 'Cloud Storage']
    },
    {
      id: 'pharmacy-management',
      title: 'Pharmacy Management',
      shortDescription: 'Complete pharmacy operations system',
      detailedDescription: 'Inventory management, drug interaction alerts, automated dispensing, and regulatory compliance.',
      icon: <Pill className="w-6 h-6" />,
      gradient: 'from-yellow-500 to-orange-600',
      category: 'clinical',
      benefits: ['Inventory automation', 'Drug safety', 'Compliance tracking'],
      features: ['Inventory management', 'Drug interactions', 'Auto dispensing', 'Expiry tracking'],
      stats: [{ label: 'Prescriptions/Day', value: '5K+' }, { label: 'Error Reduction', value: '90%' }],
      popularity: 89,
      integrations: ['EMR', 'Billing', 'Laboratory']
    },
    {
      id: 'nursing-management',
      title: 'Nursing Management',
      shortDescription: 'Nursing workflow and care management',
      detailedDescription: 'Nursing schedules, patient care plans, medication administration, and shift management.',
      icon: <UserCheck className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-600',
      category: 'clinical',
      benefits: ['Care coordination', 'Medication safety', 'Workflow optimization'],
      features: ['Care plans', 'Medication admin', 'Shift management', 'Patient monitoring'],
      stats: [{ label: 'Nurses', value: '2K+' }, { label: 'Care Quality', value: '+40%' }],
      popularity: 84,
      integrations: ['EMR', 'Pharmacy', 'IPD']
    },
    {
      id: 'operation-theater',
      title: 'Operation Theater',
      shortDescription: 'Surgical suite management system',
      detailedDescription: 'OR scheduling, surgical workflows, equipment tracking, and post-operative care management.',
      icon: <Activity className="w-6 h-6" />,
      gradient: 'from-red-500 to-pink-600',
      category: 'clinical',
      benefits: ['OR optimization', 'Equipment tracking', 'Surgical workflows'],
      features: ['OR scheduling', 'Equipment management', 'Surgical checklists', 'Recovery tracking'],
      stats: [{ label: 'Surgeries/Month', value: '1.5K+' }, { label: 'Efficiency', value: '+30%' }],
      popularity: 86,
      integrations: ['EMR', 'Inventory', 'Anesthesia']
    },
    {
      id: 'blood-bank',
      title: 'Blood Bank',
      shortDescription: 'Blood bank and transfusion management',
      detailedDescription: 'Blood inventory, donor management, compatibility testing, and transfusion tracking.',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-red-600 to-red-500',
      category: 'clinical',
      benefits: ['Inventory tracking', 'Safety protocols', 'Donor management'],
      features: ['Blood inventory', 'Compatibility testing', 'Donor database', 'Transfusion tracking'],
      stats: [{ label: 'Units Managed', value: '10K+' }, { label: 'Safety Score', value: '100%' }],
      badge: 'Critical Care',
      popularity: 78,
      integrations: ['Laboratory', 'EMR', 'Emergency']
    },

    // Financial Management Modules
    {
      id: 'billing-system',
      title: 'Billing System',
      shortDescription: 'Comprehensive billing and invoicing',
      detailedDescription: 'Automated billing with insurance integration, payment processing, and revenue cycle management.',
      icon: <CreditCard className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      category: 'financial',
      benefits: ['Automated billing', 'Insurance integration', 'Revenue optimization'],
      features: ['Auto invoicing', 'Insurance claims', 'Payment gateway', 'Revenue reports'],
      stats: [{ label: 'Revenue Increase', value: '+35%' }, { label: 'Collection Rate', value: '98%' }],
      badge: 'Revenue Booster',
      popularity: 94,
      integrations: ['All Patient Modules', 'Insurance APIs', 'Payment Gateways']
    },
    {
      id: 'insurance-management',
      title: 'Insurance Management',
      shortDescription: 'Insurance claim and verification system',
      detailedDescription: 'Real-time insurance verification, automated claim processing, and denial management.',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-blue-600 to-indigo-600',
      category: 'financial',
      benefits: ['Real-time verification', 'Automated claims', 'Denial management'],
      features: ['Insurance verification', 'Claim processing', 'Prior authorization', 'Denial tracking'],
      stats: [{ label: 'Claim Success', value: '96%' }, { label: 'Processing Time', value: '2 days' }],
      popularity: 83,
      integrations: ['Billing', 'EMR', 'Insurance APIs']
    },
    {
      id: 'financial-reporting',
      title: 'Financial Reporting',
      shortDescription: 'Advanced financial analytics and reporting',
      detailedDescription: 'Comprehensive financial dashboards, revenue analytics, and performance metrics.',
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-600',
      category: 'financial',
      benefits: ['Real-time analytics', 'Custom reports', 'Performance tracking'],
      features: ['Revenue analytics', 'Cost analysis', 'Custom dashboards', 'Automated reports'],
      stats: [{ label: 'Reports Generated', value: '1K+/month' }, { label: 'Insights', value: 'Real-time' }],
      popularity: 79,
      integrations: ['Billing', 'HR', 'Inventory']
    },
    {
      id: 'revenue-cycle',
      title: 'Revenue Cycle Management',
      shortDescription: 'End-to-end revenue cycle optimization',
      detailedDescription: 'Complete revenue cycle from patient registration to final payment with AI-powered insights.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-teal-500 to-cyan-600',
      category: 'financial',
      benefits: ['Cycle optimization', 'AI insights', 'Cash flow improvement'],
      features: ['Cycle tracking', 'AI recommendations', 'Cash flow analysis', 'Performance metrics'],
      stats: [{ label: 'Cycle Time', value: '-25%' }, { label: 'Cash Flow', value: '+40%' }],
      badge: 'AI Powered',
      popularity: 81,
      integrations: ['Billing', 'Insurance', 'Analytics']
    },

    // Operational Modules
    {
      id: 'inventory-management',
      title: 'Inventory Management',
      shortDescription: 'Smart inventory and supply chain management',
      detailedDescription: 'Automated inventory tracking, predictive ordering, and supplier management.',
      icon: <Package className="w-6 h-6" />,
      gradient: 'from-orange-500 to-yellow-600',
      category: 'operational',
      benefits: ['Automated tracking', 'Predictive ordering', 'Cost reduction'],
      features: ['Stock tracking', 'Auto reordering', 'Supplier management', 'Expiry alerts'],
      stats: [{ label: 'Cost Reduction', value: '20%' }, { label: 'Stock Accuracy', value: '99%' }],
      popularity: 77,
      integrations: ['Pharmacy', 'OR', 'Procurement']
    },
    {
      id: 'hr-management',
      title: 'HR Management',
      shortDescription: 'Human resource and staff management',
      detailedDescription: 'Staff scheduling, payroll management, performance tracking, and compliance monitoring.',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-purple-500 to-violet-600',
      category: 'operational',
      benefits: ['Staff optimization', 'Automated payroll', 'Compliance tracking'],
      features: ['Staff scheduling', 'Payroll processing', 'Performance reviews', 'Compliance monitoring'],
      stats: [{ label: 'Staff Members', value: '5K+' }, { label: 'Efficiency', value: '+25%' }],
      popularity: 75,
      integrations: ['Billing', 'Analytics', 'Nursing']
    },
    {
      id: 'asset-management',
      title: 'Asset Management',
      shortDescription: 'Medical equipment and asset tracking',
      detailedDescription: 'Equipment maintenance, lifecycle management, and utilization tracking.',
      icon: <Monitor className="w-6 h-6" />,
      gradient: 'from-slate-500 to-gray-600',
      category: 'operational',
      benefits: ['Equipment tracking', 'Maintenance scheduling', 'Utilization optimization'],
      features: ['Asset tracking', 'Maintenance schedules', 'Utilization reports', 'Warranty management'],
      stats: [{ label: 'Assets Tracked', value: '10K+' }, { label: 'Uptime', value: '98%' }],
      popularity: 73,
      integrations: ['Inventory', 'Maintenance', 'Finance']
    },
    {
      id: 'quality-management',
      title: 'Quality Management',
      shortDescription: 'Quality assurance and compliance system',
      detailedDescription: 'Quality metrics, incident reporting, compliance monitoring, and accreditation management.',
      icon: <Award className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600',
      category: 'operational',
      benefits: ['Quality tracking', 'Compliance monitoring', 'Incident management'],
      features: ['Quality metrics', 'Incident reporting', 'Audit trails', 'Accreditation tracking'],
      stats: [{ label: 'Quality Score', value: '98%' }, { label: 'Compliance', value: '100%' }],
      badge: 'Accredited',
      popularity: 74,
      integrations: ['All Modules', 'Reporting', 'Analytics']
    },

    // Technology & AI Modules
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      shortDescription: 'Artificial intelligence and predictive analytics',
      detailedDescription: 'Machine learning insights, predictive modeling, and automated decision support.',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      category: 'technology',
      benefits: ['Predictive insights', 'Automated decisions', 'Pattern recognition'],
      features: ['ML algorithms', 'Predictive models', 'Decision support', 'Pattern analysis'],
      stats: [{ label: 'Accuracy', value: '94%' }, { label: 'Predictions/Day', value: '10K+' }],
      badge: 'AI Powered',
      isPremium: true,
      popularity: 91,
      integrations: ['All Clinical Modules', 'Analytics Engine', 'ML Platform']
    },
    {
      id: 'integration-platform',
      title: 'Integration Platform',
      shortDescription: 'API and system integration management',
      detailedDescription: 'Seamless integration with third-party systems, APIs, and healthcare standards.',
      icon: <Network className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
      category: 'technology',
      benefits: ['Seamless integration', 'API management', 'Data synchronization'],
      features: ['API gateway', 'Data mapping', 'System connectors', 'Real-time sync'],
      stats: [{ label: 'Integrations', value: '100+' }, { label: 'Uptime', value: '99.9%' }],
      popularity: 85,
      integrations: ['All External Systems', 'HL7', 'FHIR']
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      shortDescription: 'Mobile apps for patients and healthcare providers',
      detailedDescription: 'Native mobile applications for iOS and Android with offline capabilities and push notifications.',
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-600',
      category: 'technology',
      benefits: ['Mobile access', 'Offline capabilities', 'Push notifications'],
      features: ['Native apps', 'Offline sync', 'Push notifications', 'Biometric security'],
      stats: [{ label: 'Downloads', value: '500K+' }, { label: 'Rating', value: '4.8/5' }],
      isNew: true,
      popularity: 88,
      integrations: ['Patient Portal', 'EMR', 'Telemedicine']
    }
  ];

  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedModules = [...filteredModules].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'popularity':
      default:
        return b.popularity - a.popularity;
    }
  });

  const handleModuleExpand = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-700/50 mb-6">
              <Layers className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">24+ Integrated Healthcare Modules</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Full Module Overview
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our comprehensive suite of healthcare management modules designed to streamline 
              operations, enhance patient care, and drive digital transformation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { label: 'Total Modules', value: '24+', icon: <Layers className="w-6 h-6" /> },
                { label: 'Integrations', value: '500+', icon: <Network className="w-6 h-6" /> },
                { label: 'API Endpoints', value: '1000+', icon: <Cpu className="w-6 h-6" /> },
                { label: 'Hospitals Using', value: '2000+', icon: <Building2 className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-purple-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search modules..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'popularity' | 'name' | 'category')}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                </select>

                <div className="flex items-center bg-slate-800/50 border border-slate-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-purple-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-purple-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-slate-400 text-sm">
              Showing {sortedModules.length} of {modules.length} modules
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex overflow-x-auto pb-4 space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span className="mr-3">{category.icon}</span>
              <span>{category.name}</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-white/20">
                {category.moduleCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modules Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sortedModules.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-400 mb-2">No modules found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {sortedModules.map((module, index) => (
              <div
                key={module.id}
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer ${
                  viewMode === 'grid' ? 'p-8' : 'p-6'
                } ${module.isPremium ? 'ring-2 ring-yellow-500/30' : ''}`}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => handleModuleExpand(module.id)}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {module.isNew && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full animate-pulse">
                      New
                    </span>
                  )}
                  {module.isPremium && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                      Premium
                    </span>
                  )}
                  {module.badge && !module.isNew && !module.isPremium && (
                    <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                      {module.badge}
                    </span>
                  )}
                </div>

                <div className={viewMode === 'grid' ? 'space-y-6' : 'flex items-start space-x-6'}>
                  {/* Icon and Title */}
                  <div className={viewMode === 'grid' ? 'space-y-4' : 'flex-shrink-0'}>
                    <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${module.gradient} group-hover:scale-110 transition-transform duration-300 ${
                      viewMode === 'grid' ? 'w-16 h-16' : 'w-12 h-12'
                    }`}>
                      <span className="text-white">{module.icon}</span>
                    </div>
                    
                    {viewMode === 'grid' && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                          {module.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                          {module.shortDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content for List View */}
                  {viewMode === 'list' && (
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                          {module.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-slate-400">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          <span className="text-sm">{module.popularity}%</span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors">
                        {module.shortDescription}
                      </p>
                      
                      {/* Stats for List View */}
                      <div className="flex items-center space-x-6 text-sm">
                        {module.stats.slice(0, 2).map((stat, statIndex) => (
                          <div key={statIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient}`} />
                            <span className="text-slate-500">{stat.label}:</span>
                            <span className="text-slate-300 font-medium">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats for Grid View */}
                  {viewMode === 'grid' && (
                    <div className="grid grid-cols-2 gap-4">
                      {module.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center p-3 bg-slate-700/30 rounded-lg">
                          <div className={`text-lg font-bold bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                {expandedModule === module.id && (
                  <div className="mt-8 pt-8 border-t border-slate-700/50 space-y-6 animate-in slide-in-from-top duration-300">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {module.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-slate-300">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.gradient} mr-3`} />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        Core Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center p-2 bg-slate-700/20 rounded-lg text-slate-300">
                            <Zap className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Network className="w-5 h-5 text-blue-400 mr-2" />
                        Integrations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {module.integrations.map((integration, integrationIndex) => (
                          <span
                            key={integrationIndex}
                            className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button className={`flex-1 px-6 py-3 bg-gradient-to-r ${module.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                        Learn More
                      </button>
                      <button className="flex-1 px-6 py-3 bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200">
                        Try Demo
                      </button>
                    </div>
                  </div>
                )}

                {/* Expand/Collapse Indicator */}
                <div className="absolute bottom-4 right-4">
                  {expandedModule === module.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10" />
        
       
      </div>
    </div>
  );
};

export default FullModuleOverview;