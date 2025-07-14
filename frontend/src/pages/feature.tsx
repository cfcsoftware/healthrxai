import LayoutWrapper from '../components/LayoutWrapper';
import React from 'react';

const Features: React.FC = () => {
  return (
    <LayoutWrapper>
    <div className="font-sans text-gray-800">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-2">Explore HealthRxAI Features</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Discover our advanced modules in HMS, AI, Blockchain, and Robotic Delivery.
        </p>
      </section>

      {/* HMS Modules */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">▸ HMS Modules</h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>OPD/IPD, Billing, Pharmacy, Lab, Radiology, Appointments</li>
          <li>VoiceRx and SOAP notes generator</li>
        </ul>
      </section>

      {/* AI Features */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">▸ AI Features</h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Voice-to-text SOAP</li>
          <li>AI Prescription</li>
          <li>Auto Billing</li>
          <li>Auto Alerts</li>
        </ul>
      </section>

      {/* Blockchain Security */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">▸ Blockchain Security</h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>HIPAA & GDPR compliance</li>
          <li>Patient records audit trail</li>
          <li>Smart contract-based record handling</li>
        </ul>
      </section>

      {/* Medicine Robot Delivery System */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">▸ Medicine Robot Delivery System</h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Overview of robot automation</li>
          <li>Navigation, Payload, Safety, Floor Management</li>
          <li>Video & images of robot in action (Coming Soon)</li>
        </ul>
      </section>
    </div>
    </LayoutWrapper>
  );
};

export default Features;
