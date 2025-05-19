"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">About COMMAND LABS</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        COMMAND LABS is an AI Automation Agency dedicated to transforming businesses through intelligent automation solutions. Our team of experts leverages the latest advancements in artificial intelligence and software engineering to deliver custom solutions tailored to your unique needs.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        We believe in the power of technology to drive efficiency, innovation, and growth. Our mission is to empower organizations to achieve more with less by automating repetitive tasks, optimizing workflows, and unlocking new opportunities for success.
      </p>
    </motion.div>
  );
} 