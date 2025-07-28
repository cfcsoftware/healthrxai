import React from 'react';
import {  Factory, HardHat, Brain, ShieldCheck, Wrench, Lightbulb, TrendingUp, Code } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

// Main App component for the Robotics page
const Robot = () => {
  return (
    <HomeLayout>
<div className="min-h-screen bg-gray-900 pt-10 text-gray-100 font-inter antialiased">
      {/* Header Section */}
    

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Pioneering the Future of <span className="text-blue-400">Robotics</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empowering industries with intelligent robotic solutions for enhanced automation, precision, and productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Get a Consultation
            </a>
            <a href="#solutions" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Explore Solutions
            </a>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
          <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
          <div className="absolute w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
        </div>
      </section>

      {/* Robotics Solutions Section */}
      <section id="solutions" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Robotics Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solution Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Factory className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Industrial Automation</h3>
              <p className="text-gray-400">Automate manufacturing, assembly, and logistics with advanced robotic systems.</p>
            </div>
            {/* Solution Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <HardHat className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Field Robotics</h3>
              <p className="text-gray-400">Robust robots for hazardous environments, inspection, and remote operations.</p>
            </div>
            {/* Solution Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Brain className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">Integrate AI for intelligent decision-making and adaptive robotic behaviors.</p>
            </div>
            {/* Solution Card 4 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Robotic Security</h3>
              <p className="text-gray-400">Autonomous surveillance and security robots for enhanced protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section id="technology" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Core Robotics Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Card 1 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Wrench className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Actuation</h3>
              <p className="text-gray-400">Precision motors and mechanisms for smooth, accurate robotic movements.</p>
            </div>
            {/* Tech Card 2 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Lightbulb className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Perception</h3>
              <p className="text-gray-400">Vision systems, LiDAR, and sensors for environmental understanding.</p>
            </div>
            {/* Tech Card 3 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Control</h3>
              <p className="text-gray-400">High-performance control systems for dynamic and responsive operations.</p>
            </div>
            {/* Tech Card 4 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Code className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Robotics Software</h3>
              <p className="text-gray-400">Customizable software platforms for programming and managing robots.</p>
            </div>
            {/* Placeholder for more tech */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-500 text-center">And cutting-edge research...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section (Simulated Data Visualization) */}
      <section id="applications" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Robotics in Action</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-lg text-gray-300 mb-6">
                Our robotic solutions are deployed across various industries, delivering tangible benefits and driving innovation.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-3">
                <li><span className="font-semibold text-white">Manufacturing:</span> Assembly, welding, material handling.</li>
                <li><span className="font-semibold text-white">Logistics:</span> Automated guided vehicles (AGVs), sorting, warehousing.</li>
                <li><span className="font-semibold text-white">Agriculture:</span> Precision farming, harvesting, monitoring.</li>
                <li><span className="font-semibold text-white">Healthcare:</span> Surgical assistance, patient care, lab automation.</li>
                <li><span className="font-semibold text-white">Defense:</span> Reconnaissance, bomb disposal, autonomous vehicles.</li>
              </ul>
            </div>
            {/* Simulated Robotic Deployment Map */}
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Global Robotics Deployment (Simulated)</h3>
              <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simple world map-like shape */}
                <div className="w-4/5 h-4/5 bg-gray-600 rounded-full flex items-center justify-center relative">
                  {/* Simulated deployment points */}
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse-slow top-1/4 left-1/4"></div>
                  <div className="absolute w-4 h-4 bg-green-400 rounded-full animate-pulse-slow animation-delay-1000 top-2/3 right-1/3"></div>
                  <div className="absolute w-4 h-4 bg-purple-400 rounded-full animate-pulse-slow animation-delay-2000 bottom-1/4 left-2/3"></div>
                  <div className="absolute w-4 h-4 bg-red-400 rounded-full animate-pulse-slow animation-delay-3000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">This map represents simulated global deployment of our robotics solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
     

      {/* Footer */}
    
    </div>
    </HomeLayout>
  );
};

export default Robot;
