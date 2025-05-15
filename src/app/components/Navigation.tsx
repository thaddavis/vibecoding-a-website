'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type NavItem = {
  label: string;
  target: string;
};

const navItems: NavItem[] = [
  { label: 'Services', target: 'services' },
  { label: 'Testimonials', target: 'testimonials' },
  { label: 'Contact', target: 'contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle smooth scrolling
  const handleClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.target);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md border-b-2 border-[#D21034]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-[#00209F] truncate md:text-xl sm:text-lg">
            <span className="hidden sm:inline">Haitian </span>Mike&apos;s Auto Repair
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => handleClick(item.target)}
                  className={`relative px-2 py-1 text-sm font-medium ${
                    activeSection === item.target ? 'text-[#D21034]' : 'text-gray-700 hover:text-[#00209F]'
                  }`}
                  aria-label={`Scroll to ${item.label} section`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D21034]"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => handleClick(item.target)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                      activeSection === item.target ? 'text-[#D21034] bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#00209F]'
                    }`}
                    aria-label={`Scroll to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 