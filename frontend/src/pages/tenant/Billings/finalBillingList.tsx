import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import Pagination from "../../../components/common/Pagination";
import SearchInput from "../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../components/common/ExportLogic";

type FinalBill = {
    id: number;
    patient_name: string;
    doctor_name: string | null;
    payment_type: string | null;
    total_bill_amount: string | null;
    total_paid_amount: string | null;
    total_due_amount: string | null;
    final_discount: string | null;
    final_billing_amount: string | null;
    created_at: string;
  };
  
  const FinalBillingList = () => {
    const [finalBills, setFinalBills] = useState<FinalBill[]>([]);
    const [filteredBills, setFilteredBills] = useState<FinalBill[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  
    useEffect(() => {
      const fetchFinalBills = async () => {
        try {
          const res = await axiosTenant.get("/billing/billing/final?api=true");
          setFinalBills(res.data.final_bills);
        } catch (err) {
          console.error("Error fetching final billing data", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchFinalBills();
    }, []);
  
    useEffect(() => {
      if (!search.trim()) {
        setFilteredBills(finalBills);
      } else {
        const query = search.toLowerCase();
        setFilteredBills(
          finalBills.filter((bill) =>
            [bill.patient_name, bill.doctor_name]
              .filter(Boolean)
              .some((field) => field?.toLowerCase().includes(query))
          )
        );
      }
      setCurrentPage(1);
    }, [search, finalBills]);
  
    const paginatedBills = filteredBills.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  
    const handleExportCSV = () => {
      exportToCSV(
        "final_billing.csv",
        [
          "Patient Name",
          "Doctor Name",
          "Payment Type",
          "Total Bill",
          "Paid",
          "Due",
          "Discount",
          "Final Amount",
          "Created At",
        ],
        filteredBills.map((b) => [
          b.patient_name,
          b.doctor_name || "-",
          b.payment_type || "-",
          b.total_bill_amount || "-",
          b.total_paid_amount || "-",
          b.total_due_amount || "-",
          b.final_discount || "-",
          b.final_billing_amount || "-",
          new Date(b.created_at).toLocaleDateString(),
        ])
      );
    };
  
    const handleExportJSON = () => {
      exportToJSON("final_billing.json", filteredBills);
    };
  
    const getInitials = (name: string | null | undefined) => {
      if (!name) return "--";
      return name.slice(0, 2).toUpperCase();
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Final Billing Records</h1>
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
              placeholder="Search by patient or doctor"
            />
          </div>
        </div>
  
        {loading ? (
          <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
            Loading final bills...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Total Bill</th>
                  <th className="px-6 py-4 text-left">Paid</th>
                  <th className="px-6 py-4 text-left">Due</th>
                  <th className="px-6 py-4 text-left">Discount</th>
                  <th className="px-6 py-4 text-left">Final Amount</th>
                  <th className="px-6 py-4 text-left">Payment Type</th>
                  <th className="px-6 py-4 text-left">Created At</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paginatedBills.map((b, index) => (
                  <tr key={b.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                        {getInitials(b.patient_name)}
                      </span>
                      <span className="font-medium text-gray-900">{b.patient_name}</span>
                    </td>
                    <td className="px-6 py-4">{b.doctor_name || "-"}</td>
                    <td className="px-6 py-4 text-gray-700">₹{b.total_bill_amount || "0"}</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">₹{b.total_paid_amount || "0"}</td>
                    <td className="px-6 py-4 text-red-600 font-semibold">₹{b.total_due_amount || "0"}</td>
                    <td className="px-6 py-4">{b.final_discount || "0"}%</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">₹{b.final_billing_amount || "0"}</td>
                    <td className="px-6 py-4 capitalize">{b.payment_type || "-"}</td>
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
  
            {filteredBills.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">No final billing records found.</div>
            )}
          </div>
        )}
  
        <Pagination
          currentPage={currentPage}
          totalItems={filteredBills.length}
          itemsPerPage={recordsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };
  
  export default FinalBillingList;