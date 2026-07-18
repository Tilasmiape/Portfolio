'use client';

import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      {/* Decorative background element */}
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Education"
          subtitle="My academic journey and qualifications."
        />

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent hidden sm:block shadow-[0_0_10px_rgba(0,240,255,0.5)]" />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimatedCard key={edu.id} delay={index * 0.15}>
                  <div className="flex gap-4 sm:gap-6 items-start">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex w-12 h-12 bg-surface-dark border-2 border-primary-500 rounded-full items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)] z-10">
                      <GraduationCap size={20} className="text-primary-400" />
                    </div>

                    {/* Content card */}
                    <div className="glass-panel p-6 flex-grow glass-panel-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white font-heading">{edu.degree}</h3>
                          <p className="text-primary-400 font-medium tracking-wide mt-1">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-accent-300 font-medium bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full self-start shadow-[0_0_10px_rgba(112,0,255,0.1)_inset]">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
