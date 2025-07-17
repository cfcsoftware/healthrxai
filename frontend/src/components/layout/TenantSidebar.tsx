import { Link, useLocation } from 'react-router-dom';

// You can control the sidebar width here:
const SIDEBAR_WIDTH = 240; // px, adjust as needed

const navLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" />
    </svg>
  ) },
  { to: '/patients', label: 'Patients', icon: (
    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zm6 13v-2a4 4 0 00-3-3.87M6 10a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ) },

];

const logoUrl = "/logo.png"; // Replace with your logo

const TenantSidebar = () => {
  const location = useLocation();

  return (
    <aside
      className="h-full bg-white border-r border-gray-200 flex flex-col shadow-lg"
      style={{
        width: SIDEBAR_WIDTH,
        minWidth: SIDEBAR_WIDTH,
        maxWidth: SIDEBAR_WIDTH,
        flexShrink: 0,
        flexGrow: 0,
        transition: 'width 0.2s',
      }}
    >
      {/* Logo section */}
      <div className="flex items-center justify-center h-25 mb-5">
        <img
          src={logoUrl}
          alt="Logo"
          className="h-25 w-auto object-contain"
        />
      </div>
      {/* Sidebar content with scroll */}
      <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
        <nav>
          <ul className="space-y-1">
            {navLinks.map(({ to, label, icon }) => {
              const isActive = location.pathname.startsWith(to);
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`
                      flex items-center px-3 py-2 rounded-lg transition
                      text-sm font-medium
                      ${isActive
                        ? "bg-blue-100 text-blue-700 shadow"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                      group
                    `}
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
        </nav>
      </div>
      {/* Optional: Add a subtle border or shadow at the bottom */}
      <div className="h-4" />
      {/* Custom scrollbar styling */}
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
        `}
      </style>
    </aside>
  );
};

export default TenantSidebar;
