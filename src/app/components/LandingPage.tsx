'use client';

import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ServicesSection from './ServicesSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactSection from './ContactSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/auto-repair-bg.jpg')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Haitian Mike&apos;s Auto Repair
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Professional dent removal, paint jobs, and engine repair services in Miami.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="tel:305-123-1234"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg"
              aria-label="Call Haitian Mike's Auto Repair"
            >
              Call Now: 305-123-1234
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center text-white animate-bounce"
            aria-label="Scroll to services"
          >
            <span className="text-sm mb-2">Learn More</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </section>
      
      <ServicesSection />
      <TestimonialsCarousel />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Haitian Mike&apos;s Auto Repair. All rights reserved.</p>
          <p className="mt-2 text-gray-400">123 Auto Repair Street, Miami, FL 33127 | 305-123-1234</p>
        </div>
      </footer>
    </div>
  );
} 