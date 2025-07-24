import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import Pagination from "../../../components/common/Pagination";
import SearchInput from "../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../components/common/ExportLogic";


type Billing = {
    id: number;
    billing_record_id: string;
    bill_type: string;
    service_type: string;
    subtotal: string;
    amount_paid: string;
    amount_due: string;
    discount_percentage: string;
    round_off: string;
    payment_mode: string;
    created_at: string;
    patient: {
      name: string;
      patient_record_id: string;
      phone: string;
    };
    doctor: {
      name: string;
    };
  };
  
  const BillingList = () => {
    const [billings, setBillings] = useState<Billing[]>([]);
    const [filteredBillings, setFilteredBillings] = useState<Billing[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  
    useEffect(() => {
      const fetchBillings = async () => {
        try {
          const res = await axiosTenant.get("/billing/billing?api=true");
          setBillings(res.data.data);
        } catch (err) {
          console.error("Error fetching billing data", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBillings();
    }, []);
  
    useEffect(() => {
      if (!search.trim()) {
        setFilteredBillings(billings);
      } else {
        const query = search.toLowerCase();
        setFilteredBillings(
          billings.filter((b) =>
            [b.billing_record_id, b.patient?.name, b.patient?.patient_record_id, b.patient?.phone]
              .filter(Boolean)
              .some((field) => field?.toLowerCase().includes(query))
          )
        );
      }
      setCurrentPage(1);
    }, [search, billings]);
  
    const paginatedBillings = filteredBillings.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  
    const handleExportCSV = () => {
      exportToCSV(
        "billings.csv",
        [
          "Billing ID",
          "Patient Name",
          "Record ID",
          "Doctor",
          "Type",
          "Service",
          "Subtotal",
          "Paid",
          "Due",
          "Discount (%)",
          "Round Off",
          "Payment Mode",
          "Created At",
        ],
        filteredBillings.map((b) => [
          b.billing_record_id,
          b.patient?.name || "-",
          b.patient?.patient_record_id || "-",
          b.doctor?.name || "-",
          b.bill_type,
          b.service_type,
          b.subtotal,
          b.amount_paid,
          b.amount_due,
          b.discount_percentage,
          b.round_off,
          b.payment_mode,
          new Date(b.created_at).toLocaleDateString(),
        ])
      );
    };
  
    const handleExportJSON = () => {
      exportToJSON("billings.json", filteredBillings);
    };
  
    const getInitials = (name: string | null | undefined) => {
      if (!name) return "--";
      return name.slice(0, 2).toUpperCase();
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Billing Records</h1>
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
              placeholder="Search by patient name or billing ID"
            />
          </div>
        </div>
  
        {loading ? (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
            Loading billing records...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Billing ID</th>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Paid</th>
                  <th className="px-6 py-4 text-left">Due</th>
                  <th className="px-6 py-4 text-left">Discount (%)</th>
                  <th className="px-6 py-4 text-left">Mode</th>
                  <th className="px-6 py-4 text-left">Created At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paginatedBillings.map((b, index) => (
                  <tr key={b.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                    <td className="px-6 py-4">{b.billing_record_id}</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                        {getInitials(b.patient?.name)}
                      </span>
                      <div>
                        <div className="font-medium text-gray-900">{b.patient?.name}</div>
                        <div className="text-sm text-gray-500">{b.patient?.patient_record_id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{b.doctor?.name || "-"}</td>
                    <td className="px-6 py-4">{b.bill_type}</td>
                    <td className="px-6 py-4">{b.service_type}</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">₹{b.amount_paid}</td>
                    <td className="px-6 py-4 text-red-600 font-semibold">₹{b.amount_due}</td>
                    <td className="px-6 py-4">{b.discount_percentage}%</td>
                    <td className="px-6 py-4 capitalize">{b.payment_mode}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(b.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {filteredBillings.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">No billing records found.</div>
            )}
          </div>
        )}
  
        <Pagination
          currentPage={currentPage}
          totalItems={filteredBillings.length}
          itemsPerPage={recordsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };
  
  export default BillingList;