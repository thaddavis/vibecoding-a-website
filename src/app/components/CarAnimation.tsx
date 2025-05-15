'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CarAnimation() {
  const [randomSeeds, setRandomSeeds] = useState<number[]>([]);
  
  // Generate random seeds for animation variations
  useEffect(() => {
    setRandomSeeds(Array(10).fill(0).map(() => Math.random()));
  }, []);
  
  return (
    <div className="absolute inset-0 z-5 overflow-hidden">
      {/* Road with perspective */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-800 to-transparent" />
      
      {/* Highway lines - center */}
      <motion.div 
        className="absolute bottom-0 left-1/2 w-[8px] h-40 flex flex-col justify-between transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-[20px] bg-yellow-400"
            animate={{
              opacity: [1, 0.3, 1],
              scaleY: [1, 0.9, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>
      
      {/* Main car animation */}
      <motion.div
        className="absolute bottom-8 w-32 h-16 z-30"
        initial={{ x: -150, opacity: 0 }}
        animate={{ 
          x: ['calc(-10vw)', 'calc(110vw)'],
          opacity: [0, 1, 1, 0],
          y: [0, -2, 0, -3, 0]
        }}
        transition={{ 
          duration: 12,
          times: [0, 0.05, 0.95, 1],
          y: {
            duration: 0.8,
            repeat: 15,
            repeatType: "mirror"
          },
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        {/* Car SVG with animated elements */}
        <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Car body */}
          <motion.path 
            d="M220,60h-32l-20-30H80L60,60H20C10,60,0,70,0,80v10h240V80C240,70,230,60,220,60z" 
            fill="#3b82f6"
            animate={{ fill: ['#3b82f6', '#2563eb', '#3b82f6'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Windshield */}
          <path d="M80,60V40h80v20" fill="rgba(255,255,255,0.7)" />
          
          {/* Windows */}
          <path d="M70,40h20v20H60z M150,40h20v20h-20z" fill="rgba(255,255,255,0.5)" />
          
          {/* Wheels */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="60" cy="80" r="15" fill="black" />
            <circle cx="60" cy="80" r="8" fill="#333" />
            <circle cx="60" cy="80" r="3" fill="#666" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="180" cy="80" r="15" fill="black" />
            <circle cx="180" cy="80" r="8" fill="#333" />
            <circle cx="180" cy="80" r="3" fill="#666" />
          </motion.g>
          
          {/* Headlights */}
          <motion.circle
            cx="220" cy="65" r="8"
            fill="yellow"
            animate={{ opacity: [1, 0.7, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="220" cy="65" r="12"
            fill="yellow"
            opacity={0.3}
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Tail lights */}
          <motion.rect
            x="10" y="60" width="10" height="6" rx="2"
            fill="red"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      
      {/* Passing cars in opposite direction */}
      {randomSeeds.length > 0 && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-8 w-24 h-12 scale-x-[-1]"
          style={{ 
            bottom: `${randomSeeds[i] * 10 + 12}px`,
            opacity: 0.5 + randomSeeds[i] * 0.3
          }}
          initial={{ x: '110vw' }}
          animate={{ 
            x: [null, '-10vw'],
          }}
          transition={{ 
            duration: 5 + randomSeeds[i] * 4,
            repeat: Infinity,
            repeatDelay: randomSeeds[i+3] * 5 + 2,
            delay: i * 3 + randomSeeds[i+6] * 2
          }}
        >
          <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M100,30h-16l-10-15H40L30,30H10C5,30,0,35,0,40v5h120V40C120,35,115,30,100,30z" 
              fill={`hsl(${Math.floor(randomSeeds[i] * 360)}, 70%, 50%)`}
            />
            <circle cx="30" cy="40" r="7" fill="black" />
            <circle cx="90" cy="40" r="7" fill="black" />
            <rect x="95" y="30" width="5" height="3" rx="1" fill="red" />
            <circle cx="10" cy="32" r="4" fill="yellow" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
      
      {/* Flying tool icons */}
      {randomSeeds.length > 0 && ['🔧', '🔨', '🛠️', '⚙️', '🔩'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-70"
          style={{ 
            left: `${10 + i * 20}%`,
            top: `${20 + randomSeeds[i] * 20}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, randomSeeds[i+1] > 0.5 ? 15 : -15, 0],
            rotate: [0, randomSeeds[i] > 0.5 ? 180 : -180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 4 + randomSeeds[i] * 2,
            repeat: Infinity,
            delay: i * 0.7
          }}
        >
          {icon}
        </motion.div>
      ))}
      
      {/* Smoke/spark effects */}
      {randomSeeds.length > 0 && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' 
              : 'radial-gradient(circle, rgba(255,220,100,0.8) 0%, rgba(255,220,100,0) 70%)',
            width: `${randomSeeds[i] * 30 + 10}px`,
            height: `${randomSeeds[i] * 30 + 10}px`,
            left: `${randomSeeds[i+2] * 80 + 10}%`,
            bottom: `${randomSeeds[i] * 20 + 10}%`
          }}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.2, 1, 1.5],
            y: [0, -40 - randomSeeds[i] * 20]
          }}
          transition={{
            duration: 1 + randomSeeds[i] * 1.5,
            repeat: Infinity,
            repeatDelay: 2 + randomSeeds[i+3] * 3
          }}
        />
      ))}
    </div>
  );
} 