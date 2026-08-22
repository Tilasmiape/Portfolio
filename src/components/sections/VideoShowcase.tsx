'use client';

import { motion } from 'framer-motion';
import { Film, Volume2, VolumeX, Play, Pause, Maximize, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState, useRef, useEffect } from 'react';

export interface VideoItem {
  id: string;
  title: string;
  type: 'local' | 'iframe';
  src: string;
  driveLink?: string;
  badge: string;
  description: string;
}

const videos: VideoItem[] = [
  {
    id: 'news-edit',
    title: 'News Edit & Motion Graphics',
    type: 'local',
    src: '/videos/News edit_scale_1x_prob-3.mp4',
    badge: 'Motion Graphics & VFX',
    description: 'Dynamic news edit featuring kinetic typography, lower thirds, 3D camera tracking, and sound design created in Adobe After Effects.'
  },
  {
    id: 'ae-drive-edit',
    title: 'Kinetic Typography & 3D Motion Edit',
    type: 'iframe',
    src: 'https://drive.google.com/file/d/1r4EYOL_L9fCi8wzJ4U6hOVOTx6bsIXXE/preview',
    driveLink: 'https://drive.google.com/file/d/1r4EYOL_L9fCi8wzJ4U6hOVOTx6bsIXXE/view?usp=drive_link',
    badge: '3D Motion & Typography',
    description: 'Showcase of kinetic typography animations, 3D layer depth, smooth transitions, and visual storytelling.'
  }
];

export default function VideoShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string>(videos[0].id);
  const activeVideo = videos.find((v) => v.id === activeVideoId) || videos[0];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Reset playback state when switching videos
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setDuration(0);

    if (activeVideo.type === 'local' && videoRef.current) {
      const video = videoRef.current;
      video.load();

      const handleLoadedMetadata = () => {
        video.muted = false;
        video.volume = 1.0;
        setDuration(video.duration);
      };

      const handleTimeUpdate = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [activeVideoId, activeVideo.type]);

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

  return (
    <section id="showreel" className="section-padding relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Video Showreel"
          subtitle="A collection of my Motion Graphics, Kinetic Typography, 3D Motion, and video editing work using Adobe After Effects."
        />

        {/* Video Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {videos.map((vid, idx) => {
            const isActive = vid.id === activeVideoId;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveVideoId(vid.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-heading text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] border border-white/20'
                    : 'bg-surface-alt/60 text-text-secondary hover:text-white border border-border hover:border-primary-500/40'
                }`}
              >
                <Film size={16} className={isActive ? 'text-white' : 'text-primary-400'} />
                <span>Video #{idx + 1}: {vid.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Video Player Container */}
        <motion.div
          key={activeVideo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_0_35px_rgba(0,240,255,0.15)] border border-primary-500/20 group relative overflow-hidden">
            {/* Ambient player glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface-dark flex items-center justify-center border border-border-dark shadow-inner">
              {activeVideo.type === 'local' ? (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain relative z-10 cursor-pointer"
                    preload="metadata"
                    playsInline
                    onClick={togglePlay}
                  >
                    <source src={activeVideo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Overlay Controls for Local Video */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 hover:h-2 transition-all"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-100 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlay}
                          className="p-1.5 rounded-lg text-white hover:text-primary-400 hover:bg-white/10 transition-colors"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="p-1.5 rounded-lg text-white hover:text-primary-400 hover:bg-white/10 transition-colors"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>

                        <span className="text-xs text-white/70 font-mono">
                          {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                        </span>
                      </div>

                      <button
                        onClick={() => videoRef.current?.requestFullscreen()}
                        className="p-1.5 rounded-lg text-white hover:text-primary-400 hover:bg-white/10 transition-colors"
                        aria-label="Fullscreen"
                      >
                        <Maximize size={18} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Google Drive Embedded iframe Player */
                <iframe
                  src={activeVideo.src}
                  className="w-full h-full border-0 relative z-10"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={activeVideo.title}
                />
              )}
            </div>

            {/* Video Info Header */}
            <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 bg-accent-500/20 text-accent-300 text-xs font-semibold rounded-full border border-accent-500/30">
                    {activeVideo.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading tracking-tight">
                    {activeVideo.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary max-w-2xl">
                  {activeVideo.description}
                </p>
              </div>

              {activeVideo.driveLink && (
                <a
                  href={activeVideo.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs px-4 py-2 self-start sm:self-auto flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Open in Drive
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((item, idx) => {
            const isSelected = item.id === activeVideoId;
            return (
              <div
                key={item.id}
                onClick={() => setActiveVideoId(item.id)}
                className={`glass-panel p-5 cursor-pointer glass-panel-hover transition-all duration-300 border ${
                  isSelected
                    ? 'border-primary-500/60 shadow-[0_0_20px_rgba(0,240,255,0.2)] bg-surface-alt/80'
                    : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-xs font-mono text-primary-400 font-semibold tracking-wider">
                    EDIT #{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 bg-primary-500/10 text-primary-300 text-[10px] uppercase font-bold tracking-widest rounded border border-primary-500/20">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-border/50">
                  <span className="text-primary-300 font-medium flex items-center gap-1.5">
                    <Sparkles size={12} />
                    {isSelected ? 'Currently Viewing' : 'Click to View'}
                  </span>
                  {item.driveLink && (
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-muted hover:text-white flex items-center gap-1 transition-colors"
                    >
                      Drive Link <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
