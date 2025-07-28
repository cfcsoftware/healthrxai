import React from 'react';
import { Mic, Speech, FileText, Brain, ShieldCheck, Clock,  Mail, Users,   Activity } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the NLP & Voice EMR page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Revolutionize Charting with <span className="text-indigo-400">NLP & Voice EMR</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Transform clinical documentation with intelligent voice recognition and natural language processing, enhancing efficiency and accuracy in your EMR system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Learn More
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Core Features of Our NLP & Voice EMR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Mic className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Accurate Voice Recognition</h3>
                <p className="text-gray-400">Convert spoken words into text with high precision, even in noisy environments.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Brain className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent NLP Processing</h3>
                <p className="text-gray-400">Extract key clinical information, diagnoses, and treatment plans automatically.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">HIPAA Compliant Security</h3>
                <p className="text-gray-400">Ensuring the highest standards of data privacy and patient confidentiality.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Clock className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Documentation</h3>
                <p className="text-gray-400">Generate clinical notes and update EMRs instantly as you speak.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits/Use Cases Section */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Benefits for Healthcare Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <FileText className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Reduced Charting Time</h3>
                <p className="text-gray-400">Significantly cut down on administrative burden and documentation time.</p>
              </div>
              {/* Benefit Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enhanced Patient Focus</h3>
                <p className="text-gray-400">Spend more time with patients and less time typing, improving care quality.</p>
              </div>
              {/* Benefit Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Activity className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Improved Data Accuracy</h3>
                <p className="text-gray-400">Minimize errors and inconsistencies in patient records with automated transcription.</p>
              </div>
              {/* Placeholder for more benefits */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And more ways to optimize your practice...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Workflow Section (Simulated) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Intelligent Workflow</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our system seamlessly integrates voice input with advanced NLP models to create structured, accurate, and actionable EMR entries.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Voice Capture:</span> Securely record and transmit spoken clinical notes.</li>
                  <li><span className="font-semibold text-white">Speech-to-Text:</span> Convert audio to accurate text using specialized medical vocabulary.</li>
                  <li><span className="font-semibold text-white">NLP Extraction:</span> Identify and structure relevant medical entities and concepts.</li>
                  <li><span className="font-semibold text-white">EMR Integration:</span> Automatically populate and update patient records.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Conceptual Documentation Flow</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Mic className="h-12 w-12 text-indigo-400 mb-2" />
                    <p className="text-sm text-gray-300">Speak</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Speech className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Transcribe</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Brain className="h-12 w-12 text-pink-400 mb-2" />
                    <p className="text-sm text-gray-300">Analyze (NLP)</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <FileText className="h-12 w-12 text-rose-400 mb-2" />
                    <p className="text-sm text-gray-300">Update EMR</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of our NLP & Voice EMR workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Transform Your Clinical Documentation?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our specialists today to see how NLP & Voice EMR can enhance your practice's efficiency and patient care.
            </p>
            <a href="mailto:info@voiceemrpro.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
