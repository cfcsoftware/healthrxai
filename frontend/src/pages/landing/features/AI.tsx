import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, ScanFace, Stethoscope, ActivitySquare } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const features = [
  {
    title: "Predictive Analytics",
    icon: <ActivitySquare className="w-6 h-6 text-[#00CFFF]" />,
    description: "AI-driven forecasts for patient outcomes, reducing risks and enhancing decision-making.",
  },
  {
    title: "Automated Diagnosis",
    icon: <ScanFace className="w-6 h-6 text-[#00CFFF]" />,
    description: "Image recognition and ML algorithms for faster, more accurate diagnosis.",
  },
  {
    title: "Virtual Health Assistants",
    icon: <Stethoscope className="w-6 h-6 text-[#00CFFF]" />,
    description: "24/7 patient engagement with intelligent bots and voice assistants.",
  },
  {
    title: "Personalized Treatment Plans",
    icon: <BrainCircuit className="w-6 h-6 text-[#00CFFF]" />,
    description: "AI customizes treatments based on patient history, lifestyle, and genetics.",
  },
];

const Ai = () => {
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
              Artificial Intelligence <span className="text-[#00CFFF]">in Healthcare</span>
            </h2>
            <p className="text-gray-400">
              Revolutionizing patient care through smart, automated, and data-driven solutions.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[#00CFFF]/30 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Ai;
