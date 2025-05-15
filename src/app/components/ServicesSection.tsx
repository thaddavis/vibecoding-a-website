'use client';

import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Service } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

// Haitian flag colors
const haitianColors = {
  blue: '#00209F',
  red: '#D21034',
  green: '#016A16',
  yellow: '#F1B517',
  white: '#FFFFFF'
};

// Darker variants for backgrounds with better text contrast
const darkColors = {
  darkBlue: '#001A7A',
  darkRed: '#B4102D',
  darkGreen: '#004B10'
};

export default function ServicesSection() {
  // Display only the first 3 services on the landing page
  const featuredServices = services.slice(0, 3);
  
  // Color schemes for each service
  const serviceColors = [
    { bg: darkColors.darkRed, accent: haitianColors.yellow, text: haitianColors.white }, 
    { bg: darkColors.darkBlue, accent: haitianColors.white, text: haitianColors.white }, 
    { bg: darkColors.darkGreen, accent: haitianColors.yellow, text: haitianColors.white }
  ];
  
  return (
    <section id="services" className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#00209F] mb-4">Our Services</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Haitian Mike&apos;s Auto Repair offers professional services to keep your vehicle in top condition.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredServices.map((service, index) => {
            const colorScheme = serviceColors[index % serviceColors.length];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-2"
                style={{ 
                  backgroundColor: colorScheme.bg,
                  borderColor: colorScheme.accent,
                  color: colorScheme.text
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 