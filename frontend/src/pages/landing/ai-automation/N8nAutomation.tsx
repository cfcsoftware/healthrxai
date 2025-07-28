import React from 'react';
import { Zap,  LayoutGrid, Plug, RefreshCw, Scale, Megaphone, DollarSign, Server, Users, Settings, Play, CheckCircle, Mail } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the n8n Workflow Automation page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Automate Your Enterprise with <span className="text-emerald-400">n8n Workflows</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Unlock unparalleled efficiency and integration across your business applications with powerful, flexible, and open-source workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Features
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Features of n8n for Enterprise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <LayoutGrid className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Visual Workflow Builder</h3>
                <p className="text-gray-400">Drag-and-drop interface to design complex automation flows with ease.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Plug className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Extensive Integrations</h3>
                <p className="text-gray-400">Connect to hundreds of apps and services, both cloud and on-premise.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <RefreshCw className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Data Transformation</h3>
                <p className="text-gray-400">Manipulate and transform data to fit any system or requirement.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Scale className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scalable & Secure</h3>
                <p className="text-gray-400">Designed for enterprise-grade scalability and robust security protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases/Solutions Section */}
        <section id="solutions" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Enterprise Workflow Automation Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Use Case Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Megaphone className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Marketing Automation</h3>
                <p className="text-gray-400">Automate lead nurturing, content distribution, and campaign management.</p>
              </div>
              {/* Use Case Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <DollarSign className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales Operations</h3>
                <p className="text-gray-400">Streamline CRM updates, quote generation, and sales reporting.</p>
              </div>
              {/* Use Case Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Server className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">IT & DevOps Automation</h3>
                <p className="text-gray-400">Automate incident response, system provisioning, and monitoring alerts.</p>
              </div>
              {/* Use Case Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">HR & Onboarding</h3>
                <p className="text-gray-400">Automate new hire onboarding, data synchronization, and compliance tasks.</p>
              </div>
              {/* Placeholder for more solutions */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And many more custom automations...</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works/Workflow Section (Simulated) */}
        <section id="how-it-works" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How n8n Workflow Automation Works</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  n8n allows you to connect any app with an API, database, or webhook to build powerful, custom workflows without writing extensive code.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">1. Trigger:</span> Start workflows based on events in your apps.</li>
                  <li><span className="font-semibold text-white">2. Process:</span> Transform, filter, or combine data as needed.</li>
                  <li><span className="font-semibold text-white">3. Act:</span> Perform actions in other applications automatically.</li>
                  <li><span className="font-semibold text-white">4. Monitor:</span> Track workflow execution and performance in real-time.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Conceptual Workflow Design</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Zap className="h-12 w-12 text-emerald-400 mb-2" />
                    <p className="text-sm text-gray-300">Trigger</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Settings className="h-12 w-12 text-green-400 mb-2" />
                    <p className="text-sm text-gray-300">Process</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Play className="h-12 w-12 text-teal-400 mb-2" />
                    <p className="text-sm text-gray-300">Act</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <CheckCircle className="h-12 w-12 text-lime-400 mb-2" />
                    <p className="text-sm text-gray-300">Monitor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of a typical n8n workflow execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Automate Your Business Processes?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our automation experts to discover how n8n can revolutionize your enterprise operations.
            </p>
            <a href="mailto:info@n8nenterprise.com" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
