import React from 'react';
import {  Brain, Database, ShieldCheck,  BarChart2, Mail, Users, Filter, Settings, Zap, Target, HeartPulse } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Predictive Analytics page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Predict the Future with <span className="text-red-400">Advanced Analytics</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Leverage the power of predictive modeling to anticipate trends, optimize strategies, and make proactive, data-driven decisions for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Capabilities
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Predictive Analytics Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Brain className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Machine Learning Models</h3>
                <p className="text-gray-400">Utilize cutting-edge ML algorithms for accurate forecasting and pattern recognition.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Big Data Integration</h3>
                <p className="text-gray-400">Seamlessly connect and analyze vast datasets from various sources.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Filter className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scenario Planning</h3>
                <p className="text-gray-400">Simulate different scenarios to understand potential outcomes and risks.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-400">Enterprise-grade security and data governance for sensitive information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Predictive Analytics Across Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Use Case Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Customer Behavior Prediction</h3>
                <p className="text-gray-400">Anticipate customer churn, identify upsell opportunities, and personalize experiences.</p>
              </div>
              {/* Use Case Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Target className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales Forecasting</h3>
                <p className="text-gray-400">Accurately predict future sales, optimize inventory, and plan resources.</p>
              </div>
              {/* Use Case Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Operational Optimization</h3>
                <p className="text-gray-400">Predict equipment failures, optimize supply chains, and improve efficiency.</p>
              </div>
              {/* Use Case Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <HeartPulse className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare Outcomes</h3>
                <p className="text-gray-400">Predict patient risks, personalize treatments, and optimize resource allocation.</p>
              </div>
              {/* Placeholder for more use cases */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And many more industry-specific applications...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Workflow Section (Simulated) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Predictive Analytics Workflow</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our platform guides you through the entire predictive analytics lifecycle, from data ingestion to model deployment and actionable insights.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Data Collection & Preparation:</span> Gather and clean data for modeling.</li>
                  <li><span className="font-semibold text-white">Model Development:</span> Build and train predictive models using advanced algorithms.</li>
                  <li><span className="font-semibold text-white">Deployment & Integration:</span> Seamlessly integrate predictions into your existing systems.</li>
                  <li><span className="font-semibold text-white">Monitoring & Refinement:</span> Continuously monitor model performance and retrain as needed.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics Lifecycle (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Database className="h-12 w-12 text-red-400 mb-2" />
                    <p className="text-sm text-gray-300">Data</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Brain className="h-12 w-12 text-orange-400 mb-2" />
                    <p className="text-sm text-gray-300">Model</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Settings className="h-12 w-12 text-yellow-400 mb-2" />
                    <p className="text-sm text-gray-300">Deploy</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <BarChart2 className="h-12 w-12 text-lime-400 mb-2" />
                    <p className="text-sm text-gray-300">Insights</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of the predictive analytics lifecycle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Predict Your Business Future?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our predictive analytics specialists to unlock the hidden potential within your data and drive strategic growth.
            </p>
            <a href="mailto:info@predictiveinsights.com" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
