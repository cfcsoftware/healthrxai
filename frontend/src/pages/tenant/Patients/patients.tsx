import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import Pagination from "../../../components/common/Pagination";
import SearchInput from "../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../components/common/ExportLogic";

type Patient = {
  id: number;
  patient_record_id?: string;
  name?: string;
  phone?: string;
  guardian_name?: string;
  guardian_phone?: string;
  age?: string;
  gender?: string;
  blood_group?: string;
  address?: string;
  tpa_validity?: string;
  created_at?: string;
};

const PatientList = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState({ full_name: "", phone: "", address: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recordsPerPage = 10;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axiosTenant.get("/patients/all-patient?api=true");
        setPatients(res.data.data);
      } catch {
        // Show error message in UI
        setPatients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredPatients(patients);
    } else {
      const lowerSearch = search.toLowerCase();
      setFilteredPatients(
        patients.filter((p) =>
          [p.name, p.phone, p.guardian_name, p.patient_record_id]
            .filter(Boolean)
            .some((field) => field?.toLowerCase().includes(lowerSearch))
        )
      );
    }
    setCurrentPage(1);
  }, [search, patients]);

  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleExportCSV = () => {
    exportToCSV(
      "patients.csv",
      [
        "Record ID", "Name", "Phone", "Guardian Name", "Guardian Phone",
        "Age", "Gender", "Blood Group", "Address", "TPA Validity", "Created At"
      ],
      filteredPatients.map((p) => [
        p.patient_record_id || "-",
        p.name || "-",
        p.phone || "-",
        p.guardian_name || "-",
        p.guardian_phone || "-",
        p.age || "-",
        p.gender || "-",
        p.blood_group || "-",
        p.address || "-",
        p.tpa_validity || "-",
        p.created_at || "-",
      ])
    );
  };

  const handleExportJSON = () => {
    exportToJSON("patients.json", filteredPatients);
  };

  const getInitials = (name?: string) => {
    if (!name) return "--";
    return name.slice(0, 2).toUpperCase();
  };

  const handleAddPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const formData = new FormData();
      formData.append("full_name", form.full_name);
      formData.append("phone", form.phone);
      formData.append("address", form.address);
  
      await axiosTenant.post("/patients/patient/add?api=true", formData);
  
      alert("Patient added successfully!");
      setShowAddModal(false);
      setLoading(true);
      const res = await axiosTenant.get("/patients/all-patient?api=true");
      setPatients(res.data.data);
    } catch (error) {
      alert(error?.response?.data?.error || "Error adding patient. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Patient List</h1>
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center w-full md:w-auto">
          <div className="flex gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-green-600 text-white border border-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
            >
              + Add Patient
            </button>
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
            placeholder="Search by name, phone, or record ID"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
          Loading patients...
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Record ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Guardian</th>
                <th className="px-6 py-4 text-left">Guardian Phone</th>
                <th className="px-6 py-4 text-left">Age</th>
                <th className="px-6 py-4 text-left">Gender</th>
                <th className="px-6 py-4 text-left">Blood Group</th>
                <th className="px-6 py-4 text-left">Address</th>
                <th className="px-6 py-4 text-left">TPA Validity</th>
                <th className="px-6 py-4 text-left">Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedPatients.length === 0 ? (
                <tr>
                  <td colSpan={12} className="p-10 text-center text-gray-500 text-lg">
                    No patients found.
                  </td>
                </tr>
              ) : (
                paginatedPatients.map((p, index) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.patient_record_id || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                        {getInitials(p.name)}
                      </span>
                      <span className="font-medium text-gray-900">{p.name || "-"}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.phone || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.guardian_name || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.guardian_phone || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.age || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.gender || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.blood_group || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.address || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{p.tpa_validity || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {p.created_at
                        ? new Date(p.created_at).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalItems={filteredPatients.length}
        itemsPerPage={recordsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Add Patient Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
            <form onSubmit={handleAddPatient}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Patient"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
