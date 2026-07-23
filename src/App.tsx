import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CareerSection } from './components/CareerSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Fixed Navigation Header */}
      <Header onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main 1-Page Scroll Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Section 2: Career & Education */}
        <CareerSection />

        {/* Section 3: Key Projects */}
        <ProjectsSection />

        {/* Section 4: Capabilities */}
        <SkillsSection />

        {/* Section 5: Contact & Tools */}
        <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
