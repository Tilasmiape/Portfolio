'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, Film, Download } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function VideoShowcase() {
  const videoUrl = 'https://drive.google.com/uc?export=download&id=1PCEAhzPA6ezO9xprd4zQFzAlrHALsdtu';

  return (
    <section id="showreel" className="section-padding relative">
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Video Showreel"
          subtitle="A showcase of my creative video editing work using Adobe After Effects."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {/* Video Player with Direct Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border border-primary-500/20 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface-dark flex items-center justify-center border border-border-dark">
              {/* Video Player */}
              <video
                controls
                className="w-full h-full object-contain relative z-10"
                preload="metadata"
                playsInline
                controlsList="nodownload"
              >
                <source src={videoUrl} type="video/mp4" />
                <p className="text-white text-center p-4">
                  Your browser doesn't support HTML5 video. 
                  <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-primary-400 block mt-2">
                    Click here to download the video
                  </a>
                </p>
              </video>

              {/* Download Button */}
              <a
                href={videoUrl}
                download
                className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 hover:bg-black/80 transition-all duration-300 hover:border-primary-500/30"
              >
                <Download size={14} className="text-primary-400" />
                <span className="text-xs text-white/80">Download</span>
              </a>
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
                <a
                  href="https://drive.google.com/file/d/1PCEAhzPA6ezO9xprd4zQFzAlrHALsdtu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 flex items-center gap-1 hover:gap-2 transition-all duration-300 hover:text-primary-300"
                >
                  View on Google Drive
                  <ExternalLink size={12} />
                </a>
              </span>
            </div>
          </motion.div>

          {/* Alternative: Google Drive Embed Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="https://drive.google.com/file/d/1PCEAhzPA6ezO9xprd4zQFzAlrHALsdtu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text-muted hover:text-white border border-border hover:border-primary-500/30 rounded-lg transition-all duration-300 hover:bg-primary-500/5"
            >
              <ExternalLink size={14} />
              Open in Google Drive
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
