'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Contact() {
  const contactDetails = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-1/2 left-[10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container-max relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-surface-alt/50 transition-colors duration-300">
              <div className="w-14 h-14 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.1)_inset]">
                <detail.icon size={24} className="text-primary-400 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              </div>
              <div>
                <p className="text-sm text-text-secondary uppercase tracking-widest font-heading mb-1">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-white font-medium hover:text-primary-400 transition-colors text-lg"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-lg">{detail.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* GitHub Social Link */}
          <div className="pt-8 border-t border-border mt-8">
            <p className="text-sm text-text-secondary uppercase tracking-widest font-heading mb-5">Connect with me</p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-alt border border-border rounded-xl flex items-center justify-center text-text-muted hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}