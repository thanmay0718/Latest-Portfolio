import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightTitle,
  subtitle,
  center = false
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      <Reveal direction="up" delay={0.05}>
        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-eyebrow ${center ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>{badge}</span>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.1}>
        <h2 className="mt-3 text-h2 text-[var(--text-primary)] leading-tight">
          {title}{' '}
          {highlightTitle && (
            <span className="text-[var(--accent)]">{highlightTitle}</span>
          )}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.15}>
          <p className={`mt-3 text-body-custom ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.2}>
        <div className={`mt-5 h-[1px] w-16 bg-[var(--accent)] ${center ? 'mx-auto' : ''}`} />
      </Reveal>
    </div>
  );
};
