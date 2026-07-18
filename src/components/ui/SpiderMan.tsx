'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SpiderManProps {
  className?: string;
  size?: number;
  hanging?: boolean;
  swinging?: boolean;
  webLength?: number;
  imagePath?: string;
}

export default function SpiderMan({ 
  className = '', 
  size = 80, 
  hanging = false,
  swinging = false,
  webLength = 120,
  imagePath = '/images/spiderman.png.png'
}: SpiderManProps) {
  const [swingAngle, setSwingAngle] = useState(0);

  useEffect(() => {
    if (swinging) {
      const interval = setInterval(() => {
        setSwingAngle(prev => {
          const newAngle = prev + 0.02;
          return newAngle > 0.5 ? -0.5 : newAngle;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [swinging]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size + (hanging ? webLength : 0),
        transform: swinging ? `rotate(${swingAngle * 25}deg)` : 'none',
        transformOrigin: 'top center',
        transition: swinging ? 'transform 0.05s ease' : 'none'
      }}
    >
      {/* Web Thread */}
      {hanging && (
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2"
          width="2"
          height={webLength}
          viewBox={`0 0 2 ${webLength}`}
        >
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2={webLength}
            stroke="#e62429"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <circle cx="1" cy={webLength - 5} r="1.5" fill="#e62429" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* Spider-Man PNG Image */}
      <motion.div
        className={`absolute ${hanging ? `top-[${webLength}px]` : 'top-0'} left-0 w-full h-full`}
        initial={hanging ? { y: -20, opacity: 0 } : { opacity: 0, scale: 0.8 }}
        animate={hanging ? { y: 0, opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src={imagePath}
          alt="Spider-Man"
          width={size}
          height={size}
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(230,36,41,0.3)]"
          priority
        />
      </motion.div>
    </div>
  );
}