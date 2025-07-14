"use client";
import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Sales Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Form submitted successfully!");
    setForm({ name: "", email: "", role: "Sales Inquiry", message: "" });
  };

  return (
    <LayoutWrapper>
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">Contact HealthRx AI</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border rounded px-4 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">I’m contacting for</label>
            <select
              className="w-full border rounded px-4 py-2"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option>Sales Inquiry</option>
              <option>Hospital Onboarding</option>
              <option>Support</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full border rounded px-4 py-2"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Support & Sales</h2>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@healthrx.ai
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Head Office</h2>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> HealthRx AI, Bangalore, Karnataka, India
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4 text-xl text-blue-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
    </LayoutWrapper>
  );
}
