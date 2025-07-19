import React, { useEffect, useState } from "react";
import api from "../../lib/axios"; 
import Pagination from "../../components/common/Pagination";
import { exportToCSV, exportToJSON } from "../../components/common/ExportLogic";
import SearchInput from "../../components/common/SearchInput";

type User = {
  id: number;
  email: string;
  fullname: string | null;
  contact: number;
  message: string;
  createdat: Date;
};


const SupportLeadList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/saas/users?api=true");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter(
          (user) =>
            (user.fullname &&
              user.fullname.toLowerCase().includes(search.toLowerCase())) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setCurrentPage(1);
  }, [search, users]);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleExportCSV = () => {
    exportToCSV(
      "users.csv",
      ["Username", "Email", "Joined", "Status"],
      filteredUsers.map((u) => [
        u.fullname ?? "",
        u.email,
        new Date(u.createdat).toLocaleDateString(),
      ])
    );
  };

  const handleExportJSON = () => {
    exportToJSON("users.json", filteredUsers);
  };

  const getInitials = (username: string | null | undefined) => {
    if (!username) return "--";
    return username.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
          All Enquiries
        </h1>
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
            placeholder="Search by name or email"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-gray-500 text-lg font-medium">Loading users...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date Joined</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedUsers.map((user) => {
                return (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg uppercase">
                        {getInitials(user.fullname)}
                      </span>
                      <span className="font-medium text-gray-900">{user.fullname}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {new Date(user.createdat).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <div className="p-12 text-center text-gray-400 text-lg font-medium">
              No users found matching your criteria.
            </div>
          )}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalItems={filteredUsers.length}
        itemsPerPage={recordsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SupportLeadList;
