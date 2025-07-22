import HomeLayout from "../../../layouts/HomeLayout";
import { CalendarDays, User, Stethoscope, FileText, CreditCard, Pill, FlaskConical, Shield } from "lucide-react";

const modules = [
  {
    icon: <User className="h-6 w-6 text-cyan-400" />,
    title: "Patient Management",
    description: "Track, add, update and manage patient records.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-cyan-400" />,
    title: "Appointment Scheduling",
    description: "Manage doctor availability and patient bookings.",
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-cyan-400" />,
    title: "Doctor Management",
    description: "Manage doctor profiles, specialties and schedules.",
  },
  {
    icon: <FileText className="h-6 w-6 text-cyan-400" />,
    title: "Medical Records",
    description: "Securely store diagnoses, prescriptions, and reports.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-cyan-400" />,
    title: "Billing & Invoicing",
    description: "Generate bills, manage payments and insurance claims.",
  },
  {
    icon: <Pill className="h-6 w-6 text-cyan-400" />,
    title: "Pharmacy Management",
    description: "Inventory control, prescriptions, and stock updates.",
  },
  {
    icon: <FlaskConical className="h-6 w-6 text-cyan-400" />,
    title: "Lab & Radiology",
    description: "Handle lab test reports and radiology diagnostics.",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: "Security & Access Control",
    description: "Role-based access to protect sensitive data.",
  },
];

const Blogs = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0b1120] text-white py-26 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">HMS Modules</h1>
          <p className="text-gray-400 mb-10">
            All essential modules to manage your hospital efficiently.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {modules.map((mod, index) => (
              <div
                key={index}
                className="bg-[#111827] p-6 rounded-xl shadow hover:shadow-cyan-500/20 border border-gray-800 transition duration-300"
              >
                <div className="mb-3">{mod.icon}</div>
                <h2 className="text-lg font-semibold mb-1">{mod.title}</h2>
                <p className="text-sm text-gray-400">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Blogs;
