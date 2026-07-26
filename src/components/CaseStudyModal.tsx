import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { DemoType } from './DemoModal';
import {
  X, ExternalLink, Sparkles, CheckCircle2, ArrowRight, ShieldCheck,
  Globe, MessageCircle, FileText, GraduationCap, Utensils, Camera,
  MapPin, Smartphone, Trees, Map, CheckCircle
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenBooking, onOpenDemoModal }) => {
  if (!project) return null;

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-[#C6A15B]" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-[#C6A15B]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#C6A15B]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#C6A15B]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#C6A15B]" />;
      case 'Camera': return <Camera className="w-5 h-5 text-[#C6A15B]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#C6A15B]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#C6A15B]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#C6A15B]" />;
      case 'Map': return <Map className="w-5 h-5 text-[#C6A15B]" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-[#C6A15B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C6A15B]" />;
    }
  };

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[100] overflow-y-auto bg-[#16130F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#16130F] text-[#FBF7F2] border border-[#C6A15B]/30 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-30 bg-[#16130F]/90 backdrop-blur-xl border-b border-[#C6A15B]/20 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B] px-3 py-1 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/30">
                CASE STUDY DEEP-DIVE
              </span>
              <span className="text-xs font-serif text-[#E8D5B7] hidden sm:inline">
                {project.client}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[#C6A15B]/30 hover:border-[#C6A15B] bg-[#2B2622] text-[#E8D5B7] hover:bg-[#C6A15B] hover:text-[#16130F] transition-all flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-12">
            
            {/* 1. Hero Title & Main Showcase Frame */}
            <div>
              <h1 className="font-serif-display text-4xl sm:text-6xl text-[#FBF7F2] font-normal mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-[#F3ECE3]/80 font-light max-w-2xl mb-8">
                {project.tagline}
              </p>

              {/* Main Preview Image Switcher */}
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/30 bg-[#2B2622] relative aspect-[16/9] shadow-2xl mb-4">
                <img
                  src={project.galleryImages[activeGalleryIndex] || project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />

                <div className="absolute bottom-6 right-6 flex flex-wrap gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(198,161,91,0.5)] hover:bg-[#E8D5B7] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Website</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onOpenDemoModal) {
                        onOpenDemoModal('website');
                      } else {
                        onOpenBooking();
                      }
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#16130F]/90 text-[#E8D5B7] border border-[#C6A15B]/40 hover:border-[#C6A15B] hover:text-[#FBF7F2] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>View Demo</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#2B2622]/90 text-[#FBF7F2] border border-[#C6A15B]/30 hover:border-[#C6A15B] font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md hidden sm:flex"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Open Project</span>
                  </a>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-3">
                {project.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`w-20 h-14 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      activeGalleryIndex === idx
                        ? 'border-[#C6A15B] ring-2 ring-[#C6A15B]/50'
                        : 'border-[#C6A15B]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Project Meta Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl glass-card-dark border border-[#C6A15B]/20">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">CLIENT</p>
                <p className="text-sm font-semibold text-[#E8D5B7] mt-1">{project.client}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">INDUSTRY</p>
                <p className="text-sm font-semibold text-[#E8D5B7] mt-1">{project.industry}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">TIMELINE</p>
                <p className="text-sm font-semibold text-[#E8D5B7] mt-1">{project.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">ROLE</p>
                <p className="text-sm font-semibold text-[#E8D5B7] mt-1">{project.role}</p>
              </div>
            </div>

            {/* 3. Narrative: Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl glass-card-dark border border-[#C6A15B]/20">
                <h3 className="font-serif-display text-2xl text-[#E8D5B7] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  The Challenge
                </h3>
                <p className="text-sm text-[#F3ECE3]/80 font-light leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-card-dark border border-[#C6A15B]/20">
                <h3 className="font-serif-display text-2xl text-[#E8D5B7] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  The Solution
                </h3>
                <p className="text-sm text-[#F3ECE3]/80 font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 4. Feature Highlights Grid */}
            <div>
              <h3 className="font-serif-display text-2xl text-[#FBF7F2] mb-6">
                Key Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.featureHighlights.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-5 rounded-2xl bg-[#2B2622]/60 border border-[#C6A15B]/20 flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-[#16130F] border border-[#C6A15B]/30 shrink-0">
                      {getFeatureIcon(feature.iconName)}
                    </div>
                    <div>
                      <p className="font-serif-display text-base text-[#E8D5B7] font-semibold">
                        {feature.title}
                      </p>
                      <p className="text-xs text-[#F3ECE3]/70 font-light mt-1 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Business Impact Stats */}
            <div>
              <h3 className="font-serif-display text-2xl text-[#FBF7F2] mb-6">
                Quantifiable Business Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.impactStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl glass-card-dark border border-[#C6A15B]/30 text-center"
                  >
                    <p className="font-serif-display text-3xl sm:text-4xl text-[#E8D5B7] font-bold mb-2 gold-gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase font-mono tracking-wider text-[#E8C4C4]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Technologies Used */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#C6A15B] mb-3">
                TECH STACK & GENERATIVE TOOLS
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-[#2B2622] text-[#E8D5B7] text-xs font-mono border border-[#C6A15B]/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Closing CTA */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#2B2622] via-[#16130F] to-[#2B2622] border border-[#C6A15B]/40 text-center flex flex-col items-center">
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#FBF7F2] mb-3">
                Want Results Like This For Your Brand?
              </h3>
              <p className="text-sm text-[#F3ECE3]/70 font-light max-w-md mb-6">
                Let's schedule a 30-minute private consultation to evaluate your project vision.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="px-8 py-3.5 rounded-full bg-[#C6A15B] text-[#16130F] font-semibold text-xs uppercase tracking-widest hover:bg-[#E8D5B7] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(198,161,91,0.4)]"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
