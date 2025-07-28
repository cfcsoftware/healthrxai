import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Briefcase, Users, HelpCircle, Globe, Send } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';


// Main App component for the Contact page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Connect With <span className="text-teal-400">Our Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              We're here to answer your questions, provide support, and help you find the right solutions for your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact-form" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Send Us a Message
              </a>
              <a href="#contact-info" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Find Our Location
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Get in Touch Directly</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Email Card */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
                <p className="text-gray-400 mb-4">For general inquiries or support.</p>
                <a href="mailto:info@yourcompany.com" className="text-teal-400 hover:text-teal-300 font-semibold">info@yourcompany.com</a>
              </div>
              {/* Phone Card */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Phone className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak directly with a representative.</p>
                <a href="tel:+1-800-123-4567" className="text-teal-400 hover:text-teal-300 font-semibold">+1 (800) 123-4567</a>
              </div>
              {/* Address Card */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Visit Our Office</h3>
                <p className="text-gray-400 mb-4">123 Enterprise Way, Suite 400, Innovation City, CA 90210</p>
                <a href="https://maps.google.com/?q=123+Enterprise+Way" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-semibold">Get Directions</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Send Us a Message</h2>
            <form className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Inquiry about..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" /> Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Departments/Inquiry Types Section */}
        <section id="inquiry-types" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Or Reach Out to a Specific Department</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sales Inquiry */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300 text-center">
                <Briefcase className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales Inquiries</h3>
                <p className="text-gray-400 mb-4">Interested in our solutions? Contact our sales team.</p>
                <a href="mailto:sales@yourcompany.com" className="text-teal-400 hover:text-teal-300 font-semibold">sales@yourcompany.com</a>
              </div>
              {/* Support Inquiry */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300 text-center">
                <HelpCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
                <p className="text-gray-400 mb-4">Need assistance with an existing product or service?</p>
                <a href="mailto:support@yourcompany.com" className="text-teal-400 hover:text-teal-300 font-semibold">support@yourcompany.com</a>
              </div>
              {/* Careers Inquiry */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300 text-center">
                <Users className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Careers & HR</h3>
                <p className="text-gray-400 mb-4">Explore job opportunities or HR-related questions.</p>
                <a href="mailto:careers@yourcompany.com" className="text-teal-400 hover:text-teal-300 font-semibold">careers@yourcompany.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Conceptual) */}
        <section className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Global Presence</h2>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Simple world map placeholder */}
              <Globe className="h-48 w-48 text-gray-700 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-400 rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-teal-400 rounded-full animate-ping-slow animation-delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full animate-ping-slow animation-delay-2000"></div>
              <p className="absolute bottom-4 text-gray-500 text-sm">Representing our offices and client locations worldwide.</p>
            </div>
          </div>
        </section>

        {/* Call to Action for Direct Communication */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Start a Conversation?</h2>
            <p className="text-lg text-gray-300 mb-10">
              We look forward to connecting with you and exploring how we can support your enterprise's success.
            </p>
            <a href="mailto:hello@yourcompany.com" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <MessageSquare className="h-5 w-5 mr-2" />
              Let's Talk
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
