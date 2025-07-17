// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useTenantStore } from './store/useTenantStore';
// import { getTenant } from './utils/getTenant';

// import LoginPage from './pages/tenant/auth/Login';
// import SaasAdminLoginPage from './pages/saas/auth/Login';
// import Home from './pages/landing/Home';


// const AppRouter = () => {
//   const setTenant = useTenantStore((state) => state.setTenant);

//   useEffect(() => {
//     const tenant = getTenant();
//     setTenant(tenant);
//   }, [setTenant]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/saas/login" element={<SaasAdminLoginPage />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
