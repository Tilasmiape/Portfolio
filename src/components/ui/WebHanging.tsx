'use client';

import { motion } from 'framer-motion';
import SpiderMan from './SpiderMan';

interface WebHangingProps {
  className?: string;
  size?: number;
  webLength?: number;
  imagePath?: string;
}

export default function WebHanging({ 
  className = '', 
  size = 60, 
  webLength = 100,
  imagePath = '/images/spiderman.png.png'
}: WebHangingProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Web anchor point at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4">
        <div className="w-full h-full rounded-full bg-[#e62429] animate-pulse" />
        <svg className="absolute -top-2 left-1/2 -translate-x-1/2" width="30" height="8">
          <line x1="5" y1="0" x2="15" y2="8" stroke="#e62429" strokeWidth="1" opacity="0.3" />
          <line x1="15" y1="0" x2="15" y2="8" stroke="#e62429" strokeWidth="1" opacity="0.3" />
          <line x1="25" y1="0" x2="15" y2="8" stroke="#e62429" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      
      <SpiderMan 
        size={size} 
        hanging={true} 
        swinging={true}
        webLength={webLength}
        imagePath={imagePath}
      />
      
      {/* Spider-Man shadow on ground */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full bg-black/20 blur-sm"
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}