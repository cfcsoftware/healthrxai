import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TenantLayout from '../layouts/TenantLayout';
import Dashboard from '../pages/tenant/Dashboard/dashboard';
import PatientsList from '../pages/tenant/Patients/patients';

import { useTenantStore } from '../store/useTenantStore';
import { getTenant } from '../utils/getTenant';

const TenantRoutes = () => {
  const setTenant = useTenantStore((state) => state.setTenant);

  useEffect(() => {
    const tenant = getTenant();
    setTenant(tenant);
  }, [setTenant]);

  return (
    <Routes>
      <Route element={<TenantLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patients" element={<PatientsList />} />
      </Route>
    </Routes>
  );
};

export default TenantRoutes;
