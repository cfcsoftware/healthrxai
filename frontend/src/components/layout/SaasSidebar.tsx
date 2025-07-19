import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SIDEBAR_WIDTH = 240; 


const navLinks = [
  { to: '/saas/dashboard', label: 'Dashboard', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
    </svg>
  ) },
  { to: '/saas/all-users', label: 'Users', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zm6 13v-2a4 4 0 00-3-3.87M6 10a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ) },
  { 
    label: 'Management', // Subheading with dropdown
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { to: '/saas/all-domains', label: 'Domains', icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      ) },
      { to: '/saas/all-tenants', label: 'Tenants', icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
        </svg>
      ) },
      { to: '/saas/all-transactions', label: 'Transactions', icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
        </svg>
      ) },
      { to: '/saas/all-subscription', label: 'Subscriptions', icon: (
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
        </svg>
      ) },
    ]
  },
  // settings
  { to: '/saas/settings', label: 'Settings', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm7.94-2.06a1 1 0 0 0 .22-1.09l-1.43-2.49a1 1 0 0 0-.87-.5h-2.81a1 1 0 0 0-.87.5l-1.43 2.49a1 1 0 0 0 .22 1.09l2.24 1.94a1 1 0 0 0 1.28 0l2.24-1.94zM4.06 13.44a1 1 0 0 0 .22 1.09l2.24 1.94a1 1 0 0 0 1.28 0l2.24-1.94a1 1 0 0 0 .22-1.09l-1.43-2.49a1 1 0 0 0-.87-.5H5.36a1 1 0 0 0-.87.5l-1.43 2.49z" />
    </svg>
  ) },
  // notifications
  { to: '/saas/notifications', label: 'Notifications', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
    </svg>
  ) },
  // support
  { to: '/saas/enquiries', label: 'Support', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636A9 9 0 1 0 21 12m-9 9v-2m0-4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  ) },
  // logout
  { to: '/logout', label: 'Logout', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 1 1-4 0v-1m0-8V7a2 2 0 1 1 4 0v1" />
    </svg>
  ) },
];

const logoUrl = "/logo.png"; // Replace with your logo

const SaasSidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);

  // Helper to check if any dropdown link is active
  const isDropdownActive = (dropdown) =>
    dropdown && dropdown.some(({ to }) => location.pathname.startsWith(to));

  return (
    <aside
      className="h-full bg-white border-r border-gray-200 flex flex-col shadow-lg transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
      style={{
        width: SIDEBAR_WIDTH,
        minWidth: SIDEBAR_WIDTH,
        maxWidth: SIDEBAR_WIDTH,
        flexShrink: 0,
        flexGrow: 0,
        transition: 'width 0.3s cubic-bezier(.4,0,.2,1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      }}
    >
      {/* Logo section */}
      <div className="flex items-center justify-center h-25 mb-5 transition-all duration-700 animate-fade-in-down">
        <img
          src={logoUrl}
          alt="Logo"
          className="h-25 w-auto object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Sidebar content with scroll */}
      <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
        <nav>
          <ul className="space-y-1">
            {navLinks.map((item) => {
              // If item has dropdown, render dropdown
              if (item.dropdown) {
                const active = isDropdownActive(item.dropdown);
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={`
                        flex items-center w-full px-3 py-2 rounded-lg transition-all duration-300
                        text-sm font-semibold
                        ${active || openDropdown
                          ? "bg-blue-50 text-blue-700 shadow"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                        group focus:outline-none
                      `}
                      onClick={() => setOpenDropdown((v) => !v)}
                      aria-expanded={openDropdown}
                    >
                      <span className={`transition ${active || openDropdown ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${openDropdown ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <ul
                      className={`
                        pl-7 pr-2 mt-1 space-y-1
                        transition-all duration-400
                        ${openDropdown ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"}
                        overflow-hidden
                        origin-top
                        animate-dropdown
                      `}
                      style={{
                        transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                      }}
                    >
                      {item.dropdown.map(({ to, label, icon }) => {
                        const isActive = location.pathname.startsWith(to);
                        return (
                          <li key={to}>
                            <Link
                              to={to}
                              className={`
                                flex items-center px-2 py-2 rounded-md transition-all duration-300
                                text-sm font-medium
                                ${isActive
                                  ? "bg-blue-100 text-blue-700 shadow"
                                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"}
                                group
                              `}
                              onClick={() => setOpenDropdown(false)}
                            >
                              <span className={`transition ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                                {icon}
                              </span>
                              <span>{label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              // Otherwise, render normal link
              const isActive = item.to && location.pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`
                      flex items-center px-3 py-2 rounded-lg transition-all duration-300
                      text-sm font-medium
                      ${isActive
                        ? "bg-blue-100 text-blue-700 shadow"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                      group
                    `}
                  >
                    <span className={`transition ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Optional: Add a subtle border or shadow at the bottom */}
      <div className="h-4" />
      {/* Custom scrollbar styling and animations */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e5e7eb;
            border-radius: 4px;
          }
          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: #cbd5e1;
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fadeInDown 1.1s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes dropdownOpen {
            0% { opacity: 0; transform: scaleY(0.95);}
            100% { opacity: 1; transform: scaleY(1);}
          }
          .animate-dropdown {
            animation: dropdownOpen 0.35s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </aside>
  );
};

export default SaasSidebar;
