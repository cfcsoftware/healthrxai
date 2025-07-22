"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiPackage, FiRefreshCw, FiDollarSign, FiCheck, FiX, FiClock, FiMail, FiPhone } from 'react-icons/fi';
import HomeLayout from '../../layouts/HomeLayout';

export default function ReturnRefundPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));

    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
     sections.forEach((section) => {
  const el = section as HTMLElement;
  const sectionTop = el.offsetTop;
  if (window.scrollY >= sectionTop - 150) {
    currentSection = el.getAttribute("id") || "";
  }
});

      setActiveSection(currentSection);
      window.history.replaceState(null, '', `#${currentSection}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const policySections = [
    { id: 'overview', title: 'Overview' },
    { id: 'returns', title: 'Returns' },
    { id: 'refunds', title: 'Refunds' },
    { id: 'exchanges', title: 'Exchanges' },
    { id: 'conditions', title: 'Conditions' },
    { id: 'process', title: 'Process' },
    { id: 'contact', title: 'Contact' }
  ];

  const downloadPolicy = () => {
    alert('Downloading PDF version of our Return & Refund Policy');
  };

  return (
    <HomeLayout>
      <Head>
        <title>Return & Refund Policy | HealthRx AI</title>
        <meta name="description" content="Our Return & Refund Policy outlines the terms for returning products and requesting refunds." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-black-900 py-30 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <FiPackage className="h-10 w-10 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-200">
              Return & Refund Policy
            </h1>
            <p className="text-xl text-indigo-200/90 max-w-3xl mx-auto">
              Last updated: {lastUpdated}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowSummary(!showSummary)}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-md border border-white/10 hover:border-white/20"
              >
                {showSummary ? (
                  <>
                    <FiRefreshCw className="text-indigo-300" /> View Full Policy
                  </>
                ) : (
                  <>
                    <FiPackage className="text-indigo-300" /> Show Summary
                  </>
                )}
              </button>
              <button 
                onClick={downloadPolicy}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-indigo-500/20"
              >
                <FiDollarSign /> Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-300">
                    <FiRefreshCw className="text-indigo-300" /> Policy Sections
                  </h2>
                  <nav className="space-y-2">
                    {policySections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                          activeSection === section.id 
                            ? 'bg-indigo-900/50 text-indigo-300 font-medium border border-indigo-700/50' 
                            : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="mt-6 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="font-medium mb-2 text-indigo-300">Need Help?</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Contact our customer support for return or refund inquiries.
                  </p>
                  <a
                    href="mailto:support@healthrxai.com"
                    className="text-indigo-300 hover:text-indigo-200 text-sm font-medium flex items-center gap-2"
                  >
                    <FiMail /> support@healthrxai.com
                  </a>
                </div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                {/* Overview */}
                <section id="overview" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Overview</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      At HealthRx AI, we stand behind our products and want you to be completely satisfied with your purchase. This policy outlines the terms for returns, refunds, and exchanges.
                    </p>
                    {!showSummary && (
                      <>
                        <p className="mt-4">
                          We offer a 30-day return policy for most physical products, with some exceptions as noted below. Digital products and services may have different refund conditions.
                        </p>
                        <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <p className="font-medium text-indigo-300">Key Points:</p>
                          <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                            <li>30-day return window for most items</li>
                            <li>Full refunds for items in original condition</li>
                            <li>Free returns for defective or incorrect items</li>
                            <li>Digital products may have different terms</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </section>

                {/* Returns */}
                <section id="returns" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Returns</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>30-day return window for most physical products</li>
                        <li>Items must be unused and in original packaging</li>
                        <li>Customer pays return shipping unless our error</li>
                      </ul>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-800/50">
                            <h3 className="font-semibold text-indigo-300 flex items-center gap-2">
                              <FiClock /> Return Window
                            </h3>
                            <p className="mt-2 text-gray-300">
                              You have 30 days from the date of delivery to initiate a return for most physical products.
                            </p>
                          </div>
                          <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-800/50">
                            <h3 className="font-semibold text-indigo-300 flex items-center gap-2">
                              <FiPackage /> Condition Requirements
                            </h3>
                            <p className="mt-2 text-gray-300">
                              Items must be unused, in original packaging with all tags and accessories included.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Non-Returnable Items:</h3>
                          <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                            <li>Personalized or custom-made products</li>
                            <li>Digital downloads and software</li>
                            <li>Perishable goods</li>
                            <li>Products marked as "final sale"</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Refunds */}
                <section id="refunds" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Refunds</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>Refunds issued to original payment method</li>
                        <li>Processing takes 5-10 business days</li>
                        <li>Restocking fee may apply (up to 20%)</li>
                      </ul>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800/50">
                          <h3 className="font-semibold text-purple-300 flex items-center gap-2">
                            <FiDollarSign /> Refund Methods
                          </h3>
                          <p className="mt-2 text-gray-300">
                            Refunds will be issued to the original payment method. Processing may take 5-10 business days after we receive your return.
                          </p>
                        </div>
                        <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800/50">
                          <h3 className="font-semibold text-purple-300 flex items-center gap-2">
                            <FiCheck /> Full Refunds
                          </h3>
                          <p className="mt-2 text-gray-300">
                            Approved returns in original condition receive full refunds, excluding original shipping costs.
                          </p>
                        </div>
                        <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800/50">
                          <h3 className="font-semibold text-purple-300 flex items-center gap-2">
                            <FiX /> Partial Refunds
                          </h3>
                          <p className="mt-2 text-gray-300">
                            Items not in original condition may be subject to a restocking fee (up to 20% of item price).
                          </p>
                        </div>
                        <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800/50">
                          <h3 className="font-semibold text-purple-300 flex items-center gap-2">
                            <FiClock /> Processing Time
                          </h3>
                          <p className="mt-2 text-gray-300">
                            Refunds are processed within 7 business days after we receive and inspect your return.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Exchanges */}
                <section id="exchanges" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Exchanges</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>Free exchanges for defective/wrong items</li>
                        <li>Size/color exchanges within 14 days</li>
                        <li>Customer pays shipping for non-error exchanges</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Damaged or Defective Items</h3>
                          <p className="mt-2 text-gray-300">
                            We'll replace any item that arrives damaged or defective at no additional cost. Contact us within 7 days of delivery.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Wrong Item Received</h3>
                          <p className="mt-2 text-gray-300">
                            If you receive the wrong item, we'll arrange for return shipping and send the correct item immediately.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Size/Color Exchanges</h3>
                          <p className="mt-2 text-gray-300">
                            Available for eligible items if requested within 14 days of delivery. Customer pays return shipping.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Conditions */}
                <section id="conditions" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Conditions</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>Proof of purchase required</li>
                        <li>Customer pays return shipping</li>
                        <li>15% restocking fee for used items</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Proof of Purchase</h3>
                          <p className="mt-2 text-gray-300">
                            A receipt or proof of purchase is required for all returns/exchanges.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Shipping Costs</h3>
                          <p className="mt-2 text-gray-300">
                            Customers are responsible for return shipping costs unless the return is due to our error.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Restocking Fees</h3>
                          <p className="mt-2 text-gray-300">
                            Certain items may be subject to a 15% restocking fee if not returned in original condition.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Return Process</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ol className="list-decimal pl-5 space-y-1 text-gray-400">
                        <li>Contact us for return authorization</li>
                        <li>Package items securely</li>
                        <li>Ship with tracking</li>
                        <li>Wait for processing confirmation</li>
                      </ol>
                    ) : (
                      <>
                        <ol className="list-decimal pl-5 space-y-4">
                          <li className="pl-2">
                            <strong className="text-indigo-300">Contact Us:</strong> Email support@healthrxai.com with your order number and reason for return
                          </li>
                          <li className="pl-2">
                            <strong className="text-indigo-300">Wait for Approval:</strong> We'll respond within 2 business days with return instructions
                          </li>
                          <li className="pl-2">
                            <strong className="text-indigo-300">Package Items:</strong> Securely pack items in original packaging with all accessories
                          </li>
                          <li className="pl-2">
                            <strong className="text-indigo-300">Ship Returns:</strong> Mail to the address we provide with a tracking number
                          </li>
                          <li className="pl-2">
                            <strong className="text-indigo-300">Receive Confirmation:</strong> We'll email you when your return is processed
                          </li>
                        </ol>
                        <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-indigo-300">Important:</h3>
                          <p className="mt-2 text-gray-300">
                            We recommend using a trackable shipping service and purchasing shipping insurance. We cannot guarantee we'll receive your returned item.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      For questions about returns or refunds, please contact our customer service team:
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiMail className="flex-shrink-0 h-5 w-5 text-indigo-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-indigo-300">Email</h3>
                          <a href="mailto:support@healthrxai.com" className="text-gray-300 hover:text-white">
                            support@healthrxai.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiClock className="flex-shrink-0 h-5 w-5 text-indigo-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-indigo-300">Hours</h3>
                          <p className="text-gray-300">
                            Monday-Friday: 9AM-5PM EST<br />
                            Saturday-Sunday: Closed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiPhone className="flex-shrink-0 h-5 w-5 text-indigo-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-indigo-300">Phone</h3>
                          <a href="tel:+18005554321" className="text-gray-300 hover:text-white">
                            +1 (800) 555-RETURN
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}