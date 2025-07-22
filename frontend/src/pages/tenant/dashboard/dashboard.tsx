
const stats = [
  {
    label: "Hospitals Using",
    value: "500+",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-2xl shadow">
        🏥
      </span>
    ),
    change: "+5%",
    changeType: "up",
  },
  {
    label: "Beds Served",
    value: "10K+",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 text-2xl shadow">
        🛏️
      </span>
    ),
    change: "+2.1%",
    changeType: "up",
  },
  {
    label: "Reports Processed",
    value: "1M+",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 text-2xl shadow">
        📄
      </span>
    ),
    change: "+8.3%",
    changeType: "up",
  },
  {
    label: "Active Users",
    value: "2,300",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 text-2xl shadow">
        👤
      </span>
    ),
    change: "-1.2%",
    changeType: "down",
  },
  {
    label: "Revenue (Monthly)",
    value: "$120K",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 text-2xl shadow">
        💰
      </span>
    ),
    change: "+12%",
    changeType: "up",
  },
];

const recentHospitals = [
  {
    name: "City General Hospital",
    domain: "citygen.com",
    users: 120,
    status: "Active",
    joined: "2024-05-01",
  },
  {
    name: "Sunrise Medical Center",
    domain: "sunmed.org",
    users: 80,
    status: "Active",
    joined: "2024-04-15",
  },
  {
    name: "Green Valley Clinic",
    domain: "greenvalley.clinic",
    users: 45,
    status: "Pending",
    joined: "2024-05-10",
  },
  {
    name: "Metro Health",
    domain: "metrohealth.net",
    users: 200,
    status: "Active",
    joined: "2024-03-22",
  },
  {
    name: "Lakeside Hospital",
    domain: "lakesidehosp.com",
    users: 60,
    status: "Inactive",
    joined: "2024-02-10",
  },
];

const recentUsers = [
  {
    name: "Dr. Alice Smith",
    email: "alice@citygen.com",
    hospital: "City General Hospital",
    joined: "2024-05-12",
    status: "Active",
  },
  {
    name: "John Doe",
    email: "john@sunmed.org",
    hospital: "Sunrise Medical Center",
    joined: "2024-05-10",
    status: "Active",
  },
  {
    name: "Dr. Emily Green",
    email: "emily@greenvalley.clinic",
    hospital: "Green Valley Clinic",
    joined: "2024-05-09",
    status: "Pending",
  },
  {
    name: "Michael Brown",
    email: "michael@metrohealth.net",
    hospital: "Metro Health",
    joined: "2024-05-08",
    status: "Active",
  },
  {
    name: "Sarah Lee",
    email: "sarah@lakesidehosp.com",
    hospital: "Lakeside Hospital",
    joined: "2024-05-07",
    status: "Inactive",
  },
];

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-gray-100 text-gray-500",
};

const hospitalDashboard = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Admin Dashboard</h1>
        </div>
        {/* <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition">
            + Add Hospital
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium shadow hover:bg-gray-100 transition">
            View Analytics
          </button>
        </div> */}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            {stat.icon}
            <div className="mt-4 text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
            <div className="mt-2 flex items-center text-xs">
              {stat.changeType === "up" ? (
                <span className="text-green-600 mr-1">▲</span>
              ) : (
                <span className="text-red-600 mr-1">▼</span>
              )}
              <span className={stat.changeType === "up" ? "text-green-600" : "text-red-600"}>
                {stat.change}
              </span>
              <span className="ml-1 text-gray-400">this month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Hospitals Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Hospitals</h2>
            <a href="/saas/tenants" className="text-blue-600 text-sm hover:underline font-medium">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2 px-3 text-left font-medium">Name</th>
                  <th className="py-2 px-3 text-left font-medium">Domain</th>
                  <th className="py-2 px-3 text-center font-medium">Users</th>
                  <th className="py-2 px-3 text-center font-medium">Status</th>
                  <th className="py-2 px-3 text-center font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {recentHospitals.map((hosp, idx) => (
                  <tr key={hosp.domain} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-3 font-medium text-gray-900">{hosp.name}</td>
                    <td className="py-2 px-3 text-blue-600">{hosp.domain}</td>
                    <td className="py-2 px-3 text-center">{hosp.users}</td>
                    <td className="py-2 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${statusColor[hosp.status as keyof typeof statusColor]}`}
                      >
                        {hosp.status}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-center">{hosp.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Users</h2>
            <a href="/saas/users" className="text-blue-600 text-sm hover:underline font-medium">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2 px-3 text-left font-medium">Name</th>
                  <th className="py-2 px-3 text-left font-medium">Email</th>
                  <th className="py-2 px-3 text-left font-medium">Hospital</th>
                  <th className="py-2 px-3 text-center font-medium">Joined</th>
                  <th className="py-2 px-3 text-center font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, idx) => (
                  <tr key={user.email} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-2 px-3 font-medium text-gray-900">{user.name}</td>
                    <td className="py-2 px-3 text-blue-600">{user.email}</td>
                    <td className="py-2 px-3">{user.hospital}</td>
                    <td className="py-2 px-3 text-center">{user.joined}</td>
                    <td className="py-2 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${statusColor[user.status as keyof typeof statusColor]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* More sections: Analytics, Activity, etc. */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Analytics Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Analytics</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg. Daily Users</span>
              <span className="font-bold text-gray-900">1,200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg. Reports/Day</span>
              <span className="font-bold text-gray-900">4,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">System Uptime</span>
              <span className="font-bold text-green-600">99.98%</span>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
              View Detailed Analytics
            </button>
          </div>
        </div>
        {/* Activity Feed */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
          <ul className="divide-y divide-gray-100">
            <li className="py-2 flex items-start gap-2">
              <span className="text-blue-500 text-lg">🏥</span>
              <span>
                <span className="font-medium">City General Hospital</span> joined the platform.
                <span className="ml-2 text-xs text-gray-400">2 hours ago</span>
              </span>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-green-500 text-lg">👤</span>
              <span>
                <span className="font-medium">Dr. Alice Smith</span> created a new report.
                <span className="ml-2 text-xs text-gray-400">3 hours ago</span>
              </span>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-yellow-500 text-lg">📄</span>
              <span>
                <span className="font-medium">Report #12345</span> processed successfully.
                <span className="ml-2 text-xs text-gray-400">5 hours ago</span>
              </span>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-pink-500 text-lg">💰</span>
              <span>
                <span className="font-medium">Monthly payment</span> received from <span className="font-medium">Metro Health</span>.
                <span className="ml-2 text-xs text-gray-400">1 day ago</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default hospitalDashboard;
