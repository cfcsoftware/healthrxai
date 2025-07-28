import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Users, 
  Globe, 
  Database, 
  CheckCircle, 
  Activity, 
  Clock, 
  Award, 
  Fingerprint, 
  Server, 
  Network,
  UserCheck,
  Settings,
  Zap,
  ArrowRight,
  Play,
  Pause,
  Check
} from 'lucide-react';

const SecurityCompliance = () => {
  const [selectedCompliance, setSelectedCompliance] = useState(null);
  const [auditAnimation, setAuditAnimation] = useState(true);
  const [currentAuditStep, setCurrentAuditStep] = useState(0);
  const [securityScore, setSecurityScore] = useState(0);

  const securityFeatures = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Advanced Threat Protection",
      description: "Multi-layered security architecture with AI-powered threat detection and real-time monitoring",
      gradient: "from-blue-500 to-cyan-500",
      stats: { threats: "99.99%", detection: "< 1ms", coverage: "24/7" }
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Blockchain Data Integrity",
      description: "Immutable audit trails and data verification using enterprise blockchain technology",
      gradient: "from-purple-500 to-pink-500",
      stats: { integrity: "100%", immutable: "Forever", blocks: "Million+" }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Compliance Ready",
      description: "Built-in compliance for HIPAA, GDPR, ABDM/NDHM and international healthcare standards",
      gradient: "from-green-500 to-teal-500",
      stats: { standards: "15+", regions: "Global", updates: "Automatic" }
    }
  ];

  const complianceStandards = [
    {
      id: "hipaa",
      title: "HIPAA Compliance",
      icon: <Shield className="w-8 h-8" />,
      description: "Full compliance with Health Insurance Portability and Accountability Act requirements",
      features: [
        "Administrative Safeguards Implementation",
        "Physical Safeguards & Access Controls",
        "Technical Safeguards & Encryption",
        "Business Associate Agreements",
        "Breach Notification Procedures",
        "Risk Assessment & Management"
      ],
      certifications: ["HIPAA Certified", "HiTrust CSF", "NIST Compliant"],
      color: "blue",
      region: "United States"
    },
    {
      id: "gdpr",
      title: "GDPR Compliance",
      icon: <Globe className="w-8 h-8" />,
      description: "General Data Protection Regulation compliance for European Union data protection",
      features: [
        "Data Subject Rights Management",
        "Consent Management System",
        "Data Portability & Erasure",
        "Privacy by Design Architecture",
        "Data Protection Impact Assessments",
        "Cross-border Data Transfer Controls"
      ],
      certifications: ["GDPR Certified", "ISO 27001", "Privacy Shield"],
      color: "green",
      region: "European Union"
    },
    {
      id: "abdm",
      title: "ABDM/NDHM Ready",
      icon: <Network className="w-8 h-8" />,
      description: "Ayushman Bharat Digital Mission and National Digital Health Mission compliance",
      features: [
        "Health ID Integration",
        "DigiDoctor Registration",
        "Health Facility Registry",
        "Personal Health Records",
        "Interoperability Standards",
        "Digital Health Cards"
      ],
      certifications: ["ABDM Certified", "NDHM Ready", "HL7 FHIR"],
      color: "orange",
      region: "India"
    },
    {
      id: "iso27001",
      title: "ISO 27001 Certified",
      icon: <Award className="w-8 h-8" />,
      description: "International standard for information security management systems",
      features: [
        "Information Security Management",
        "Risk Assessment Framework",
        "Security Control Implementation",
        "Continuous Monitoring",
        "Incident Response Procedures",
        "Regular Security Audits"
      ],
      certifications: ["ISO 27001:2013", "ISO 27799", "ISO 13485"],
      color: "purple",
      region: "International"
    },
    {
      id: "sox",
      title: "SOX Compliance",
      icon: <FileCheck className="w-8 h-8" />,
      description: "Sarbanes-Oxley Act compliance for financial reporting and corporate governance",
      features: [
        "Financial Controls & Reporting",
        "Data Retention Policies",
        "Change Management Controls",
        "Access Control Documentation",
        "Audit Trail Maintenance",
        "Executive Certification"
      ],
      certifications: ["SOX Compliant", "SSAE 18", "ISAE 3402"],
      color: "red",
      region: "United States"
    },
    {
      id: "fda",
      title: "FDA 21 CFR Part 11",
      icon: <Fingerprint className="w-8 h-8" />,
      description: "FDA regulations for electronic records and electronic signatures",
      features: [
        "Electronic Signature Controls",
        "Audit Trail Requirements",
        "Record Integrity Validation",
        "Access Control Systems",
        "Data Migration Procedures",
        "System Validation Documentation"
      ],
      certifications: ["21 CFR Part 11", "FDA Validated", "GxP Compliant"],
      color: "cyan",
      region: "United States"
    }
  ];

  const securityControls = [
    {
      category: "Access Control",
      icon: <UserCheck className="w-6 h-6" />,
      controls: [
        { name: "Multi-Factor Authentication", status: "active", score: 98 },
        { name: "Role-Based Access Control", status: "active", score: 100 },
        { name: "Single Sign-On (SSO)", status: "active", score: 95 },
        { name: "Privileged Access Management", status: "active", score: 97 }
      ]
    },
    {
      category: "Data Protection",
      icon: <Lock className="w-6 h-6" />,
      controls: [
        { name: "AES-256 Encryption", status: "active", score: 100 },
        { name: "End-to-End Encryption", status: "active", score: 98 },
        { name: "Data Loss Prevention", status: "active", score: 96 },
        { name: "Backup & Recovery", status: "active", score: 99 }
      ]
    },
    {
      category: "Monitoring",
      icon: <Activity className="w-6 h-6" />,
      controls: [
        { name: "Real-time Threat Detection", status: "active", score: 99 },
        { name: "Security Information & Event Management", status: "active", score: 97 },
        { name: "Vulnerability Scanning", status: "active", score: 95 },
        { name: "Penetration Testing", status: "active", score: 98 }
      ]
    }
  ];

  const auditSteps = [
    {
      id: 1,
      title: "User Authentication",
      description: "Multi-factor authentication verification",
      icon: <Fingerprint className="w-5 h-5" />,
      timestamp: "2024-01-15 09:23:45",
      status: "success"
    },
    {
      id: 2,
      title: "Data Access Request",
      description: "Patient record access by Dr. Smith",
      icon: <Eye className="w-5 h-5" />,
      timestamp: "2024-01-15 09:24:12",
      status: "success"
    },
    {
      id: 3,
      title: "Data Modification",
      description: "Treatment plan updated for Patient ID: 12345",
      icon: <Settings className="w-5 h-5" />,
      timestamp: "2024-01-15 09:25:33",
      status: "success"
    },
    {
      id: 4,
      title: "Blockchain Verification",
      description: "Data integrity verified on blockchain",
      icon: <Database className="w-5 h-5" />,
      timestamp: "2024-01-15 09:25:34",
      status: "pending"
    },
    {
      id: 5,
      title: "Audit Log Created",
      description: "Immutable audit record generated",
      icon: <FileCheck className="w-5 h-5" />,
      timestamp: "2024-01-15 09:25:35",
      status: "pending"
    }
  ];

  const trustBadges = [
    { name: "HIPAA", logo: "🛡️", verified: true },
    { name: "GDPR", logo: "🇪🇺", verified: true },
    { name: "ISO 27001", logo: "📋", verified: true },
    { name: "SOC 2", logo: "✅", verified: true },
    { name: "ABDM", logo: "🇮🇳", verified: true },
    { name: "NIST", logo: "🔒", verified: true },
    { name: "HiTrust", logo: "⭐", verified: true },
    { name: "FDA", logo: "🏥", verified: true }
  ];

  const securityFeaturesList = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Biometric, SMS, and app-based 2FA protection",
      metric: "99.9% secure"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Role-Based Access Control",
      description: "Granular permissions and access management",
      metric: "50+ roles"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Data Integrity",
      description: "Immutable audit trails and verification",
      metric: "100% tamper-proof"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "24/7 threat detection and response",
      metric: "< 1ms detection"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all data",
      metric: "Military-grade"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Hardened servers with zero-trust",
      metric: "99.99% uptime"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Controls",
      description: "Advanced privacy protection",
      metric: "GDPR compliant"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Incident Response",
      description: "Automated threat containment",
      metric: "< 30s response"
    }
  ];

  useEffect(() => {
    if (auditAnimation) {
      const interval = setInterval(() => {
        setCurrentAuditStep((prev) => (prev + 1) % auditSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [auditAnimation, auditSteps.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecurityScore(98);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-500/60' },
      green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', hover: 'hover:border-green-500/60' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', hover: 'hover:border-orange-500/60' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', hover: 'hover:border-purple-500/60' },
      red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', hover: 'hover:border-red-500/60' },
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:border-cyan-500/60' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-green-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-8">
            <Shield className="w-5 h-5 mr-3 text-green-400" />
            <span className="text-green-300 font-medium">Enterprise-Grade Security</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Security &
            </span>
            <br />
            <span className="text-white">Compliance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Military-grade security architecture with comprehensive compliance coverage. HealthRx ensures your healthcare data is protected with blockchain integrity, global compliance standards, and zero-trust security framework.
          </p>

          {/* Security Score */}
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{securityScore}%</div>
              <div className="text-slate-400 font-medium">Security Score</div>
            </div>
            <div className="mx-8 h-12 w-px bg-slate-600"></div>
            <div className="flex space-x-4">
              {trustBadges.slice(0, 4).map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-2xl mb-1">{badge.logo}</div>
                  <div className="text-xs text-slate-400">{badge.name}</div>
                  {badge.verified && <CheckCircle className="w-4 h-4 text-green-400 mt-1" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Security Assessment
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 rounded-xl font-semibold text-lg hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
              Compliance Report
            </button>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(feature.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-green-400">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Global Standards</h2>
            <p className="text-slate-400">Certified and compliant with industry-leading security frameworks</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="group text-center">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-2">{badge.logo}</div>
                  <div className="text-sm font-medium text-slate-300">{badge.name}</div>
                  {badge.verified && (
                    <CheckCircle className="w-4 h-4 text-green-400 mx-auto mt-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Global Compliance Coverage</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Built-in compliance for healthcare standards worldwide, ensuring your organization meets regulatory requirements across all jurisdictions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {complianceStandards.map((standard, index) => {
            const colors = getColorClasses(standard.color);
            return (
              <div
                key={index}
                className={`group ${colors.bg} backdrop-blur-sm rounded-2xl p-8 border ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer ${
                  selectedCompliance === index ? `border-opacity-100 ${colors.bg}` : ''
                }`}
                onClick={() => setSelectedCompliance(selectedCompliance === index ? null : index)}
              >
                <div className="flex items-start mb-6">
                  <div className={`p-4 ${colors.bg} rounded-xl ${colors.text} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    {standard.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{standard.title}</h3>
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                        {standard.region}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{standard.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {standard.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0`} />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {selectedCompliance === index && (
                  <div className="border-t border-slate-700 pt-6 mt-6 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-wrap gap-2">
                      {standard.certifications.map((cert, cIndex) => (
                        <span key={cIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`flex items-center ${colors.text} font-medium group-hover:translate-x-2 transition-transform duration-300 mt-4`}>
                  View Details <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security Controls Dashboard */}
      <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Security Controls Dashboard</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Real-time monitoring of security controls with comprehensive coverage across all system components.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityControls.map((category, index) => (
              <div key={index} className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.controls.map((control, cIndex) => (
                    <div key={cIndex} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          control.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="text-slate-300 font-medium">{control.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{control.score}%</div>
                        <div className="text-xs text-slate-500 capitalize">{control.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit Trail Visualization */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Real-Time Audit Trail</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every action is tracked and recorded with immutable blockchain verification, ensuring complete transparency and compliance.
          </p>
          <button
            onClick={() => setAuditAnimation(!auditAnimation)}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
          >
            {auditAnimation ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {auditAnimation ? 'Pause Audit Trail' : 'Start Audit Trail'}
          </button>
        </div>

        <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm">
          <div className="space-y-6">
            {auditSteps.map((step, index) => {
              const isActive = index <= currentAuditStep;
              const isCurrent = index === currentAuditStep;
              
              return (
                <div key={step.id} className={`flex items-center p-6 rounded-xl transition-all duration-500 ${
                  isActive 
                    ? isCurrent 
                      ? 'bg-blue-500/20 border-blue-500/50 border scale-105' 
                      : 'bg-green-500/10 border-green-500/30 border'
                    : 'bg-slate-800/30 border-slate-700/30 border'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 transition-all duration-500 ${
                    isActive
                      ? isCurrent
                        ? 'bg-blue-500/30 text-blue-400 animate-pulse'
                        : 'bg-green-500/30 text-green-400'
                      : 'bg-slate-700/50 text-slate-500'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{step.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        step.status === 'success' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {step.status}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-2">{step.description}</p>
                    <div className="text-sm text-slate-500 font-mono">{step.timestamp}</div>
                  </div>
                  
                  <div className={`ml-6 ${isActive ? 'text-green-400' : 'text-slate-600'}`}>
                    {step.status === 'success' ? <Check className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Advanced Security Features</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive security architecture designed for the most demanding healthcare environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeaturesList.map((feature, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 text-center hover:scale-105">
              <div className="p-4 bg-green-500/20 rounded-xl text-green-400 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-lg font-bold text-green-400">{feature.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
    
    </div>
  );
};

export default SecurityCompliance;