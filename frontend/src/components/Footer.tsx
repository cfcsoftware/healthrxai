"use client";

import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-20 px-4 py-7 bg-gradient-to-br from-blue-950/80 via-black/80 to-purple-950/80">
      {/* Glassy background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Maintain the black side in the overlay */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400/10 via-black/30 to-white/10 blur-xl opacity-80" />
      </div>
      <div className="relative max-w-6xl mx-auto rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl bg-white/10 bg-clip-padding p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs md:text-sm">
          {/* Column 1: About Hospital */}
          <div>
            <h4 className="font-semibold text-blue-200/80 tracking-wide mb-3">ABOUT US</h4>
            <p className="text-white/80 mb-3 leading-relaxed">
              HealthRx AI Hospital is dedicated to providing world-class healthcare with compassion, innovation, and integrity. Our team of experts delivers advanced medical care and personalized treatment for every patient.
            </p>
            <a
              href="/about"
              className="inline-block text-blue-200/90 hover:text-white underline transition"
            >
              Learn more about us
            </a>
          </div>

          {/* Column 2: Patient & Visitor Links */}
          <div>
            <h4 className="font-semibold text-blue-200/80 tracking-wide mb-3">PATIENTS & VISITORS</h4>
            <ul className="space-y-2">
              <li>
                <a href="/appointments" className="transition text-white/90 hover:text-blue-300/90">Book an Appointment</a>
              </li>
              <li>
                <a href="/departments" className="transition text-white/90 hover:text-blue-300/90">Departments & Services</a>
              </li>
              <li>
                <a href="/doctors" className="transition text-white/90 hover:text-blue-300/90">Find a Doctor</a>
              </li>
              <li>
                <a href="/visiting-info" className="transition text-white/90 hover:text-blue-300/90">Visiting Information</a>
              </li>
              <li>
                <a href="/insurance" className="transition text-white/90 hover:text-blue-300/90">Insurance & Billing</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold text-blue-200/80 tracking-wide mb-3">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="transition text-white/90 hover:text-blue-300/90">Contact Us</a>
              </li>
              <li>
                <a href="/careers" className="transition text-white/90 hover:text-blue-300/90">Careers</a>
              </li>
              <li>
                <a href="/news" className="transition text-white/90 hover:text-blue-300/90">News & Events</a>
              </li>
              <li>
                <a href="/patient-portal" className="transition text-white/90 hover:text-blue-300/90">Patient Portal</a>
              </li>
              <li>
                <a href="/covid-19" className="transition text-white/90 hover:text-blue-300/90">COVID-19 Updates</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h4 className="font-semibold text-blue-200/80 tracking-wide mb-3">CONNECT</h4>
            <div className="flex space-x-3 text-lg mb-3">
              <a
                href="https://twitter.com/"
                aria-label="X"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition shadow-md backdrop-blur-md text-blue-200 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com/"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition shadow-md backdrop-blur-md text-blue-200 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition shadow-md backdrop-blur-md text-blue-200 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="text-white/80">
              <div className="mb-1">
                <a href="tel:+918286306019" className="hover:underline">+91 (8286) 306-019</a>
              </div>
              <div> 
                <a href="mailto:info@healthrxai.com" className="hover:underline">info@healthrxai.com</a>
              </div>
              <div className="mt-2 text-blue-100/70">
                HealthRx AI, Mumbai, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-white/10 mt-6 pt-3 text-xs text-blue-100/70 text-center">
          <p className="mb-1 tracking-wide">
            © 2025 <span className="font-semibold text-blue-200">HealthRx AI</span>. All rights reserved.
          </p>
          <p>
            <a
              href="/privacy"
              className="hover:underline text-blue-200/80 hover:text-white transition"
            >
              Privacy Policy
            </a>
            {" "}·{" "}
            <a
              href="/terms"
              className="hover:underline text-blue-200/80 hover:text-white transition"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
      {/* Subtle animated gradient for extra glassy effect */}
      <style>
        {`
          @keyframes glassyFooterGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .glassy-footer-animate {
            background-size: 200% 200%;
            animation: glassyFooterGradient 8s linear infinite alternate;
          }
        `}
      </style>
    </footer>
  );
}
