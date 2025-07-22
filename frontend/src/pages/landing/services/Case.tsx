import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Hospital, Brain, ShieldCheck } from "lucide-react";
import HomeLayout from "../../../layouts/HomeLayout";

const caseStudies = [
  {
    title: "AI-Powered Diagnostics at City Hospital",
    icon: <Brain className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Implemented a diagnostic AI system that improved radiology accuracy by 35% and reduced report turnaround time by 50%.",
  },
  {
    title: "Blockchain for Medical Records in Delhi",
    icon: <ShieldCheck className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Integrated blockchain to protect patient records and consent logs, ensuring tamper-proof medical histories.",
  },
  {
    title: "Robotic Surgery in Pune Healthcare",
    icon: <Hospital className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Enabled precise, minimally invasive robotic procedures in cardiology and orthopedics, reducing recovery time.",
  },
  {
    title: "Smart ICU Monitoring with Predictive AI",
    icon: <Lightbulb className="w-6 h-6 text-[#00CFFF]" />,
    description:
      "Deployed AI models to alert critical care staff proactively, reducing ICU emergencies by 22%.",
  },
];

const Case = () => {
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
              Real-World <span className="text-[#00CFFF]">Case Studies</span>
            </h2>
            <p className="text-gray-400">
              Proven success stories where HealthRx AI made a difference.
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[#00CFFF]/30 transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gray-900 rounded-xl">{study.icon}</div>
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Case;
