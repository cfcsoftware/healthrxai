import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Left Side - Welcome Section with Video and Overlay */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/heartbea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Glassy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80 backdrop-blur-[6px]"></div>
        {/* Animated Text Content */}
        <div className="relative z-10 flex flex-col items-center text-white text-center px-10 py-20 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-2xl animate-fade-in">
            Welcome to <span className="text-blue-300">HealthRxAI</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-2 opacity-90 animate-fade-in-slow">
            Elevating Healthcare, Empowering You
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full mt-6 mx-auto animate-pulse"></div>
        </div>
        {/* Animations */}
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
          `}
        </style>
      </div>

      {/* Right Side - Glassy Login Form */}
      <div className="flex items-center justify-center bg-transparent p-6">
        <div className="w-full max-w-md bg-gradient-to-br from-white/10 via-blue-900/30 to-blue-800/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-blue-900/30 animate-fade-in-down glassy-dark">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="HealthRx AI Logo"
              width={150}
              height={44}
              className="drop-shadow-xl animate-fade-in"
              style={{ filter: "drop-shadow(0 2px 16px rgba(59,130,246,0.18))" }}
            />
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold text-center mb-2 text-blue-100 animate-fade-in">
            Sign in to your account
          </h2>
          <p className="text-sm text-blue-300/80 text-center mb-8 animate-fade-in-slow">
            Access your hospital dashboard securely
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-blue-200 font-medium mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
                placeholder="admin@cityhospital.com"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm text-blue-200 font-medium mb-1">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-blue-200">
                <input type="checkbox" className="accent-blue-500 transition" />
                Remember me
              </label>
              <a href="#" className="text-blue-400 hover:underline transition-colors duration-150">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700/90 via-blue-600/90 to-blue-500/90 hover:from-blue-800 hover:to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-2xl animate-pulse-soft backdrop-blur-md border border-blue-900/30"
            >
              Sign In
            </button>
          </form>
          {/* Subtle animation for button */}
          <style>
            {`
              @keyframes pulseSoft {
                0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.18); }
                70% { box-shadow: 0 0 0 14px rgba(59,130,246,0); }
                100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
              }
              .animate-pulse-soft {
                animation: pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              /* Glassy effect for dark backgrounds */
              .glassy-dark {
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
                border: 1.5px solid rgba(59,130,246,0.12);
                background-clip: padding-box;
                backdrop-filter: blur(18px) saturate(140%);
                -webkit-backdrop-filter: blur(18px) saturate(140%);
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
