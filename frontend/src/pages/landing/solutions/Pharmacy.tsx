import React from "react";
import { motion } from "framer-motion";
import {  PackageCheck, ShoppingCart, Truck } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";
import { BiCapsule } from "react-icons/bi";

const pharmacyFeatures = [
  {
    title: "Rx Medicine Store",
    icon: <BiCapsule className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Get access to a full range of medicines and surgical supplies integrated with e-prescription sync.",
  },
  {
    title: "Inventory Management",
    icon: <PackageCheck className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Smart stock tracking, expiry alerts, and batch-level insights powered by AI analytics.",
  },
  {
    title: "Online Orders",
    icon: <ShoppingCart className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Patients can order medicines online via mobile/web with doorstep delivery and real-time tracking.",
  },
  {
    title: "Cold Chain Delivery",
    icon: <Truck className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Ensuring temperature-controlled delivery for critical meds and vaccines through IoT logistics.",
  },
];

const Pharmacy = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-26">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">
              Smart <span className="text-[#00CFFF]">Pharmacy Solutions</span>
            </h2>
            <p className="text-gray-400">
              Efficient, intelligent, and patient-first medicine distribution platform.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {pharmacyFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[#00CFFF]/30 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Pharmacy;
