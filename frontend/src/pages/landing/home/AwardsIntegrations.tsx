import React, { useState, useEffect } from 'react';
import { Award, Shield,  Zap, Globe,  } from 'lucide-react';

const AwardsCertificationsPage = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certifications = [
    {
      id: 1,
      name: 'NABH Accreditation',
      description: 'National Accreditation Board for Hospitals & Healthcare Providers',
      logo: '🏥',
      status: 'Certified',
      validUntil: '2026',
      category: 'Healthcare Quality'
    },
    {
      id: 2,
      name: 'ISO 27001:2013',
      description: 'Information Security Management System',
      logo: '🔒',
      status: 'Certified',
      validUntil: '2025',
      category: 'Security'
    },
    {
      id: 3,
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      logo: '⚡',
      status: 'Certified',
      validUntil: '2025',
      category: 'Quality'
    },
    {
      id: 4,
      name: 'NDHM Compliance',
      description: 'National Digital Health Mission Integrated',
      logo: '🇮🇳',
      status: 'Compliant',
      validUntil: 'Ongoing',
      category: 'Digital Health'
    },
    {
      id: 5,
      name: 'HIPAA Compliant',
      description: 'Health Insurance Portability and Accountability Act',
      logo: '🛡️',
      status: 'Compliant',
      validUntil: 'Ongoing',
      category: 'Privacy'
    },
    {
      id: 6,
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      logo: '🔐',
      status: 'Certified',
      validUntil: '2025',
      category: 'Security'
    }
  ];

  const awards = [
    {
      id: 1,
      name: 'Best Healthcare Innovation',
      organization: 'HealthTech Awards 2024',
      year: '2024',
      icon: '🏆',
      description: 'Recognized for revolutionary patient care management system'
    },
    {
      id: 2,
      name: 'Digital Excellence Award',
      organization: 'India Digital Health Summit',
      year: '2023',
      icon: '🥇',
      description: 'Outstanding contribution to digital healthcare transformation'
    },
    {
      id: 3,
      name: 'Top 50 HealthTech Startups',
      organization: 'MedTech Breakthrough',
      year: '2023',
      icon: '⭐',
      description: 'Listed among the most promising healthcare technology companies'
    },
    {
      id: 4,
      name: 'Patient Safety Excellence',
      organization: 'Healthcare Quality Council',
      year: '2024',
      icon: '🎖️',
      description: 'Exceptional commitment to patient safety and care quality'
    }
  ];

  const integrations = [
    {
      category: 'Payment Gateways',
      partners: [
        { name: 'Razorpay', logo: '💳', description: 'Seamless payment processing' },
        { name: 'PayU', logo: '💰', description: 'Secure transaction gateway' },
        { name: 'Paytm', logo: '📱', description: 'Digital wallet integration' },
        { name: 'CCAvenue', logo: '🏦', description: 'Multi-currency support' }
      ]
    },
    {
      category: 'Laboratory Systems',
      partners: [
        { name: 'PathLabs', logo: '🔬', description: 'Automated lab reporting' },
        { name: 'SRL Diagnostics', logo: '🧪', description: 'Real-time test results' },
        { name: 'Dr. Lal PathLabs', logo: '⚗️', description: 'Comprehensive lab network' },
        { name: 'Thyrocare', logo: '🩺', description: 'Preventive healthcare tests' }
      ]
    },
    {
      category: 'EHR & Hospital Systems',
      partners: [
        { name: 'Epic Systems', logo: '📋', description: 'Electronic health records' },
        { name: 'Cerner', logo: '🏥', description: 'Hospital management system' },
        { name: 'Allscripts', logo: '📊', description: 'Clinical documentation' },
        { name: 'eClinicalWorks', logo: '💻', description: 'Practice management' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      partners: [
        { name: 'AWS', logo: '☁️', description: 'Cloud computing services' },
        { name: 'Microsoft Azure', logo: '🌐', description: 'Enterprise cloud platform' },
        { name: 'Google Cloud', logo: '🔵', description: 'AI-powered healthcare solutions' },
        { name: 'IBM Cloud', logo: '🔷', description: 'Hybrid cloud infrastructure' }
      ]
    }
  ];

  const TabButton = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const CertificationCard = ({ cert, index }) => (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredCard(cert.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{cert.logo}</div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          cert.status === 'Certified' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'
        }`}>
          {cert.status}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-lg">{cert.category}</span>
        <span className="text-xs text-gray-400">Valid until {cert.validUntil}</span>
      </div>
    </div>
  );

  const AwardCard = ({ award, index }) => (
    <div
      className={`bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl p-6 border border-yellow-700/30 hover:border-yellow-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">{award.icon}</div>
        <div>
          <h3 className="text-xl font-bold text-white">{award.name}</h3>
          <p className="text-yellow-400 text-sm font-semibold">{award.organization}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
            {award.year}
          </span>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{award.description}</p>
    </div>
  );

  const IntegrationSection = ({ category, partners, index }) => (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 rounded-xl p-4 border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:bg-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{partner.logo}</span>
              <h4 className="font-semibold text-white">{partner.name}</h4>
            </div>
            <p className="text-gray-400 text-sm">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Awards, Certifications & Integrations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Recognized excellence in healthcare technology, backed by industry-leading certifications 
              and seamless integrations with trusted partners worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          <TabButton
            id="certifications"
            label="Certifications"
            icon={<Shield className="w-5 h-5" />}
            isActive={activeTab === 'certifications'}
            onClick={setActiveTab}
          />
          <TabButton
            id="awards"
            label="Awards"
            icon={<Award className="w-5 h-5" />}
            isActive={activeTab === 'awards'}
            onClick={setActiveTab}
          />
          <TabButton
            id="integrations"
            label="Integrations"
            icon={<Globe className="w-5 h-5" />}
            isActive={activeTab === 'integrations'}
            onClick={setActiveTab}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {activeTab === 'certifications' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Certifications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our commitment to excellence is validated by leading industry certifications 
                ensuring the highest standards of quality, security, and compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'awards' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recognition & Awards</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Honored by industry leaders for innovation, excellence, and contribution 
                to advancing healthcare technology and patient care.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <AwardCard key={award.id} award={award} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partner Integrations</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Seamlessly connected with industry-leading platforms and services 
                to provide comprehensive healthcare solutions.
              </p>
            </div>
            <div className="space-y-8">
              {integrations.map((integration, index) => (
                <IntegrationSection
                  key={integration.category}
                  category={integration.category}
                  partners={integration.partners}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
     
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AwardsCertificationsPage;