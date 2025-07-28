import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Mic, 
  Bot, 
  TrendingUp, 
  Zap, 
  Shield, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Activity, 
  Stethoscope, 
  FileText, 
  Users, 
  Play, 
  Pause,
  Star,
  Globe,
  Cpu,
} from 'lucide-react';

const AiAutomation = () => {
  const [isWorkflowPlaying, setIsWorkflowPlaying] = useState(true);
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const intelligenceFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Advanced Neural Networks",
      description: "Deep learning models trained on millions of healthcare records for unparalleled accuracy",
      gradient: "from-blue-500 to-cyan-500",
      stats: { accuracy: "99.2%", speed: "Real-time", models: "150+" }
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Cognitive Reasoning Engine",
      description: "AI that thinks like healthcare professionals, understanding context and nuance",
      gradient: "from-purple-500 to-pink-500",
      stats: { reasoning: "Human-level", contexts: "1000+", decisions: "24/7" }
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Continuous Learning System",
      description: "Self-improving algorithms that evolve with every patient interaction",
      gradient: "from-green-500 to-teal-500",
      stats: { learning: "Continuous", updates: "Daily", improvement: "+2.5%/month" }
    }
  ];

  const aiCapabilities = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced NLP for clinical documentation, medical coding, and patient communication analysis with medical-grade accuracy.",
      features: [
        "Clinical Text Analysis & Extraction",
        "Medical Terminology Recognition",
        "Multi-language Patient Communication",
        "Automated Clinical Coding (ICD-10/CPT)",
        "Sentiment Analysis for Patient Feedback"
      ],
      metrics: {
        accuracy: "98.7%",
        languages: "25+",
        processing: "< 500ms",
        compliance: "HIPAA Certified"
      },
      color: "blue"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms providing diagnostic assistance and clinical decision support with evidence-based recommendations.",
      features: [
        "Differential Diagnosis Generation",
        "Symptom Pattern Recognition",
        "Risk Stratification & Assessment",
        "Treatment Protocol Recommendations",
        "Clinical Pathway Optimization"
      ],
      metrics: {
        accuracy: "95.3%",
        conditions: "2000+",
        evidence: "PubMed Integrated",
        validation: "FDA Cleared"
      },
      color: "purple"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-Enabled EMR",
      description: "Hands-free electronic medical record management with intelligent voice recognition and contextual understanding.",
      features: [
        "Natural Voice Documentation",
        "Medical Command Recognition",
        "Real-time Clinical Transcription",
        "Voice-driven Navigation",
        "Ambient Clinical Intelligence"
      ],
      metrics: {
        accuracy: "97.1%",
        response: "< 100ms",
        commands: "500+",
        noise: "Hospital-grade"
      },
      color: "green"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Chatbots",
      description: "24/7 patient support and administrative assistance with advanced contextual understanding and empathetic responses.",
      features: [
        "Intelligent Patient Triage",
        "Automated Appointment Scheduling",
        "Symptom Assessment & Guidance",
        "Medication Reminders & Education",
        "Insurance & Billing Support"
      ],
      metrics: {
        availability: "99.99%",
        resolution: "89%",
        satisfaction: "4.8/5",
        languages: "12"
      },
      color: "cyan"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Inventory Management",
      description: "Advanced forecasting algorithms for optimal inventory levels, reducing waste and ensuring critical supplies availability.",
      features: [
        "Demand Forecasting & Planning",
        "Automated Reorder Management",
        "Expiration Date Optimization",
        "Supply Chain Risk Assessment",
        "Cost Optimization Analytics"
      ],
      metrics: {
        accuracy: "94.8%",
        waste: "-40%",
        stockouts: "-85%",
        savings: "$2M+ annually"
      },
      color: "orange"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Compliance Monitoring",
      description: "Intelligent monitoring and reporting for healthcare regulations, quality standards, and risk management.",
      features: [
        "Real-time Compliance Monitoring",
        "Automated Audit Trail Generation",
        "Risk Pattern Detection",
        "Quality Metrics Dashboard",
        "Regulatory Reporting Automation"
      ],
      metrics: {
        compliance: "100%",
        monitoring: "24/7",
        alerts: "< 30 seconds",
        audits: "Automated"
      },
      color: "red"
    }
  ];

  const workflowSteps = [
    {
      id: 1,
      title: "Patient Check-in",
      description: "Voice-activated registration with NLP processing",
      icon: <Users className="w-6 h-6" />,
      status: "completed",
      duration: "30s"
    },
    {
      id: 2,
      title: "Symptom Analysis",
      description: "AI-powered symptom assessment and triage",
      icon: <Activity className="w-6 h-6" />,
      status: "active",
      duration: "45s"
    },
    {
      id: 3,
      title: "Diagnostic Support",
      description: "Machine learning differential diagnosis",
      icon: <Brain className="w-6 h-6" />,
      status: "pending",
      duration: "60s"
    },
    {
      id: 4,
      title: "Treatment Planning",
      description: "Evidence-based treatment recommendations",
      icon: <FileText className="w-6 h-6" />,
      status: "pending",
      duration: "90s"
    },
    {
      id: 5,
      title: "EMR Documentation",
      description: "Automated clinical documentation",
      icon: <Database className="w-6 h-6" />,
      status: "pending",
      duration: "15s"
    }
  ];

  useEffect(() => {
    if (isWorkflowPlaying) {
      const interval = setInterval(() => {
        setCurrentWorkflowStep((prev) => (prev + 1) % workflowSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isWorkflowPlaying, workflowSteps.length]);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-500/60' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', hover: 'hover:border-purple-500/60' },
      green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', hover: 'hover:border-green-500/60' },
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:border-cyan-500/60' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', hover: 'hover:border-orange-500/60' },
      red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', hover: 'hover:border-red-500/60' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8">
            <Zap className="w-5 h-5 mr-3 text-blue-400" />
            <span className="text-blue-300 font-medium">Enterprise AI Healthcare Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent
            </span>
            <br />
            <span className="text-white">Healthcare AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover what makes HealthRx the most intelligent healthcare platform. Our comprehensive AI ecosystem transforms patient care through advanced automation, predictive analytics, and cognitive decision support.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore AI Capabilities
            </button>
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 rounded-xl font-semibold text-lg hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Intelligence Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {intelligenceFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" 
                   style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}}></div>
              <div className={`relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full`}>
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
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Capabilities Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Core AI Capabilities</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI-powered healthcare solutions, each designed to enhance clinical outcomes and operational efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {aiCapabilities.map((capability, index) => {
            const colors = getColorClasses(capability.color);
            return (
              <div
                key={index}
                className={`group ${colors.bg} backdrop-blur-sm rounded-2xl p-8 border ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer ${
                  selectedFeature === index ? `border-opacity-100 ${colors.bg}` : ''
                }`}
                onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              >
                <div className="flex items-start mb-6">
                  <div className={`p-4 ${colors.bg} rounded-xl ${colors.text} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    {capability.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{capability.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0`} />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {selectedFeature === index && (
                  <div className="border-t border-slate-700 pt-6 mt-6 animate-in slide-in-from-top duration-300">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(capability.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${colors.text}`}>{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`flex items-center ${colors.text} font-medium group-hover:translate-x-2 transition-transform duration-300`}>
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm py-20 my-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Intelligent Workflow Automation</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Watch how our AI orchestrates complex healthcare processes, reducing manual effort by 80% and improving accuracy across all touchpoints.
            </p>
            <button
              onClick={() => setIsWorkflowPlaying(!isWorkflowPlaying)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
            >
              {isWorkflowPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isWorkflowPlaying ? 'Pause Workflow' : 'Start Workflow'}
            </button>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {workflowSteps.map((step, index) => {
                const isActive = index <= currentWorkflowStep;
                const isCurrent = index === currentWorkflowStep;
                
                return (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center text-center min-w-0 flex-1">
                      <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 mb-4 ${
                          isActive
                            ? isCurrent
                              ? 'bg-blue-500/20 border-blue-500 text-blue-400 animate-pulse scale-110'
                              : 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-slate-700/50 border-slate-600 text-slate-500'
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-400 mb-2 leading-relaxed">{step.description}</p>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-500'
                      }`}>
                        {step.duration}
                      </div>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className={`hidden lg:block w-16 h-0.5 transition-all duration-500 ${
                        index < currentWorkflowStep ? 'bg-green-500' : 
                        index === currentWorkflowStep ? 'bg-blue-500' : 'bg-slate-600'
                      }`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Dashboard */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Real-World Impact</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Measurable results from healthcare organizations using HealthRx AI across their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              label: "Diagnostic Accuracy", 
              value: "95.3%", 
              change: "+4.2%", 
              icon: <Stethoscope className="w-8 h-8" />,
              color: "text-green-400",
              bgColor: "bg-green-500/10"
            },
            { 
              label: "Processing Speed", 
              value: "< 500ms", 
              change: "-60%", 
              icon: <Zap className="w-8 h-8" />,
              color: "text-blue-400",
              bgColor: "bg-blue-500/10"
            },
            { 
              label: "Cost Reduction", 
              value: "$2.4M", 
              change: "+18%", 
              icon: <TrendingUp className="w-8 h-8" />,
              color: "text-purple-400",
              bgColor: "bg-purple-500/10"
            },
            { 
              label: "Patient Satisfaction", 
              value: "98.7%", 
              change: "+6.1%", 
              icon: <Star className="w-8 h-8" />,
              color: "text-yellow-400",
              bgColor: "bg-yellow-500/10"
            }
          ].map((metric, index) => (
            <div key={index} className={`${metric.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center group hover:scale-105 transition-transform duration-300`}>
              <div className={`inline-flex p-3 rounded-xl ${metric.bgColor} ${metric.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-slate-400 mb-2 font-medium">{metric.label}</div>
              <div className="text-sm text-green-400 font-medium">
                {metric.change} vs. last year
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
     
    </div>
  );
};

export default AiAutomation;