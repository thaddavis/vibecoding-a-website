'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialDetail from './TestimonialDetail';
import { testimonials } from '../data/testimonials';
import { Testimonial } from '../types';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
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

  // Handle swipe gestures for mobile
  const handleSwipe = (direction: number) => {
    if (direction > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className="text-[#F1B517]">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-[#F8F8FF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#00209F] mb-2 md:mb-4">Customer Testimonials</h2>
          <p className="text-sm md:text-base text-gray-800 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - see what our customers have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => handleSwipe(info.offset.x)}
              className="bg-white rounded-lg shadow-lg p-4 md:p-8 cursor-pointer border-2 border-[#00209F]"
              onClick={() => handleOpenDetail(testimonials[currentIndex])}
            >
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#00209F]/10 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">{testimonials[currentIndex].name.charAt(0)}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-[#00209F] mb-1 md:mb-0">{testimonials[currentIndex].name}</h3>
                    <div className="flex justify-center md:justify-start">{renderStars(testimonials[currentIndex].rating)}</div>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 mb-2">{testimonials[currentIndex].content}</p>
                  <p className="text-[#D21034] font-medium text-sm md:text-base">{testimonials[currentIndex].service}</p>
                </div>
              </div>
              <div className="text-center mt-4 text-xs md:text-sm text-gray-600">
                {isMobile ? "Swipe or tap to read more" : "Click to read more"}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons - hidden on mobile */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-[#00209F] text-white rounded-full w-10 h-10 items-center justify-center shadow-md hover:bg-[#00209F]/80 border border-white"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-[#00209F] text-white rounded-full w-10 h-10 items-center justify-center shadow-md hover:bg-[#00209F]/80 border border-white"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            &rarr;
          </button>

          {/* Mobile navigation buttons */}
          <div className="flex justify-between mt-4 md:hidden">
            <button
              onClick={handlePrev}
              className="bg-[#00209F] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#00209F]/80 border border-white"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="bg-[#00209F] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#00209F]/80 border border-white"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>

          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentIndex ? 'bg-[#D21034]' : 'bg-gray-300'
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