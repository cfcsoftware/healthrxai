import React from 'react';
import {  TrendingUp, Lightbulb,  Mail, CheckCircle,  Handshake,  Stethoscope, Truck, ShoppingCart, DollarSign, Factory, ArrowRight } from 'lucide-react'; // Added Stethoscope, Truck, ShoppingCart, DollarSign, Factory, ArrowRight
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Case Studies page
const App = () => {
  // Simulated case study data
  const caseStudies = [
    {
      id: 1,
      title: "Transforming Logistics with AI-Powered Automation",
      industry: "Logistics & Supply Chain",
      challenge: "Inefficient manual processes leading to delays and high operational costs.",
      solution: "Implemented an AI-driven automation platform for warehouse management and route optimization.",
      results: "Achieved 30% reduction in operational costs and 25% faster delivery times.",
      imageUrl: "https://placehold.co/600x400/3B82F6/ffffff?text=Logistics+AI"
    },
    {
      id: 2,
      title: "Enhancing Patient Care with Voice-Enabled EMR",
      industry: "Healthcare",
      challenge: "Time-consuming manual charting and documentation impacting patient interaction.",
      solution: "Deployed an NLP and voice recognition EMR system for real-time clinical note-taking.",
      results: "Improved physician efficiency by 40% and enhanced patient satisfaction scores by 15%.",
      imageUrl: "https://placehold.co/600x400/8B5CF6/ffffff?text=Healthcare+VoiceEMR"
    },
    {
      id: 3,
      title: "Driving Sales Growth with Predictive Analytics",
      industry: "Retail & E-commerce",
      challenge: "Difficulty in forecasting sales trends and identifying high-value customer segments.",
      solution: "Integrated a predictive analytics platform to analyze customer behavior and market trends.",
      results: "Increased sales conversion rates by 20% and reduced marketing spend by 10%.",
      imageUrl: "https://placehold.co/600x400/EF4444/ffffff?text=Retail+Analytics"
    },
    {
      id: 4,
      title: "Securing Multi-Cloud Environments for Financial Services",
      industry: "Financial Services",
      challenge: "Complex security challenges and compliance requirements across hybrid cloud infrastructure.",
      solution: "Implemented a unified security and compliance platform for multi-cloud and on-premise environments.",
      results: "Achieved 100% compliance audit success and reduced security incident response time by 50%.",
      imageUrl: "https://placehold.co/600x400/22C55E/ffffff?text=Finance+CloudSecurity"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: <Stethoscope className="h-6 w-6 mr-2" /> },
    { name: "Logistics", icon: <Truck className="h-6 w-6 mr-2" /> },
    { name: "Retail", icon: <ShoppingCart className="h-6 w-6 mr-2" /> },
    { name: "Financial Services", icon: <DollarSign className="h-6 w-6 mr-2" /> },
    { name: "Manufacturing", icon: <Factory className="h-6 w-6 mr-2" /> },
  ];

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Success Stories: <span className="text-teal-400">Real-World Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Discover how our innovative solutions have empowered leading enterprises to overcome challenges and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#case-studies-list" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                View All Case Studies
              </a>
              <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Share Your Challenge
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Benefits of Case Studies Section */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Explore Our Case Studies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Lightbulb className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Gain Practical Insights</h3>
                <p className="text-gray-400">Learn from real-world implementations and best practices.</p>
              </div>
              {/* Benefit Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Understand Tangible ROI</h3>
                <p className="text-gray-400">See measurable results and return on investment achieved by our clients.</p>
              </div>
              {/* Benefit Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Handshake className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Discover Partnership Value</h3>
                <p className="text-gray-400">Explore how our collaborative approach leads to successful outcomes.</p>
              </div>
              {/* Benefit Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Validate Solutions</h3>
                <p className="text-gray-400">See our solutions in action and how they address specific business challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies List Section */}
        <section id="case-studies-list" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map(study => (
                <div key={study.id} className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={study.imageUrl} alt={study.title} className="w-full h-64 object-cover" onError={(e) => {const target = e.target as HTMLImageElement; target.src="https://placehold.co/600x400/4B5563/ffffff?text=Image+Unavailable"; }} />
                  <div className="p-8">
                    <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{study.industry}</span>
                    <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-400 mb-4"><span className="font-semibold text-gray-300">Challenge:</span> {study.challenge}</p>
                    <p className="text-gray-400 mb-4"><span className="font-semibold text-gray-300">Solution:</span> {study.solution}</p>
                    <p className="text-gray-400 mb-6"><span className="font-semibold text-gray-300">Results:</span> {study.results}</p>
                    <a href="#" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition duration-300">
                      View Full Case Study <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries/Sectors Section */}
        <section id="industries" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Case Studies by Industry</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map(industry => (
                <a key={industry.name} href="#" className="bg-gray-800 text-gray-300 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-full shadow-md transition duration-300 flex items-center space-x-2">
                  {industry.icon}
                  <span>{industry.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our experts today to discuss how our solutions can help your enterprise achieve its strategic goals.
            </p>
            <a href="mailto:info@yoursolutions.com" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
