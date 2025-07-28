import React, { useState, useEffect } from 'react';
import { 
  Users, 
  CreditCard, 
  FileText, 
  Video, 
  Pill, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  TrendingUp,
  Monitor,
  Tablet,
  Smartphone,
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: React.ReactElement;
  gradient: string;
  benefits: string[];
  stats: { label: string; value: string; }[];
  keyFeatures: string[];
  badge?: string;
  isPopular?: boolean;
}

const KeyFeaturesPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      id: 'opd-ipd',
      title: 'OPD/IPD Management',
      shortDescription: 'Comprehensive patient flow management for outpatient and inpatient care',
      detailedDescription: 'Streamline your patient journey from registration to discharge with our intelligent OPD/IPD management system. Optimize bed allocation, manage patient queues, and ensure seamless care coordination across departments.',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      benefits: [
        'Reduce patient wait times by 60%',
        'Optimize bed occupancy rates',
        'Automated patient flow tracking',
        'Real-time department coordination'
      ],
      stats: [
        { label: 'Patients Managed Daily', value: '50K+' },
        { label: 'Wait Time Reduction', value: '60%' },
        { label: 'Bed Utilization', value: '95%' }
      ],
      keyFeatures: [
        'Smart queue management',
        'Bed allocation optimization',
        'Patient tracking dashboard',
        'Discharge planning automation',
        'Department integration',
        'Mobile notifications'
      ],
      badge: 'Most Popular',
      isPopular: true
    },
    {
      id: 'billing',
      title: 'Smart Billing System',
      shortDescription: 'Automated billing and revenue cycle management with AI-powered insights',
      detailedDescription: 'Transform your revenue cycle with intelligent billing automation. From insurance verification to claim processing, our system ensures maximum reimbursement with minimal effort.',
      icon: <CreditCard className="w-8 h-8" />,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      benefits: [
        'Increase revenue by 35%',
        'Reduce billing errors by 85%',
        'Automate insurance claims',
        'Real-time payment tracking'
      ],
      stats: [
        { label: 'Revenue Increase', value: '35%' },
        { label: 'Error Reduction', value: '85%' },
        { label: 'Claim Success Rate', value: '98%' }
      ],
      keyFeatures: [
        'Automated invoice generation',
        'Insurance verification',
        'Multi-payment gateway support',
        'Revenue analytics',
        'Claim management',
        'Patient payment portals'
      ]
    },
    {
      id: 'emr-ehr',
      title: 'EMR/EHR Records',
      shortDescription: 'Digital health records with advanced search and AI-powered insights',
      detailedDescription: 'Maintain comprehensive electronic medical records with intelligent data organization, quick search capabilities, and AI-driven clinical insights for better patient care decisions.',
      icon: <FileText className="w-8 h-8" />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      benefits: [
        'Instant access to patient history',
        'AI-powered clinical insights',
        'Improved care coordination',
        'Regulatory compliance assured'
      ],
      stats: [
        { label: 'Records Digitized', value: '5M+' },
        { label: 'Search Speed', value: '0.3s' },
        { label: 'Data Accuracy', value: '99.9%' }
      ],
      keyFeatures: [
        'Voice-to-text documentation',
        'Smart templates',
        'Clinical decision support',
        'Audit trail management',
        'HIPAA compliance',
        'Integration with devices'
      ],
      badge: 'HIPAA Certified'
    },
    {
      id: 'telemedicine',
      title: 'Telemedicine Platform',
      shortDescription: 'Secure video consultations with integrated prescription and billing',
      detailedDescription: 'Expand your reach with our comprehensive telemedicine solution. Conduct secure video consultations, manage virtual appointments, and maintain continuity of care from anywhere.',
      icon: <Video className="w-8 h-8" />,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
      benefits: [
        'Increase patient reach by 300%',
        'Reduce no-shows by 40%',
        'Enable remote monitoring',
        'Improve patient satisfaction'
      ],
      stats: [
        { label: 'Virtual Consultations', value: '2M+' },
        { label: 'Patient Reach Increase', value: '300%' },
        { label: 'Satisfaction Score', value: '4.9/5' }
      ],
      keyFeatures: [
        'HD video consultations',
        'Digital prescriptions',
        'Appointment scheduling',
        'Patient portal access',
        'Remote monitoring tools',
        'Multi-device support'
      ],
      badge: 'Trending'
    },
    {
      id: 'pharmacy-lab',
      title: 'Pharmacy & Lab',
      shortDescription: 'Integrated pharmacy management and laboratory information system',
      detailedDescription: 'Streamline your pharmacy operations and laboratory workflows with our integrated solution. Track inventory, manage prescriptions, and process lab orders with automated reporting.',
      icon: <Pill className="w-8 h-8" />,
      gradient: 'from-amber-500 via-yellow-500 to-orange-600',
      benefits: [
        'Reduce medication errors by 90%',
        'Automate inventory management',
        'Faster lab result delivery',
        'Integrated prescription system'
      ],
      stats: [
        { label: 'Prescriptions Processed', value: '10M+' },
        { label: 'Error Reduction', value: '90%' },
        { label: 'Lab Turnaround Time', value: '2.5hrs' }
      ],
      keyFeatures: [
        'Drug interaction alerts',
        'Automated reordering',
        'Lab result integration',
        'Quality control tracking',
        'Regulatory compliance',
        'Mobile lab access'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      shortDescription: 'Intelligent automation with machine learning and predictive analytics',
      detailedDescription: 'Harness the power of artificial intelligence to automate routine tasks, predict patient needs, and provide intelligent insights for better healthcare delivery and operational efficiency.',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-rose-500 via-pink-500 to-red-600',
      benefits: [
        'Automate 70% of routine tasks',
        'Predict patient deterioration',
        'Optimize resource allocation',
        'Enhance clinical decisions'
      ],
      stats: [
        { label: 'Tasks Automated', value: '70%' },
        { label: 'Prediction Accuracy', value: '94%' },
        { label: 'Efficiency Gain', value: '50%' }
      ],
      keyFeatures: [
        'Predictive analytics',
        'Natural language processing',
        'Automated scheduling',
        'Risk assessment algorithms',
        'Workflow optimization',
        'Intelligent reporting'
      ],
      badge: 'AI Powered'
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(selectedFeature === featureId ? null : featureId);
    setViewMode('detailed');
  };

  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <div className="min-h-screen  from-slate-900 via-slate-800 to-slate-900">
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
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">Complete Healthcare Management Suite</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Key Features
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover powerful healthcare modules designed to transform your operations, 
              enhance patient care, and drive efficiency across your organization.
            </p>

            {/* View Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4 inline mr-2" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  viewMode === 'detailed'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Detailed View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer hover:scale-105 ${
                  feature.isPopular ? 'ring-2 ring-purple-500/30' : ''
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleFeatureClick(feature.id)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Popular Badge */}
                {feature.badge && (
                  <div className={`absolute -top-3 -right-3 px-3 py-1 text-xs font-bold rounded-full ${
                    feature.badge === 'Most Popular' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                    feature.badge === 'Trending' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    feature.badge === 'AI Powered' ? 'bg-gradient-to-r from-rose-500 to-red-500' :
                    'bg-gradient-to-r from-blue-500 to-cyan-500'
                  } text-white shadow-lg animate-pulse`}>
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {feature.shortDescription}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors group-hover:text-white">
                    Learn More
                  </button>
                  <ArrowRight className={`w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 ${
                    hoveredCard === feature.id ? 'text-white translate-x-1' : ''
                  }`} />
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed View */}
      {viewMode === 'detailed' && selectedFeatureData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${selectedFeatureData.gradient} flex items-center justify-center`}>
                    <span className="text-white">{selectedFeatureData.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">{selectedFeatureData.title}</h2>
                    {selectedFeatureData.badge && (
                      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mt-2 ${
                        selectedFeatureData.badge === 'Most Popular' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                        selectedFeatureData.badge === 'Trending' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                        selectedFeatureData.badge === 'AI Powered' ? 'bg-gradient-to-r from-rose-500 to-red-500' :
                        'bg-gradient-to-r from-blue-500 to-cyan-500'
                      } text-white`}>
                        {selectedFeatureData.badge}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {selectedFeatureData.detailedDescription}
                </p>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                    Key Benefits
                  </h3>
                  <div className="space-y-3">
                    {selectedFeatureData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Star className="w-6 h-6 text-yellow-400 mr-3" />
                    Core Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedFeatureData.keyFeatures.map((keyFeature, index) => (
                      <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedFeatureData.gradient} mr-3`} />
                        <span className="text-slate-300 text-sm">{keyFeature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid gap-6">
                  {selectedFeatureData.stats.map((stat, index) => (
                    <div key={index} className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${selectedFeatureData.gradient} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Section */}
                <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
                  <h4 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-slate-400 mb-6">
                    Experience the power of {selectedFeatureData.title.toLowerCase()} in your healthcare facility.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className={`flex-1 px-6 py-3 bg-gradient-to-r ${selectedFeatureData.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                      Start Free Trial
                    </button>
                    <button className="flex-1 px-6 py-3 bg-slate-600/50 text-white font-semibold rounded-xl border border-slate-500/50 hover:border-slate-400/50 transition-all duration-200">
                      Schedule Demo
                    </button>
                  </div>
                </div>

                {/* Device Support */}
                <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Available On</h4>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-300 text-sm">Desktop</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tablet className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-300 text-sm">Tablet</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-300 text-sm">Mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10" />
        
        
      </div>
    </div>
  );
};

export default KeyFeaturesPage;