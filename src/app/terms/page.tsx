"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        These are the sample terms and conditions for using COMMAND LABS. By accessing or using our website and services, you agree to the following terms.
      </p>
      <h2 className="text-xl font-semibold mb-2">Use of Services</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        You agree to use our services only for lawful purposes and in accordance with these terms. Unauthorized use or misuse of our services is strictly prohibited.
      </p>
      <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        All content, trademarks, and intellectual property on this site are the property of COMMAND LABS or its licensors. You may not reproduce or distribute any content without permission.
      </p>
      <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        COMMAND LABS is not liable for any damages arising from the use or inability to use our services. Use our services at your own risk.
      </p>
    </motion.div>
  );
} 