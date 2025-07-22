import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileLock, GlobeLock, TimerReset } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const features = [
  {
    title: "Secure Patient Records",
    icon: <FileLock className="w-6 h-6 text-[#00CFFF]" />,
    description: "Blockchain ensures immutable, tamper-proof medical records accessible only by authorized parties.",
  },
  {
    title: "Smart Contracts for Consent",
    icon: <ShieldCheck className="w-6 h-6 text-[#00CFFF]" />,
    description: "Patient consent can be automated and securely stored using smart contracts on the blockchain.",
  },
  {
    title: "Decentralized Data Access",
    icon: <GlobeLock className="w-6 h-6 text-[#00CFFF]" />,
    description: "Enables decentralized and transparent sharing of medical data across hospitals and labs.",
  },
  {
    title: "Audit Trails & Traceability",
    icon: <TimerReset className="w-6 h-6 text-[#00CFFF]" />,
    description: "Provides full audit logs of who accessed or modified medical information and when.",
  },
];

const Blockchain = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-26">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">
              Blockchain <span className="text-[#00CFFF]">in Healthcare</span>
            </h2>
            <p className="text-gray-400">
              Bringing transparency, privacy, and trust to hospital data systems.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
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

export default Blockchain;
