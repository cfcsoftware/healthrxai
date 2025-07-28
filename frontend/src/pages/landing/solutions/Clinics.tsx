import React from 'react';
import {  CalendarCheck, FileText, DollarSign, Users,  Mail, HeartPulse, Microscope, Syringe, Stethoscope } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

// Main Clinic component for the Clinics page
const Clinic = () => {
  return (
    <HomeLayout>
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Streamline Your Clinic with <span className="text-cyan-400">Intelligent Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empower your healthcare practice with a comprehensive platform designed for efficient patient management, seamless operations, and enhanced care delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Request a Demo
            </a>
            <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Learn More
            </a>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
          <div className="absolute w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
          <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Clinic Management Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <CalendarCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Appointment Scheduling</h3>
              <p className="text-gray-400">Optimize schedules, reduce no-shows, and provide online booking convenience.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <FileText className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Electronic Medical Records (EMR)</h3>
              <p className="text-gray-400">Secure and accessible patient records for comprehensive care.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <DollarSign className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Integrated Billing & Payments</h3>
              <p className="text-gray-400">Streamline billing processes, insurance claims, and patient payments.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Users className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Patient Portal & Engagement</h3>
              <p className="text-gray-400">Empower patients with self-service options and secure communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Specialties Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Specialties & Services Supported</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <HeartPulse className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">General Practice</h3>
              <p className="text-gray-400">Comprehensive support for family medicine and general health.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Stethoscope className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Pediatrics</h3>
              <p className="text-gray-400">Tailored features for child healthcare and development.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Microscope className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Dermatology</h3>
              <p className="text-gray-400">Specialized tools for skin conditions and treatments.</p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Syringe className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Vaccination Clinics</h3>
              <p className="text-gray-400">Efficient management of vaccination programs and records.</p>
            </div>
            {/* Placeholder for more services */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-500 text-center">And many other specialties...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section (Simulated Process Flow) */}
      <section id="workflow" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Streamlined Clinic Workflow</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-lg text-gray-300 mb-6">
                ClinicConnect Pro optimizes every step of the patient journey, from initial contact to follow-up care, ensuring efficiency and patient satisfaction.
              </p>
              <ul className="list-decimal list-inside text-gray-400 space-y-3">
                <li><span className="font-semibold text-white">1. Patient Registration:</span> Quick and easy digital registration.</li>
                <li><span className="font-semibold text-white">2. Appointment Management:</span> Automated reminders and scheduling.</li>
                <li><span className="font-semibold text-white">3. Consultation & EMR:</span> Seamless record-keeping during visits.</li>
                <li><span className="font-semibold text-white">4. Billing & Payments:</span> Integrated and transparent financial processes.</li>
                <li><span className="font-semibold text-white">5. Follow-up & Analytics:</span> Post-visit care and performance insights.</li>
              </ul>
            </div>
            {/* Simulated Workflow Visualization */}
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Patient Journey Overview (Simulated)</h3>
              <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                {/* Simulated steps */}
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                  <Users className="h-12 w-12 text-cyan-400 mb-2" />
                  <p className="text-sm text-gray-300">Register</p>
                </div>
                <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                  <CalendarCheck className="h-12 w-12 text-green-400 mb-2" />
                  <p className="text-sm text-gray-300">Book</p>
                </div>
                <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                  <Stethoscope className="h-12 w-12 text-purple-400 mb-2" />
                  <p className="text-sm text-gray-300">Consult</p>
                </div>
                <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                  <DollarSign className="h-12 w-12 text-yellow-400 mb-2" />
                  <p className="text-sm text-gray-300">Bill</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">This visualization illustrates the typical patient journey within our system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Optimize Your Clinic Operations?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Contact ClinicConnect Pro today to see how our platform can transform your practice and enhance patient care.
          </p>
          <a href="mailto:info@clinicconnectpro.com" className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <Mail className="h-5 w-5 mr-2" />
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
    </HomeLayout>
  );
};

export default Clinic;
