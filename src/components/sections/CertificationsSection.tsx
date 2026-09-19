import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../../data/certifications';
import { Award, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="05. Cloud Credentials"
        title="Verified Certifications &"
        highlightTitle="Specializations"
        subtitle="Formally recognized credentials in enterprise cloud systems architecture and infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--border-subtle)] shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-eyebrow bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                  {cert.year}
                </span>
              </div>

              <div>
                <span className="text-eyebrow text-[var(--accent)] font-bold">
                  {cert.issuer}
                </span>
                <h3 className="font-sans text-xl font-bold text-[var(--text-primary)] mt-1">
                  {cert.title}
                </h3>
              </div>

              <div className="p-4 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                <p className="text-eyebrow text-[var(--accent)] flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" /> VERIFIED COMPETENCY
                </p>
                <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                  {cert.skillsProven}
                </p>
              </div>

              {cert.fillNotes && (
                <div className="p-3 rounded-card bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-xs font-mono-tech text-[var(--accent)] flex items-center space-x-2">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>[FILL] {cert.fillNotes}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-tech text-xs">
              <span className="text-[var(--text-muted)]">{cert.credentialIdPlaceholder}</span>

              <a
                href={cert.verificationUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-[var(--text-primary)] font-bold hover:text-[var(--accent)] transition-colors"
              >
                <span>VERIFY CREDENTIAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
