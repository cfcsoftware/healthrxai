import React from 'react';
import {  CalendarCheck, ShieldCheck, MessageSquare, Video, Pill, Heart, Users, Laptop, PhoneCall, Mail } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

// Main Telemedicine component for the Telemedicine page
const Telemedicine = () => {
  return (
    <HomeLayout>
    <div className="min-h-screen bg-gray-900 pt-10 text-gray-100 font-inter antialiased">
      {/* Header Section */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Your Health, <span className="text-green-400">Anytime, Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience convenient, secure, and high-quality healthcare from the comfort of your home with our advanced telemedicine platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Book an Appointment
            </a>
            <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Explore Services
            </a>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
          <div className="absolute w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
          <div className="absolute w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Telemedicine Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Video className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Video Consultations</h3>
              <p className="text-gray-400">High-definition video calls for face-to-face consultations with certified doctors.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <CalendarCheck className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Easy Appointment Booking</h3>
              <p className="text-gray-400">Schedule appointments effortlessly with our intuitive online booking system.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
              <p className="text-gray-400">HIPAA-compliant platform ensures your health data is always protected.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <MessageSquare className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Chat & Messaging</h3>
              <p className="text-gray-400">Communicate with doctors and support staff via secure in-app messaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Telemedicine Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Heart className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">General Consultations</h3>
              <p className="text-gray-400">Address common health concerns, get diagnoses, and receive medical advice.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Pill className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Prescription Renewals</h3>
              <p className="text-gray-400">Conveniently renew eligible prescriptions online after a quick consultation.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Users className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Specialist Referrals</h3>
              <p className="text-gray-400">Get referrals to specialists when needed, seamlessly integrated into your care plan.</p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Laptop className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Chronic Disease Management</h3>
              <p className="text-gray-400">Ongoing support and management for chronic conditions from your home.</p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <PhoneCall className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Mental Health Support</h3>
              <p className="text-gray-400">Access to therapists and counselors for mental well-being support.</p>
            </div>
            {/* Placeholder for more services */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-500 text-center">And more specialized care...</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section (Simulated Process Flow) */}
      <section id="how-it-works" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How TeleHealthPro Works</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-lg text-gray-300 mb-6">
                Our platform simplifies access to healthcare in three easy steps, ensuring a seamless and efficient experience for every patient.
              </p>
              <ul className="list-decimal list-inside text-gray-400 space-y-3">
                <li><span className="font-semibold text-white">1. Book an Appointment:</span> Choose your doctor and schedule a time that works for you.</li>
                <li><span className="font-semibold text-white">2. Connect with Your Doctor:</span> Join your video consultation from any device.</li>
                <li><span className="font-semibold text-white">3. Receive Care:</span> Get diagnoses, prescriptions, or referrals, and follow-up as needed.</li>
              </ul>
            </div>
            {/* Simulated Process Flow Visualization */}
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Your Telehealth Journey (Simulated)</h3>
              <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                {/* Simulated steps */}
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                  <CalendarCheck className="h-12 w-12 text-green-400 mb-2" />
                  <p className="text-sm text-gray-300">Book</p>
                </div>
                <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                  <Video className="h-12 w-12 text-blue-400 mb-2" />
                  <p className="text-sm text-gray-300">Connect</p>
                </div>
                <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                  <Heart className="h-12 w-12 text-red-400 mb-2" />
                  <p className="text-sm text-gray-300">Receive Care</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">This visualization illustrates the simple steps to access care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready for a Healthier You?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Join TeleHealthPro today and experience the future of healthcare. Our team is ready to assist you.
          </p>
          <a href="mailto:support@telehealthpro.com" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            <Mail className="h-5 w-5 mr-2" />
            Contact Support
          </a>
        </div>
      </section>

      {/* Footer */}
   
    </div>
    </HomeLayout>
  );
};

export default Telemedicine;
