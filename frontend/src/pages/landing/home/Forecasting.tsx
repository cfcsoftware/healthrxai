

import React, { useState, useEffect, useRef } from 'react';

const Forecasting: React.FC = () => { // Renamed to App and explicitly typed as React.FC
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Features/Benefits of the forecasting system
  const benefits = [
    { title: "Proactive Interventions", icon: "�", description: "Identify risks before symptoms appear, enabling timely medical action." },
    { title: "Personalized Treatment", icon: "🎯", description: "Tailor care plans based on individual patient risk profiles and predictions." },
    { title: "Optimized Resource Allocation", icon: "📈", description: "Forecast disease outbreaks and patient influx to manage hospital resources efficiently." }
  ];

  useEffect(() => {
    // Intersection Observer to trigger animations when the section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect after animation is triggered
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle mouse movement for interactive background glow
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <>
      <style>{`
        /* Keyframe animations */
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.4), 0 0 30px rgba(236, 72, 153, 0.2); }
          50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.6), 0 0 50px rgba(236, 72, 153, 0.4); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes zoomInRotate {
            from { opacity: 0; transform: scale(0.5) rotate(-45deg); }
            to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Animation classes */
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-float-subtle { animation: float-subtle 5s ease-in-out infinite; }
        .animate-zoom-in-rotate { animation: zoomInRotate 1s ease-out forwards; }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 8s ease infinite;
        }

        /* Staggered delays for elements */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }

        /* Glassmorphism effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Interactive background gradient */
        .interactive-gradient {
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(236, 72, 153, 0.08), transparent 40%);
        }

        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Background Glow */}
        <div 
          className="absolute inset-0 pointer-events-none interactive-gradient z-0"
          style={{ '--mouse-x': `${mousePosition.x}%`, '--mouse-y': `${mousePosition.y}%` } as React.CSSProperties}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Predictive AI Badge */}
          <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 ${isInView ? 'animate-scale-in stagger-1' : 'opacity-0'}`}>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-widest text-pink-400 uppercase">
              Predictive AI
            </span>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Main Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400 animate-gradient-x text-shadow-glow ${isInView ? 'animate-slide-in-up stagger-2' : 'opacity-0'}`}>
            Early Disease Detection & Forecasting
          </h2>
          {/* Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${isInView ? 'animate-slide-in-up stagger-3' : 'opacity-0'}`}>
            Our intelligent prediction engine continuously learns from clinical data, vitals, history, and lifestyle indicators to enable proactive, AI-powered healthcare.
          </p>

          {/* Central Visual Element */}
          <div className={`relative w-64 h-64 mx-auto mb-16 ${isInView ? 'animate-zoom-in-rotate stagger-4 animate-float-subtle' : 'opacity-0'}`}>
            <img
              src="https://placehold.co/256x256/0f0f0f/ec4899?text=AI+Predict" // Placeholder for a predictive AI visual
              alt="AI Prediction Visual"
              className="w-full h-full object-contain animate-pulse-glow rounded-full"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/256x256/333333/aaaaaa?text=Error"; }}
            />
            {/* Subtle glow effect around the image */}
            <div className="absolute inset-0 rounded-full bg-pink-400 opacity-20 blur-xl animate-pulse-glow -z-10"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                  isInView ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2 + 0.8}s` }} // Staggered delay for each benefit card
              >
                <div className={`text-4xl mb-4 text-pink-400 ${isInView ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 0.9}s` }}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-semibold text-white mb-2 ${isInView ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 1.0}s` }}>
                  {benefit.title}
                </h3>
                <p className={`text-gray-300 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2 + 1.1}s` }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Forecasting;
