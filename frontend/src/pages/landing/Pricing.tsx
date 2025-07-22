import React, { useState } from "react";
import HomeLayout from "../../layouts/HomeLayout";

type ValidityOption = "1 Month" | "6 Months" | "1 Year" | "Lifetime";

const validityOptions: ValidityOption[] = [
  "1 Month",
  "6 Months",
  "1 Year",
  "Lifetime",
];

const plans = [
  {
    name: "Basic",
    prices: {
      "1 Month": "₹999",
      "6 Months": "₹5,999",
      "1 Year": "₹9,999",
      "Lifetime": "₹29,999",
    },
    features: ["EMR Access", "Appointments", "Billing", "1 Branch, 5 Users"],
  },
  {
    name: "Gold",
    prices: {
      "1 Month": "₹1,999",
      "6 Months": "₹8,999",
      "1 Year": "₹14,999",
      "Lifetime": "₹39,999",
    },
    features: [
      "All Basic Features",
      "Lab + Pharmacy",
      "WhatsApp Reminders",
      "Multi Branch, 25 Users",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    prices: {
      "1 Month": "₹2,999",
      "6 Months": "₹11,999",
      "1 Year": "₹19,999",
      "Lifetime": "₹49,999",
    },
    features: [
      "All Gold Features",
      "AI Smart Analytics",
      "Insurance Integration",
      "Unlimited Users",
    ],
  },
];

const PricingPage: React.FC = () => {
  const [validity, setValidity] = useState<ValidityOption>("1 Month");

  return (
    <HomeLayout>
      <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00CFFF] mb-4">
            Flexible Pricing for Every Practice
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Choose the plan and duration that fits your healthcare goals.
          </p>

          {/* Validity Toggle */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {validityOptions.map((option) => (
              <button
                key={option}
                onClick={() => setValidity(option)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  validity === option
                    ? "bg-[#00CFFF] text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
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
                  {plan.prices[validity]}
                  <span className="text-sm text-gray-400 ml-1">({validity})</span>
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
                  {plan.prices[validity] === "Custom"
                    ? "Contact Sales"
                    : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default PricingPage;
