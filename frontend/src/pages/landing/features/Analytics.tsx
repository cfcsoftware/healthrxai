import React from 'react';
import {  Database, TrendingUp, Filter, Settings, Cloud, Users,  ShieldCheck } from 'lucide-react'; // Added ShieldCheck
import HomeLayout from '../../../layouts/HomeLayout';

// Main App component for the Analytics page
const App = () => {
  return (
    <HomeLayout>
    <div className="min-h-screen bg-gray-900 pt-10 text-gray-100 font-inter antialiased">
      {/* Header Section */}
    
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Unlock the Power of Your <span className="text-purple-400">Data</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transform raw data into actionable insights with our comprehensive enterprise analytics platform, driving smarter decisions and growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Request a Demo
            </a>
            <a href="#insights" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Learn More
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <TrendingUp className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">Forecast future trends and outcomes with advanced machine learning models.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Filter className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Reporting</h3>
              <p className="text-gray-400">Access up-to-the-minute data and dynamic reports for immediate insights.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Settings className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Customizable Dashboards</h3>
              <p className="text-gray-400">Build personalized dashboards to visualize key metrics relevant to your business.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Secure Data Handling</h3>
              <p className="text-gray-400">Enterprise-grade security and compliance for all your sensitive data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section id="sources" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Connect Your Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Source Card 1 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Database className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Databases & Warehouses</h3>
              <p className="text-gray-400">Integrate with SQL, NoSQL, data warehouses, and data lakes.</p>
            </div>
            {/* Source Card 2 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Cloud className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Applications</h3>
              <p className="text-gray-400">Seamlessly pull data from CRM, ERP, marketing automation, and more.</p>
            </div>
            {/* Source Card 3 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Users className="h-12 w-12 text-lime-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">APIs & Custom Feeds</h3>
              <p className="text-gray-400">Connect to any data source with our flexible API integrations and custom connectors.</p>
            </div>
            {/* Placeholder for more sources */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-500 text-center">And many more integrations...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Dashboards Section (Simulated Data Visualization) */}
      <section id="insights" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Actionable Insights & Dashboards</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-lg text-gray-300 mb-6">
                Our intuitive dashboards provide a clear, comprehensive view of your business performance, enabling data-driven decision-making at every level.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-3">
                <li><span className="font-semibold text-white">Sales Performance:</span> Track revenue, pipeline, and conversion rates.</li>
                <li><span className="font-semibold text-white">Marketing ROI:</span> Measure campaign effectiveness and customer acquisition costs.</li>
                <li><span className="font-semibold text-white">Operational Efficiency:</span> Monitor key performance indicators for processes.</li>
                <li><span className="font-semibold text-white">Customer Behavior:</span> Understand user engagement and preferences.</li>
                <li><span className="font-semibold text-white">Financial Health:</span> Analyze profitability, expenses, and cash flow.</li>
              </ul>
            </div>
            {/* Simulated Dashboard Visualization */}
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Sample Dashboard View (Simulated)</h3>
              <div className="w-full h-64 bg-gray-700 rounded-lg flex flex-col p-4 relative overflow-hidden">
                {/* Simulated charts */}
                <div className="flex-1 flex justify-between items-end mb-4">
                  <div className="w-1/4 h-3/4 bg-purple-500 rounded-lg animate-pulse"></div>
                  <div className="w-1/4 h-2/3 bg-fuchsia-500 rounded-lg animate-pulse animation-delay-500"></div>
                  <div className="w-1/4 h-4/5 bg-pink-500 rounded-lg animate-pulse animation-delay-1000"></div>
                </div>
                <div className="w-full h-1/3 bg-gray-600 rounded-lg flex items-center justify-around text-gray-400 text-sm">
                  <span className="opacity-70">Metric A</span>
                  <span className="opacity-70">Metric B</span>
                  <span className="opacity-70">Metric C</span>
                  <span className="opacity-70">Metric D</span>
                </div>
                <div className="absolute top-2 left-4 text-gray-400 text-xs">Overview</div>
                <div className="absolute bottom-2 right-4 text-gray-400 text-xs">Data as of today</div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">This visualization shows a simulated overview of key business metrics.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
    
    </div>
    </HomeLayout>
  );
};

export default App;
