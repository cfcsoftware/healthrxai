import { Routes, Route } from 'react-router-dom';
import SaasLayout from '../layouts/SaasLayout';
import SaasLogin from '../pages/saas/auth/Login';
import SaasDashboard from '../pages/saas/Dashboard';
import UserList from '../pages/saas/userList';
import SubscriptionList from '../pages/saas/subscription';
import TransactionList from '../pages/saas/transaction';
import TenantList from '../pages/saas/tenantList';
import DomainList from '../pages/saas/domainList';


const SaasRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="login" element={<SaasLogin />} />

      {/* Protected routes under layout */}
      <Route element={<SaasLayout />}>
        <Route path="dashboard" element={<SaasDashboard />} />
        <Route path="all-users" element={<UserList />} />
        <Route path="all-tenants" element={<TenantList />} />
        <Route path="all-domains" element={<DomainList />} />
        <Route path="all-transactions" element={<TransactionList />} />
        <Route path="all-subscription" element={<SubscriptionList />} />
        
        {/* Add more routes like: /saas/users, /saas/settings etc. */}
      </Route>
    </Routes>
  );
};

export default SaasRoutes;
