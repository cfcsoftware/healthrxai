import React from 'react';
import {  Users,  TrendingUp, Award, HeartHandshake,  Globe, Mail, Search, Sparkles, ShieldCheck, Clock, DollarSign, ArrowRight, BookOpen } from 'lucide-react'; // Added BookOpen to the import
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Careers page
const App = () => {
  // Simulated job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      location: "San Francisco, CA",
      department: "Engineering",
      type: "Full-time",
      description: "Develop and deploy cutting-edge AI and machine learning models for enterprise solutions.",
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      location: "Remote",
      department: "Solutions",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure for our global clients.",
    },
    {
      id: 3,
      title: "Product Manager, Healthcare AI",
      location: "Boston, MA",
      department: "Product",
      type: "Full-time",
      description: "Lead the development of innovative AI-powered products for the healthcare industry.",
    },
    {
      id: 4,
      title: "Enterprise Sales Executive",
      location: "New York, NY",
      department: "Sales",
      type: "Full-time",
      description: "Drive revenue growth by building relationships with key enterprise clients.",
    },
  ];

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Shape the Future with <span className="text-purple-400">Our Innovative Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join a dynamic environment where your ideas drive impact, and your career growth is our priority.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#open-positions" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                View Open Positions
              </a>
              <a href="#benefits" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Why Work With Us?
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

        {/* Why Work With Us Section */}
        <section id="why-work-with-us" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Join Our Team?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Sparkles className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovative Culture</h3>
                <p className="text-gray-400">Work on cutting-edge technologies and solve complex real-world problems.</p>
              </div>
              {/* Reason Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <TrendingUp className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Career Growth</h3>
                <p className="text-gray-400">Access continuous learning opportunities and clear paths for advancement.</p>
              </div>
              {/* Reason Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <HeartHandshake className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative Environment</h3>
                <p className="text-gray-400">Thrive in a supportive and inclusive team that values diverse perspectives.</p>
              </div>
              {/* Reason Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-400">Contribute to solutions that make a difference on a global scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Current Openings</h2>
            <div className="mb-8 flex justify-center">
              <div className="relative w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Search positions by title, location, or department..."
                  className="w-full px-6 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
            </div>
            <div className="space-y-6">
              {jobOpenings.map(job => (
                <div key={job.id} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center transform hover:scale-[1.01] transition duration-300">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{job.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {job.department} | {job.location} | {job.type}
                    </p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                  <a href="#" className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center">
                    Apply Now <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </div>
              ))}
              {jobOpenings.length === 0 && (
                <p className="text-center text-gray-400 text-lg">No open positions at the moment. Please check back soon!</p>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Comprehensive Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <DollarSign className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Compensation</h3>
                <p className="text-gray-400">Attractive salaries and performance-based bonuses.</p>
              </div>
              {/* Benefit Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Health & Wellness</h3>
                <p className="text-gray-400">Comprehensive health, dental, and vision insurance plans.</p>
              </div>
              {/* Benefit Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BookOpen className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Learning & Development</h3>
                <p className="text-gray-400">Access to courses, certifications, and mentorship programs.</p>
              </div>
              {/* Benefit Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Clock className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Flexible Work Options</h3>
                <p className="text-gray-400">Support for work-life balance with flexible schedules and remote options.</p>
              </div>
              {/* Benefit Card 5 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Award className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Recognition Programs</h3>
                <p className="text-gray-400">Celebrating achievements and contributions through various awards.</p>
              </div>
              {/* Benefit Card 6 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Inclusive Community</h3>
                <p className="text-gray-400">A diverse and welcoming environment where everyone belongs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Make Your Mark?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Explore our openings and apply today to become a part of a team that's building the future.
            </p>
            <a href="mailto:careers@yourcompany.com" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Our HR Team
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
