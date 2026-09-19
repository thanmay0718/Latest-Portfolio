import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { ArrowUpRight, Zap, Database, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="02. Featured Work"
        title="Production Systems &"
        highlightTitle="Case Studies"
        subtitle="End-to-end full-stack architectures built with Spring Boot, React, MySQL, and REST security."
      />

      {/* 2-Column Minimalist Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col space-y-4"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Preview Card Box */}
            <div className="relative aspect-[16/10] w-full rounded-card bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--bg-surface)] to-[var(--bg-base)] border border-[var(--border-subtle)] overflow-hidden flex flex-col justify-between p-5 sm:p-6 group-hover:border-[var(--accent)]/50 group-hover:shadow-xl transition-all duration-300">
              
              {/* Hover Accent Top Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top Header Bar inside card */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-eyebrow bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-sm">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-1.5 animate-pulse" />
                      {project.status.split('•')[0].trim()}
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)] group-hover:scale-110 transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Graphic Feature Indicator */}
              <div className="flex items-center justify-center my-auto py-3">
                {project.id === 'gigsure' && (
                  <div className="w-full max-w-xs p-4 rounded-card bg-[var(--bg-surface)]/80 backdrop-blur-md border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/30 text-center space-y-2.5 shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] mx-auto flex items-center justify-center shadow-inner">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono-tech text-xs font-bold text-[var(--text-primary)] tracking-wide">GigSure Telemetry Engine</p>
                      <p className="text-[11px] text-[var(--accent)] font-mono-tech mt-0.5 font-semibold">Sub-Second Payout • Active IoT</p>
                    </div>
                  </div>
                )}
                {project.id === 'ecommerce-platform' && (
                  <div className="w-full max-w-xs p-4 rounded-card bg-[var(--bg-surface)]/80 backdrop-blur-md border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/30 text-center space-y-2.5 shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] mx-auto flex items-center justify-center shadow-inner">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono-tech text-xs font-bold text-[var(--text-primary)] tracking-wide">Relational Storefront API</p>
                      <p className="text-[11px] text-[var(--accent)] font-mono-tech mt-0.5 font-semibold">ACID Transactions • 25+ Endpoints</p>
                    </div>
                  </div>
                )}
                {project.id === 'homeease' && (
                  <div className="w-full max-w-xs p-4 rounded-card bg-[var(--bg-surface)]/80 backdrop-blur-md border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/30 text-center space-y-2.5 shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] mx-auto flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono-tech text-xs font-bold text-[var(--text-primary)] tracking-wide">HomeEase Orchestration</p>
                      <p className="text-[11px] text-[var(--accent)] font-mono-tech mt-0.5 font-semibold">Role-Based RBAC • Real-Time Slots</p>
                    </div>
                  </div>
                )}
                {project.id === 'capstone-sentiment' && (
                  <div className="w-full max-w-xs p-4 rounded-card bg-[var(--bg-surface)]/80 backdrop-blur-md border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/30 text-center space-y-2.5 shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] mx-auto flex items-center justify-center shadow-inner">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono-tech text-xs font-bold text-[var(--text-primary)] tracking-wide">Multilingual NLP Stance Engine</p>
                      <p className="text-[11px] text-[var(--accent)] font-mono-tech mt-0.5 font-semibold">Aspect Analytics • Transformer Models</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Tech Chips */}
              <div className="flex flex-wrap gap-1.5 z-10">
                {project.techStack.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[var(--bg-surface)]/90 text-[var(--text-muted)] border border-[var(--border-subtle)] shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & Short Crisp Description below card */}
            <div className="space-y-1 pt-1 px-1">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed line-clamp-2">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
