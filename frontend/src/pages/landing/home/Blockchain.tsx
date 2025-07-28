import React, { useState, useEffect, useRef } from 'react';

const Blockchain: React.FC = () => { // Keeping the function name as Blockchain as requested
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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

        @keyframes pulse-glow-blue {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.4); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes rotate-3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          75% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Animation classes */
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.7s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-pulse-glow-blue { animation: pulse-glow-blue 2.5s ease-in-out infinite; }
        .animate-float-subtle { animation: float-subtle 5s ease-in-out infinite; }
        .animate-rotate-3d { animation: rotate-3d 15s linear infinite; }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 8s ease infinite;
        }
        .animate-pop-in { animation: popIn 0.4s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.5s ease-out forwards; }


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
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent 40%);
        }

        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
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
          {/* Section Header */}
          <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 ${isInView ? 'animate-scale-in stagger-1' : 'opacity-0'}`}>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Blockchain Security
            </span>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 animate-gradient-x text-shadow-glow ${isInView ? 'animate-slide-in-up stagger-2' : 'opacity-0'}`}>
            Immutable & Secure Healthcare Data
          </h2>
          <p className={`text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${isInView ? 'animate-slide-in-up stagger-3' : 'opacity-0'}`}>
            Leveraging cutting-edge blockchain technology, HealthRx AI ensures unparalleled data integrity, transparency, and compliance for all medical records.
          </p>

          {/* Central Blockchain Visual */}
          <div className={`relative w-64 h-64 mx-auto mb-16 ${isInView ? 'animate-zoom-in-rotate stagger-4 animate-float-subtle' : 'opacity-0'}`}>
            <img
              src="https://placehold.co/256x256/0f0f0f/3b82f6?text=⛓️+Blockchain" // Placeholder for a blockchain visual
              alt="Blockchain Security Visual"
              className="w-full h-full object-contain animate-pulse-glow-blue rounded-full"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/256x256/333333/aaaaaa?text=Error"; }}
            />
            {/* Subtle glow effect around the image */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl animate-pulse-glow-blue -z-10"></div>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Card 1: Blockchain-Powered Data Security */}
            <div className={`glass-card p-10 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:border-blue-600 hover:shadow-blue-500/20 ${isInView ? 'animate-slide-in-up stagger-5' : 'opacity-0'}`}>
              <h3 className={`text-2xl font-semibold mb-4 text-blue-400 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
                Blockchain-Powered Data Security
              </h3>
              <p className={`text-gray-300 mb-6 leading-relaxed ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
                Security and transparency are built into the DNA of HealthRx AI using advanced blockchain infrastructure.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className={`flex items-start gap-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 animate-pulse-glow-blue`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Blockchain encryption for tamper-proof medical records</span>
                </li>
                <li className={`flex items-start gap-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 animate-pulse-glow-blue`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Complete audit trails for every action</span>
                </li>
                <li className={`flex items-start gap-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.3s' }}>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 animate-pulse-glow-blue`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Role-Based Access Control (RBAC)</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Immutable Compliance & Traceability */}
            <div className={`glass-card p-10 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:border-blue-600 hover:shadow-blue-500/20 ${isInView ? 'animate-slide-in-up stagger-6' : 'opacity-0'}`}>
              <h3 className={`text-2xl font-semibold mb-4 text-blue-400 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
                Immutable Compliance & Traceability
              </h3>
              <p className={`text-gray-300 mb-6 leading-relaxed ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
                Your data is not just protected — it’s immutable, traceable, and fully compliant.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className={`flex items-start gap-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 animate-pulse-glow-blue`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Immutable logs & timestamped transaction history</span>
                </li>
                <li className={`flex items-start gap-2 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.7s' }}>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5 animate-pulse-glow-blue`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Compliant with HIPAA, GDPR, NABH & HL7/FHIR standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Concluding Paragraph */}
          <p className={`text-gray-400 text-center mt-16 max-w-3xl mx-auto text-lg leading-relaxed ${isInView ? 'animate-slide-in-up stagger-7' : 'opacity-0'}`}>
            Doctors receive real-time alerts and AI-generated suggestions for early diagnosis, reducing readmissions and improving clinical outcomes.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blockchain;
