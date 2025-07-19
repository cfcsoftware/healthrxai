import React, { useEffect, useState } from "react";
import api from "../../lib/axios";

import Pagination from "../../components/common/Pagination";
import SearchInput from "../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../components/common/ExportLogic";

type Domain = {
  id: number;
  domain: string;
  is_primary: boolean;
  custom_domain_url: string | null;
  browse: string | null;
  tenant: number;
};

const DomainList = () => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [filteredDomains, setFilteredDomains] = useState<Domain[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const res = await api.get("/saas/domains?api=true");
        setDomains(res.data);
      } catch (err) {
        console.error("Error fetching domains", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredDomains(domains);
    } else {
      setFilteredDomains(
        domains.filter((domain) =>
          domain.domain.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setCurrentPage(1);
  }, [search, domains]);

  const paginatedDomains = filteredDomains.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleExportCSV = () => {
    exportToCSV(
      "domains.csv",
      ["ID", "Domain", "Is Primary", "Tenant"],
      filteredDomains.map((d) => [
        d.id,
        d.domain,
        d.is_primary ? "Yes" : "No",
        d.tenant,
      ])
    );
  };

  const handleExportJSON = () => {
    exportToJSON("domains.json", filteredDomains);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Domains</h1>
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
            placeholder="Search by domain name"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-gray-500 text-lg font-medium">Loading domains...</span>
        </div>
      ) : filteredDomains.length === 0 ? (
        <div className="p-12 text-center text-gray-400 text-lg font-medium">
          No domains found matching your criteria.
        </div>
      ) : (
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600 text-left text-sm uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">S.No.</th>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Domain</th>
                <th className="px-6 py-4">Primary</th>
                <th className="px-6 py-4">Tenant</th>
              </tr>
            </thead>
            <tbody>
              {paginatedDomains.map((domain, index) => (
                <tr key={domain.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    {(currentPage - 1) * recordsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4">{domain.id}</td>
                  <td className="px-6 py-4">{domain.domain}</td>
                  <td className="px-6 py-4">
                    {domain.is_primary ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{domain.tenant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalItems={filteredDomains.length}
        itemsPerPage={recordsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DomainList;
