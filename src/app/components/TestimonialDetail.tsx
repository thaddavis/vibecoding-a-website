'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '../types';

type TestimonialDetailProps = {
  testimonial: Testimonial;
  onClose: () => void;
};

export default function TestimonialDetail({ testimonial, onClose }: TestimonialDetailProps) {
  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className="text-[#F1B517]">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 md:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden relative border-2 md:border-4 border-[#00209F] max-h-[90vh] flex flex-col"
      >
        <div className="bg-[#00209F] py-2 px-3 md:px-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-sm md:text-base">Customer Testimonial</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-[#F1B517] text-xl font-bold"
            aria-label="Close testimonial detail"
          >
            &times;
          </button>
        </div>
        <div className="p-4 md:p-8 overflow-y-auto">
          <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00209F]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold text-[#00209F]">{testimonial.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#00209F]">{testimonial.name}</h3>
              <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-md md:text-lg font-semibold text-[#D21034] mb-2">{testimonial.service}</h4>
            <p className="text-sm md:text-base text-gray-800 leading-relaxed">
              {testimonial.fullContent || testimonial.content}
            </p>
          </div>
          <div className="mt-6 md:mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 md:px-6 py-1 md:py-2 bg-[#D21034] text-white text-sm md:text-base rounded-md hover:bg-[#D21034]/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 