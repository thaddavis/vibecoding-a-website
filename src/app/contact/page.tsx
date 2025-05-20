"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="max-w-md mx-auto py-16 px-4 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <iframe height="590px" width="420px" src="https://pre.dev/iframe/enterprise/chat/c98883fb-ba46-4cdc-a151-d9b60cddb75a"/>
    </motion.div>
  );
} 