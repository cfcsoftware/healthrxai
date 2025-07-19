import React from "react";

const users = [
  {
    name: "Dr. Alice Smith",
    email: "alice@citygen.com",
    hospital: "City General Hospital",
    joined: "2024-05-12",
    status: "Active",
  },

];

const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-gray-100 text-gray-500",
};

const TransactionList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Transactions</h1>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Hospital
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Joined
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.email} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </span>
                  <span className="font-medium text-gray-900">{user.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {user.hospital}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {user.joined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor[user.status]}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 transition px-2">Edit</button>
                  <button className="text-red-500 hover:text-red-700 transition px-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="p-8 text-center text-gray-400">No users found.</div>
        )}
      </div>

      {/* Pagination (mockup) */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{users.length}</span> of{" "}
          <span className="font-medium">{users.length}</span> users
        </div>
        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
            disabled
          >
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="z-10 bg-blue-50 border-blue-600 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            1
          </button>
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
            disabled
          >
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TransactionList;
