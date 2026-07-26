import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AD_CREATIVES } from '../data/portfolioData';
import { AdCreative } from '../types';
import { Sparkles, Eye, X, Terminal, ArrowRight, MessageCircle } from 'lucide-react';
import { DemoType } from './DemoModal';

interface AdShowcaseProps {
  onOpenBooking: () => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const AdShowcase: React.FC<AdShowcaseProps> = ({ onOpenBooking, onOpenDemoModal }) => {
  const [selectedAd, setSelectedAd] = useState<AdCreative | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAd(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="ai-ads" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#16130F] text-[#FBF7F2] relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold mb-3">
            — AI-GENERATED CAMPAIGNS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#FBF7F2] font-normal tracking-tight max-w-3xl">
            High-Fashion <span className="italic gold-gradient-text">Promotional Creatives</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F3ECE3]/75 font-light max-w-xl mt-4">
            Scroll-stopping campaign imagery engineered with custom neural prompt architectures for luxury product debuts and billboard-scale media.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AD_CREATIVES.map((ad, idx) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setSelectedAd(ad)}
              className="group relative rounded-2xl overflow-hidden border border-[#C6A15B]/30 bg-[#2B2622] aspect-[4/3] cursor-pointer shadow-xl transition-all duration-500 hover:border-[#C6A15B] hover:shadow-[0_10px_30px_rgba(198,161,91,0.3)]"
            >
              <img
                src={ad.image}
                alt={ad.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/90 via-[#16130F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Caption Overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8D5B7] px-2.5 py-1 rounded-full bg-[#16130F]/70 border border-[#C6A15B]/30 backdrop-blur-md">
                    {ad.brand}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C6A15B] text-[#16130F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-display text-xl text-[#FBF7F2] font-semibold mb-1 group-hover:text-[#E8D5B7] transition-colors">
                    {ad.title}
                  </h3>
                  <p className="text-xs text-[#E8C4C4]/80 font-mono">
                    {ad.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro CTA */}
        <div className="glass-card-dark p-8 rounded-3xl border border-[#C6A15B]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-serif-display text-xl sm:text-2xl text-[#E8D5B7] font-medium">
              Need scroll-stopping ad creatives for your next launch?
            </h4>
            <p className="text-xs sm:text-sm text-[#F3ECE3]/70 font-light mt-1">
              We deliver complete multi-ratio campaign packages within 5 business days.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenDemoModal && (
              <button
                onClick={() => onOpenDemoModal('ad')}
                className="px-6 py-3.5 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
                <span>View AI Ad Samples</span>
              </button>
            )}
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-[#C6A15B] text-[#16130F] font-semibold text-xs uppercase tracking-widest hover:bg-[#E8D5B7] transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Commission Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAd && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedAd(null);
            }}
            className="fixed inset-0 z-[100] bg-[#16130F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#16130F] border border-[#C6A15B]/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedAd(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#16130F] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#C6A15B]/30 mb-6 bg-[#2B2622]">
                <img src={selectedAd.image} alt={selectedAd.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-2xl text-[#E8D5B7]">{selectedAd.title}</h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B]">{selectedAd.brand}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#2B2622]/80 border border-[#C6A15B]/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C6A15B] mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>NEURAL PROMPT SNIPPET</span>
                  </div>
                  <p className="text-xs font-mono text-[#F3ECE3]/80 italic">
                    "{selectedAd.promptSnippet}"
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-[#E8C4C4]/80">GENERATIVE STACK:</span>
                  {selectedAd.toolsUsed.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#2B2622] text-[#E8D5B7] text-[10px] font-mono border border-[#C6A15B]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
