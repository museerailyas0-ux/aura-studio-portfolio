import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIATORS, CORE_PILLARS } from '../data/portfolioData';
import { Sparkles, Award, Palette, Smartphone, HeartHandshake } from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#C6A15B]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C6A15B]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#C6A15B]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#C6A15B]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-[#C6A15B]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 bg-[#16130F] text-[#FBF7F2] relative overflow-hidden bg-grain">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C6A15B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#E8C4C4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold mb-3">
            — THE AURA ADVANTAGE
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#FBF7F2] font-normal tracking-tight max-w-3xl">
            Why High-End Brands Choose <span className="italic gold-gradient-text">AURA Studio</span>
          </h2>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {DIFFERENTIATORS.map((diff, idx) => (
            <motion.div
              key={diff.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="glass-card-dark p-8 sm:p-10 rounded-3xl border border-[#C6A15B]/25 hover:border-[#C6A15B] transition-all duration-500 relative group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif-display text-5xl sm:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-br from-[#C6A15B] to-[#E8D5B7]/40 group-hover:scale-105 transition-transform duration-300">
                  {diff.number}
                </span>
                <Sparkles className="w-5 h-5 text-[#C6A15B]/50 group-hover:text-[#C6A15B] transition-colors" />
              </div>

              <h3 className="font-serif-display text-2xl text-[#E8D5B7] font-medium mb-4">
                {diff.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F3ECE3]/75 font-light leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Quality Pillars Section */}
        <div className="glass-card-dark rounded-3xl p-8 sm:p-12 border border-[#C6A15B]/30 relative overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A15B] font-mono font-semibold block mb-2">
              OUR CORE QUALITY COMMITMENTS
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#FBF7F2] font-normal">
              Built on Craftsmanship & Transparency
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl bg-[#16130F]/60 border border-[#C6A15B]/20 hover:border-[#C6A15B]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2B2622] border border-[#C6A15B]/30 flex items-center justify-center mb-4 group-hover:border-[#C6A15B] transition-colors">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C6A15B]/15 text-[#C6A15B] text-[9px] font-mono uppercase tracking-wider font-semibold mb-3">
                    {pillar.badge}
                  </span>
                  <h4 className="font-serif-display text-lg text-[#E8D5B7] font-semibold mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#F3ECE3]/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
