import React, { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface EntryGateProps {
  onEnter: () => void;
}

export const EntryGate: React.FC<EntryGateProps> = ({ onEnter }) => {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [bgImageSrc, setBgImageSrc] = useState('/ironman.jpg');
  const hasFinishedRef = useRef(false);

  // Asset readiness + smooth 1.4s progress counter
  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();
    const minDuration = 4500; // 4.5s minimum duration to comfortably read and understand the image

    let imageLoaded = false;
    const img = new Image();
    img.src = '/ironman.jpg';

    img.onload = () => {
      imageLoaded = true;
    };

    img.onerror = () => {
      console.warn(
        "EntryGate: Graphic image at 'public/ironman.jpg' not found or failed to load. Falling back to 'public/profile.jpg'."
      );
      setBgImageSrc('/profile.jpg');
      imageLoaded = true;
    };

    const updateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const timeRatio = Math.min(elapsedTime / minDuration, 1);

      const fontsReady = document.fonts ? document.fonts.status === 'loaded' : true;
      const assetsReady = imageLoaded && fontsReady;

      let currentPercent = 0;
      if (assetsReady) {
        currentPercent = Math.floor(timeRatio * 100);
      } else {
        currentPercent = Math.floor(Math.min(timeRatio, 0.9) * 100);
      }

      setProgress(currentPercent);

      if (currentPercent < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else if (!hasFinishedRef.current) {
        hasFinishedRef.current = true;
        // Hold 800ms at 100% so the completed state is comfortable and clear before auto-entering
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onEnter();
          }, 350);
        }, 800);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [onEnter]);

  const handleSkip = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 250);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isExiting ? 'exit' : 'visible'}
      className="fixed inset-0 z-[100] bg-[#000000] text-white overflow-hidden select-none flex flex-col justify-between font-sans"
    >
      {/* Preload Graphic Image */}
      <link rel="preload" as="image" href={bgImageSrc} />

      {/* Full-bleed background graphic image (Daily Reminder / GOOD THINGS / are coming.) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img
          src={bgImageSrc}
          alt="Daily Reminder - GOOD THINGS are coming graphic"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover sm:object-contain animate-kenburns transition-all duration-700"
        />
      </div>

      {/* Subtle Grain Overlay (3% opacity) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* TOP BAR: Signature Eyebrow & Quiet Skip Action */}
      <div className="relative z-10 pt-6 sm:pt-8 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.75rem] sm:text-xs font-normal uppercase tracking-[0.25em] text-white/70"
        >
          PORTFOLIO OF RACHA TANMAY SRI VARDHAN
        </motion.p>

        <button
          onClick={handleSkip}
          className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] py-2 px-3 rounded cursor-pointer"
          aria-label="Skip entry gate loading"
        >
          SKIP →
        </button>
      </div>

      {/* CENTER AREA: Clean Spacer (No overlapping React DOM text on top of the image graphic!) */}
      <div className="relative z-10 flex-1" />

      {/* BOTTOM BAR: Subtitle / Role Line & Percentage Counter */}
      <div className="relative z-10 pb-[max(1.5rem,env(safe-area-inset-bottom)+1rem)] px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-end justify-between gap-4">
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm font-normal text-white/70 max-w-md tracking-normal"
        >
          Full-Stack Developer & Backend Microservices Engineer.
        </motion.p>

        <button
          onClick={handleSkip}
          className="group flex items-baseline font-sans text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded p-1 cursor-pointer"
          title="Click to skip loading"
          aria-label={`Loading progress ${progress} percent`}
        >
          <span className="font-extrabold text-2xl sm:text-3xl tabular-nums tracking-tighter text-white">
            {progress}
          </span>
          <span className="font-semibold text-xs sm:text-sm text-white/70 ml-1">
            %
          </span>
        </button>
      </div>
    </motion.div>
  );
};
