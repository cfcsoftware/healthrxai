import React from 'react';
import { Cloud, Server, GitFork, ShieldCheck, Scale, Zap, Settings,  Mail } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

// Assuming HomeLayout is defined elsewhere or will be provided.
// For this example, we'll create a simple placeholder HomeLayout component.


// Main App component for the Cloud & On-premise Deployment page
const Cloudonprem = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Flexible & Secure <span className="text-indigo-400">Deployment Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Choose the right infrastructure for your enterprise with our versatile cloud, on-premise, and hybrid deployment options, tailored for performance and security.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Discuss Your Needs
              </a>
              <a href="#models" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Models
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Deployment Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Robust Security</h3>
                <p className="text-gray-400">Advanced security protocols and compliance for all deployment types.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Scale className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scalability & Flexibility</h3>
                <p className="text-gray-400">Scale resources up or down to meet evolving business demands.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
                <p className="text-gray-400">Optimized infrastructure for fast and reliable application performance.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Settings className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Easy Management</h3>
                <p className="text-gray-400">Centralized tools for monitoring and managing your deployed solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Models Section */}
        <section id="models" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Choose Your Deployment Model</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cloud Model Card */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Cloud className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Deployment</h3>
                <p className="text-gray-400 mb-4">Leverage the agility and scalability of public or private cloud environments.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Rapid provisioning</li>
                  <li>Elastic scalability</li>
                  <li>Reduced CapEx</li>
                </ul>
              </div>
              {/* On-premise Model Card */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Server className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">On-premise Deployment</h3>
                <p className="text-gray-400 mb-4">Maintain full control over your data and infrastructure within your own data center.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Maximum control & customization</li>
                  <li>Enhanced data sovereignty</li>
                  <li>Compliance with strict regulations</li>
                </ul>
              </div>
              {/* Hybrid Model Card */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <GitFork className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Hybrid Deployment</h3>
                <p className="text-gray-400 mb-4">Combine the best of both worlds for optimal flexibility and resource utilization.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Flexibility for sensitive data</li>
                  <li>Scalability for variable workloads</li>
                  <li>Optimized cost-efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (Simulated Diagram) */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Visualizing Your Deployment Options</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Understanding the architectural differences helps in making informed decisions about where your applications and data reside. Our solutions are designed to integrate seamlessly across environments.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Cloud:</span> Scalable, cost-effective for variable loads.</li>
                  <li><span className="font-semibold text-white">On-premise:</span> High control, ideal for sensitive data.</li>
                  <li><span className="font-semibold text-white">Hybrid:</span> Balances control and scalability.</li>
                </ul>
              </div>
              {/* Simulated Deployment Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Deployment Architecture (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Cloud representation */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Cloud className="h-16 w-16 text-blue-400 mb-2" />
                    <p className="text-sm text-gray-300">Cloud</p>
                  </div>
                  {/* Connection */}
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  {/* Hybrid representation */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <GitFork className="h-16 w-16 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Hybrid</p>
                  </div>
                  {/* Connection */}
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  {/* On-premise representation */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Server className="h-16 w-16 text-orange-400 mb-2" />
                    <p className="text-sm text-gray-300">On-Premise</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual view of cloud, hybrid, and on-premise deployments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Find Your Ideal Deployment Strategy</h2>
            <p className="text-lg text-gray-300 mb-10">
              Our experts are ready to help you design and implement the perfect cloud, on-premise, or hybrid solution for your enterprise.
            </p>
            <a href="mailto:info@deploymentsolutions.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Specialists
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Cloudonprem;
