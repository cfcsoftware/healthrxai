import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../../../hooks/useAuth"; 

export default function SaasAdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      await login({ email, password });
      toast.success("Login successful!");
      navigate("/saas/dashboard"); // ✅ Redirect after successful login
    } catch (error) {
      if (error && typeof error === "object" && "message" in error) {
        toast.error((error as { message?: string }).message || "Login failed");
      } else {
        toast.error("Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] overflow-hidden">
      {/* Decorative hospital SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute left-0 top-0 w-1/2 h-1/2 opacity-30"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="url(#hospitalGradient1)" />
          {/* Animated, bigger, bold, glowing white plus sign */}
          <g>
            <g className="animate-pulse" style={{ transformOrigin: "200px 200px" }}>
              {/* Glow effect */}
              <filter id="plusGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="16" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              {/* Vertical bar of plus */}
              <rect
                x="170"
                y="100"
                width="60"
                height="200"
                rx="18"
                fill="#fff"
                opacity="0.98"
                filter="url(#plusGlow)"
                style={{
                  stroke: "#fff",
                  strokeWidth: 8,
                  paintOrder: "stroke"
                }}
              >
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.8"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
              {/* Horizontal bar of plus */}
              <rect
                x="100"
                y="170"
                width="200"
                height="60"
                rx="18"
                fill="#fff"
                opacity="0.98"
                filter="url(#plusGlow)"
                style={{
                  stroke: "#fff",
                  strokeWidth: 8,
                  paintOrder: "stroke"
                }}
              >
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.8"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </g>
          <defs>
            <linearGradient id="hospitalGradient1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-0 bottom-0 w-1/3 h-1/3 opacity-30"
          viewBox="0 0 300 300"
          fill="none"
        >
          {/* Background gradient */}
          <rect x="0" y="0" width="300" height="300" rx="80" fill="url(#hospitalGradient2)" />
          {/* Doctor with stethoscope */}
          <g filter="url(#doctorGlow)">
            {/* Doctor's body */}
            <ellipse cx="150" cy="170" rx="38" ry="54" fill="#fff" opacity="0.98" />
            {/* Doctor's head */}
            <circle cx="150" cy="110" r="28" fill="#fff" opacity="1" />
            {/* Doctor's hair */}
            <ellipse cx="150" cy="102" rx="18" ry="10" fill="#e0e7ef" opacity="0.8" />
            {/* Doctor's face details (simple smile) */}
            <path d="M142 120 Q150 128 158 120" stroke="#b6c2d1" strokeWidth="2" fill="none" />
            {/* Doctor's left arm */}
            <path d="M120 170 Q100 200 130 210" stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Doctor's right arm */}
            <path d="M180 170 Q200 200 170 210" stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Stethoscope tubing */}
            <path
              d="M140 190 Q150 230 170 210"
              stroke="#fff"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              filter="url(#stethoscopeBrightGlow)"
            />
            {/* Stethoscope chestpiece */}
            <circle cx="170" cy="210" r="12" fill="#fff" opacity="1" filter="url(#stethoscopeBrightGlow)" />
            {/* Stethoscope earpieces */}
            <circle cx="140" cy="190" r="6" fill="#fff" opacity="1" filter="url(#stethoscopeBrightGlow)" />
            {/* Animated stethoscope highlight */}
            <circle cx="170" cy="210" r="18" fill="none" stroke="#fff" strokeWidth="3" opacity="0.5">
              <animate
                attributeName="r"
                values="18;28;18"
                dur="1.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0.15;0.5"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <defs>
            <linearGradient id="hospitalGradient2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            {/* Bright glow for doctor and stethoscope */}
            <filter id="doctorGlow" x="80" y="60" width="140" height="180" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="stethoscopeBrightGlow" x="120" y="190" width="80" height="60" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-lg bg-gradient-to-br from-white/10 via-blue-900/40 to-blue-800/60 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl border border-blue-900/40 animate-fade-in-down glassy-dark">
        {/* Hospital Icon and Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-700 rounded-full p-3 shadow-lg mb-3 animate-fade-in">
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="14" width="44" height="32" rx="6" fill="#fff" fillOpacity="0.15"/>
              <rect x="14" y="6" width="28" height="44" rx="6" fill="#fff" fillOpacity="0.25"/>
              <path d="M28 20v8m0 0v8m0-8h8m-8 0h-8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <img
            src="https://healthsrx.com/static/images/main_logo2.png"
            alt="HealthRx AI Logo"
            width={160}
            height={48}
            className="drop-shadow-2xl animate-fade-in"
            style={{ filter: "drop-shadow(0 4px 24px rgba(59,130,246,0.22))" }}
          />
        </div>

        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-blue-100 font-semibold mb-2 tracking-wide">
              Email Address <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-blue-700/30 px-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow shadow-md bg-white/10 text-blue-100 placeholder-blue-300/70 backdrop-blur-md font-medium"
                placeholder="admin@hospital.com"
                autoComplete="username"
                disabled={isLoading}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-100 font-semibold mb-2 tracking-wide">
              Password <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-blue-700/30 px-10 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-shadow shadow-md bg-white/10 text-blue-100 placeholder-blue-300/70 backdrop-blur-md font-medium"
                placeholder="••••••••"
                autoComplete="current-password"
                disabled={isLoading}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-200 focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
              >
                {showPassword ? (
                  // Eye open icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  // Eye closed icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path
                      d="M17.94 17.94A10.97 10.97 0 0112 19.5c-6.5 0-10.5-7.5-10.5-7.5a21.6 21.6 0 014.73-5.94M6.06 6.06A10.97 10.97 0 0112 4.5c6.5 0 10.5 7.5 10.5 7.5a21.6 21.6 0 01-4.73 5.94M1 1l22 22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-600 hover:to-blue-800 text-white py-3 rounded-xl font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl animate-pulse-soft backdrop-blur-md border border-blue-900/40 text-lg tracking-wide"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <div className="mt-8 text-center text-blue-300/80 text-xs animate-fade-in-slow">
          <span>
            &copy; {new Date().getFullYear()} HealthRx AI Hospital Management System. All rights reserved.
          </span>
        </div>
        <style>
          {`
            @keyframes fadeInDown {
              0% { opacity: 0; transform: translateY(-30px);}
              100% { opacity: 1; transform: translateY(0);}
            }
            @keyframes fadeIn {
              0% { opacity: 0;}
              100% { opacity: 1;}
            }
            .animate-fade-in-down {
              animation: fadeInDown 1.1s cubic-bezier(0.4,0,0.2,1) both;
            }
            .animate-fade-in {
              animation: fadeIn 1.5s 0.2s both;
            }
            .animate-fade-in-slow {
              animation: fadeIn 2.2s 0.6s both;
            }
            @keyframes pulseSoft {
              0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.18); }
              70% { box-shadow: 0 0 0 18px rgba(34,211,238,0); }
              100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
            }
            .animate-pulse-soft {
              animation: pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            .glassy-dark {
              box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.30);
              border: 2px solid rgba(34,211,238,0.13);
              background-clip: padding-box;
              backdrop-filter: blur(24px) saturate(160%);
              -webkit-backdrop-filter: blur(24px) saturate(160%);
            }
          `}
        </style>
      </div>
    </div>
  );
}
