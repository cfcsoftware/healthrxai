import React, { useEffect, useState } from 'react'
import { CheckCircle, Star } from "lucide-react";
const CoreModules = () => {

    const stats = [
      { value: "10K+", label: "Beds Served", icon: "🛏️" },
      { value: "1M+", label: "Reports Processed", icon: "📄" },
      { value: "500+", label: "Hospitals Using", icon: "🏥" },
    ];

    const modules = [
  {
    name: "HMS",
    description:
      "Comprehensive Hospital Management System for seamless operations.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-blue-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "AI",
    description: "Cutting-edge AI diagnostics and predictive analytics.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-purple-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Robot",
    description: "Robotic process automation for healthcare efficiency.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <circle cx="12" cy="12" r="1" />
        <path d="M8 7V5M16 7V5M8 17v2M16 17v2" />
      </svg>
    ),
  },
  {
    name: "Blockchain",
    description: "Secure, transparent medical records powered by blockchain.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-yellow-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

const testimonials = [
  {
      name: "Sarah Johnson",
      title: "CEO, TechCorp",
      quote: "This platform transformed our entire business operations. The ROI was immediate and substantial.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b0127a4d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "CTO, InnovateLab",
      quote: "Incredible performance and reliability. Our team productivity increased by 300% in just 3 months.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "VP Operations, GlobalTech",
      quote: "The best investment we've made. Seamless integration and outstanding customer support.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
];

 const [isVisible, setIsVisible] = useState<{ testimonials: boolean }>({
  testimonials: false,
});

   useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          });
        },
        { threshold: 0.1 }
      );
  
      document.querySelectorAll('[id]').forEach((el) => {
        observer.observe(el);
      });
  
      return () => observer.disconnect();
    }, []);

  return (
    <div>
        <section className="relative py-20 px-8 bg-black text-white overflow-hidden">
          {/* Glassy background effect extended to all content */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-black via-[#181826] to-[#2e1065] opacity-90" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px]" />
          </div>
          <div className="relative z-10">
            {/* Modules Snapshot */}
            <h2 className="text-4xl font-bold text-center mb-12 tracking-tight bg-gradient-to-r from-purple-300 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(168,139,250,0.7)]">
              Our Core Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-24">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="relative group bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(128,0,255,0.18)] transition-all duration-200"
                  style={{
                    boxShadow:
                      "0 4px 32px 0 rgba(128,0,255,0.10), 0 1.5px 0 0 rgba(59,130,246,0.10)",
                  }}
                >
                  {/* Glassy overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-blue-900/10 to-purple-900/10 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    {mod.icon}
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(168,139,250,0.5)]">
                      {mod.name}
                    </h3>
                    <p className="text-gray-200 text-base">{mod.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonials */}
            <section id="testimonials" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their businesses
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {testimonials.map((t, idx) => (
                <div key={idx}
                     className={`relative group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center overflow-hidden hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.18)] transition-all duration-500 transform ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                     style={{ transitionDelay: `${idx * 0.2}s` }}>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200/10 via-purple-200/10 to-white/5 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-6">
                      <img src={t.avatar} alt={t.name}
                           className="w-20 h-20 rounded-full border-4 border-blue-400/30 shadow-lg group-hover:scale-110 group-hover:shadow-blue-300/40 transition-all duration-300" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    
                    <p className="text-gray-200 italic text-lg mb-6 text-center leading-relaxed group-hover:text-blue-200 transition-colors duration-300">
                      "{t.quote}"
                    </p>
                    
                    <div className="text-center">
                      <div className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {t.name}
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {t.title}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 text-6xl text-blue-400/20 font-serif">"</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Partnered Hospitals */}
            <h2 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)] text-center animate-fade-in-down">
              Our Trusted Partners
            </h2>
            {/* Continuous horizontal scroll effect for partner cards */}
            <div className="relative w-full overflow-x-hidden mb-24">
              <div
                className="flex gap-10 items-center animate-partner-scroll px-2"
                style={{
                  width: "max-content",
                  minWidth: "100%",
                  animation: "partner-scroll 32s linear infinite",
                }}
              >
                {[
                  {
                    name: "City General Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="12"
                          width="32"
                          height="28"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="18"
                          y="24"
                          width="12"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="22"
                          y="28"
                          width="4"
                          height="8"
                          rx="1"
                          fill="currentColor"
                          className="text-blue-400"
                        />
                        <rect
                          x="14"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Sunrise Medical Center",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-yellow-200/70"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="20"
                          width="16"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Green Valley Clinic",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="10"
                          y="18"
                          width="28"
                          height="18"
                          rx="4"
                          fill="currentColor"
                          className="text-green-200/60"
                        />
                        <rect
                          x="20"
                          y="26"
                          width="8"
                          height="10"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Starlight Health",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 28,20 40,20 30,28 34,40 24,32 14,40 18,28 8,20 20,20"
                          fill="currentColor"
                          className="text-purple-200/60"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Blue River Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="16"
                          width="32"
                          height="20"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="20"
                          y="24"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <path
                          d="M8 36 Q24 44 40 36"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Hopewell Medical",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M24 8 Q32 8 32 16 Q32 24 24 32 Q16 24 16 16 Q16 8 24 8Z"
                          fill="currentColor"
                          className="text-pink-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Lakeside Care",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <ellipse
                          cx="24"
                          cy="28"
                          rx="16"
                          ry="8"
                          fill="currentColor"
                          className="text-cyan-200/60"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="12"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Unity Health Group",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-indigo-200/60"
                        />
                        <rect
                          x="22"
                          y="16"
                          width="4"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="22"
                          width="16"
                          height="4"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Pinecrest Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 32,40 24,32 16,40"
                          fill="currentColor"
                          className="text-emerald-200/60"
                        />
                        <rect
                          x="20"
                          y="28"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Wellness Partners",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="12"
                          y="12"
                          width="24"
                          height="24"
                          rx="6"
                          fill="currentColor"
                          className="text-orange-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ].map((partner, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center min-w-[180px] max-w-[200px] mx-2 group"
                  >
                    {/* Glassy, glowing card effect */}
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-white/10 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-6 py-6">
                      {partner.icon}
                      <span className="text-lg text-blue-300 font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate the list for seamless infinite scroll */}
                {[
                  {
                    name: "City General Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="12"
                          width="32"
                          height="28"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="18"
                          y="24"
                          width="12"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="22"
                          y="28"
                          width="4"
                          height="8"
                          rx="1"
                          fill="currentColor"
                          className="text-blue-400"
                        />
                        <rect
                          x="14"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Sunrise Medical Center",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-yellow-200/70"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="20"
                          width="16"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Green Valley Clinic",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="10"
                          y="18"
                          width="28"
                          height="18"
                          rx="4"
                          fill="currentColor"
                          className="text-green-200/60"
                        />
                        <rect
                          x="20"
                          y="26"
                          width="8"
                          height="10"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Starlight Health",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 28,20 40,20 30,28 34,40 24,32 14,40 18,28 8,20 20,20"
                          fill="currentColor"
                          className="text-purple-200/60"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Blue River Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="16"
                          width="32"
                          height="20"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="20"
                          y="24"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <path
                          d="M8 36 Q24 44 40 36"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Hopewell Medical",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M24 8 Q32 8 32 16 Q32 24 24 32 Q16 24 16 16 Q16 8 24 8Z"
                          fill="currentColor"
                          className="text-pink-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Lakeside Care",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <ellipse
                          cx="24"
                          cy="28"
                          rx="16"
                          ry="8"
                          fill="currentColor"
                          className="text-cyan-200/60"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="12"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Unity Health Group",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-indigo-200/60"
                        />
                        <rect
                          x="22"
                          y="16"
                          width="4"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="22"
                          width="16"
                          height="4"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Pinecrest Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 32,40 24,32 16,40"
                          fill="currentColor"
                          className="text-emerald-200/60"
                        />
                        <rect
                          x="20"
                          y="28"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Wellness Partners",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="12"
                          y="12"
                          width="24"
                          height="24"
                          rx="6"
                          fill="currentColor"
                          className="text-orange-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ].map((partner, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="relative flex flex-col items-center min-w-[180px] max-w-[200px] mx-2 group"
                  >
                    {/* Glassy, glowing card effect */}
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-white/10 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-6 py-6">
                      {partner.icon}
                      <span className="text-lg text-blue-300 font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Animation keyframes for horizontal scroll */}
              <style>
                {`
                  @keyframes partner-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}
              </style>
            </div>

            {/* Quick Stats */}
            <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)] text-center animate-fade-in-down">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl flex flex-col items-center border-t-4 border-blue-600 overflow-hidden group hover:scale-105 transition-transform duration-200"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(59,130,246,0.10), 0 1.5px 0 0 rgba(168,139,250,0.10)",
                  }}
                >
                  {/* Glassy animated gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-white/10 pointer-events-none animate-gradient-x" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-5xl mb-4 drop-shadow-[0_2px_12px_rgba(59,130,246,0.18)] animate-fade-in">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(59,130,246,0.18)]">
                      {stat.value}
                    </h3>
                    <p className="text-gray-100 text-lg font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>
            {`
              @keyframes animateGradientX {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
              .animate-gradient-x {
                background-size: 200% 200%;
                animation: animateGradientX 4s linear infinite alternate;
              }
            `}
          </style>
        </section>

    </div>
  )
}

export default CoreModules