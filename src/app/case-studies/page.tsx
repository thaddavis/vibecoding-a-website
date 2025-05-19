"use client";

import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      <div className="space-y-8">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Retail Automation Success</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We helped a national retailer automate their inventory management, reducing manual effort by 70% and improving stock accuracy.
          </p>
        </div>
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">Healthcare Workflow Optimization</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI-driven scheduling solution enabled a healthcare provider to optimize staff allocation, resulting in a 30% increase in operational efficiency.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Financial Insights Automation</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We delivered a custom analytics platform for a financial services firm, automating reporting and uncovering new growth opportunities.
          </p>
        </div>
      </div>
    </motion.div>
  );
} 