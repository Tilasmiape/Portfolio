'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function Hero() {
  // ✅ Use state to store random values, generated only on client
  const [webShots, setWebShots] = useState<Array<{
    tx: string;
    ty: string;
    left: string;
    top: string;
    delay: string;
  }>>([]);

  useEffect(() => {
    // ✅ Generate random values only on the client side
    const shots = Array.from({ length: 8 }, (_, i) => ({
      tx: `${(Math.random() - 0.5) * 200}px`,
      ty: `${(Math.random() - 0.5) * 200}px`,
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${i * 0.5}s`,
    }));
    setWebShots(shots);
  }, []);

  return (
    <section
      id="home"
      className="hero-spider min-h-screen flex items-center justify-center relative"
    >
      {/* Spider-Man Web Shots (decorative) - Only rendered on client */}
      {webShots.map((shot, i) => (
        <div
          key={i}
          className="web-shot"
          style={{
            '--tx': shot.tx,
            '--ty': shot.ty,
            animationDelay: shot.delay,
            left: shot.left,
            top: shot.top,
          } as React.CSSProperties}
        />
      ))}

      <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Spider-Man Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-[#e62429] text-sm font-medium rounded-full border border-[#e62429]/30 animate-pulse-red">
            <span className="w-2 h-2 bg-[#e62429] rounded-full animate-pulse" />
            🕷️ With Great Power Comes Great Responsibility
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Hi, I&apos;m{' '}
          <span className="spider-logo-text inline-flex items-center gap-2">
            {personalInfo.name}
            <span className="text-2xl">🕷️</span>
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl text-[#888888] max-w-2xl mx-auto font-medium"
        >
          {personalInfo.title}
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-[#888888] max-w-xl mx-auto leading-relaxed"
        >
          {personalInfo.heroIntro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            <FolderOpen size={18} />
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#e62429]/20 flex items-center justify-center text-[#888888] hover:text-[#e62429] hover:border-[#e62429]/40 transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#e62429]/20 flex items-center justify-center text-[#888888] hover:text-[#e62429] hover:border-[#e62429]/40 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-[#888888]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}