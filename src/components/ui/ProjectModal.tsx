import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, ShieldCheck, Cpu, Wallet, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStepIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[var(--accent)]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[var(--accent)]" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-[var(--accent)]" />;
      default: return <Layers className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-card shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="sticky top-0 bg-[var(--bg-surface)]/90 backdrop-blur-md px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between z-20">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-eyebrow bg-[var(--accent-soft)] text-[var(--accent)] font-bold">
                {project.category}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono-tech">{project.status}</span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Header */}
            <div>
              <h3 className="font-sans text-2xl sm:text-4xl font-bold text-[var(--text-primary)]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--accent)] font-semibold">{project.subtitle}</p>
              <p className="mt-4 text-body-custom">
                {project.summary}
              </p>
            </div>

            {/* Links Bar */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-xs font-mono-tech uppercase tracking-wider font-bold text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-mono-tech uppercase tracking-wider font-bold hover:opacity-90 transition-opacity shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project</span>
                </a>
              )}
            </div>

            {/* Problem & Role Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <h4 className="text-eyebrow text-[var(--accent)] flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4" /> Problem Statement
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.problemStatement}</p>
              </div>

              <div className="p-5 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <h4 className="text-eyebrow text-[var(--accent)] flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Role & Contributions
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{project.myRole}</p>
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            {project.architectureFlow && (
              <div className="p-6 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-6">
                <div>
                  <h4 className="font-sans text-lg font-bold text-[var(--text-primary)]">
                    {project.architectureFlow.title}
                  </h4>
                  <p className="text-xs font-mono-tech text-[var(--text-muted)] mt-1">
                    End-to-end telemetry validation & payout execution loop
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {project.architectureFlow.steps.map((s) => (
                    <div
                      key={s.step}
                      className="relative p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] font-mono-tech text-xs flex items-center justify-center font-bold">
                          0{s.step}
                        </span>
                        {getStepIcon(s.iconName)}
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-xs text-[var(--text-primary)]">{s.label}</h5>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1 leading-normal">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="font-sans text-lg font-bold text-[var(--text-primary)]">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h4 className="font-sans text-lg font-bold text-[var(--text-primary)]">Tech Stack & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes & Fill Placeholders */}
            <div className="space-y-3">
              <h4 className="font-sans text-lg font-bold text-[var(--text-primary)]">Outcomes & Impact</h4>
              <ul className="space-y-2">
                {project.outcomesAndMetrics.map((out, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
