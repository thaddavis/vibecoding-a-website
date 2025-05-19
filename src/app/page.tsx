"use client";

import Link from "next/link";
import { Bot, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="w-full py-20 md:py-32 xl:py-48 bg-maroon text-white text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">COMMAND LABS</h1>
            <p className="text-lg md:text-2xl mb-8">A.I. Automation Agency</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#d81b43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Skills
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#d81b43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Pricing
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="w-full py-16 md:py-24 bg-[#F8F8F8] text-[#111]"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={1}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                custom={2}
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Solutions</h3>
                <p className="text-[#111]">
                  Leverage cutting-edge artificial intelligence to automate and optimize your business processes.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                custom={3}
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Custom Development</h3>
                <p className="text-[#111]">
                  Tailored software solutions designed to meet your specific business needs and challenges.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-4 text-center"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                custom={4}
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rapid Implementation</h3>
                <p className="text-[#111]">
                  Quick deployment and seamless integration of automation solutions into your existing workflow.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="w-full py-16 md:py-24 bg-primary text-white"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={5}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guaranteed or Your Money Back</h2>
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black border border-maroon shadow transition-all duration-200 hover:bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View our Pricing
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
