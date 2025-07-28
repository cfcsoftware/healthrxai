import React, { useState, useEffect, useRef } from 'react';

const NurseRobots: React.FC = () => { // Renamed to App and explicitly typed as React.FC
  const [isInView, setIsInView] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Define the features of the nurse robots
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const robotFeatures: string[] = [
    "In-ward patient movement",
    "Medicine delivery & dosage tracking",
    "Routine checks and ward rounds",
    "Collecting vitals & syncing with EMR",
    "Voice-controlled patient interaction",
    "Autonomous pharmacy dispatch within hospital"
  ];

  useEffect(() => {
    // Intersection Observer to trigger animations when the section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stagger card animations for a smooth entrance
          robotFeatures.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150); // Stagger delay for each card
          });
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
  }, [robotFeatures]); // Empty dependency array means this effect runs once on mount

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

        @keyframes pulse-light {
          0%, 100% { box-shadow: 0 0 15px rgba(129, 140, 248, 0.4), 0 0 30px rgba(129, 140, 248, 0.2); }
          50% { box-shadow: 0 0 25px rgba(129, 140, 248, 0.6), 0 0 50px rgba(129, 140, 248, 0.4); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes rotate-3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
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
        .animate-pulse-light { animation: pulse-light 2.5s ease-in-out infinite; }
        .animate-float-subtle { animation: float-subtle 5s ease-in-out infinite; }
        .animate-rotate-3d { animation: rotate-3d 15s linear infinite; }
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
        .stagger-9 { animation-delay: 0.9s; }
        .stagger-10 { animation-delay: 1.0s; }
        .stagger-11 { animation-delay: 1.1s; }
        .stagger-12 { animation-delay: 1.2s; }


        /* Glassmorphism effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Interactive background gradient */
        .interactive-gradient {
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(129, 140, 248, 0.08), transparent 40%);
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
          {/* Section Title */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ${isInView ? 'animate-slide-in-up stagger-1' : 'opacity-0'}`}>
            🤖 Introducing AI-Powered Nurse Robots
          </h2>
          {/* Section Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed ${isInView ? 'animate-slide-in-up stagger-2' : 'opacity-0'}`}>
            The future of patient care is here. HealthRx AI seamlessly integrates with AI-powered nurse robots to enhance safety, optimize staff workload, and deliver 24/7 care automation.
          </p>

          {/* Main Robot Image/Illustration */}
          <div className={`relative w-48 h-48 mx-auto mb-16 ${isInView ? 'animate-scale-in stagger-3 animate-float-subtle' : 'opacity-0'}`}>
            <img
              src="https://placehold.co/192x192/0f0f0f/818cf8?text=AI+Robot" // Placeholder image for the robot
              alt="AI Nurse Robot"
              className="w-full h-full object-contain animate-pulse-light animate-rotate-3d rounded-full"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/192x192/333333/aaaaaa?text=Robot+Error"; }}
            />
            {/* Subtle glow effect around the robot image */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-xl animate-pulse-light -z-10"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {robotFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                  visibleCards.includes(index) ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15 + 0.5}s` }} // Staggered delay for each card
              >
                <p className={`flex items-center text-gray-200 font-medium ${visibleCards.includes(index) ? 'animate-slide-in-left' : 'opacity-0'}`}
                   style={{ animationDelay: `${index * 0.15 + 0.7}s` }} // Staggered delay for text
                >
                  <svg className={`w-5 h-5 text-green-400 mr-2 flex-shrink-0 ${visibleCards.includes(index) ? 'animate-pop-in' : 'opacity-0'}`}
                       style={{ animationDelay: `${index * 0.15 + 0.6}s` }} // Staggered delay for checkmark
                       fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Concluding Text */}
          <p className={`text-md text-gray-400 mt-16 max-w-3xl mx-auto leading-relaxed ${isInView ? 'animate-slide-in-up stagger-8' : 'opacity-0'}`}>
            Empower your hospital with next-gen robotics, combining real-time intelligence and automation—only with <span className="text-blue-400 font-semibold">HealthRx AI</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default NurseRobots;
