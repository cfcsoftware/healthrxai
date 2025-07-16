import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  FileText,
  Plus,
  Search,
  RefreshCw,
  Settings,
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface TestData {
  id: string;
  patientName: string;
  patientId: string;
  testName: string;
  modality: string;
  status: string;
  priority: string;
  scheduledDate: string;
  scheduledTime: string;
}

const RadiologyTestPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tests, setTests] = useState<TestData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTests([
        {
          id: 'T-001',
          patientName: 'John Doe',
          patientId: 'P-1001',
          testName: 'Brain MRI',
          modality: 'MRI',
          status: 'Scheduled',
          priority: 'Urgent',
          scheduledDate: '2024-07-18',
          scheduledTime: '10:00',
        },
        {
          id: 'T-002',
          patientName: 'Jane Smith',
          patientId: 'P-1002',
          testName: 'Chest CT',
          modality: 'CT',
          status: 'Completed',
          priority: 'Routine',
          scheduledDate: '2024-07-17',
          scheduledTime: '14:30',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTests = tests.filter(test =>
    test.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Radiology Tests</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white border hover:bg-gray-50">
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white border hover:bg-gray-50">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              Schedule Test
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tests or patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-600">Loading tests...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map(test => (
              <div
                key={test.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{test.testName}</h3>
                    <p className="text-sm text-gray-500">{test.patientName} ({test.patientId})</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
                    {test.modality}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><Calendar className="inline w-4 h-4 mr-1 text-gray-400" /> {test.scheduledDate}</p>
                  <p><Clock className="inline w-4 h-4 mr-1 text-gray-400" /> {test.scheduledTime}</p>
                  <p><FileText className="inline w-4 h-4 mr-1 text-gray-400" /> Status: {test.status}</p>
                  <p><User className="inline w-4 h-4 mr-1 text-gray-400" /> Priority: {test.priority}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </AdminLayout>
  );
};

export default RadiologyTestPage;
