"use client"
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [, setIsVisible] = useState(false)
  const [, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 10
    }))
    setParticles(newParticles)
  }, [])


  return (
    <>
      <style >{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        
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
        
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
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
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 8s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
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
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
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
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          background: rgba(15, 15, 35, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, 
            #0f0f23 0%, 
            #1a1a2e 25%, 
            #16213e 50%, 
            #0f3460 75%, 
            #1a1a2e 100%);
          background-size: 400% 400%;
          animation: gradient-x 15s ease infinite;
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
      `}</style>

      {/* Hero Banner */}
       <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
        {/* Background Gradient / Shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-indigo-900 to-[#0f0f0f] opacity-50 z-0"></div>
        {/* Animated Particles/Stars (conceptual, would be JS based) */}
        {/* <div className="absolute inset-0 z-10 animate-pulse-background" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/000000/FFFFFF?text=Subtle+Texture")', backgroundSize: 'cover', opacity: 0.05 }}></div> */}

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          {/* Headline - Animates in from bottom, slight delay */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight  animate-fade-in-up">
  <span className="text-white to-indigo-500 bg-clip-text text-transparent">
     Revolutionize<br/> 
  </span>
  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
     Healthcare with AI-Driven
  </span>
  <br />
  <span className="text-slate-100"> Hospital Automation </span>
</h1>

          {/* Sub-headline - Animates in after headline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in-up delay-300">
            Empower your hospital with cutting-edge technology for unparalleled efficiency and patient care.
          </p>
          {/* Call to Action Buttons - Animate in with a slight bounce */}
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-600">
  <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-lg font-semibold rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg">
    Get Started
  </a>
  <a href="#features" className="px-8 py-4 border border-gray-600 text-gray-300 text-lg font-semibold rounded-full hover:border-white hover:text-white transition-transform transform hover:scale-105 duration-300 shadow-lg">
    Learn More
  </a>
</div>

        </div>
      </section>
    </>
  )
}

export default Hero