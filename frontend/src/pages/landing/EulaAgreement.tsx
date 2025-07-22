"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiFileText, FiDownload, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import HomeLayout from '../../layouts/HomeLayout';

export default function EULAgreement() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);

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

  const eulaSections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'license-grant', title: 'License Grant' },
    { id: 'restrictions', title: 'Restrictions' },
    { id: 'ownership', title: 'Ownership' },
    { id: 'support', title: 'Support' },
    { id: 'termination', title: 'Termination' },
    { id: 'warranty', title: 'Warranty' },
    { id: 'liability', title: 'Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to EULA' }
  ];

  const downloadEULA = () => {
    alert('Downloading PDF version of our EULA');
  };

  const handleAccept = () => {
    setAccepted(true);
    setShowAcceptModal(false);
    // In a real implementation, you would store this acceptance
    console.log('EULA accepted on:', new Date().toISOString());
  };

  return (
    <HomeLayout>
      <Head>
        <title>End User License Agreement | HealthRx AI</title>
        <meta name="description" content="Review the terms and conditions governing your use of HealthRx AI software and services." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-black-900 py-30 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <FiFileText className="h-10 w-10 text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
              End User License Agreement
            </h1>
            <p className="text-xl text-blue-200/90 max-w-3xl mx-auto">
              Last updated: {lastUpdated}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button 
                onClick={downloadEULA}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
              >
                <FiDownload /> Download PDF
              </button>
              {!accepted && (
                <button 
                  onClick={() => setShowAcceptModal(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/20"
                >
                  <FiCheck /> Accept Agreement
                </button>
              )}
              {accepted && (
                <div className="flex items-center gap-2 px-6 py-3 bg-green-900/50 text-green-300 rounded-lg border border-green-800/50">
                  <FiCheck /> Accepted on {new Date().toLocaleDateString()}
                </div>
              )}
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
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-300">
                    <FiFileText className="text-blue-300" /> Agreement Sections
                  </h2>
                  <nav className="space-y-2">
                    {eulaSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                          activeSection === section.id 
                            ? 'bg-blue-900/50 text-blue-300 font-medium border border-blue-700/50' 
                            : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="mt-6 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="font-medium mb-2 text-blue-300">Need Legal Help?</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Contact our legal department for questions about this agreement.
                  </p>
                  <a
                    href="mailto:legal@healthrxai.com"
                    className="text-blue-300 hover:text-blue-200 text-sm font-medium"
                  >
                    legal@healthrxai.com
                  </a>
                </div>
              </div>
            </div>

            {/* EULA Content */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                {/* Introduction */}
                <section id="introduction" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      This End User License Agreement ("EULA") is a legal agreement between you (either an individual or a single entity) and HealthRx AI, Inc. ("HealthRx AI") for the HealthRx AI software product(s) identified above which may include associated software components, media, printed materials, and "online" or electronic documentation ("Software Product").
                    </p>
                    <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <strong className="text-blue-300">By installing, copying, or otherwise using the Software Product, you agree to be bound by the terms of this EULA.</strong> If you do not agree to the terms of this EULA, do not install or use the Software Product.
                    </p>
                  </div>
                </section>

                {/* License Grant */}
                <section id="license-grant" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. License Grant</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      HealthRx AI grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Software Product solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                        <h3 className="font-semibold text-blue-300">Authorized Use</h3>
                        <ul className="mt-2 pl-5 list-disc text-gray-300 space-y-1">
                          <li>Installation on devices you own or control</li>
                          <li>Use for personal healthcare management</li>
                          <li>Access to standard features and updates</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                        <h3 className="font-semibold text-blue-300">License Scope</h3>
                        <ul className="mt-2 pl-5 list-disc text-gray-300 space-y-1">
                          <li>Single user per license</li>
                          <li>Non-commercial use only</li>
                          <li>Subject to all terms herein</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Restrictions */}
                <section id="restrictions" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Restrictions</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      You agree not to, and you will not permit others to:
                    </p>
                    <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                      <ul className="pl-5 list-disc text-gray-300 space-y-2">
                        <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Software Product</li>
                        <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Software Product</li>
                        <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of HealthRx AI</li>
                        <li>Use the Software Product for any unlawful purpose or in violation of any applicable laws</li>
                        <li>Use the Software Product to create competing products or services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Ownership */}
                <section id="ownership" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Ownership</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      HealthRx AI shall retain all rights, title and interest in and to the Software Product, including all copyrights, patents, trade secret rights, trademarks and other intellectual property rights therein.
                    </p>
                    <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <strong className="text-blue-300">Your license to use the Software Product does not constitute a sale of the Software Product or any copy thereof.</strong> The Software Product is licensed, not sold.
                    </p>
                  </div>
                </section>

                {/* Support */}
                <section id="support" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Support</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      HealthRx AI may, but is not obligated to, provide maintenance, support or updates for the Software Product ("Support"). Any such Support will be subject to this Agreement and HealthRx AI's then-current Support policies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <h3 className="font-semibold text-blue-300">Included Support</h3>
                        <ul className="mt-2 pl-5 list-disc text-gray-300 space-y-1">
                          <li>Critical security updates</li>
                          <li>Documentation access</li>
                          <li>Community support forums</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <h3 className="font-semibold text-blue-300">Premium Support</h3>
                        <ul className="mt-2 pl-5 list-disc text-gray-300 space-y-1">
                          <li>Available under separate agreement</li>
                          <li>Dedicated technical assistance</li>
                          <li>Priority bug fixes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Termination</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      This Agreement is effective until terminated. Your rights under this Agreement will terminate automatically without notice from HealthRx AI if you fail to comply with any term(s) of this Agreement.
                    </p>
                    <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                      <h3 className="font-semibold text-red-300">Upon Termination:</h3>
                      <ul className="mt-2 pl-5 list-disc text-gray-300 space-y-1">
                        <li>All rights granted to you under this Agreement will cease</li>
                        <li>You must cease all use of the Software Product</li>
                        <li>You must delete all copies of the Software Product in your possession</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Warranty */}
                <section id="warranty" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Warranty Disclaimer</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/50 flex items-start gap-4">
                      <FiAlertTriangle className="flex-shrink-0 h-6 w-6 text-yellow-300 mt-1" />
                      <div>
                        <p>
                          <strong className="text-yellow-300">THE SOFTWARE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.</strong> HEALTHRX AI DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                        </p>
                      </div>
                    </div>
                    <p>
                      HealthRx AI does not warrant that the functions contained in the Software Product will meet your requirements or that the operation of the Software Product will be uninterrupted or error-free.
                    </p>
                  </div>
                </section>

                {/* Liability */}
                <section id="liability" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Limitation of Liability</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                      <p>
                        <strong className="text-red-300">IN NO EVENT SHALL HEALTHRX AI BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER</strong> (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA OR OTHER INFORMATION, BUSINESS INTERRUPTION, PERSONAL INJURY, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE PRODUCT.
                      </p>
                    </div>
                    <p>
                      In no event shall HealthRx AI's total liability to you for all damages exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
                    </p>
                  </div>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">9. Governing Law</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any legal suit, action or proceeding arising out of or related to this Agreement or the Software Product shall be instituted exclusively in the federal or state courts located in San Francisco County, California. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                    </p>
                  </div>
                </section>

                {/* Changes */}
                <section id="changes" className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to This Agreement</h2>
                  <div className="prose max-w-none text-gray-300 space-y-4">
                    <p>
                      HealthRx AI reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    </p>
                    <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                      <strong className="text-blue-300">What constitutes a material change will be determined at our sole discretion.</strong> By continuing to access or use our Software Product after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Software Product.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acceptance Modal */}
      {showAcceptModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full p-6 border border-gray-700 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-900/30 border border-blue-700/50">
                <FiFileText className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white">Accept End User License Agreement</h3>
            </div>
            <p className="text-gray-300 mb-6">
              By clicking "I Accept", you acknowledge that you have read, understood, and agree to be bound by the terms of this agreement. You also confirm that you have the authority to enter into this agreement on behalf of yourself or your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                I Accept
              </button>
              <button
                onClick={() => setShowAcceptModal(false)}
                className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
}