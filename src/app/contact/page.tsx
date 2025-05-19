"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="max-w-md mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input id="name" name="name" type="text" className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-900" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-900" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-900" placeholder="How can we help you?" />
        </div>
        <button type="submit" className="w-full rounded-md bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 py-2 font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Send Message</button>
      </form>
    </motion.div>
  );
} 