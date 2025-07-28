import React from 'react';
import {  Share2, BarChart2, Lightbulb, LayoutGrid, Settings, Mail, BookOpen, Globe, PenTool, TrendingUp, Calendar, ShieldCheck } from 'lucide-react'; // Added ShieldCheck to import
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the Brochures page
const App = () => {
  // Simulated brochure categories/types
  const brochureTypes = [
    {
      id: 1,
      name: "Product Brochures",
      description: "Showcase your products with detailed specifications and stunning visuals.",
      icon: <Lightbulb className="h-12 w-12 text-blue-400 mb-4" />
    },
    {
      id: 2,
      name: "Service Brochures",
      description: "Highlight your service offerings and their benefits to potential clients.",
      icon: <Settings className="h-12 w-12 text-green-400 mb-4" />
    },
    {
      id: 3,
      name: "Corporate Brochures",
      description: "Present your company's mission, values, and achievements to stakeholders.",
      icon: <LayoutGrid className="h-12 w-12 text-purple-400 mb-4" />
    },
    {
      id: 4,
      name: "Event Brochures",
      description: "Promote upcoming events, conferences, and webinars with engaging content.",
      icon: <Calendar className="h-12 w-12 text-yellow-400 mb-4" /> // Using Calendar for events
    },
  ];

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Elevate Your Story with <span className="text-orange-400">Dynamic Digital Brochures</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Create, distribute, and track high-impact digital brochures that captivate your audience and drive engagement across all channels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Features
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Features of Our Digital Brochure Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <PenTool className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intuitive Creation Tools</h3>
                <p className="text-gray-400">Design stunning brochures with easy-to-use drag-and-drop interfaces.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Share2 className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Channel Distribution</h3>
                <p className="text-gray-400">Share your brochures seamlessly across web, email, social media, and more.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BarChart2 className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
                <p className="text-gray-400">Gain deep insights into viewer engagement, downloads, and content performance.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Scalable</h3>
                <p className="text-gray-400">Enterprise-grade security and infrastructure to support your growing needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Types Section */}
        <section id="brochure-types" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Types of Brochures You Can Create</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brochureTypes.map(type => (
                <div key={type.id} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow & Impact Section (Simulated) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Streamlined Brochure Workflow</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  From initial design to global distribution and performance analysis, our platform simplifies every step of your digital brochure strategy.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">1. Design & Create:</span> Utilize templates or build from scratch with interactive elements.</li>
                  <li><span className="font-semibold text-white">2. Publish & Distribute:</span> Make your brochures live and share them across your preferred channels.</li>
                  <li><span className="font-semibold text-white">3. Track & Analyze:</span> Monitor views, clicks, and engagement to optimize future content.</li>
                  <li><span className="font-semibold text-white">4. Update & Iterate:</span> Easily modify content and deploy updates in real-time.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Brochure Lifecycle (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <PenTool className="h-12 w-12 text-orange-400 mb-2" />
                    <p className="text-sm text-gray-300">Design</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Globe className="h-12 w-12 text-yellow-400 mb-2" />
                    <p className="text-sm text-gray-300">Publish</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <TrendingUp className="h-12 w-12 text-lime-400 mb-2" />
                    <p className="text-sm text-gray-300">Analyze</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <BookOpen className="h-12 w-12 text-green-400 mb-2" />
                    <p className="text-sm text-gray-300">Iterate</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of the digital brochure lifecycle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Transform Your Marketing Collateral?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our specialists today to discover how our digital brochure platform can elevate your brand's communication.
            </p>
            <a href="mailto:info@digitalbrochures.com" className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
