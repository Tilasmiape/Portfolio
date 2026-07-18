'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpiderCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.style.cursor === 'pointer' ||
        target.classList.contains('cursor-pointer');
      
      setIsPointer(!!isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor - Spider-Man web style */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          mass: 0.5,
          stiffness: 300,
        }}
      >
        {/* Outer ring - Web pattern */}
        <div className="relative w-6 h-6">
          {/* Web circle */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            style={{ filter: 'drop-shadow(0 0 8px rgba(230,36,41,0.4))' }}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="#e62429"
              strokeWidth="1.5"
              opacity={isPointer ? 0.3 : 0.6}
            />
            {/* Web lines */}
            <line x1="12" y1="2" x2="12" y2="22" stroke="#e62429" strokeWidth="1" opacity="0.4" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="#e62429" strokeWidth="1" opacity="0.4" />
            <line x1="5" y1="5" x2="19" y2="19" stroke="#e62429" strokeWidth="1" opacity="0.3" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="#e62429" strokeWidth="1" opacity="0.3" />
            {/* Spider in center */}
            <circle cx="12" cy="12" r="2" fill="#e62429" opacity="0.8" />
            <circle cx="12" cy="12" r="1" fill="#fff" opacity="0.5" />
          </svg>
        </div>
      </motion.div>

      {/* Trail dots - Web shooter effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          mass: 0.3,
          stiffness: 200,
          delay: 0.05,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#e62429]/30 blur-[1px]" />
      </motion.div>

      {/* Second trail */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          mass: 0.2,
          stiffness: 150,
          delay: 0.1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#e62429]/15 blur-[2px]" />
      </motion.div>
    </>
  );
}