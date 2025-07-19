// routing realted to the landing page or via its homepage
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/landing/Home';
import LoginPage from '../pages/tenant/auth/Login';
import SaasLogin from '../pages/saas/auth/Login';
import SaasRoutes from './SaasRoutes';
import TenantRoutes from './TenantRoutes';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/saas/login" element={<SaasLogin />} />
        <Route path="/saas/*" element={<SaasRoutes />} />
        <Route path="/" element={<TenantRoutes />} />





        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
