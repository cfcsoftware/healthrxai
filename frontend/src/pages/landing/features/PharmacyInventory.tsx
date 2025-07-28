import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, AlertTriangle, Package,  TrendingDown, MoreVertical, Eye, Edit, Trash2, Download, RefreshCw, Bell } from 'lucide-react';
import HomeLayout from '../../../layouts/HomeLayout';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  batchNumber: string;
  expiryDate: string;
  currentStock: number;
  minStockLevel: number;
  maxStockLevel: number;
  unitPrice: number;
  location: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Expired';
  lastUpdated: string;
}

const PharmacyInventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Sample inventory data
  const [inventoryData] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Amoxicillin 500mg',
      category: 'Antibiotics',
      manufacturer: 'PharmaCorp',
      batchNumber: 'AMX20241',
      expiryDate: '2025-12-15',
      currentStock: 150,
      minStockLevel: 50,
      maxStockLevel: 500,
      unitPrice: 12.50,
      location: 'A-12',
      status: 'In Stock',
      lastUpdated: '2025-07-26'
    },
    {
      id: '2',
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      manufacturer: 'MediPharm',
      batchNumber: 'IBU20242',
      expiryDate: '2025-08-30',
      currentStock: 25,
      minStockLevel: 30,
      maxStockLevel: 300,
      unitPrice: 8.75,
      location: 'B-05',
      status: 'Low Stock',
      lastUpdated: '2025-07-25'
    },
    {
      id: '3',
      name: 'Metformin 850mg',
      category: 'Diabetes',
      manufacturer: 'DiabetesRx',
      batchNumber: 'MET20243',
      expiryDate: '2026-03-22',
      currentStock: 0,
      minStockLevel: 40,
      maxStockLevel: 200,
      unitPrice: 15.25,
      location: 'C-08',
      status: 'Out of Stock',
      lastUpdated: '2025-07-24'
    },
    {
      id: '4',
      name: 'Lisinopril 10mg',
      category: 'Cardiovascular',
      manufacturer: 'HeartMeds',
      batchNumber: 'LIS20244',
      expiryDate: '2025-07-20',
      currentStock: 80,
      minStockLevel: 25,
      maxStockLevel: 150,
      unitPrice: 18.90,
      location: 'D-15',
      status: 'Expired',
      lastUpdated: '2025-07-23'
    },
    {
      id: '5',
      name: 'Omeprazole 20mg',
      category: 'Gastric',
      manufacturer: 'GastroPharm',
      batchNumber: 'OME20245',
      expiryDate: '2026-01-10',
      currentStock: 200,
      minStockLevel: 60,
      maxStockLevel: 400,
      unitPrice: 22.40,
      location: 'E-03',
      status: 'In Stock',
      lastUpdated: '2025-07-26'
    }
  ]);

  const categories = ['All', ...Array.from(new Set(inventoryData.map(item => item.category)))];
  const statuses = ['All', 'In Stock', 'Low Stock', 'Out of Stock', 'Expired'];

  const filteredData = useMemo(() => {
    const filtered = inventoryData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.batchNumber.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });

    // Sort data
    filtered.sort((a, b) => {
      const aValue: unknown = a[sortBy as keyof InventoryItem];
      const bValue: unknown = b[sortBy as keyof InventoryItem];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
  return aValue.toLowerCase().localeCompare(bValue.toLowerCase());
}
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [inventoryData, searchTerm, selectedCategory, selectedStatus, sortBy, sortOrder]);

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'In Stock':
        return `${baseClasses} bg-green-900/30 text-green-400 border border-green-800`;
      case 'Low Stock':
        return `${baseClasses} bg-yellow-900/30 text-yellow-400 border border-yellow-800`;
      case 'Out of Stock':
        return `${baseClasses} bg-red-900/30 text-red-400 border border-red-800`;
      case 'Expired':
        return `${baseClasses} bg-purple-900/30 text-purple-400 border border-purple-800`;
      default:
        return `${baseClasses} bg-gray-900/30 text-gray-400 border border-gray-800`;
    }
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handleSelectItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === filteredData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map(item => item.id));
    }
  };

  // Calculate summary stats
  const totalItems = inventoryData.length;
  const lowStockItems = inventoryData.filter(item => item.status === 'Low Stock').length;
  const outOfStockItems = inventoryData.filter(item => item.status === 'Out of Stock').length;
  const expiredItems = inventoryData.filter(item => item.status === 'Expired').length;

  return (
    <HomeLayout>
    <div className="min-h-screen pt-20 bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-gray-800 sticky top-0 z-40 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Pharmacy Inventory</h1>
              <p className="text-sm text-gray-400 mt-1">Manage your pharmaceutical inventory with precision</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Items</p>
                <p className="text-2xl font-bold text-white">{totalItems}</p>
              </div>
              <Package className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-400">{lowStockItems}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Out of Stock</p>
                <p className="text-2xl font-bold text-red-400">{outOfStockItems}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Expired</p>
                <p className="text-2xl font-bold text-purple-400">{expiredItems}</p>
              </div>
              <Bell className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, manufacturer, or batch number..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-blue-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-2 rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedItems.length === filteredData.length && filteredData.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-gray-100"
                      onClick={() => handleSort('name')}>
                    <div className="flex items-center space-x-1">
                      <span>Name</span>
                      {sortBy === 'name' && (
                        <span className="text-blue-400">
                          {sortOrder === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-gray-100"
                      onClick={() => handleSort('category')}>
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Batch & Expiry
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-gray-100"
                      onClick={() => handleSort('currentStock')}>
                    Stock Level
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer hover:text-gray-100"
                      onClick={() => handleSort('unitPrice')}>
                    Unit Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-medium text-gray-100">{item.name}</div>
                        <div className="text-sm text-gray-400">{item.manufacturer}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-300">{item.category}</td>
                    <td className="px-4 py-4">
                      <div className="text-sm">
                        <div className="text-gray-300">{item.batchNumber}</div>
                        <div className="text-gray-400">{item.expiryDate}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-100">{item.currentStock}</div>
                        <div className="text-gray-400">Min: {item.minStockLevel}</div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className={`h-2 rounded-full ${
                            item.currentStock <= item.minStockLevel
                              ? 'bg-red-500'
                              : item.currentStock <= item.minStockLevel * 1.5
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((item.currentStock / item.maxStockLevel) * 100, 100)}%` }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-300">${item.unitPrice.toFixed(2)}</td>
                    <td className="px-4 py-4">
                      <span className={getStatusBadge(item.status)}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-300">{item.location}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-green-400 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-200 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-400">
            Showing {filteredData.length} of {totalItems} items
            {selectedItems.length > 0 && (
              <span className="ml-2">({selectedItems.length} selected)</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded text-sm transition-colors">
              Previous
            </button>
            <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</span>
            <span className="px-3 py-1 text-gray-400 text-sm">2</span>
            <span className="px-3 py-1 text-gray-400 text-sm">3</span>
            <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded text-sm transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    </HomeLayout>
  );
};

export default PharmacyInventory;