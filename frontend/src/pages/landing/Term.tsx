"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiFileText, FiLock, FiUser,  FiAlertCircle, FiMail, FiClock, FiDollarSign } from 'react-icons/fi';
import HomeLayout from '../../layouts/HomeLayout';

export default function Terms() {
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
    { id: 'introduction', title: 'Introduction' },
    { id: 'accounts', title: 'User Accounts' },
    { id: 'content', title: 'Content' },
    { id: 'payments', title: 'Payments' },
    { id: 'liability', title: 'Liability' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes', title: 'Changes' },
    { id: 'contact', title: 'Contact' }
  ];

  const downloadTerms = () => {
    alert('Downloading PDF version of our Terms & Conditions');
  };

  return (
    <HomeLayout>
      <Head>
        <title>Terms & Conditions | YourAppName</title>
        <meta name="description" content="Our Terms and Conditions of Service" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        {/* Hero Section */}
        <div className="rrelative bg-gradient-to-r from-blue-900 to-black-900 py-30 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <FiFileText className="h-10 w-10 text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-200/90 max-w-3xl mx-auto">
              Last updated: {lastUpdated}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowSummary(!showSummary)}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-md border border-white/10 hover:border-white/20"
              >
                {showSummary ? (
                  <>
                    <FiFileText className="text-blue-300" /> View Full Terms
                  </>
                ) : (
                  <>
                    <FiFileText className="text-blue-300" /> Show Summary
                  </>
                )}
              </button>
              <button 
                onClick={downloadTerms}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
              >
                <FiFileText /> Download PDF
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
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-300">
                    <FiFileText className="text-blue-300" /> Terms Sections
                  </h2>
                  <nav className="space-y-2">
                    {policySections.map((section) => (
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
                  <h3 className="font-medium mb-2 text-blue-300">Need Help?</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Contact our legal team for questions about these terms.
                  </p>
                  <a
                    href="mailto:legal@yourapp.com"
                    className="text-blue-300 hover:text-blue-200 text-sm font-medium flex items-center gap-2"
                  >
                    <FiMail /> legal@yourapp.com
                  </a>
                </div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
                {/* Introduction */}
                <section id="introduction" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      Welcome to YourAppName. These Terms & Conditions govern your use of our website and services.
                    </p>
                    {!showSummary && (
                      <>
                        <p className="mt-4">
                          By accessing or using our services, you agree to be bound by these terms. If you disagree with any part, you may not access the service.
                        </p>
                        <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <p className="font-medium text-blue-300">Key Points:</p>
                          <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                            <li>You must be at least 18 years old to use our services</li>
                            <li>You are responsible for maintaining account security</li>
                            <li>We may modify these terms at any time</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </section>

                {/* User Accounts */}
                <section id="accounts" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. User Accounts</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>You must provide accurate registration information</li>
                        <li>You are responsible for account security</li>
                        <li>We may suspend accounts violating these terms</li>
                      </ul>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                            <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                              <FiUser /> Account Creation
                            </h3>
                            <p className="mt-2 text-gray-300">
                              When creating an account, you must provide accurate and complete information.
                            </p>
                          </div>
                          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                            <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                              <FiLock /> Account Security
                            </h3>
                            <p className="mt-2 text-gray-300">
                              You are responsible for maintaining the confidentiality of your account credentials.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Account Termination:</h3>
                          <p className="mt-2 text-gray-300">
                            We reserve the right to refuse service, terminate accounts, or remove content at our discretion.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Content */}
                <section id="content" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Content</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>You retain rights to your content</li>
                        <li>You grant us a license to use submitted content</li>
                        <li>Prohibited content includes illegal or harmful material</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Your Content</h3>
                          <p className="mt-2 text-gray-300">
                            You retain ownership of any intellectual property rights in content you submit, but grant us a worldwide license to use, reproduce, and display it.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Prohibited Content</h3>
                          <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                            <li>Illegal, harmful, or fraudulent content</li>
                            <li>Content that infringes intellectual property rights</li>
                            <li>Viruses or malicious code</li>
                            <li>Sexually explicit or violent material</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Payments */}
                <section id="payments" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Payments</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>Fees are non-refundable unless required by law</li>
                        <li>We may change prices with 30 days notice</li>
                        <li>You are responsible for applicable taxes</li>
                      </ul>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                            <FiDollarSign /> Fees
                          </h3>
                          <p className="mt-2 text-gray-300">
                            All fees are stated in your local currency and are non-refundable except as required by law.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                            <FiClock /> Price Changes
                          </h3>
                          <p className="mt-2 text-gray-300">
                            We may change our prices with 30 days notice. Price changes won't affect current subscriptions.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                            <FiFileText /> Taxes
                          </h3>
                          <p className="mt-2 text-gray-300">
                            You are responsible for all applicable taxes. We may collect tax where required.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300 flex items-center gap-2">
                            <FiAlertCircle /> Refunds
                          </h3>
                          <p className="mt-2 text-gray-300">
                            Except where required by law, all payments are final and non-refundable.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Liability */}
                <section id="liability" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Liability</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>We provide services "as is" without warranties</li>
                        <li>Our liability is limited to the maximum extent permitted by law</li>
                        <li>You indemnify us against claims from your use</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Disclaimer</h3>
                          <p className="mt-2 text-gray-300">
                            Our services are provided "as is" without warranties of any kind. We disclaim all warranties to the maximum extent permitted by law.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Limitation of Liability</h3>
                          <p className="mt-2 text-gray-300">
                            We shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Indemnification</h3>
                          <p className="mt-2 text-gray-300">
                            You agree to indemnify us against any claims resulting from your violation of these terms.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Termination</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>We may terminate your access at any time</li>
                        <li>You may stop using our services anytime</li>
                        <li>Certain provisions survive termination</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">By Us</h3>
                          <p className="mt-2 text-gray-300">
                            We may terminate or suspend your access immediately, without prior notice, for any reason including violation of these terms.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">By You</h3>
                          <p className="mt-2 text-gray-300">
                            You may stop using our services at any time. Simply discontinue use of the services.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Survival</h3>
                          <p className="mt-2 text-gray-300">
                            Provisions regarding intellectual property, disclaimers, indemnity, and limitations of liability survive termination.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Changes */}
                <section id="changes" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Changes</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showSummary ? (
                      <ul className="pl-5 list-disc text-gray-400 space-y-1">
                        <li>We may modify these terms at any time</li>
                        <li>We'll notify you of significant changes</li>
                        <li>Continued use constitutes acceptance</li>
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Modifications</h3>
                          <p className="mt-2 text-gray-300">
                            We reserve the right to modify these terms at any time. We'll provide notice of significant changes.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Acceptance</h3>
                          <p className="mt-2 text-gray-300">
                            Your continued use of our services after changes constitutes acceptance of the new terms.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Us</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      For questions about these Terms & Conditions, please contact us:
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiMail className="flex-shrink-0 h-5 w-5 text-blue-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-300">Email</h3>
                          <a href="mailto:legal@yourapp.com" className="text-gray-300 hover:text-white">
                            legal@yourapp.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiFileText className="flex-shrink-0 h-5 w-5 text-blue-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-300">Mailing Address</h3>
                          <p className="text-gray-300">
                            Legal Department<br />
                            YourAppName Inc.<br />
                            123 Business Rd, Suite 100<br />
                            San Francisco, CA 94107
                          </p>
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