import { Routes, Route } from 'react-router-dom';

const Dashboard = () => <div>Tenant B Dashboard</div>;

const TenantBRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default TenantBRoutes;
