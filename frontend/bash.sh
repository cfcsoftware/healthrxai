# #!/bin/bash

# # Name of your React app

# # Step 1: Create Vite React app with TypeScript
# npm create vite@latest . -- --template react-ts
# cd ..

# Step 2: Install dependencies
npm install
npm install react-router-dom@6 zustand axios tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 3: Tailwind base setup
cat <<EOT > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
EOT


# Step 4: Create folder structure
mkdir -p src/{components,layouts,pages,services,hooks,store,utils,tenants}
mkdir -p src/tenants/tenant-a
mkdir -p src/tenants/tenant-b

# Step 5: Create basic files
cat <<EOT > src/store/useTenantStore.ts
import { create } from 'zustand';

interface TenantState {
  tenant: string | null;
  setTenant: (tenant: string) => void;
}

export const useTenantStore = create<TenantState>((set) => ({
  tenant: null,
  setTenant: (tenant) => set({ tenant }),
}));
EOT

cat <<EOT > src/utils/getTenant.ts
export const getTenant = (): string => {
  const subdomain = window.location.hostname.split('.')[0];
  return subdomain || 'default';
};
EOT

cat <<EOT > src/router.tsx
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useTenantStore } from './store/useTenantStore';
import { getTenant } from './utils/getTenant';
import { TenantRouter } from './tenants';

const AppRouter = () => {
  const setTenant = useTenantStore((state) => state.setTenant);

  useEffect(() => {
    const tenant = getTenant();
    setTenant(tenant);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TenantRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
EOT

cat <<EOT > src/tenants/index.tsx
import TenantARoutes from './tenant-a/routes';
import TenantBRoutes from './tenant-b/routes';
import { useTenantStore } from '../store/useTenantStore';

export const TenantRouter = () => {
  const tenant = useTenantStore((state) => state.tenant);

  switch (tenant) {
    case 'tenant-a':
      return <TenantARoutes />;
    case 'tenant-b':
      return <TenantBRoutes />;
    default:
      return <div>Unknown tenant: {tenant}</div>;
  }
};
EOT

cat <<EOT > src/tenants/tenant-a/routes.tsx
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => <div>Tenant A Dashboard</div>;

const TenantARoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default TenantARoutes;
EOT

cat <<EOT > src/tenants/tenant-b/routes.tsx
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => <div>Tenant B Dashboard</div>;

const TenantBRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default TenantBRoutes;
EOT

cat <<EOT > src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
EOT

# Step 6: Basic index.css for Tailwind
cat <<EOT > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

echo "✅ Multi-tenant React app initialized at ."
