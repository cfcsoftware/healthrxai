import LayoutWrapper from "../components/LayoutWrapper";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Hospitals",
      description:
        "HealthRx AI enhances hospital efficiency through AI-powered patient record management, smart scheduling, and real-time diagnostics support. It ensures faster treatment and reduces administrative burden.",
    },
    {
      title: "Clinics",
      description:
        "HealthRx AI empowers clinics with lightweight EMR tools, automated patient follow-ups, and intelligent diagnosis suggestions. It brings large-scale hospital-grade capabilities to smaller practices.",
    },
    {
      title: "Diagnostic Labs",
      description:
        "With advanced image and report analysis, HealthRx AI speeds up diagnostics and reduces human errors. Integrated result notifications ensure quick patient communication.",
    },
    {
      title: "Pharmacies",
      description:
        "HealthRx AI offers inventory prediction, e-prescription integration, and automated billing for pharmacies, making medicine management accurate and hassle-free.",
    },
    {
      title: "Multi-Branch Hospital Chains",
      description:
        "HealthRx AI unifies patient data across branches, supports centralized analytics, and enables coordinated care—ensuring seamless experience and compliance across the chain.",
    },
  ];

  return (
    <LayoutWrapper>
      <main className="px-6 py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
        HealthRx AI Solutions
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Discover how HealthRx AI adapts to different healthcare environments and transforms them with intelligence.
      </p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
            <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              {solution.title}
            </h2>
            <p className="text-gray-700 text-sm">{solution.description}</p>
          </div>
        ))}
      </div>
    </main>
  </LayoutWrapper>
  );
}
