import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useTenantStore } from './store/useTenantStore';
import { getTenant } from './utils/getTenant';
import { TenantRouter } from './tenants';
// import { AdminRoutes } from './admin/routes';
// import HealthrxAI from './tenants/HealthrxAI';
import LoginPage from './pages/LoginPage';
import Home from './pages/home';
import Features from './pages/feature';
import SolutionsPage from './pages/solutions';
import ResourcesPage from './pages/resource';
import CompanyPage from './pages/company';
import PricingPage from './pages/pricing';
import ContactPage from './pages/contact';

const AppRouter = () => {
  const setTenant = useTenantStore((state) => state.setTenant);

  useEffect(() => {
    const tenant = getTenant();
    setTenant(tenant);
  }, [setTenant]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HealthrxAI />} /> */}
        {/* <Route path="/saas/*" element={<AdminRoutes />} /> */}
        <Route path="/*" element={<TenantRouter />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
