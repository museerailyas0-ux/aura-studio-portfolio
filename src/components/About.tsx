import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_DATA } from '../data/portfolioData';
import { Sparkles, Quote, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#FBF7F2] text-[#2B2622] relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D5B7]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8C4C4]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Portrait with Gold Frame & Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer offset gold border frame */}
              <div className="absolute -inset-4 border border-[#C6A15B]/40 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500 pointer-events-none" />
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C6A15B]/30 bg-[#16130F] aspect-[3/4]">
                <img
                  src={ABOUT_DATA.portraitUrl}
                  alt="Elena Vance - AURA Creative Director"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter saturate-105 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/70 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Glass Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 glass-card-dark text-[#FBF7F2] p-4 sm:p-5 rounded-2xl border border-[#C6A15B]/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-3.5 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C6A15B] to-[#E8D5B7] text-[#16130F] flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif-display text-sm font-semibold text-[#E8D5B7]">
                    {ABOUT_DATA.badge}
                  </p>
                  <p className="text-[10px] text-[#E8C4C4] uppercase tracking-wider font-mono">
                    High Fashion & AI Strategy
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Editorial Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-medium">
                {ABOUT_DATA.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#2B2622] font-normal leading-[1.18] mb-6">
              {ABOUT_DATA.title}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#55504A] font-light leading-relaxed mb-8">
              <p>{ABOUT_DATA.narrative1}</p>
              <p>{ABOUT_DATA.narrative2}</p>
            </div>

            {/* Italic Serif Pull Quote */}
            <div className="glass-card-light p-6 sm:p-8 rounded-2xl border-l-4 border-l-[#C6A15B] my-4 relative">
              <Quote className="w-8 h-8 text-[#C6A15B]/30 absolute top-4 right-4" />
              <p className="font-serif-display italic text-lg sm:text-xl text-[#2B2622] leading-snug relative z-10">
                "{ABOUT_DATA.quote}"
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B] mt-3 block font-semibold">
                — Elena Vance, Founder & Creative Lead
              </span>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {[
                "100% Bespoke Code",
                "Neural 4K Renders",
                "Conversion Strategy"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  <span className="text-xs font-medium text-[#2B2622] uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Personal Monogram Signature */}
            <div className="mt-8 pt-6 border-t border-[#C6A15B]/20 flex items-center justify-between">
              <div className="font-serif-display italic text-2xl text-[#C6A15B] tracking-wider">
                Elena Vance
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#55504A]">
                GENEVA / NEW YORK / PARIS
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
