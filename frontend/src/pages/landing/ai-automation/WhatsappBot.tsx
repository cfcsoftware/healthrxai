import React from 'react';
import { MessageCircle, Bot, Zap, ShieldCheck, Users, BarChart2, Settings, Mail,  LayoutGrid, MessageSquareText, PhoneCall } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the WhatsApp Bot page
const App = () => {
  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Automate Customer Engagement with <span className="text-green-400">WhatsApp Bots</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Transform your customer service, marketing, and sales on the world's most popular messaging platform with intelligent, scalable WhatsApp bots.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Request a Demo
              </a>
              <a href="#features" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore Features
              </a>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Key Features of Our WhatsApp Bot Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Bot className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Conversations</h3>
                <p className="text-gray-400">Intelligent chatbots understand user intent and provide human-like responses.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Instant & 24/7 Support</h3>
                <p className="text-gray-400">Provide immediate assistance to customers round the clock, enhancing satisfaction.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-400">Ensuring data privacy and adherence to WhatsApp Business API guidelines.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BarChart2 className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
                <p className="text-gray-400">Track bot performance, user engagement, and conversation trends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases/Solutions Section */}
        <section id="use-cases" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">WhatsApp Bot Use Cases for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Use Case Card 1 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <MessageCircle className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Customer Support</h3>
                <p className="text-gray-400">Handle FAQs, provide order updates, and resolve common queries instantly.</p>
              </div>
              {/* Use Case Card 2 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Marketing Campaigns</h3>
                <p className="text-gray-400">Send targeted promotions, product updates, and personalized recommendations.</p>
              </div>
              {/* Use Case Card 3 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <PhoneCall className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Sales & Lead Generation</h3>
                <p className="text-gray-400">Qualify leads, answer product questions, and guide users through the sales funnel.</p>
              </div>
              {/* Use Case Card 4 */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <LayoutGrid className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Notifications</h3>
                <p className="text-gray-400">Send transactional alerts, appointment reminders, and delivery updates.</p>
              </div>
              {/* Placeholder for more use cases */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 text-center">And many more custom solutions...</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works/Workflow Section (Simulated) */}
        <section id="workflow" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How Our WhatsApp Bot Works</h2>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <p className="text-lg text-gray-300 mb-6">
                  Our platform integrates seamlessly with the WhatsApp Business API, allowing you to build, deploy, and manage powerful conversational bots with ease.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                  <li><span className="font-semibold text-white">1. User Initiates:</span> Customer sends a message to your WhatsApp Business number.</li>
                  <li><span className="font-semibold text-white">2. Bot Processes:</span> Our AI bot analyzes the message and determines the intent.</li>
                  <li><span className="font-semibold text-white">3. Automated Response:</span> The bot provides an instant, relevant answer or performs an action.</li>
                  <li><span className="font-semibold text-white">4. Human Handoff (Optional):</span> For complex queries, the conversation can be seamlessly transferred to a human agent.</li>
                </ul>
              </div>
              {/* Simulated Workflow Diagram */}
              <div className="lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Conversational Flow (Conceptual)</h3>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-around p-4 relative overflow-hidden">
                  {/* Simulated steps */}
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-0">
                    <MessageSquareText className="h-12 w-12 text-green-400 mb-2" />
                    <p className="text-sm text-gray-300">User Message</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-1000">
                    <Bot className="h-12 w-12 text-blue-400 mb-2" />
                    <p className="text-sm text-gray-300">Bot Logic</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-1500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-2000">
                    <Settings className="h-12 w-12 text-purple-400 mb-2" />
                    <p className="text-sm text-gray-300">Integrations</p>
                  </div>
                  <div className="w-16 h-1 bg-gray-600 rounded-full animate-fade-in-up animation-delay-2500"></div>
                  <div className="flex flex-col items-center animate-fade-in-up animation-delay-3000">
                    <MessageCircle className="h-12 w-12 text-yellow-400 mb-2" />
                    <p className="text-sm text-gray-300">Bot Reply</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">A conceptual overview of the WhatsApp bot conversational flow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Engage Your Customers on WhatsApp?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Contact our WhatsApp bot specialists to build a powerful conversational solution tailored for your business needs.
            </p>
            <a href="mailto:info@whatsappbotpro.com" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
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
