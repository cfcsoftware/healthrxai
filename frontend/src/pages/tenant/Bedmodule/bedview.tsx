import React, { useEffect, useState } from "react";
import axiosTenant from "../../../lib/axiosTenant";
import { FaBed } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

type Bed = {
  id: number;
  bed_type: string;
  bed_number: string;
  ward: string;
  floor: string;
  bed_charges: string;
  bed_status: string;
};

const statusColors: Record<string, { icon: string; bg: string; text: string; ring: string }> = {
  Available: {
    icon: "text-green-500",
    bg: "bg-green-50",
    text: "text-green-700",
    ring: "ring-green-200",
  },
  Occupied: {
    icon: "text-red-500",
    bg: "bg-red-50",
    text: "text-red-700",
    ring: "ring-red-200",
  },
  Maintenance: {
    icon: "text-yellow-500",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    ring: "ring-yellow-200",
  },
  Cleaning: {
    icon: "text-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
    ring: "ring-blue-200",
  },
};

const BedCard = ({ bed }: { bed: Bed }) => {
  const [hovered, setHovered] = useState(false);
  const status = statusColors[bed.bed_status] || statusColors["Available"];

  return (
    <div
      className={`relative flex flex-col items-center border border-transparent rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer group ring-1 ${status.ring} hover:ring-4 aspect-square min-h-[180px] max-h-[260px] p-0`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 0, minHeight: 0 }}
    >
      <div className="flex flex-col items-center w-full h-full justify-center px-3 py-4">
        <div
          className={`rounded-full p-2 mb-2 shadow-md bg-white ${status.bg} transition-all duration-200 group-hover:scale-110`}
        >
          <FaBed
            className={`w-8 h-8 ${status.icon} drop-shadow-sm`}
            aria-label="Bed Icon"
          />
        </div>
        <h3 className="text-base font-bold text-gray-800 text-center tracking-tight mb-0.5 truncate w-full">
          #{bed.bed_number}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <MdOutlineKingBed className="text-gray-400 text-xs" />
          <span className="text-xs text-gray-600 font-medium truncate">{bed.bed_type}</span>
        </div>
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <BsFillPersonFill className="text-gray-400 text-xs" />
          <span className="text-xs text-gray-500 truncate">{bed.ward}</span>
        </div>
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <span className="inline-block rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700">
             {bed.floor}
          </span>
        </div>
        <div className="mt-1 text-xs font-semibold">
          <span className={`px-2 py-0.5 rounded-full ${status.bg} ${status.text} border border-transparent`}>
            {bed.bed_status}
          </span>
        </div>
        <div className="mt-1 text-xs text-gray-500 font-medium truncate">
          ₹{bed.bed_charges}
        </div>
      </div>
      {hovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/95 z-20 p-4 rounded-2xl shadow-2xl text-xs space-y-1 flex flex-col justify-center items-center animate-fadeIn">
          <div className="flex flex-col gap-0.5 w-full">
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Bed #</span>
              <span className="text-gray-900">{bed.bed_number}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Ward</span>
              <span className="text-gray-900">{bed.ward}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Floor</span>
              <span className="text-gray-900">{bed.floor}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Type</span>
              <span className="text-gray-900">{bed.bed_type}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Charges</span>
              <span className="text-gray-900">₹{bed.bed_charges}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-semibold text-gray-700">Status</span>
              <span className={`font-semibold ${status.text}`}>{bed.bed_status}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Collapse component for floor-wise collapse
const FloorCollapse: React.FC<{
  floor: string;
  beds: Bed[];
  defaultOpen?: boolean;
}> = ({ floor, beds, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl bg-white/70 shadow-sm mb-4">
      <button
        className="w-full flex items-center justify-between px-6 py-4 focus:outline-none hover:bg-blue-50 rounded-t-xl transition"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`floor-panel-${floor}`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-8 bg-blue-400 rounded-full" />
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Floor: <span className="text-blue-600">{floor}</span>
          </h2>
          <span className="ml-2 text-xs text-gray-400 font-medium">
            {beds.length} bed{beds.length > 1 ? "s" : ""}
          </span>
        </div>
        <span className="ml-4 text-blue-500 text-lg transition-transform" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
          ▶
        </span>
      </button>
      <div
        id={`floor-panel-${floor}`}
        className={`transition-all duration-200 overflow-hidden`}
        style={{
          maxHeight: open ? 2000 : 0,
          padding: open ? "1.5rem" : "0 1.5rem",
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-5">
          {beds.map((bed) => (
            <BedCard key={bed.id} bed={bed} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BedList = () => {
  const [bedsByFloor, setBedsByFloor] = useState<Record<string, Bed[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeds = async () => {
      try {
        const res = await axiosTenant.get("/bed-management/list?api=true");
        setBedsByFloor(res.data.data.grouped_beds);
      } catch (err) {
        console.error("Error fetching bed data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBeds();
  }, []);

  // Flatten all beds for empty state check
  const allBeds = Object.entries(bedsByFloor).flatMap(([floor, beds]) =>
    beds.map((bed) => ({ ...bed, floor }))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-0.5">
            Bed Management
          </h1>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64 text-gray-400 text-lg font-medium animate-pulse">
          <svg className="animate-spin h-7 w-7 mr-2 text-blue-400" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          Loading bed data...
        </div>
      ) : allBeds.length === 0 ? (
        <div className="p-12 text-center text-gray-400 text-lg font-medium">
          <span className="inline-block mb-2">
            <FaBed className="w-8 h-8 mx-auto text-gray-200" />
          </span>
          <div>No beds found.</div>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(bedsByFloor).map(([floor, beds]) => (
            <FloorCollapse key={floor} floor={floor} beds={beds} />
          ))}
        </div>
      )}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98);}
            to { opacity: 1; transform: scale(1);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.18s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </div>
  );
};

export default BedList;
