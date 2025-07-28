import React, { useState, useEffect } from 'react';
import {  Play, Download, MessageCircle, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeParticle, setActiveParticle] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveParticle(prev => (prev + 1) % 20);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const ctaCards = [
    {
      id: 'demo',
      title: 'Request Demo',
      subtitle: 'See it in action',
      description: 'Experience our platform with a personalized walkthrough tailored to your business needs.',
      icon: Play,
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      hoverGradient: 'from-blue-500 via-cyan-400 to-blue-600',
      features: ['Live walkthrough', 'Custom scenarios', 'Q&A session'],
      buttonText: 'Schedule Demo',
      estimatedTime: '30 min demo'
    },
    {
      id: 'sales',
      title: 'Talk to Sales',
      subtitle: 'Get expert guidance',
      description: 'Connect with our enterprise specialists to discuss pricing, implementation, and custom solutions.',
      icon: MessageCircle,
      gradient: 'from-purple-600 via-pink-500 to-orange-400',
      hoverGradient: 'from-purple-500 via-orange-400 to-pink-600',
      features: ['Pricing consultation', 'Implementation planning', 'Custom solutions'],
      buttonText: 'Contact Sales',
      estimatedTime: '15 min call'
    },
    {
      id: 'brochure',
      title: 'Download Brochure',
      subtitle: 'Comprehensive overview',
      description: 'Get detailed information about features, pricing, case studies, and technical specifications.',
      icon: Download,
      gradient: 'from-emerald-600 via-teal-500 to-green-400',
      hoverGradient: 'from-emerald-500 via-green-400 to-teal-600',
      features: ['Product specifications', 'Case studies', 'Pricing guide'],
      buttonText: 'Download Now',
      estimatedTime: 'Instant download'
    }
  ];

  const Particle = ({ index, isActive }) => (
    <div
      className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ${
        isActive ? 'opacity-100 scale-150' : 'opacity-30 scale-100'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.1}s`
      }}
    />
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} index={i} isActive={i === activeParticle} />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Take the Next Step
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of enterprises who trust our platform to drive innovation, 
            streamline operations, and accelerate growth.
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ctaCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;
            
            return (
              <div
                key={card.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Gradient Border */}
                <div className={`relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 ${
                  isHovered 
                    ? 'border-transparent bg-gray-800/80 scale-105 shadow-2xl' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  } bg-gradient-to-r ${card.gradient} p-[1px]`}>
                    <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl h-full w-full" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon with Animated Background */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl transition-all duration-500 ${
                      isHovered 
                        ? `bg-gradient-to-r ${card.hoverGradient} shadow-lg` 
                        : 'bg-gray-700/50'
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-gray-300'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                        <span className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                          isHovered 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {card.estimatedTime}
                        </span>
                      </div>
                      <p className="text-gray-400 font-medium mb-4">{card.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{card.description}</p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 mb-8">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className={`w-4 h-4 transition-colors duration-300 ${
                            isHovered ? 'text-green-400' : 'text-gray-500'
                          }`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 group/btn ${
                      isHovered
                        ? `bg-gradient-to-r ${card.gradient} text-white shadow-lg transform hover:scale-105`
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}>
                      <div className="flex items-center justify-center gap-2">
                        <span>{card.buttonText}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? 'group-hover/btn:translate-x-1' : ''
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Trust Indicators */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-8 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-8 py-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Trusted by Fortune 500 companies worldwide • SOC 2 Type II Certified • GDPR Compliant
          </p>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CallToAction;