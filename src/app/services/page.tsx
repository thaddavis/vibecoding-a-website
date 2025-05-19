"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="space-y-4">
        <li className="border-b pb-2">
          <span className="font-semibold">AI Process Automation:</span> Streamline and automate your business processes using advanced AI technologies.
        </li>
        <li className="border-b pb-2">
          <span className="font-semibold">Custom Software Development:</span> Build tailored software solutions to meet your unique business needs.
        </li>
        <li className="border-b pb-2">
          <span className="font-semibold">Data Analytics & Insights:</span> Unlock actionable insights from your data to drive smarter decisions.
        </li>
        <li className="border-b pb-2">
          <span className="font-semibold">Integration Services:</span> Seamlessly connect your existing tools and platforms for a unified workflow.
        </li>
        <li>
          <span className="font-semibold">Consulting & Strategy:</span> Expert guidance to help you plan, implement, and scale your automation initiatives.
        </li>
      </ul>
    </motion.div>
  );
} 