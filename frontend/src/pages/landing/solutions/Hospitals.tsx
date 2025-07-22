import HomeLayout from "../../../layouts/HomeLayout";
import { Hospital, Cpu, ShieldCheck, Bot } from "lucide-react";

const benefits = [
  {
    icon: <Hospital className="w-6 h-6 text-cyan-400" />,
    title: "Smart Hospital Management",
    description:
      "Digitize and automate patient flow, bed management, OPD/IPD, billing, and discharge with one unified HMS.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    title: "AI-Powered Diagnostics",
    description:
      "Boost diagnosis accuracy and reduce report turnaround time with AI-enabled tools and smart imaging.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Blockchain for Data Integrity",
    description:
      "Ensure tamper-proof records and audit trails for sensitive medical data using blockchain.",
  },
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    title: "Service Robots Integration",
    description:
      "Deploy autonomous robots for medicine delivery, sanitation, and patient assistance.",
  },
];

const Hospitals = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0b1120] text-white py-26 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Solutions for Hospitals</h1>
          <p className="text-gray-400 mb-12">
            Empower large and mid-sized hospitals with intelligent automation, secure data, and seamless patient care.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-left hover:shadow-cyan-500/20 transition"
              >
                <div className="flex items-center gap-3 mb-3">{item.icon}
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

export default Hospitals;
