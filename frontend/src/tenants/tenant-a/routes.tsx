import { Routes, Route } from 'react-router-dom';

const Dashboard = () => <div>Tenant A Dashboard</div>;

const TenantARoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default TenantARoutes;
