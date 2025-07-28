import React from 'react';
import { ShieldCheck, Users, Globe, BookOpen, Stethoscope, Briefcase, FileText,  Mail,  Scale,  } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the Government Healthcare page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Advancing Public Health with <span className="text-emerald-400">Innovative Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Empowering government agencies with secure, efficient, and accessible healthcare technology to serve communities better.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Schedule a Consultation
              </a>
              <a href="#solutions" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Our Solutions
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Core Capabilities for Government Healthcare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Compliance & Security</h3>
                <p className="text-gray-400">Adherence to strict government regulations (HIPAA, FedRAMP) and robust data protection.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Population Health Management</h3>
                <p className="text-gray-400">Tools for monitoring, analyzing, and improving health outcomes across diverse populations.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Globe className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Accessible & Inclusive</h3>
                <p className="text-gray-400">Designing solutions for universal access, reaching all citizens regardless of location or ability.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BookOpen className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Policy & Reporting</h3>
                <p className="text-gray-400">Streamlined tools for policy implementation, tracking, and comprehensive reporting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions & Services Section */}
        <section id="solutions" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Government Healthcare Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Stethoscope className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Public Health Initiatives</h3>
                <p className="text-gray-400">Support for disease surveillance, vaccination programs, and health education campaigns.</p>
              </div>
              {/* Solution Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Briefcase className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Veteran & Military Health</h3>
                <p className="text-gray-400">Specialized systems for managing veteran care, benefits, and medical records.</p>
              </div>
              {/* Solution Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <FileText className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Electronic Health Records (EHR)</h3>
                <p className="text-gray-400">Secure, interoperable EHR systems for seamless data exchange across agencies.</p>
              </div>
              {/* Solution Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Scale className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Regulatory Compliance Tools</h3>
                <p className="text-gray-400">Automated compliance checks and reporting to meet evolving healthcare mandates.</p>
              </div>
              {/* Placeholder for more solutions */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And custom government health initiatives...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Workflow Section (Simulated Data Visualization) */}
        <section id="impact" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Driving Impact in Public Health</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our solutions are designed to enhance efficiency, improve patient outcomes, and ensure robust data integrity across all government healthcare operations.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Improved Efficiency:</span> Automate administrative tasks, freeing up resources.</li>
                  <li><span className="font-semibold text-white">Enhanced Patient Outcomes:</span> Better data leads to more informed care decisions.</li>
                  <li><span className="font-semibold text-white">Cost Reduction:</span> Optimize resource allocation and reduce operational overhead.</li>
                  <li><span className="font-semibold text-white">Greater Transparency:</span> Secure and auditable records for public trust.</li>
                </ul>
              </div>
              {/* Simulated Impact Chart */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Simulated Health Outcome Improvement</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-end justify-around p-4 relative overflow-hidden">
                  {/* Simulated bars */}
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around p-4">
                    <div className="w-8 bg-emerald-500 rounded-t-lg animate-pulse" style={{ height: '50%' }}></div>
                    <div className="w-8 bg-green-500 rounded-t-lg animate-pulse animation-delay-500" style={{ height: '70%' }}></div>
                    <div className="w-8 bg-teal-500 rounded-t-lg animate-pulse animation-delay-1000" style={{ height: '85%' }}></div>
                    <div className="w-8 bg-lime-500 rounded-t-lg animate-pulse animation-delay-1500" style={{ height: '60%' }}></div>
                  </div>
                  <div className="absolute top-2 left-4 text-gray-400 text-sm">Improvement (%)</div>
                  <div className="absolute bottom-2 right-4 text-gray-400 text-sm">Year</div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Conceptual representation of improved health metrics over time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Partner for a Healthier Nation</h2>
            <p className="text-lg text-gray-300 mb-10">
              Connect with our government healthcare specialists to discuss how our solutions can support your agency's mission.
            </p>
            <a href="mailto:info@govhealthsolutions.com" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Team
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
