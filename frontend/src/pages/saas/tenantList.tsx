import React, { useEffect, useState } from "react";
import api from "../../lib/axios";

type Tenant = {
  id: number;
  schema_name: string;
  custom_tenant_id: string;
  full_name: string;
  hospital_name: string | null;
  mobile_number: string | null;
  email: string | null;
  created_at: string;
};

const TenantList = () => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const res = await api.get("/saas/admins?api=true");
        setTenants(res.data);
      } catch (err) {
        console.error("Error fetching tenants", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTenants();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Tenants</h1>
      </div>

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : tenants.length === 0 ? (
        <div className="text-gray-400">No tenants found.</div>
      ) : (
        <>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tenant ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Hospital</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {tenants.map((tenant) => (
                  <tr key={tenant.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{tenant.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">
                      {tenant.custom_tenant_id || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{tenant.full_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {tenant.hospital_name || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {tenant.email || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {new Date(tenant.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 transition px-2">Edit</button>
                      <button className="text-red-500 hover:text-red-700 transition px-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Optional: Static pagination info */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{tenants.length}</span> of{" "}
              <span className="font-medium">{tenants.length}</span> tenants
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TenantList;
