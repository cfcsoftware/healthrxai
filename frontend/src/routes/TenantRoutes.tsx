import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TenantLayout from '../layouts/TenantLayout';
import HospitalDashboard from '../pages/tenant/Dashboard/dashboard';
import PatientsList from '../pages/tenant/Patients/patients';

import { useTenantStore } from '../store/useTenantStore';
import { getTenant } from '../utils/getTenant';
// import { useAuth } from "../hooks/useAuth";
const TenantRoutes = () => {
  const setTenant = useTenantStore((state) => state.setTenant);

  useEffect(() => {
    const tenant = getTenant();
    setTenant(tenant);
  }, [setTenant]);

  // const { isAuthenticated, loading } = useAuth();
  // if (loading) return <div className="text-white text-center py-10">Loading...</div>;

  return (
    <Routes>
      {/* Protected routes 
      {isAuthenticated ? ( */}
      <Route element={<TenantLayout />}>
        <Route path="dashboard" element={<HospitalDashboard />} /> 
        <Route path="patients" element={<PatientsList />} />
      </Route>

    {/* ) : (
      // Catch all other `/*` routes if not logged in
      <Route path="*" element={<Navigate to="/login" replace />} />
    )} */}
    </Routes>

  );
};

export default TenantRoutes;
