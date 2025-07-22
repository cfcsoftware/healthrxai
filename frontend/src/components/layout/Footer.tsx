"use client";

import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Update year in case component is mounted around new year
    setCurrentYear(new Date().getFullYear());
  }, []);

  const columns: FooterColumn[] = [
    {
      title: "ABOUT US",
      links: [
        { label: "Our Mission", href: "/about/mission" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Quality & Safety", href: "/about/quality" },
        { label: "Awards & Recognition", href: "/about/awards" },
        { label: "Virtual Tour", href: "/about/tour" },
      ],
    },
    {
      title: "PATIENT CARE",
      links: [
        { label: "Find a Doctor", href: "/doctors" },
        { label: "Medical Specialties", href: "/specialties" },
        { label: "Patient Portal", href: "/portal" },
        { label: "Billing & Insurance", href: "/billing" },
        { label: "Patient Education", href: "/education" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "News & Blog", href: "/news" },
        { label: "Events", href: "/events" },
        { label: "Clinical Trials", href: "/trials" },
        { label: "Health Library", href: "/library" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "CONNECT",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Donate", href: "/donate" },
        { label: "Feedback", href: "/feedback" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, href: "https://twitter.com/healthrxai", label: "Twitter" },
    { icon: <FaFacebookF />, href: "https://facebook.com/healthrxai", label: "Facebook" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/healthrxai", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/healthrxai", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com/healthrxai", label: "YouTube" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950/90 via-black to-purple-950/90 border-t border-white/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`}
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
            backgroundSize: '200% 200%',
            animation: 'glassyFooterGradient 8s ease infinite',
          }}
        />
      </div>

      <div 
        className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Logo and description column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
             
              <span className="flex items-center">
               <img src="/logo.png" alt="HealthRxAI Logo" className="h-15 w-40 mr-2" />
               <span className="ml-1 text-2xl font-bold text-white">
               </span>
              </span>
            </div>
            <p className="text-sm leading-6 text-white/80">
              Pioneering the future of healthcare through AI-driven solutions, compassionate care, and medical excellence. 
              Our institution combines cutting-edge technology with human expertise to deliver exceptional patient outcomes.
            </p>
            
            {/* Newsletter subscription */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">Subscribe to our newsletter</h3>
              <form className="mt-2 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Dynamic link columns */}
          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold leading-6 text-blue-200 tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-white/80 hover:text-blue-300 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm leading-6 text-white/80 hover:text-blue-300 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/70 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="sr-only">{social.label}</span>
                  <span className="h-6 w-6">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/80">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18005551234" className="hover:text-blue-300 transition-colors duration-200">+1 (800) 555-1234</a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@healthrxai.com" className="hover:text-blue-300 transition-colors duration-200">info@healthrxai.com</a>
              </div>
            </div>
          </div>

          {/* Copyright and legal links */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              &copy; {currentYear} HealthRx AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/privacy" className="hover:text-blue-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-300 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-blue-300 transition-colors duration-200">
                Accessibility
              </Link>
              <Link to="/sitemap" className="hover:text-blue-300 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Accreditation badge */}
        
        </div>
      </div>

      {/* Animation styles */}
    <style
  dangerouslySetInnerHTML={{
    __html: `
      @keyframes glassyFooterGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `,
  }}
/>

    </footer>
  );
}