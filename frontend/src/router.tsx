import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useTenantStore } from './store/useTenantStore';
import { getTenant } from './utils/getTenant';
import { TenantRouter } from './tenants';
import LoginPage from './pages/LoginPage';
import Home from './pages/home';


const AppRouter = () => {
  const setTenant = useTenantStore((state) => state.setTenant);

  useEffect(() => {
    const tenant = getTenant();
    setTenant(tenant);
  }, [setTenant]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<TenantRouter />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
