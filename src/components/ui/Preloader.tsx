import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if preloader has already been seen in this session
    const hasSeen = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeen) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          sessionStorage.setItem('hasSeenPreloader', 'true');
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('hasSeenPreloader', 'true');
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-16 bg-[var(--bg-base)] text-[var(--text-primary)] select-none overflow-hidden"
        >
          {/* Top Eyebrow Label */}
          <div className="flex items-center justify-between z-10">
            <span className="text-eyebrow">
              PORTFOLIO D' RACHA TANMAY
            </span>
            <button
              onClick={handleSkip}
              className="px-3.5 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border-subtle)] rounded-full hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Center Main Title */}
          <div className="my-auto text-center z-10 space-y-3">
            <motion.h1
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-[var(--text-primary)]"
            >
              Crafting Systems
            </motion.h1>
            <p className="text-eyebrow text-[var(--accent)]">
              Full-Stack Developer • KL University CSE
            </p>
          </div>

          {/* Bottom Progress Counter */}
          <div className="flex items-end justify-between border-t border-[var(--border-subtle)] pt-6 z-10">
            <span className="text-eyebrow">
              Loading Portfolio Experience
            </span>
            <span className="font-mono-tech text-4xl sm:text-6xl font-bold text-[var(--accent)]">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
