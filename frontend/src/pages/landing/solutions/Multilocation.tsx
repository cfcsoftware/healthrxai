import React from 'react';
import { MapPin, LayoutGrid, Cloud,  ShieldCheck, TrendingUp, Zap, Settings, Mail, Globe, Link } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the Multi-location Setup page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Seamlessly Manage Your <span className="text-teal-400">Multi-Location Enterprise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Unify operations, enhance visibility, and optimize performance across all your business locations with our integrated solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Features
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

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Benefits of Centralized Multi-location Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <LayoutGrid className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Centralized Control</h3>
                <p className="text-gray-400">Manage all locations from a single, intuitive dashboard for ultimate oversight.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enhanced Visibility</h3>
                <p className="text-gray-400">Gain real-time insights into performance across all your branches.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Operational Efficiency</h3>
                <p className="text-gray-400">Streamline processes, reduce redundancies, and boost productivity.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Consistent Standards</h3>
                <p className="text-gray-400">Ensure uniform service quality and brand experience across all locations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions & Capabilities Section */}
        <section id="solutions" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Multi-location Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capability Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Cloud className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud-Based Platform</h3>
                <p className="text-gray-400">Secure, scalable cloud infrastructure for anytime, anywhere access.</p>
              </div>
              {/* Capability Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Settings className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Customizable Workflows</h3>
                <p className="text-gray-400">Adapt the system to your unique operational needs per location or globally.</p>
              </div>
              {/* Capability Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Link className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Seamless Data Synchronization</h3>
                <p className="text-gray-400">Ensure consistent and up-to-date data across all your linked locations.</p>
              </div>
              {/* Capability Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And more features to empower your growth...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture/Connectivity Section (Simulated Diagram) */}
        <section id="architecture" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How Our Multi-location System Connects</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our robust architecture ensures secure and efficient communication between your central hub and all remote locations, providing a unified operational environment.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Centralized Database:</span> Single source of truth for all data.</li>
                  <li><span className="font-semibold text-white">Secure VPN/API Connections:</span> Encrypted links for data transfer.</li>
                  <li><span className="font-semibold text-white">Real-time Analytics Aggregation:</span> Consolidated reporting from all sites.</li>
                  <li><span className="font-semibold text-white">Scalable Infrastructure:</span> Easily add new locations as your business expands.</li>
                </ul>
              </div>
              {/* Simulated Connectivity Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Conceptual Multi-location Network</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Central Hub */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Globe className="h-16 w-16 text-teal-400 mb-2" />
                    <p className="text-sm text-gray-300">Central Hub</p>
                  </div>
                  {/* Connections */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-1 h-16 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500 transform rotate-45"></div>
                    <div className="w-1 h-16 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1000 transform -rotate-45"></div>
                  </div>
                  {/* Locations */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1500">
                    <MapPin className="h-12 w-12 text-blue-400 mb-2" />
                    <p className="text-sm text-gray-300">Location A</p>
                  </div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <MapPin className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Location B</p>
                  </div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2500">
                    <MapPin className="h-12 w-12 text-yellow-400 mb-2" />
                    <p className="text-sm text-gray-300">Location C</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual diagram of a centralized multi-location network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Expand Your Enterprise?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our specialists today to discover how our multi-location setup solutions can simplify your growth.
            </p>
            <a href="mailto:info@multilocationpro.com" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
