import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { DemoType } from './DemoModal';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDemoModal?: (type: DemoType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI Campaigns', href: '#ai-ads' },
    { name: 'Showreel', href: '#video-showcase' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#FBF7F2]/80 backdrop-blur-xl border-b border-[#C6A15B]/20 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-[#C6A15B] flex items-center justify-center bg-[#16130F] text-[#E8D5B7] font-serif group-hover:scale-105 transition-transform">
              <span className="text-xs font-semibold tracking-widest">A</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif-display text-lg tracking-[0.2em] font-medium transition-colors ${
                isScrolled ? 'text-[#16130F]' : 'text-[#FBF7F2]'
              }`}>
                AURA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A15B] font-mono">
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 glass-card-light py-2 px-6 rounded-full border border-[#C6A15B]/20 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#2B2622] hover:text-[#C6A15B] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A15B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center gap-2 shadow-[0_2px_15px_rgba(37,211,102,0.35)] cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#16130F]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenDemoModal ? onOpenDemoModal('website') : onOpenBooking()}
              className="relative group overflow-hidden rounded-full py-2.5 px-5 bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(198,161,91,0.35)] hover:shadow-[0_6px_30px_rgba(198,161,91,0.6)] transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Free Demo
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full border border-[#C6A15B]/30 ${
              isScrolled ? 'text-[#16130F] bg-white/60' : 'text-[#FBF7F2] bg-[#16130F]/60'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#16130F]/95 backdrop-blur-2xl text-[#FBF7F2] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] text-[#C6A15B] uppercase font-mono">
                — MENU NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-serif-display text-2xl text-[#FBF7F2] hover:text-[#C6A15B] flex items-center justify-between border-b border-[#C6A15B]/15 pb-3"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#C6A15B]" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-[#C6A15B]/20">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
                Chat on WhatsApp
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDemoModal) {
                    onOpenDemoModal('website');
                  } else {
                    onOpenBooking();
                  }
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,161,91,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                Request Free Demo
              </button>
              <p className="text-center text-xs text-[#E8D5B7]/60 mt-2">
                AURA AI Creative Studio © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
