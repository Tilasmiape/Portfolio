'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: 'BSc (Hons) Computing', sublabel: 'Informatics College Pokhara' },
    { icon: Briefcase, label: '8 Months Internship', sublabel: 'SEO & Content Creation' },
    { icon: MapPin, label: 'Pokhara, Nepal', sublabel: 'Available Remote & On-site' },
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better — my background, passions, and what drives me."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8">
              <p className="text-text-secondary leading-relaxed text-lg">
                {personalInfo.about}
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-panel p-5 flex items-center gap-4 glass-panel-hover"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                  <item.icon size={22} className="text-primary-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                </div>
                <div>
                  <p className="font-semibold text-white tracking-wide">{item.label}</p>
                  <p className="text-sm text-text-secondary">{item.sublabel}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
