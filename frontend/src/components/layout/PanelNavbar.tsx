import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const userImage =
  "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740";

const NAVBAR_HEIGHT = "50px";

const AVATAR_SIZE = 30; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      className="bg-transparent shadow-none px-6 flex justify-end items-center relative"
      style={{
        height: NAVBAR_HEIGHT,
        minHeight: NAVBAR_HEIGHT,
        maxHeight: NAVBAR_HEIGHT,
      }}
    >
      <div className="flex items-center h-full ml-auto">
        <div className="relative flex items-center h-full">
          <button
            ref={buttonRef}
            className="focus:outline-none flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="User menu"
            style={{ height: NAVBAR_HEIGHT, width: NAVBAR_HEIGHT }}
          >
            <img
              src={userImage}
              alt="User avatar"
              style={{
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
              className="rounded-full border-2 border-gray-200 cursor-pointer transition-shadow hover:shadow-lg"
            />
          </button>
          {/* Dropdown below avatar with effect */}
          <div
            ref={dropdownRef}
            className={`absolute right-0 left-auto top-full mt-2 w-44 z-50 transition-all duration-200 ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            style={{
              // Ensures dropdown is directly below the avatar
              minWidth: "11rem",
            }}
          >
            <div className="bg-white rounded-lg shadow-2xl ring-1 ring-black/5 animate-dropdown-fade">
              <ul className="py-2">
                <li>
                  <a
                    href="/saas/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Profile
                  </a>
                </li>
                <li>

                <button
                  className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    logout(); 
                    navigate('/');
                  }}
                >
                  Logout
                </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Custom dropdown animation */}
          <style>
            {`
              @keyframes dropdown-fade {
                0% {
                  opacity: 0;
                  transform: translateY(-10px) scale(0.98);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
              .animate-dropdown-fade {
                animation: dropdown-fade 0.18s cubic-bezier(0.4,0,0.2,1);
              }
            `}
          </style>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;