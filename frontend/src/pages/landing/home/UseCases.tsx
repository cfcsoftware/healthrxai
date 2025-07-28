import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Stethoscope, 
  TestTube, 
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Zap,
  Activity,
  Target,
  Sparkles,
  User
} from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  gradient: string;
  description: string;
  keyBenefits: string[];
  features: string[];
  stats: { label: string; value: string; }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
  challenges: string[];
  solutions: string[];
}

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useCases: UseCase[] = [
    {
      id: 'hospitals',
      title: 'Hospitals & Health Systems',
      subtitle: 'Enterprise-grade healthcare management',
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-blue-600 via-purple-600 to-cyan-500',
      description: 'Transform your hospital operations with our comprehensive AI-powered healthcare management system. Streamline workflows, enhance patient care, and optimize resource utilization across all departments.',
      keyBenefits: [
        'Reduce operational costs by up to 35%',
        'Improve patient satisfaction scores by 40%',
        'Decrease administrative workload by 50%',
        'Enhance clinical decision-making with AI insights'
      ],
      features: [
        'Complete Hospital Management System (HMS)',
        'Advanced Patient Flow Management',
        'Integrated Billing & Revenue Cycle',
        'AI-Powered Clinical Decision Support',
        'Real-time Analytics Dashboard',
        'Multi-department Coordination',
        'Automated Inventory Management',
        'Telemedicine Integration'
      ],
      stats: [
        { label: 'Hospitals Served', value: '500+' },
        { label: 'Patient Records', value: '2M+' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Efficiency Gain', value: '50%' }
      ],
      testimonial: {
        quote: "HealthRxAI transformed our 800-bed hospital completely. The AI-driven insights have revolutionized our patient care delivery and operational efficiency.",
        author: "Dr. Sarah Chen",
        role: "Chief Medical Officer",
        organization: "Metropolitan General Hospital"
      },
      challenges: [
        'Complex multi-department workflows',
        'High patient volumes and wait times',
        'Resource optimization challenges',
        'Regulatory compliance requirements',
        'Integration with existing systems'
      ],
      solutions: [
        'Unified hospital management platform',
        'AI-powered patient flow optimization',
        'Predictive analytics for resource planning',
        'Built-in compliance monitoring',
        'Seamless EHR integration'
      ]
    },
    {
      id: 'clinics',
      title: 'Clinics & Private Practices',
      subtitle: 'Streamlined practice management',
      icon: <Stethoscope className="w-8 h-8" />,
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      description: 'Empower your clinic with intelligent practice management tools designed for efficiency and growth. From appointment scheduling to patient engagement, we have everything covered.',
      keyBenefits: [
        'Increase patient appointments by 60%',
        'Reduce no-shows by 45%',
        'Automate 80% of administrative tasks',
        'Improve revenue cycle by 30%'
      ],
      features: [
        'Smart Appointment Scheduling',
        'Patient Portal & Engagement',
        'Electronic Health Records (EHR)',
        'Automated Billing & Payments',
        'Inventory & Supply Management',
        'Telemedicine Capabilities',
        'Practice Analytics',
        'Mobile App Integration'
      ],
      stats: [
        { label: 'Clinics Connected', value: '1,200+' },
        { label: 'Appointments Managed', value: '500K+' },
        { label: 'No-show Reduction', value: '45%' },
        { label: 'Revenue Increase', value: '30%' }
      ],
     testimonial: {
  quote: "The automation features have given me back 3 hours every day. I can now focus on what matters most - my patients.",
  author: "Dr. Michael Rodriguez",
  role: "Family Physician",
  organization: "Prime Care Medical Group"
},

      challenges: [
        'Manual appointment scheduling',
        'High administrative overhead',
        'Patient no-shows and cancellations',
        'Limited practice insights',
        'Paper-based processes'
      ],
      solutions: [
        'AI-powered scheduling optimization',
        'Automated administrative workflows',
        'Smart reminder and engagement system',
        'Comprehensive practice analytics',
        'Complete digital transformation'
      ]
    },
    {
      id: 'labs',
      title: 'Labs & Diagnostics',
      subtitle: 'Advanced diagnostic workflows',
      icon: <TestTube className="w-8 h-8" />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      description: 'Revolutionize your laboratory operations with AI-enhanced diagnostic tools, automated reporting, and seamless integration with healthcare providers.',
      keyBenefits: [
        'Accelerate test processing by 55%',
        'Reduce diagnostic errors by 70%',
        'Automate report generation by 90%',
        'Improve turnaround time by 40%'
      ],
      features: [
        'Laboratory Information System (LIS)',
        'AI-Powered Diagnostic Analysis',
        'Automated Report Generation',
        'Quality Control Management',
        'Sample Tracking & Logistics',
        'Integration with Medical Devices',
        'Real-time Result Delivery',
        'Compliance & Audit Trail'
      ],
      stats: [
        { label: 'Labs Digitized', value: '300+' },
        { label: 'Tests Processed', value: '10M+' },
        { label: 'Processing Speed', value: '55%' },
        { label: 'Error Reduction', value: '70%' }
      ],
      testimonial: {
        quote: "The AI diagnostic assistance has significantly improved our accuracy and speed. Our physicians now receive results 40% faster with enhanced reliability.",
        author: "Dr. Lisa Park",
        role: "Laboratory Director",
        organization: "Advanced Diagnostics Center"
      },
      challenges: [
        'Manual test result interpretation',
        'Slow report generation',
        'Quality control inconsistencies',
        'Device integration complexities',
        'Regulatory compliance burden'
      ],
      solutions: [
        'AI-assisted diagnostic interpretation',
        'Automated report workflows',
        'Built-in quality assurance',
        'Universal device connectivity',
        'Automated compliance monitoring'
      ]
    },
    {
      id: 'government',
      title: 'Government Healthcare',
      subtitle: 'Secure public health systems',
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-indigo-600 via-purple-600 to-blue-700',
      description: 'Deliver exceptional public healthcare services with our secure, scalable, and compliant platform designed specifically for government healthcare institutions.',
      keyBenefits: [
        'Serve 2M+ citizens efficiently',
        'Ensure 99.9% data security',
        'Reduce healthcare costs by 25%',
        'Improve service delivery by 60%'
      ],
      features: [
        'Population Health Management',
        'Multi-facility Coordination',
        'Advanced Security & Compliance',
        'Public Health Analytics',
        'Emergency Response System',
        'Citizen Health Portals',
        'Vaccination Management',
        'Epidemic Tracking & Reporting'
      ],
      stats: [
        { label: 'Government Facilities', value: '150+' },
        { label: 'Citizens Served', value: '2M+' },
        { label: 'Security Score', value: '99.9%' },
        { label: 'Cost Savings', value: '25%' }
      ],
      testimonial: {
        quote: "HealthRxAI helped us digitize our entire public health infrastructure. The population health insights have been invaluable for policy making.",
        author: "Dr. Robert Kim",
        role: "Director of Public Health",
        organization: "State Health Department"
      },
      challenges: [
        'Large-scale population management',
        'Strict security requirements',
        'Multi-location coordination',
        'Budget constraints',
        'Regulatory compliance'
      ],
      solutions: [
        'Scalable population health platform',
        'Government-grade security',
        'Centralized multi-facility management',
        'Cost-effective deployment models',
        'Built-in compliance frameworks'
      ]
    }
  ];

  const currentUseCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-700/50 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">Trusted by 2000+ Healthcare Organizations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Who It's For
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how HealthRxAI transforms healthcare delivery across hospitals, clinics, 
              laboratories, and government institutions with AI-powered solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Healthcare Facilities', value: '2,150+', icon: <Building2 className="w-6 h-6" /> },
                { label: 'Patient Records', value: '12M+', icon: <Users className="w-6 h-6" /> },
                { label: 'Countries', value: '25+', icon: <Globe className="w-6 h-6" /> },
                { label: 'Uptime', value: '99.9%', icon: <Activity className="w-6 h-6" /> }
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

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-1">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === useCase.id
                    ? `bg-gradient-to-r ${useCase.gradient} text-white shadow-lg`
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span className="mr-3">{useCase.icon}</span>
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className={`inline-flex items-center p-3 rounded-2xl bg-gradient-to-r ${currentUseCase.gradient} mb-6`}>
                <span className="text-white">{currentUseCase.icon}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">{currentUseCase.title}</h2>
              <p className="text-xl text-slate-400 mb-6">{currentUseCase.subtitle}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{currentUseCase.description}</p>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentUseCase.keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                Core Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentUseCase.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentUseCase.gradient} mr-3`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${currentUseCase.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 group`}>
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Testimonial */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {currentUseCase.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-200 hover:scale-105"
                  onMouseEnter={() => setHoveredCard(`stat-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${currentUseCase.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                  {hoveredCard === `stat-${index}` && (
                    <div className="mt-2 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${currentUseCase.gradient} animate-pulse`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                "{currentUseCase.testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentUseCase.gradient} flex items-center justify-center mr-4`}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">{currentUseCase.testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{currentUseCase.testimonial.role}</div>
                  <div className="text-slate-500 text-sm">{currentUseCase.testimonial.organization}</div>
                </div>
              </div>
            </div>

            {/* Challenges vs Solutions */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-red-400 mr-3" />
                Challenges We Solve
              </h4>
              
              <div className="space-y-4">
                {currentUseCase.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-slate-400 text-sm mb-2">{challenge}</div>
                      <div className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div className="text-green-300 text-sm">{currentUseCase.solutions[index]}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10" />
        
        
      </div>
    </div>
  );
};

export default UseCases;