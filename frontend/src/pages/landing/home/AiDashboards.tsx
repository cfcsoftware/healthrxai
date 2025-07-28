import React from 'react'

const AiDashboards = () => {
  return (
    <div>
        <section className="bg-[#0d0d0d] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1f1f1f] text-sm tracking-widest text-cyan-400 rounded-full uppercase mb-4">
      📊 AI Dashboards
    </div>
    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      AI Dashboards & Custom Analytics
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Tailored dashboards for every stakeholder, powered by real-time data and AI-driven insights.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-300 text-base">
    <ul className="space-y-4">
      <li>✔ Hospital Admins – Revenue, KPIs, Staff Productivity</li>
      <li>✔ Doctors – Patient Queue, Lab Reports, Prescriptions</li>
      <li>✔ Lab – Sample Tracking, Auto-Reports, AI Flags</li>
    </ul>
    <ul className="space-y-4">
      <li>✔ Finance – Claims, Billing Cycle, Cost Analysis</li>
      <li>✔ Inventory – Medicine Levels, Expiry Alerts</li>
    </ul>
  </div>

  <div className="text-center mt-12 text-sm text-gray-500">
    Visualize operations. Personalize decision-making. Act instantly.
  </div>

  {/* Testimonials Section */}
  <div className="mt-20 text-center">
    <h3 className="text-2xl font-semibold mb-6 text-white">💬 Trusted by Healthcare Leaders</h3>
    <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 text-left">
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <p className="text-gray-300 italic mb-4">
          "From robotic assistance to predictive analytics, HealthRx AI made our hospital futuristic."
        </p>
        <span className="font-medium text-white">– Dr. Sanjeev Kulkarni, Chairman, AlphaCare Hospital</span>
      </div>
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <p className="text-gray-300 italic mb-4">
          "The disease prediction system helped reduce patient readmissions by 25%."
        </p>
        <span className="font-medium text-white">– Dr. Ayesha Mittal, CMO, MedEra Multi-Specialty</span>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AiDashboards