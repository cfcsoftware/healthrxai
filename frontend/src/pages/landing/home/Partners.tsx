import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true to trigger animations after component mounts
    setIsVisible(true);
  }, []);

  // Array of partner logos with placeholder image URLs
  // Duplicated for a seamless continuous scroll effect
  const partners = [
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Cisco", alt: "Cisco" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=TIME", alt: "TIME" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=DLA+Piper", alt: "DLA Piper" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Global+Atlantic", alt: "Global Atlantic" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Howard+Hughes", alt: "Howard Hughes" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Cengage", alt: "Cengage" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+7", alt: "Company 7" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+8", alt: "Company 8" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+9", alt: "Company 9" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+10", alt: "Company 10" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+11", alt: "Company 11" },
    { src: "https://placehold.co/120x40/1a1a2e/ffffff?text=Company+12", alt: "Company 12" },
  ];

  // Duplicate the partners array to create a seamless loop for the marquee effect
  const loopedPartners = [...partners, ...partners];

  return (
    <>
      <style>{`
        /* Animation for the introductory text */
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-slide-up {
          animation: fadeInSlideUp 0.6s ease-out forwards;
        }

        /* Marquee animation for the partner logos */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Moves half the content width (one full set of logos) */
        }

        .animate-marquee {
          animation: marquee 30s linear infinite; /* Adjust duration as needed */
        }
      `}</style>

      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Introductory text for partners section */}
        <p className={`text-center text-gray-400 text-base sm:text-lg mb-12 px-4 max-w-3xl mx-auto leading-relaxed transition-opacity duration-500 ${isVisible ? 'animate-fade-in-slide-up' : 'opacity-0'}`}>
          We proudly collaborate with leading <span className="font-semibold text-white">Generative AI Companies</span>, 
          U.S. Government Agencies, and <span className="font-semibold text-white underline underline-offset-4 decoration-purple-500">Global Enterprises</span> 
          to drive innovation and deliver impactful solutions.
        </p>

        {/* Container for the marquee effect */}
        {/* Using flexbox for a single row and overflow-hidden on the parent section */}
        <div className="relative w-full overflow-hidden py-4">
          <div className={`flex items-center justify-start gap-12 min-w-max ${isVisible ? 'animate-marquee' : ''}`}>
            {loopedPartners.map((partner, index) => (
              <div 
                key={index} // Using index as key is acceptable here due to static, duplicated list
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(20,20,30,0.6), rgba(30,30,40,0.6))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-10 sm:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  // Fallback for image loading errors
                  onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/120x40/333333/aaaaaa?text=Logo+Error";}}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
