import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, CheckCircle, Users, UserPlus, Bell, 
     Star, ArrowRight, Play, 
    BarChart3,  Zap, 
  Shield, Smartphone,   
      Eye,
  RefreshCw,   User, 
  Heart,  Brain, TestTube,  ArrowUp,  } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

const AppointmentQueueSystem = () => {
  const [, setActiveView] = useState('dashboard');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

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
    { id: 'cardiology', name: 'Cardiology', icon: Heart, color: 'text-red-400', patients: 12, avgWait: '15 min' },
    { id: 'neurology', name: 'Neurology', icon: Brain, color: 'text-purple-400', patients: 8, avgWait: '22 min' },
    { id: 'orthopedics', name: 'Orthopedics', icon: User, color: 'text-blue-400', patients: 15, avgWait: '18 min' },
    { id: 'pediatrics', name: 'Pediatrics', icon: Heart, color: 'text-pink-400', patients: 20, avgWait: '12 min' },
    { id: 'dermatology', name: 'Dermatology', icon: Eye, color: 'text-green-400', patients: 6, avgWait: '8 min' },
    { id: 'radiology', name: 'Radiology', icon: TestTube, color: 'text-cyan-400', patients: 10, avgWait: '25 min' }
  ];

  const queueData = [
    { id: 1, name: 'Sarah Johnson', department: 'Cardiology', appointmentTime: '09:00 AM', status: 'in-progress', waitTime: '5 min', priority: 'high' },
    { id: 2, name: 'Michael Chen', department: 'Neurology', appointmentTime: '09:15 AM', status: 'waiting', waitTime: '12 min', priority: 'normal' },
    { id: 3, name: 'Emma Rodriguez', department: 'Orthopedics', appointmentTime: '09:30 AM', status: 'checked-in', waitTime: '8 min', priority: 'normal' },
    { id: 4, name: 'David Park', department: 'Pediatrics', appointmentTime: '09:45 AM', status: 'scheduled', waitTime: '0 min', priority: 'low' },
    { id: 5, name: 'Lisa Anderson', department: 'Dermatology', appointmentTime: '10:00 AM', status: 'waiting', waitTime: '15 min', priority: 'high' }
  ];

  const timeSlots = [
    { time: '09:00 AM', available: true, department: 'Cardiology' },
    { time: '09:15 AM', available: false, department: 'Cardiology' },
    { time: '09:30 AM', available: true, department: 'Cardiology' },
    { time: '09:45 AM', available: true, department: 'Cardiology' },
    { time: '10:00 AM', available: false, department: 'Cardiology' },
    { time: '10:15 AM', available: true, department: 'Cardiology' }
  ];

  const stats = [
    { label: 'Today\'s Appointments', value: '247', change: '+12%', icon: Calendar },
    { label: 'Average Wait Time', value: '14 min', change: '-8%', icon: Clock },
    { label: 'Patient Satisfaction', value: '98.5%', change: '+2.1%', icon: Star },
    { label: 'No-Show Rate', value: '3.2%', change: '-1.5%', icon: Users }
  ];

  const features = [
    {
      icon: <UserPlus className="w-8 h-8 text-indigo-400" />,
      title: "Smart Appointment Booking",
      description: "AI-powered scheduling system that optimizes appointment slots based on patient history, provider availability, and urgency levels.",
      benefits: ["Reduces scheduling conflicts by 90%", "Automatic waitlist management", "Multi-channel booking (web, mobile, phone)"]
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: "Real-Time Queue Management",
      description: "Live monitoring of patient flow with predictive wait time calculations and dynamic queue optimization.",
      benefits: ["Real-time wait time updates", "Queue position tracking", "Bottleneck identification"]
    },
    {
      icon: <Bell className="w-8 h-8 text-rose-400" />,
      title: "Intelligent Notifications",
      description: "Multi-channel communication system with personalized reminders, updates, and delay notifications.",
      benefits: ["SMS, email, and push notifications", "Automated appointment reminders", "Delay and cancellation alerts"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics dashboard for optimizing operations and improving patient experience.",
      benefits: ["Patient flow analytics", "Staff productivity metrics", "Revenue optimization insights"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile-First Experience",
      description: "Native mobile apps for patients and staff with offline capability and seamless synchronization.",
      benefits: ["iOS and Android apps", "Offline check-in capability", "Real-time synchronization"]
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Enterprise Security",
      description: "HIPAA-compliant platform with end-to-end encryption, audit trails, and role-based access control.",
      benefits: ["HIPAA compliance", "End-to-end encryption", "Comprehensive audit trails"]
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
              Trusted by 5,000+ Healthcare Facilities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Queue Management
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Transform your healthcare facility with intelligent appointment scheduling, real-time queue management, 
              and predictive analytics that reduce wait times by up to 60%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveView('live-demo')}
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all"
              >
                <Play className="w-5 h-5" />
                <span>View Live Demo</span>
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

          {/* Live Demo Preview */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Live Queue Status</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {queueData.slice(0, 3).map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        patient.status === 'in-progress' ? 'bg-blue-400 animate-pulse' :
                        patient.status === 'waiting' ? 'bg-yellow-400' :
                        patient.status === 'checked-in' ? 'bg-green-400' : 'bg-gray-400'
                      }`}></div>
                      <div>
                        <p className="text-white font-medium">{patient.name}</p>
                        <p className="text-gray-400 text-sm">{patient.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-sm">{patient.appointmentTime}</p>
                      <p className="text-gray-400 text-xs">Wait: {patient.waitTime}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Average Wait Time</span>
                  <span className="text-white font-semibold">14 minutes</span>
                </div>
              </div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Queue Management Suite</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to optimize patient flow, reduce wait times, and improve satisfaction
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

  const LiveDemo = () => (
    <section id="live-demo" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Interactive Live Demo</h2>
          <p className="text-xl text-gray-400">Experience the power of real-time queue management</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Department Overview */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Departments</h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div 
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedDepartment === dept.id 
                        ? 'bg-indigo-600/20 border border-indigo-500/30' 
                        : 'bg-gray-700/30 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <dept.icon className={`w-5 h-5 ${dept.color}`} />
                        <span className="text-white font-medium">{dept.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-sm">{dept.patients}</p>
                        <p className="text-gray-400 text-xs">patients</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Avg. wait:</span>
                      <span className="text-white text-sm">{dept.avgWait}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Queue Status */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Current Queue Status</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live Updates</span>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {queueData.map((patient, index) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="text-white font-bold text-lg">#{index + 1}</div>
                      <div className={`w-3 h-3 rounded-full ${
                        patient.status === 'in-progress' ? 'bg-blue-400 animate-pulse' :
                        patient.status === 'waiting' ? 'bg-yellow-400' :
                        patient.status === 'checked-in' ? 'bg-green-400' : 'bg-gray-400'
                      }`}></div>
                      <div>
                        <p className="text-white font-medium">{patient.name}</p>
                        <p className="text-gray-400 text-sm">{patient.department} • {patient.appointmentTime}</p>
                      </div>
                      {patient.priority === 'high' && (
                        <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
                          Priority
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        patient.status === 'in-progress' ? 'text-blue-400' :
                        patient.status === 'waiting' ? 'text-yellow-400' :
                        patient.status === 'checked-in' ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {patient.status.charAt(0).toUpperCase() + patient.status.slice(1).replace('-', ' ')}
                      </p>
                      <p className="text-gray-400 text-sm">Wait: {patient.waitTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking Demo */}
            <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Appointment Booking</h4>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => slot.available && setSelectedTimeSlot(slot)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      slot.available
                        ? selectedTimeSlot === slot
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <div>{slot.time}</div>
                    <div className="text-xs opacity-75">
                      {slot.available ? 'Available' : 'Booked'}
                    </div>
                  </button>
                ))}
              </div>
              {selectedTimeSlot && (
                <div className="mt-4 p-4 bg-indigo-600/10 border border-indigo-500/30 rounded-lg">
                  <p className="text-indigo-400 text-sm">Selected: {selectedTimeSlot.time}</p>
                  <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
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
      <LiveDemo />
      
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

export default AppointmentQueueSystem;