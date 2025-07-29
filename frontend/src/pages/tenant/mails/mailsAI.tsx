import React, { useState } from "react";

const sidebarLinks = [
  { label: "Inbox", icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v13H4z" /><path d="M4 17h16l-2 3H6l-2-3z" /></svg> },
  { label: "Sent", icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg> },
  { label: "Drafts", icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" /><rect x="3" y="6" width="18" height="12" rx="2" /></svg> },
  { label: "Spam", icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg> },
  { label: "Trash", icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" /><path d="M10 11v6" /><path d="M14 11v6" /></svg> },
];

const chatUsers = [
  { name: "Dr. Smith", online: true },
  { name: "Reception", online: false },
  { name: "Billing", online: true },
  { name: "Support", online: true },
];

const emails = [
  {
    from: "support@healthrx.ai",
    subject: "Welcome to HealthRx AI",
    snippet: "Thank you for joining HealthRx AI. We're excited to have you onboard.",
    time: "09:15 AM",
    unread: true,
  },
  {
    from: "billing@healthrx.ai",
    subject: "Your Invoice for June",
    snippet: "Please find attached your invoice for the month of June.",
    time: "Yesterday",
    unread: false,
  },
  {
    from: "noreply@updates.com",
    subject: "System Update",
    snippet: "We have updated our privacy policy. Please review the changes.",
    time: "2 days ago",
    unread: false,
  },
];

const COLLAPSED_WIDTH = 50; // px, about w-14
const EXPANDED_WIDTH = 500; // px, about w-64

const CHAT_BAR_HEIGHT_COLLAPSED = 500; // px, adjust as needed
const CHAT_BAR_HEIGHT_EXPANDED = 500; // px, adjust as needed

const MailsAI: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedLink, setSelectedLink] = useState("Inbox");
  const [chatBarOpen, setChatBarOpen] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 bg-white border-r border-gray-200 flex flex-col relative`}
        style={{
          width: sidebarCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
          minWidth: sidebarCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
          maxWidth: sidebarCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-3 py-4 border-b border-gray-100">
          {!sidebarCollapsed && (
            <span className="font-bold text-lg text-blue-700 tracking-tight">Mails (AI)</span>
          )}
          <button
            className="p-1 rounded hover:bg-gray-100 transition"
            onClick={() => setSidebarCollapsed((c) => !c)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                sidebarCollapsed ? "rotate-180" : ""
              }`}
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
        {/* Sidebar Links */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="mt-2 space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <button
                  className={`flex items-center w-full px-3 py-2 rounded transition text-sm ${
                    selectedLink === link.label
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  } ${sidebarCollapsed ? "justify-center" : ""}`}
                  onClick={() => setSelectedLink(link.label)}
                >
                  {link.icon}
                  {!sidebarCollapsed && <span>{link.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Chat Bar at Sidebar Footer */}
        <div
          className={`border-t border-gray-100 ${sidebarCollapsed ? "px-1" : "px-3"} py-2`}
          style={{
            minHeight: sidebarCollapsed ? 48 :210,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            {!sidebarCollapsed && (
              <span className="text-xs font-semibold text-gray-500">Chat</span>
            )}
            <button
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => setChatBarOpen((v) => !v)}
              aria-label="Open chat"
            >
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </button>
          </div>
          {chatBarOpen && (
            <div
              className={`bg-gray-50 rounded shadow-md p-2 absolute left-0 w-full ${
                sidebarCollapsed
                  ? "bottom-12"
                  : "bottom-14"
              }`}
              style={{
                minWidth: sidebarCollapsed ? 180 : 220,
                maxWidth: sidebarCollapsed ? 220 : 300,
                height: sidebarCollapsed ? CHAT_BAR_HEIGHT_COLLAPSED : CHAT_BAR_HEIGHT_EXPANDED,
                overflowY: "auto",
              }}
            >
              <ul>
                {chatUsers.map((user) => (
                  <li
                    key={user.name}
                    className="flex items-center py-1 cursor-pointer hover:bg-blue-50 rounded px-2"
                    onClick={() => {
                      setActiveChat(user.name);
                      setChatBarOpen(false);
                    }}
                  >
                    <span
                      className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></span>
                    <span className="text-sm text-gray-700">{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-800">{selectedLink}</span>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search mail"
              className="px-3 py-1.5 border rounded bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <img
              src="/logo-dark.png"
              alt="User"
              className="w-8 h-8 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </div>
        {/* Email List */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <ul className="divide-y">
            {emails.map((mail, idx) => (
              <li
                key={idx}
                className={`flex items-center px-8 py-4 cursor-pointer hover:bg-blue-50 transition ${
                  mail.unread ? "bg-white font-semibold" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">{mail.from}</span>
                    {mail.unread && (
                      <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="truncate text-gray-900">{mail.subject}</span>
                    <span className="text-gray-500 text-xs">- {mail.snippet}</span>
                  </div>
                </div>
                <div className="ml-4 text-xs text-gray-500">{mail.time}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Chat Window (if active) */}
        {activeChat && (
          <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-lg shadow-lg flex flex-col z-50">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-blue-50 rounded-t-lg">
              <span className="font-semibold text-blue-700">{activeChat}</span>
              <button
                className="text-gray-400 hover:text-gray-700"
                onClick={() => setActiveChat(null)}
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
              <div className="mb-2 text-gray-500">This is the beginning of your chat with {activeChat}.</div>
              {/* Example chat bubbles */}
              <div className="mb-2 flex">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg max-w-xs">Hello, how can I help you?</div>
              </div>
              <div className="mb-2 flex justify-end">
                <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg max-w-xs">I have a question about my bill.</div>
              </div>
            </div>
            <form className="flex items-center border-t px-2 py-2">
              <input
                type="text"
                className="flex-1 px-3 py-1.5 border rounded bg-gray-50 text-sm focus:outline-none"
                placeholder="Type a message..."
              />
              <button
                type="submit"
                className="ml-2 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default MailsAI;
