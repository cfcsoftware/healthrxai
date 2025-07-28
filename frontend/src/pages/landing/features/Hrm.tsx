import React, { useState, useEffect } from 'react';
import { 
  Shield, Activity, BarChart3, Database, Users,  
  CheckCircle, Star, ArrowRight, Play, ChevronRight,
   Cloud,  ArrowUp,  Plus, Minus
} from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

const Hem = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Integrated Patient Records",
      description: "Secure, centralized access to comprehensive patient data across all departments with real-time synchronization.",
      stats: "99.9% Uptime"
    },
    {
      icon: <Activity className="w-8 h-8 text-emerald-400" />,
      title: "Real-Time Monitoring",
      description: "Monitor vitals, lab results, and patient history in one dynamic, AI-powered dashboard with predictive analytics.",
      stats: "50% Faster Diagnosis"
    },
    {
      icon: <Shield className="w-8 h-8 text-rose-400" />,
      title: "HIPAA & Compliance",
      description: "Built-in compliance with health data protection regulations, including SOC 2, GDPR, and advanced encryption.",
      stats: "100% Compliant"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Advanced Analytics",
      description: "Analyze trends in care, billing, and operations using AI-powered insights and machine learning algorithms.",
      stats: "300% ROI Average"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Multi-User Platform",
      description: "Role-based access control for doctors, nurses, administrators, and specialists with seamless collaboration tools.",
      stats: "Unlimited Users"
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud deployment with automatic backups, disaster recovery, and global accessibility.",
      stats: "Enterprise Grade"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      hospital: "Metropolitan General Hospital",
      content: "MediCore EMR has revolutionized our patient care delivery. The intuitive interface and powerful analytics have improved our efficiency by 40%.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      hospital: "Regional Health Network",
      content: "The implementation was seamless, and the security features give us complete confidence in patient data protection.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Emergency Medicine",
      hospital: "City Medical Center",
      content: "Real-time patient monitoring has been a game-changer for our emergency department operations.",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "per provider/month",
      features: [
        "Basic EMR functionality",
        "Patient management",
        "Appointment scheduling",
        "Basic reporting",
        "24/7 support",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "per provider/month",
      features: [
        "Advanced EMR suite",
        "Real-time analytics",
        "Custom workflows",
        "API integrations",
        "Advanced reporting",
        "Dedicated support",
        "Multi-location support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Full platform access",
        "AI-powered insights",
        "Custom integrations",
        "White-label options",
        "On-premise deployment",
        "24/7 dedicated support",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Our standard implementation takes 2-4 weeks for most healthcare facilities. Enterprise deployments may take 6-8 weeks depending on complexity and custom requirements."
    },
    {
      question: "Is patient data migration included?",
      answer: "Yes, we provide comprehensive data migration services as part of our onboarding process. Our team ensures 100% data integrity during the transition."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 200+ healthcare systems including lab equipment, imaging systems, pharmacy management, billing software, and major EHR platforms."
    },
    {
      question: "How do you ensure HIPAA compliance?",
      answer: "Our platform is built with HIPAA compliance at its core, featuring end-to-end encryption, audit trails, access controls, and regular security assessments by third-party auditors."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Healthcare Providers" },
    { number: "5M+", label: "Patient Records" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Expert Support" }
  ];

  

  const Hero = () => (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
            Trusted by 10,000+ Healthcare Providers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Next-Generation
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EMR/EHR Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Empower healthcare providers with intelligent, secure, and intuitive electronic medical records. 
            Streamline patient care, improve outcomes, and reduce administrative burden.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section id="features" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Healthcare Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to deliver exceptional patient care, streamlined in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-6 p-3 bg-gray-700/50 rounded-xl w-fit group-hover:bg-blue-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold text-sm">{feature.stats}</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Healthcare Leaders</h2>
          <p className="text-xl text-gray-400">See what medical professionals are saying about MediCore EMR</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-400">Flexible pricing for healthcare organizations of all sizes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
              plan.popular 
                ? 'border-blue-500/50 ring-2 ring-blue-500/20 transform scale-105' 
                : 'border-gray-700/50 hover:border-blue-500/30'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border border-gray-600 hover:border-blue-500 text-white hover:text-blue-400'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQ = () => (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Get answers to common questions about our EMR platform</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {expandedFaq === index ? 
                  <Minus className="w-5 h-5 text-blue-400" /> : 
                  <Plus className="w-5 h-5 text-gray-400" />
                }
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );



  

  return (
    <HomeLayout>
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      
      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
    </HomeLayout>
  );
};

export default Hem;