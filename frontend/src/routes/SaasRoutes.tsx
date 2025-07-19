import { Routes, Route, Navigate } from 'react-router-dom';
import SaasLayout from '../layouts/SaasLayout';
import SaasLogin from '../pages/saas/auth/Login';
import SaasDashboard from '../pages/saas/Dashboard';
import UserList from '../pages/saas/userList';
import SubscriptionList from '../pages/saas/subscription';
import TransactionList from '../pages/saas/transaction';
import TenantList from '../pages/saas/tenantList';
import DomainList from '../pages/saas/domainList';
import SupportLeadList from '../pages/saas/supportLeads';

import RegsiterHospital from '../pages/saas/auth/RegisterHospital';

import { useAuth } from "../hooks/useAuth";

const SaasRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <Routes>
      {/* Public route */}
      <Route path="login" element={<SaasLogin />} />

      {/* Protected routes */}
      {isAuthenticated ? (
        <Route element={<SaasLayout />}>
          <Route path="dashboard" element={<SaasDashboard />} />
          <Route path="all-users" element={<UserList />} />
          <Route path="all-tenants" element={<TenantList />} />
          <Route path="all-domains" element={<DomainList />} />
          <Route path="all-transactions" element={<TransactionList />} />
          <Route path="all-subscription" element={<SubscriptionList />} />
          <Route path="enquiries" element={<SupportLeadList />} />

          <Route path="register-a-hospital" element={<RegsiterHospital />} />


        </Route>
      ) : (
        // Catch all other `/saas/*` routes if not logged in
        <Route path="*" element={<Navigate to="/saas/login" replace />} />
      )}
    </Routes>
  );
};

export default SaasRoutes;
