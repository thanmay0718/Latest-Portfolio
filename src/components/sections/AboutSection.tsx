import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Reveal } from '../ui/Reveal';
import { profileData } from '../../data/profile';
import { Target, Award, Code, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="01. Profile & Bio"
        title="Full-Stack Developer &"
        highlightTitle="Backend Architect"
        subtitle="Architecting resilient Spring Boot microservices and responsive React applications with high security standards."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Story Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-eyebrow text-[var(--accent)]">
                <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                <span>ENGINEERING JOURNEY</span>
              </div>
              
              {profileData.aboutStory.map((paragraph, idx) => (
                <p key={idx} className="text-body-custom">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Placement Vision Callout */}
            <div className="p-4 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-start space-x-3">
              <Target className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-eyebrow text-[var(--accent)] font-bold">
                  PLACEMENT VISION
                </h4>
                <p className="text-xs text-[var(--text-primary)] mt-0.5 font-sans font-medium">
                  {profileData.placementGoal}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Stat Chips (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4" ref={statsRef}>
          {profileData.stats.map((stat, idx) => (
            <Reveal key={idx} direction="left" delay={idx * 0.08}>
              <SpotlightCard className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-h2 text-[var(--accent)]">
                      {isInView ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        >
                          {stat.value}
                        </motion.span>
                      ) : (
                        '0'
                      )}
                      <span className="text-xl text-[var(--text-primary)] font-sans">{stat.suffix}</span>
                    </h3>
                    <p className="text-xs font-bold text-[var(--text-primary)] mt-0.5">{stat.label}</p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 font-mono-tech">{stat.detail}</p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent)]">
                    {idx === 0 && <Award className="w-5 h-5" />}
                    {idx === 1 && <Code className="w-5 h-5" />}
                    {idx === 2 && <Award className="w-5 h-5" />}
                    {idx === 3 && <Target className="w-5 h-5" />}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
