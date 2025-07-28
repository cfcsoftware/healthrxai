import React from 'react';
import {  Lightbulb, Users, Handshake, Mail, Target, Eye, ShieldCheck } from 'lucide-react'; // Added ShieldCheck to the import
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the About page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Innovating for a <span className="text-blue-400">Brighter Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Learn about our journey, our mission to drive enterprise excellence, and the values that guide everything we do.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#mission-vision" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Our Story
              </a>
              <a href="#team" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Meet Our Team
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

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Target className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">Our Mission</h3>
                <p className="text-gray-400">
                  To empower enterprises globally with cutting-edge, secure, and scalable technology solutions that drive efficiency, foster innovation, and create sustainable growth. We are committed to delivering exceptional value and transforming complex challenges into strategic advantages for our clients.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Eye className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-3">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading global partner for enterprise digital transformation, recognized for our pioneering solutions, unwavering commitment to client success, and a culture of continuous innovation that shapes the future of business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="values" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Values That Drive Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Lightbulb className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-400">Continuously pushing boundaries to deliver groundbreaking solutions.</p>
              </div>
              {/* Value Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Handshake className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Client Success</h3>
                <p className="text-gray-400">Dedicated to achieving measurable and impactful results for our partners.</p>
              </div>
              {/* Value Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-red-400 mb-4" /> {/* Using ShieldCheck for Integrity */}
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-400">Operating with transparency, honesty, and ethical responsibility.</p>
              </div>
              {/* Value Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-gray-400">Fostering teamwork and open communication internally and with clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our History Section */}
        <section id="history" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Journey</h2>
            <div className="relative border-l-2 border-gray-700 pl-8 md:pl-16">
              {/* History Item 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-2">2010: Founding & Early Innovation</h3>
                <p className="text-gray-400">Established with a vision to revolutionize enterprise software, focusing on initial cloud solutions.</p>
              </div>
              {/* History Item 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-2">2015: Expansion & AI Integration</h3>
                <p className="text-gray-400">Expanded our global footprint and began integrating advanced AI and machine learning capabilities into our core offerings.</p>
              </div>
              {/* History Item 3 */}
              <div className="mb-12 relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-2">2020: Industry Leadership & Strategic Partnerships</h3>
                <p className="text-gray-400">Became a recognized leader in enterprise automation and analytics, forming key strategic partnerships.</p>
              </div>
              {/* History Item 4 */}
              <div className="relative">
                <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                <h3 className="text-xl font-semibold text-white mb-2">Today: Future-Forward & Client-Centric</h3>
                <p className="text-gray-400">Continuing to innovate and deliver transformative solutions, with a steadfast focus on our clients' evolving needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section (Placeholder) */}
        <section id="team" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Meet Our Leadership</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Our diverse team of experts, innovators, and thought leaders is dedicated to driving your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member Card 1 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <img src="https://placehold.co/150x150/4B5563/ffffff?text=CEO" alt="Team Member Name" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-white">Alex Johnson</h3>
                <p className="text-gray-400">Chief Executive Officer</p>
              </div>
              {/* Team Member Card 2 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <img src="https://placehold.co/150x150/4B5563/ffffff?text=CTO" alt="Team Member Name" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-white">Maria Rodriguez</h3>
                <p className="text-gray-400">Chief Technology Officer</p>
              </div>
              {/* Team Member Card 3 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <img src="https://placehold.co/150x150/4B5563/ffffff?text=COO" alt="Team Member Name" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-white">David Lee</h3>
                <p className="text-gray-400">Chief Operating Officer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join Our Journey Towards Innovation</h2>
            <p className="text-lg text-gray-300 mb-10">
              Whether you're a potential client, partner, or looking to join our team, we'd love to hear from you.
            </p>
            <a href="mailto:info@yourcompany.com" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
