import { useEffect } from 'react';
import { Routes } from 'react-router-dom';

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


    </Routes>
  );
};

export default TenantRoutes;
