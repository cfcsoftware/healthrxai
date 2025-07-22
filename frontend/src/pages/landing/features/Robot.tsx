import React from "react";
import { motion } from "framer-motion";
import { Bot,  Move3D, HelpingHand } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const features = [
  {
    title: "Robotic Surgery",
    icon: <Bot className="w-6 h-6 text-[#00CFFF]" />,
    description: "High-precision robotic systems enable minimally invasive surgeries with better outcomes.",
  },
  {
    title: "Rehabilitation Robots",
    icon: <HelpingHand className="w-6 h-6 text-[#00CFFF]" />,
    description: "Assistive robots help patients recover mobility and strength through guided therapy.",
  },
  {
    title: "Service Robots",
    icon: <Bot className="w-6 h-6 text-[#00CFFF]" />,
    description: "Automate routine hospital tasks like delivery of medication and room disinfection.",
  },
  {
    title: "Telepresence & Monitoring",
    icon: <Move3D className="w-6 h-6 text-[#00CFFF]" />,
    description: "Remote-controlled robots assist doctors in monitoring and interacting with patients from afar.",
  },
];

const Robot = () => {
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
              Robotics <span className="text-[#00CFFF]">in Healthcare</span>
            </h2>
            <p className="text-gray-400">
              Transforming medical care through automation, precision, and innovation.
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

export default Robot;
