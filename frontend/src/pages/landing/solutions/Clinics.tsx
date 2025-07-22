import React from "react";
import { motion } from "framer-motion";
import {  Stethoscope, MapPin, UserCheck } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";
import { TbBuildingHospital } from "react-icons/tb";

const clinics = [
  {
    name: "Rx Care Clinic - Delhi",
    icon: <MapPin className="w-6 h-6 text-[#00CFFF]" />,
    description: "Equipped with AI diagnostics, EMR integration, and robotic consultation systems for outpatients.",
  },
  {
    name: "Urban HealthRx Center - Bengaluru",
    icon: <UserCheck className="w-6 h-6 text-[#00CFFF]" />,
    description: "Smart appointment scheduling, e-prescriptions, and patient engagement tools integrated.",
  },
  {
    name: "HealthRx Mobile Clinic",
    icon: <Stethoscope className="w-6 h-6 text-[#00CFFF]" />,
    description: "Mobile clinic outfitted with portable diagnostics and cloud EMR access for remote villages.",
  },
  {
    name: "HealthRx Specialty Clinic - Mumbai",
    icon: <TbBuildingHospital className="w-6 h-6 text-[#00CFFF]" />,
    description: "Focused on cardiology and neurology care, powered by predictive AI and connected devices.",
  },
];

const Clinics = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-26">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">
              Our <span className="text-[#00CFFF]">Clinic Network</span>
            </h2>
            <p className="text-gray-400">
              Connected, intelligent, and accessible care powered by HealthRx AI.
            </p>
          </motion.div>

          {/* Clinics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {clinics.map((clinic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[#00CFFF]/30 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{clinic.icon}</div>
                  <h3 className="text-xl font-semibold">{clinic.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{clinic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Clinics;
