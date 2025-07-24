import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TenantLogin = () => {
  const [hospitalId, setHospitalId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {

      // Handle localhost and live environments for API base URL
      const isLocalhost =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      const apiBaseUrl = isLocalhost
        ? "http://localhost:8000"
        : "https://healthrxai.com";

      const getDomainRes = await fetch(`${apiBaseUrl}/server/get-domain`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hospital_id: hospitalId }),
      });

      const domainData = await getDomainRes.json();

      if (!domainData.success || !domainData.domain) {
        setError("Invalid Hospital ID");
        setIsLoading(false);
        return;
      }

      const tenantDomain = domainData.domain; // 
      const finaltenantDomain = `${tenantDomain}/server`
      localStorage.setItem("finaltenantDomain",finaltenantDomain);


      const loginRes = await fetch(`${tenantDomain}/server/login?api=true`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!loginRes.ok) {
        setError("Invalid credentials or server error.");
        setIsLoading(false);
        return;
      }

      const loginData = await loginRes.json();


      localStorage.setItem("accessToken", loginData.access_token.access);
      localStorage.setItem("refreshToken", loginData.access_token.refresh);
      localStorage.setItem("tenantId", loginData.tenant_id);
      localStorage.setItem("roleId", loginData.role_id);
      localStorage.setItem("roleName", loginData.role_name);
      localStorage.setItem("tenantID", loginData.tenant_id);
      localStorage.setItem("roleId", loginData.role_id);
      localStorage.setItem("isTenantAdmin", loginData.is_tenant_admin);
      localStorage.setItem("username", loginData.username);
      localStorage.setItem("ProfileImg", loginData.profile_image);
      
      localStorage.setItem("userPermissions", loginData.user_permissions);


      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your details.");
    } finally {
      setIsLoading(false);
    }
  };

  // Accept uppercase in hospital id field and add eye button to toggle password visibility
 
  // ...rest of your imports

  // ...component code above

  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute left-0 top-0 w-1/2 h-1/2 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="200" fill="url(#hospitalGradient1)" />
          <defs>
            <linearGradient id="hospitalGradient1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Plus sign */}
          <g>
            <g className="animate-pulse" style={{ transformOrigin: "200px 200px" }}>
              <rect
                x="170"
                y="100"
                width="60"
                height="200"
                rx="18"
                fill="#fff"
                opacity="0.9"
              >
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="100"
                y="170"
                width="200"
                height="60"
                rx="18"
                fill="#fff"
                opacity="0.9"
              >
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </g>
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-blue-100 backdrop-blur-md transition-all duration-300">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg mb-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="14" y="4" width="4" height="24" rx="2" fill="#fff" />
              <rect x="4" y="14" width="24" height="4" rx="2" fill="#fff" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 tracking-tight">Hospital Login</h2>
          <p className="text-blue-500 text-sm">Sign in to your hospital workspace</p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={e => {
            e.preventDefault();
            if (!isLoading) handleLogin();
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="hospitalId" className="text-sm font-medium text-blue-700">
              Hospital ID
            </label>
            <input
              id="hospitalId"
              type="text"
              value={hospitalId}
              onChange={(e) => setHospitalId(e.target.value.toUpperCase())}
              placeholder="e.g., HRX1000"
              className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white uppercase"
              autoComplete="off"
              required
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-blue-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-blue-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white w-full pr-10"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 focus:outline-none"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye open icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  // Eye closed icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95m3.25-2.61A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.197M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 flex items-center justify-center gap-2 ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {error && (
          <div
            className="transition-all duration-300 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-2 text-sm mt-2 animate-fade-in"
            style={{ animation: "fade-in 0.3s" }}
          >
            {error}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.3s;
          }
        `}
      </style>
    </div>
  );
};

export default TenantLogin;
