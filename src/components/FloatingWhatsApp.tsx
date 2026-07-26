import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-3">
      {/* Tooltip Popup */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#16130F]/95 border border-[#25D366]/40 text-[#FBF7F2] text-xs font-mono shadow-2xl backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.8)] transition-all duration-300 group cursor-pointer"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        
        {/* Inner SVG / Icon */}
        <MessageCircle className="w-7 h-7 fill-current relative z-10 text-white transform group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
};
