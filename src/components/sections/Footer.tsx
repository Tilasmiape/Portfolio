import { Heart } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-border mt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-900/20 rounded-[100%] blur-[80px] pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold font-heading gradient-text tracking-tight">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary-500">.</span>
            </a>
            <p className="text-text-secondary text-sm mt-2 flex items-center gap-1 justify-center md:justify-start">
              &copy; {currentYear} {personalInfo.name}. Made with{' '}
              <Heart size={12} className="text-accent-400 fill-accent-400 drop-shadow-[0_0_5px_rgba(112,0,255,0.8)]" /> in Nepal
            </p>
          </div>

          {/* Footer nav */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
