import React, { useState, useEffect, useRef } from 'react';

// Counter component for animating numbers
const Counter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTimestamp = null;
          const animateCount = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = (timestamp - startTimestamp) / duration;
            const currentCount = Math.min(progress * endValue, endValue);
            setCount(Math.floor(currentCount));
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};


function App() {
    
  const stats = [
    { icon: "🏥", value: 1500, label: "Hospitals Empowered" },
    { icon: "📈", value: 30, label: "Efficiency Boost (%)" },
    { icon: "🧑‍⚕️", value: 500000, label: "Patients Reached" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans antialiased">
      {/* Custom CSS for Animations - In a real project, these would be in tailwind.config.js */}
      <style>
        {`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
          }
          0% { opacity: 0; transform: scale3d(.3, .3, .3); }
          20% { transform: scale3d(1.1, 1.1, 1.1); }
          40% { transform: scale3d(.9, .9, .9); }
          60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
          80% { transform: scale3d(.97, .97, .97); }
          100% { opacity: 1; transform: scale3d(1, 1, 1); }
        }
        @keyframes flipIn {
          from { transform: perspective(400px) rotate3d(1, 0, 0, 90deg); opacity: 0; }
          40% { transform: perspective(400px) rotate3d(1, 0, 0, -20deg); }
          60% { transform: perspective(400px) rotate3d(1, 0, 0, 10deg); }
          80% { transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }
          to { transform: perspective(400px); opacity: 1; }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.8s ease-out forwards; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 10s ease infinite;
        }
        .animate-bounce-in { animation: bounceIn 1s ease-out forwards; }
        .animate-flip-in { animation: flipIn 1s ease-out forwards; }
        .animate-pulse-glow { animation: pulseGlow 2s infinite; }

        /* Delay utilities */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-550 { animation-delay: 0.55s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-650 { animation-delay: 0.65s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-750 { animation-delay: 0.75s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-850 { animation-delay: 0.85s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }

        /* Specific staggered animations for modules/impact cards */
        .animate-slide-in-bottom-stagger:nth-child(1) { animation-delay: 0.1s; }
        .animate-slide-in-bottom-stagger:nth-child(2) { animation-delay: 0.3s; }
        .animate-slide-in-bottom-stagger:nth-child(3) { animation-delay: 0.5s; }
        `}
      </style>

      {/* Header/Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] bg-opacity-90 backdrop-blur-sm shadow-md py-4 px-6 animate-fade-in-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-indigo-400 hover:scale-105 transition-transform duration-300">YourCompany ✨</a>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#modules" className="text-gray-300 hover:text-white transition-colors duration-300">Modules</a>
            <a href="#impact" className="text-gray-300 hover:text-white transition-colors duration-300">Impact</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="px-5 py-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md">Contact Us</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
            {/* Hamburger Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0f0f0f] bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-xl animate-fade-in">
              <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Features</a>
              <a href="#modules" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Modules</a>
              <a href="#impact" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Impact</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Testimonials</a>
              <a href="#contact" className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md" onClick={toggleMobileMenu}>Contact Us</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
        {/* Background Gradient / Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-indigo-900 to-[#0f0f0f] opacity-50 z-0"></div>
        {/* Animated Particles/Stars (conceptual, would be JS based) */}
        {/* <div className="absolute inset-0 z-10 animate-pulse-background" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/000000/FFFFFF?text=Subtle+Texture")', backgroundSize: 'cover', opacity: 0.05 }}></div> */}

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          {/* Headline - Animates in from bottom, slight delay */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in-up">
            Revolutionizing Healthcare with <span className="text-indigo-400">Smart Solutions</span>
          </h1>
          {/* Sub-headline - Animates in after headline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in-up delay-300">
            Empower your hospital with cutting-edge technology for unparalleled efficiency and patient care.
          </p>
          {/* Call to Action Buttons - Animate in with a slight bounce */}
          <div className="flex justify-center space-x-4 animate-bounce-in delay-600">
            <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg">
              Get Started
            </a>
            <a href="#features" className="px-8 py-4 border border-gray-600 text-gray-300 text-lg font-semibold rounded-full hover:border-white hover:text-white transition-transform transform hover:scale-105 duration-300 shadow-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#151515]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase mb-4 animate-fade-in-up">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 animate-fade-in-up delay-200">
            Key Features Designed for Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-400">
            Our platform integrates seamlessly to enhance every aspect of your healthcare facility.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Feature Card 1 - Fade in on scroll, subtle hover effect */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-in-bottom delay-100">
            <div className="mb-4 text-indigo-400 text-5xl animate-pulse-glow">💡</div> {/* Icon placeholder */}
            <h3 className="text-2xl font-semibold mb-3">Intuitive Dashboard</h3>
            <p className="text-gray-400">Gain real-time insights with a customizable dashboard for critical decision-making.</p>
          </div>
          {/* Feature Card 2 - Fade in on scroll, subtle hover effect */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-in-bottom delay-200">
            <div className="mb-4 text-indigo-400 text-5xl animate-pulse-glow delay-100">🔒</div> {/* Icon placeholder */}
            <h3 className="text-2xl font-semibold mb-3">Robust Security</h3>
            <p className="text-gray-400">Ensure data privacy and compliance with industry-leading security protocols.</p>
          </div>
          {/* Feature Card 3 - Fade in on scroll, subtle hover effect */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-slide-in-bottom delay-300">
            <div className="mb-4 text-indigo-400 text-5xl animate-pulse-glow delay-200">🔄</div> {/* Icon placeholder */}
            <h3 className="text-2xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-400">Connect effortlessly with existing systems for a unified operational flow.</p>
          </div>
          {/* Add more feature cards as needed, applying similar animation classes */}
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="bg-[#0f0f0f] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase mb-4 animate-fade-in-up">
             Modules
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 animate-fade-in-up delay-200">
            Modules That Power Every Department
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-400">
            Streamline hospital operations, boost clinical intelligence, and ensure financial transparency with end-to-end modular solutions.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm sm:text-base">
          {/* Core Operational Modules - Card fades in and slides up on scroll */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg animate-slide-in-bottom-stagger">
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Core Operational Modules</h3>
            <ul className="space-y-3 text-gray-300">
              {/* List items could individually fade in or slide */}
              <li className="animate-fade-in-left delay-500">✔ Patient Registration & Scheduling</li>
              <li className="animate-fade-in-left delay-550">✔ OPD/IPD Workflow</li>
              <li className="animate-fade-in-left delay-600">✔ Billing & TPA Integration</li>
              <li className="animate-fade-in-left delay-650">✔ Pharmacy, Laboratory & Radiology</li>
              <li className="animate-fade-in-left delay-700">✔ Discharge Summary & Case History</li>
              <li className="animate-fade-in-left delay-750">✔ Ward, Bed & OT Management</li>
              <li className="animate-fade-in-left delay-800">✔ Inventory & Biomedical Equipment</li>
            </ul>
          </div>
          {/* Clinical Intelligence Modules - Card fades in and slides up on scroll with delay */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg animate-slide-in-bottom-stagger">
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Clinical Intelligence Modules</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="animate-fade-in-left delay-600">✔ EMR/EHR with AI-Powered Insights</li>
              <li className="animate-fade-in-left delay-650">✔ Teleconsultation with e-Prescription</li>
              <li className="animate-fade-in-left delay-700">✔ Diet Planning, Nursing Notes, and Vitals</li>
              <li className="animate-fade-in-left delay-750">✔ Queue & Visitor Management</li>
              <li className="animate-fade-in-left delay-800">✔ In-App & WhatsApp Alerts</li>
            </ul>
          </div>
          {/* Administrative & Financial Modules - Card fades in and slides up on scroll with further delay */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg animate-slide-in-bottom-stagger">
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Administrative & Financial Modules</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="animate-fade-in-left delay-700">✔ HR, Staff & Roster Management</li>
              <li className="animate-fade-in-left delay-750">✔ Payroll, Leave & Appraisal</li>
              <li className="animate-fade-in-left delay-800">✔ Asset & AMC Tracking</li>
              <li className="animate-fade-in-left delay-850">✔ Financial Reporting & Audit Compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Impact Section (Enhanced with animations) */}
      <section id="impact" className="py-20 px-6 bg-[#1a1a1a]">
        <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)] text-center animate-fade-in-down">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl flex flex-col items-center border-t-4 border-blue-600 overflow-hidden group hover:scale-105 transition-transform duration-200 animate-slide-in-bottom-stagger"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(59,130,246,0.10), 0 1.5px 0 0 rgba(168,139,250,0.10)",
              }}
            >
              {/* Glassy animated gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-white/10 pointer-events-none animate-gradient-x" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl mb-4 drop-shadow-[0_2px_12px_rgba(59,130,246,0.18)] animate-fade-in animate-pulse-glow">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(59,130,246,0.18)]">
                  <Counter endValue={stat.value} />
                </h3>
                <p className="text-gray-100 text-lg font-medium animate-fade-in-up">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase mb-4 animate-fade-in-up">
            What Our Clients Say
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 animate-fade-in-up delay-200">
            Trusted by Leading Healthcare Providers
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 - Fades in and rotates slightly on scroll */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-xl animate-flip-in delay-100">
            <p className="text-gray-300 italic mb-4">"Our hospital's efficiency has drastically improved since implementing their solutions. The support is exceptional!"</p>
            <div className="flex items-center">
              <img src="https://placehold.co/48x48/6B7280/FFFFFF?text=Dr" alt="Dr. Anjali Sharma" className="w-12 h-12 rounded-full bg-gray-600 mr-4 object-cover" />
              <div>
                <p className="font-semibold text-white">Dr. Anjali Sharma</p>
                <p className="text-gray-500 text-sm">Chief Medical Officer, City Hospital</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 - Fades in and rotates slightly on scroll with delay */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-xl animate-flip-in delay-200">
            <p className="text-gray-300 italic mb-4">"The EMR system is intuitive and has truly transformed our clinical workflow. Highly recommended!"</p>
            <div className="flex items-center">
              <img src="https://placehold.co/48x48/6B7280/FFFFFF?text=Mr" alt="Mr. Rahul Verma" className="w-12 h-12 rounded-full bg-gray-600 mr-4 object-cover" />
              <div>
                <p className="font-semibold text-white">Mr. Rahul Verma</p>
                <p className="text-gray-500 text-sm">Hospital Administrator, Global Clinics</p>
              </div>
            </div>
          </div>
          {/* Testimonial Card 3 - Fades in and rotates slightly on scroll with further delay */}
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-xl animate-flip-in delay-300">
            <p className="text-gray-300 italic mb-4">"Their financial modules have brought unprecedented transparency and control to our operations."</p>
            <div className="flex items-center">
              <img src="https://placehold.co/48x48/6B7280/FFFFFF?text=Ms" alt="Ms. Priya Singh" className="w-12 h-12 rounded-full bg-gray-600 mr-4 object-cover" />
              <div>
                <p className="font-semibold text-white">Ms. Priya Singh</p>
                <p className="text-gray-500 text-sm">Finance Director, MedCare Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-800 to-purple-900 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-white animate-fade-in-up">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-lg text-indigo-200 mb-8 animate-fade-in-up delay-200">
            Join leading hospitals and clinics benefiting from our advanced healthcare management solutions.
          </p>
          <a href="#" className="px-10 py-5 bg-white text-indigo-700 text-xl font-bold rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 shadow-2xl inline-block animate-bounce-in delay-400">
            Request a Demo Today!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 px-6 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">YourCompany ✨</h3>
            <p className="mb-4">Driving innovation in healthcare technology for a healthier tomorrow.</p>
            <div className="flex space-x-4 text-gray-500">
              {/* Social Media Icons (placeholders) */}
              <a href="#" className="hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.176-1.555-3.594-1.555-3.491 0-6.334 2.843-6.334 6.334 0 .445.05.876.142 1.284-5.263-.266-9.927-2.792-13.053-6.698-.543.935-.857 2.016-.857 3.179 0 2.193 1.116 4.12 2.81 5.253-.92-.028-1.79-.283-2.551-.741v.08c0 3.067 2.184 5.617 5.091 6.195-.53.144-1.09.223-1.666.223-.406 0-.804-.04-.119-.118.803 2.518 3.141 4.341 5.918 4.341-2.176 1.705-4.916 2.724-7.906 2.724-.51 0-1.011-.03-1.503-.088 2.81 1.79 6.164 2.843 9.775 2.843 11.72 0 18.106-9.155 18.106-17.068 0-.26-.006-.519-.018-.778 1.246-.893 2.336-2 3.207-3.26z"/></svg>
              </a>
              {/* Add more icons: Facebook, Instagram, etc. */}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors duration-300">Modules</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors duration-300">Impact</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-300">EMR/EHR Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Billing & TPA</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Teleconsultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Inventory Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">HR & Payroll</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <p className="mb-2">123 Hospital Road, Chhatrapati Sambhajinagar, MH, India</p>
            <p className="mb-2">Email: info@yourcompany.com</p>
            <p className="mb-2">Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
