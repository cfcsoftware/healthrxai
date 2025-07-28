import React, { useState, useEffect, } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, ArrowRight, Quote, Play, ExternalLink, } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate testimonials
 

  // Auto-scroll partner logos
  


  const testimonials = [
    {
      id: 1,
      quote: "Implementing this healthcare management system transformed our hospital operations completely. Patient satisfaction increased by 40% and our administrative efficiency improved dramatically. The seamless integration with our existing systems was remarkable.",
      author: "Dr. Rajesh Sharma",
      position: "Chief Medical Officer",
      hospital: "Apollo Hospitals, Delhi",
      avatar: "👨‍⚕️",
      rating: 5,
      stats: { patients: "50K+", efficiency: "40%", satisfaction: "95%" }
    },
    {
      id: 2,
      quote: "The digital transformation journey with this platform has been exceptional. We've reduced patient wait times by 60% and streamlined our entire workflow. The analytics dashboard provides invaluable insights for strategic decision-making.",
      author: "Dr. Priya Patel",
      position: "Hospital Administrator",
      hospital: "Fortis Healthcare, Mumbai",
      avatar: "👩‍⚕️",
      rating: 5,
      stats: { waitTime: "60%", workflow: "35%", insights: "100%" }
    },
    {
      id: 3,
      quote: "Outstanding support and innovative features have made patient care more efficient than ever. The mobile integration allows our doctors to access patient records instantly, improving diagnosis accuracy and treatment outcomes significantly.",
      author: "Dr. Arjun Krishnan",
      position: "Director of Operations",
      hospital: "Max Healthcare, Bangalore",
      avatar: "👨‍⚕️",
      rating: 5,
      stats: { accuracy: "25%", access: "100%", outcomes: "30%" }
    }
  ];

  const partners = [
    { name: "Apollo Hospitals", logo: "🏥", location: "Pan India" },
    { name: "Fortis Healthcare", logo: "🏥", location: "Major Cities" },
    { name: "Max Healthcare", logo: "🏥", location: "North India" },
    { name: "Manipal Hospitals", logo: "🏥", location: "South India" },
    { name: "Narayana Health", logo: "🏥", location: "Multi-State" },
    { name: "AIIMS", logo: "🏥", location: "Government" },
    { name: "Medanta", logo: "🏥", location: "NCR Region" },
    { name: "Kokilaben Hospital", logo: "🏥", location: "Mumbai" },
    { name: "Ruby Hall Clinic", logo: "🏥", location: "Pune" },
    { name: "Global Hospitals", logo: "🏥", location: "Hyderabad" },
    { name: "Columbia Asia", logo: "🏥", location: "Regional" },
    { name: "Sankara Nethralaya", logo: "🏥", location: "Chennai" }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation at Metropolitan Hospital",
      subtitle: "Reducing Patient Wait Times by 60%",
      description: "Complete digitization of patient flow management resulting in significant operational improvements and enhanced patient experience.",
      image: "🏥",
      metrics: [
        { label: "Wait Time Reduction", value: "60%" },
        { label: "Patient Satisfaction", value: "95%" },
        { label: "Operational Efficiency", value: "40%" }
      ],
      duration: "6 months",
      category: "Hospital Management",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Diagnostics Implementation",
      subtitle: "Improving Diagnosis Accuracy by 25%",
      description: "Integration of AI algorithms for medical imaging and diagnostics, leading to faster and more accurate patient diagnoses.",
      image: "🔬",
      metrics: [
        { label: "Diagnosis Accuracy", value: "25%" },
        { label: "Processing Speed", value: "70%" },
        { label: "Cost Reduction", value: "30%" }
      ],
      duration: "4 months",
      category: "AI & Analytics"
    },
    {
      id: 3,
      title: "Telemedicine Platform Deployment",
      subtitle: "Connecting 100K+ Remote Patients",
      description: "Comprehensive telemedicine solution enabling remote consultations and monitoring across rural and urban areas.",
      image: "📱",
      metrics: [
        { label: "Remote Consultations", value: "100K+" },
        { label: "Coverage Area", value: "500+ Cities" },
        { label: "Patient Retention", value: "85%" }
      ],
      duration: "8 months",
      category: "Telemedicine"
    }
  ];

  const TestimonialCard = ({ testimonial, index, isActive }) => (
    <div
      className={`transform transition-all duration-700 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16"></div>
        
        {/* Quote Icon */}
        <Quote className="text-blue-400 w-12 h-12 mb-6 opacity-30" />
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
          "{testimonial.quote}"
        </blockquote>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {Object.entries(testimonial.stats).map(([key, value], idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold text-blue-400">{value as React.ReactNode}</div>
              <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
            </div>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl">
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
            <p className="text-blue-400 font-semibold">{testimonial.position}</p>
            <p className="text-gray-400 text-sm">{testimonial.hospital}</p>
          </div>
        </div>
      </div>
    </div>
  );

type PartnerLogoProps = {
  partner: {
    name: string;
    logo: string;
    location: string;
  };
  isActive: boolean;
  index: number;
};



  const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner, isActive }) => (
    <div
      className={`flex-shrink-0 transition-all duration-500 ${
        isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
      }`}
    >
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg min-w-[200px]">
        <div className="text-center">
          <div className="text-4xl mb-3">{partner.logo}</div>
          <h3 className="font-semibold text-white text-sm mb-1">{partner.name}</h3>
          <p className="text-gray-400 text-xs">{partner.location}</p>
        </div>
      </div>
    </div>
  );

  const CaseStudyCard = ({ study, index }) => (
    <div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
        isVisible ? 'animate-fadeInUp' : 'opacity-0'
      } ${study.featured ? 'ring-2 ring-blue-500/30' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {study.featured && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
          Featured Case Study
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{study.image}</div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="w-4 h-4" />
            {study.duration}
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-lg text-xs font-semibold">
              {study.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
          <h4 className="text-blue-400 font-semibold mb-3">{study.subtitle}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{study.description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="bg-gray-800/50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-400">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:from-blue-500 group-hover:to-purple-500">
          Read Full Case Study
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
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
              Success Stories & Testimonials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how leading healthcare institutions have transformed their operations 
              and improved patient outcomes with our innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div className="max-w-7xl mx-auto px-6 mt-10 mb-20">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Video Testimonial</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Hear from our Partners</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Watch how Dr. Sarah Mitchell from Central Medical Center describes 
                their digital transformation journey and the remarkable results achieved.
              </p>
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-5 h-5" />
                Watch Video Testimonial
              </button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="bg-gray-800 rounded-2xl aspect-video flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-400">Dr. Sarah Mitchell</p>
                    <p className="text-sm text-gray-500">Central Medical Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">What Our Partners Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real feedback from healthcare leaders who have experienced transformational results.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-gray-800 border border-gray-600 rounded-full p-3 hover:bg-gray-700 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-gray-800 border border-gray-600 rounded-full p-3 hover:bg-gray-700 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div className="relative min-h-[500px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isActive={index === currentTestimonial}
              />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos Slider */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading Healthcare Providers</h2>
          <p className="text-gray-400">Join 500+ hospitals and healthcare institutions worldwide</p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPartner * 220}px)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <PartnerLogo
                key={`${partner.name}-${index}`}
                partner={partner}
                index={index}
                isActive={index % partners.length === currentPartner}
              />
            ))}
          </div>
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Healthcare Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2M+</div>
            <div className="text-gray-400">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">In-Depth Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore detailed success stories showcasing measurable results and transformational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            View All Case Studies
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
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

export default TestimonialsPage;