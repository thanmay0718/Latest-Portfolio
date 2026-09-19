import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

const footerNavLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Arsenal' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export const Footer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wordmarkRef.current) return;
    const rect = wordmarkRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const textLetters = "RACHA TANMAY".split("");

  return (
    <footer className="relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-12 sm:pt-16 pb-10 px-5 sm:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Top Block: Oversized Outlined Wordmark (Clamp scaling 2.5rem to 9rem for zero mobile overflow) */}
        <div
          ref={wordmarkRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full text-center overflow-hidden select-none py-2 group"
        >
          {/* Base Layer: Outlined Stroke Text */}
          <div className="flex items-center justify-center space-x-0.5 sm:space-x-1">
            {textLetters.map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className={`inline-block font-sans font-extrabold tracking-tighter transition-all duration-300 ${
                  char === " " ? "w-3 sm:w-6" : "wordmark-stroke text-[var(--border-strong)] opacity-30 group-hover:opacity-75 group-hover:text-[var(--accent)]"
                }`}
                style={{ fontSize: 'clamp(2.25rem, 13vw, 9rem)', lineHeight: 0.9 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Overlay Spotlight Layer */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none hidden sm:flex items-center justify-center space-x-1 transition-opacity duration-300"
              style={{
                maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
                WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
              }}
            >
              {textLetters.map((char, index) => (
                <span
                  key={index}
                  className={`inline-block font-sans font-extrabold tracking-tighter text-[var(--accent)] ${
                    char === " " ? "w-3 sm:w-6" : ""
                  }`}
                  style={{ fontSize: 'clamp(2.25rem, 13vw, 9rem)', lineHeight: 0.9 }}
                >
                  {char}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Middle Row: Stacked 1 Column on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {/* Column 1: Name, Role, Location */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-sans text-lg font-bold text-[var(--text-primary)]">
              {profileData.name} <span className="text-[var(--accent)] font-normal">({profileData.nickname})</span>
            </h3>
            <p className="text-body-custom text-xs mx-auto md:mx-0">
              Full-Stack Developer specializing in Java Spring Boot microservices, REST APIs, and React systems.
            </p>
            <p className="font-mono-tech text-xs text-[var(--text-muted)] flex items-center justify-center md:justify-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{profileData.location}</span>
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3 text-center md:text-left">
            <p className="text-eyebrow">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech text-[var(--text-secondary)]">
              {footerNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-[var(--accent)] transition-colors cursor-pointer min-h-[44px] sm:min-h-0 flex items-center justify-center md:justify-start"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Social Icons & Email (Horizontal & Centered on Mobile) */}
          <div className="space-y-3 text-center md:text-left">
            <p className="text-eyebrow">CONNECT</p>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-primary)] flex items-center justify-center transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-primary)] flex items-center justify-center transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-primary)] flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="font-mono-tech text-xs text-[var(--text-muted)] truncate pt-1">
              {profileData.email}
            </p>
          </div>
        </div>

        {/* Bottom Hairline Row */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Racha Tanmay Sri Vardhan. Crafted with editorial precision.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer min-h-[44px] sm:min-h-0"
          >
            <span className="uppercase text-eyebrow font-bold">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
