import React, { useState } from 'react';
import {  Mail, Search, ChevronDown, ChevronUp } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';


// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-xl font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-indigo-400" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-300 pr-8 animate-fade-in-down">
          {answer}
        </p>
      )}
    </div>
  );
};

// Main App component for the FAQs page
const App = () => {
  const faqs = [
    {
      question: "What services does your enterprise offer?",
      answer: "Our enterprise offers a comprehensive suite of solutions including AI-powered analytics, cloud and on-premise deployment, advanced diagnostics, NLP & voice EMR, workflow automation, and specialized healthcare solutions for clinics, hospitals, and government agencies."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We adhere to the highest industry standards for data security and compliance, including HIPAA, GDPR, and FedRAMP. Our platforms feature end-to-end encryption, regular security audits, and robust access controls to protect your sensitive data."
    },
    {
      question: "Can your solutions integrate with our existing systems?",
      answer: "Yes, our solutions are designed for seamless integration. We provide comprehensive API documentation and offer custom integration services to ensure compatibility with your current infrastructure and third-party applications."
    },
    {
      question: "What kind of support do you offer after deployment?",
      answer: "We offer multi-tier support packages including 24/7 technical assistance, dedicated account managers, regular software updates, and training programs to ensure your team maximizes the value of our solutions."
    },
    {
      question: "Do you provide customized solutions for specific industry needs?",
      answer: "Absolutely. We understand that each industry and enterprise has unique requirements. Our team of experts works closely with clients to tailor our solutions, develop custom features, and configure workflows that align perfectly with your operational needs."
    },
    {
      question: "What is the typical deployment timeline for your solutions?",
      answer: "Deployment timelines vary depending on the complexity of the solution and your existing infrastructure. After an initial assessment, we provide a detailed project plan with estimated timelines. Our agile approach ensures efficient and timely implementation."
    }
  ];

  return (
    <HomeLayout>
      {/* Main container with dark mode styling */}
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Find answers to common questions about our enterprise solutions, services, and support.
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-6 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-10 left-20"></div>
            <div className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
            <div className="absolute w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-10 left-1/4"></div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs-list" className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">General Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions? Section */}
        <section id="contact" className="py-20 md:py-28 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Still Have Questions?</h2>
            <p className="text-lg text-gray-300 mb-10">
              If you couldn't find the answer you were looking for, our support team is here to help.
            </p>
            <a href="mailto:support@yourcompany.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default App;
