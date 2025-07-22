import HomeLayout from "../../../layouts/HomeLayout";
import { FlaskConical, FileBarChart, ShieldCheck, Cpu } from "lucide-react";

const labSolutions = [
  {
    icon: <FlaskConical className="w-6 h-6 text-cyan-400" />,
    title: "Lab Workflow Automation",
    description:
      "Digitize test ordering, tracking, and reporting with end-to-end workflow management for labs.",
  },
  {
    icon: <FileBarChart className="w-6 h-6 text-cyan-400" />,
    title: "Auto-generated Reports",
    description:
      "Use AI to auto-generate and verify lab reports with high accuracy, reducing manual effort.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "Smart Imaging Integration",
    description:
      "Connect imaging systems and interpret scans using AI-powered diagnostics for faster insights.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Secure & Compliant Storage",
    description:
      "Ensure HIPAA-compliant, tamper-proof record keeping using blockchain-backed systems.",
  },
];

const Labs = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0b1120] text-white py-26 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Solutions for Diagnostic Labs</h1>
          <p className="text-gray-400 mb-12">
            Upgrade your lab operations with AI-powered automation, secure data, and rapid reporting tools.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {labSolutions.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-left hover:shadow-cyan-500/20 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Labs;
