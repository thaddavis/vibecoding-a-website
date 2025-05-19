"use client";

import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Starter",
    price: "$499/mo",
    features: [
      "Basic AI automations",
      "Email support",
      "Up to 2 workflows",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$999/mo",
    features: [
      "Advanced AI automations",
      "Priority support",
      "Up to 10 workflows",
      "Custom integrations",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "Unlimited workflows",
      "Dedicated account manager",
      "Custom AI solutions",
      "24/7 support",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl border border-gray-200 bg-white shadow-md p-8 text-center ${
              tier.highlight ? "border-primary shadow-lg scale-105" : ""
            }`}
          >
            <h2 className={`text-xl font-bold mb-2 ${tier.highlight ? "text-black" : "text-black"}`}>{tier.name}</h2>
            <div className={`text-3xl font-extrabold mb-4 ${tier.highlight ? "text-black" : "text-black"}`}>{tier.price}</div>
            <ul className="mb-8 space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="text-[#111]">{feature}</li>
              ))}
            </ul>
            <button
              className={`mt-auto inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-semibold shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                ${true && "bg-white text-black border border-maroon hover:bg-light"}
              `}
            >
              {tier.price === "Contact Us" ? "Contact Sales" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 