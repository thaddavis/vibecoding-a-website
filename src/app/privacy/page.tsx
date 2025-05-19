"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This is a sample privacy policy for COMMAND LABS. We are committed to protecting your privacy and ensuring the security of your personal information.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        We may collect personal information such as your name, email address, and any other details you provide through our contact forms or services.
      </p>
      <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Your information is used solely to provide and improve our services, respond to your inquiries, and communicate with you about updates or offers.
      </p>
      <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        You have the right to request access to, correction of, or deletion of your personal data. Please contact us if you have any questions or requests regarding your privacy.
      </p>
    </motion.div>
  );
} 