import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SaasAdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Dummy login handler for SaaS admin
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

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (email === "admin@healthrxai.com" && password === "admin123") {
        toast.success("Login successful!");
        navigate("/saas-admin/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155]">
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
        <h2 className="text-2xl font-bold text-center mb-2 text-blue-100 animate-fade-in">
          SaaS Admin Login
        </h2>
        <p className="text-sm text-blue-300/80 text-center mb-8 animate-fade-in-slow">
          Sign in to manage your SaaS platform
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-blue-200 font-medium mb-1">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
              placeholder="admin@healthrxai.com"
              autoComplete="username"
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm text-blue-200 font-medium mb-1">
              Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700/90 via-blue-600/90 to-blue-500/90 hover:from-blue-800 hover:to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-2xl animate-pulse-soft backdrop-blur-md border border-blue-900/30"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
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
              0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.18); }
              70% { box-shadow: 0 0 0 14px rgba(59,130,246,0); }
              100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
            }
            .animate-pulse-soft {
              animation: pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
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
  );
}
