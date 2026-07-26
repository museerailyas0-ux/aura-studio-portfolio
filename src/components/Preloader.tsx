import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if preloader was already shown this session
    const hasSeen = sessionStorage.getItem('aura_preloader_seen');
    if (hasSeen) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      handleFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem('aura_preloader_seen', 'true');
    setIsVisible(false);
    setTimeout(onComplete, 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16130F] text-[#FBF7F2] overflow-hidden select-none"
        >
          {/* Top & Bottom curtain panels */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 bottom-1/2 bg-[#16130F] origin-top z-10"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 top-1/2 bg-[#16130F] origin-bottom z-10"
          />

          {/* Center Brand Monogram and Line Drawing */}
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="font-serif-display text-4xl sm:text-5xl tracking-[0.25em] text-[#E8D5B7] uppercase font-light">
                AURA
              </span>
              <p className="text-[10px] tracking-[0.35em] text-[#C6A15B] uppercase mt-2 font-medium">
                AI Creative Studio
              </p>
            </motion.div>

            {/* Thin gold line drawing animation */}
            <div className="w-48 sm:w-64 h-[2px] bg-[#2B2622] rounded-full overflow-hidden relative my-3">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-[#E8D5B7]/60 tracking-widest font-mono mt-2"
            >
              INITIATING EXPERIENCE
            </motion.p>

            <button
              onClick={handleFinish}
              className="mt-6 text-[11px] uppercase tracking-widest text-[#C6A15B] hover:text-[#E8D5B7] underline decoration-[#C6A15B]/40 underline-offset-4 cursor-pointer transition-colors"
            >
              Skip Intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
