'use client';

import { ExternalLink, Github, Youtube, Instagram } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Projects"
          subtitle="A collection of projects I've built through coursework and personal development."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.1}>
              <div className="glass-panel p-6 h-full flex flex-col glass-panel-hover group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <span className="self-start px-3 py-1 bg-accent-500/20 text-accent-300 text-xs font-semibold rounded-full mb-4 border border-accent-500/30 shadow-[0_0_10px_rgba(112,0,255,0.2)]">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors font-heading tracking-tight">
                  {project.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-5 flex-grow text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-surface-dark-alt text-primary-200/80 text-xs font-medium rounded-md border border-primary-500/10 shadow-[0_0_8px_rgba(0,240,255,0.05)_inset]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔗 ALL LINKS */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border-dark relative z-10">
                  {/* GitHub Link - Shows if githubUrl exists and is not '#' */}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/10"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}

                  {/* Live Demo Link */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-primary-500/20"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}

                  {/* YouTube Link */}
                  {project.youtubeUrl && project.youtubeUrl !== '#' && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-red-500/20"
                      aria-label={`View ${project.title} on YouTube`}
                    >
                      <Youtube size={15} />
                      YouTube
                    </a>
                  )}

                  {/* Instagram Link */}
                  {project.instagramUrl && project.instagramUrl !== '#' && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-pink-500/20"
                      aria-label={`View ${project.title} on Instagram`}
                    >
                      <Instagram size={15} />
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* 🎬 Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-heading">
              🎬 Video Content & Editing
            </h3>
            <p className="text-text-secondary text-sm mt-2">
              Check out my video editing work on YouTube and Instagram
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@WaitWhatSocial/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-5 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 border border-border-dark hover:border-red-500/30 hover:bg-red-500/5"
            >
              <Youtube size={20} className="text-red-500" />
              <span className="text-white text-sm font-medium">Wait What Social</span>
              <span className="text-text-muted text-xs">YouTube Shorts</span>
            </a>

            <a
              href="https://www.youtube.com/@TalesoftheDeadOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-5 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 border border-border-dark hover:border-red-500/30 hover:bg-red-500/5"
            >
              <Youtube size={20} className="text-red-500" />
              <span className="text-white text-sm font-medium">Tales of the Dead</span>
              <span className="text-text-muted text-xs">YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/folurhubby/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-5 py-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 border border-border-dark hover:border-pink-500/30 hover:bg-pink-500/5"
            >
              <Instagram size={20} className="text-pink-500" />
              <span className="text-white text-sm font-medium">Folurhubby</span>
              <span className="text-text-muted text-xs">1K+ followers</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}