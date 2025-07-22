// src/pages/tenant/LoginForm.tsx
import React, { useState } from 'react';
import { authService } from '../../../services/authService';

const TenantLoginForm = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [hospitalId, setHospitalId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHospitalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/get-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hospital_id: hospitalId })
      });

      const data = await res.json();

      if (!data.success || !data.hospital_name) {
        throw new Error('Invalid hospital ID.');
      }

      // Save tenant
      localStorage.setItem('tenant', data.hospital_name);
      setStep(2); // Move to login form
    } catch (err: any) {
      setError(err.message || 'Failed to resolve hospital ID');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await authService.login({ email, password });
      window.location.href = '/dashboard'; // or wherever you want to redirect
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {step === 1 ? 'Enter Hospital ID' : 'Tenant Login'}
      </h2>

      {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

      {step === 1 && (
        <form onSubmit={handleHospitalSubmit} className="space-y-4">
          <input
            type="text"
            value={hospitalId}
            onChange={(e) => setHospitalId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
            placeholder="Hospital ID (e.g. HRX1002)"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loading ? 'Validating...' : 'Continue'}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}
    </div>
  );
};

export default TenantLoginForm;







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// // import { useAuth } from "../../../hooks/useAuth";
// import api from '../../../lib/axios';
// import axios from 'axios'; // native axios



// export default function LoginPage() {
//   const [hospitalID, setHospitalID] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!hospitalID || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     if (!email.includes('@')) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     try {
//       // gt the hospital_name from hospital ID......
//       const domainRes = await api.post('/get-domain', { hospital_id: hospitalID });
//       const domainData = domainRes.data;

//       if (!domainData.success) {
//         toast.error("Invalid Hospital ID");
//         return;
//       }

//       let { domain } = domainData;
//       if (!domain.endsWith('/server')) {
//         domain = domain.replace(/\/$/, '') + '/server';
//       }
//       // Store the domain in localStorage for reuse
//       localStorage.setItem('tenant_server_domain', domain);

//       // Reuse the domain from localStorage for login API call
//       const tenantDomain = localStorage.getItem('tenant_server_domain');
//       if (!tenantDomain) {
//         toast.error("Tenant server domain not found. Please try again.");
//         return;
//       }

//       // Use the stored domain as the baseURL for login

//       const loginRes = await axios.post(
//         `${tenantDomain}/login?api=true`,
//         { email, password },
//         {
//           withCredentials: true,
//         }
//       );
//       console.log(loginRes)

//       const loginData = loginRes.data;
//       console.log(loginData)

//       const accessToken = loginData.access_token?.access || loginData.access_token;
//       localStorage.setItem('access_token', accessToken);
//       // appening the token to the api instanvce to use again and gain....
//       api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//       // Save all relevant login data to localStorage
//       localStorage.setItem('access_token', loginData.access_token?.access || loginData.access_token);
//       localStorage.setItem('refresh_token', loginData.access_token?.refresh || '');
//       localStorage.setItem('email', loginData.email || '');
//       localStorage.setItem('username', loginData.username || '');
//       localStorage.setItem('is_tenant_admin', JSON.stringify(loginData.is_tenant_admin ?? false));
//       localStorage.setItem('tenant_id', loginData.tenant_id ? String(loginData.tenant_id) : '');
//       localStorage.setItem('role_id', loginData.role_id ? String(loginData.role_id) : '');
//       localStorage.setItem('role_name', loginData.role_name || '');
//       localStorage.setItem('user_permissions', JSON.stringify(loginData.user_permissions || []));
//       localStorage.setItem('profile_image', loginData.profile_image || '');
//       toast.success("Welcome to you Smart AI Hospital.");

//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Login error:", error);

//       let message = "Login failed. Please check your credentials.";
//       if (
//         error &&
//         typeof error === "object" &&
//         "response" in error &&
//         typeof (error as { response?: { data?: { message?: unknown } } }).response?.data?.message === "string"
//       ) {
//         message = (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? message;
//       }

//       toast.error(message);
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155]">
//       {/* Left Welcome Section */}
//       <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80 backdrop-blur-[6px]"></div>
//         <div className="relative z-10 flex flex-col items-center text-white text-center px-10 py-20 animate-fade-in-down">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-2xl animate-fade-in">
//             Welcome to <span className="text-blue-300">HealthRxAI</span>
//           </h1>
//           <p className="text-lg md:text-xl font-light mb-2 opacity-90 animate-fade-in-slow">
//             Elevating Healthcare, Empowering You
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full mt-6 mx-auto animate-pulse"></div>
//         </div>
//         <style>{`
//           @keyframes fadeInDown {
//             0% { opacity: 0; transform: translateY(-30px);}
//             100% { opacity: 1; transform: translateY(0);}
//           }
//           @keyframes fadeIn {
//             0% { opacity: 0;}
//             100% { opacity: 1;}
//           }
//           .animate-fade-in-down {
//             animation: fadeInDown 1.1s cubic-bezier(0.4,0,0.2,1) both;
//           }
//           .animate-fade-in {
//             animation: fadeIn 1.5s 0.2s both;
//           }
//           .animate-fade-in-slow {
//             animation: fadeIn 2.2s 0.6s both;
//           }
//         `}</style>
//       </div>

//       {/* Right Login Form */}
//       <div className="flex items-center justify-center bg-transparent p-6">
//         <div className="w-full max-w-md bg-gradient-to-br from-white/10 via-blue-900/30 to-blue-800/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-blue-900/30 animate-fade-in-down glassy-dark">
//           <div className="flex justify-center mb-8">
//             <img
//               src="https://healthsrx.com/static/images/main_logo2.png"
//               alt="HealthRx AI Logo"
//               width={150}
//               height={44}
//               className="drop-shadow-xl animate-fade-in"
//               style={{ filter: "drop-shadow(0 2px 16px rgba(59,130,246,0.18))" }}
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-center mb-2 text-blue-100 animate-fade-in">
//             Sign in to your account
//           </h2>
//           <p className="text-sm text-blue-300/80 text-center mb-8 animate-fade-in-slow">
//             Access your hospital dashboard securely
//           </p>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm text-blue-200 font-medium mb-1">
//                 Hospital ID <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={hospitalID}
//                 onChange={(e) => setHospitalID(e.target.value.toUpperCase())}
//                 className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
//                 placeholder="e.g.,HRX1001"
//                 style={{ textTransform: "uppercase" }}
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-blue-200 font-medium mb-1">
//                 Email Address <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
//                 placeholder="admin@examplehospital.com"
//                 autoComplete="username"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-blue-200 font-medium mb-1">
//                 Password <span className="text-red-400">*</span>
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-blue-800/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm bg-white/10 text-blue-100 placeholder-blue-300/60 backdrop-blur-md"
//                 placeholder="••••••••"
//                 autoComplete="current-password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-700/90 via-blue-600/90 to-blue-500/90 hover:from-blue-800 hover:to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-2xl animate-pulse-soft backdrop-blur-md border border-blue-900/30"
//             >
//               Sign In
//             </button>
//           </form>
//           <style>{`
//             @keyframes pulseSoft {
//               0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.18); }
//               70% { box-shadow: 0 0 0 14px rgba(59,130,246,0); }
//               100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
//             }
//             .animate-pulse-soft {
//               animation: pulseSoft 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//             }
//             .glassy-dark {
//               box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
//               border: 1.5px solid rgba(59,130,246,0.12);
//               background-clip: padding-box;
//               backdrop-filter: blur(18px) saturate(140%);
//               -webkit-backdrop-filter: blur(18px) saturate(140%);
//             }
//           `}</style>
//         </div>
//       </div>
//     </div>
//   );
// }
