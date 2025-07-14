import LayoutWrapper from "../components/LayoutWrapper";

export default function PricingPage() {
  return (
    <LayoutWrapper>

    <main className="min-h-screen bg-gray-50 py-20 px-4 text-gray-800">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Pricing Plans</h1>
        <p className="text-gray-600">Flexible plans for hospitals, clinics, and enterprises.</p>
      </section>

      {/* Pricing Cards */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">Free Trial</h2>
          <p className="text-gray-500 mb-4">Start exploring HealthrxAI features.</p>
          <p className="text-3xl font-bold mb-6">₹0</p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✔️ 7-day full feature access</li>
            <li>✔️ 5 patient records</li>
            <li>✔️ Email support</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Start Free Trial
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-2">Pro / Hospital License</h2>
          <p className="text-gray-500 mb-4">Perfect for individual hospitals.</p>
          <p className="text-3xl font-bold mb-6">₹14,999<span className="text-sm">/month</span></p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✔️ Unlimited patient records</li>
            <li>✔️ AI Diagnostics + HMS modules</li>
            <li>✔️ Chat & email support</li>
            <li>✔️ 3 User Accounts</li>
          </ul>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Subscribe Now
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-500">
          <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-500 mb-4">Multi-branch hospitals & chains.</p>
          <p className="text-3xl font-bold mb-6">Custom Quote</p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>✔️ Everything in Pro</li>
            <li>✔️ Multi-location support</li>
            <li>✔️ Custom AI workflows</li>
            <li>✔️ 24/7 premium support</li>
          </ul>
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Add-ons</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">🎙️ VoiceRx</h3>
            <p className="text-sm text-gray-600">Enable voice-to-prescription with accuracy tuning.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">🤖 Robot Integration</h3>
            <p className="text-sm text-gray-600">Connect HealthrxAI with robots for automated delivery or vitals.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">🧠 Custom AI Models</h3>
            <p className="text-sm text-gray-600">Deploy custom-trained models tailored to your hospital workflows.</p>
          </div>
        </div>
      </section>
    </main>
    </LayoutWrapper>
  );
}
