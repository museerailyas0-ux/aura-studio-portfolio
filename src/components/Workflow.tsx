import React from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Sparkles, Clock, CheckCircle } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F3ECE3] text-[#2B2622] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold mb-3">
            — THE WHITE-GLOVE METHODOLOGY
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2B2622] font-normal tracking-tight max-w-3xl">
            From Initial Brief to <span className="italic gold-gradient-text">Global Launch</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55504A] font-light max-w-xl mt-4">
            A structured 5-stage sprint methodology engineered for clarity, speed, and uncompromising aesthetic execution.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Gold Connecting Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#C6A15B]/20 via-[#C6A15B] to-[#C6A15B]/20" />

          <div className="space-y-12 md:space-y-16">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-card-light p-8 rounded-3xl border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:shadow-[0_10px_30px_rgba(198,161,91,0.2)] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif-display text-3xl font-light text-[#C6A15B]">
                          {step.step}
                        </span>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16130F] text-[#E8D5B7] text-[10px] font-mono uppercase tracking-wider">
                          <Clock className="w-3 h-3 text-[#C6A15B]" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      <h3 className="font-serif-display text-2xl text-[#2B2622] font-semibold mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#55504A] font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#16130F] text-[#C6A15B] border-2 border-[#C6A15B] items-center justify-center shrink-0 z-10 shadow-lg">
                    <span className="text-xs font-mono font-bold">{step.step}</span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
