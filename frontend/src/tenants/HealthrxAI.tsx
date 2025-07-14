import React, { useState, useEffect, useRef } from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import LoadingSpinner from "../components/LoadingSpinner";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  delay = 0,
  icon,
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transform transition-all duration-700 ${
        isVisible
          ? "animate-fade-in-up opacity-100"
          : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-1000">
        {displayValue}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  bgColor,
  textColor,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${bgColor} rounded-2xl p-8 transform transition-all duration-700 hover-lift ${
        isVisible ? "animate-scale-in opacity-100" : "opacity-0 scale-95"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-6xl mb-6 animate-float">{icon}</div>
      <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  initials: string;
  bgColor: string;
  textColor: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  initials,
  bgColor,
  textColor,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transform transition-all duration-700 ${
        isVisible
          ? "animate-fade-in-up opacity-100"
          : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div
          className={`w-14 h-14 ${bgColor} rounded-full flex items-center justify-center animate-pulse-glow`}
        >
          <span className={`${textColor} font-bold text-lg`}>{initials}</span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900 text-lg">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">
        "{testimonial}"
      </p>
      <div className="flex text-yellow-400 text-xl">
        <span>★★★★★</span>
      </div>
    </div>
  );
};

const HealthrxAI: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", hospital: "", message: "" });
  };

  const stats = [
    { value: "500+", label: "Hospitals", icon: "🏥" },
    { value: "50K+", label: "Patients", icon: "👥" },
    { value: "10K+", label: "Staff", icon: "👨‍⚕️" },
    { value: "99.9%", label: "Uptime", icon: "⚡" },
  ];

  const services = [
    {
      icon: "🩺",
      title: "OPD & IPD Management",
      description:
        "Streamline patient flow with intelligent queue management, automated scheduling, and real-time bed availability tracking.",
      features: [
        "Smart appointment scheduling",
        "Digital patient records",
        "Automated billing integration",
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-blue-800",
    },
    {
      icon: "💊",
      title: "Smart Pharmacy",
      description:
        "AI-powered inventory management with automated reordering, prescription verification, and drug interaction alerts.",
      features: [
        "Automated inventory tracking",
        "Prescription management",
        "Drug interaction alerts",
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      textColor: "text-green-800",
    },
    {
      icon: "🧪",
      title: "Advanced Diagnostics",
      description:
        "Integrated lab management with digital reporting, AI-assisted analysis, and seamless result delivery.",
      features: [
        "Digital lab reports",
        "AI-assisted diagnostics",
        "Real-time result tracking",
      ],
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      textColor: "text-pink-800",
    },
    {
      icon: "👨‍⚕️",
      title: "Staff Management",
      description:
        "Optimize workforce scheduling, track performance metrics, and ensure compliance with regulatory standards.",
      features: [
        "Smart shift scheduling",
        "Performance analytics",
        "Compliance tracking",
      ],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      textColor: "text-purple-800",
    },
    {
      icon: "💰",
      title: "Financial Management",
      description:
        "Comprehensive billing, insurance claim processing, and financial reporting with real-time analytics.",
      features: [
        "Automated billing",
        "Insurance processing",
        "Financial analytics",
      ],
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      textColor: "text-yellow-800",
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description:
        "Native mobile apps for patients and staff with offline capabilities and push notifications.",
      features: [
        "Patient mobile app",
        "Staff mobile dashboard",
        "Offline functionality",
      ],
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      textColor: "text-indigo-800",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Anjali Verma",
      role: "Chief Medical Officer",
      testimonial:
        "HealthrxAI transformed our hospital operations completely. The intuitive interface and powerful analytics have improved our patient care quality by 40%.",
      initials: "AV",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Mr. Ravi Sharma",
      role: "Hospital Administrator",
      testimonial:
        "The implementation was seamless and the support team is exceptional. We've reduced administrative costs by 35% while improving patient satisfaction.",
      initials: "RS",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Dr. Priya Kumar",
      role: "Head of Pharmacy",
      testimonial:
        "The pharmacy module is incredibly sophisticated. Inventory management has never been easier, and the AI recommendations are spot-on.",
      initials: "PK",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4 animate-pulse">🏥</div>
          <h1 className="text-3xl font-bold mb-2">HealthRxAI</h1>
          <LoadingSpinner
            size="lg"
            color="white"
            text="Loading amazing healthcare solutions..."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-md"
        } border-b border-gray-200`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-700 animate-fade-in-left">
            HealthrxAI
          </div>
          <div className="hidden md:flex space-x-8">
            {["home", "services", "features", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {["home", "services", "features", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="block text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-16 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div className="relative z-10 px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in-up stagger-1">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            Revolutionary hospital management platform that transforms
            healthcare delivery through intelligent automation and seamless
            patient experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-3">
            <button
              onClick={() => scrollToSection("services")}
              className="px-10 py-5 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-glow text-lg"
            >
              Explore Services
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              Empowering healthcare providers with cutting-edge technology for
              superior patient care and operational efficiency.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-6 bg-gradient-to-r from-gray-50 to-blue-50"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Choose HealthrxAI?
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Advanced features that set us apart from the competition
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-10">
              {[
                {
                  icon: "✅",
                  title: "HIPAA Compliant",
                  description:
                    "Enterprise-grade security ensuring complete patient data protection and regulatory compliance.",
                  color: "blue",
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description:
                    "Optimized performance with sub-second response times and 99.9% uptime guarantee.",
                  color: "green",
                },
                {
                  icon: "❤️",
                  title: "User-Friendly",
                  description:
                    "Intuitive interface designed for healthcare professionals with minimal training required.",
                  color: "purple",
                },
                {
                  icon: "🛠️",
                  title: "24/7 Support",
                  description:
                    "Round-the-clock technical support with dedicated account managers for enterprise clients.",
                  color: "yellow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-6 animate-fade-in-left`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl animate-pulse-glow`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 animate-scale-in">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  System Architecture
                </h3>
                <p className="text-gray-600">
                  Built on modern cloud infrastructure
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Cloud Infrastructure",
                    value: "AWS/Azure",
                    color: "green",
                  },
                  { label: "Database", value: "PostgreSQL", color: "blue" },
                  { label: "API", value: "RESTful", color: "purple" },
                  { label: "Security", value: "End-to-End", color: "red" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-lg">{item.label}</span>
                    <span
                      className={`text-${item.color}-600 font-semibold text-lg`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Transforming Healthcare Through Technology
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                HealthrxAI was founded with a simple mission: to revolutionize
                healthcare delivery through intelligent technology solutions
                that put patients first.
              </p>

              <div className="space-y-8">
                {[
                  {
                    year: "Founded in 2018",
                    description:
                      "By healthcare professionals who understood the pain points of traditional hospital management.",
                    color: "blue",
                  },
                  {
                    year: "500+ Hospitals",
                    description:
                      "Trusted by leading healthcare institutions across 25 countries worldwide.",
                    color: "green",
                  },
                  {
                    year: "Award Winning",
                    description:
                      'Recognized as "Best Healthcare Software" by Healthcare Innovation Awards 2024.',
                    color: "purple",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div
                      className={`w-10 h-10 bg-${milestone.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <svg
                        className={`w-5 h-5 text-${milestone.color}-600`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white animate-pulse-glow">
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  To democratize access to world-class healthcare technology,
                  enabling every hospital to deliver exceptional patient care
                  regardless of size or budget.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-xl">
                      Better Healthcare for All
                    </p>
                    <p className="text-lg opacity-75">Technology that heals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Real stories from healthcare professionals who trust HealthrxAI
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Ready to transform your healthcare operations? Let's talk.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-10 animate-fade-in-left">
              {[
                {
                  icon: "📞",
                  title: "Phone",
                  value: "+91 99999 99999",
                  color: "blue",
                },
                {
                  icon: "📧",
                  title: "Email",
                  value: "support@HealthrxAI.io",
                  color: "green",
                },
                {
                  icon: "📍",
                  title: "Address",
                  value: "Mumbai, Maharashtra, India",
                  color: "purple",
                },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div
                    className={`w-16 h-16 bg-${contact.color}-100 rounded-2xl flex items-center justify-center text-2xl animate-pulse-glow`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 animate-fade-in-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleInputChange}
                  placeholder="Hospital Name"
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">HealthrxAI</h3>
              <p className="text-gray-400 leading-relaxed">
                Transforming healthcare delivery through intelligent technology
                solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>OPD & IPD Management</li>
                <li>Smart Pharmacy</li>
                <li>Advanced Diagnostics</li>
                <li>Staff Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span>📷</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthrxAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton
        onClick={() => scrollToSection("contact")}
        icon="📞"
        label="Contact Us"
        position="bottom-right"
        color="blue"
      />
    </div>
  );
};

export default HealthrxAI;
