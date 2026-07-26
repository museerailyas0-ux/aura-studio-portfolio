import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_DATA, CONTACT_INFO, PROJECTS } from '../data/portfolioData';
import { Sparkles, MessageCircle, ArrowRight, ExternalLink, Globe, Lock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { DemoType } from './DemoModal';
import { Project } from '../types';

interface HeroProps {
  onOpenBooking: (topic?: string) => void;
  onOpenDemoModal?: (type: DemoType) => void;
  onSelectProject?: (project: Project) => void;
}

// Featured showcase items in exact requested order
const FEATURED_SHOWCASE = [
  {
    id: 'cafe-snug',
    title: 'Cafe Snug',
    category: 'Cafe & Restaurant Website',
    displayUrl: 'cafe-snug-web-z4xe.vercel.app',
    liveUrl: 'https://cafe-snug-web-z4xe.vercel.app/',
    image: '/src/assets/images/project_cafesnug_1784975909957.jpg',
    badge: 'Featured #1 • Dining',
    highlights: ['Interactive Menu', 'Food Gallery', '48-Hour Speed'],
    tagline: 'A modern, aesthetic restaurant & cafe website featuring immersive food galleries, interactive menu highlights, and direct location contact.'
  },
  {
    id: 'tafheem-ul-islam',
    title: 'Tafheem-ul-Islam Academy',
    category: 'Educational / Female Online Academy',
    displayUrl: 'tafheem-ul-islam.academy',
    liveUrl: 'https://tafheem-ul-islam-academy-lil-banat-528273318797.asia-southeast1.run.app/',
    image: '/src/assets/images/project_tafheem_1784975889041.jpg',
    badge: 'Featured #2 • Education',
    highlights: ['English & Urdu', 'WhatsApp Connect', 'Google Sheets Sync'],
    tagline: 'A responsive, high-converting Islamic educational platform featuring English & Urdu support, WhatsApp integration, and automated registration.'
  },
  {
    id: 'greenlife-landscaping',
    title: 'GreenLife Landscaping',
    category: 'Professional Landscaping Business',
    displayUrl: 'greenlife-landscaping.com',
    liveUrl: 'https://lawn-lover-connect.vercel.app/#projects',
    image: '/src/assets/images/project_greenlife_1784975930255.jpg',
    badge: 'Featured #3 • Services',
    highlights: ['Google Maps Radius', 'Online Quote Engine', 'Mobile First'],
    tagline: 'A high-converting business website for professional lawn care and garden architecture with Google Maps integration and online quote requests.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenDemoModal, onSelectProject }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate every 4.5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_SHOWCASE.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const activeProject = FEATURED_SHOWCASE[activeIndex];

  const handleProjectClick = () => {
    const fullProject = PROJECTS.find(p => p.id === activeProject.id);
    if (fullProject && onSelectProject) {
      onSelectProject(fullProject);
    } else {
      window.open(activeProject.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#16130F] text-[#FBF7F2] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden bg-grain">
      
      {/* Drifting Luxury Background Ambient Orbs (No person photos or broken AI images) */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.12, 0.95, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/6 left-1/12 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-br from-[#C6A15B]/20 via-[#E8C4C4]/10 to-transparent blur-[130px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/6 right-1/12 w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#E8D5B7]/15 via-[#D9A9A9]/10 to-transparent blur-[140px] pointer-events-none z-0"
      />

      {/* Subtle Floating Sparkle Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              y: [-10, 20, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7
            }}
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i * 16) % 80}%`,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#C6A15B]/60 blur-[0.5px]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Agency Pitch, Copywriting & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C6A15B]/30 bg-[#2B2622]/50 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8D5B7] font-mono">
                {HERO_DATA.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight mb-6 text-[#FBF7F2]"
            >
              Where <span className="italic font-light gold-gradient-text">Artificial Intelligence</span> Meets Timeless Design.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#F3ECE3]/85 font-light leading-relaxed mb-8 max-w-xl"
            >
              I craft bespoke, high-converting luxury websites in <span className="text-[#E8D5B7] font-medium underline decoration-[#C6A15B]/50 underline-offset-4">48 hours</span> powered by cutting-edge AI tools — complete with risk-free interactive demos, automated lead flows, and cinematic aesthetics.
            </motion.p>

            {/* Primary Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full mb-10"
            >
              {/* WhatsApp Floating Chat Link (Primary) */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-[0.18em] shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Free Demo Request */}
              <button
                onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking('Free Demo Website Request')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.18em] shadow-[0_6px_25px_rgba(198,161,91,0.4)] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Free Demo</span>
              </button>

              {/* Contact / Start Project */}
              <button
                onClick={() => onOpenBooking('Start Your Project')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#2B2622] border border-[#C6A15B]/40 text-[#E8D5B7] hover:border-[#C6A15B] hover:text-[#FBF7F2] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-white/10"
            >
              <div>
                <p className="font-serif-display text-xl sm:text-2xl text-[#E8D5B7] font-semibold">48 Hours</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#F3ECE3]/60">Delivery Speed</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl text-[#E8D5B7] font-semibold">Risk-Free</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#F3ECE3]/60">Free Live Demo</p>
              </div>
              <div>
                <p className="font-serif-display text-xl sm:text-2xl text-[#E8D5B7] font-semibold">100% Custom</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#F3ECE3]/60">AI Crafted</p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Multi-Device Showcase (MacBook + Floating Mobile) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Main Showcase Container with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-xl group cursor-pointer"
              onClick={handleProjectClick}
            >
              
              {/* Soft Ambient Gold Glow Behind Mockup (Expands on hover) */}
              <div 
                className={`absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C6A15B]/30 via-[#E8D5B7]/15 to-transparent blur-3xl transition-all duration-500 pointer-events-none ${
                  isHovered ? 'opacity-100 scale-105' : 'opacity-60 scale-95'
                }`}
              />

              {/* MACBOOK / LAPTOP MOCKUP CONTAINER */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.02 : 1,
                  y: isHovered ? -4 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#1A1714] border border-[#C6A15B]/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
              >
                
                {/* Browser Top Window Frame */}
                <div className="bg-[#24201C] px-4 py-3 border-b border-[#3A332C] flex items-center justify-between select-none">
                  
                  {/* Traffic Light Window Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-red-600/40" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-yellow-600/40" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-green-600/40" />
                  </div>

                  {/* HTTPS Domain Address Bar */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#16130F] border border-[#3A332C] text-[11px] font-mono text-[#E8D5B7]/90 max-w-[240px] sm:max-w-[300px] truncate">
                    <Lock className="w-3 h-3 text-[#27C93F] shrink-0" />
                    <span className="truncate">https://{activeProject.displayUrl}</span>
                    <ShieldCheck className="w-3 h-3 text-[#C6A15B] shrink-0 ml-auto" />
                  </div>

                  {/* External Link Action */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C6A15B] hover:text-[#E8D5B7]">
                    <span className="hidden sm:inline">Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Laptop Display Viewport with Smooth Image Transitions */}
                <div className="relative aspect-[16/10] w-full bg-[#12100E] overflow-hidden group/screen">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, scale: 1.04, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -8 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Real Project Cover Screenshot */}
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/screen:scale-105"
                      />

                      {/* Subtle Top & Bottom Gradient Shadows */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16130F] via-transparent to-[#16130F]/30 opacity-80" />

                      {/* Screen Content Overlay Details */}
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end bg-gradient-to-t from-[#16130F] via-[#16130F]/80 to-transparent">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#C6A15B] text-[#16130F] text-[10px] font-bold font-mono uppercase tracking-wider">
                            {activeProject.badge}
                          </span>
                          <span className="text-[10px] font-mono text-[#F3ECE3]/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                            Live Portfolio Project
                          </span>
                        </div>

                        <h3 className="font-serif-display text-xl sm:text-2xl text-[#FBF7F2] font-medium leading-tight">
                          {activeProject.title}
                        </h3>

                        <p className="text-xs text-[#F3ECE3]/80 font-light line-clamp-1 mt-1">
                          {activeProject.tagline}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Action Badge on Screen Hover */}
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#2B2622]/90 border border-[#C6A15B]/50 backdrop-blur-md text-xs font-mono text-[#E8D5B7] flex items-center gap-2 shadow-lg transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </div>

                </div>

                {/* Laptop Bottom Aluminum Lip */}
                <div className="h-4 bg-[#28231E] border-t border-[#3A332C] rounded-b-xl flex justify-center items-center relative">
                  <div className="w-16 h-1 rounded-full bg-[#16130F]/60" />
                </div>
              </motion.div>

              {/* FLOATING MOBILE DEVICE MOCKUP (Positioned bottom-right overlay) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: isHovered ? -8 : [0, -6, 0],
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{
                  y: isHovered ? { duration: 0.3 } : { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }}
                className="absolute -bottom-6 -right-2 sm:-right-6 w-28 sm:w-36 aspect-[9/18] rounded-2xl sm:rounded-3xl bg-[#1A1714] border-2 border-[#C6A15B]/60 shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden z-20 pointer-events-none"
              >
                {/* Smartphone Speaker Pill Notch */}
                <div className="absolute top-2 inset-x-0 mx-auto w-8 sm:w-10 h-1.5 rounded-full bg-[#28231E] z-30 flex justify-center items-center">
                  <div className="w-2 sm:w-3 h-0.5 rounded-full bg-white/20" />
                </div>

                {/* Mobile Viewport Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${activeProject.id}`}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.45 }}
                    className="w-full h-full relative pt-4"
                  >
                    <img
                      src={activeProject.image}
                      alt={`${activeProject.title} Mobile View`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/80 via-transparent to-transparent" />
                    
                    {/* Mobile Footer Badge */}
                    <div className="absolute bottom-2 inset-x-1.5 p-1 rounded-lg bg-[#16130F]/90 backdrop-blur-sm text-[8px] font-mono text-[#E8D5B7] text-center border border-[#C6A15B]/30 truncate">
                      Mobile Responsive
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

            </motion.div>

            {/* SHOWCASE CONTROLS & TABS (Below the mockups) */}
            <div className="mt-10 w-full max-w-xl flex flex-col items-center">
              
              {/* "Featured Projects" Section Label */}
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold">
                  Featured Projects
                </span>
              </div>

              {/* Clickable Tabs / Dots for 3 Projects */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
                {FEATURED_SHOWCASE.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative p-2.5 sm:p-3 rounded-xl border transition-all duration-300 text-left flex flex-col cursor-pointer overflow-hidden ${
                        isActive
                          ? 'bg-[#2B2622]/80 border-[#C6A15B] shadow-[0_0_20px_rgba(198,161,91,0.25)]'
                          : 'bg-[#1D1915]/50 border-white/10 hover:border-[#C6A15B]/40 hover:bg-[#2B2622]/40 text-[#F3ECE3]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#C6A15B]' : 'text-[#F3ECE3]/50'}`}>
                          0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
                        )}
                      </div>

                      <span className={`text-xs font-serif truncate ${isActive ? 'text-[#E8D5B7] font-semibold' : 'text-[#F3ECE3]/70'}`}>
                        {item.title}
                      </span>

                      {/* Active Progress Bar indicator (animates over 4.5s) */}
                      {isActive && !isHovered && (
                        <motion.div
                          key={`progress-${idx}-${activeIndex}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 4.5, ease: "linear" }}
                          className="absolute bottom-0 left-0 h-0.5 bg-[#C6A15B]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1">
        <a
          href="#about"
          className="flex flex-col items-center group cursor-pointer text-[#C6A15B]/70 hover:text-[#E8D5B7] transition-colors"
          aria-label="Scroll to About Section"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-mono">SCROLL</span>
          <div className="w-[1px] h-8 bg-[#C6A15B]/30 relative overflow-hidden mt-1">
            <motion.div
              animate={{ y: [0, 32] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[#C6A15B]"
            />
          </div>
        </a>
      </div>

    </section>
  );
};
