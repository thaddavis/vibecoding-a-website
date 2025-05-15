'use client';

import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ServicesSection from './ServicesSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactSection from './ContactSection';
import CarAnimation from './CarAnimation';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/40 z-10"></div>
        
        {/* Background image with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/auto-repair-bg.svg')] bg-cover bg-center opacity-70"></div>
        
        {/* Car animation */}
        <CarAnimation />
        
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="tel:305-123-1234"
              className="inline-block px-8 py-4 bg-[#00209F] hover:bg-[#D21034] text-white font-bold rounded-lg text-lg transition-colors shadow-lg border-2 border-[#F1B517]"
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
            className="flex flex-col items-center text-[#F1B517]"
            aria-label="Scroll to services"
          >
            <motion.span 
              className="text-sm mb-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Learn More
            </motion.span>
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </button>
        </motion.div>
      </section>
      
      <ServicesSection />
      <TestimonialsCarousel />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-[#00209F] text-white py-8 border-t-4 border-[#F1B517]">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Haitian Mike&apos;s Auto Repair. All rights reserved.</p>
          <p className="mt-2 text-[#F1B517]">123 Auto Repair Street, Miami, FL 33127 | 305-123-1234</p>
        </div>
      </footer>
    </div>
  );
} 