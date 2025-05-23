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
      <p className="text-gray-600 dark:text-black mb-4">
        COMMAND LABS is a software agency based in Miami, FL. Since incorporating in 2017, we have delivered Full Stack MVPs, worked with multinational corporations, and helped grow many small businesses throughout the US and beyond through our diverse and deep skillset. Our team is committed to driving the latest advancements in technology and to delivering custom solutions tailored to your unique needs.
      </p>
    </motion.div>
  );
} 