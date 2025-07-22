import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import HomeLayout from "../../layouts/HomeLayout";

const ContactUS = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 py-25">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">Have questions? We'd love to help!</p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <Phone className="text-teal-400" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-teal-400" />
                  <span>support@healthrxai.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-teal-400" />
                  <span>1234 Health Street, Bangalore, India</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl transition font-medium w-full"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUS;
