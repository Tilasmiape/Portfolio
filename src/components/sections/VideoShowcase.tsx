'use client';

import { motion } from 'framer-motion';
import { Film, Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useState, useRef, useEffect } from 'react';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasAudio, setHasAudio] = useState<boolean | null>(null);

  // Force unmute when video is ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // ✅ Set volume via JavaScript
      video.muted = false;
      video.volume = 1.0;
      setDuration(video.duration);
      
      // Check if video has audio tracks
      if (video.audioTracks && video.audioTracks.length > 0) {
        setHasAudio(true);
      } else {
        setHasAudio(false);
      }
    };

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // ✅ Ensure audio is unmuted before playing
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play();
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
    if (videoRef.current) {
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
          <div className="glass-panel p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.15)] border border-primary-500/20 group relative overflow-hidden">
            {/* Subtle glow effect behind the video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface-dark flex items-center justify-center border border-border-dark">
              {/* Fallback state when video is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted z-0">
                <Film size={48} className="mb-4 opacity-50 text-primary-500" />
                <p className="font-heading tracking-wide">Video loading...</p>
                <p className="text-xs mt-2 opacity-60">If this persists, please ensure your video is placed at /public/videos/edit.mp4</p>
              </div>

              {/* Audio Status Indicator */}
              {hasAudio === false && (
                <div className="absolute top-4 left-4 z-20 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-3 py-1.5 rounded-lg">
                  <span className="text-xs font-medium text-yellow-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    No audio track detected
                  </span>
                </div>
              )}

              {/* Video Title Overlay */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 hidden sm:block">
                <span className="text-xs font-medium text-white/80 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Adobe After Effects Showreel
                </span>
              </div>

              {/* ✅ FIXED: Video element with correct settings */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain relative z-10"
                poster="/videos/News edit_scale_1x_prob-3.mp4"
                preload="metadata"
                playsInline
                crossOrigin="anonymous"
                onClick={togglePlay}
                // ✅ Volume is set via JavaScript, not HTML
              >
                <source src="/videos/News edit_scale_1x_prob-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress Bar */}
                <div 
                  className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-primary-500 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-primary-400 transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-primary-400 transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>

                    {/* Time Display */}
                    <span className="text-xs text-white/60">
                      {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => videoRef.current?.requestFullscreen()}
                    className="text-white hover:text-primary-400 transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 flex items-center justify-between text-sm text-text-muted px-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Adobe After Effects Showreel
              </span>
              <span className="text-xs opacity-60">
                {isPlaying ? '▶ Playing' : '⏸ Paused'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
