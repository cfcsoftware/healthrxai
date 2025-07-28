import React from 'react';
import { ShieldCheck, GitFork, Lock, TrendingUp, Briefcase, DollarSign, HeartPulse, Code, Rocket, } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

const Blockchain = () => {
  return (
    <HomeLayout>
  
    <div className="min-h-screen bg-gray-900 pt-10 text-gray-100 font-inter antialiased">
      {/* Header Section */}
     

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            Secure Your Enterprise with <span className="text-indigo-400">Blockchain Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Leverage the power of distributed ledger technology for unparalleled security, transparency, and efficiency across your business operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="#solutions" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Learn More
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Blockchain Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <ShieldCheck className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-400">Immutable ledger and cryptographic security protect your data from tampering and fraud.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Lock className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Transparency & Trust</h3>
              <p className="text-gray-400">Shared, verifiable records foster trust among all participants in the network.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <GitFork className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Decentralization</h3>
              <p className="text-gray-400">No single point of failure, ensuring robust and resilient system operations.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Operational Efficiency</h3>
              <p className="text-gray-400">Streamline processes, reduce intermediaries, and automate with smart contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions/Use Cases Section */}
      <section id="solutions" className="py-20 md:py-28 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Enterprise Blockchain Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Card 1 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Briefcase className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Supply Chain Management</h3>
              <p className="text-gray-400">Track goods from origin to consumer with immutable records, enhancing transparency and reducing fraud.</p>
            </div>
            {/* Solution Card 2 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <DollarSign className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
              <p className="text-gray-400">Enable faster, more secure cross-border payments, trade finance, and digital asset management.</p>
            </div>
            {/* Solution Card 3 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <HeartPulse className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare & Pharma</h3>
              <p className="text-gray-400">Secure patient records, track drug provenance, and manage clinical trials with integrity.</p>
            </div>
            {/* Solution Card 4 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Code className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Digital Identity</h3>
              <p className="text-gray-400">Provide self-sovereign identities for users and devices, enhancing privacy and security.</p>
            </div>
            {/* Solution Card 5 */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
              <Rocket className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Custom Enterprise Solutions</h3>
              <p className="text-gray-400">Tailored blockchain development to meet your unique business challenges and opportunities.</p>
            </div>
            {/* Placeholder for more solutions */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
              <p className="text-gray-500 text-center">And many more...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology/Architecture Section (Simulated Data Visualization) */}
      <section id="technology" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Blockchain Architecture</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <p className="text-lg text-gray-300 mb-6">
                Our platform is built on a robust, scalable, and secure distributed ledger technology, designed to handle enterprise-level workloads. We leverage a modular architecture, enabling seamless integration with existing systems.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-3">
                <li><span className="font-semibold text-white">Consensus Mechanisms:</span> Proof-of-Authority, Raft, or PBFT for high throughput.</li>
                <li><span className="font-semibold text-white">Smart Contracts:</span> Automate agreements and business logic securely.</li>
                <li><span className="font-semibold text-white">Privacy & Confidentiality:</span> Private channels and zero-knowledge proofs for sensitive data.</li>
                <li><span className="font-semibold text-white">Interoperability:</span> Connect with other blockchain networks and traditional systems.</li>
                <li><span className="font-semibold text-white">Scalability:</span> Designed for millions of transactions per second.</li>
              </ul>
            </div>
            {/* Simulated Data Visualization */}
            <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Network Activity Overview (Simulated)</h3>
              <div className="w-full h-64 bg-gray-700 rounded-lg flex items-end justify-around p-4 relative overflow-hidden">
                {/* Simulated bars */}
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around p-4">
                  <div className="w-8 bg-indigo-500 rounded-t-lg animate-pulse" style={{ height: '70%' }}></div>
                  <div className="w-8 bg-purple-500 rounded-t-lg animate-pulse animation-delay-500" style={{ height: '50%' }}></div>
                  <div className="w-8 bg-pink-500 rounded-t-lg animate-pulse animation-delay-1000" style={{ height: '80%' }}></div>
                  <div className="w-8 bg-teal-500 rounded-t-lg animate-pulse animation-delay-1500" style={{ height: '60%' }}></div>
                  <div className="w-8 bg-orange-500 rounded-t-lg animate-pulse animation-delay-2000" style={{ height: '90%' }}></div>
                  <div className="w-8 bg-cyan-500 rounded-t-lg animate-pulse animation-delay-2500" style={{ height: '40%' }}></div>
                  <div className="w-8 bg-green-500 rounded-t-lg animate-pulse animation-delay-3000" style={{ height: '75%' }}></div>
                </div>
                <div className="absolute top-2 left-4 text-gray-400 text-sm">Transactions per minute</div>
                <div className="absolute bottom-2 right-4 text-gray-400 text-sm">Time</div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">This graph represents simulated network activity and transaction volume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
    
      {/* Footer */}
    
    </div>
    </HomeLayout>
  );
};

export default Blockchain;
