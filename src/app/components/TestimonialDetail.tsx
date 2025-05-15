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
      <span key={i} className="text-yellow-400">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close testimonial detail"
        >
          &times;
        </button>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0">
              {/* Placeholder for profile image */}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
              <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">{testimonial.service}</h4>
            <p className="text-gray-700 leading-relaxed">
              {testimonial.fullContent || testimonial.content}
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 