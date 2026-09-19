import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, Send, MapPin, Sparkles, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { SectionHeader } from '../ui/SectionHeader';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Confetti capped lower on mobile for GPU performance
      const particleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 35 : 75;
      confetti({
        particleCount,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#1F6F5C', '#5FD3AE', '#16161A'],
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-5 sm:px-12 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeader
        badge="07. Initiate Contact"
        title="Let's Connect &"
        highlightTitle="Collaborate"
        subtitle="Open for campus recruitment interviews, engineering roles, and architectural discussions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Contact Info (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="p-6 sm:p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-8 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  Direct Inquiries
                </h3>
                <p className="text-body-custom text-xs sm:text-sm">
                  Open for campus placement opportunities, full-stack software engineer roles, and technical discussions.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-card bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-eyebrow">
                  PRIMARY EMAIL
                </span>

                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-xs sm:text-sm text-[var(--text-primary)] font-bold truncate">
                    {profileData.email}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    className="min-h-[44px] sm:min-h-0 px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--accent)] transition-all flex items-center gap-1.5 text-xs font-mono-tech cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[var(--accent)]" />
                        <span className="text-[var(--accent)]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center space-x-3 text-xs font-mono-tech text-[var(--text-muted)]">
                <div className="p-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--accent)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{profileData.location}</span>
              </div>
            </div>

            {/* Social Links & Resume CTA */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center space-x-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex-1 min-h-[44px] py-3 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs font-mono-tech text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center space-x-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex-1 min-h-[44px] py-3 px-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-xs font-mono-tech text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center space-x-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="/resume.pdf"
                download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
                className="w-full min-h-[44px] py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center space-x-2 transition-opacity hover:opacity-90 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-card bg-[var(--bg-surface)] border border-[var(--border-subtle)] h-full">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 animate-pulse" />
                </div>
                <h4 className="font-sans text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  Note Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm font-normal">
                  Thank you for writing. I will reply to <span className="font-bold text-[var(--text-primary)]">{formState.email || 'your email'}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 min-h-[44px] px-6 py-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-xs font-mono-tech text-[var(--text-primary)] hover:border-[var(--accent)] transition-all cursor-pointer"
                >
                  Write Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-eyebrow">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-base sm:text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-eyebrow">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-base sm:text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-eyebrow">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Campus Placement Opportunity / Engineering Interview"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-base sm:text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-eyebrow">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share role requirements, company details, or interview schedules..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-base sm:text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono-tech font-bold text-xs uppercase tracking-[0.14em] hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">SENDING NOTE...</span>
                  ) : (
                    <>
                      <span>SEND NOTE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
