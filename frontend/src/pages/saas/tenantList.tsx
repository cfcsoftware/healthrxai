import React, { useEffect, useState } from "react";
import api from "../../lib/axios";

import Pagination from "../../components/common/Pagination";
import SearchInput from "../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../components/common/ExportLogic";

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
  const [filteredTenants, setFilteredTenants] = useState<Tenant[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

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

  useEffect(() => {
    if (!search.trim()) {
      setFilteredTenants(tenants);
    } else {
      setFilteredTenants(
        tenants.filter((tenant) =>
          (tenant.full_name && tenant.full_name.toLowerCase().includes(search.toLowerCase())) ||
          (tenant.hospital_name && tenant.hospital_name.toLowerCase().includes(search.toLowerCase())) ||
          (tenant.custom_tenant_id && tenant.custom_tenant_id.toLowerCase().includes(search.toLowerCase())) ||
          (tenant.email && tenant.email.toLowerCase().includes(search.toLowerCase()))
        )
      );
    }
    setCurrentPage(1);
  }, [search, tenants]);

  const paginatedTenants = filteredTenants.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleExportCSV = () => {
    exportToCSV(
      "tenants.csv",
      ["ID", "Tenant ID", "Name", "Hospital", "Email", "Joined"],
      filteredTenants.map((t) => [
        t.id,
        t.custom_tenant_id ?? "-",
        t.full_name,
        t.hospital_name ?? "-",
        t.email ?? "-",
        new Date(t.created_at).toLocaleDateString()
      ])
    );
  };

  const handleExportJSON = () => {
    exportToJSON("tenants.json", filteredTenants);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tenants</h1>
        <div className="flex flex-col md:flex-row w-full md:w-auto md:items-center gap-3 mt-2 md:mt-0">
          <div className="flex gap-2">
            <button
              onClick={handleExportCSV}
              className="bg-blue-600 text-white border border-blue-700 px-4 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Export as CSV
            </button>
            <button
              onClick={handleExportJSON}
              className="bg-gray-200 text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Export as JSON
            </button>
          </div>
          <SearchInput
            value={search}
            onChange={(val) => setSearch(val)}
            placeholder="Search by name, ID, hospital or email"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-gray-500 text-lg font-medium">Loading tenants...</span>
        </div>
      ) : filteredTenants.length === 0 ? (
        <div className="p-12 text-center text-gray-400 text-lg font-medium">
          No tenants found matching your criteria.
        </div>
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
                {paginatedTenants.map((tenant) => (
                  <tr key={tenant.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">{tenant.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">
                      {tenant.custom_tenant_id || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{tenant.full_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{tenant.hospital_name || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{tenant.email || "-"}</td>
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

          <Pagination
            currentPage={currentPage}
            totalItems={filteredTenants.length}
            itemsPerPage={recordsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default TenantList;
