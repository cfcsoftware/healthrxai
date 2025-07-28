"use client";
import React, { useState, } from "react";
import { 
  Search, 
  Eye, 
  Edit, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  CreditCard, 
  Users, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Shield
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import HomeLayout from "../../../layouts/HomeLayout";

const EnterpriseBilling = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data
  const revenueData = [
    { month: "Jan", revenue: 85000, expenses: 45000 },
    { month: "Feb", revenue: 92000, expenses: 48000 },
    { month: "Mar", revenue: 98000, expenses: 52000 },
    { month: "Apr", revenue: 105000, expenses: 55000 },
    { month: "May", revenue: 112000, expenses: 58000 },
    { month: "Jun", revenue: 128000, expenses: 62000 }
  ];

  const paymentMethodData = [
    { name: "Insurance", value: 45, color: "#3B82F6" },
    { name: "Cash", value: 25, color: "#10B981" },
    { name: "Card", value: 20, color: "#F59E0B" },
    { name: "UPI", value: 10, color: "#8B5CF6" }
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      patient: "John Doe",
      amount: 2500,
      status: "paid",
      date: "2024-07-25",
      type: "OPD",
      insurance: "Blue Cross"
    },
    {
      id: "INV-2024-002",
      patient: "Sarah Wilson",
      amount: 15750,
      status: "pending",
      date: "2024-07-24",
      type: "IPD",
      insurance: "Medicare"
    },
    {
      id: "INV-2024-003",
      patient: "Mike Johnson",
      amount: 850,
      status: "overdue",
      date: "2024-07-20",
      type: "OPD",
      insurance: null
    },
    {
      id: "INV-2024-004",
      patient: "Emma Davis",
      amount: 5200,
      status: "processing",
      date: "2024-07-26",
      type: "Emergency",
      insurance: "Aetna"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "paid": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "pending": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "overdue": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "processing": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "paid": return <CheckCircle className="w-4 h-4" />;
      case "pending": return <Clock className="w-4 h-4" />;
      case "overdue": return <AlertCircle className="w-4 h-4" />;
      case "processing": return <Zap className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || invoice.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleInvoiceSelection = (invoiceId) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId) 
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  return (
    <HomeLayout>
    <div className="min-h-screen bg-gradient-to-br pt-20 from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
   

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
          {[
            { id: "overview", label: "Overview", icon: TrendingUp },
            { id: "invoices", label: "Invoices", icon: FileText },
            { id: "payments", label: "Payments", icon: CreditCard },
            { id: "analytics", label: "Analytics", icon: DollarSign }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Revenue",
                  value: "$128,500",
                  change: "+12.5%",
                  trend: "up",
                  icon: DollarSign,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Outstanding",
                  value: "$23,750",
                  change: "-8.2%",
                  trend: "down",
                  icon: AlertCircle,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Processed Today",
                  value: "47",
                  change: "+18.3%",
                  trend: "up",
                  icon: FileText,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Active Patients",
                  value: "342",
                  change: "+5.7%",
                  trend: "up",
                  icon: Users,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((kpi, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${kpi.color}`}>
                      <kpi.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      kpi.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}>
                      {kpi.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {kpi.change}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{kpi.value}</h3>
                  <p className="text-slate-400 text-sm">{kpi.title}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Revenue Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                    <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Payment Methods */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                  Payment Methods
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={paymentMethodData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {paymentMethodData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === "invoices" && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search invoices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                  <option value="processing">Processing</option>
                </select>
              </div>
              {selectedInvoices.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">{selectedInvoices.length} selected</span>
                  <button className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors">
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Invoices Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left p-4 text-slate-300 font-medium">
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedInvoices(filteredInvoices.map(inv => inv.id));
                            } else {
                              setSelectedInvoices([]);
                            }
                          }}
                          className="rounded border-slate-600 bg-slate-700"
                        />
                      </th>
                      <th className="text-left p-4 text-slate-300 font-medium">Invoice ID</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Patient</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Amount</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Status</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Type</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Date</th>
                      <th className="text-left p-4 text-slate-300 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={selectedInvoices.includes(invoice.id)}
                            onChange={() => toggleInvoiceSelection(invoice.id)}
                            className="rounded border-slate-600 bg-slate-700"
                          />
                        </td>
                        <td className="p-4 font-mono text-blue-400">{invoice.id}</td>
                        <td className="p-4">
                          <div>
                            <div className="font-medium text-white">{invoice.patient}</div>
                            {invoice.insurance && (
                              <div className="text-sm text-slate-400 flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                {invoice.insurance}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="p-4 font-semibold text-green-400">${invoice.amount.toLocaleString()}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                            {getStatusIcon(invoice.status)}
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs font-medium">
                            {invoice.type}
                          </span>
                        </td>
                        <td className="p-4 text-slate-400">{invoice.date}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-slate-700 rounded transition-colors">
                              <Eye className="w-4 h-4 text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-slate-700 rounded transition-colors">
                              <Edit className="w-4 h-4 text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-slate-700 rounded transition-colors">
                              <MoreVertical className="w-4 h-4 text-slate-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === "payments" && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold mb-4">Payment Processing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-2">Successful Payments</h4>
                  <p className="text-2xl font-bold">$45,230</p>
                  <p className="text-sm text-slate-400">Today</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="font-medium text-yellow-400 mb-2">Pending Payments</h4>
                  <p className="text-2xl font-bold">$12,450</p>
                  <p className="text-sm text-slate-400">Awaiting confirmation</p>
                </div>
                <div className="p-4 bg-slate-700/30 rounded-lg">
                  <h4 className="font-medium text-red-400 mb-2">Failed Payments</h4>
                  <p className="text-2xl font-bold">$2,180</p>
                  <p className="text-sm text-slate-400">Requires attention</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }} />
                    <Bar dataKey="revenue" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold mb-4">Financial Insights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Average Invoice Value</span>
                    <span className="font-semibold text-green-400">$3,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Collection Rate</span>
                    <span className="font-semibold text-blue-400">94.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Days in AR</span>
                    <span className="font-semibold text-yellow-400">28 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Insurance Claims Rate</span>
                    <span className="font-semibold text-purple-400">78.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </HomeLayout>
  );
};

export default EnterpriseBilling;