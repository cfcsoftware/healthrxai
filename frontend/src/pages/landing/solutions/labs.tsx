import React from 'react';
import { Microscope, TestTube, Dna, ShieldCheck, Clock, FileText,  Mail, FlaskConical, Brain, HeartPulse, Search,  } from 'lucide-react'; // Removed Lungs, added Stethoscope for alternative
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the Labs & Diagnostics page
const LabRadiology = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Precision Diagnostics, <span className="text-purple-400">Accurate Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Empowering healthcare providers with cutting-edge laboratory and diagnostic services for reliable results and informed patient care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Quote
              </a>
              <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Services
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Diagnostic Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <TestTube className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Lab Testing</h3>
                <p className="text-gray-400">Comprehensive range of lab tests with rapid and accurate results.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Dna className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Genomic & Molecular Diagnostics</h3>
                <p className="text-gray-400">Cutting-edge genetic testing for personalized medicine and disease risk assessment.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
                <p className="text-gray-400">Rigorous quality control measures ensure the highest standards of accuracy and reliability.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Clock className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Fast Turnaround Times</h3>
                <p className="text-gray-400">Efficient processes to deliver results quickly, supporting timely clinical decisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Specialties Section */}
        <section id="services" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Comprehensive Lab & Diagnostic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <FlaskConical className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Clinical Chemistry</h3>
                <p className="text-gray-400">Analysis of blood and bodily fluids for various health markers.</p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Microscope className="h-12 w-12 text-teal-400 mb-4" /> {/* Changed from Lungs to Microscope */}
                <h3 className="text-xl font-semibold text-white mb-3">Pathology & Histology</h3>
                <p className="text-gray-400">Tissue analysis for disease diagnosis and characterization.</p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Brain className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Microbiology & Immunology</h3>
                <p className="text-gray-400">Identification of infectious agents and immune system evaluations.</p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <HeartPulse className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Hematology</h3>
                <p className="text-gray-400">Comprehensive blood cell analysis for various conditions.</p>
              </div>
              {/* Placeholder for more services */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And a full spectrum of diagnostic offerings...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow & Technology Section (Simulated Data Visualization) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Streamlined Workflow & Advanced Technology</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our state-of-the-art laboratories are equipped with the latest technology and automated systems to ensure efficient processing and highly reliable results.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Automated Sample Processing:</span> Minimizing human error and speeding up analysis.</li>
                  <li><span className="font-semibold text-white">Digital Pathology:</span> High-resolution imaging for precise diagnoses.</li>
                  <li><span className="font-semibold text-white">Integrated LIS/LIMS:</span> Seamless data management and reporting.</li>
                  <li><span className="font-semibold text-white">AI-Powered Analysis:</span> Enhancing diagnostic accuracy and efficiency.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Diagnostic Process Flow (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Search className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Order</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <TestTube className="h-12 w-12 text-fuchsia-400 mb-2" />
                    <p className="text-sm text-gray-300">Collect</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Microscope className="h-12 w-12 text-pink-400 mb-2" />
                    <p className="text-sm text-gray-300">Analyze</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <FileText className="h-12 w-12 text-rose-400 mb-2" />
                    <p className="text-sm text-gray-300">Report</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of our streamlined diagnostic process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Partner for Reliable Diagnostic Solutions</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our team today to discuss how our advanced lab and diagnostic services can support your healthcare needs.
            </p>
            <a href="mailto:info@labsdiagnostics.com" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Experts
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default LabRadiology;
