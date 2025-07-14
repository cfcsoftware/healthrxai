import LayoutWrapper from "../components/LayoutWrapper";

export default function CompanyPage() {
  const team = [
    { name: "Dr. Ayesha Mehra", role: "Co-Founder & CEO" },
    { name: "Rohan Kulkarni", role: "CTO" },
    { name: "Sneha Rao", role: "Chief AI Architect" },
    { name: "Karthik Iyer", role: "Product Head" },
  ];

  return (
    <LayoutWrapper>

    <main className="px-6 py-20 max-w-6xl mx-auto text-gray-800 space-y-16">
      {/* About Section */}
      <section>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About HealthRx AI</h1>
        <p className="text-lg mb-2">
          HealthRx AI is a next-generation healthcare technology platform, transforming how hospitals and
          clinics deliver care through AI, robotics, blockchain, and automation.
        </p>
        <p className="text-lg">
          Our mission is to make high-quality healthcare accessible, smart, and scalable — improving outcomes
          and reducing burden for medical professionals.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Meet the Founders & Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Careers</h2>
        <p className="mb-4">We're hiring passionate people who want to make healthcare better through tech.</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Open Positions</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-Stack Developer (Remote)</li>
            <li>AI Research Intern (Bangalore)</li>
            <li>Partnership Manager (Mumbai)</li>
          </ul>
        </div>

        <form className="bg-gray-50 p-6 rounded-lg shadow space-y-4 max-w-xl">
          <h4 className="text-xl font-semibold">Apply Now</h4>
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
          <textarea placeholder="Why do you want to join?" className="w-full p-2 border rounded h-24" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Application
          </button>
        </form>
      </section>

      {/* Partner Program */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Partner Program</h2>
        <p className="mb-4">We're actively collaborating with global partners to grow together.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Reseller Partners</h3>
            <p className="text-sm text-gray-600">
              Work with us to distribute HealthRx AI across new hospitals and regions.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
            <p className="text-sm text-gray-600">
              Build AI modules or integrated solutions using our API and hospital SDKs.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a href="/contact" className="text-blue-600 underline font-semibold">
            Contact us to become a partner →
          </a>
        </div>
      </section>
    </main>
          </LayoutWrapper>
  );
}
