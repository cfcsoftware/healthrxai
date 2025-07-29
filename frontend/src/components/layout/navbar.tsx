"use client"
import React, { useState, useEffect, type JSX } from 'react'
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search,
 
  User,
  Shield,
  Zap,
  Users,
  Building,
  Stethoscope,

  FileText,
  BarChart3,
  
  Cloud,
  Network,
  ShieldCheck,
  HelpCircle,
  Code,
  Video,
  Download,
  MessageSquare,
  Repeat,
  Mic,
  Brain,
  Briefcase,
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavItem {
  title: string
  href: string
  icon?: JSX.Element
  featured?: boolean;
  description?: string
}

interface DropdownSection {
  title: string
  items: NavItem[]
}

const EnterpriseNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuresDropdown: DropdownSection[] = [
    {
      title: "Core Modules",
      items: [
       { title: "EMR/EHR", href: "/landing/features/hrm", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions", featured: true },
        { title: "Appointment & Queue", href: "/landing/features/appointmentQueue", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        { title: "OPD/IPD Management", href: "/landing/features/opdipd", icon: <Zap className="w-4 h-4" />, description: "Advanced AI-powered features" },
        { title: "Billing & Payments", href: "/landing/features/billing", icon: <Shield className="w-4 h-4" />, description: "Enterprise-grade security" },
        { title: "Lab & Radiology", href: "/landing/features/labRadiology", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        { title: "Pharmacy & Inventory", href: "/landing/features/pharmacyInventory", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        
       
        { title: "Telemedicine", href: "/landing/features/telemedicine", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        { title: "Blockchain & Compliance", href: "/landing/features/blockchain", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        { title: "Smart Delivery Robots", href: "/landing/features/robot-system", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
        { title: "Analytics & Dashboard", href: "/landing/features/Analytics", icon: <Users className="w-4 h-4" />, description: "Automated delivery solutions" },
      ]
    }
  ]
  
  const companyDropdown: DropdownSection[] = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "/company/about",
        icon: <User className="w-4 h-4" />,
        description: "Who we are and what we do",
        featured: true 
      },
      {
        title: "Our Mission",
        href: "/company/mission",
        icon: <ShieldCheck className="w-4 h-4" />,
        description: "Our vision and values"
      },
      {
        title: "Team & Leadership",
        href: "/company/team",
        icon: <Users className="w-4 h-4" />,
        description: "Meet our leadership team"
      },
      {
        title: "Careers",
        href: "/company/careers",
        icon: <Briefcase className="w-4 h-4" />,
        description: "Join our growing team"
      },
      {
        title: "Contact Us",
        href: "/contact",
        icon: <MessageSquare className="w-4 h-4" />,
        description: "Get in touch with us"
      }
    ]
  }
]

  const solutionsDropdown: DropdownSection[] = [
  {
  title: "Solutions",
  items: [
      {
      title: "For Hospitals",
      href: "/landing/solutions/hospitals",
      icon: <Building className="w-4 h-4" />,
      description: "AI-integrated hospital automation",
      featured: true,
    },
    {
      title: "For Clinics",
      href: "/landing/solutions/clinics",
      icon: <Stethoscope className="w-4 h-4" />,
      description: "Clinic operations simplified",
    },
    {
      title: "For Labs & Diagnostics",
      href: "/landing/solutions/labs-diagnostics",
      icon: <FileText className="w-4 h-4" />,
      description: "Lab testing and reporting solutions",
    },
    {
      title: "For Health Groups",
      href: "/landing/solutions/health-groups",
      icon: <Users className="w-4 h-4" />,
      description: "Manage enterprise health networks",
    },
    {
      title: "For Government Healthcare",
      href: "/landing/solutions/government-healthcare",
      icon: <ShieldCheck className="w-4 h-4" />,
      description: "Secure and scalable public health systems",
    },
    {
      title: "Multi-location Setup",
      href: "/landing/solutions/multi-location",
      icon: <Network className="w-4 h-4" />,
      description: "Centralized control for multiple branches",
    },
    {
      title: "Cloud & On-premise Deployment",
      href: "/landing/solutions/deployment-options",
      icon: <Cloud className="w-4 h-4" />,
      description: "Flexible hosting for your infrastructure",
    },
  ]
}

  ]
  

  const resourcesDropdown: DropdownSection[] = [
   {
  title: "Resources",
  items: [
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      icon: <BarChart3 className="w-4 h-4" />,
      description: "Real-world success stories"
    },
    {
      title: "Brochures & Downloads",
      href: "/resources/brochures",
      icon: <Download className="w-4 h-4" />,
      description: "Downloadable materials and brochures",
      featured:true
    },
    {
      title: "Blogs & Industry Insights",
      href: "/  /resources/blogs",
      icon: <FileText className="w-4 h-4" />,
      description: "Trends, insights, and company updates"
    },
    {
      title: "Webinars & Demos",
      href: "/resources/webinars",
      icon: <Video className="w-4 h-4" />,
      description: "Live and recorded product demos"
    },
    {
      title: "API Documentation",
      href: "/resources/api-docs",
      icon: <Code className="w-4 h-4" />,
      description: "Developer documentation and guides"
    },
    {
      title: "FAQs",
      href: "/resources/faqs",
      icon: <HelpCircle className="w-4 h-4" />,
      description: "Frequently asked questions"
    }
  ]
}

  ]
  const aiAndAutomationDropdown: DropdownSection[] = [
 {
  title: "AI & Automation",
  items: [
    {
      title: "AI Diagnostics",
      href: "/ai-automation/diagnostics",
      icon: <Brain className="w-4 h-4" />,
      description: "Automated medical diagnostics using AI",
      featured: true
    },
    {
      title: "NLP & Voice EMR",
      href: "/ai-automation/nlp-voice-emr",
      icon: <Mic className="w-4 h-4" />,
      description: "Natural language processing & voice-enabled records"
    },
    {
      title: "AI Report Generation",
      href: "/ai-automation/report-generation",
      icon: <FileText className="w-4 h-4" />,
      description: "Auto-generate patient and diagnostic reports"
    },
    {
      title: "Predictive Analytics",
      href: "/ai-automation/predictive-analytics",
      icon: <BarChart3 className="w-4 h-4" />,
      description: "Forecast trends & improve outcomes"
    },
    {
      title: "n8n Workflow Automation",
      href: "/ai-automation/n8n-automation",
      icon: <Repeat className="w-4 h-4" />,
      description: "Automate tasks with no-code workflows"
    },
    {
      title: "WhatsApp Bot Integration",
      href: "/ai-automation/whatsapp-bot",
      icon: <MessageSquare className="w-4 h-4" />,
      description: "Patient engagement through WhatsApp bots"
    }
  ]
}


  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setActiveDropdown(null)
    setIsUserMenuOpen(false)
  }

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .glass-nav {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .glass-dropdown {
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .notification-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(45deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        
        .search-highlight {
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.3);
        }
        
        .mobile-menu-overlay {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
           <Link
          to="/home"
          className="hover:text-blue-300 transition-colors"
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="HealthRxAI Logo"
            className="h-10 w-auto"
            style={{ display: "block" }}
          />
        </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-[0.5px]">
             

              {/* Features Dropdown */}
              <div className="relative">
                <button
                  className="nav-link flex items-center px-4 py-2 text-slate-200 hover:text-white font-medium"
                  onClick={() => handleDropdownToggle('features')}
                  onMouseEnter={() => setActiveDropdown('features')}
                >
                  Features
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'features' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'features' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl animate-slide-down"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                      {featuresDropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="p-2">
                        <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {section.title}
                        </div>
                        <div className={`grid gap-1 ${section.items.length > 1 ? 'grid-cols-1' : ''}`}>
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="relative group">
                              <Link
                                to={item.href}
                                className={`
                                  flex items-start p-3 rounded-lg transition-all duration-200
                                  hover:bg-gray-50 dark:hover:bg-gray-800/50
                                  ${item.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800' : ''}
                                `}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.icon && (
                                  <div className="mr-3 mt-0.5 text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                                      {item.title}
                                      {item.featured && (
                                        <span className="ml-2 px-2 py-1 text-xs  bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded">
                                          Popular
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="nav-link flex items-center px-4 py-2 text-slate-200 hover:text-white font-medium"
                  onClick={() => handleDropdownToggle('solutions')}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'solutions' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl animate-slide-down"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {solutionsDropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="p-2">
                        <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {section.title}
                        </div>
                        <div className={`grid gap-1 ${section.items.length > 1 ? 'grid-cols-1' : ''}`}>
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="relative group">
                              <Link
                                to={item.href}
                                className={`
                                  flex items-start p-3 rounded-lg transition-all duration-200
                                  hover:bg-gray-50 dark:hover:bg-gray-800/50
                                  ${item.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800' : ''}
                                `}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.icon && (
                                  <div className="mr-3 mt-0.5 text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                                      {item.title}
                                      {item.featured && (
                                        <span className="ml-2 px-2 py-1 text-xs  bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded">
                                          Popular
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

                {/* AI & Automation Dropdown */}
<div className="relative">
  <button
    className="nav-link flex items-center px-4 py-2 text-slate-200 hover:text-white font-medium"
    onClick={() => handleDropdownToggle('ai')}
    onMouseEnter={() => setActiveDropdown('ai')}
  >
    AI & Automation
    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
      activeDropdown === 'ai' ? 'rotate-180' : ''
    }`} />
  </button>

  {activeDropdown === 'ai' && (
    <div 
      className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl animate-slide-down"
      onMouseLeave={() => setActiveDropdown(null)}
    >
        {aiAndAutomationDropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="p-2">
                        <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {section.title}
                        </div>
                        <div className={`grid gap-1 ${section.items.length > 1 ? 'grid-cols-1' : ''}`}>
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="relative group">
                              <Link
                                to={item.href}
                                className={`
                                  flex items-start p-3 rounded-lg transition-all duration-200
                                  hover:bg-gray-50 dark:hover:bg-gray-800/50
                                  ${item.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800' : ''}
                                `}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.icon && (
                                  <div className="mr-3 mt-0.5 text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                                      {item.title}
                                      {item.featured && (
                                        <span className="ml-2 px-2 py-1 text-xs  bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded">
                                          Popular
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
    </div>
  )}
</div>


              <a href="/pricing" className="nav-link px-4 py-2 text-slate-200 hover:text-white font-medium">
                Pricing
              </a>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="nav-link flex items-center px-4 py-2 text-slate-200 hover:text-white font-medium"
                  onClick={() => handleDropdownToggle('resources')}
                  onMouseEnter={() => setActiveDropdown('resources')}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'resources' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl animate-slide-down"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                   {resourcesDropdown.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="p-2">
                        <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {section.title}
                        </div>
                        <div className={`grid gap-1 ${section.items.length > 1 ? 'grid-cols-1' : ''}`}>
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="relative group">
                              <Link
                                to={item.href}
                                className={`
                                  flex items-start p-3 rounded-lg transition-all duration-200
                                  hover:bg-gray-50 dark:hover:bg-gray-800/50
                                  ${item.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800' : ''}
                                `}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.icon && (
                                  <div className="mr-3 mt-0.5 text-indigo-600 dark:text-indigo-400">
                                    {item.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                                      {item.title}
                                      {item.featured && (
                                        <span className="ml-2 px-2 py-1 text-xs  bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded">
                                          Popular
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

                  {/* Company Dropdown */}
<div className="relative">
  <button
    className="nav-link flex items-center px-4 py-2 text-slate-200 hover:text-white font-medium"
    onClick={() => handleDropdownToggle('company')}
    onMouseEnter={() => setActiveDropdown('company')}
  >
    Company
    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
      activeDropdown === 'company' ? 'rotate-180' : ''
    }`} />
  </button>

  {activeDropdown === 'company' && (
    <div 
      className="absolute top-full left-0 mt-2 w-96 glass-dropdown rounded-xl animate-slide-down"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {companyDropdown.map((section, sectionIndex) => (
        <div key={sectionIndex} className="p-2">
          <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {section.title}
          </div>
          {section.items.map((item, itemIndex) => (
            <a
              key={itemIndex}
              href={item.href}
              className="flex items-start p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
              onClick={closeAllDropdowns}
            >
              <div className="flex-shrink-0 mt-1 text-yellow-400 group-hover:text-yellow-300">
                {item.icon}
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-white group-hover:text-yellow-300">
                  {item.title}
                </div>
                {item.description && (
                  <div className="text-xs text-slate-400 mt-1">{item.description}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  )}
</div>


           
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-1">
              {/* Search */}
              <div className="hidden md:block relative">
                <div className="relative">
                
                </div>
              </div>

              
              {/* User Menu */}
              {/* <div className="relative">
                <button
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 glass-dropdown rounded-xl animate-slide-down">
                    <div className="p-2">
                      <div className="px-4 py-3 border-b border-slate-700">
                        <div className="text-sm font-medium text-white">John Doe</div>
                        <div className="text-xs text-slate-400">john.doe@hospital.com</div>
                      </div>
                      <a href="/profile" className="flex items-center px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                        <User className="w-4 h-4 mr-3" />
                        Profile
                      </a>
                      <a href="/settings" className="flex items-center px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </a>
                      <div className="border-t border-slate-700 my-2"></div>
                      <button className="flex items-center w-full px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-slate-800/50 rounded-lg transition-colors">
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div> */}

              {/* Auth Buttons */}
              <div className="hidden lg:flex items-center space-x-1">
                <a href="/login" className="px-4 py-2 text-slate-200 hover:text-white font-medium transition-colors">
                  Log In
                </a>

                <a
                  href="https://calendly.com/cfcsoftwares/30min"
                  className="px-6 py-2 bg-white text-black-700 font-medium rounded-lg shadow-md hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 animate-heartbeat"
                  style={{ animationDuration: '10s' }}
                >
                  Book a Demo
                </a>
                {/* Heartbeat animation keyframes (add to your global CSS or Tailwind config) */}
                <style>
                  {`
                    @keyframes heartbeat {
                      0% {
                        transform: scale(1);
                      }
                      14% {
                        transform: scale(1.15);
                      }
                      28% {
                        transform: scale(1);
                      }
                      42% {
                        transform: scale(1.15);
                      }
                      70% {
                        transform: scale(1);
                      }
                    }
                    .animate-heartbeat {
                      animation: heartbeat 1.2s infinite;
                    }
                  `}
                </style>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 mobile-menu-overlay animate-fade-in">
            <div className="glass-nav h-full overflow-y-auto">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <a href="/" className="block px-4 py-3 text-slate-200 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
                
                <div className="space-y-2">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</div>
                  {featuresDropdown[0].items.map((item, index) => (
                    <a key={index} href={item.href} className="flex items-center px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="text-purple-400 mr-3">{item.icon}</div>
                      {item.title}
                    </a>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Solutions</div>
                  {solutionsDropdown[0].items.map((item, index) => (
                    <a key={index} href={item.href} className="flex items-center px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="text-blue-400 mr-3">{item.icon}</div>
                      {item.title}
                    </a>
                  ))}
                </div>

                <a href="/pricing" className="block px-4 py-3 text-slate-200 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Pricing
                </a>

                <div className="space-y-2">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Resources</div>
                  {resourcesDropdown[0].items.map((item, index) => (
                    <a key={index} href={item.href} className="flex items-center px-4 py-3 text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="text-emerald-400 mr-3">{item.icon}</div>
                      {item.title}
                    </a>
                  ))}
                </div>

                <a href="/contact" className="block px-4 py-3 text-slate-200 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>

                <div className="border-t border-slate-700 pt-4 mt-6 space-y-3">

                  <a href="/signup" className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay to close dropdowns */}
      {(activeDropdown || isUserMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeAllDropdowns}
        />
      )}
    </>
  )
}

export default EnterpriseNavbar