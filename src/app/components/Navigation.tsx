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

  // Handle smooth scrolling
  const handleClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Haitian Mike&apos;s Auto Repair</div>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => handleClick(item.target)}
                  className={`relative px-2 py-1 text-sm font-medium ${
                    activeSection === item.target ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
                  }`}
                  aria-label={`Scroll to ${item.label} section`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
} 