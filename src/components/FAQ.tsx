import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#FBF7F2] text-[#2B2622] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold mb-3">
            — FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#2B2622] font-normal tracking-tight">
            Transparancy & <span className="italic gold-gradient-text">Studio Clarity</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="glass-card-light rounded-2xl border border-[#C6A15B]/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-display text-xl sm:text-2xl text-[#2B2622] font-medium leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#16130F] text-[#C6A15B] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#C6A15B] text-[#16130F]' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#55504A] font-light leading-relaxed border-t border-[#C6A15B]/15 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
