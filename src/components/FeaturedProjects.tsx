import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers, Eye, MessageCircle } from 'lucide-react';
import { DemoType } from './DemoModal';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject, onOpenDemoModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FBF7F2] text-[#2B2622] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold block mb-3">
            — FEATURED CASE STUDIES
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2B2622] font-normal tracking-tight">
            Curated <span className="italic gold-gradient-text">Digital Architecture</span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#C6A15B]/40 hover:border-[#C6A15B] bg-[#16130F] text-[#E8D5B7] hover:bg-[#C6A15B] hover:text-[#16130F] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="text-sm font-mono tracking-widest text-[#2B2622] px-2">
            0{currentIndex + 1} / 0{PROJECTS.length}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#C6A15B]/40 hover:border-[#C6A15B] bg-[#16130F] text-[#E8D5B7] hover:bg-[#C6A15B] hover:text-[#16130F] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Indicator Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12">
        <div className="w-full h-[2px] bg-[#E8D5B7]/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#C6A15B]"
            animate={{ width: `${((currentIndex + 1) / PROJECTS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Main Interactive Slide Showcase */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#16130F] text-[#FBF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#C6A15B]/30 shadow-2xl relative overflow-hidden"
          >
            {/* Background Grain & Subtle Parallax Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Left: Project Details */}
            <div className="lg:col-span-5 flex flex-col justify-between z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#E8D5B7] text-xs font-mono uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                  <span>{currentProject.category}</span>
                </div>

                <h3 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#FBF7F2] font-normal leading-tight mb-4">
                  {currentProject.title}
                </h3>

                <p className="text-base sm:text-lg text-[#F3ECE3]/80 font-light leading-relaxed mb-8">
                  {currentProject.tagline}
                </p>

                {/* Key Metrics Quick Row */}
                <div className="grid grid-cols-3 gap-4 border-y border-[#C6A15B]/20 py-4 mb-8">
                  {currentProject.impactStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif-display text-xl sm:text-2xl text-[#E8D5B7] font-semibold">
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-[#E8C4C4]/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.15em] shadow-[0_4px_25px_rgba(198,161,91,0.4)] hover:shadow-[0_8px_35px_rgba(198,161,91,0.7)] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Website</span>
                </a>

                {onOpenDemoModal && (
                  <button
                    onClick={() => onOpenDemoModal('website')}
                    className="px-6 py-3.5 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
                    <span>Free Website Demo</span>
                  </button>
                )}

                <button
                  onClick={() => onSelectProject(currentProject)}
                  className="px-6 py-3.5 rounded-full bg-white/5 border border-[#C6A15B]/40 text-[#E8D5B7] hover:border-[#C6A15B] hover:text-[#FBF7F2] font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#C6A15B]" />
                  <span>Case Study Details</span>
                </button>
              </div>
            </div>

            {/* Right: Framed Browser Showcase Display */}
            <div className="lg:col-span-7 relative group">
              {/* Glass Browser Bar Frame */}
              <div className="rounded-2xl overflow-hidden border border-[#C6A15B]/40 bg-[#2B2622]/80 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="px-4 py-3 bg-[#16130F] border-b border-[#C6A15B]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono tracking-wider text-[#C6A15B] hover:underline flex items-center gap-1.5 bg-[#C6A15B]/10 px-3 py-1 rounded-full border border-[#C6A15B]/20"
                  >
                    <span>{currentProject.liveUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E8D5B7] hover:text-[#C6A15B] font-mono uppercase tracking-wider flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </a>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={currentProject.coverImage}
                      alt={currentProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter saturate-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay Badge */}
                    <div className="absolute inset-0 bg-[#16130F]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <div className="px-6 py-3 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl">
                        <ExternalLink className="w-4 h-4" />
                        Open Live Website
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
