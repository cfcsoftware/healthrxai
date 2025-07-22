import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  User,
  FileText,
  CalendarDays,
  HeartPulse,
  Hospital,
  Syringe,
  Shield,
} from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const modules = [
  {
    name: "Patient Management",
    icon: <User className="h-6 w-6 text-[#00CFFF]" />,
    description: "Track, add, update and manage patient records.",
  },
  {
    name: "Appointment Scheduling",
    icon: <CalendarDays className="h-6 w-6 text-[#00CFFF]" />,
    description: "Manage doctor availability and patient bookings.",
  },
  {
    name: "Doctor Management",
    icon: <Stethoscope className="h-6 w-6 text-[#00CFFF]" />,
    description: "Manage doctor profiles, specialties and schedules.",
  },
  {
    name: "Medical Records",
    icon: <FileText className="h-6 w-6 text-[#00CFFF]" />,
    description: "Securely store diagnoses, prescriptions, and reports.",
  },
  {
    name: "Billing & Invoicing",
    icon: <Hospital className="h-6 w-6 text-[#00CFFF]" />,
    description: "Generate bills, manage payments and insurance claims.",
  },
  {
    name: "Pharmacy Management",
    icon: <Syringe className="h-6 w-6 text-[#00CFFF]" />,
    description: "Inventory control, prescriptions, and stock updates.",
  },
  {
    name: "Lab & Radiology",
    icon: <HeartPulse className="h-6 w-6 text-[#00CFFF]" />,
    description: "Handle lab test reports and radiology diagnostics.",
  },
  {
    name: "Security & Access Control",
    icon: <Shield className="h-6 w-6 text-[#00CFFF]" />,
    description: "Role-based access to protect sensitive data.",
  },
];

const HMS = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-[#00CFFF] px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">HMS Modules</h2>
            <p className="text-gray-400">All essential modules to manage your hospital efficiently.</p>
          </motion.div>

          {/* Module Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/20 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{mod.icon}</div>
                  <h3 className="text-xl font-semibold">{mod.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HMS;
