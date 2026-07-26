import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export type DemoType = 'website' | 'ad' | 'video';

interface DemoModalProps {
  isOpen: boolean;
  type: DemoType;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'ad':
        return {
          title: "🎨 AI Advertisement Portfolio",
          paragraphs: [
            "I create premium AI-generated advertisements for every type of business including products, restaurants, cafes, beauty brands, real estate, fashion, healthcare, education, and many more.",
            "If you'd like to explore my latest advertisement designs or request a custom sample, contact me directly on WhatsApp."
          ],
          buttonText: "💬 View AI Ad Samples",
          whatsappUrl: CONTACT_INFO.adDemoUrl,
          badge: "AI ADVERTISING CREATIVE"
        };

      case 'video':
        return {
          title: "🎬 AI Video Portfolio",
          paragraphs: [
            "I create AI-powered promotional videos, reels, shorts, social media content, advertisements, product videos, and professional edits for content creators using the latest AI tools.",
            "If you'd like to watch my latest video portfolio or receive a free sample, contact me on WhatsApp."
          ],
          buttonText: "💬 View Video Portfolio",
          whatsappUrl: CONTACT_INFO.videoDemoUrl,
          badge: "CINEMATIC AI VIDEO"
        };

      case 'website':
      default:
        return {
          title: "🌐 Free Website Demo",
          paragraphs: [
            "Thank you for your interest.",
            "I create premium, luxury, modern, and fully responsive websites using the latest AI tools.",
            "Every website is designed according to the client's requirements.",
            "Before starting the final paid project, I first create a FREE personalized demo website so you can review the design and experience before making any decision.",
            "If you'd like to see a free demo or discuss your project, simply contact me on WhatsApp."
          ],
          buttonText: "💬 Request Free Website Demo",
          whatsappUrl: CONTACT_INFO.websiteDemoUrl,
          badge: "RISK-FREE DEMO GUARANTEE"
        };
    }
  };

  const content = getContent();

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[110] bg-[#16130F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#16130F] text-[#FBF7F2] border border-[#C6A15B]/40 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
        >
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close X Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#16130F] transition-all flex items-center justify-center cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/30 text-[#C6A15B] text-[10px] font-mono font-semibold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{content.badge}</span>
          </div>

          {/* Header Title */}
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#FBF7F2] font-normal tracking-tight mb-5 leading-tight">
            {content.title}
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-3 text-sm sm:text-base text-[#F3ECE3]/85 font-light leading-relaxed mb-8">
            {content.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={content.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-4 px-6 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:bg-[#20bd5a] hover:shadow-[0_8px_35px_rgba(37,211,102,0.7)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-center group"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#16130F] group-hover:scale-110 transition-transform" />
              <span>{content.buttonText}</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:text-[#FBF7F2] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Footer Guarantee Note */}
          <div className="mt-6 pt-4 border-t border-[#C6A15B]/20 flex items-center justify-center gap-2 text-[11px] font-mono text-[#F3ECE3]/60">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            <span>Direct WhatsApp connection • No spam • Instant response</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
