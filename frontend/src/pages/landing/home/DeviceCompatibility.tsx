import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Wifi, 
  Shield, 
  MessageCircle, 
  Cloud, 
  Bot,
  Video,
  Heart,
  Stethoscope,
  Clock,
  CheckCircle,
  Star,
  Download,
  Play,
  ArrowRight,
  Zap,
  Users,
  Globe
} from 'lucide-react';

type SectionVisibility = {
  mobile?: boolean;
  workflow?: boolean;
  integration?: boolean;
  automation?: boolean;
};

const DeviceCompatibility = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [isVisible, setIsVisible] = useState<SectionVisibility>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({...prev, [entry.target.id]: true}));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mobileFeatures = [
    { icon: <Video className="w-6 h-6" />, title: "HD Video Consultations", desc: "Crystal clear 4K video calls with adaptive streaming" },
    { icon: <Heart className="w-6 h-6" />, title: "Vital Monitoring", desc: "Real-time health data integration and tracking" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Secure Messaging", desc: "HIPAA-compliant encrypted communication" },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Sync", desc: "Seamless data synchronization across devices" }
  ];

  const workflowSteps = [
    { step: 1, title: "Patient Books", desc: "Schedule via app or portal", icon: <Clock className="w-8 h-8" /> },
    { step: 2, title: "Pre-screening", desc: "AI-powered health assessment", icon: <Stethoscope className="w-8 h-8" /> },
    { step: 3, title: "Video Consult", desc: "HD video call with provider", icon: <Video className="w-8 h-8" /> },
    { step: 4, title: "Follow-up", desc: "Automated care reminders", icon: <MessageCircle className="w-8 h-8" /> }
  ];

  const deviceCompatibility = [
    { name: "iOS", version: "15.0+", icon: <Smartphone className="w-8 h-8" />, compatibility: "100%" },
    { name: "Android", version: "8.0+", icon: <Smartphone className="w-8 h-8" />, compatibility: "100%" },
    { name: "iPad", version: "iPadOS 15+", icon: <Tablet className="w-8 h-8" />, compatibility: "100%" },
    { name: "Web", version: "All Browsers", icon: <Monitor className="w-8 h-8" />, compatibility: "100%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Zap className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Enterprise Healthcare Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Mobile Telehealth
              <span className="block text-4xl md:text-6xl text-blue-400">& Device Compatibility</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive healthcare solutions across all platforms with enterprise-grade security, 
              seamless integration, and intelligent automation for modern healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <Download className="w-5 h-5 inline mr-2" />
                Download Apps
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-semibold hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 inline mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 bg-slate-800/50 p-2 rounded-2xl backdrop-blur-sm border border-slate-700/50">
          {[
            { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
            { id: 'workflow', label: 'Telemedicine', icon: <Video className="w-4 h-4" /> },
            { id: 'integration', label: 'Integration', icon: <Cloud className="w-4 h-4" /> },
            { id: 'automation', label: 'Automation', icon: <Bot className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Apps Section */}
      {activeTab === 'mobile' && (
        <div id="mobile" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${isVisible.mobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cross-Platform Mobile Excellence</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Native iOS and Android applications with enterprise-grade security and seamless user experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Screenshots */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* iOS App Mockup */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800 rounded-3xl p-6 border border-slate-700/50 transform group-hover:scale-105 transition-all duration-300">
                    <div className="bg-black rounded-2xl p-4 aspect-[9/16]">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-full p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-sm font-medium">iOS App</div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="h-4 bg-white/30 rounded mb-2"></div>
                            <div className="h-3 bg-white/20 rounded w-3/4"></div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="h-4 bg-white/30 rounded mb-2"></div>
                            <div className="h-3 bg-white/20 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3 text-center">
                          <Video className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-white text-xs">Start Consultation</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-white font-semibold">Healthcare Pro</div>
                      <div className="text-gray-400 text-sm">iOS 15.0+</div>
                    </div>
                  </div>
                </div>

                {/* Android App Mockup */}
                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800 rounded-3xl p-6 border border-slate-700/50 transform group-hover:scale-105 transition-all duration-300">
                    <div className="bg-black rounded-2xl p-4 aspect-[9/16]">
                      <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl h-full p-4 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Stethoscope className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-sm font-medium">Android App</div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="h-4 bg-white/30 rounded mb-2"></div>
                            <div className="h-3 bg-white/20 rounded w-4/5"></div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-3">
                            <div className="h-4 bg-white/30 rounded mb-2"></div>
                            <div className="h-3 bg-white/20 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-3 text-center">
                          <MessageCircle className="w-8 h-8 text-white mx-auto mb-2" />
                          <div className="text-white text-xs">Secure Messaging</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-white font-semibold">MedConnect</div>
                      <div className="text-gray-400 text-sm">Android 8.0+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Compatibility Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">Device Compatibility</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deviceCompatibility.map((device, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {device.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{device.name}</h4>
                  <p className="text-gray-400 mb-4">{device.version}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-medium">{device.compatibility}</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Telemedicine Workflow */}
      {activeTab === 'workflow' && (
        <div id="workflow" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${isVisible.workflow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Telemedicine Workflow</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end patient journey with intelligent automation and clinical excellence
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="text-blue-400 font-bold text-sm mb-2">STEP {step.step}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Video Consultation Interface */}
          <div className="mt-20 bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Live Consultation Interface</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-black rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                  <div className="relative text-center">
                    <Video className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <div className="text-white text-lg font-semibold mb-2">HD Video Call Active</div>
                    <div className="text-gray-400">Patient: Sarah Johnson</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4">
                    <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Video className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Patient Vitals</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Heart Rate</span>
                      <span className="text-green-400">72 BPM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Blood Pressure</span>
                      <span className="text-green-400">120/80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Temperature</span>
                      <span className="text-green-400">98.6°F</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">Session Notes</h4>
                  <textarea className="w-full bg-slate-800 rounded-lg p-3 text-white text-sm resize-none" rows={4} placeholder="Enter consultation notes..."></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integration Section */}
      {activeTab === 'integration' && (
        <div id="integration" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${isVisible.integration ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">WhatsApp & Cloud Integration</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Seamless connectivity with popular messaging platforms and enterprise cloud services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* WhatsApp Integration */}
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">WhatsApp Business Integration</h3>
                  <p className="text-gray-400">Automated patient reminders and updates</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs text-white font-bold">H</div>
                    <div className="flex-1">
                      <div className="bg-green-600 rounded-2xl rounded-tl-sm p-3 text-white text-sm mb-1">
                        Hi Sarah! Your appointment with Dr. Smith is scheduled for tomorrow at 2:00 PM. Please join via the HealthApp 15 minutes early.
                      </div>
                      <div className="text-xs text-gray-400">Healthcare Bot • 2:30 PM</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-4">
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white font-bold">S</div>
                    <div className="flex-1 text-right">
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 text-white text-sm mb-1 inline-block">
                        Thank you! I'll be ready.
                      </div>
                      <div className="text-xs text-gray-400">You • 2:32 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-400">Delivery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">45%</div>
                  <div className="text-sm text-gray-400">No-Show Reduction</div>
                </div>
              </div>
            </div>

            {/* Cloud Integration */}
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Cloud Services</h3>
                  <p className="text-gray-400">Secure, scalable healthcare data management</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {['AWS', 'Azure', 'Google Cloud'].map((cloud, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-4 text-center">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Cloud className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-white text-sm font-medium">{cloud}</div>
                      <div className="text-green-400 text-xs">Connected</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-white text-sm">HIPAA Compliance</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span className="text-white text-sm">Global CDN</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wifi className="w-5 h-5 text-purple-400" />
                      <span className="text-white text-sm">99.9% Uptime</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Smart Robot Delivery */}
      {activeTab === 'automation' && (
        <div id="automation" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-700 ${isVisible.automation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Smart Robot Delivery System</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Autonomous healthcare delivery with AI-powered logistics and real-time tracking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Robot Visualization */}
            <div className="relative">
              <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  
                  {/* Robot Illustration */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <Bot className="w-16 h-16 text-white" />
                    </div>
                    
                    {/* Delivery Path Animation */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Status Indicators */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 rounded-full px-4 py-2">
                      <div className="text-green-400 text-sm font-medium">En Route</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-12 right-12 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-16 left-12 w-2 h-2 bg-green-400 rounded-full opacity-80 animate-pulse"></div>
                </div>
                
                {/* Delivery Statistics */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-sm text-gray-400">Availability</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">15min</div>
                    <div className="text-sm text-gray-400">Avg Delivery</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">99.8%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Features */}
            <div className="space-y-8">
              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI-Powered Logistics</h3>
                    <p className="text-gray-400">Intelligent route optimization and delivery scheduling</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Route Optimization</span>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Real-time Tracking</span>
                    <span className="text-green-400 font-medium">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Contactless Delivery</span>
                    <span className="text-green-400 font-medium">Available</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Medical Supply Delivery</h3>
                    <p className="text-gray-400">Temperature-controlled pharmaceutical transport</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-semibold text-white">2-8°C</div>
                    <div className="text-xs text-gray-400">Cold Chain</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                    <div className="text-lg font-semibold text-white">15-25°C</div>
                    <div className="text-xs text-gray-400">Room Temp</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Patient Communication</h3>
                    <p className="text-gray-400">Automated updates and delivery notifications</p>
                  </div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="text-sm text-gray-300 italic">
                    "Your medication delivery robot is 5 minutes away. Please ensure someone is available to receive the package."
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Auto-generated • 2 minutes ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Tracking Interface */}
          <div className="mt-16 bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Live Delivery Tracking</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-700/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Active Deliveries</h4>
                <div className="space-y-4">
                  {[
                    { id: 'RB001', patient: 'Sarah Johnson', status: 'En Route', eta: '8 min', progress: 75 },
                    { id: 'RB002', patient: 'Mike Davis', status: 'Preparing', eta: '25 min', progress: 25 },
                    { id: 'RB003', patient: 'Emma Wilson', status: 'Delivered', eta: 'Complete', progress: 100 }
                  ].map((delivery, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white font-medium">Robot {delivery.id}</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          delivery.status === 'Delivered' ? 'bg-green-600/20 text-green-400' :
                          delivery.status === 'En Route' ? 'bg-blue-600/20 text-blue-400' :
                          'bg-yellow-600/20 text-yellow-400'
                        }`}>
                          {delivery.status}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">To: {delivery.patient}</div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">ETA: {delivery.eta}</span>
                        <span className="text-sm text-gray-300">{delivery.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            delivery.status === 'Delivered' ? 'bg-green-500' :
                            delivery.status === 'En Route' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${delivery.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-700/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Fleet Status</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">12</div>
                    <div className="text-sm text-gray-400">Active Robots</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">8</div>
                    <div className="text-sm text-gray-400">In Transit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">4</div>
                    <div className="text-sm text-gray-400">Charging</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">156</div>
                    <div className="text-sm text-gray-400">Today's Deliveries</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-white text-sm">Average Delivery Time</span>
                    <span className="text-green-400 font-semibold">14.2 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-white text-sm">Success Rate</span>
                    <span className="text-green-400 font-semibold">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-white text-sm">Patient Satisfaction</span>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-white text-sm ml-2">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
     
    </div>
  );
};

export default DeviceCompatibility;