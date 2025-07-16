import React, { useState, useMemo, type ChangeEvent } from "react";
import AdminLayout from "../../../components/AdminLayout";

type Bed = {
  id: string;
  floor: string;
  ward: string;
  bedType: string;
  bedNumber: string;
  bedCharges: number;
  status: "Available" | "Occupied" | "Maintenance";
};

const initialBeds: Bed[] = [
  { id: "1", floor: "1st Floor", ward: "Private", bedType: "Private", bedNumber: "1F-102", bedCharges: 3500, status: "Available" },
  { id: "2", floor: "1st Floor", ward: "Semi-Private", bedType: "Semi-Private", bedNumber: "1F-103", bedCharges: 2700, status: "Available" },
  { id: "3", floor: "1st Floor", ward: "ICU", bedType: "ICU", bedNumber: "1F-104", bedCharges: 5200, status: "Available" },
  { id: "4", floor: "1st Floor", ward: "Emergency", bedType: "Emergency", bedNumber: "1F-105", bedCharges: 4200, status: "Available" },
  { id: "5", floor: "1st Floor", ward: "Other", bedType: "Other", bedNumber: "1F-106", bedCharges: 1600, status: "Available" },
  { id: "6", floor: "1st Floor", ward: "General", bedType: "General", bedNumber: "1F-107", bedCharges: 2000, status: "Available" },
  { id: "7", floor: "1st Floor", ward: "Private", bedType: "Private", bedNumber: "1F-108", bedCharges: 3500, status: "Available" },
  { id: "8", floor: "1st Floor", ward: "ICU", bedType: "ICU", bedNumber: "1F-109", bedCharges: 5200, status: "Available" },
  { id: "9", floor: "1st Floor", ward: "Semi-Private", bedType: "Semi-Private", bedNumber: "1F-110", bedCharges: 2700, status: "Available" },
];

const floorOptions = ["1st Floor", "2nd Floor", "3rd Floor"];
const wardOptions = ["Private", "Semi-Private", "ICU", "Emergency", "Other", "General"];
const bedTypeOptions = ["Private", "Semi-Private", "ICU", "Emergency", "Other", "General"];
const statusOptions = ["Available", "Occupied", "Maintenance"] as const;

const BedSettings: React.FC = () => {
  
  const [beds, setBeds] = useState<Bed[]>(initialBeds);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBeds, setSelectedBeds] = useState<Set<string>>(new Set());
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<Bed | null>(null);
  const [formData, setFormData] = useState<Omit<Bed, "id">>({
    floor: "1st Floor",
    ward: "Private",
    bedType: "Private",
    bedNumber: "",
    bedCharges: 0,
    status: "Available",
  });

  // Filtering beds by search term
  const filteredBeds = useMemo(() => {
    return beds.filter((bed) => {
      const search = searchTerm.toLowerCase();
      return (
        bed.floor.toLowerCase().includes(search) ||
        bed.ward.toLowerCase().includes(search) ||
        bed.bedType.toLowerCase().includes(search) ||
        bed.bedNumber.toLowerCase().includes(search) ||
        bed.status.toLowerCase().includes(search) ||
        bed.bedCharges.toString().includes(search)
      );
    });
  }, [beds, searchTerm]);

  // Toggle select all beds on current filtered list
  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelection = new Set(selectedBeds);
      filteredBeds.forEach((bed) => newSelection.add(bed.id));
      setSelectedBeds(newSelection);
    } else {
      const newSelection = new Set(selectedBeds);
      filteredBeds.forEach((bed) => newSelection.delete(bed.id));
      setSelectedBeds(newSelection);
    }
  };

  // Toggle select one bed
  const toggleSelectBed = (id: string) => {
    const newSelection = new Set(selectedBeds);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedBeds(newSelection);
  };

  // Handles form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "bedCharges" ? Number(value) : value,
    }));
  };

  // Handle add new bed start
  const startAdd = () => {
    setFormData({
      floor: "1st Floor",
      ward: "Private",
      bedType: "Private",
      bedNumber: "",
      bedCharges: 0,
      status: "Available",
    });
    setIsAdding(true);
    setIsEditing(null);
  };

  // Handle edit bed start
  const startEdit = (bed: Bed) => {
    setFormData({
      floor: bed.floor,
      ward: bed.ward,
      bedType: bed.bedType,
      bedNumber: bed.bedNumber,
      bedCharges: bed.bedCharges,
      status: bed.status,
    });
    setIsEditing(bed);
    setIsAdding(false);
  };

  // Handle delete bed
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this bed?")) {
      setBeds((prev) => prev.filter((bed) => bed.id !== id));
      setSelectedBeds((prev) => {
        const newSelection = new Set(prev);
        newSelection.delete(id);
        return newSelection;
      });
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    if (selectedBeds.size === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedBeds.size} selected beds?`)) {
      setBeds((prev) => prev.filter((bed) => !selectedBeds.has(bed.id)));
      setSelectedBeds(new Set());
    }
  };

  // Handle form submit for add or edit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.bedNumber.trim()) {
      alert("Bed Number is required.");
      return;
    }

    if (formData.bedCharges < 0) {
      alert("Bed Charges must be positive.");
      return;
    }

    if (isEditing) {
      // Edit existing bed
      setBeds((prev) =>
        prev.map((bed) =>
          bed.id === isEditing.id
            ? { ...bed, ...formData }
            : bed
        )
      );
      setIsEditing(null);
    } else {
      // Add new bed
      const newBed: Bed = {
        id: Date.now().toString(),
        ...formData,
      };
      setBeds((prev) => [newBed, ...prev]);
      setIsAdding(false);
    }
  };

  // Handle cancel form
  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
  };

  // Export helpers (simplified/demo only): just print selected beds for now
  const handleExport = (type: "copy" | "csv" | "excel" | "pdf" | "print") => {
    // Here could integrate with libraries like XLSX, jsPDF, or Clipboard API
    alert(`Exporting data as ${type.toUpperCase()} is not yet implemented.`);
  };

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-50 font-sans antialiased p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-indigo-700">Bed Settings</h1>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline text-gray-800">Welcome! <span className="font-medium">cityhospital</span></span>
          <button aria-label="User menu" title="User menu" className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <span className="sr-only">User profile</span>
            {/* Simple user icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </button>
        </div>
      </header>

      <section className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          onClick={startAdd}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Add Bed
        </button>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleExport("copy")}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded border border-gray-300 text-sm font-semibold shadow-sm"
          >
            Copy
          </button>
          <button
            onClick={() => handleExport("csv")}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded border border-gray-300 text-sm font-semibold shadow-sm"
          >
            CSV
          </button>
          <button
            onClick={() => handleExport("excel")}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded border border-gray-300 text-sm font-semibold shadow-sm"
          >
            Excel
          </button>
          <button
            onClick={() => handleExport("pdf")}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded border border-gray-300 text-sm font-semibold shadow-sm"
          >
            PDF
          </button>
          <button
            onClick={() => handleExport("print")}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded border border-gray-300 text-sm font-semibold shadow-sm"
          >
            Print
          </button>
          {selectedBeds.size > 0 && (
            <button
              onClick={handleBulkDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded px-3 py-1 shadow ml-2"
            >
              Delete Selected ({selectedBeds.size})
            </button>
          )}
        </div>

        <div className="mt-2 sm:mt-0">
          <label htmlFor="search" className="font-semibold mr-2 text-gray-700">Search:</label>
          <input
            id="search"
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search beds..."
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </section>

      {(isAdding || isEditing) && (
        <section aria-label={isAdding ? "Add Bed Form" : "Edit Bed Form"} className="bg-white p-6 rounded-md shadow-md mb-6 max-w-4xl mx-auto border border-indigo-200">
          <h2 className="text-xl font-bold mb-4 text-indigo-700">{isAdding ? "Add New Bed" : `Edit Bed "${isEditing?.bedNumber}"`}</h2>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="floor" className="block font-semibold mb-1 text-gray-700">
                Floor
              </label>
              <select
                id="floor"
                name="floor"
                value={formData.floor}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                {floorOptions.map((floor) => (
                  <option key={floor} value={floor}>{floor}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="ward" className="block font-semibold mb-1 text-gray-700">
                Ward
              </label>
              <select
                id="ward"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                {wardOptions.map((ward) => (
                  <option key={ward} value={ward}>{ward}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bedType" className="block font-semibold mb-1 text-gray-700">
                Bed Type
              </label>
              <select
                id="bedType"
                name="bedType"
                value={formData.bedType}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                {bedTypeOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bedNumber" className="block font-semibold mb-1 text-gray-700">
                Bed Number
              </label>
              <input
                type="text"
                id="bedNumber"
                name="bedNumber"
                value={formData.bedNumber}
                onChange={handleChange}
                placeholder="e.g. 1F-111"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="bedCharges" className="block font-semibold mb-1 text-gray-700">
                Bed Charges (₹)
              </label>
              <input
                type="number"
                id="bedCharges"
                name="bedCharges"
                value={formData.bedCharges}
                onChange={handleChange}
                min={0}
                step={0.01}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block font-semibold mb-1 text-gray-700">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 flex gap-4 justify-end pt-4">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-md shadow transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {isAdding ? "Add Bed" : "Update Bed"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="border border-gray-300 px-5 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="overflow-x-auto rounded-lg shadow border border-gray-300 max-w-full mx-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-indigo-600 text-white select-none">
            <tr>
              <th className="w-12 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  aria-label="Select all beds"
                  checked={filteredBeds.length > 0 && filteredBeds.every(bed => selectedBeds.has(bed.id))}
                  onChange={e => toggleSelectAll(e.target.checked)}
                />
              </th>
              <th className="px-6 py-3 font-semibold text-sm">Floor</th>
              <th className="px-6 py-3 font-semibold text-sm">Ward</th>
              <th className="px-6 py-3 font-semibold text-sm">Bed Type</th>
              <th className="px-6 py-3 font-semibold text-sm">Bed Number</th>
              <th className="px-6 py-3 font-semibold text-sm text-right pr-10">Bed Charges</th>
              <th className="px-6 py-3 font-semibold text-sm">Status</th>
              <th className="px-6 py-3 font-semibold text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredBeds.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-500 font-semibold select-none">
                  No beds found matching criteria.
                </td>
              </tr>
            )}
            {filteredBeds.map((bed, i) => (
              <tr
                key={bed.id}
                className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    aria-label={`Select bed ${bed.bedNumber}`}
                    checked={selectedBeds.has(bed.id)}
                    onChange={() => toggleSelectBed(bed.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{bed.floor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bed.ward}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bed.bedType}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => alert(`Viewing details for bed ${bed.bedNumber}`)}
                    className="text-indigo-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                    aria-label={`View details for bed ${bed.bedNumber}`}
                  >
                    {bed.bedNumber}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right pr-10 font-mono text-gray-700">
                  ₹{bed.bedCharges.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white
                    ${
                      bed.status === "Available"
                        ? "bg-green-400"
                        : bed.status === "Occupied"
                        ? "bg-red-500"
                        : "bg-yellow-400"
                    }`}
                    aria-label={`Status: ${bed.status}`}
                  >
                    {bed.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center space-x-4">
                  <button
                    type="button"
                    title="Edit bed"
                    aria-label={`Edit bed ${bed.bedNumber}`}
                    onClick={() => startEdit(bed)}
                    className="text-indigo-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  >
                    {/* Pencil icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4h2M17 21v-2m3 1v-2a2 2 0 00-2-2h-7l-6 6v-7a2 2 0 012-2h7l6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Delete bed"
                    aria-label={`Delete bed ${bed.bedNumber}`}
                    onClick={() => handleDelete(bed.id)}
                    className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
                  >
                    {/* Trash icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    </AdminLayout>
  );
};

export default BedSettings;

