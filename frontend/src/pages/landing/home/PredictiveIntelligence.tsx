import React from 'react'

const PredictiveIntelligence = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0e0e0e] to-[#121212] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#0e0e0e] text-sm tracking-widest text-green-400 rounded-full uppercase mb-4">
      🧠 Predictive Intelligence
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Predictive AI for Early Disease Detection
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Our intelligent prediction engine analyzes vitals, history, lifestyle patterns, and clinical data to deliver real-time alerts and actionable insights — enabling doctors to act before symptoms worsen.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Predict chronic disease onset (e.g., diabetes, cardiac risks)</li>
      <li>✔ Detect potential outbreaks in ICU/wards</li>
    </ul>
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Suggest preventive diagnostics for high-risk patients</li>
      <li>✔ Forecast patient admission trends for capacity planning</li>
    </ul>
  </div>

  <div className="text-center mt-12 max-w-3xl mx-auto text-gray-400 text-lg">
    Reduce readmissions, empower early interventions, and improve outcomes with AI-powered foresight.
  </div>
</section>
    </div>
  )
}

export default PredictiveIntelligence