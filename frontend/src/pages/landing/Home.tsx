import HomeLayout from "../../layouts/HomeLayout";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Calendar, Heart, Shield, Star, ArrowRight, Filter, Grid, List, Search, Brain, Activity, Stethoscope, Zap, Award, TrendingUp, Clock, CheckCircle, Eye, Database, Phone, FileText, Pill, Beaker, Scissors, Droplet, Truck, CreditCard, Package, MessageSquare, Settings, BarChart3, Bell, Globe, Upload, UserCheck, Clipboard, Baby, Video, Timer, Utensils, UserPlus, FileCheck, Scan, Languages } from 'lucide-react';

const Home = () => {
  const [activeFeatureFilter, setActiveFeatureFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const allFeatures = [
    { id: 1, name: 'Patient Management', category: 'core', icon: Users, description: 'Complete patient lifecycle management with advanced analytics and real-time monitoring' },
    { id: 2, name: 'Appointment Management', category: 'core', icon: Calendar, description: 'Smart scheduling with AI-powered optimization and automated reminders' },
    { id: 3, name: 'OPD Management', category: 'departments', icon: Activity, description: 'Streamlined outpatient department operations with queue management' },
    { id: 4, name: 'IPD Management', category: 'departments', icon: Heart, description: 'Comprehensive inpatient care coordination and bed management' },
    { id: 5, name: 'Emergency Management', category: 'departments', icon: Zap, description: 'Critical care workflow optimization with priority-based triage' },
    { id: 6, name: 'Doctor Management', category: 'staff', icon: Stethoscope, description: 'Medical staff scheduling, performance tracking, and consultation management' },
    // { id: 7, name: 'Nurse/Staff Management', category: 'staff', icon: UserCheck, description: 'Complete workforce management with shift planning and task allocation' },
    { id: 8, name: 'Bed & Ward Management', category: 'core', icon: Eye, description: 'Real-time bed occupancy tracking and automated ward allocation' },
    { id: 9, name: 'Billing & Invoicing', category: 'financial', icon: CreditCard, description: 'Automated billing with insurance integration and payment processing' },
    { id: 10, name: 'Pharmacy Management', category: 'departments', icon: Pill, description: 'Inventory management, prescription tracking, and drug interaction alerts' },
    { id: 11, name: 'Laboratory Management', category: 'departments', icon: Beaker, description: 'Lab test management, results integration, and quality control' },
    { id: 12, name: 'Radiology Management', category: 'departments', icon: Scan, description: 'Medical imaging workflow with DICOM integration and reporting' },
    { id: 13, name: 'Operation Theatre Management', category: 'departments', icon: Scissors, description: 'OT scheduling, equipment tracking, and surgical workflow management' },
    { id: 14, name: 'Blood Bank Management', category: 'departments', icon: Droplet, description: 'Blood inventory, donor management, and cross-matching protocols' },
    { id: 15, name: 'Ambulance Management', category: 'emergency', icon: Truck, description: 'Fleet tracking, dispatch management, and emergency response coordination' },
    { id: 16, name: 'Insurance & TPA Management', category: 'financial', icon: Shield, description: 'Insurance claim processing and third-party administrator integration' },
    { id: 17, name: 'Inventory Management', category: 'operations', icon: Package, description: 'Medical supplies tracking with automated reordering and vendor management' },
    { id: 18, name: 'Prescription Management', category: 'core', icon: FileText, description: 'Digital prescription generation with drug interaction checking' },
    { id: 19, name: 'Medical Records / EMR', category: 'core', icon: Database, description: 'Secure electronic medical records with audit trails and access controls' },
    { id: 20, name: 'SOAP Notes & Transcription', category: 'documentation', icon: Clipboard, description: 'Structured clinical documentation with voice-to-text capabilities' },
    { id: 21, name: 'Voice Rx', category: 'ai', icon: MessageSquare, description: 'Voice-to-text prescription system with natural language processing' },
    { id: 22, name: 'AI Assistant', category: 'ai', icon: Brain, description: 'Intelligent healthcare assistant for decision support and clinical insights' },
    { id: 23, name: 'Admin & Role Management', category: 'operations', icon: Settings, description: 'User access control, role-based permissions, and security management' },
    { id: 24, name: 'HR & Payroll', category: 'staff', icon: Users, description: 'Human resources management with payroll processing and attendance tracking' },
    { id: 25, name: 'Finance & Accounting', category: 'financial', icon: BarChart3, description: 'Financial reporting, accounting integration, and budget management' },
    { id: 26, name: 'Reports & Analytics', category: 'analytics', icon: TrendingUp, description: 'Comprehensive reporting with real-time dashboards and KPI tracking' },
    { id: 27, name: 'Communication & Notification', category: 'operations', icon: Bell, description: 'SMS/Email automation with patient and staff communication management' },
    { id: 28, name: 'Settings & Configuration', category: 'operations', icon: Settings, description: 'System configuration, customization, and integration management' },
    { id: 29, name: 'Feedback & Survey System', category: 'quality', icon: Star, description: 'Patient satisfaction surveys and feedback collection system' },
    { id: 30, name: 'Referral & Commission Management', category: 'business', icon: ArrowRight, description: 'Referral tracking, commission calculation, and partner management' },
    { id: 31, name: 'Discharge Summary Management', category: 'documentation', icon: FileCheck, description: 'Automated discharge summary generation and patient instructions' },
    { id: 32, name: 'Vaccination & Immunization', category: 'preventive', icon: Baby, description: 'Vaccination schedule management and immunization tracking' },
    { id: 33, name: 'Chat/Telemedicine Module', category: 'modern', icon: Video, description: 'Remote consultation platform with video calling and chat features' },
    { id: 34, name: 'Queue Management', category: 'core', icon: Timer, description: 'Smart patient flow optimization with real-time queue status' },
    { id: 35, name: 'Diet & Nutrition Management', category: 'wellness', icon: Utensils, description: 'Patient nutrition planning and dietary requirement management' },
    { id: 36, name: 'Visitor Management', category: 'operations', icon: UserPlus, description: 'Visitor registration, tracking, and access control system' },
    { id: 37, name: 'Consent & Legal Documents', category: 'documentation', icon: FileText, description: 'Digital consent forms and legal document management' },
    { id: 38, name: 'Document Upload & Scan', category: 'documentation', icon: Upload, description: 'Document digitization with OCR and secure storage' },
    { id: 39, name: 'Multi-language Support', category: 'accessibility', icon: Languages, description: 'Multilingual interface supporting regional languages' },
    { id: 40, name: 'Blockchain Integration', category: 'security', icon: Shield, description: 'Blockchain-based security for medical records and transactions' }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Features', count: allFeatures.length },
    { id: 'core', name: 'Core Systems', count: allFeatures.filter(f => f.category === 'core').length },
    { id: 'departments', name: 'Departments', count: allFeatures.filter(f => f.category === 'departments').length },
    { id: 'ai', name: 'AI Powered', count: allFeatures.filter(f => f.category === 'ai').length },
    // { id: 'staff', name: 'Staff Management', count: allFeatures.filter(f => f.category === 'staff').length },
    { id: 'financial', name: 'Financial', count: allFeatures.filter(f => f.category === 'financial').length }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson, MD',
      role: 'Chief Medical Officer',
      hospital: 'Metropolitan General Hospital',
      content: 'This AI-driven system has revolutionized our patient care workflow. We\'ve seen a 40% improvement in diagnostic accuracy and 50% reduction in administrative overhead. The integration was seamless and the ROI was visible within the first quarter.',
      rating: 5,
      stats: { patients: '15K+', efficiency: '65%', satisfaction: '98%' }
    },
    {
      name: 'Michael Chen',
      role: 'Hospital Administrator',
      hospital: 'City Medical Center',
      content: 'The comprehensive nature of this platform eliminated the need for multiple systems. Our operational costs decreased by 35% while patient satisfaction scores reached all-time highs. The AI assistant has become indispensable for our clinical decisions.',
      rating: 5,
      stats: { savings: '35%', uptime: '99.9%', growth: '45%' }
    },
    {
      name: 'Dr. Emily Rodriguez, MD',
      role: 'Emergency Department Head',
      hospital: 'Regional Trauma Center',
      content: 'The emergency management module has transformed our critical care delivery. Patient wait times reduced by 60%, and our staff can focus on what matters most - saving lives. The predictive analytics help us prepare for surges effectively.',
      rating: 5,
      stats: { response: '8min', accuracy: '94%', capacity: '180%' }
    }
  ];

  const filteredFeatures = activeFeatureFilter === 'all' 
    ? allFeatures 
    : allFeatures.filter(feature => feature.category === activeFeatureFilter);

  return (
    <HomeLayout>
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/5 to-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-200/8 to-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/3 to-gray-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <div className="hero-content animate-hero-enter">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
              <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient-shift">
                Revolutionize<br/> 
              </span>
              <span className="inline-block bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent animate-gradient-shift-delayed">
                Healthcare with AI-Driven
              </span>
              <br />
              <span className="inline-block text-white animate-glow-pulse"> Hospital Automation </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{animationDelay: '0.5s'}}>
              Empower your hospital with cutting-edge technology for unparalleled efficiency and patient care.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up" style={{animationDelay: '0.8s'}}>
              <button className="group px-10 py-5 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-white/25 transition-all transform hover:scale-105 duration-500 relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button className="group px-10 py-5 border-2 border-gray-600 text-gray-300 text-xl font-bold rounded-2xl hover:border-white hover:text-white hover:shadow-xl transition-all transform hover:scale-105 duration-500 relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Product Section */}
      <section id="about" className="relative py-32 px-6" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Next-Generation Healthcare Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive AI-powered hospital management ecosystem designed to transform healthcare delivery through intelligent automation and data-driven insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Brain,
                title: 'Artificial Intelligence',
                description: 'Advanced machine learning algorithms provide predictive analytics, automated diagnostics, and intelligent workflow optimization.',
                gradient: 'from-white to-gray-300'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Military-grade encryption with blockchain integration, ensuring HIPAA compliance and absolute data protection.',
                gradient: 'from-gray-200 to-white'
              },
              {
                icon: TrendingUp,
                title: 'Scalable Architecture',
                description: 'Cloud-native infrastructure that seamlessly scales from small clinics to large hospital networks.',
                gradient: 'from-gray-300 to-gray-100'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/30 to-black/50 p-10 rounded-3xl backdrop-blur-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-700 hover:transform hover:scale-105 animate-slide-up`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <item.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-gray-100 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              40+ Integrated Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
              Comprehensive healthcare modules powered by cutting-edge AI technology, designed for seamless integration and maximum efficiency.
            </p>

            {/* Enhanced Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFeatureFilter(category.id)}
                  className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                    activeFeatureFilter === category.id
                      ? 'bg-gradient-to-r from-white to-gray-200 text-black shadow-2xl shadow-white/25'
                      : 'bg-gray-900/50 text-gray-300 border border-gray-700/50 hover:bg-gray-800/50 hover:text-white hover:border-gray-600/50'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="relative z-10">{category.name}</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                    activeFeatureFilter === category.id ? 'bg-black/20' : 'bg-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center items-center gap-6 mb-16">
              {[
                // { mode: 'grid', icon: Grid, label: 'Grid View' },
                // { mode: 'list', icon: List, label: 'List View' }
              ].map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    viewMode === mode 
                      ? 'bg-white text-black' 
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Features Display */}
          <div className={`${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}`}>
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-xl border border-gray-800/40 rounded-2xl hover:border-gray-600/50 transition-all duration-700 hover:transform hover:scale-105 animate-feature-appear ${
                  viewMode === 'list' ? 'flex items-center p-8' : 'p-8'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                
                <div className={`relative z-10 ${viewMode === 'list' ? 'flex items-center w-full' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ${viewMode === 'list' ? 'mr-8 flex-shrink-0' : 'mb-6'}`}>
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gray-100 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Innovations Section */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Breakthrough Healthcare Innovations
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of healthcare with our revolutionary technologies that are redefining patient care and hospital operations.
              </p>
            </div>

            <div className="space-y-32">
              {/* Nurse Robot Integration */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative animate-slide-right">
                  {/* Robot Visualization */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 p-12 rounded-3xl backdrop-blur-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-700 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    
                    {/* Animated Robot */}
                    <div className="relative h-80 flex items-center justify-center">
                      {/* Robot Body */}
                      <div className="relative">
                        <div className="w-32 h-40 bg-gradient-to-b from-white to-gray-300 rounded-3xl mx-auto relative animate-float">
                          {/* Robot Head */}
                          <div className="w-24 h-24 bg-gradient-to-b from-gray-100 to-white rounded-2xl mx-auto -mt-6 relative">
                            {/* Eyes */}
                            <div className="flex space-x-4 pt-6 justify-center">
                              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            </div>
                            {/* Antenna */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-400">
                              <div className="w-2 h-2 bg-green-400 rounded-full -mt-1 animate-ping"></div>
                            </div>
                          </div>
                          
                          {/* Body Details */}
                          <div className="mt-4 space-y-2">
                            <div className="w-16 h-2 bg-gray-800/30 rounded mx-auto"></div>
                            <div className="w-12 h-2 bg-gray-800/20 rounded mx-auto"></div>
                          </div>
                          
                          {/* Arms */}
                          <div className="absolute top-8 -left-8 w-6 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                          <div className="absolute top-8 -right-8 w-6 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                        </div>
                        
                        {/* Base/Wheels */}
                        <div className="w-28 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mt-2">
                          <div className="flex justify-between items-center h-full px-2">
                            <div className="w-6 h-6 bg-gray-600 rounded-full animate-spin"></div>
                            <div className="w-6 h-6 bg-gray-600 rounded-full animate-spin" style={{animationDelay: '0.5s'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-lg animate-float" style={{animationDelay: '0.5s'}}>
                        <Pill className="w-4 h-4 text-white m-2" />
                      </div>
                      <div className="absolute bottom-12 right-8 w-6 h-6 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-lg animate-float" style={{animationDelay: '1.5s'}}>
                        <Heart className="w-3 h-3 text-white m-1.5" />
                      </div>
                      <div className="absolute top-1/2 right-4 w-4 h-4 bg-green-400/80 rounded-full animate-ping"></div>
                      
                      {/* Motion Lines */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-12 h-0.5 bg-gradient-to-r from-white/40 to-transparent mb-1 animate-pulse`} style={{animationDelay: `${i * 0.3}s`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-slide-left" style={{animationDelay: '0.3s'}}>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-3xl font-bold mb-6 text-white">
                        Autonomous Nurse Robots
                      </h4>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Revolutionary robotic assistants that handle routine nursing tasks with precision and care. Our AI-powered robots work alongside your medical staff to deliver medications, monitor patients, and provide round-the-clock support.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Truck className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Medication Delivery</h5>
                        <p className="text-gray-400 text-sm">Autonomous delivery of medications with 99.9% accuracy and real-time tracking.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Activity className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Patient Monitoring</h5>
                        <p className="text-gray-400 text-sm">Continuous vital sign monitoring with instant alert systems for medical staff.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Clock className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">24/7 Availability</h5>
                        <p className="text-gray-400 text-sm">Round-the-clock patient support reducing nurse workload by 40%.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Brain className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">AI Integration</h5>
                        <p className="text-gray-400 text-sm">Smart decision-making capabilities with machine learning algorithms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Disease Prediction */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 animate-slide-right" style={{animationDelay: '0.2s'}}>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-3xl font-bold mb-6 text-white">
                        AI Disease Prediction Engine
                      </h4>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Advanced Small Language Model trained on millions of medical records to predict diseases before symptoms appear. Our AI analyzes patient data patterns to identify risk factors and recommend preventive measures with unprecedented accuracy.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Eye className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Early Detection</h5>
                        <p className="text-gray-400 text-sm">Identify diseases up to 6 months before clinical manifestation with 94% accuracy.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <BarChart3 className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Risk Analysis</h5>
                        <p className="text-gray-400 text-sm">Comprehensive risk factor assessment with personalized health insights.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <FileText className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Treatment Plans</h5>
                        <p className="text-gray-400 text-sm">AI-generated personalized treatment recommendations based on patient data.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <TrendingUp className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Continuous Learning</h5>
                        <p className="text-gray-400 text-sm">Self-improving AI that gets smarter with every patient interaction.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative animate-slide-left">
                  {/* AI Brain Visualization */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 p-12 rounded-3xl backdrop-blur-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-700 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    
                    <div className="relative h-80 flex items-center justify-center">
                      {/* Central Brain */}
                      <div className="relative">
                        <Brain className="w-32 h-32 text-white animate-glow-pulse" />
                        
                        {/* Neural Network Connections */}
                        <div className="absolute inset-0">
                          {/* Synapses */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const radius = 80;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            
                            return (
                              <div
                                key={i}
                                className="absolute w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full animate-ping"
                                style={{
                                  left: `calc(50% + ${x}px - 6px)`,
                                  top: `calc(50% + ${y}px - 6px)`,
                                  animationDelay: `${i * 0.2}s`
                                }}
                              />
                            );
                          })}
                          
                          {/* Connection Lines */}
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute bg-gradient-to-r from-white/30 to-transparent animate-pulse"
                              style={{
                                width: '60px',
                                height: '1px',
                                left: '50%',
                                top: '50%',
                                transform: `rotate(${i * 60}deg) translateX(-30px)`,
                                transformOrigin: 'right center',
                                animationDelay: `${i * 0.3}s`
                              }}
                            />
                          ))}
                        </div>
                        
                        {/* Data Streams */}
                        <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center animate-float">
                          <Activity className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Floating Data Points */}
                      <div className="absolute top-4 right-4 text-xs text-gray-400 bg-black/30 px-2 py-1 rounded animate-fade-in-out">
                        Analyzing...
                      </div>
                      <div className="absolute bottom-8 left-4 text-xs text-green-400 bg-black/30 px-2 py-1 rounded animate-fade-in-out" style={{animationDelay: '2s'}}>
                        94% Accuracy
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blockchain Security */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative animate-slide-right" style={{animationDelay: '0.1s'}}>
                  {/* Blockchain Visualization */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 p-12 rounded-3xl backdrop-blur-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-700 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    
                    <div className="relative h-80 flex items-center justify-center">
                      {/* Blockchain Chain */}
                      <div className="flex items-center space-x-6">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className={`w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center shadow-lg animate-float`} style={{animationDelay: `${i * 0.3}s`}}>
                              <Shield className="w-8 h-8 text-black" />
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" style={{animationDelay: `${i * 0.5}s`}}></div>
                            </div>
                            
                            {/* Block Info */}
                            <div className="mt-2 text-center">
                              <div className="text-xs text-gray-400">Block #{i + 1}</div>
                              <div className="text-xs text-green-400 animate-pulse" style={{animationDelay: `${i * 0.2}s`}}>Verified</div>
                            </div>
                            
                            {/* Connection */}
                            {i < 3 && (
                              <div className="absolute left-20 w-6 h-0.5 bg-gradient-to-r from-white to-gray-300 animate-pulse" style={{animationDelay: `${i * 0.4}s`}}></div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Security Elements */}
                      <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-xl flex items-center justify-center animate-float">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-white/20 to-gray-300/20 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Encryption Indicators */}
                      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 bg-green-400 rounded-full mb-2 animate-ping`} style={{animationDelay: `${i * 0.5}s`}}></div>
                        ))}
                      </div>
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 bg-blue-400 rounded-full mb-2 animate-ping`} style={{animationDelay: `${i * 0.5 + 0.2}s`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-slide-left" style={{animationDelay: '0.4s'}}>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-3xl font-bold mb-6 text-white">
                        Blockchain Security Infrastructure
                      </h4>
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Military-grade security powered by distributed ledger technology. Every medical record, transaction, and data exchange is cryptographically secured and immutably stored across our blockchain network, ensuring absolute data integrity and patient privacy.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Shield className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Immutable Records</h5>
                        <p className="text-gray-400 text-sm">Tamper-proof medical records with cryptographic verification and audit trails.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Users className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Secure Sharing</h5>
                        <p className="text-gray-400 text-sm">Controlled data sharing between healthcare providers with patient consent.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <Database className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Data Integrity</h5>
                        <p className="text-gray-400 text-sm">Real-time verification of data authenticity with distributed consensus.</p>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-6 rounded-2xl backdrop-blur-xl border border-gray-800/40">
                        <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center mb-4">
                          <CheckCircle className="w-6 h-6 text-black" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-white">Compliance Ready</h5>
                        <p className="text-gray-400 text-sm">HIPAA, GDPR, and regulatory compliance with automated reporting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-32 px-6" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Why Industry Leaders Choose Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                {
                  icon: CheckCircle,
                  title: '99.9% Uptime Guarantee',
                  description: 'Mission-critical infrastructure with triple redundancy ensures your hospital operations never stop.',
                  gradient: 'from-green-400 to-emerald-300'
                },
                {
                  icon: Award,
                  title: '24/7 Expert Support',
                  description: 'Dedicated healthcare IT specialists with average response time under 5 minutes for critical issues.',
                  gradient: 'from-white to-gray-200'
                },
                {
                  icon: Zap,
                  title: '30-Day Implementation',
                  description: 'Fastest deployment in the industry with zero downtime migration and comprehensive staff training.',
                  gradient: 'from-gray-200 to-white'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group animate-slide-right" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-100 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative animate-slide-left" style={{animationDelay: '0.5s'}}>
              <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-12 rounded-3xl backdrop-blur-xl border border-gray-800/40 hover:border-gray-600/50 transition-all duration-700">
                <div className="grid grid-cols-2 gap-10 text-center">
                  {[
                    { value: '1000+', label: 'Hospitals Worldwide', color: 'text-white' },
                    { value: '5M+', label: 'Patients Managed', color: 'text-gray-200' },
                    { value: '45%', label: 'Cost Reduction', color: 'text-gray-100' },
                    { value: '99.2%', label: 'Customer Satisfaction', color: 'text-white' }
                  ].map((stat, index) => (
                    <div key={index} className="group">
                      <div className={`text-4xl font-black mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32 px-6" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Healthcare Leaders Speak
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/40 to-black/60 p-12 md:p-16 rounded-3xl backdrop-blur-xl border border-gray-800/40 hover:border-gray-600/50 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Main testimonial content */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-10">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-white to-gray-300 p-1">
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-lg text-gray-300 mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].hospital}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex lg:flex-col gap-8 lg:gap-4">
                    {Object.entries(testimonials[currentTestimonial].stats).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="text-2xl text-gray-200 leading-relaxed mb-10 font-light italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Navigation dots */}
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-white scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Transform Healthcare Today
            </h2>
            <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join the revolution. Experience the future of hospital management with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <button className="group px-12 py-6 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-white/25 transition-all transform hover:scale-110 duration-500 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Schedule Live Demo 
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-12 py-6 border-2 border-gray-600 text-gray-300 text-xl font-bold rounded-2xl hover:border-white hover:text-white hover:shadow-xl transition-all transform hover:scale-110 duration-500 relative overflow-hidden">
                <span className="relative z-10">Contact Sales</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-20 pt-16 border-t border-gray-800/50">
              <p className="text-gray-400 mb-8 text-lg">Trusted by leading healthcare institutions worldwide</p>
              <div className="flex justify-center items-center space-x-12 opacity-60">
                {['ISO 27001', 'HIPAA Compliant', 'SOC 2 Type II', 'FDA Approved'].map((cert, index) => (
                  <div key={index} className="text-gray-500 font-semibold text-lg hover:text-gray-400 transition-colors duration-300">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes feature-appear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-hero-enter {
          animation: hero-enter 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-up {
          animation: fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slide-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-feature-appear {
          animation: feature-appear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-gradient-shift-delayed {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
          animation-delay: 2s;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }

        /* Scroll-triggered animations */
        .opacity-0 {
          opacity: 0;
        }

        .translate-y-10 {
          transform: translateY(40px);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
    </HomeLayout>
  );
};

export default Home;