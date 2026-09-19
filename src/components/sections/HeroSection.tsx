import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { MagneticButton } from '../ui/MagneticButton';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-20 sm:pt-28 pb-10 px-5 sm:px-12 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto"
      >
        {/* Left Column: Asymmetric Copy */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          {/* Eyebrow Live Status Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <span>OPEN FOR CAMPUS PLACEMENTS</span>
          </motion.div>

          {/* Display Scale Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-display text-left">
              <span className="text-[var(--text-primary)]">Racha Tanmay</span>{' '}
              <span className="text-[var(--text-muted)] font-normal">Sri Vardhan</span>
            </h1>
            <p className="font-mono-tech text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[var(--accent)] mt-2.5 font-semibold">
              Full-Stack Developer & Backend Microservices Engineer
            </p>
          </motion.div>

          {/* Mobile-only Portrait (Positioned below headline on mobile <1024px) */}
          <motion.div variants={itemVariants} className="lg:hidden py-2 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-card overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-card bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between shadow-md">
                <div>
                  <p className="font-sans font-bold text-xs text-[var(--text-primary)]">{profileData.name}</p>
                  <p className="font-mono-tech text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[var(--accent)]" /> {profileData.location}
                  </p>
                </div>
                <span className="font-mono-tech text-xs font-bold px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)]">
                  8.97 CGPA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sub-paragraph max 60ch */}
          <motion.p variants={itemVariants} className="text-body-custom">
            Architecting high-concurrency Spring Boot backend microservices and modern React applications with mathematical precision, secure RESTful design, and relational database integrity.
          </motion.p>

          {/* Two CTAs Stacking Full-Width on Mobile */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <MagneticButton onClick={() => scrollToSection('projects')}>
              <span className="w-full sm:w-auto px-6 py-3.5 min-h-[44px] rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center space-x-2 shadow-md hover:opacity-95 transition-opacity cursor-pointer">
                <span>VIEW WORK</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
            >
              <span className="w-full sm:w-auto px-6 py-3.5 min-h-[44px] rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent)] font-mono-tech text-xs font-bold tracking-[0.14em] uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer">
                <FileText className="w-4 h-4 text-[var(--accent)]" />
                <span>DOWNLOAD RESUME</span>
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Desktop Portrait (>=1024px) with Duotone Hover Treatment */}
        <motion.div variants={itemVariants} className="hidden lg:flex lg:col-span-5 justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-card overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-elevated)] group shadow-xl">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-600 ease-out"
            />
            <div className="absolute inset-0 bg-[var(--accent)]/15 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity duration-600" />

            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-card bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between shadow-lg">
              <div>
                <p className="font-sans font-bold text-xs text-[var(--text-primary)]">{profileData.name}</p>
                <p className="font-mono-tech text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[var(--accent)]" /> {profileData.location}
                </p>
              </div>
              <span className="font-mono-tech text-xs font-bold px-2.5 py-1 rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
                8.97 CGPA
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Milestone Rail: 2x2 Grid on Mobile, 4-Col Horizontal Rail on Desktop */}
      <div className="pt-8 sm:pt-12 border-t border-[var(--border-subtle)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Milestone 1 */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-eyebrow">2023 — 27</span>
              <span className="hidden sm:inline-block h-[1px] flex-1 bg-[var(--border-subtle)]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider pt-0.5">
              KL UNIVERSITY
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">B.Tech CSE, CGPA 8.97</p>
          </div>

          {/* Milestone 2 */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-eyebrow">2025</span>
              <span className="hidden sm:inline-block h-[1px] flex-1 bg-[var(--border-subtle)]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider pt-0.5">
              GOOGLE & AICTE
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">AI-ML Virtual Intern</p>
          </div>

          {/* Milestone 3 */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-eyebrow">2025</span>
              <span className="hidden sm:inline-block h-[1px] flex-1 bg-[var(--border-subtle)]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider pt-0.5">
              HOMEEASE
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">Full-Stack Engineer</p>
          </div>

          {/* Milestone 4 */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-eyebrow">2026</span>
              <span className="hidden sm:inline-block h-[1px] flex-1 bg-[var(--border-subtle)]" />
            </div>
            <h4 className="font-sans text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider pt-0.5">
              GIGSURE
            </h4>
            <p className="text-[11px] text-[var(--text-muted)]">Lead Architect</p>
          </div>
        </div>
      </div>
    </section>
  );
};
