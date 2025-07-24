import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import Pagination from "../../../components/common/Pagination";
import SearchInput from "../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../components/common/ExportLogic";

type IPDRecord = {
    id: number;
    ipd_record_id: string;
    admission_date: string;
    discharge_date: string | null;
    status: string;
    patient: {
      name: string;
      phone: string;
      age: string;
      gender: string;
      blood_group: string;
    };
    doctor: {
      name: string;
      email: string;
      phone: string;
    };
    bed_charge: string;
    service_charge: string;
    miscellaneous_charge: string;
    total_charge: string;
  };
  
  const IPDList = () => {
    const [ipdRecords, setIpdRecords] = useState<IPDRecord[]>([]);
    const [filteredRecords, setFilteredRecords] = useState<IPDRecord[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  
    useEffect(() => {
      const fetchIPDRecords = async () => {
        try {
          const res = await axiosTenant.get("/ipd/ipd/list?api=true");
          setIpdRecords(res.data.data);
        } catch (err) {
          console.error("Failed to fetch IPD records", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchIPDRecords();
    }, []);
  
    useEffect(() => {
      if (!search.trim()) {
        setFilteredRecords(ipdRecords);
      } else {
        const q = search.toLowerCase();
        setFilteredRecords(
          ipdRecords.filter((rec) =>
            [rec.ipd_record_id, rec.patient.name, rec.doctor.name]
              .filter(Boolean)
              .some((field) => field?.toLowerCase().includes(q))
          )
        );
      }
      setCurrentPage(1);
    }, [search, ipdRecords]);
  
    const paginatedRecords = filteredRecords.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  
    const handleExportCSV = () => {
      exportToCSV(
        "ipd_records.csv",
        [
          "IPD ID",
          "Patient",
          "Doctor",
          "Admission Date",
          "Discharge Date",
          "Status",
          "Bed Charges",
          "Service Charges",
          "Misc. Charges",
          "Total"
        ],
        filteredRecords.map((r) => [
          r.ipd_record_id,
          r.patient.name,
          r.doctor.name,
          r.admission_date,
          r.discharge_date || "-",
          r.status,
          r.bed_charge,
          r.service_charge,
          r.miscellaneous_charge,
          r.total_charge
        ])
      );
    };
  
    const handleExportJSON = () => {
      exportToJSON("ipd_records.json", filteredRecords);
    };
  
    const getInitials = (name: string | null | undefined) => {
      if (!name) return "--";
      return name.slice(0, 2).toUpperCase();
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">IPD Records</h1>
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center w-full md:w-auto">
            <div className="flex gap-2">
              <button
                onClick={handleExportCSV}
                className="bg-blue-600 text-white border border-blue-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                Export CSV
              </button>
              <button
                onClick={handleExportJSON}
                className="bg-gray-200 text-gray-800 border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 transition"
              >
                Export JSON
              </button>
            </div>
            <SearchInput
              value={search}
              onChange={(val) => setSearch(val)}
              placeholder="Search by IPD ID, patient, doctor"
            />
          </div>
        </div>
  
        {loading ? (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
            Loading IPD data...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">IPD ID</th>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Admit Date</th>
                  <th className="px-6 py-4 text-left">Discharge</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Bed</th>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Misc</th>
                  <th className="px-6 py-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paginatedRecords.map((rec, index) => (
                  <tr key={rec.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      {(currentPage - 1) * recordsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4">{rec.ipd_record_id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pink-100 text-pink-700 font-bold text-sm">
                        {getInitials(rec.patient.name)}
                      </span>
                      {rec.patient.name}
                    </td>
                    <td className="px-6 py-4">{rec.doctor.name}</td>
                    <td className="px-6 py-4">{rec.admission_date}</td>
                    <td className="px-6 py-4">{rec.discharge_date || "-"}</td>
                    <td className="px-6 py-4">{rec.status}</td>
                    <td className="px-6 py-4 text-blue-700 font-semibold">₹{rec.bed_charge}</td>
                    <td className="px-6 py-4 text-yellow-700 font-semibold">₹{rec.service_charge}</td>
                    <td className="px-6 py-4 text-orange-600 font-semibold">₹{rec.miscellaneous_charge}</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">₹{rec.total_charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {filteredRecords.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">
                No IPD records found.
              </div>
            )}
          </div>
        )}
  
        <Pagination
          currentPage={currentPage}
          totalItems={filteredRecords.length}
          itemsPerPage={recordsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };
  
  export default IPDList;

