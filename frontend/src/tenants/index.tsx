import TenantARoutes from './tenant-a/routes';
import TenantBRoutes from './tenant-b/routes';
import { useTenantStore } from '../store/useTenantStore';

const TENANT_A = 'tenant-a';
const TENANT_B = 'tenant-b';
const LOCALHOST = 'localhost';

export const TenantRouter = () => {
  const tenant = useTenantStore((state) => state.tenant);

  switch (tenant) {
    case TENANT_A:
      return <TenantARoutes />;
    case TENANT_B:
      return <TenantBRoutes />;
    case LOCALHOST:
      return <div>Welcome, localhost tenant!</div>;
    default:
      return <div style={{ color: 'red' }}>Unknown tenant: {tenant}</div>;
  }
};
