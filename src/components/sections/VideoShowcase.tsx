'use client';

import { motion } from 'framer-motion';
import { Film, ExternalLink, Play } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function VideoShowcase() {
  const videoUrl = 'https://drive.google.com/file/d/1PCEAhzPA6ezO9xprd4zQFzAlrHALsdtu/view?usp=sharing';

  return (
    <section id="showreel" className="section-padding relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Video Showreel"
          subtitle="A showcase of my creative video editing work using Adobe After Effects."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border border-primary-500/20 group relative overflow-hidden block transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(0,240,255,0.25)]"
          >
            {/* Subtle glow effect behind the video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface-dark flex items-center justify-center border border-border-dark">
              {/* Video Thumbnail / Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted z-0 bg-gradient-to-br from-surface-dark to-surface-dark-alt">
                {/* Large play button icon */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary-500/20 border-2 border-primary-500/40 flex items-center justify-center shadow-[0_0_60px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_80px_rgba(0,240,255,0.35)] transition-all duration-500 group-hover:scale-110">
                    <Play size={40} className="text-primary-400 ml-1 drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
                  </div>
                  {/* Pulsing ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-ping opacity-75" />
                </div>
                
                <p className="mt-6 font-heading text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                  Adobe After Effects Showreel
                </p>
                <p className="text-sm text-text-muted mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Click to watch on Google Drive
                </p>
                <p className="text-xs text-text-muted/50 mt-3 flex items-center gap-1">
                  <Film size={14} />
                  Duration: 0:56
                </p>
              </div>

              {/* Video title overlay */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 hidden sm:block">
                <span className="text-xs font-medium text-white/80 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Adobe After Effects Showreel
                </span>
              </div>

              {/* Watch on Drive badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <ExternalLink size={12} className="text-primary-400" />
                <span className="text-xs text-white/80">Watch on Drive</span>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 flex items-center justify-between text-sm text-text-muted px-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Adobe After Effects Showreel
              </span>
              <span className="flex items-center gap-3 text-xs">
                <span className="opacity-60">🎬 0:56</span>
                <span className="opacity-40">|</span>
                <span className="text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  View on Google Drive
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
