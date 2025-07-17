import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/landing/Home';
import LoginPage from '../pages/tenant/auth/Login';
import SaasAdminLoginPage from '../pages/saas/auth/Login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/saas/login" element={<SaasAdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
