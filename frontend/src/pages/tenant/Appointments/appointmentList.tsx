import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import Pagination from "../../../components/common/Pagination";
import SearchInput from "../../../components/common/SearchInput";
import { exportToCSV, exportToJSON } from "../../../components/common/ExportLogic";


type Appointment = {
    id: number;
    appointment_record_id: string;
    appointment_date: string;
    appointment_time: string;
    payment_mode: string | null;
    total_payment: string;
    due_payment: string;
    doctor: {
      name: string;
      email: string;
      phone: string;
    };
    patient: {
      name: string;
      phone: string;
      age: string;
      gender: string;
      blood_group: string;
    };
    created_at: string;
  };
  
  const AppointmentList = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
  
    useEffect(() => {
      const fetchAppointments = async () => {
        try {
          const res = await axiosTenant.get("/appointments/appointment?api=true");
          setAppointments(res.data.data);
        } catch (err) {
          console.error("Error fetching appointments", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAppointments();
    }, []);
  
    useEffect(() => {
      if (!search.trim()) {
        setFilteredAppointments(appointments);
      } else {
        const q = search.toLowerCase();
        setFilteredAppointments(
          appointments.filter((apt) =>
            [apt.patient.name, apt.doctor.name, apt.appointment_record_id]
              .filter(Boolean)
              .some((field) => field?.toLowerCase().includes(q))
          )
        );
      }
      setCurrentPage(1);
    }, [search, appointments]);
  
    const paginatedAppointments = filteredAppointments.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );
  
    const handleExportCSV = () => {
      exportToCSV(
        "appointments.csv",
        [
          "Appointment ID",
          "Patient",
          "Doctor",
          "Date",
          "Time",
          "Payment Mode",
          "Total",
          "Due",
        ],
        filteredAppointments.map((apt) => [
          apt.appointment_record_id,
          apt.patient.name,
          apt.doctor.name,
          apt.appointment_date,
          apt.appointment_time,
          apt.payment_mode || "-",
          apt.total_payment,
          apt.due_payment,
        ])
      );
    };
  
    const handleExportJSON = () => {
      exportToJSON("appointments.json", filteredAppointments);
    };
  
    const getInitials = (name: string | null | undefined) => {
      if (!name) return "--";
      return name.slice(0, 2).toUpperCase();
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Appointments</h1>
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
            Loading appointments...
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-xs font-bold text-gray-600 uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Appointment ID</th>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Time</th>
                  <th className="px-6 py-4 text-left">Payment Mode</th>
                  <th className="px-6 py-4 text-left">Total</th>
                  <th className="px-6 py-4 text-left">Due</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paginatedAppointments.map((apt, index) => (
                  <tr key={apt.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      {(currentPage - 1) * recordsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4">{apt.appointment_record_id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                        {getInitials(apt.patient.name)}
                      </span>
                      {apt.patient.name}
                    </td>
                    <td className="px-6 py-4">{apt.doctor.name}</td>
                    <td className="px-6 py-4">{apt.appointment_date}</td>
                    <td className="px-6 py-4">{apt.appointment_time}</td>
                    <td className="px-6 py-4 capitalize">{apt.payment_mode || "-"}</td>
                    <td className="px-6 py-4 text-green-700 font-semibold">₹{apt.total_payment}</td>
                    <td className="px-6 py-4 text-red-600 font-semibold">₹{apt.due_payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {filteredAppointments.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">
                No appointments found.
              </div>
            )}
          </div>
        )}
  
        <Pagination
          currentPage={currentPage}
          totalItems={filteredAppointments.length}
          itemsPerPage={recordsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };
  
  export default AppointmentList;