import HomeLayout from "../../../layouts/HomeLayout";
import { Video, PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";

const telehealthFeatures = [
  {
    icon: <Video className="w-6 h-6 text-cyan-400" />,
    title: "Virtual Consultations",
    description:
      "Enable secure video consultations for outpatient and follow-up visits directly within the platform.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-cyan-400" />,
    title: "Chat & Messaging",
    description:
      "Facilitate real-time patient-doctor communication with in-app chat, prescription notes, and follow-ups.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-cyan-400" />,
    title: "Telephonic Support",
    description:
      "Provide scheduled phone consultations and integrate voice call support directly from the system.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "HIPAA-Compliant & Secure",
    description:
      "Ensure encrypted data transfers and patient privacy with built-in HIPAA compliance and access controls.",
  },
];

const Telehealth = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0b1120] text-white py-26 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Telehealth Solutions</h1>
          <p className="text-gray-400 mb-12">
            Deliver virtual care with integrated tools for secure, remote patient consultations and monitoring.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {telehealthFeatures.map((item, index) => (
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

export default Telehealth;
