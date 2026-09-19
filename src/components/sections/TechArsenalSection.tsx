import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import { Code2, Server, Layout, Database, Cloud, Wrench, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const TechArsenalSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-[var(--accent)]" />;
      case 'Server': return <Server className="w-4 h-4 text-[var(--accent)]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[var(--accent)]" />;
      case 'Database': return <Database className="w-4 h-4 text-[var(--accent)]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[var(--accent)]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[var(--accent)]" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-[var(--accent)]" />;
      default: return <Code2 className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="skills" className="py-16 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="03. Tech Arsenal"
        title="Grouped Stack &"
        highlightTitle="Competencies"
        subtitle="Rigorous engineering competencies spanning backend microservices, relational databases, and algorithms."
      />

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group, groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.06 }}
            className="p-6 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between space-y-4 hover:border-[var(--accent)]/40 transition-colors"
          >
            <div>
              <div className="flex items-center space-x-3 pb-3 border-b border-[var(--border-subtle)]">
                <div className="p-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  {getCategoryIcon(group.icon)}
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-normal">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skill list items */}
              <div className="mt-4 space-y-2.5">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      {skill.highlight && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                      )}
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech border border-[var(--border-subtle)] text-[var(--text-muted)]">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
