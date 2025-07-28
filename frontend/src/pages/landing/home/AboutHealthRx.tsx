import React, { useState, useEffect } from 'react';

const App = () => { // Renamed from AboutHealthRx to App for consistency with Canvas environment
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true to trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        /* Keyframe animation for sliding up and fading in */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Keyframe animation for simple fade in */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Apply slide-in-up animation */
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        /* Apply fade-in animation */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        /* Staggered animation delays */
        .stagger-delay-1 { animation-delay: 0.1s; }
        .stagger-delay-2 { animation-delay: 0.3s; }
        .stagger-delay-3 { animation-delay: 0.5s; }
        .stagger-delay-4 { animation-delay: 0.7s; }
      `}</style>

      <section className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-semibold mb-6 ${isVisible ? 'animate-slide-in-up stagger-delay-1' : 'opacity-0'}`}>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-300">
              About HealthRx AI
            </span>
          </h2>
          <p className={`text-lg text-gray-300 max-w-3xl mx-auto mb-10 ${isVisible ? 'animate-slide-in-up stagger-delay-2' : 'opacity-0'}`}>
            HealthRx AI is an end-to-end healthcare automation platform designed to power the digital
            backbone of modern hospitals, clinics, and diagnostic labs.
          </p>
          <div className={`text-left max-w-4xl mx-auto space-y-5 text-gray-400 text-md leading-relaxed ${isVisible ? 'animate-fade-in stagger-delay-3' : 'opacity-0'}`}>
            <p>
              Combining <span className="text-white font-medium">Artificial Intelligence</span>, 
              <span className="text-white font-medium"> Blockchain</span>, 
              <span className="text-white font-medium"> IoT</span>, and 
              <span className="text-white font-medium"> Cloud-native architecture</span>, 
              HealthRx AI modernizes patient care, simplifies workflows, and ensures clinical and operational excellence.
            </p>
            <p>
              Our platform replaces fragmented systems with a single intelligent solution — scalable across locations, secure by design, and future-ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
