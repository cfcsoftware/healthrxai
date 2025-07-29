import React from 'react';
import { Activity, Building2, Bed, FileText, Users, DollarSign, TrendingUp, TrendingDown, ArrowRight, Shield, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const HealthRxDashboard = () => {
  const stats = [
    {
      label: "Hospitals Using",
      value: "500+",
      icon: Building2,
      change: "+5%",
      changeType: "up",
      bgColor: "bg-white",
      iconBg: "bg-blue-500",
      borderColor: "border-blue-100",
    },
    {
      label: "Beds Served",
      value: "10K+",
      icon: Bed,
      change: "+2.1%",
      changeType: "up",
      bgColor: "bg-white",
      iconBg: "bg-green-500",
      borderColor: "border-green-100",
    },
    {
      label: "Reports Processed",
      value: "1M+",
      icon: FileText,
      change: "+8.3%",
      changeType: "up",
      bgColor: "bg-white",
      iconBg: "bg-blue-600",
      borderColor: "border-blue-100",
    },
    {
      label: "Active Users",
      value: "2,300",
      icon: Users,
      change: "-1.2%",
      changeType: "down",
      bgColor: "bg-white",
      iconBg: "bg-green-600",
      borderColor: "border-green-100",
    },
    {
      label: "Revenue (Monthly)",
      value: "$120K",
      icon: DollarSign,
      change: "+12%",
      changeType: "up",
      bgColor: "bg-white",
      iconBg: "bg-blue-700",
      borderColor: "border-blue-100",
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

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Inactive':
        return 'bg-gray-50 text-gray-600 border-gray-200';
      default:
        return '';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case 'Pending':
        return <Clock className="w-3 h-3 text-blue-500" />;
      case 'Inactive':
        return <AlertTriangle className="w-3 h-3 text-gray-500" />;
      default:
        return null;
    }
  };

  const activities = [
    {
      icon: Building2,
      text: "City General Hospital joined the platform",
      detail: "New healthcare partner onboarded",
      time: "2 hours ago",
      iconBg: "bg-blue-500",
      dotColor: "bg-blue-400"
    },
    {
      icon: Users,
      text: "Dr. Alice Smith created a new report",
      detail: "Patient care documentation updated",
      time: "3 hours ago",
      iconBg: "bg-green-500",
      dotColor: "bg-green-400"
    },
    {
      icon: FileText,
      text: "Report #12345 processed successfully",
      detail: "AI analysis completed with 98% accuracy",
      time: "5 hours ago",
      iconBg: "bg-blue-600",
      dotColor: "bg-blue-400"
    },
    {
      icon: DollarSign,
      text: "Monthly payment received from Metro Health",
      detail: "Subscription renewed automatically",
      time: "1 day ago",
      iconBg: "bg-green-600",
      dotColor: "bg-green-400"
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="p-1 mx-auto">
        {/* Header */}
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  HealthRx AI
                </h1>
                <p className="text-gray-600 text-lg mb-2">
                  Intelligent Healthcare Management Platform
                </p>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">HIPAA Compliant & Secure</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition-all duration-200 hover:shadow-md">
                Add Patient
              </button>
              <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-sm">
                View Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${stat.bgColor} rounded-xl p-6 shadow-sm border ${stat.borderColor} hover:shadow-md transition-all duration-200 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.iconBg} text-white group-hover:scale-105 transition-transform duration-200`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    {stat.changeType === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={stat.changeType === "up" ? "text-green-600" : "text-red-500"}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Recent Hospitals Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Recent Hospitals</h2>
                  <p className="text-gray-600 text-sm mt-1">Latest healthcare partners</p>
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group transition-colors text-sm">
                  View all
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/30">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Hospital
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Users
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentHospitals.map((hospital, index) => (
                    <tr key={hospital.domain} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-900">{hospital.name}</div>
                          <div className="text-blue-600 text-sm font-medium">{hospital.domain}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-semibold text-gray-900">{hospital.users}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyles(hospital.status)}`}>
                          {getStatusIcon(hospital.status)}
                          {hospital.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {hospital.joined}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Users Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                  <p className="text-gray-600 text-sm mt-1">New platform members</p>
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group transition-colors text-sm">
                  View all
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50/30">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Hospital
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentUsers.map((user, index) => (
                    <tr key={user.email} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-gray-900">{user.name}</div>
                          <div className="text-blue-600 text-sm font-medium">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {user.hospital}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyles(user.status)}`}>
                          {getStatusIcon(user.status)}
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

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Analytics Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-green-500 text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Platform Analytics</h3>
                <p className="text-gray-600 text-sm">Real-time performance metrics</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-blue-50 border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Daily Active Users</span>
                  <span className="font-bold text-2xl text-blue-600">1,200</span>
                </div>
                <div className="text-sm text-blue-600 font-medium">↗ +15% from last week</div>
              </div>
              <div className="p-5 rounded-lg bg-green-50 border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Reports Processed</span>
                  <span className="font-bold text-2xl text-green-600">4,500</span>
                </div>
                <div className="text-sm text-green-600 font-medium">↗ +8% from last week</div>
              </div>
              <div className="p-5 rounded-lg bg-green-50 border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">System Uptime</span>
                  <span className="font-bold text-2xl text-green-600">99.98%</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Operational
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
              View Detailed Analytics
            </button>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-blue-600 text-white">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                <p className="text-gray-600 text-sm">Latest platform events</p>
              </div>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="relative flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                    {index < activities.length - 1 && (
                      <div className="absolute left-7 top-16 w-0.5 h-8 bg-gray-200"></div>
                    )}
                    <div className={`relative p-2.5 rounded-lg ${activity.iconBg} text-white shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className="w-4 h-4" />
                      <div className={`absolute -top-1 -right-1 w-3 h-3 ${activity.dotColor} rounded-full border-2 border-white`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-sm">{activity.text}</p>
                      <p className="text-gray-600 text-xs mt-1">{activity.detail}</p>
                      <p className="text-gray-500 text-xs mt-2 font-medium">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
              View All Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRxDashboard;