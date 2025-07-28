import React from 'react';
import { Target, Eye, Lightbulb, Handshake, ShieldCheck, Users, Globe, Mail, Sparkles, TrendingUp, Compass } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Mission page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Our Purpose: <span className="text-emerald-400">Driving Enterprise Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Discover the core principles, unwavering commitment, and ambitious vision that define our journey and impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#mission-vision-details" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Our Mission
              </a>
              <a href="#values" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Our Guiding Values
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

        {/* Mission & Vision Details Section */}
        <section id="mission-vision-details" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Driving Force</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Target className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">Our Mission</h3>
                <p className="text-gray-400">
                  To empower enterprises worldwide with innovative, secure, and scalable technology solutions that optimize operations, foster sustainable growth, and enable them to thrive in an ever-evolving digital landscape. We are committed to delivering measurable value and transforming complex challenges into strategic opportunities for our clients.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Eye className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">Our Vision</h3>
                <p className="text-gray-400">
                  To be the global leader in enterprise digital transformation, recognized for our pioneering solutions, unwavering commitment to client success, and a culture of continuous innovation that sets new benchmarks for industry excellence and shapes a more connected and efficient future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section id="values" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Values That Guide Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Sparkles className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-400">We continuously seek new ideas and technologies to deliver groundbreaking solutions.</p>
              </div>
              {/* Value Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Handshake className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Client Partnership</h3>
                <p className="text-gray-400">We build strong, collaborative relationships focused on our clients' success.</p>
              </div>
              {/* Value Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-400">We operate with transparency, honesty, and unwavering ethical standards.</p>
              </div>
              {/* Value Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-400">We are committed to delivering the highest quality in every solution and service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section id="approach" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How We Achieve Our Mission</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our mission is realized through a strategic blend of technological expertise, client-centric methodologies, and a commitment to continuous improvement.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Advanced R&D:</span> Investing in research and development to stay at the forefront of technology.</li>
                  <li><span className="font-semibold text-white">Agile Methodologies:</span> Employing flexible and adaptive development processes for rapid delivery.</li>
                  <li><span className="font-semibold text-white">Global Talent:</span> Cultivating a diverse team of world-class experts and innovators.</li>
                  <li><span className="font-semibold text-white">Sustainable Practices:</span> Integrating environmental and social responsibility into our operations.</li>
                </ul>
              </div>
              {/* Conceptual Approach Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Our Approach (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <Lightbulb className="h-12 w-12 text-emerald-400 mb-2" />
                    <p className="text-sm text-gray-300">Innovate</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Compass className="h-12 w-12 text-green-400 mb-2" />
                    <p className="text-sm text-gray-300">Strategize</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <TrendingUp className="h-12 w-12 text-teal-400 mb-2" />
                    <p className="text-sm text-gray-300">Deliver</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <Globe className="h-12 w-12 text-lime-400 mb-2" />
                    <p className="text-sm text-gray-300">Impact</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of our mission-driven approach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Partner with Us to Build the Future</h2>
            <p className="text-lg text-gray-300 mb-10">
              Join us in our mission to drive digital transformation and achieve unparalleled success for your enterprise.
            </p>
            <a href="mailto:info@yourcompany.com" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
