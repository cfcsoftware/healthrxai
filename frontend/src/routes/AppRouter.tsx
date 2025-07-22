// routing realted to the landing page or via its homepage
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/landing/Home';
import LoginPage from '../pages/tenant/auth/Login';
import SaasLogin from '../pages/saas/auth/Login';
import SaasRoutes from './SaasRoutes';
import TenantRoutes from './TenantRoutes';
import HMS from '../pages/landing/features/HMS';
import ContactUS from '../pages/landing/contact';
import Ai from '../pages/landing/features/AI';
import Blockchain from '../pages/landing/features/Blockchain';
import Robot from '../pages/landing/features/Robot';
import Hospitals from '../pages/landing/solutions/Hospitals';
import Clinics from '../pages/landing/solutions/Clinics';
import Labs from '../pages/landing/solutions/labs';
import Pharmacy from '../pages/landing/solutions/Pharmacy';
import Telehealth from '../pages/landing/solutions/Telehealth';
import Blogs from '../pages/landing/services/Blogs';
import Case from '../pages/landing/services/Case';
import WhitePaper from '../pages/landing/services/Whitepaper';
import Product from '../pages/landing/services/Product';
import Pricing from '../pages/landing/Pricing';
import Privacy from '../pages/landing/Privacy';
import Term from '../pages/landing/Term';
import EulaAgreement from '../pages/landing/EulaAgreement';
import RefundPolicy from '../pages/landing/RefundPolicy';
import DataPrivacy from '../pages/landing/DataPrivacy';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page routes */}
        <Route path="/" element={<Home />} />
          <Route path="/features/hms-modules" element={<HMS />} />
          <Route path="/features/ai-capabilities" element={<Ai />} />
          <Route path="/features/blockchain-security" element={<Blockchain />} />
          <Route path="/features/delivery-robot-system" element={<Robot />} />

          <Route path="/solutions/hospitals" element={<Hospitals />} />
          <Route path="/solutions/clinics" element={<Clinics />} />
          <Route path="/solutions/labs-diagnostics" element={<Labs />} />
          <Route path="/solutions/pharmacy-management" element={<Pharmacy />} />
          <Route path="/solutions/telehealth-centers" element={<Telehealth />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/resources/blog" element={<Blogs />} />
          <Route path="/resources/case-studies" element={<Case />} />
          <Route path="/resources/documentation-product" element={<Product />} />
          <Route path="/resources/whitepapers" element={<WhitePaper />} />

          <Route path="/contact" element={<ContactUS />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/eula_agreement" element={<EulaAgreement />} />
          <Route path="/return_and_refund_policy" element={<RefundPolicy />} />
          <Route path="/data_privacy" element={<DataPrivacy />} />
          <Route path="/terms" element={<Term />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/saas/login" element={<SaasLogin />} />
        <Route path="/saas/*" element={<SaasRoutes />} />
        <Route path="/*" element={<TenantRoutes />} />




        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
