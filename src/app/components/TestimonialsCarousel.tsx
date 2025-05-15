'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialDetail from './TestimonialDetail';
import { testimonials } from '../data/testimonials';
import { Testimonial } from '../types';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleOpenDetail = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseDetail = () => {
    setSelectedTestimonial(null);
  };

  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our customers have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg shadow-lg p-8 cursor-pointer"
              onClick={() => handleOpenDetail(testimonials[currentIndex])}
            >
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex-shrink-0">
                  {/* Placeholder for profile image */}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
                    <div className="flex">{renderStars(testimonials[currentIndex].rating)}</div>
                  </div>
                  <p className="text-gray-700 mb-2">{testimonials[currentIndex].content}</p>
                  <p className="text-blue-600 font-medium">{testimonials[currentIndex].service}</p>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-500">Click to read more</div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            &rarr;
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      {selectedTestimonial && (
        <TestimonialDetail
          testimonial={selectedTestimonial}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
} 