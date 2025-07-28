"use client"
import React, { useState, useEffect, useRef } from 'react'

const Modules = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const [isInView, setIsInView] = useState(false)
  const [, setActiveCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const modules = [
    {
      id: 1,
      title: "Core Operational Modules",
      icon: "🏥",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      items: [
        "Patient Registration & Scheduling",
        "OPD/IPD Workflow",
        "Billing & TPA Integration", 
        "Pharmacy, Laboratory & Radiology",
        "Discharge Summary & Case History",
        "Ward, Bed & OT Management",
        "Inventory & Biomedical Equipment"
      ]
    },
    {
      id: 2,
      title: "Clinical Intelligence Modules",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      items: [
        "EMR/EHR with AI-Powered Insights",
        "Teleconsultation with e-Prescription",
        "Diet Planning, Nursing Notes, and Vitals",
        "Queue & Visitor Management",
        "In-App & WhatsApp Alerts"
      ]
    },
    {
      id: 3,
      title: "Administrative & Financial Modules",
      icon: "📊",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      items: [
        "HR, Staff & Roster Management",
        "Payroll, Leave & Appraisal",
        "Asset & AMC Tracking",
        "Financial Reporting & Audit Compliance"
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Stagger card animations
          modules.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  return (
    <>
      <style >{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: #3b82f6; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-360deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 8s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          background: rgba(15, 15, 35, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .list-item-enter {
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInLeft 0.5s ease-out forwards;
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-24 px-6 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.05), transparent 40%)`
          }}
        />

        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          {/* Floating Badge */}
          <div className={`inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Hospital Modules
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Main Title */}
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isInView ? 'animate-slide-up stagger-1' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x text-shadow-glow">
              Modules That Power
            </span>
            <br />
            <span className={`inline-block ${isInView ? 'animate-slide-up stagger-2' : 'opacity-0'}`}>
              Every Department
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${isInView ? 'animate-slide-up stagger-3' : 'opacity-0'}`}>
            Streamline hospital operations, boost clinical intelligence, and ensure financial transparency with 
            <span className="text-blue-400 font-semibold"> end-to-end modular solutions</span>.
          </p>

          {/* Decorative Line */}
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full ${isInView ? 'animate-scale-in stagger-4' : 'opacity-0'}`}></div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className={`group card-hover-effect glass-effect rounded-3xl p-8 border border-gray-700 hover:border-gray-600 relative overflow-hidden ${
                visibleCards.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveCard(module.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 ${module.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-3xl"></div>

              {/* Card Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-4xl animate-bounce-in ${visibleCards.includes(index) ? '' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.3 + 0.5}s` }}>
                    {module.icon}
                  </div>
                  <div className={`w-12 h-1 bg-gradient-to-r ${module.color} rounded-full ${visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 0.7}s` }}></div>
                </div>
                
                <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 ${visibleCards.includes(index) ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 0.4}s` }}>
                  {module.title}
                </h3>
              </div>

              {/* Module Items */}
              <ul className="space-y-4 relative z-10">
                {module.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-3 text-gray-300 group-hover:text-white transition-all duration-300 ${
                      visibleCards.includes(index) ? 'list-item-enter' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2 + itemIndex * 0.1 + 0.8}s` }}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center mt-0.5 animate-pulse-glow`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Card Footer Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${module.color} animate-pulse`}></div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Success Metrics Bar */}
        <div className={`max-w-4xl mx-auto mt-20 ${isInView ? 'animate-slide-up stagger-5' : 'opacity-0'}`}>
          <div className="glass-effect rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { number: "100+", label: "Hospitals Powered", icon: "🏥" },
                { number: "99.9%", label: "System Uptime", icon: "⚡" },
                { number: "24/7", label: "Expert Support", icon: "🛠️" }
              ].map((metric, index) => (
                <div key={index} className="group">
                  <div className="text-3xl mb-2 animate-bounce-in" style={{ animationDelay: `${index * 0.2 + 2}s` }}>
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors animate-wave" style={{ animationDelay: `${index * 0.5}s` }}>
                    {metric.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Modules