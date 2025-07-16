import React, { useState } from 'react';
import { Search, Filter, Calendar, User, FileText, Stethoscope, Pill, X, ChevronDown, Clock, MapPin,  Activity } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

const HospitalGlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'John Doe patient',
    'Cardiology appointments',
    'Lab results pending',
    'Dr. Smith schedule'
  ]);

  // Mock data for demonstration
  const mockResults = [
    {
      id: 1,
      type: 'patient',
      title: 'John Doe',
      subtitle: 'Patient ID: P001234',
      details: 'Age: 45, Blood Type: O+',
      status: 'Active',
      lastActivity: '2 hours ago',
      department: 'Cardiology',
      icon: User,
      priority: 'high'
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Cardiology Consultation',
      subtitle: 'Dr. Sarah Johnson',
      details: 'Today, 2:30 PM - Room 205',
      status: 'Scheduled',
      lastActivity: '1 hour ago',
      department: 'Cardiology',
      icon: Calendar,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'lab',
      title: 'Blood Test Results',
      subtitle: 'Patient: Jane Smith',
      details: 'CBC, Lipid Panel - Ready for Review',
      status: 'Pending Review',
      lastActivity: '30 minutes ago',
      department: 'Laboratory',
      icon: FileText,
      priority: 'high'
    },
    {
      id: 4,
      type: 'medication',
      title: 'Prescription Update',
      subtitle: 'Metformin 500mg',
      details: 'Patient: Robert Wilson - Refill Required',
      status: 'Action Required',
      lastActivity: '4 hours ago',
      department: 'Pharmacy',
      icon: Pill,
      priority: 'medium'
    },
    {
      id: 5,
      type: 'doctor',
      title: 'Dr. Michael Chen',
      subtitle: 'Orthopedic Surgeon',
      details: 'Available Today - 6 appointments',
      status: 'Available',
      lastActivity: 'Online now',
      department: 'Orthopedics',
      icon: Stethoscope,
      priority: 'low'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Results', icon: Search },
    { id: 'patient', label: 'Patients', icon: User },
    { id: 'appointment', label: 'Appointments', icon: Calendar },
    { id: 'lab', label: 'Lab Results', icon: FileText },
    { id: 'medication', label: 'Medications', icon: Pill },
    { id: 'doctor', label: 'Staff', icon: Stethoscope }
  ];

  const filterOptions = [
    { id: 'department', label: 'Department', options: ['Cardiology', 'Orthopedics', 'Laboratory', 'Pharmacy', 'Emergency'] },
    { id: 'status', label: 'Status', options: ['Active', 'Pending', 'Scheduled', 'Completed'] },
    { id: 'priority', label: 'Priority', options: ['High', 'Medium', 'Low'] },
    { id: 'timeframe', label: 'Time Frame', options: ['Today', 'This Week', 'This Month', 'Last 30 Days'] }
  ];

  const handleSearch = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    // Simulate API call
    setTimeout(() => {
      if (query.trim()) {
        const filtered = mockResults.filter(item => 
          selectedCategory === 'all' || item.type === selectedCategory
        );
        setSearchResults(filtered);
        
        // Add to recent searches
        if (query && !recentSearches.includes(query)) {
          setRecentSearches(prev => [query, ...prev.slice(0, 3)]);
        }
      } else {
        setSearchResults([]);
      }
      setIsLoading(false);
    }, 500);
  };

  const addFilter = (filterType, value) => {
    const newFilter = { type: filterType, value };
    setActiveFilters(prev => [...prev, newFilter]);
  };

  const removeFilter = (index) => {
    setActiveFilters(prev => prev.filter((_, i) => i !== index));
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'pending review': return 'bg-orange-100 text-orange-800';
      case 'action required': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">HealthRx AI</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-lg font-semibold text-gray-900">Global Search</h1>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">Welcome! cityhospital</span>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">C</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search patients, appointments, lab results, staff, and more..."
              className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Recent Searches */}
          {!searchQuery && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Recent Searches</p>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  <span>{filter.type}: {filter.value}</span>
                  <button
                    onClick={() => removeFilter(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filterOptions.map((filter) => (
                <div key={filter.id}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {filter.label}
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => {
                      if (e.target.value) {
                        addFilter(filter.label, e.target.value);
                      }
                    }}
                  >
                    <option value="">Select {filter.label}</option>
                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && !isLoading && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Search Results ({searchResults.length})
              </h2>
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option>Sort by Relevance</option>
                <option>Sort by Date</option>
                <option>Sort by Priority</option>
              </select>
            </div>

            <div className="space-y-3">
              {searchResults.map((result) => {
                const Icon = result.icon;
                return (
                  <div
                    key={result.id}
                    className={`bg-white rounded-lg border-l-4 ${getPriorityColor(result.priority)} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900">{result.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{result.subtitle}</p>
                            <p className="text-sm text-gray-500 mt-1">{result.details}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {result.lastActivity}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {result.department}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                            {result.status}
                          </span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Empty State */}
        {!searchQuery && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Search across your entire hospital system
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Find patients, appointments, lab results, staff information, and more with our comprehensive search system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-blue-50 rounded-lg">
                <User className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Patient Records</h4>
                <p className="text-sm text-gray-600">Search by name, ID, or phone number</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Appointments</h4>
                <p className="text-sm text-gray-600">Find scheduled and past appointments</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium text-gray-900">Lab Results</h4>
                <p className="text-sm text-gray-600">Access test results and reports</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </AdminLayout>
  );
};

export default HospitalGlobalSearch;