import React, { useState, useEffect } from 'react';
import { 
  Calendar,  CheckCircle,  Users, Bed, 
  Activity, Heart,  User,  ArrowRight, Play, BarChart3,  Zap, 
  Shield, AlertCircle,
   ArrowUp, 
   BedDouble, 
  Timer, 
   Brain, Baby, Scissors, 
} from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

const OpdIpd = () => {
  const [, setActiveTab] = useState('overview');
  const [, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [activeView, setActiveView] = useState('opd');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: Heart, color: 'text-red-400', opd: 24, ipd: 8, beds: 12 },
    { id: 'neurology', name: 'Neurology', icon: Brain, color: 'text-purple-400', opd: 18, ipd: 6, beds: 10 },
    { id: 'orthopedics', name: 'Orthopedics', icon: User, color: 'text-blue-400', opd: 32, ipd: 12, beds: 15 },
    { id: 'pediatrics', name: 'Pediatrics', icon: Baby, color: 'text-pink-400', opd: 45, ipd: 8, beds: 20 },
    { id: 'surgery', name: 'Surgery', icon: Scissors, color: 'text-green-400', opd: 15, ipd: 20, beds: 25 },
    { id: 'emergency', name: 'Emergency', icon: AlertCircle, color: 'text-orange-400', opd: 28, ipd: 15, beds: 18 }
  ];

  const opdPatients = [
    { id: 1, name: 'Sarah Johnson', age: 34, department: 'Cardiology', time: '09:00 AM', doctor: 'Dr. Smith', status: 'waiting', priority: 'normal' },
    { id: 2, name: 'Michael Chen', age: 28, department: 'Neurology', time: '09:30 AM', doctor: 'Dr. Brown', status: 'in-consultation', priority: 'high' },
    { id: 3, name: 'Emma Rodriguez', age: 45, department: 'Orthopedics', time: '10:00 AM', doctor: 'Dr. Wilson', status: 'completed', priority: 'normal' },
    { id: 4, name: 'David Park', age: 52, department: 'Cardiology', time: '10:30 AM', doctor: 'Dr. Smith', status: 'scheduled', priority: 'urgent' }
  ];

  const ipdPatients = [
    { 
      id: 1, 
      name: 'Lisa Anderson', 
      age: 38, 
      department: 'Surgery', 
      room: 'S-201', 
      bed: 'B1', 
      admissionDate: '2024-07-25', 
      doctor: 'Dr. Johnson',
      condition: 'Post-operative care',
      vitals: { bp: '120/80', hr: '75', temp: '98.6°F', spo2: '99%' },
      status: 'stable'
    },
    { 
      id: 2, 
      name: 'Robert Wilson', 
      age: 62, 
      department: 'Cardiology', 
      room: 'C-105', 
      bed: 'B2', 
      admissionDate: '2024-07-24', 
      doctor: 'Dr. Smith',
      condition: 'Cardiac monitoring',
      vitals: { bp: '140/90', hr: '82', temp: '99.1°F', spo2: '97%' },
      status: 'monitoring'
    },
    { 
      id: 3, 
      name: 'Maria Garcia', 
      age: 29, 
      department: 'Pediatrics', 
      room: 'P-301', 
      bed: 'B1', 
      admissionDate: '2024-07-26', 
      doctor: 'Dr. Davis',
      condition: 'Pneumonia treatment',
      vitals: { bp: '110/70', hr: '68', temp: '101.2°F', spo2: '95%' },
      status: 'critical'
    }
  ];

  const bedOccupancy = [
    { department: 'Cardiology', total: 12, occupied: 8, available: 4, occupancyRate: 67 },
    { department: 'Surgery', total: 25, occupied: 20, available: 5, occupancyRate: 80 },
    { department: 'Pediatrics', total: 20, occupied: 12, available: 8, occupancyRate: 60 },
    { department: 'Emergency', total: 18, occupied: 15, available: 3, occupancyRate: 83 },
    { department: 'Neurology', total: 10, occupied: 6, available: 4, occupancyRate: 60 },
    { department: 'Orthopedics', total: 15, occupied: 12, available: 3, occupancyRate: 80 }
  ];

  const stats = [
    { label: 'OPD Patients Today', value: '186', change: '+15%', icon: Users },
    { label: 'IPD Admissions', value: '42', change: '+8%', icon: Bed },
    { label: 'Bed Occupancy', value: '73%', change: '+5%', icon: BedDouble },
    { label: 'Avg Length of Stay', value: '4.2 days', change: '-12%', icon: Timer }
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-indigo-400" />,
      title: "Smart OPD Scheduling",
      description: "AI-powered appointment system with intelligent slot allocation, doctor availability tracking, and automated patient flow optimization.",
      benefits: ["Reduced waiting times by 40%", "Smart conflict resolution", "Multi-channel booking support", "Automated reminders & notifications"]
    },
    {
      icon: <Bed className="w-8 h-8 text-emerald-400" />,
      title: "Advanced IPD Management",
      description: "Comprehensive inpatient care system with bed management, admission workflows, and real-time patient monitoring.",
      benefits: ["Real-time bed availability", "Automated discharge planning", "Care team coordination", "Treatment progress tracking"]
    },
    {
      icon: <Activity className="w-8 h-8 text-rose-400" />,
      title: "Real-Time Monitoring",
      description: "Live patient status tracking with vital signs integration, alert systems, and predictive health analytics.",
      benefits: ["Continuous vital monitoring", "Early warning systems", "Predictive analytics", "Emergency response alerts"]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
      title: "Workflow Automation",
      description: "Streamlined approval processes, automated documentation, and intelligent task management for healthcare teams.",
      benefits: ["Automated approvals", "Digital documentation", "Task prioritization", "Compliance tracking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics dashboard with performance metrics, trend analysis, and operational insights.",
      benefits: ["Performance dashboards", "Trend analysis", "Resource optimization", "Financial insights"]
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Security & Compliance",
      description: "HIPAA-compliant platform with role-based access, audit trails, and enterprise-grade security measures.",
      benefits: ["HIPAA compliance", "Role-based access", "Audit trails", "Data encryption"]
    }
  ];

 

  const Hero = () => (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by 3,000+ Healthcare Facilities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Complete
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                OPD/IPD Solution
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Streamline outpatient and inpatient workflows with intelligent scheduling, real-time monitoring, 
              and comprehensive patient care management in one unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all"
              >
                <Play className="w-5 h-5" />
                <span>View Live Dashboard</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Dashboard Preview */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Live Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setActiveView('opd')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      activeView === 'opd' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    OPD
                  </button>
                  <button 
                    onClick={() => setActiveView('ipd')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      activeView === 'ipd' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    IPD
                  </button>
                </div>
              </div>
              
              {activeView === 'opd' ? (
                <div className="space-y-4">
                  <div className="text-gray-400 text-sm mb-3">Outpatient Queue</div>
                  {opdPatients.slice(0, 3).map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          patient.status === 'in-consultation' ? 'bg-blue-400 animate-pulse' :
                          patient.status === 'waiting' ? 'bg-yellow-400' :
                          patient.status === 'completed' ? 'bg-green-400' : 'bg-gray-400'
                        }`}></div>
                        <div>
                          <p className="text-white font-medium">{patient.name}</p>
                          <p className="text-gray-400 text-sm">{patient.department} • {patient.doctor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm">{patient.time}</p>
                        <p className={`text-xs ${
                          patient.priority === 'urgent' ? 'text-red-400' :
                          patient.priority === 'high' ? 'text-orange-400' : 'text-gray-400'
                        }`}>
                          {patient.priority}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-gray-400 text-sm mb-3">Inpatient Status</div>
                  {ipdPatients.slice(0, 3).map((patient) => (
                    <div key={patient.id} className="p-4 bg-gray-700/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-white font-medium">{patient.name}</p>
                          <p className="text-gray-400 text-sm">{patient.room} • {patient.condition}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          patient.status === 'critical' ? 'bg-red-500/20 text-red-400' :
                          patient.status === 'monitoring' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {patient.status}
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-gray-400">BP</div>
                          <div className="text-white">{patient.vitals.bp}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400">HR</div>
                          <div className="text-white">{patient.vitals.hr}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400">Temp</div>
                          <div className="text-white">{patient.vitals.temp}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-400">SpO2</div>
                          <div className="text-white">{patient.vitals.spo2}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Healthcare Management</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage outpatient and inpatient care seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6 p-3 bg-gray-700/50 rounded-xl w-fit group-hover:bg-indigo-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const LiveDashboard = () => (
    <section id="live-dashboard" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Live Management Dashboard</h2>
          <p className="text-xl text-gray-400">Real-time insights into your healthcare operations</p>
        </div>

        {/* Department Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <dept.icon className={`w-6 h-6 ${dept.color}`} />
                  <h3 className="text-white font-semibold">{dept.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm font-medium">{dept.beds} beds</div>
                  <div className="text-gray-400 text-xs">total capacity</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                  <div className="text-blue-400 text-2xl font-bold">{dept.opd}</div>
                  <div className="text-gray-400 text-xs">OPD Patients</div>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg">
                  <div className="text-green-400 text-2xl font-bold">{dept.ipd}</div>
                  <div className="text-gray-400 text-xs">IPD Patients</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bed Occupancy Chart */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Bed Occupancy Analysis</h3>
          <div className="space-y-4">
            {bedOccupancy.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-white font-medium w-32">{item.department}</div>
                  <div className="flex-1 bg-gray-700 rounded-full h-3 max-w-xs">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        item.occupancyRate > 80 ? 'bg-red-400' :
                        item.occupancyRate > 60 ? 'bg-yellow-400' : 'bg-green-400'
                      }`}
                      style={{ width: `${item.occupancyRate}%` }}
                    ></div>
                  </div>
                  <div className="text-white text-sm font-medium">{item.occupancyRate}%</div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div>{item.occupied}/{item.total} beds</div>
                  <div>{item.available} available</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

 

  return (
    <HomeLayout>
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Features />
      <LiveDashboard />
      
      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
    </HomeLayout>
  );
};

export default OpdIpd;