import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="04. Experience & Training"
        title="Industry Internships &"
        highlightTitle="Practical Training"
        subtitle="Hands-on software engineering, API development, and containerized data pipelines."
      />

      <div className="space-y-8">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-eyebrow bg-[var(--accent-soft)] text-[var(--accent)] font-bold inline-block mb-3">
                  {exp.partner || exp.type}
                </span>
                <h3 className="font-sans text-2xl font-bold text-[var(--text-primary)]">
                  {exp.role}
                </h3>
                <p className="font-sans text-sm font-semibold text-[var(--accent)] mt-0.5">
                  {exp.organization}
                </p>
              </div>

              <div className="flex flex-col md:items-end text-xs font-mono-tech text-[var(--text-muted)] space-y-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" /> {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" /> {exp.location}
                </span>
              </div>
            </div>

            <p className="text-body-custom">
              {exp.summary}
            </p>

            <div className="space-y-3">
              <h4 className="text-eyebrow font-bold text-[var(--text-primary)]">
                KEY ACCOMPLISHMENTS
              </h4>
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[var(--text-secondary)] font-normal">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {exp.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
