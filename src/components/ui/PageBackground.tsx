import React from 'react';

export const PageBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Base Fill */}
      <div className="absolute inset-0 bg-[var(--bg-base)]" />

      {/* Layer 1: Dot Grid (Lighter on Mobile <640px) */}
      <div
        className="absolute inset-0 opacity-[0.03] sm:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, black 50%, transparent 100%)',
        }}
      />

      {/* Layer 2: Fixed Soft Accent Glow Top-Right (Disabled on Mobile <640px & Reduced Motion) */}
      <div
        className="hidden sm:block absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[140px]"
      />

      {/* Layer 3: Fixed Film Grain Overlay (Disabled on Mobile <640px & Reduced Motion) */}
      <div
        className="hidden sm:block absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
