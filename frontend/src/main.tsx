import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter';
// import SaasRoutes from './routes/SaasRoutes';
// import TenantRoutes from './routes/TenantRoutes'; 
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
    <Toaster />
  </React.StrictMode>
);
