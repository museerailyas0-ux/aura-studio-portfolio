import React from 'react';
import { motion } from 'motion/react';
import { TOOLS_LIST } from '../data/portfolioData';
import { Sparkles, Figma, Code, Layers, Zap, Cpu, Film, Bot } from 'lucide-react';

export const Tools: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma': return <Figma className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Film': return <Film className="w-6 h-6" />;
      case 'Code': return <Code className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Bot': return <Bot className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 bg-[#16130F] text-[#FBF7F2] relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold block mb-3">
            — CREATIVE ENGINE & STACK
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#FBF7F2] font-normal tracking-tight">
            Tools & <span className="italic gold-gradient-text">Generative Stack</span>
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TOOLS_LIST.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="glass-card-dark p-6 rounded-2xl border border-[#C6A15B]/20 hover:border-[#C6A15B] transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2B2622] text-gray-400 group-hover:text-[#C6A15B] group-hover:bg-[#C6A15B]/15 border border-[#C6A15B]/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                {getToolIcon(tool.icon)}
              </div>
              
              <h3 className="font-serif-display text-lg text-[#FBF7F2] font-semibold group-hover:text-[#E8D5B7] transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#E8C4C4]/70 mt-1">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
