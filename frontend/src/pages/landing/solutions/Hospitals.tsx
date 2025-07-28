import React from 'react';
import { Hospital, Stethoscope, Users, ShieldCheck,  Mail, HeartPulse, Microscope, Syringe, Clock } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Hospital page
const hospitals = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Excellence in <span className="text-blue-400">Healthcare Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              A leading institution committed to providing compassionate, innovative, and high-quality medical care to our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Book an Appointment
              </a>
              <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Services
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Commitment to Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Stethoscope className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Expert Medical Staff</h3>
                <p className="text-gray-400">Highly qualified doctors, nurses, and specialists dedicated to your health.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Hospital className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">State-of-the-Art Facilities</h3>
                <p className="text-gray-400">Modern infrastructure and advanced medical technology for superior care.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Patient-Centric Approach</h3>
                <p className="text-gray-400">Personalized care plans and compassionate support for every patient.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Clock className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Emergency Services</h3>
                <p className="text-gray-400">Immediate medical attention available around the clock for critical situations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Departments Section */}
        <section id="services" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Specialized Services & Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <HeartPulse className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cardiology</h3>
                <p className="text-gray-400">Comprehensive heart care, diagnostics, and surgical interventions.</p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Microscope className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Oncology</h3>
                <p className="text-gray-400">Advanced cancer treatment, research, and patient support programs.</p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Syringe className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Orthopedics</h3>
                <p className="text-gray-400">Specialized care for musculoskeletal conditions and joint replacements.</p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Pediatrics</h3>
                <p className="text-gray-400">Dedicated healthcare services for infants, children, and adolescents.</p>
              </div>
              {/* Placeholder for more services */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And many more specialized departments...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Experience & Outcomes Section (Simulated Data Visualization) */}
        <section id="outcomes" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Patient Experience & Quality Outcomes</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  We are committed to delivering exceptional patient experiences and achieving superior clinical outcomes, continuously striving for excellence in all aspects of care.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">High Patient Satisfaction:</span> Consistently rated highly by our patients.</li>
                  <li><span className="font-semibold text-white">Reduced Readmission Rates:</span> Focus on effective post-discharge care.</li>
                  <li><span className="font-semibold text-white">Improved Recovery Times:</span> Advanced therapies and personalized rehabilitation.</li>
                  <li><span className="font-semibold text-white">Accredited Quality Care:</span> Adhering to the highest national and international standards.</li>
                </ul>
              </div>
              {/* Simulated Outcomes Chart */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Simulated Quality Metrics</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-end justify-around p-4 relative overflow-hidden">
                  {/* Simulated bars */}
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around p-4">
                    <div className="w-8 bg-blue-500 rounded-t-lg animate-pulse" style={{ height: '75%' }}></div>
                    <div className="w-8 bg-indigo-500 rounded-t-lg animate-pulse animation-delay-500" style={{ height: '85%' }}></div>
                    <div className="w-8 bg-cyan-500 rounded-t-lg animate-pulse animation-delay-1000" style={{ height: '90%' }}></div>
                    <div className="w-8 bg-purple-500 rounded-t-lg animate-pulse animation-delay-1500" style={{ height: '80%' }}></div>
                  </div>
                  <div className="absolute top-2 left-4 text-gray-400 text-sm">Performance Index (%)</div>
                  <div className="absolute bottom-2 right-4 text-gray-400 text-sm">Quarter</div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Conceptual representation of key quality indicators over time.</p> {/* Added missing closing </p> tag */}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Your Health is Our Priority</h2>
            <p className="text-lg text-gray-300 mb-10">
              Whether for routine care or specialized treatment, our team is here to provide the highest standard of medical excellence.
            </p>
            <a href="mailto:info@yourhospital.com" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default hospitals;
