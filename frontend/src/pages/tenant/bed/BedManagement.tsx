import React, { useState } from 'react';
import { 
  Bed, 
  User, 
  ChevronDown,
  Heart,
  Activity,
  Thermometer,
  Zap,
  Clock,
  MapPin,
  FileText,
  Stethoscope,
  UserCheck,
  DollarSign,
  Shield,
  Home,
  Building
} from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  admissionDate: string;
  diagnosis: string;
  doctorName: string;
  emergencyContact: string;
  insuranceId: string;
  vitals: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
    oxygenSaturation: number;
  };
}

interface BedData {
  id: string;
  number: string;
  ward: string;
  room: string;
  floor: number;
  type: 'standard' | 'icu' | 'pediatric' | 'maternity' | 'isolation' | 'vip';
  status: 'occupied' | 'available' | 'maintenance' | 'reserved' | 'cleaning';
  features: string[];
  lastCleaned: string;
  patient?: Patient;
  assignedNurse?: string;
  admissionTime?: string;
  expectedDischarge?: string;
  dailyRate: number;
}

const BedManagement: React.FC = () => {
  const [hoveredBed, setHoveredBed] = useState<string | null>(null);

  const beds: BedData[] = [
    // Ground Floor
    {
      id: 'GF-001',
      number: 'GF-001',
      ward: 'Emergency',
      room: 'ER-1',
      floor: 0,
      type: 'standard',
      status: 'occupied',
      features: ['Oxygen', 'Cardiac Monitor', 'IV Drip'],
      lastCleaned: '2025-07-11T06:00:00Z',
      dailyRate: 200,
      assignedNurse: 'Sarah Johnson RN',
      admissionTime: '2025-07-10T14:30:00Z',
      expectedDischarge: '2025-07-15T10:00:00Z',
      patient: {
        id: 'P001',
        name: 'John Mitchell',
        age: 45,
        gender: 'male',
        admissionDate: '2025-07-10',
        diagnosis: 'Chest Pain',
        doctorName: 'Dr. Emily Chen',
        emergencyContact: '+1 (555) 123-4567',
        insuranceId: 'INS001234',
        vitals: {
          heartRate: 78,
          bloodPressure: '120/80',
          temperature: 98.6,
          oxygenSaturation: 95
        }
      }
    },
    {
      id: 'GF-002',
      number: 'GF-002',
      ward: 'Emergency',
      room: 'ER-2',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T08:00:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-003',
      number: 'GF-003',
      ward: 'Emergency',
      room: 'ER-3',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T08:30:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-004',
      number: 'GF-004',
      ward: 'Emergency',
      room: 'ER-4',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T09:00:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-005',
      number: 'GF-005',
      ward: 'Emergency',
      room: 'ER-5',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T09:30:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-006',
      number: 'GF-006',
      ward: 'Emergency',
      room: 'ER-6',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T10:00:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-007',
      number: 'GF-007',
      ward: 'Emergency',
      room: 'ER-7',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T10:30:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-008',
      number: 'GF-008',
      ward: 'Emergency',
      room: 'ER-8',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T11:00:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-009',
      number: 'GF-009',
      ward: 'Emergency',
      room: 'ER-9',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T11:30:00Z',
      dailyRate: 200
    },
    {
      id: 'GF-010',
      number: 'GF-010',
      ward: 'Emergency',
      room: 'ER-10',
      floor: 0,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T12:00:00Z',
      dailyRate: 200
    },
    
    // First Floor
    {
      id: '1F-101',
      number: '1F-101',
      ward: 'General Medicine',
      room: 'Room 101',
      floor: 1,
      type: 'standard',
      status: 'occupied',
      features: ['Oxygen', 'Cardiac Monitor', 'IV Drip'],
      lastCleaned: '2025-07-11T06:00:00Z',
      dailyRate: 250,
      assignedNurse: 'Michael Davis RN',
      admissionTime: '2025-07-09T16:45:00Z',
      expectedDischarge: '2025-07-14T10:00:00Z',
      patient: {
        id: 'P002',
        name: 'Maria Rodriguez',
        age: 62,
        gender: 'female',
        admissionDate: '2025-07-09',
        diagnosis: 'Pneumonia',
        doctorName: 'Dr. James Wilson',
        emergencyContact: '+1 (555) 234-5678',
        insuranceId: 'INS002345',
        vitals: {
          heartRate: 92,
          bloodPressure: '140/90',
          temperature: 99.2,
          oxygenSaturation: 88
        }
      }
    },
    {
      id: '1F-102',
      number: '1F-102',
      ward: 'General Medicine',
      room: 'Room 102',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T08:00:00Z',
      dailyRate: 250
    },
    {
      id: '1F-103',
      number: '1F-103',
      ward: 'General Medicine',
      room: 'Room 103',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T08:30:00Z',
      dailyRate: 250
    },
    {
      id: '1F-104',
      number: '1F-104',
      ward: 'General Medicine',
      room: 'Room 104',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T09:00:00Z',
      dailyRate: 250
    },
    {
      id: '1F-105',
      number: '1F-105',
      ward: 'General Medicine',
      room: 'Room 105',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T09:30:00Z',
      dailyRate: 250
    },
    {
      id: '1F-106',
      number: '1F-106',
      ward: 'General Medicine',
      room: 'Room 106',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T10:00:00Z',
      dailyRate: 250
    },
    {
      id: '1F-107',
      number: '1F-107',
      ward: 'General Medicine',
      room: 'Room 107',
      floor: 1,
      type: 'standard',
      status: 'available',
      features: ['Oxygen', 'IV Drip'],
      lastCleaned: '2025-07-11T10:30:00Z',
      dailyRate: 250
    },
    
    // Second Floor - ICU
    {
      id: '2F-201',
      number: '2F-201',
      ward: 'Intensive Care',
      room: 'ICU Room 1',
      floor: 2,
      type: 'icu',
      status: 'occupied',
      features: ['Ventilator', 'Cardiac Monitor', 'Defibrillator', 'IV Drip', 'Oxygen'],
      lastCleaned: '2025-07-11T04:00:00Z',
      dailyRate: 800,
      assignedNurse: 'Lisa Chen RN',
      admissionTime: '2025-07-08T18:20:00Z',
      expectedDischarge: '2025-07-16T14:00:00Z',
      patient: {
        id: 'P003',
        name: 'Robert Johnson',
        age: 58,
        gender: 'male',
        admissionDate: '2025-07-08',
        diagnosis: 'Heart Attack',
        doctorName: 'Dr. Sarah Martinez',
        emergencyContact: '+1 (555) 345-6789',
        insuranceId: 'INS003456',
        vitals: {
          heartRate: 105,
          bloodPressure: '160/100',
          temperature: 98.8,
          oxygenSaturation: 92
        }
      }
    },
    {
      id: '2F-202',
      number: '2F-202',
      ward: 'Intensive Care',
      room: 'ICU Room 2',
      floor: 2,
      type: 'icu',
      status: 'available',
      features: ['Ventilator', 'Cardiac Monitor', 'Defibrillator', 'IV Drip', 'Oxygen'],
      lastCleaned: '2025-07-11T05:00:00Z',
      dailyRate: 800
    },
    {
      id: '2F-203',
      number: '2F-203',
      ward: 'Intensive Care',
      room: 'ICU Room 3',
      floor: 2,
      type: 'icu',
      status: 'maintenance',
      features: ['Ventilator', 'Cardiac Monitor', 'Defibrillator', 'IV Drip', 'Oxygen'],
      lastCleaned: '2025-07-10T20:00:00Z',
      dailyRate: 800
    }
  ];

  const floors = [
    { number: 0, name: 'Ground Floor', beds: beds.filter(bed => bed.floor === 0) },
    { number: 1, name: '1st Floor', beds: beds.filter(bed => bed.floor === 1) },
    { number: 2, name: '2nd Floor', beds: beds.filter(bed => bed.floor === 2) }
  ];


  const statusBadgeColors = {
    occupied: 'bg-red-100 text-red-800',
    available: 'bg-green-100 text-green-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
    reserved: 'bg-blue-100 text-blue-800',
    cleaning: 'bg-purple-100 text-purple-800'
  };

  const typeIcons = {
    standard: <Bed className="w-6 h-6" />,
    icu: <Heart className="w-6 h-6" />,
    pediatric: <Home className="w-6 h-6" />,
    maternity: <User className="w-6 h-6" />,
    isolation: <Shield className="w-6 h-6" />,
    vip: <Building className="w-6 h-6" />
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getTimeElapsed = (dateString: string) => {
    const now = new Date();
    const then = new Date(dateString);
    const hours = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h`;
    }
    return `${hours}h`;
  };

  const BedCard = ({ bed }: { bed: BedData }) => (
    <div className="relative">
      <div
        className="bg-white rounded-lg border-2 border-gray-200 p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-blue-300"
        onMouseEnter={() => setHoveredBed(bed.id)}
        onMouseLeave={() => setHoveredBed(null)}
      >
        <div className="flex flex-col items-center text-center">
          <div className={`${bed.status === 'occupied' ? 'text-red-500' : 'text-green-500'} mb-2`}>
            {typeIcons[bed.type]}
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">{bed.number}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadgeColors[bed.status]} capitalize`}>
            {bed.status}
          </span>
        </div>
      </div>

      {/* Hover Card */}
      {hoveredBed === bed.id && (
        <div className="absolute top-0 left-full ml-4 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${bed.status === 'occupied' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {typeIcons[bed.type]}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{bed.number}</h3>
                <p className="text-sm text-gray-600">{bed.room}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadgeColors[bed.status]} capitalize`}>
              {bed.status}
            </span>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Ward:</span>
              </span>
              <span className="font-medium text-gray-900">{bed.ward}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>Floor:</span>
              </span>
              <span className="font-medium text-gray-900">Floor {bed.floor}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>Daily Rate:</span>
              </span>
              <span className="font-medium text-gray-900">${bed.dailyRate}</span>
            </div>
          </div>

          {bed.patient && (
            <div className="border-t pt-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{bed.patient.name}</p>
                  <p className="text-sm text-gray-600">{bed.patient.age} years, {bed.patient.gender}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Diagnosis:</span>
                  </span>
                  <span className="font-medium text-gray-900">{bed.patient.diagnosis}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4" />
                    <span>Doctor:</span>
                  </span>
                  <span className="font-medium text-gray-900">{bed.patient.doctorName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Admitted:</span>
                  </span>
                  <span className="font-medium text-gray-900">{getTimeElapsed(bed.admissionTime || '')}</span>
                </div>
                {bed.assignedNurse && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center space-x-2">
                      <UserCheck className="w-4 h-4" />
                      <span>Nurse:</span>
                    </span>
                    <span className="font-medium text-gray-900">{bed.assignedNurse}</span>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 mb-2">Vital Signs</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-3 h-3 text-red-500" />
                    <span>{bed.patient.vitals.heartRate} BPM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-3 h-3 text-blue-500" />
                    <span>{bed.patient.vitals.bloodPressure}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-3 h-3 text-orange-500" />
                    <span>{bed.patient.vitals.temperature}°F</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-green-500" />
                    <span>{bed.patient.vitals.oxygenSaturation}% O2</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Features:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {bed.features.map((feature, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Last cleaned:</span>
              <span>{formatDateTime(bed.lastCleaned)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const FloorSection = ({ floor }: { floor: { number: number; name: string; beds: BedData[] } }) => (
    <div className="mb-8">
      <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
        <h2 className="text-xl font-semibold">{floor.name}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm opacity-90">{floor.beds.length} beds</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-b-lg border border-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {floor.beds.map((bed) => (
            <BedCard key={bed.id} bed={bed} />
          ))}
        </div>
      </div>
    </div>
  );

  const totalBeds = beds.length;
  const occupiedBeds = beds.filter(bed => bed.status === 'occupied').length;
  const availableBeds = beds.filter(bed => bed.status === 'available').length;
  const occupancyRate = ((occupiedBeds / totalBeds) * 100).toFixed(1);

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bed Management</h1>
          <p className="text-gray-600">Real-time bed status and patient information</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Beds</p>
                <p className="text-2xl font-bold text-gray-900">{totalBeds}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Bed className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Occupied</p>
                <p className="text-2xl font-bold text-red-600">{occupiedBeds}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <User className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold text-green-600">{availableBeds}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Bed className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
                <p className="text-2xl font-bold text-purple-600">{occupancyRate}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Floors */}
        <div className="space-y-6">
          {floors.map((floor) => (
            <FloorSection key={floor.number} floor={floor} />
          ))}
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default BedManagement;