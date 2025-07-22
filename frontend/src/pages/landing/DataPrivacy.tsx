"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FiShield, FiLock, FiDatabase, FiEye, FiEyeOff, FiDownload, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import HomeLayout from '../../layouts/HomeLayout';

export default function DataPrivacy() {
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
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'data-use', title: 'Data Use' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const downloadPolicy = () => {
    alert('Downloading PDF version of our Data Privacy Policy');
  };

  return (
    <HomeLayout>
      <Head>
        <title>Data Privacy & Collection Policy | YourAppName</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal data" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100">
        {/* Hero Section */}
        <div className="  relative bg-gradient-to-r from-blue-900  to-black-900 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
          <div className="absolute inset-0 bg-[#00CFFF] opacity-10" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-lg">
                <FiShield className="h-10 w-10 text-[#00CFFF]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
              Data Privacy & Collection
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Last updated: {lastUpdated}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowFullPolicy(!showFullPolicy)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 border border-gray-700 hover:border-[#00CFFF]/30 shadow-sm hover:shadow-[#00CFFF]/10"
              >
                {showFullPolicy ? (
                  <>
                    <FiEyeOff className="text-[#00CFFF]" /> Show Summary
                  </>
                ) : (
                  <>
                    <FiEye className="text-[#00CFFF]" /> View Full Policy
                  </>
                )}
              </button>
              <button 
                onClick={downloadPolicy}
                className="flex items-center gap-2 px-6 py-3 bg-[#00CFFF] hover:bg-[#00B0E0] text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-[#00CFFF]/20"
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
                <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#00CFFF]">
                    <FiLock className="text-[#00CFFF]" /> Policy Sections
                  </h2>
                  <nav className="space-y-2">
                    {policySections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${
                          activeSection === section.id 
                            ? 'bg-[#00CFFF]/20 text-[#00CFFF] font-medium border border-[#00CFFF]/50' 
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
                <div className="mt-6 p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
                  <h3 className="font-medium mb-2 text-[#00CFFF]">Need Help?</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Contact our Data Protection Officer for privacy-related inquiries.
                  </p>
                  <a
                    href="mailto:privacy@yourapp.com"
                    className="text-[#00CFFF] hover:text-[#00CFFF] text-sm font-medium flex items-center gap-2"
                  >
                    <FiMail /> privacy@yourapp.com
                  </a>
                </div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="flex-1">
              <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
                {/* Introduction */}
                <section id="introduction" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      YourAppName ("we," "our," or "us") is committed to protecting your privacy. This Data Privacy & Collection Policy explains how we collect, use, disclose, and safeguard your information.
                    </p>
                    {showFullPolicy && (
                      <>
                        <p className="mt-4 text-gray-400">
                          We comply with applicable data protection laws including GDPR and CCPA. This policy describes:
                        </p>
                        <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                          <li>The types of information we collect</li>
                          <li>How we use and share that information</li>
                          <li>Your rights regarding your personal data</li>
                          <li>Our security measures to protect your data</li>
                        </ul>
                      </>
                    )}
                  </div>
                </section>

                {/* Data Collection */}
                <section id="data-collection" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Data Collection</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      We collect several types of information from and about users:
                    </p>
                    {showFullPolicy ? (
                      <div className="mt-4 space-y-6">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF] flex items-center gap-2">
                            <FiUser /> Personal Information
                          </h3>
                          <p className="mt-2 text-gray-400">
                            Name, email, phone number, address, payment information, and other identifiers.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF] flex items-center gap-2">
                            <FiDatabase /> Usage Data
                          </h3>
                          <p className="mt-2 text-gray-400">
                            IP address, browser type, device information, pages visited, and usage patterns.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF] flex items-center gap-2">
                            <FiLock /> Sensitive Data
                          </h3>
                          <p className="mt-2 text-gray-400">
                            Only collected when necessary, with explicit consent, and with additional protections.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                        <li>Personal identification information</li>
                        <li>Usage and technical data</li>
                        <li>Sensitive data (with consent)</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Use */}
                <section id="data-use" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Data Use</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">We use collected data for purposes including:</p>
                    {showFullPolicy ? (
                      <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Service Provision</h3>
                          <p className="mt-2 text-gray-400">
                            To provide, maintain, and improve our services and features.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Personalization</h3>
                          <p className="mt-2 text-gray-400">
                            To personalize your experience and provide tailored content.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Communication</h3>
                          <p className="mt-2 text-gray-400">
                            To contact you with important notices and updates.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Security</h3>
                          <p className="mt-2 text-gray-400">
                            To detect, prevent, and address technical issues and fraud.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                        <li>Providing and improving our services</li>
                        <li>Personalizing your experience</li>
                        <li>Communicating with you</li>
                        <li>Ensuring security and compliance</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      We may share your information in these circumstances:
                    </p>
                    {showFullPolicy ? (
                      <div className="mt-4 space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Service Providers</h3>
                          <p className="mt-2 text-gray-400">
                            With trusted third parties who assist in operating our services, under strict confidentiality agreements.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Legal Compliance</h3>
                          <p className="mt-2 text-gray-400">
                            When required by law or to respond to legal process, including to law enforcement.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Business Transfers</h3>
                          <p className="mt-2 text-gray-400">
                            In connection with any merger, sale of company assets, or acquisition.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                        <li>With trusted service providers</li>
                        <li>When required by law</li>
                        <li>During business transfers</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Data Security */}
                <section id="data-security" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
                  <div className="prose prose-invert max-w-none">
                    {showFullPolicy ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <p className="text-gray-400">
                            We implement appropriate technical and organizational measures including:
                          </p>
                          <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                            <li>Encryption of sensitive data</li>
                            <li>Regular security audits</li>
                            <li>Access controls and authentication</li>
                            <li>Secure network architecture</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <p className="text-gray-400">
                            While we strive to protect your data, no internet transmission is 100% secure. We commit to promptly notify you of any data breaches as required by law.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-400">
                        We implement industry-standard security measures including encryption, access controls, and regular audits to protect your data.
                      </p>
                    )}
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">You have rights regarding your personal data:</p>
                    {showFullPolicy ? (
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Access & Portability</h3>
                          <p className="mt-2 text-gray-400">
                            Request access to or a copy of your personal data in a structured format.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Correction</h3>
                          <p className="mt-2 text-gray-400">
                            Request correction of inaccurate or incomplete personal data.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Deletion</h3>
                          <p className="mt-2 text-gray-400">
                            Request deletion of your personal data under certain circumstances.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Objection</h3>
                          <p className="mt-2 text-gray-400">
                            Object to processing of your personal data for direct marketing or other purposes.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-2 pl-5 list-disc text-gray-400 space-y-1">
                        <li>Access and portability of your data</li>
                        <li>Correction of inaccurate information</li>
                        <li>Deletion under certain circumstances</li>
                        <li>Objection to processing</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies & Tracking</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      We use cookies and similar tracking technologies:
                    </p>
                    {showFullPolicy && (
                      <div className="mt-4 space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Essential Cookies</h3>
                          <p className="mt-2 text-gray-400">
                            Necessary for the website to function and cannot be switched off.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Analytics Cookies</h3>
                          <p className="mt-2 text-gray-400">
                            Help us understand how visitors interact with our services.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <h3 className="font-semibold text-[#00CFFF]">Preference Cookies</h3>
                          <p className="mt-2 text-gray-400">
                            Remember your settings and preferences.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <p className="text-gray-400">
                            You can manage your cookie preferences through your browser settings or our cookie consent tool.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* Policy Changes */}
                <section id="changes" className="p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Policy Changes</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
                    </p>
                    {showFullPolicy && (
                      <p className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-400">
                        We will let you know via email and/or a prominent notice on our services prior to the change becoming effective and update the "last updated" date at the top of this policy.
                      </p>
                    )}
                  </div>
                </section>

                {/* Contact Us */}
                <section id="contact" className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">9. Contact Us</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300">
                      For questions about this Data Privacy & Collection Policy:
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <FiMail className="flex-shrink-0 h-5 w-5 text-[#00CFFF] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#00CFFF]">Email</h3>
                          <a href="mailto:privacy@yourapp.com" className="text-gray-400 hover:text-white">
                            privacy@yourapp.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <FiUser className="flex-shrink-0 h-5 w-5 text-[#00CFFF] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#00CFFF]">Data Protection Officer</h3>
                          <p className="text-gray-400">
                            YourAppName Inc.<br />
                            123 Privacy Lane, Suite 100<br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <FiPhone className="flex-shrink-0 h-5 w-5 text-[#00CFFF] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#00CFFF]">Phone</h3>
                          <a href="tel:+18005554321" className="text-gray-400 hover:text-white">
                            +1 (800) 555-PRIVACY
                          </a>
                        </div>
                      </div>
                    </div>
                    {showFullPolicy && (
                      <p className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-400">
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