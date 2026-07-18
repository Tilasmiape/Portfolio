'use client';

import { motion } from 'framer-motion';
import SpiderMan from './SpiderMan';
import { useEffect, useState } from 'react';

interface SpiderSwingingBannerProps {
  imagePath?: string;
}

export default function SpiderSwingingBanner({ 
  imagePath = '/images/spiderman2.png.png'
}: SpiderSwingingBannerProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const swingRotation = Math.sin(scrollY * 0.002) * 5;

  return (
    <div className="fixed top-20 right-4 z-50 hidden lg:block pointer-events-none">
      <motion.div
        animate={{
          rotate: [swingRotation - 2, swingRotation + 2, swingRotation - 2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: 'top center',
        }}
      >
        <SpiderMan 
          size={70} 
          hanging={true} 
          swinging={true}
          webLength={140}
          imagePath={imagePath}
        />
      </motion.div>
      
      {/* "Amazing" text bubble */}
      <motion.div
        className="absolute -top-8 -right-4 bg-[#e62429] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🕸️ AMAZING!
      </motion.div>
    </div>
  );
}