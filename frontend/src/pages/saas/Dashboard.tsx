"use client"
import React, { useState } from 'react';
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  Users, 
  DollarSign, 
  Activity,
  Calendar,
  User,
  Filter,
  Search,
  MoreVertical,
  Plus,
  Download,
  ArrowUp,
  ArrowDown,
  Eye,
  Edit,
  ChevronDown,
  Bell,
  Settings,
  LogOut,
	Menu,
} from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const monthlyData = [
  { month: 'Jan', patients: 1200, revenue: 45000, appointments: 850 },
  { month: 'Feb', patients: 1450, revenue: 52000, appointments: 1020 },
  { month: 'Mar', patients: 1600, revenue: 58000, appointments: 1150 },
  { month: 'Apr', patients: 1350, revenue: 49000, appointments: 980 },
  { month: 'May', patients: 1800, revenue: 65000, appointments: 1280 },
  { month: 'Jun', patients: 1650, revenue: 59000, appointments: 1190 },
  { month: 'Jul', patients: 1920, revenue: 72000, appointments: 1350 },
  { month: 'Aug', patients: 1750, revenue: 64000, appointments: 1220 },
  { month: 'Sep', patients: 1650, revenue: 58000, appointments: 1180 },
  { month: 'Oct', patients: 1850, revenue: 68000, appointments: 1300 },
  { month: 'Nov', patients: 1600, revenue: 55000, appointments: 1120 },
  { month: 'Dec', patients: 1950, revenue: 75000, appointments: 1400 },
];

const departmentData = [
  { name: 'Cardiology', value: 32, color: '#3B82F6' },
  { name: 'Pediatrics', value: 24, color: '#10B981' },
  { name: 'Emergency', value: 18, color: '#F59E0B' },
  { name: 'Surgery', value: 16, color: '#EF4444' },
  { name: 'Neurology', value: 10, color: '#8B5CF6' },
];

const recentTransactions = [
  { id: 1, patient: 'John Doe', department: 'Cardiology', doctor: 'Dr. Smith', admission: '2024-06-01', status: 'Admitted', amount: 1200, severity: 'low' },
  { id: 2, patient: 'Jane Smith', department: 'Pediatrics', doctor: 'Dr. Lee', admission: '2024-06-10', status: 'Under Observation', amount: 850, severity: 'medium' },
  { id: 3, patient: 'Michael Brown', department: 'Emergency', doctor: 'Dr. Carter', admission: '2024-05-28', status: 'Critical', amount: 2400, severity: 'high' },
  { id: 4, patient: 'Sarah Johnson', department: 'Surgery', doctor: 'Dr. Wilson', admission: '2024-06-05', status: 'Recovering', amount: 3200, severity: 'low' },
  { id: 5, patient: 'David Chen', department: 'Neurology', doctor: 'Dr. Kumar', admission: '2024-06-12', status: 'Stable', amount: 1800, severity: 'medium' },
];

const recentSurgeries = [
  { id: 1, type: 'Knee Replacement', doctor: 'Dr. Adams', date: 'Today, 9:00 AM', price: 8500, status: 'Scheduled', urgency: 'medium' },
  { id: 2, type: 'Heart Bypass', doctor: 'Dr. Smith', date: 'Yesterday, 2:00 PM', price: 15000, status: 'Completed', urgency: 'high' },
  { id: 3, type: 'Cataract Surgery', doctor: 'Dr. Lee', date: '2 days ago, 11:30 AM', price: 3200, status: 'Completed', urgency: 'low' },
  { id: 4, type: 'Brain Tumor Removal', doctor: 'Dr. Patel', date: 'Today, 8:00 AM', price: 22000, status: 'Scheduled', urgency: 'high' },
];

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}
const Topbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Healthcare Management System</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search patients, doctors, or records..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Notifications, Settings, Profile */}
        <div className="flex items-center space-x-2">
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">3</span>
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings size={20} />
          </button>

          <div className="relative">
            <button 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <span className="hidden md:block text-sm font-medium">Admin User</span>
              <ChevronDown size={16} />
            </button>
            
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <hr className="my-2 border-gray-200" />
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-red-600">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon: Icon, color, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
      <div className="text-right">
        <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="text-sm font-medium">{change}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">vs last month</p>
      </div>
    </div>
  </div>
);

const ChartCard: React.FC<ChartCardProps> = ({ title, children, actions }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {actions && (
        <div className="flex items-center space-x-2">
          {actions}
        </div>
      )}
    </div>
    {children}
  </div>
);

interface StatusBadgeProps {
  status: string;
  severity?: string;
} 

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, severity }) => {
  const colors = {
    'Admitted': 'bg-green-100 text-green-800',
    'Under Observation': 'bg-yellow-100 text-yellow-800',
    'Critical': 'bg-red-100 text-red-800',
    'Recovering': 'bg-blue-100 text-blue-800',
    'Stable': 'bg-emerald-100 text-emerald-800',
    'Scheduled': 'bg-orange-100 text-orange-800',
    'Completed': 'bg-green-100 text-green-800',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`} title={severity}>
      {status}
      
    </span>
  );
};

export default function AdminDashboard() {
 const [timeRange, setTimeRange] = useState<'monthly' | 'weekly' | 'daily'>('monthly');

  return (
        <AdminLayout>

    <div className="min-h-screen bg-gray-50 ">
      
      {/* Main Content */}
      <Topbar />
      <div className="p-6 space-y-6 ">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin</h1>
          <p className="text-gray-600">Here's what's happening with your healthcare system today.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Patients"
            value="12,458"
            change="+12.5%"
            icon={Users}
            color="bg-blue-500"
            trend="up"
          />
          <StatCard
            title="Monthly Revenue"
            value="$864,2000"
            change="+8.2%"
            icon={DollarSign}
            color="bg-emerald-500"
            trend="up"
          />
          <StatCard
            title="Appointments"
            value="1,342"
            change="+5.7%"
            icon={Calendar}
            color="bg-purple-500"
            trend="up"
          />
          <StatCard
            title="Active Sessions"
            value="287"
            change="-2.3%"
            icon={Activity}
            color="bg-orange-500"
            trend="down"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Monthly Analytics */}
          <div className="lg:col-span-2">
            <ChartCard 
              title="Monthly Analytics"
              actions={
                <select 
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as 'monthly' | 'weekly' | 'daily')}

                >
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </select>
              }
            >
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [value.toLocaleString(), 'Patients']} />
                  <Area 
                    type="monotone" 
                    dataKey="patients" 
                    stroke="#3B82F6" 
                    fillOpacity={1}
                    fill="url(#patientGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Department Distribution */}
          <div>
            <ChartCard title="Department Distribution">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {departmentData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.value}%</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Surgeries */}
          <ChartCard 
            title="Recent Surgeries"
            actions={
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Plus size={16} />
                <span>New Surgery</span>
              </button>
            }
          >
            <div className="space-y-3">
              {recentSurgeries.map((surgery) => (
                <div key={surgery.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${surgery.urgency === 'high' ? 'bg-red-500' : surgery.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{surgery.type}</p>
                      <p className="text-sm text-gray-500">{surgery.doctor} • {surgery.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusBadge status={surgery.status} />
                    <p className="text-sm font-medium text-gray-900 mt-1">${surgery.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Recent Appointments */}
          <ChartCard 
            title="Recent Appointments"
            actions={
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar size={16} />
                <span>Schedule New</span>
              </button>
            }
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">Dental Checkup</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">2:30 PM</p>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Jane Smith</p>
                    <p className="text-sm text-gray-500">Eye Examination</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">10:15 AM</p>
                  <p className="text-sm text-gray-500">Tomorrow</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Michael Brown</p>
                    <p className="text-sm text-gray-500">Physical Therapy</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">3:45 PM</p>
                  <p className="text-sm text-gray-500">Friday</p>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Recent Transactions */}
        <ChartCard 
          title="Recent Transactions"
          actions={
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Patient</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Department</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Doctor</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Amount</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <User size={16} className="text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-900">{transaction.patient}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{transaction.department}</td>
                    <td className="py-3 px-4 text-gray-600">{transaction.doctor}</td>
                    <td className="py-3 px-4 text-gray-600">{transaction.admission}</td>
                    <td className="py-3 px-4">
                      <StatusBadge status={transaction.status} severity={transaction.severity} />
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-gray-900">
                      ${transaction.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit size={16} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      </div>
      
    </div>
        </AdminLayout>

  );
}