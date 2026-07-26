import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Layout, Sparkles, Film, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Clock, Globe, MessageCircle, FileText, Smartphone, Megaphone,
  Video, Play, Gift, Send, Check
} from 'lucide-react';
import { DemoType } from './DemoModal';

interface ServicesProps {
  onOpenBooking: (topic?: string) => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking, onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ads' | 'video'>('all');

  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F3ECE3] text-[#2B2622] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold">
              — THREE CORE CREATIVE PILLARS
            </span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2B2622] font-normal tracking-tight max-w-3xl">
            Bespoke Services for <span className="italic font-light gold-gradient-text">High-Growth Brands</span>
          </h2>

          <p className="text-sm sm:text-base text-[#55504A] font-light max-w-2xl mt-4 leading-relaxed">
            From 48-hour custom websites with free demo previews to high-converting AI advertising campaigns and viral creator video edits — powered by cutting-edge AI tools and clean design.
          </p>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[#16130F] border border-[#C6A15B]/30 shadow-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C6A15B] text-[#16130F] font-bold shadow-md'
                  : 'text-[#E8D5B7] hover:text-[#FBF7F2]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-[#C6A15B] text-[#16130F] font-bold shadow-md'
                  : 'text-[#E8D5B7] hover:text-[#FBF7F2]'
              }`}
            >
              1. Website Design
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer ${
                activeTab === 'ads'
                  ? 'bg-[#C6A15B] text-[#16130F] font-bold shadow-md'
                  : 'text-[#E8D5B7] hover:text-[#FBF7F2]'
              }`}
            >
              2. AI Ads Design
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-[#C6A15B] text-[#16130F] font-bold shadow-md'
                  : 'text-[#E8D5B7] hover:text-[#FBF7F2]'
              }`}
            >
              3. AI Video Editing
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FREE DEMO WEBSITE HIGHLIGHT BANNER */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#16130F] via-[#2B2622] to-[#16130F] text-[#FBF7F2] border border-[#C6A15B]/40 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#E8D5B7] text-[10px] font-mono uppercase tracking-widest">
                  <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>SPECIAL RISK-FREE WEBSITE GUARANTEE</span>
                </div>

                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#E8D5B7] font-semibold leading-tight">
                  First, a <span className="gold-gradient-text italic">Free Demo Website</span> Will Be Shown According to Your Requirements.
                </h3>

                <p className="text-sm sm:text-base text-[#F3ECE3]/80 font-light leading-relaxed">
                  After you review and approve the live demo, the full responsive website will be developed and launched as a paid project within <span className="text-[#C6A15B] font-semibold">48 hours</span>. Zero upfront risk, zero obligation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C6A15B]/20 text-xs text-[#E8D5B7]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>Free Custom Demo First</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>48-Hour Full Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>Bilingual & WhatsApp Ready</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking('Free Demo Website Request')}
                  className="w-full px-8 py-4 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(198,161,91,0.5)] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Request Free Demo</span>
                </button>

                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking('Full Luxury Website (48h Turnaround)')}
                  className="w-full px-8 py-4 rounded-full bg-white/5 border border-[#C6A15B]/30 hover:border-[#C6A15B] text-[#FBF7F2] font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A15B]" />
                  <span>Contact for Demo</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: WEBSITE DESIGN */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#C6A15B]/30 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layout className="w-5 h-5 text-[#C6A15B]" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C6A15B] font-bold">
                    SERVICE CATEGORY 01
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#2B2622] font-medium">
                  Website Design & Development
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#16130F] text-[#C6A15B] font-mono text-xs font-bold border border-[#C6A15B]/40">
                  ⚡ 48-Hour Turnaround
                </span>
                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking('Free Demo Website Request')}
                  className="px-6 py-2.5 rounded-full bg-[#C6A15B] text-[#16130F] font-semibold text-xs uppercase tracking-widest hover:bg-[#2B2622] hover:text-[#E8D5B7] transition-all cursor-pointer"
                >
                  Discuss Your Website
                </button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#55504A] font-light max-w-3xl mb-8 leading-relaxed">
              We craft modern, premium, responsive websites using advanced AI workflows and clean React/TypeScript development code. Every platform is tailored for maximum conversion, sub-second load speeds, and effortless customer interaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  Responsive & Mobile First
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Engineered desktop-down and mobile-up for flawless rendering on iPhones, iPads, and high-DPI displays.
                </p>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  Bilingual English & Urdu
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Seamless multi-language toggles with proper Right-to-Left (RTL) alignment and localized typography.
                </p>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  WhatsApp & Google Sheets API
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Automated lead forms that instantly relay customer inquiries to WhatsApp and log submissions in Google Sheets.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: AI ADS & ADVERTISEMENT DESIGN */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'ads') && (
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#C6A15B]/30 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Megaphone className="w-5 h-5 text-[#C6A15B]" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C6A15B] font-bold">
                    SERVICE CATEGORY 02
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#2B2622] font-medium">
                  AI Ads & Advertisement Design
                </h3>
              </div>

              <button
                onClick={() => onOpenDemoModal ? onOpenDemoModal('ad') : onOpenBooking('AI Ad Campaign Series')}
                className="px-6 py-2.5 rounded-full bg-[#C6A15B] text-[#16130F] font-semibold text-xs uppercase tracking-widest hover:bg-[#2B2622] hover:text-[#E8D5B7] transition-all cursor-pointer shrink-0"
              >
                Get Custom AI Ads
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#55504A] font-light max-w-3xl mb-8 leading-relaxed">
              We design all kinds of high-converting advertising creatives using the latest neural image tools (Midjourney v6, ComfyUI, Photoshop AI). Built to stop the scroll and drive instant user engagement across any industry or style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-widest font-bold">01 / SOCIAL ADS</span>
                  <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold mt-2 mb-2">
                    Social Media Ads
                  </h4>
                  <p className="text-xs text-[#55504A] font-light leading-relaxed">
                    Custom-ratio visual graphics for Instagram feeds, Facebook banners, and TikTok sponsor campaigns.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 text-[11px] font-mono text-[#2B2622] font-medium">
                  ✓ IG / FB / TikTok Ready
                </div>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-widest font-bold">02 / PRODUCT ADS</span>
                  <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold mt-2 mb-2">
                    Product & E-Commerce Ads
                  </h4>
                  <p className="text-xs text-[#55504A] font-light leading-relaxed">
                    Studio-quality product lighting, AI lifestyle placement, and promotional callout banners.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 text-[11px] font-mono text-[#2B2622] font-medium">
                  ✓ High-Res Studio Render
                </div>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-widest font-bold">03 / PROMOTIONAL ADS</span>
                  <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold mt-2 mb-2">
                    Promotional & Offer Banners
                  </h4>
                  <p className="text-xs text-[#55504A] font-light leading-relaxed">
                    Limited-time discount banners, academy launches, menu specials, and event advertisements.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 text-[11px] font-mono text-[#2B2622] font-medium">
                  ✓ High Click-Through Rate
                </div>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-widest font-bold">04 / BRAND ADS</span>
                  <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold mt-2 mb-2">
                    Brand & Business Ads
                  </h4>
                  <p className="text-xs text-[#55504A] font-light leading-relaxed">
                    Authority-building corporate campaigns, local business ads, and luxury brand promotional assets.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C6A15B]/20 text-[11px] font-mono text-[#2B2622] font-medium">
                  ✓ Multi-Industry Styling
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: AI VIDEO EDITING FOR CONTENT CREATORS */}
        {/* ------------------------------------------------------------- */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#C6A15B]/30 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Film className="w-5 h-5 text-[#C6A15B]" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C6A15B] font-bold">
                    SERVICE CATEGORY 03
                  </span>
                </div>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#2B2622] font-medium">
                  AI Video Editing for Content Creators
                </h3>
              </div>

              <button
                onClick={() => onOpenDemoModal ? onOpenDemoModal('video') : onOpenBooking('AI Video Production / Creator Editing')}
                className="px-6 py-2.5 rounded-full bg-[#C6A15B] text-[#16130F] font-semibold text-xs uppercase tracking-widest hover:bg-[#2B2622] hover:text-[#E8D5B7] transition-all cursor-pointer shrink-0"
              >
                Discuss Video Editing
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#55504A] font-light max-w-3xl mb-8 leading-relaxed">
              Tailored for influencers, YouTubers, TikTok creators, and modern brands. We craft high-energy, aesthetic AI-enhanced video edits designed to hold audience retention and maximize social reach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <Play className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  Instagram Reels & YouTube Shorts
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Fast-paced short-form edits with auto-synced subtitles, sound design, sound effects, and viral hook framing.
                </p>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <Video className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  Promos & Content Creator Videos
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Full production editing for talking heads, educational promos, product reviews, and brand announcement reels.
                </p>
              </div>

              <div className="glass-card-light p-6 rounded-2xl border border-[#C6A15B]/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#16130F] text-[#C6A15B] flex items-center justify-center font-mono font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif-display text-xl text-[#2B2622] font-semibold">
                  Aesthetic AI-Enhanced Visual Edits
                </h4>
                <p className="text-xs text-[#55504A] font-light leading-relaxed">
                  Generative B-roll inserts, 4K upscale enhancement, custom generative transitions, and luxury color grading.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
