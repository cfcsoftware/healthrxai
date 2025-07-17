import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-transparent text-white px-8 py-2 flex justify-between items-center shadow-sm fixed top-0 z-50 border-bottom transition-all duration-200 ease-in-out"
      style={{ minHeight: "70px" }}
    >
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-tight">
        <Link
          to="/home"
          className="hover:text-blue-300 transition-colors"
          aria-label="Home"
        >
          <img
            src="https://healthsrx.com/static/images/main_logo2.png"
            alt="HealthRxAI Logo"
            className="h-10 w-auto"
            style={{ display: "block" }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-3">
        <Link
          to="/Home"
          className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70"
        >
          Home
        </Link>

        {/* Features Dropdown */}
        <div className="relative group">
          <button className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70">
            Features
            {/* <svg
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg> */}
          </button>
          <div
            className="absolute left-0 top-full mt-2 min-w-[220px] bg-gray-950
 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200 z-40 animate-fade-in-down"
          >
            <Link
              to="/features/hms-modules"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              HMS Modules
            </Link>
            <Link
              to="/features/ai-capabilities"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              AI Capabilities
            </Link>
            <Link
              to="/features/blockchain-security"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Blockchain Security
            </Link>
            <Link
              to="/features/delivery-robot-system"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Delivery Robot System
            </Link>
          </div>
        </div>

        {/* Solutions Dropdown */}
        <div className="relative group">
          <button className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 relative font-inter z-10 hover:text-opacity-70">
            Solutions
          </button>
          <div
            className="absolute left-0 top-full mt-2 min-w-[220px] bg-gray-950
 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200 z-40 animate-fade-in-down"
          >
            <Link
              to="/solutions/hospitals"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Hospitals
            </Link>
            <Link
              to="/solutions/clinics"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Clinics
            </Link>
            <Link
              to="/solutions/labs-diagnostics"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Labs & Diagnostics
            </Link>
            <Link
              to="/solutions/pharmacy-management"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Pharmacy Management
            </Link>
            <Link
              to="/solutions/telehealth-centers"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Telehealth Centers
            </Link>
          </div>
        </div>

        {/* Pricing Dropdown */}
        <div className="relative group">
          <button className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70">
            Pricing
          </button>
          <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-gray-950 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200 z-40 animate-fade-in-down">
            <Link
              to="/pricing/monthly-yearly"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Monthly / Yearly Plans
            </Link>
            <Link
              to="/pricing/enterprise"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Enterprise Licensing
            </Link>
            <Link
              to="/pricing/custom-deployment"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Custom Deployment
            </Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="relative group">
          <button className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70">
            Resources
          </button>
          <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-gray-950 text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all duration-200 z-40 animate-fade-in-down">
            <Link
              to="/resources/blog"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Blog / Articles
            </Link>
            <Link
              to="/resources/case-studies"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Case Studies
            </Link>
            <Link
              to="/resources/documentation"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Product Documentation
            </Link>
            <Link
              to="/resources/whitepapers"
              className="block px-6 py-3 rounded-t-lg hover:opacity-60 transition-colors duration-150"
            >
              Whitepapers / Ebooks
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-3 items-center text-sm">
        <Link
          to="/demo"
          className="bg-white font-medium text-black px-4 py-2 rounded-lg shadow-md hover:opacity-50 transition-colors transition-all duration-200"
        >
          Book Demo →
        </Link>
        <Link
          to="/login"
          className="text-blue-50 bg-transparent text-sm font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70"
        >
          Log In
        </Link>
        <style>
          {`
            @keyframes pulseSoft {
              0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.2); }
              70% { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
              100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
            }
            .animate-pulse-soft {
              animation: pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}
        </style>
      </div>
    </nav>
  );
}
