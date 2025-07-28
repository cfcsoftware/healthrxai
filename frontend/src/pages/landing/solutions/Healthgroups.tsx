import React from 'react';
import { Users, Heart, MessageSquare, CalendarCheck, ShieldCheck,  Handshake, Mail,  BookOpen } from 'lucide-react'; // Added BookOpen to the import
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Health Groups page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Building Healthier <span className="text-pink-400">Communities Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Empowering health groups and organizations with a secure, engaging platform to foster well-being and collective support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Join Our Network
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Empowering Health Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <MessageSquare className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure Communication</h3>
                <p className="text-gray-400">Private and encrypted channels for member discussions and support.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <CalendarCheck className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Event & Meeting Management</h3>
                <p className="text-gray-400">Organize virtual and in-person events with integrated scheduling tools.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Privacy & Compliance</h3>
                <p className="text-gray-400">Ensuring sensitive health information is protected and compliant with regulations.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Member Directory & Profiles</h3>
                <p className="text-gray-400">Easy navigation to connect with other members and view profiles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Members Section */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Benefits for Your Health Group Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Handshake className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Peer Support Networks</h3>
                <p className="text-gray-400">Connect with individuals facing similar health journeys for mutual support.</p>
              </div>
              {/* Benefit Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BookOpen className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Educational Resources</h3>
                <p className="text-gray-400">Access curated articles, webinars, and expert insights on various health topics.</p>
              </div>
              {/* Benefit Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Heart className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Wellness Plans</h3>
                <p className="text-gray-400">Tools to track progress and receive tailored recommendations for well-being.</p>
              </div>
              {/* Placeholder for more benefits */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And more ways to thrive...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement & Impact Section (Simulated Data Visualization) */}
        <section id="impact" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Measuring Community Engagement & Impact</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our platform provides insights into member engagement, content consumption, and overall community health, helping groups to grow and adapt.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Active Members:</span> Track daily and monthly active users.</li>
                  <li><span className="font-semibold text-white">Content Engagement:</span> Monitor views, shares, and interactions with resources.</li>
                  <li><span className="font-semibold text-white">Event Participation:</span> Analyze attendance and feedback for group activities.</li>
                  <li><span className="font-semibold text-white">Sentiment Analysis:</span> Understand the overall mood and needs of the community.</li>
                </ul>
              </div>
              {/* Simulated Engagement Chart */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Simulated Community Engagement Metrics</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-end justify-around p-4 relative overflow-hidden">
                  {/* Simulated bars */}
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around p-4">
                    <div className="w-8 bg-pink-500 rounded-t-lg animate-pulse" style={{ height: '60%' }}></div>
                    <div className="w-8 bg-rose-500 rounded-t-lg animate-pulse animation-delay-500" style={{ height: '80%' }}></div>
                    <div className="w-8 bg-fuchsia-500 rounded-t-lg animate-pulse animation-delay-1000" style={{ height: '70%' }}></div>
                    <div className="w-8 bg-purple-500 rounded-t-lg animate-pulse animation-delay-1500" style={{ height: '90%' }}></div>
                  </div>
                  <div className="absolute top-2 left-4 text-gray-400 text-sm">Engagement Score</div>
                  <div className="absolute bottom-2 right-4 text-gray-400 text-sm">Month</div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Conceptual representation of community engagement over time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Grow Your Health Community?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Connect with our team to learn how our platform can help your health group thrive and make a greater impact.
            </p>
            <a href="mailto:info@healthgroupsolutions.com" className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our Specialists
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
