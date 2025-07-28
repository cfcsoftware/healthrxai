import React from 'react';
import {  Briefcase,  Handshake, Award,  Sparkles, Globe,      } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Team page
const App = () => {
  // Simulated team member data
  const leadershipTeam = [
    {
      id: 1,
      name: "Dr. Alex Johnson",
      title: "Chief Executive Officer",
      bio: "Dr. Johnson leads our strategic vision, driving innovation and growth across all enterprise solutions. With over 20 years in tech leadership, he is passionate about leveraging AI for societal impact.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=CEO"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      title: "Chief Technology Officer",
      bio: "Maria is the architect behind our robust and scalable technology stack. Her expertise in cloud infrastructure and cybersecurity ensures our solutions are always cutting-edge and secure.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=CTO"
    },
    {
      id: 3,
      name: "David Lee",
      title: "Chief Operating Officer",
      bio: "David optimizes our operational efficiency and ensures seamless delivery of projects. His focus on client success and process excellence is key to our consistent performance.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=COO"
    },
    {
      id: 4,
      name: "Sarah Chen",
      title: "VP, Product Development",
      bio: "Sarah leads our product teams, translating market needs into innovative features. Her user-centric approach ensures our products solve real-world enterprise challenges.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=VP+Product"
    },
    {
      id: 5,
      name: "Michael Brown",
      title: "Head of Sales & Partnerships",
      bio: "Michael drives our market expansion and builds strong relationships with clients and partners. His strategic approach to sales ensures mutual growth and long-term success.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=Head+Sales"
    },
    {
      id: 6,
      name: "Emily White",
      title: "Director of AI Research",
      bio: "Emily spearheads our AI research initiatives, pushing the boundaries of what's possible with artificial intelligence and machine learning for enterprise applications.",
      imageUrl: "https://placehold.co/150x150/4B5563/ffffff?text=AI+Research"
    },
  ];

  const teamValues = [
    {
      icon: <Sparkles className="h-12 w-12 text-yellow-400 mb-4" />,
      title: "Innovation First",
      description: "We embrace curiosity and continuously explore new frontiers in technology."
    },
    {
      icon: <Handshake className="h-12 w-12 text-teal-400 mb-4" />,
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork, fostering open communication and mutual respect."
    },
    {
      icon: <Award className="h-12 w-12 text-purple-400 mb-4" />,
      title: "Excellence in Execution",
      description: "We are committed to delivering the highest quality in every solution and interaction."
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-400 mb-4" />,
      title: "Global Impact",
      description: "Our work aims to make a meaningful difference for enterprises and communities worldwide."
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
              Meet the Minds Behind <span className="text-pink-400">Our Innovations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Our team of dedicated experts, visionary leaders, and passionate innovators are united by a common goal: your success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#leadership" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Our Leadership
              </a>
              <a href="#team-values" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Our Culture
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

        {/* Leadership Team Section */}
        <section id="leadership" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Visionary Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {leadershipTeam.map(member => (
                <div key={member.id} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center transform hover:scale-105 transition duration-300">
                  <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-pink-500" onError={(e) => {const target = e.target as HTMLImageElement; target.src="https://placehold.co/150x150/4B5563/ffffff?text=Team"; }} />
                  <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-pink-400 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Values/Culture Section */}
        <section id="team-values" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Culture & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamValues.map((value, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 text-center transform hover:scale-105 transition duration-300">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments/Teams Section (Conceptual) */}
        <section id="departments" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Diverse Teams</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our organization is powered by specialized teams working collaboratively to deliver comprehensive enterprise solutions.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">Engineering & R&D:</span> Building the future of enterprise technology.</li>
                  <li><span className="font-semibold text-white">Product Management:</span> Defining and shaping our innovative product roadmap.</li>
                  <li><span className="font-semibold text-white">Sales & Marketing:</span> Connecting our solutions with global enterprises.</li>
                  <li><span className="font-semibold text-white">Client Success:</span> Ensuring our clients achieve maximum value and satisfaction.</li>
                  <li><span className="font-semibold text-white">Operations & Support:</span> Maintaining seamless service delivery and expert assistance.</li>
                </ul>
              </div>
              {/* Simulated Team Collaboration Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Team Collaboration (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simple interconnected circles */}
                  <div className="absolute w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse-slow">Core</div>
                  <div className="absolute w-16 h-16 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-xs top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow animation-delay-500">Eng</div>
                  <div className="absolute w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-bounce-slow animation-delay-1000">Prod</div>
                  <div className="absolute w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-bounce-slow animation-delay-1500">Sales</div>
                  <div className="absolute w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs bottom-1/2 left-1/4 transform -translate-x-1/2 translate-y-1/2 animate-bounce-slow animation-delay-2000">Client</div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual representation of our interconnected teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Careers Section */}
        <section id="careers" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Join Our Team?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Explore exciting career opportunities and become a part of a culture that values innovation, collaboration, and impact.
            </p>
            <a href="/careers" className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Briefcase className="h-5 w-5 mr-2" />
              View Open Positions
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
