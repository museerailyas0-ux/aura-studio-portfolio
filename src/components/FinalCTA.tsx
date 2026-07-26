import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { DemoType } from './DemoModal';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onOpenDemoModal }) => {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-10 bg-[#16130F] text-[#FBF7F2] relative overflow-hidden bg-grain border-t border-[#C6A15B]/20">
      {/* Drifting Gold Background Particles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C6A15B]/15 via-[#E8D5B7]/10 to-transparent rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B2622]/60 border border-[#C6A15B]/30 text-[#E8D5B7] text-xs font-mono uppercase tracking-widest mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>RISK-FREE PREVIEW GUARANTEE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-[#FBF7F2] mb-8"
        >
          Ready to Build Your <br />
          <span className="italic gold-gradient-text">Next Website Project?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl text-[#F3ECE3]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Get a free live demo website built according to your specifications. Review and approve first before paying anything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:bg-[#20bd5a] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking()}
            className="px-8 py-4 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(198,161,91,0.5)] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Free Demo</span>
          </button>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#2B2622] border border-[#C6A15B]/40 text-[#E8D5B7] hover:border-[#C6A15B] hover:text-[#FBF7F2] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#C6A15B]" />
            <span>Send Message</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
