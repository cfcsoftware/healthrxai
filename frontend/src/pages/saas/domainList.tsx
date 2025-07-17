import React, { useEffect, useState } from "react";
import api from "../../lib/axios"; 

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
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Domains</h1>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : domains.length === 0 ? (
        <div className="text-gray-400">No domains found.</div>
      ) : (
        <table className="w-full bg-white rounded-xl overflow-hidden shadow">
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
            {domains.map((domain) => (
              <tr key={domain.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4">10
                  {domains.length - domains.findIndex(d => d.id === domain.id)}
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
      )}
    </div>
  );
};

export default DomainList;
