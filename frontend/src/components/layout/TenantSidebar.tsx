import { Link } from 'react-router-dom';

const TenantSidebar = () => (
  <aside className="w-64 h-full bg-blue-800 text-white px-4 py-6">
    <h2 className="text-lg font-bold mb-6">Tenant Panel</h2>
    <ul className="space-y-3">
      <li>
        <Link to="/dashboard" className="block hover:text-yellow-300">Dashboard</Link>
      </li>
      {/* Add more tenant links here */}
    </ul>
  </aside>
);

export default TenantSidebar;
