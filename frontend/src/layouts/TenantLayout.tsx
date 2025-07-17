import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/PanelNavbar';
import TenantSidebar from '../components/layout/TenantSidebar';

const TenantLayout = () => (
  <div className="flex h-screen overflow-hidden">
    <TenantSidebar />
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-6 bg-white">
        <Outlet />
      </main>
    </div>
  </div>
);

export default TenantLayout;
