import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout";

type Currency = "INR" | "USD";
type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  prices: {
    monthly: { INR: string; USD: string };
    yearly: { INR: string; USD: string };
  };
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    prices: {
      monthly: { INR: "₹4,999", USD: "$60" },
      yearly: { INR: "₹49,999", USD: "$600" },
    },
    features: [
      "OPD/IPD Management",
      "Patient Registration & Appointments",
      "EMR/EHR Access",
      "Billing & Payments",
      "1 Branch, 10 Users",
    ],
  },
  {
    name: "Professional",
    prices: {
      monthly: { INR: "₹9,999", USD: "$120" },
      yearly: { INR: "₹99,999", USD: "$1,200" },
    },
    features: [
      "All Basic Features",
      "Lab & Radiology Integration",
      "Pharmacy + Inventory",
      "Telemedicine + WhatsApp Alerts",
      "Multi-branch, 50 Users",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    prices: {
      monthly: { INR: "Custom", USD: "Custom" },
      yearly: { INR: "Custom", USD: "Custom" },
    },
    features: [
      "All Professional Features",
      "AI Smart Diagnostics",
      "Insurance & TPA Claims",
      "Dedicated Support Manager",
      "Unlimited Users & Branches",
    ],
  },
];

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <HomeLayout>
      <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00CFFF] mb-4">
            Transparent, Scalable Pricing
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Choose the plan that fits your healthcare organization's needs.
          </p>

          {/* Toggle Controls */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-14">
            {/* Currency Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm">Currency:</span>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-4 py-2 rounded-lg ${
                  currency === "INR"
                    ? "bg-[#00CFFF] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-4 py-2 rounded-lg ${
                  currency === "USD"
                    ? "bg-[#00CFFF] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm">Billing:</span>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-lg ${
                  billingCycle === "monthly"
                    ? "bg-[#00CFFF] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-lg ${
                  billingCycle === "yearly"
                    ? "bg-[#00CFFF] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const price = plan.prices[billingCycle][currency];

            return (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "border-[#00CFFF] bg-gradient-to-br from-[#00CFFF]/20 to-[#00CFFF]/5"
                    : "border-gray-700 bg-[#1A1A1A]"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  {price}{" "}
                  {price !== "Custom" && (
                    <span className="text-sm text-gray-400">/{billingCycle}</span>
                  )}
                </p>
                <ul className="space-y-3 mb-6 text-gray-200 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-[#00CFFF] mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#00CFFF] hover:bg-[#00b8eb]"
                  }`}
                >
                  {price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </HomeLayout>
  );
};

export default Pricing;
