import React from 'react'

const BlockchainSecurity = () => {
  return (
    <div>
        <section className="bg-gradient-to-b from-black to-[#0f0f0f] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-cyan-400 rounded-full uppercase mb-4">
      🔐 Blockchain Security
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Unbreakable Security with Blockchain Technology
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Security and transparency are built into the DNA of HealthRx AI. Every transaction, access, and update is protected by decentralized integrity.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Blockchain Encryption for tamper-proof medical records</li>
      <li>✔ Complete Audit Trails for every action</li>
      <li>✔ Role-Based Access Control (RBAC)</li>
    </ul>
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Immutable Logs & Timestamped Transaction History</li>
      <li>✔ Fully Compliant with HIPAA, GDPR, NABH, and HL7/FHIR Standards</li>
    </ul>
  </div>

  <div className="text-center mt-12 text-sm text-gray-500">
    Built for trust. Built for compliance. Built for the future.
  </div>
</section>
    </div>
  )
}

export default BlockchainSecurity