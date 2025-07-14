import LayoutWrapper from "../components/LayoutWrapper";

export default function ResourcesPage() {
  return (
    <LayoutWrapper>

    <main className="min-h-screen px-6 py-20 bg-white text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Resources</h1>
        <p className="text-gray-600 text-lg">Insights, guides, and success stories from HealthrxAI</p>
      </section>

      {/* Blog & News */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📰 Blog & News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">AI Use Cases in Indian Hospitals</h3>
            <p className="text-sm text-gray-600">Real-world examples of how HealthrxAI improves care.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Industry News & Tech Updates</h3>
            <p className="text-sm text-gray-600">Trends in digital healthcare, compliance & AI regulations.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">AI in Healthcare Weekly</h3>
            <p className="text-sm text-gray-600">News roundups & what’s next in health AI.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🏥 Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Apollo Hospitals x HealthrxAI</h3>
            <p className="text-sm text-gray-600">Reduced diagnosis time by 45% using AI-assisted screening.</p>
          </div>
          <div className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Rural Clinics in UP</h3>
            <p className="text-sm text-gray-600">Using voice AI to manage patient loads without computers.</p>
          </div>
        </div>
      </section>

      {/* Whitepapers & Ebooks */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📘 Whitepapers & Ebooks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Blockchain in Healthcare</h3>
            <p className="text-sm text-gray-600">A deep dive into how blockchain ensures data security and interoperability in hospitals.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Voice AI Use Cases</h3>
            <p className="text-sm text-gray-600">Explore how voice-driven systems are transforming bedside reporting and prescriptions.</p>
          </div>
        </div>
      </section>

      {/* Product Documentation */}
      <section>
        <h2 className="text-2xl font-bold mb-6">📄 Product Documentation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">New Customer Guide</h3>
            <p className="text-sm text-gray-600">Step-by-step setup instructions for hospitals onboarding with HealthrxAI.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Onboarding Guide</h3>
            <p className="text-sm text-gray-600">Training and role-based access configuration for teams.</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">FAQs</h3>
            <p className="text-sm text-gray-600">Common setup, billing, and integration questions answered.</p>
          </div>
        </div>
      </section>
    </main>
    </LayoutWrapper>
  );
}
