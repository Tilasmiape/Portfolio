'use client';

import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="Experience"
          subtitle="Professional experience that has shaped my skills and perspective."
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 glass-panel-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{exp.role}</h3>
                  <p className="text-primary-400 font-medium tracking-wide mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-primary-300/70 text-sm font-medium bg-primary-500/10 px-3 py-1.5 rounded-full border border-primary-500/20 self-start sm:self-auto">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                    <ChevronRight size={16} className="text-accent-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
