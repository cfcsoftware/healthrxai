import React from 'react';
import { PlayCircle, Calendar, Video, BookOpen, Users, Mail, TrendingUp,  Zap, Clock,  LayoutGrid } from 'lucide-react'; // Added LayoutGrid to the import
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the Webinars & Demos page
const App = () => {
  // Simulated upcoming webinars
  const upcomingWebinars = [
    {
      id: 1,
      title: "Mastering AI-Powered Analytics for Business Growth",
      date: "August 15, 2025",
      time: "10:00 AM PST",
      speaker: "Jane Doe, Lead Data Scientist",
      description: "Learn how to leverage AI to extract actionable insights and drive strategic decisions.",
      link: "#",
      imageUrl: "https://placehold.co/600x350/3B82F6/ffffff?text=AI+Analytics+Webinar"
    },
    {
      id: 2,
      title: "Secure Cloud Deployment Strategies for Enterprises",
      date: "September 5, 2025",
      time: "2:00 PM EST",
      speaker: "John Smith, Cloud Solutions Architect",
      description: "Discover best practices for secure and scalable cloud infrastructure deployment.",
      link: "#",
      imageUrl: "https://placehold.co/600x350/8B5CF6/ffffff?text=Cloud+Security+Webinar"
    },
  ];

  // Simulated on-demand demos/webinars
  const onDemandContent = [
    {
      id: 3,
      title: "Introduction to NLP & Voice EMR",
      category: "Healthcare Solutions",
      duration: "25 min",
      link: "#",
      icon: <BookOpen className="h-8 w-8 text-orange-400" />
    },
    {
      id: 4,
      title: "Automating Workflows with n8n Enterprise",
      category: "Workflow Automation",
      duration: "30 min",
      link: "#",
      icon: <Zap className="h-8 w-8 text-emerald-400" />
    },
    {
      id: 5,
      title: "Predictive Analytics in Retail: A Case Study",
      category: "Predictive Analytics",
      duration: "40 min",
      link: "#",
      icon: <TrendingUp className="h-8 w-8 text-red-400" />
    },
    {
      id: 6,
      title: "Multi-location Setup: Centralized Management",
      category: "Enterprise Management",
      duration: "20 min",
      link: "#",
      icon: <LayoutGrid className="h-8 w-8 text-teal-400" />
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
              Expert Insights & <span className="text-purple-400">Interactive Demos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join our live webinars or explore on-demand demos to dive deep into our enterprise solutions and see them in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#upcoming-webinars" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Register for Live Events
              </a>
              <a href="#on-demand-library" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Watch On-Demand
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

        {/* Upcoming Webinars Section */}
        <section id="upcoming-webinars" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Upcoming Live Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingWebinars.map(webinar => (
                <div key={webinar.id} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transform hover:scale-105 transition duration-300">
                  <img src={webinar.imageUrl} alt={webinar.title} className="w-full h-56 object-cover" onError={(e) => { const target = e.target as HTMLImageElement;
                   target.onerror = null; target.src="https://placehold.co/600x350/4B5563/ffffff?text=Image+Unavailable"; }} />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-3">{webinar.title}</h3>
                    <p className="text-gray-400 mb-2 flex items-center"><Calendar className="h-4 w-4 mr-2" /> {webinar.date} at {webinar.time}</p>
                    <p className="text-gray-400 mb-4 flex items-center"><Users className="h-4 w-4 mr-2" /> Speaker: {webinar.speaker}</p>
                    <p className="text-gray-300 mb-6">{webinar.description}</p>
                    <a href={webinar.link} className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                      <PlayCircle className="h-5 w-5 mr-2" /> Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* On-Demand Library Section */}
        <section id="on-demand-library" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">On-Demand Webinars & Demos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {onDemandContent.map(item => (
                <div key={item.id} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                  <p className="text-gray-500 text-xs mb-4 flex items-center"><Clock className="h-4 w-4 mr-1" /> {item.duration}</p>
                  <a href={item.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition duration-300">
                    <Video className="h-5 w-5 mr-2" /> Watch Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Custom Demo Section */}
        <section id="request-demo" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Need a Personalized Demo?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Schedule a one-on-one session with our experts to see how our solutions can specifically address your business challenges.
            </p>
            <a href="mailto:info@yourcompany.com" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Request a Custom Demo
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
