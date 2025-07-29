import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SIDEBAR_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 64;

const navLinks = [
  { 
    to: '/dashboard', 
    label: 'Dashboard', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
      </svg>
    ) 
  },

  { 
    label: 'Patients', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/patients', 
        label: 'Patients', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
      { 
        to: '/global-search', 
        label: 'Search', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
    ]
  },

  { 
    label: 'Billings', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/billing/general-bills', 
        label: 'General', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
      { 
        to: '/billing/final-bills', 
        label: 'Final', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
    ]
  },

  { 
    to: '/appointments', 
    label: 'Appointments', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
      </svg>
    ) 
  },

  { 
    to: '/ipd-data', 
    label: 'IPD Module', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
      </svg>
    ) 
  },

  { 
    to: '/beds/list', 
    label: 'Bed Module', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
      </svg>
    ) 
  },

  { 
    label: 'Pharmacy', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/pharmacy/general', 
        label: 'General', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
      { 
        to: '/pharmacy/final', 
        label: 'Final', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
    ]
  },

  { 
    label: 'Pathology', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/pathology/final', 
        label: 'Final', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
      { 
        to: '/pathology/tests/list', 
        label: 'Tests', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
    ]
  },

  { 
    label: 'Radiology', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/radiology/general', 
        label: 'General', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
      { 
        to: '/radiology/tests/list', 
        label: 'Tests', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
    ]
  },

  { 
    label: 'Marketing', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    dropdown: [
      { 
        to: '/marketing/leads', 
        label: 'Leads', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
          </svg>
        ) 
      },
      { 
        to: '/marketing/whatsapp', 
        label: 'Whatsapp Marketing', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
      { 
        to: '/marketing/meta', 
        label: 'Meta Suite', 
        icon: ( 
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
      { 
        to: '/marketing/google', 
        label: 'Google Marketing', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
      { 
        to: '/marketing/graphics', 
        label: 'Graphics', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
      { 
        to: '/marketing/integration', 
        label: 'Integration', 
        icon: (
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
          </svg>
        ) 
      },
    ]
  },

  { 
    to: '/mails', 
    label: 'Mails (AI)', 
    icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V13h6v8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
      </svg>
    ) 
  },


];

const logoUrl = "/logo-dark.png";

const TenantSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Helper to check if any dropdown link is active
  const isDropdownActive = (dropdown) =>
    dropdown && dropdown.some(({ to }) => location.pathname.startsWith(to));

  // Helper for sidebar width
  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <aside
      className="h-full bg-white border-r border-gray-200 flex flex-col shadow-lg transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
      style={{
        width: sidebarWidth,
        minWidth: sidebarWidth,
        maxWidth: sidebarWidth,
        flexShrink: 0,
        flexGrow: 0,
        transition: 'width 0.3s cubic-bezier(.4,0,.2,1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      }}
    >
      {/* Collapse/Expand Button and Logo together in a row */}
      <div className={`flex items-center justify-between px-2 pt-2 mb-5 transition-all duration-700 animate-fade-in-down`}>
        <div className={`flex items-center ${collapsed ? "justify-center" : ""}`}>
          <img
            src={logoUrl}
            alt="Logo"
            className={`object-contain drop-shadow-lg transition-transform duration-500 hover:scale-100 ${collapsed ? "h-10 w-10" : "h-20 w-50"}`}
          />
        </div>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-2 rounded hover:bg-gray-200 transition ml-2"
          onClick={() => setCollapsed((v) => !v)}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {/* Sidebar content with scroll */}
      <div className={`flex-1 overflow-y-auto ${collapsed ? "px-1" : "px-4"} py-2 custom-scrollbar`}>
        <nav>
          <ul className="space-y-1">
            {navLinks.map((item) => {
              // If item has dropdown, render dropdown
              if (item.dropdown) {
                const active = isDropdownActive(item.dropdown);
                const isOpen = openDropdown === item.label;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={`
                        flex items-center w-full ${collapsed ? "justify-center px-0" : "px-3"} py-2 rounded-lg transition-all duration-300
                        text-sm font-semibold
                        ${active || isOpen
                          ? "bg-blue-50 text-blue-700 shadow"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                        group focus:outline-none
                      `}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                    >
                      <span className={`transition ${active || isOpen ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                        {/* Remove right margin if collapsed */}
                        {item.icon && typeof item.icon === "object"
                          ? (
                            // Clone the icon and remove mr-3 if collapsed
                            <span className={collapsed ? "" : ""}>
                              {item.icon && (item.icon.type === "svg"
                                ? (
                                  <item.icon.type
                                    {...item.icon.props}
                                    className={`w-5 h-5 ${collapsed ? "" : "mr-3"}`}
                                  />
                                )
                                : item.icon
                              )}
                            </span>
                          )
                          : item.icon
                        }
                      </span>
                      {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
                      {!collapsed && (
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    {/* Dropdown */}
                    <ul
                      className={`
                        ${collapsed ? "pl-0" : "pl-7 pr-2"} mt-1 space-y-1
                        transition-all duration-400
                        ${isOpen && !collapsed ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"}
                        overflow-hidden
                        origin-top
                        animate-dropdown
                      `}
                      style={{
                        transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                      }}
                    >
                      {!collapsed && item.dropdown.map(({ to, label, icon }) => {
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
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className={`transition ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                                {icon && typeof icon === "object"
                                  ? (
                                    <span>
                                      {icon.type === "svg"
                                        ? (
                                          <icon.type
                                            {...icon.props}
                                            className={`w-5 h-5 mr-3`}
                                          />
                                        )
                                        : icon
                                      }
                                    </span>
                                  )
                                  : icon
                                }
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
                      flex items-center ${collapsed ? "justify-center px-0" : "px-3"} py-2 rounded-lg transition-all duration-300
                      text-sm font-medium
                      ${isActive
                        ? "bg-blue-100 text-blue-700 shadow"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                      group
                    `}
                  >
                    <span className={`transition ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}`}>
                      {item.icon && typeof item.icon === "object"
                        ? (
                          <span>
                            {item.icon.type === "svg"
                              ? (
                                <item.icon.type
                                  {...item.icon.props}
                                  className={`w-5 h-5 ${collapsed ? "" : "mr-3"}`}
                                />
                              )
                              : item.icon
                            }
                          </span>
                        )
                        : item.icon
                      }
                    </span>
                    {!collapsed && <span>{item.label}</span>}
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

export default TenantSidebar;
