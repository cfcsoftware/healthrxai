import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Shield, Brain, Cloud } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const products = [
  {
    title: "HealthRx AI Platform",
    icon: <Brain className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "A cutting-edge AI platform providing diagnostics, patient insights, and automated workflows for hospitals.",
  },
  {
    title: "RxSecure - Blockchain Vault",
    icon: <Shield className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Secure, decentralized patient records and consent management built on blockchain technology.",
  },
  {
    title: "RxCloud - Medical Cloud Storage",
    icon: <Cloud className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Encrypted, scalable cloud storage tailored for EMR, radiology reports, and hospital backups.",
  },
  {
    title: "RxAdmin Dashboard",
    icon: <LayoutDashboard className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Centralized control panel to manage appointments, patients, labs, billing, and analytics in one place.",
  },
];

const Product = () => {
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
              Our <span className="text-[#00CFFF]">Products</span>
            </h2>
            <p className="text-gray-400">
              Powering hospitals with intelligence, security, and efficiency.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[#00CFFF]/30 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{product.icon}</div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Product;
