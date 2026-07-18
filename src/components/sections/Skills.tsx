'use client';

import { skillCategories } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Decorative background element */}
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-max relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and competencies I've developed through coursework, projects, and professional experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={category.name} delay={index * 0.1}>
              <div className="glass-panel p-6 h-full glass-panel-hover group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(112,0,255,0.6)] transition-all duration-300">
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide font-heading">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface-alt/80 text-primary-300 text-sm font-medium rounded-lg border border-primary-500/20 hover:border-primary-400/50 hover:bg-primary-500/10 hover:text-primary-200 transition-all duration-200 shadow-[0_0_10px_rgba(0,240,255,0.05)_inset]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
