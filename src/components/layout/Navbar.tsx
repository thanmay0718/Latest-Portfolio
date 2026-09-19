import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profileData } from '../../data/profile';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'ARSENAL' },
  { id: 'projects', label: 'WORK' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'certifications', label: 'CREDENTIALS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = navItems.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Bar (Pinned Full-Width Bar on Mobile <1024px) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[var(--bg-surface)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] px-5 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center space-x-2.5 min-h-[44px] cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] flex items-center justify-center font-sans font-bold text-xs text-[var(--text-primary)]">
            RT
          </div>
          <span className="font-sans font-bold text-xs tracking-wider uppercase text-[var(--text-primary)]">
            {profileData.nickname}
          </span>
        </button>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
            className="min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech text-[10px] font-bold tracking-[0.14em] uppercase flex items-center space-x-1 justify-center shadow-sm"
          >
            <span>RESUME</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-[var(--text-primary)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Desktop Floating Pill Navbar (>=1024px) */}
      <header className="hidden lg:flex fixed top-4 left-0 right-0 z-40 justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-xl transition-all duration-250 ease-out max-w-5xl w-full ${
            isScrolled
              ? 'py-2 px-5 shadow-lg shadow-black/5 dark:shadow-black/30'
              : 'py-3.5 px-6 shadow-md shadow-black/2'
          }`}
        >
          {/* Left: Monogram Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] flex items-center justify-center font-sans font-bold text-xs text-[var(--text-primary)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:border-[var(--accent)] transition-all duration-200">
              RT
            </div>
            <span className="font-sans font-bold text-xs tracking-wider uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {profileData.nickname}
            </span>
          </button>

          {/* Center: Nav Links with Active Accent Dot */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 text-[11px] font-mono-tech uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions: ThemeToggle + Solid Accent Resume Button */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
              className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech text-[11px] font-bold tracking-[0.14em] uppercase hover:opacity-90 transition-opacity flex items-center space-x-1.5 shadow-sm"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Overlay Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--bg-base)]/95 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] flex items-center justify-center font-bold text-xs">
                  RT
                </div>
                <span className="font-sans font-bold text-sm tracking-wider uppercase text-[var(--text-primary)]">
                  {profileData.name}
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-5 my-auto">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-sans text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors min-h-[44px] flex items-center cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between pb-4">
              <a
                href="/resume.pdf"
                download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
                className="w-full min-h-[44px] py-3 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech text-xs font-bold tracking-[0.14em] uppercase text-center flex items-center justify-center space-x-2 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
