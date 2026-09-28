'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film, Volume2, VolumeX, Play, Pause, Maximize, ExternalLink, 
  ChevronLeft, ChevronRight, X, Youtube, Instagram 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState, useRef, useEffect, useCallback } from 'react';

export interface VideoItem {
  id: string;
  title: string;
  type: 'local' | 'iframe' | 'link';
  src?: string;
  driveLink?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  badge: string;
  description: string;
  coverGradient: string;
  software: string[];
  durationStr?: string;
}

const videos: VideoItem[] = [
  {
    id: 'news-edit',
    title: 'News Edit & Motion Graphics',
    type: 'local',
    src: '/videos/news-edit.mp4',
    badge: 'Motion Graphics & VFX',
    description: 'Dynamic news edit featuring kinetic typography, lower thirds, 3D camera tracking, and sound design created in Adobe After Effects.',
    coverGradient: 'from-red-950 via-slate-900 to-black',
    software: ['After Effects', 'Premiere Pro', 'Element 3D'],
    durationStr: '0:45',
  },
  {
    id: 'ae-drive-edit',
    title: 'Kinetic Typography & 3D Motion',
    type: 'iframe',
    src: 'https://drive.google.com/file/d/1r4EYOL_L9fCi8wzJ4U6hOVOTx6bsIXXE/preview',
    driveLink: 'https://drive.google.com/file/d/1r4EYOL_L9fCi8wzJ4U6hOVOTx6bsIXXE/view?usp=drive_link',
    badge: '3D Motion & Typography',
    description: 'Showcase of kinetic typography animations, 3D layer depth, smooth camera moves, and visual storytelling.',
    coverGradient: 'from-blue-950 via-slate-900 to-black',
    software: ['After Effects', 'Cinema 4D', 'Audition'],
    durationStr: '1:12',
  },
  {
    id: 'wait-what-shorts',
    title: 'Wait What — Crime Shorts Edit',
    type: 'link',
    youtubeUrl: 'https://www.youtube.com/@WaitWhatSocial/shorts',
    badge: 'YouTube SEO & Shorts',
    description: 'High-retention crime story shorts edited with fast-paced kinetic text, sound design, and custom thumbnail A/B testing.',
    coverGradient: 'from-amber-950 via-slate-900 to-black',
    software: ['After Effects', 'Canva', 'YouTube Studio'],
    durationStr: 'Shorts Reel',
  },
  {
    id: 'tales-dead-edit',
    title: 'Tales of the Dead — History Series',
    type: 'link',
    youtubeUrl: 'https://www.youtube.com/@TalesoftheDeadOfficial',
    badge: 'Documentary & Voiceover',
    description: 'Historical documentary video edits with voiceover integration, atmospheric visual effects, and strategic 5-second intro hooks.',
    coverGradient: 'from-emerald-950 via-slate-900 to-black',
    software: ['After Effects', 'Eleven Labs', 'IX Browser'],
    durationStr: 'Series Edit',
  },
  {
    id: 'folurhubby-edit',
    title: 'Folurhubby — Motion Reels',
    type: 'link',
    instagramUrl: 'https://www.instagram.com/folurhubby/',
    badge: 'Social Media & Motion',
    description: 'Creative short-form motion graphics and visual storytelling reel crafted for social media audiences.',
    coverGradient: 'from-pink-950 via-slate-900 to-black',
    software: ['After Effects', 'Premiere Pro', 'Photoshop'],
    durationStr: 'Instagram Reel',
  },
];

export default function VideoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = videos[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const handleSelectCard = (index: number) => {
    if (index === currentIndex) {
      setIsPlayingModal(true);
    } else {
      setCurrentIndex(index);
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      setDuration(0);
    }
  };

  useEffect(() => {
    if (isPlayingModal && activeVideo.type === 'local' && videoRef.current) {
      const video = videoRef.current;
      video.load();

      const handleLoadedMetadata = () => {
        video.muted = false;
        video.volume = 1.0;
        setDuration(video.duration);
        video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      };

      const handleTimeUpdate = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
        setCurrentTime(video.currentTime);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isPlayingModal, activeVideo.id, activeVideo.type]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = isMuted;
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = x * videoRef.current.duration;
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Compute 3D slant style for card at index i relative to currentIndex
  const getCardStyle = (index: number) => {
    const total = videos.length;
    let diff = index - currentIndex;

    // Handle circular wrap for closest rendering
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    if (diff === 0) {
      // Center Active 3D Card
      return {
        transform: 'translateX(0%) rotateY(0deg) translateZ(80px) scale(1.05)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1.05)',
        pointerEvents: 'auto' as const,
      };
    } else if (diff < 0) {
      // Left Slanted 3D Card
      const rotateY = Math.min(38, 28 + absDiff * 6);
      const translateX = -65 * absDiff;
      const translateZ = -60 * absDiff;
      const scale = Math.max(0.7, 0.9 - absDiff * 0.1);

      return {
        transform: `translateX(${translateX}%) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
        zIndex: 20 - absDiff,
        opacity: Math.max(0.3, 0.7 - absDiff * 0.2),
        filter: 'brightness(0.65)',
        pointerEvents: 'auto' as const,
      };
    } else {
      // Right Slanted 3D Card
      const rotateY = -Math.min(38, 28 + absDiff * 6);
      const translateX = 65 * absDiff;
      const translateZ = -60 * absDiff;
      const scale = Math.max(0.7, 0.9 - absDiff * 0.1);

      return {
        transform: `translateX(${translateX}%) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
        zIndex: 20 - absDiff,
        opacity: Math.max(0.3, 0.7 - absDiff * 0.2),
        filter: 'brightness(0.65)',
        pointerEvents: 'auto' as const,
      };
    }
  };

  return (
    <section id="showreel" className="section-padding relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="3D Video Showreel"
          subtitle="Interactive 3D showcase of my Motion Graphics, Kinetic Typography, 3D Edits, and Video Production work created in Adobe After Effects."
        />

        {/* ─── 3D SLANTED CAROUSEL CONTAINER ─── */}
        <div className="relative my-10 py-8 px-2 flex flex-col items-center">
          {/* 3D Perspective Stage */}
          <div 
            className="relative w-full max-w-5xl h-[420px] sm:h-[460px] flex items-center justify-center"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            {videos.map((item, idx) => {
              const style3d = getCardStyle(idx);
              const isActive = idx === currentIndex;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => handleSelectCard(idx)}
                  initial={false}
                  animate={style3d}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  className={`absolute top-0 w-[290px] sm:w-[360px] md:w-[420px] h-[380px] sm:h-[420px] rounded-2xl cursor-pointer select-none transition-shadow duration-300 ${
                    isActive
                      ? 'shadow-[0_20px_50px_rgba(230,36,41,0.4)] border-2 border-red-500/60'
                      : 'shadow-2xl border border-red-500/20 hover:border-red-500/40'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card Background Cover Picture / Artwork */}
                  <div className={`w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br ${item.coverGradient} p-6 flex flex-col justify-between relative border border-white/10`}>
                    
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

                    {/* Top Header info */}
                    <div className="relative z-10 flex items-start justify-between">
                      <span className="px-3 py-1 bg-red-600/30 text-red-300 text-xs font-semibold rounded-full border border-red-500/40 backdrop-blur-md">
                        {item.badge}
                      </span>
                      {item.durationStr && (
                        <span className="text-xs font-mono text-gray-300 bg-black/50 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                          {item.durationStr}
                        </span>
                      )}
                    </div>

                    {/* Center Cover Art & Play Button Icon */}
                    <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(230,36,41,0.6)] transition-transform duration-300 ${isActive ? 'scale-110 hover:scale-125 bg-red-600/40' : ''}`}>
                        <Play size={32} className="text-white ml-1 fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                      </div>
                      <span className="mt-3 text-xs uppercase tracking-widest text-red-400 font-semibold font-mono">
                        {isActive ? 'Click to Watch Edit' : 'Click to Focus'}
                      </span>
                    </div>

                    {/* Bottom Card Title & Software Tags */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white font-heading tracking-tight line-clamp-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 mb-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {item.software.map((sw) => (
                          <span key={sw} className="px-2 py-0.5 bg-white/5 text-red-200 text-[10px] font-medium rounded border border-white/10">
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 3D Navigation Controls */}
          <div className="flex items-center gap-6 mt-8 z-40">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-surface-alt/80 border border-red-500/30 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(230,36,41,0.2)] hover:scale-110"
              aria-label="Previous edit"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectCard(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 bg-red-600 shadow-[0_0_10px_rgba(230,36,41,0.8)]'
                      : 'w-2.5 bg-gray-700 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-surface-alt/80 border border-red-500/30 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(230,36,41,0.2)] hover:scale-110"
              aria-label="Next edit"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* ─── ACTIVE EDIT DETAILS & PLAYER MODAL ─── */}
        <AnimatePresence>
          {isPlayingModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-surface-dark border border-red-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(230,36,41,0.3)]"
              >
                {/* Close Modal Button */}
                <button
                  onClick={() => setIsPlayingModal(false)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Video Player Container */}
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  {activeVideo.type === 'local' && activeVideo.src ? (
                    <>
                      <video
                        ref={videoRef}
                        className="w-full h-full object-contain cursor-pointer"
                        preload="metadata"
                        playsInline
                        onClick={togglePlay}
                      >
                        <source src={activeVideo.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Custom Player Controls */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <div
                          className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 hover:h-2 transition-all"
                          onClick={handleProgressClick}
                        >
                          <div
                            className="h-full bg-red-600 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(230,36,41,0.8)]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={togglePlay}
                              className="p-1.5 rounded-lg text-white hover:text-red-400 hover:bg-white/10 transition-colors"
                            >
                              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                            </button>

                            <button
                              onClick={toggleMute}
                              className="p-1.5 rounded-lg text-white hover:text-red-400 hover:bg-white/10 transition-colors"
                            >
                              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>

                            <span className="text-xs text-white/70 font-mono">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>

                          <button
                            onClick={() => videoRef.current?.requestFullscreen()}
                            className="p-1.5 rounded-lg text-white hover:text-red-400 hover:bg-white/10 transition-colors"
                          >
                            <Maximize size={18} />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : activeVideo.type === 'iframe' && activeVideo.src ? (
                    <iframe
                      src={activeVideo.src}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      title={activeVideo.title}
                    />
                  ) : (
                    <div className="p-8 text-center">
                      <Film size={48} className="text-red-500 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-white mb-2">{activeVideo.title}</h4>
                      <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">{activeVideo.description}</p>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        {activeVideo.youtubeUrl && (
                          <a
                            href={activeVideo.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            <Youtube size={18} />
                            Watch on YouTube
                          </a>
                        )}
                        {activeVideo.instagramUrl && (
                          <a
                            href={activeVideo.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                          >
                            <Instagram size={18} />
                            Watch on Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Info */}
                <div className="p-6 bg-surface">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-red-600/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                          {activeVideo.badge}
                        </span>
                        <h3 className="text-xl font-bold text-white font-heading">{activeVideo.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400">{activeVideo.description}</p>
                    </div>

                    {activeVideo.driveLink && (
                      <a
                        href={activeVideo.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs px-4 py-2 self-start sm:self-auto"
                      >
                        <ExternalLink size={14} /> Open Drive Link
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
