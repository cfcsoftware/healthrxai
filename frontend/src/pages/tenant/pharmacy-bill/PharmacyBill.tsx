import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  FileText, 
  DollarSign,
  User,
  UserCheck,
  Clock,
  ChevronDown,
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface PharmacyBill {
  id: string;
  billNo: string;
  patientName: string;
  patientId: string;
  doctorName: string;
  medications: string[];
  totalAmount: number;
  paymentMode: 'Cash' | 'Card' | 'Insurance' | 'UPI';
  dischargeStatus: 'Pending' | 'Completed' | 'Cancelled';
  billDate: string;
  phoneNumber: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
}

const PharmacyBillPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('all');
  const [selectedBills, setSelectedBills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState<string>('billDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Mock data - in real app, this would come from an API
  const mockBills: PharmacyBill[] = [
    {
      id: '1',
      billNo: 'PB-2025-001',
      patientName: 'John Doe',
      patientId: 'P001',
      doctorName: 'Dr. Smith',
      medications: ['Paracetamol 500mg', 'Amoxicillin 250mg'],
      totalAmount: 1250.00,
      paymentMode: 'Card',
      dischargeStatus: 'Completed',
      billDate: '2025-07-11',
      phoneNumber: '+91 9876543210',
      age: 45,
      gender: 'Male'
    },
    {
      id: '2',
      billNo: 'PB-2025-002',
      patientName: 'Jane Smith',
      patientId: 'P002',
      doctorName: 'Dr. Johnson',
      medications: ['Aspirin 75mg', 'Metformin 500mg', 'Lisinopril 10mg'],
      totalAmount: 2100.00,
      paymentMode: 'Insurance',
      dischargeStatus: 'Pending',
      billDate: '2025-07-10',
      phoneNumber: '+91 9876543211',
      age: 32,
      gender: 'Female'
    },
    {
      id: '3',
      billNo: 'PB-2025-003',
      patientName: 'Mike Wilson',
      patientId: 'P003',
      doctorName: 'Dr. Brown',
      medications: ['Ibuprofen 400mg'],
      totalAmount: 450.00,
      paymentMode: 'Cash',
      dischargeStatus: 'Completed',
      billDate: '2025-07-09',
      phoneNumber: '+91 9876543212',
      age: 28,
      gender: 'Male'
    },
    {
      id: '4',
      billNo: 'PB-2025-004',
      patientName: 'Sarah Davis',
      patientId: 'P004',
      doctorName: 'Dr. Wilson',
      medications: ['Omeprazole 20mg', 'Simvastatin 40mg'],
      totalAmount: 890.00,
      paymentMode: 'UPI',
      dischargeStatus: 'Completed',
      billDate: '2025-07-08',
      phoneNumber: '+91 9876543213',
      age: 55,
      gender: 'Female'
    },
    {
      id: '5',
      billNo: 'PB-2025-005',
      patientName: 'Robert Johnson',
      patientId: 'P005',
      doctorName: 'Dr. Taylor',
      medications: ['Losartan 50mg', 'Amlodipine 5mg'],
      totalAmount: 1680.00,
      paymentMode: 'Insurance',
      dischargeStatus: 'Cancelled',
      billDate: '2025-07-07',
      phoneNumber: '+91 9876543214',
      age: 62,
      gender: 'Male'
    }
  ];

  const filteredBills = useMemo(() => {
    let filtered = mockBills.filter(bill => {
      const matchesSearch = bill.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bill.billNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           bill.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || bill.dischargeStatus === selectedStatus;
      const matchesPayment = selectedPaymentMode === 'all' || bill.paymentMode === selectedPaymentMode;
      
      return matchesSearch && matchesStatus && matchesPayment;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'billDate':
          aValue = new Date(a.billDate).getTime();
          bValue = new Date(b.billDate).getTime();
          break;
        case 'totalAmount':
          aValue = a.totalAmount;
          bValue = b.totalAmount;
          break;
        case 'patientName':
          aValue = a.patientName.toLowerCase();
          bValue = b.patientName.toLowerCase();
          break;
        default:
          aValue = a.billNo;
          bValue = b.billNo;
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [mockBills, searchTerm, selectedStatus, selectedPaymentMode, sortBy, sortOrder]);

  const paginatedBills = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBills.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBills, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredBills.length / itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentModeColor = (mode: string) => {
    switch (mode) {
      case 'Cash':
        return 'bg-blue-100 text-blue-800';
      case 'Card':
        return 'bg-purple-100 text-purple-800';
      case 'Insurance':
        return 'bg-indigo-100 text-indigo-800';
      case 'UPI':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSelectBill = (billId: string) => {
    setSelectedBills(prev => 
      prev.includes(billId) 
        ? prev.filter(id => id !== billId)
        : [...prev, billId]
    );
  };

  const handleSelectAll = () => {
    if (selectedBills.length === paginatedBills.length) {
      setSelectedBills([]);
    } else {
      setSelectedBills(paginatedBills.map(bill => bill.id));
    }
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const totalRevenue = filteredBills.reduce((sum, bill) => sum + bill.totalAmount, 0);

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pharmacy Bills</h1>
              <p className="text-sm text-gray-600 mt-1">Manage and track all pharmacy billing records</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Plus size={20} />
              Add New Bill
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bills</p>
                <p className="text-2xl font-bold text-gray-900">{filteredBills.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredBills.filter(b => b.dischargeStatus === 'Completed').length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <UserCheck className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredBills.filter(b => b.dischargeStatus === 'Pending').length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by patient name, bill number, or doctor..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-3">
              <select
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              
              <select
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={selectedPaymentMode}
                onChange={(e) => setSelectedPaymentMode(e.target.value)}
              >
                <option value="all">All Payment Modes</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Insurance">Insurance</option>
                <option value="UPI">UPI</option>
              </select>
              
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedBills.length === paginatedBills.length && paginatedBills.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('billNo')}
                  >
                    <div className="flex items-center gap-2">
                      Bill No.
                      <ChevronDown size={16} className={`transform transition-transform ${sortBy === 'billNo' && sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('patientName')}
                  >
                    <div className="flex items-center gap-2">
                      Patient Details
                      <ChevronDown size={16} className={`transform transition-transform ${sortBy === 'patientName' && sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medications
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('totalAmount')}
                  >
                    <div className="flex items-center gap-2">
                      Amount
                      <ChevronDown size={16} className={`transform transition-transform ${sortBy === 'totalAmount' && sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Mode
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('billDate')}
                  >
                    <div className="flex items-center gap-2">
                      Date
                      <ChevronDown size={16} className={`transform transition-transform ${sortBy === 'billDate' && sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedBills.map((bill) => (
                  <tr key={bill.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedBills.includes(bill.id)}
                        onChange={() => handleSelectBill(bill.id)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{bill.billNo}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-full p-2 mr-3">
                          <User size={16} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{bill.patientName}</div>
                          <div className="text-sm text-gray-500">ID: {bill.patientId} • {bill.age}y • {bill.gender}</div>
                          <div className="text-sm text-gray-500">{bill.phoneNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{bill.doctorName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {bill.medications.slice(0, 2).map((med, idx) => (
                          <div key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded mb-1">
                            {med}
                          </div>
                        ))}
                        {bill.medications.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{bill.medications.length - 2} more
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">₹{bill.totalAmount.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentModeColor(bill.paymentMode)}`}>
                        {bill.paymentMode}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(bill.dischargeStatus)}`}>
                        {bill.dischargeStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{new Date(bill.billDate).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-800 p-1 hover:bg-green-50 rounded transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredBills.length)} of {filteredBills.length} results
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 border rounded text-sm ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default PharmacyBillPage;