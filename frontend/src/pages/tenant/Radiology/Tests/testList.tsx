import React, { useEffect, useState } from "react";
import axiosTenant from "../../../../lib/axiosTenant";
import Pagination from "../../../../components/common/Pagination";
import SearchInput from "../../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../../components/common/ExportLogic";


type RadiologyTest = {
    id: number;
    test_name: string;
    short_name: string;
    test_type: string | null;
    sample_type: string;
    total_amount: string;
    precaution: string;
    component_name: string[];
    component_unit: string[];
    component_result: string[];
    test_status: string[];
    male_reference_range: string[];
    female_reference_range: string[];
    created_at: string;
    updated_at: string;
  };
  
  const RadiologyTestList = () => {
    const [tests, setTests] = useState<RadiologyTest[]>([]);
    const [filteredTests, setFilteredTests] = useState<RadiologyTest[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  
    useEffect(() => {
      const fetchTests = async () => {
        try {
          const res = await axiosTenant.get("/radiology/tests/list?api=true");
          setTests(res.data.data);
        } catch (err) {
          console.error("Error fetching radiology tests", err);
        } finally {
          setLoading(false);
        }
      };
      fetchTests();
    }, []);
  
    useEffect(() => {
      if (!search.trim()) {
        setFilteredTests(tests);
      } else {
        const query = search.toLowerCase();
        setFilteredTests(
          tests.filter(
            (t) =>
              t.test_name.toLowerCase().includes(query) ||
              t.short_name.toLowerCase().includes(query)
          )
        );
      }
      setCurrentPage(1);
    }, [search, tests]);
  
    const paginatedTests = filteredTests.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  
    const handleExportCSV = () => {
      exportToCSV(
        "radiology_tests.csv",
        [
          "Test Name",
          "Short Name",
          "Sample Type",
          "Total Amount",
          "Precaution",
          "Created At",
        ],
        filteredTests.map((t) => [
          t.test_name,
          t.short_name,
          t.sample_type,
          t.total_amount,
          t.precaution,
          new Date(t.created_at).toLocaleDateString(),
        ])
      );
    };
  
    const handleExportJSON = () => {
      exportToJSON("radiology_tests.json", filteredTests);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Radiology Test List</h1>
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center w-full md:w-auto">
            <div className="flex gap-2">
              <button
                onClick={handleExportCSV}
                className="bg-blue-600 text-white border border-blue-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                Export as CSV
              </button>
              <button
                onClick={handleExportJSON}
                className="bg-gray-200 text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 transition"
              >
                Export as JSON
              </button>
            </div>
            <SearchInput
              value={search}
              onChange={(val) => setSearch(val)}
              placeholder="Search by test name or short name"
            />
          </div>
        </div>
  
        {loading ? (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
            Loading tests...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Test Name</th>
                  <th className="px-6 py-4 text-left">Short Name</th>
                  <th className="px-6 py-4 text-left">Sample Type</th>
                  <th className="px-6 py-4 text-left">Total Amount (₹)</th>
                  <th className="px-6 py-4 text-left">Precaution</th>
                  <th className="px-6 py-4 text-left">Created At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paginatedTests.map((t, index) => (
                  <tr key={t.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      {(currentPage - 1) * recordsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium">{t.test_name}</td>
                    <td className="px-6 py-4">{t.short_name}</td>
                    <td className="px-6 py-4">{t.sample_type}</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">
                      ₹{t.total_amount}
                    </td>
                    <td className="px-6 py-4">{t.precaution}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(t.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {filteredTests.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">
                No radiology tests found.
              </div>
            )}
          </div>
        )}
  
        <Pagination
          currentPage={currentPage}
          totalItems={filteredTests.length}
          itemsPerPage={recordsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };
  
  export default RadiologyTestList;