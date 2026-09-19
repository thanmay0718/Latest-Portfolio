import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, FileText, Send, Sparkles, User, Briefcase, Code, Award, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { id: 'about', label: 'Profile & Bio', icon: User },
  { id: 'projects', label: 'Featured Projects', icon: Briefcase },
  { id: 'skills', label: 'Tech Arsenal', icon: Code },
  { id: 'experience', label: 'Experience', icon: Sparkles },
  { id: 'certifications', label: 'Credentials', icon: Award },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const SidebarProfile: React.FC = () => {
  const sectionIds = navItems.map((n) => n.id);
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -30;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] flex flex-col justify-between bg-[#0E0E14] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-6 overflow-y-auto">
      {/* Top User Info Header */}
      <div className="space-y-5">
        {/* User Portrait Photo */}
        <div className="relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#B8924A]/40 shadow-xl relative z-10 bg-[#13131C]">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 z-20 px-2 py-0.5 rounded-md bg-[#07070A] border border-[#B8924A]/60 text-[10px] font-mono-tech text-[#E9D8A6] font-bold shadow-md">
            CGPA 8.97
          </div>
        </div>

        {/* Name & Handle */}
        <div className="space-y-1">
          <h1 className="font-sans text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-tight">
            {profileData.name}
          </h1>
          <p className="font-mono-tech text-xs text-[#38BDF8] font-medium">
            @{profileData.handle}
          </p>
          <p className="font-sans text-xs text-[#E9D8A6] font-semibold pt-1">
            Full-Stack Developer
          </p>
          <p className="font-mono-tech text-[11px] text-[#9A9AA5]">
            Spring Boot • React • MySQL
          </p>
        </div>

        {/* Location & Academic Badge */}
        <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono-tech text-[#9A9AA5]">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>{profileData.location}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[#E9D8A6]">
            <GraduationCap className="w-3.5 h-3.5 text-[#B8924A] shrink-0" />
            <span>KL University B.Tech CSE ('27)</span>
          </div>
        </div>

        {/* CTAs: Message & Resume */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E9D8A6] to-[#B8924A] text-[#07070A] font-bold text-xs font-mono-tech hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Message / Connect</span>
          </button>

          <a
            href="/resume.pdf"
            download="Racha_Tanmay_Sri_Vardhan_Resume.pdf"
            className="w-full py-2 px-4 rounded-xl border border-[#B8924A]/40 bg-white/5 hover:bg-[#B8924A]/20 text-xs font-mono-tech text-[#E9D8A6] flex items-center justify-center space-x-2 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      {/* Navigation Tabs List */}
      <div className="space-y-1 pt-4 border-t border-white/10">
        <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[#6B6B78] px-3 mb-2">
          Navigation
        </p>

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-mono-tech flex items-center justify-between transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#B8924A]/20 text-[#E9D8A6] border border-[#B8924A]/40 font-bold shadow-sm'
                  : 'text-[#9A9AA5] hover:text-[#F4F1EA] hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#E9D8A6]' : 'text-[#9A9AA5]'}`} />
                <span>{item.label}</span>
              </div>
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#E9D8A6]" />}
            </button>
          );
        })}
      </div>

      {/* Social Footer Icons */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-around text-[#9A9AA5]">
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-white/10 hover:text-[#E9D8A6] transition-all"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-4 h-4 text-[#E9D8A6]" />
        </a>
        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-white/10 hover:text-[#38BDF8] transition-all"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
        </a>
        <a
          href={`mailto:${profileData.email}`}
          className="p-2 rounded-lg hover:bg-white/10 hover:text-[#E9D8A6] transition-all"
          aria-label="Email Direct"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
