import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseMe } from './components/WhyChooseMe';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AdShowcase } from './components/AdShowcase';
import { VideoShowcase } from './components/VideoShowcase';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Workflow } from './components/Workflow';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { BookingModal } from './components/BookingModal';
import { DemoModal, DemoType } from './components/DemoModal';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project } from './types';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('Free Demo Website Request');
  
  const [demoModal, setDemoModal] = useState<{ isOpen: boolean; type: DemoType }>({
    isOpen: false,
    type: 'website'
  });

  const handleOpenBooking = (topic?: string) => {
    if (topic) {
      setBookingTopic(topic);
    }
    setIsBookingOpen(true);
  };

  const handleOpenDemoModal = (type: DemoType = 'website') => {
    setDemoModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-[#FBF7F2] text-[#2B2622] font-sans relative antialiased selection:bg-[#C6A15B]/30 selection:text-[#16130F]">
      {/* Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('Free Demo Website Request')}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onOpenDemoModal={handleOpenDemoModal}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* About Me / Creative Director Narrative */}
      <About />

      {/* Signature Services */}
      <Services
        onOpenBooking={handleOpenBooking}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Why Choose Me & Animated Counter Metrics */}
      <WhyChooseMe />

      {/* Interactive Horizontal Case Study Slider */}
      <FeaturedProjects
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* AI Advertisement Campaigns Gallery */}
      <AdShowcase
        onOpenBooking={() => handleOpenBooking('AI Ad Campaign Series')}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* AI Video Showreel & Teaser Section */}
      <VideoShowcase
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Core Competencies Tag Cloud */}
      <Skills />

      {/* Generative Tools & Tech Stack */}
      <Tools />

      {/* 5-Stage Sprint Methodology */}
      <Workflow />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Contact Section & Brief Submission */}
      <Contact />

      {/* Final Pre-Footer Call To Action */}
      <FinalCTA
        onOpenBooking={() => handleOpenBooking('Free Demo Website Request')}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Footer */}
      <Footer />

      {/* Project Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => handleOpenBooking('Free Demo Website Request')}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* White-Glove Discovery Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultTopic={bookingTopic}
      />

      {/* Universal Premium Demo Modal */}
      <DemoModal
        isOpen={demoModal.isOpen}
        type={demoModal.type}
        onClose={() => setDemoModal(prev => ({ ...prev, isOpen: false }))}
      />

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
