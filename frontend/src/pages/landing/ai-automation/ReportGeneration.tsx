import React from 'react';
import { FileText, Brain,  Zap, ShieldCheck,  BarChart2, Mail, LayoutDashboard, Database, Download, MessageSquare, Lightbulb } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the AI Report Generation page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Automate Insights with <span className="text-blue-400">AI Report Generation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Transform raw data into actionable, intelligent reports instantly, leveraging advanced AI and natural language generation for unparalleled efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Features
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

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Capabilities of AI Report Generation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Brain className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Content Creation</h3>
                <p className="text-gray-400">AI-powered algorithms generate narrative reports from complex data sets.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <LayoutDashboard className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Customizable Templates</h3>
                <p className="text-gray-400">Tailor report layouts and content to match your brand and specific needs.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Data Integration</h3>
                <p className="text-gray-400">Connect directly to your data sources for up-to-the-minute reporting.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-400">Ensuring data privacy and compliance with industry regulations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits/Use Cases Section */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Transforming Reporting Across Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Use Case Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BarChart2 className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Financial Reporting</h3>
                <p className="text-gray-400">Automate quarterly reports, performance summaries, and investment analyses.</p>
              </div>
              {/* Use Case Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <MessageSquare className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Marketing Performance</h3>
                <p className="text-gray-400">Generate campaign performance reports, audience insights, and ROI analysis.</p>
              </div>
              {/* Use Case Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Lightbulb className="h-12 w-12 text-lime-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Business Intelligence</h3>
                <p className="text-gray-400">Create executive summaries, operational dashboards, and strategic insights.</p>
              </div>
              {/* Placeholder for more use cases */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And many more custom reporting needs...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow & Technology Section (Simulated) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our AI Report Generation Workflow</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our platform intelligently processes your data, extracts key insights, and generates comprehensive, narrative reports, saving you countless hours.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Data Ingestion:</span> Securely connect to your databases, spreadsheets, and APIs.</li>
                  <li><span className="font-semibold text-white">AI Analysis:</span> Proprietary AI models identify trends, anomalies, and key performance indicators.</li>
                  <li><span className="font-semibold text-white">Natural Language Generation (NLG):</span> Convert insights into clear, concise, and human-like narrative reports.</li>
                  <li><span className="font-semibold text-white">Report Delivery:</span> Generate reports in various formats (PDF, Word, HTML) and distribute automatically.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Report Generation Lifecycle (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Database className="h-12 w-12 text-blue-400 mb-2" />
                    <p className="text-sm text-gray-300">Data Input</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Brain className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">AI Analysis</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <FileText className="h-12 w-12 text-pink-400 mb-2" />
                    <p className="text-sm text-gray-300">Generate Report</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <Download className="h-12 w-12 text-rose-400 mb-2" />
                    <p className="text-sm text-gray-300">Deliver</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of the AI-powered report generation process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Automate Your Reporting?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our AI reporting specialists to streamline your data analysis and unlock new levels of efficiency.
            </p>
            <a href="mailto:info@aireports.com" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
