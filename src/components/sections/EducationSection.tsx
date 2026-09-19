import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Info } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="06. Education & Academic Standing"
        title="Academic Rigor &"
        highlightTitle="Academic Honors"
        subtitle="Computer Science & Engineering curriculum at KL University with an academic CGPA of 8.97."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Degree Card (7 cols) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6"
          >
            <div className="flex items-start justify-between border-b border-[var(--border-subtle)] pb-6">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full text-eyebrow bg-[var(--accent-soft)] text-[var(--accent)] font-bold inline-block mb-2">
                  {educationData.degree}
                </span>

                <h3 className="font-sans text-2xl font-bold text-[var(--text-primary)]">
                  {educationData.field}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] font-semibold">
                  {educationData.institution}
                </p>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-mono-tech font-bold text-xs">
                  CGPA {educationData.cgpa} / {educationData.maxCgpa}
                </span>
                <p className="text-xs text-[var(--text-muted)] font-mono-tech mt-2">{educationData.period}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[var(--text-muted)]">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{educationData.location}</span>
            </div>

            {/* Coursework Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-eyebrow font-bold text-[var(--text-primary)] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--accent)]" /> CORE COMPUTER SCIENCE CURRICULUM
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Honors (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6"
          >
            <h4 className="font-sans text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Award className="w-6 h-6 text-[var(--accent)]" /> Achievements & Honors
            </h4>

            <ul className="space-y-3">
              {educationData.achievements.map((ach, aIdx) => (
                <li key={aIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[var(--text-secondary)] font-normal">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>

            {educationData.fillNotes && (
              <div className="p-4 rounded-card bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-xs text-[var(--accent)] space-y-2">
                <p className="font-mono-tech font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> [FILL] Action Required for Bunny:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)]">
                  {educationData.fillNotes.map((note, nIdx) => (
                    <li key={nIdx}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
