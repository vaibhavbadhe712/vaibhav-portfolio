import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import ProjectsSection from './components/ProjectsSection';
import AISection from './components/AISection';
import OpenSourceSection from './components/OpenSourceSection';
import TechStackSection from './components/TechStackSection';
import CertificationsSection from './components/CertificationsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ArchitecturePhilosophy from './components/ArchitecturePhilosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificatesModal from './components/CertificatesModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-orange-500/20 selection:text-orange-600">
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenCertifications={() => setIsCertModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with interactive Flutter phone preview */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 5 Key Metric Stats Counters */}
        <StatsCounter />

        {/* Production Mobile Apps & Deep-Dive Modals (with Play Store & App Store direct links) */}
        <ProjectsSection />

        {/* Practical AI in Mobile Engineering Spotlight (OfficeBook AI Chat, Fastify LLM Streaming) */}
        <div id="ai">
          <AISection />
        </div>

        {/* pub.dev toast_service Package Spotlight & Live Interactive Demo */}
        <OpenSourceSection />

        {/* Full Stack Tech Stack, Payment Gateways & Store Releases */}
        <TechStackSection />

        {/* Verified Industry Certifications & Google AI Credentials */}
        <CertificationsSection onOpenAllCertificates={() => setIsCertModalOpen(true)} />

        {/* Career Timeline & Best Employee Award */}
        <ExperienceTimeline />

        {/* Clean Architecture & Engineering Philosophy */}
        <ArchitecturePhilosophy />

        {/* Contact, Inquiries & WhatsApp Direct */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive PDF Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Dedicated Comprehensive Certifications & Credentials Modal Hub */}
      {isCertModalOpen && (
        <CertificatesModal onClose={() => setIsCertModalOpen(false)} />
      )}
    </div>
  );
}
