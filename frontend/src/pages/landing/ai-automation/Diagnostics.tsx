import React from 'react'
import { Microscope, TestTube, Dna, ShieldCheck, Clock, FileText, BarChart2, Mail, Brain,  Search, Scan, } from 'lucide-react'; // Removed XRay, kept Scan
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Diagnostics page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Precision Diagnostics for <span className="text-indigo-400">Clearer Health Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Delivering accurate and timely diagnostic results through advanced technology and expert analysis, empowering better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request Information
              </a>
              <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Services
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Diagnostic Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Microscope className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-400">Utilizing the latest diagnostic equipment for superior accuracy.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Uncompromising Quality</h3>
                <p className="text-gray-400">Rigorous quality control and accreditation for reliable results.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Clock className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Turnaround</h3>
                <p className="text-gray-400">Efficient processes ensure timely delivery of critical diagnostic reports.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <FileText className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Reporting</h3>
                <p className="text-gray-400">Detailed and easy-to-understand reports for healthcare professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Modalities Section */}
        <section id="services" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Comprehensive Diagnostic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Scan className="h-12 w-12 text-red-400 mb-4" /> {/* Changed from XRay to Scan */}
                <h3 className="text-xl font-semibold text-white mb-3">Radiology & Imaging</h3>
                <p className="text-gray-400">MRI, CT scans, X-rays, and ultrasound for detailed internal imaging.</p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <TestTube className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Laboratory Testing</h3>
                <p className="text-gray-400">Blood work, urinalysis, and other specialized lab analyses.</p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Dna className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Genetic & Molecular Diagnostics</h3>
                <p className="text-gray-400">Advanced testing for genetic predispositions and disease markers.</p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Brain className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Pathology & Biopsy Analysis</h3>
                <p className="text-gray-400">Expert analysis of tissue samples for accurate disease diagnosis.</p>
              </div>
              {/* Placeholder for more services */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And a full spectrum of diagnostic offerings...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Process Section (Simulated Workflow) */}
        <section id="process" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Streamlined Diagnostic Process</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  From sample collection to final report, our integrated workflow ensures efficiency, accuracy, and seamless communication with healthcare providers.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Order & Collection:</span> Easy test ordering and convenient sample collection.</li>
                  <li><span className="font-semibold text-white">Processing & Analysis:</span> Advanced automation for rapid and precise testing.</li>
                  <li><span className="font-semibold text-white">Expert Interpretation:</span> Board-certified specialists review and interpret results.</li>
                  <li><span className="font-semibold text-white">Secure Reporting:</span> Timely and secure delivery of comprehensive reports.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Diagnostic Workflow (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Search className="h-12 w-12 text-indigo-400 mb-2" />
                    <p className="text-sm text-gray-300">Order</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <TestTube className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Collect</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Scan className="h-12 w-12 text-pink-400 mb-2" />
                    <p className="text-sm text-gray-300">Analyze</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <BarChart2 className="h-12 w-12 text-rose-400 mb-2" />
                    <p className="text-sm text-gray-300">Report</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of our end-to-end diagnostic process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Partner for Reliable Diagnostic Insights</h2>
            <p className="text-lg text-gray-300 mb-10">
              Connect with our team to learn how our advanced diagnostic services can support your clinical needs and research.
            </p>
            <a href="mailto:info@diagnosticsolutions.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Experts
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
