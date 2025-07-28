// routing realted to the landing page or via its homepage
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/landing/Home';
import LoginPage from '../pages/tenant/auth/Login';
import SaasLogin from '../pages/saas/auth/Login';
import SaasRoutes from './SaasRoutes';
import TenantRoutes from './TenantRoutes';
// import HMS from '../pages/landing/features/Hrm';
import ContactUS from '../pages/landing/contact';
import Ai from '../pages/landing/features/AI';
import Blockchain from '../pages/landing/features/Blockchain';
import Robot from '../pages/landing/features/Robot';
import Hospitals from '../pages/landing/solutions/Hospitals';
import Clinics from '../pages/landing/solutions/Clinics';
import Labs from '../pages/landing/solutions/labs';
import Pharmacy from '../pages/landing/solutions/Pharmacy';
import Telehealth from '../pages/landing/solutions/Telehealth';
import Case from '../pages/landing/services/Case';
import WhitePaper from '../pages/landing/services/Whitepaper';
import Product from '../pages/landing/services/Product';
import Pricing from '../pages/landing/Pricing';
import Privacy from '../pages/landing/Privacy';
import Term from '../pages/landing/Term';
import EulaAgreement from '../pages/landing/EulaAgreement';
import RefundPolicy from '../pages/landing/RefundPolicy';
import DataPrivacy from '../pages/landing/DataPrivacy';
import BookDemo from '../pages/landing/bookdemo/BookDemo';
import Hrm from '../pages/landing/features/Hrm';
import AppointmentQueue from '../pages/landing/features/AppointmentQueue';
import Billing from '../pages/landing/features/Billing';
import LabRadiology from '../pages/landing/features/LabRadiology';
import PharmacyInventory from '../pages/landing/features/PharmacyInventory';
import Telemedicine from '../pages/landing/features/Telemedicine';
import OpdIpd from '../pages/landing/features/OpdIpd';
import Analytics from '../pages/landing/features/Analytics';
import Healthgroups from '../pages/landing/solutions/Healthgroups';
import Governmenthealthcare from '../pages/landing/solutions/Governmenthealthcare';
import Multilocation from '../pages/landing/solutions/Multilocation';
import Cloudonprem from '../pages/landing/solutions/Cloudonprem';
import Diagnostics from '../pages/landing/ai-automation/Diagnostics';
import NlpVoiceEmr from '../pages/landing/ai-automation/NlpVoiceEmr';
import ReportGeneration from '../pages/landing/ai-automation/ReportGeneration';
import PredictiveAnalytics from '../pages/landing/ai-automation/PredictiveAnalytics';
import N8nAutomation from '../pages/landing/ai-automation/N8nAutomation';
import WhatsappBot from '../pages/landing/ai-automation/WhatsappBot';
import CaseStudies from '../pages/landing/resources/CaseStudies';
import Brochures from '../pages/landing/resources/Brochures';
import Webinars from '../pages/landing/resources/Webinars';
import Docs from '../pages/landing/resources/Docs';
import Faqs from '../pages/landing/resources/Faqs';
import Blog from '../pages/landing/resources/Blog';
import About from '../pages/landing/Company/About';
import Mission from '../pages/landing/Company/Mission';
import Careers from '../pages/landing/Company/Careers';
import { Contact } from 'lucide-react';
import Team from '../pages/landing/Company/Team';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page routes */}
        <Route path="/" element={<Home />} />
          <Route path="/landing/features/hrm" element={<Hrm />} />
          <Route path="/landing/features/appointmentQueue" element={<AppointmentQueue />} />
          <Route path="/features/ai-capabilities" element={<Ai />} />
          <Route path="/landing/features/blockchain" element={<Blockchain />} />
          <Route path="/landing/features/robot-system" element={<Robot />} />
          <Route path="/landing/features/billing" element={<Billing />} />
          <Route path="/landing/features/labRadiology" element={<LabRadiology />} />
          <Route path="/landing/features/pharmacyInventory" element={<PharmacyInventory />} />
          <Route path="/landing/features/telemedicine" element={<Telemedicine />} />
          <Route path="/landing/features/opdipd" element={<OpdIpd />} />
          <Route path="/landing/features/Analytics" element={<Analytics />} />
          <Route path="/landing/features/hospitals" element={<Hospitals />} />
          <Route path="/landing/features/multi-location" element={<Hospitals />} />

          <Route path="/landing/solutions/hospitals" element={<Hospitals />} />
          <Route path="/landing/solutions/clinics" element={<Clinics />} />
          <Route path="/landing/solutions/labs-diagnostics" element={<Labs />} />
          <Route path="/landing/solutions/health-groups" element={<Healthgroups />} />
          <Route path="/landing/solutions/government-healthcare" element={<Governmenthealthcare />} />
          <Route path="/landing/solutions/multi-location" element={<Multilocation />} />
          <Route path="/landing/solutions/deployment-options" element={<Cloudonprem />} />
          <Route path="/solutions/pharmacy-management" element={<Pharmacy />} />
          <Route path="/solutions/telehealth-centers" element={<Telehealth />} />

           {/* AI & Automation routes */}
      <Route path="/ai-automation/diagnostics" element={<Diagnostics />} />
      <Route path="/ai-automation/nlp-voice-emr" element={<NlpVoiceEmr />} />
      <Route path="/ai-automation/report-generation" element={<ReportGeneration />} />
      <Route path="/ai-automation/predictive-analytics" element={<PredictiveAnalytics />} />
      <Route path="/ai-automation/n8n-automation" element={<N8nAutomation />} />
      <Route path="/ai-automation/whatsapp-bot" element={<WhatsappBot />} />


       {/* Resources routes */}
      <Route path="/resources/case-studies" element={<CaseStudies />} />
      <Route path="/resources/brochures" element={<Brochures />} />
      <Route path="/landing/resources/blogs" element={<Blog />} />
      <Route path="/resources/api-docs" element={<Docs />} />
      <Route path="/resources/webinars" element={<Webinars />} />
      <Route path="/resources/docs" element={<Docs />} />
      <Route path="/resources/faqs" element={<Faqs />} />


       <Route path="/company/about" element={<About />} />
      <Route path="/company/mission" element={<Mission />} />
      <Route path="/company/team" element={<Team />} />
      <Route path="/company/careers" element={<Careers />} />
      <Route path="/company/contact" element={<Contact />} />


          <Route path="/pricing" element={<Pricing />} />

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

        <Route path="/bookdemo" element={<BookDemo />} />



        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
