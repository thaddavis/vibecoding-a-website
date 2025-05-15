'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  // In a production environment, these would be pulled from environment variables
  // const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '305-123-1234';
  // const address = process.env.NEXT_PUBLIC_ADDRESS || '123 Auto Repair Street, Miami, FL 33127';
  
  const phoneNumber = '305-123-1234';
  const address = '123 Auto Repair Street, Miami, FL 33127';
  
  return (
    <section id="contact" className="py-20 bg-[#00209F]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-white">
            Need auto repair services? Get in touch with Haitian Mike today for a free consultation.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-8 text-center border-4 border-[#F1B517]"
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-4 text-[#00209F]"
            >
              Call us directly
            </motion.div>
            
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-3xl md:text-4xl font-bold text-[#D21034] mb-6 hover:text-[#D21034]/90 transition-colors"
              aria-label={`Call us at ${phoneNumber}`}
            >
              {phoneNumber}
            </motion.a>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-800 mb-6">
                Our expert technicians are available Monday-Saturday, 8am-6pm.
                Call now for immediate assistance or to schedule an appointment.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-block px-8 py-4 bg-[#D21034] text-white font-semibold rounded-lg hover:bg-[#D21034]/90 transition-colors shadow-md"
                  aria-label={`Call Haitian Mike's Auto Repair at ${phoneNumber}`}
                >
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-8 text-white"
          >
            <p>Visit us at: {address}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 