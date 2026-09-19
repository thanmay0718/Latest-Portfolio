import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { PageBackground } from './components/ui/PageBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechArsenalSection } from './components/sections/TechArsenalSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Touch-gating for Lenis smooth scroll: disable on touch devices for zero-lag native scroll
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="relative min-h-screen text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)]">
        <PageBackground />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />

        <main className="space-y-12 sm:space-y-16">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechArsenalSection />
          <ExperienceSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
