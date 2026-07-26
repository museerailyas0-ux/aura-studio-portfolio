import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#FBF7F2] text-[#2B2622] relative">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold block mb-3">
          — SPECIALIZED CORE COMPETENCIES
        </span>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#2B2622] font-normal tracking-tight mb-12">
          Domain Mastery & <span className="italic gold-gradient-text">Neural Capabilities</span>
        </h2>

        {/* Pill Tag Cloud with Staggered Float-Up */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {SKILLS_LIST.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card-light px-6 py-3 rounded-full border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:shadow-[0_8px_25px_rgba(198,161,91,0.25)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-2 h-2 rounded-full bg-[#C6A15B] group-hover:scale-125 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2B2622] group-hover:text-[#16130F]">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
