import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/PanelNavbar';
import SaasSidebar from '../components/layout/SaasSidebar';

const SaasLayout = () => (
  <div className="flex h-screen overflow-hidden">
    <SaasSidebar />
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-0">
        <Outlet />
      </main>
    </div>
  </div>
);

export default SaasLayout;
