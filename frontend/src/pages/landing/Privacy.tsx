"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiShield, FiLock, FiEye, FiEyeOff, FiDownload, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import HomeLayout from '../../layouts/HomeLayout';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showFullPolicy, setShowFullPolicy] = useState(false);
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
    { id: 'data-collection', title: 'Data We Collect' },
    { id: 'data-use', title: 'How We Use Your Data' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const downloadPolicy = () => {
    alert('Downloading PDF version of our Privacy Policy');
  };

  return (
    <HomeLayout>
      <Head>
        <title>Privacy Policy | HealthRx AI</title>
        <meta name="description" content="Read our comprehensive Privacy Policy to understand how we collect, use, and protect your data." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-black-900 py-30 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <FiShield className="h-10 w-10 text-blue-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-200/90 max-w-3xl mx-auto">
              Last updated: {lastUpdated}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowFullPolicy(!showFullPolicy)}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 backdrop-blur-md border border-white/10 hover:border-white/20"
              >
                {showFullPolicy ? (
                  <>
                    <FiEyeOff className="text-blue-300" /> Show Summary
                  </>
                ) : (
                  <>
                    <FiEye className="text-blue-300" /> View Full Policy
                  </>
                )}
              </button>
              <button 
                onClick={downloadPolicy}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
              >
                <FiDownload /> Download PDF
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
                    <FiLock className="text-blue-300" /> Policy Sections
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
                    Contact our Data Protection Officer for privacy-related inquiries.
                  </p>
                  <a
                    href="mailto:privacy@healthrxai.com"
                    className="text-blue-300 hover:text-blue-200 text-sm font-medium flex items-center gap-2"
                  >
                    <FiMail /> privacy@healthrxai.com
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
                      HealthRx AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                    </p>
                    {showFullPolicy && (
                      <>
                        <p className="mt-4">
                          We respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes:
                        </p>
                        <ul className="mt-2 pl-5 list-disc text-gray-400">
                          <li>The types of information we may collect from you</li>
                          <li>Our practices for collecting, using, and disclosing that information</li>
                          <li>The choices available to you regarding our use of your information</li>
                          <li>The security procedures we use to protect your information</li>
                        </ul>
                      </>
                    )}
                  </div>
                </section>

                {/* Data Collection */}
                <section id="data-collection" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Data We Collect</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      We collect several types of information from and about users of our services, including:
                    </p>
                    {showFullPolicy ? (
                      <div className="mt-4 space-y-6">
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Personal Information</h3>
                          <p className="mt-2 text-gray-300">
                            Information that can be used to identify you, such as name, email address, phone number, and demographic information.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Health Information</h3>
                          <p className="mt-2 text-gray-300">
                            Medical history, treatment information, and other health-related data necessary for providing our services.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <h3 className="font-semibold text-blue-300">Technical Data</h3>
                          <p className="mt-2 text-gray-300">
                            IP addresses, browser type, operating system, and other technical information collected automatically.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400">
                        <li>Personal identification information</li>
                        <li>Health and medical data</li>
                        <li>Technical and usage data</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Use */}
                <section id="data-use" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Data</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>We use the information we collect for various purposes, including:</p>
                    {showFullPolicy ? (
                      <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300">Service Delivery</h3>
                          <p className="mt-2 text-gray-300">
                            To provide, operate, and maintain our healthcare services and fulfill our contractual obligations to you.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300">Improvement</h3>
                          <p className="mt-2 text-gray-300">
                            To understand how our services are used and improve user experience, functionality, and quality.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300">Communication</h3>
                          <p className="mt-2 text-gray-300">
                            To contact you with important notices, updates, and information about your healthcare.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                          <h3 className="font-semibold text-blue-300">Security</h3>
                          <p className="mt-2 text-gray-300">
                            To detect, prevent, and address technical issues, fraud, or other malicious activity.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400">
                        <li>Providing and improving our services</li>
                        <li>Personalizing your experience</li>
                        <li>Communicating with you</li>
                        <li>Ensuring security and compliance</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      We may share your information in the following circumstances:
                    </p>
                    {showFullPolicy ? (
                      <div className="mt-4 space-y-4">
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">With healthcare providers:</strong> To coordinate your care and treatment with other medical professionals involved in your healthcare.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">For legal compliance:</strong> When required by law or to respond to legal process, including to law enforcement or government requests.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">Business transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                        </p>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400">
                        <li>With your healthcare providers</li>
                        <li>When required by law</li>
                        <li>During business transfers</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Security */}
                <section id="data-security" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
                  <div className="prose max-w-none text-gray-300">
                    {showFullPolicy ? (
                      <div className="space-y-4">
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          Our security measures include encryption, access controls, secure network architecture, and regular security audits. We comply with HIPAA and other relevant data protection regulations.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          While we strive to protect your personal information, no internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security but we commit to promptly notify you of any data breaches as required by law.
                        </p>
                      </div>
                    ) : (
                      <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        We implement industry-standard security measures including encryption, access controls, and regular audits to protect your data.
                      </p>
                    )}
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>You have certain rights regarding your personal information:</p>
                    {showFullPolicy ? (
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                          <h3 className="font-semibold text-green-300">Access & Portability</h3>
                          <p className="mt-2 text-gray-300">
                            Request access to or a copy of your personal data in a structured format.
                          </p>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                          <h3 className="font-semibold text-green-300">Correction</h3>
                          <p className="mt-2 text-gray-300">
                            Request correction of inaccurate or incomplete personal data.
                          </p>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                          <h3 className="font-semibold text-green-300">Deletion</h3>
                          <p className="mt-2 text-gray-300">
                            Request deletion of your personal data under certain circumstances.
                          </p>
                        </div>
                        <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                          <h3 className="font-semibold text-green-300">Restriction</h3>
                          <p className="mt-2 text-gray-300">
                            Request restriction of processing of your personal data.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400">
                        <li>Access and portability of your data</li>
                        <li>Correction of inaccurate information</li>
                        <li>Deletion under certain circumstances</li>
                        <li>Restriction of processing</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies & Tracking</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our services.
                    </p>
                    {showFullPolicy && (
                      <div className="mt-4 space-y-4">
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">Essential Cookies:</strong> Necessary for the website to function and cannot be switched off.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">Analytics Cookies:</strong> Help us understand how visitors interact with our services.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          <strong className="text-blue-300">Preference Cookies:</strong> Remember your settings and preferences.
                        </p>
                        <p className="p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                          You can manage your cookie preferences through your browser settings or our cookie consent tool.
                        </p>
                      </div>
                    )}
                  </div>
                </section>

                {/* Policy Changes */}
                <section id="changes" className="p-8 border-b border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Policy Changes</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                    </p>
                    {showFullPolicy && (
                      <p className="mt-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        We will let you know via email and/or a prominent notice on our services prior to the change becoming effective and update the "last updated" date at the top of this policy. You are advised to review this policy periodically for any changes.
                      </p>
                    )}
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">9. Contact Us</h2>
                  <div className="prose max-w-none text-gray-300">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiMail className="flex-shrink-0 h-5 w-5 text-blue-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-300">Email</h3>
                          <a href="mailto:privacy@healthrxai.com" className="text-gray-300 hover:text-white">
                            privacy@healthrxai.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiMapPin className="flex-shrink-0 h-5 w-5 text-blue-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-300">Mail</h3>
                          <p className="text-gray-300">
                            Data Protection Officer, HealthRx AI<br />
                            123 Healthcare Ave, Suite 100<br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        <FiPhone className="flex-shrink-0 h-5 w-5 text-blue-300 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-300">Phone</h3>
                          <a href="tel:+18005554321" className="text-gray-300 hover:text-white">
                            +1 (800) 555-HEALTH
                          </a>
                        </div>
                      </div>
                    </div>
                    {showFullPolicy && (
                      <p className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                        For EU residents, you have the right to lodge a complaint with your local data protection authority if you believe we have not complied with applicable data protection laws.
                      </p>
                    )}
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