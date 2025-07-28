import React from 'react';
import { Code, BookOpen, Zap, ShieldCheck, FileText, Mail,  GitBranch, Key, Database,  Users } from 'lucide-react'; // Added Users to the import
import HomeLayout from '../../../layouts/HomeLayout';



// Main App component for the API Documentation page
const App = () => {
  // Simulated API categories/sections
  const apiSections = [
    {
      id: 1,
      name: "Authentication",
      description: "Learn how to authenticate your requests to our API.",
      icon: <Key className="h-12 w-12 text-blue-400 mb-4" />
    },
    {
      id: 2,
      name: "User Management",
      description: "APIs for creating, retrieving, updating, and deleting user data.",
      icon: <Users className="h-12 w-12 text-green-400 mb-4" /> // Using Users icon
    },
    {
      id: 3,
      name: "Data Access",
      description: "Access and manage your enterprise data through our secure endpoints.",
      icon: <Database className="h-12 w-12 text-purple-400 mb-4" />
    },
    {
      id: 4,
      name: "Integrations",
      description: "Connect and extend functionality with various third-party services.",
      icon: <GitBranch className="h-12 w-12 text-yellow-400 mb-4" />
    },
  ];

  // Simulated API endpoint example
  const apiExample = `
GET /api/v1/users/{userId}

Headers:
  Authorization: Bearer YOUR_ACCESS_TOKEN
  Content-Type: application/json

Response (200 OK):
{
  "id": "user123",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "role": "admin",
  "createdAt": "2023-01-01T10:00:00Z"
}
`;

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Empower Your Integrations with <span className="text-indigo-400">Comprehensive API Docs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Access detailed documentation, code examples, and guides to seamlessly integrate with our enterprise-grade APIs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#api-reference" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Explore API Reference
              </a>
              <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Get Support
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Our API Documentation Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <BookOpen className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Clear & Concise Guides</h3>
                <p className="text-gray-400">Step-by-step instructions and tutorials for quick integration.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Code className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Practical Code Examples</h3>
                <p className="text-gray-400">Ready-to-use code snippets in multiple programming languages.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Interactive API Explorer</h3>
                <p className="text-gray-400">Test API endpoints directly within the documentation environment.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                <ShieldCheck className="h-12 w-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security & Best Practices</h3>
                <p className="text-gray-400">Guidelines for secure API usage and data handling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Sections Overview */}
        <section id="api-reference" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Explore Our API Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiSections.map(section => (
                <div key={section.id} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
                  {section.icon}
                  <h3 className="text-xl font-semibold text-white mb-3">{section.name}</h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Example Section */}
        <section id="api-example" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Quick Example: Get User Data</h2>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 overflow-x-auto">
              <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                <code>{apiExample}</code>
              </pre>
              <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                <FileText className="h-5 w-5 inline-block mr-2" /> View Full API Reference
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">This is a simplified example. Full documentation available in the API Reference section.</p>
          </div>
        </section>

        {/* Call to Action / Support Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Need Assistance with API Integration?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Our dedicated support team is here to help you with any questions or challenges you encounter during integration.
            </p>
            <a href="mailto:api-support@yourcompany.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact API Support
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
