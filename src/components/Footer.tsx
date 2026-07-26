import React from 'react';
import { ArrowUp, Mail, MessageCircle, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16130F] text-[#FBF7F2] border-t border-[#C6A15B]/20 pt-16 pb-12 px-6 sm:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C6A15B]/15">
          
          {/* Col 1: Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#C6A15B] flex items-center justify-center bg-[#2B2622] text-[#E8D5B7] font-serif">
                <span className="text-xs font-semibold tracking-widest">A</span>
              </div>
              <span className="font-serif-display text-xl tracking-[0.2em] font-medium text-[#FBF7F2]">
                AURA STUDIO
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#F3ECE3]/70 font-light max-w-sm leading-relaxed">
              Boutique AI-Powered Creative Studio specializing in haute web design, generative advertising campaigns, and 4K AI video direction.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-[#C6A15B]">
              <Globe className="w-3.5 h-3.5" />
              <span>SERVING CLIENTS GLOBALLY • 48H GUARANTEED LAUNCH</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs uppercase tracking-widest font-mono text-[#F3ECE3]/80">
            <div className="space-y-3">
              <p className="text-[10px] text-[#C6A15B] font-semibold">NAVIGATION</p>
              <p><a href="#portfolio" className="hover:text-[#C6A15B] transition-colors">Portfolio</a></p>
              <p><a href="#about" className="hover:text-[#C6A15B] transition-colors">About</a></p>
              <p><a href="#services" className="hover:text-[#C6A15B] transition-colors">Services</a></p>
              <p><a href="#ai-ads" className="hover:text-[#C6A15B] transition-colors">AI Ads</a></p>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] text-[#C6A15B] font-semibold">STUDIO</p>
              <p><a href="#video-showcase" className="hover:text-[#C6A15B] transition-colors">Showreel</a></p>
              <p><a href="#process" className="hover:text-[#C6A15B] transition-colors">Process</a></p>
              <p><a href="#faq" className="hover:text-[#C6A15B] transition-colors">FAQ</a></p>
              <p><a href="#contact" className="hover:text-[#C6A15B] transition-colors">Contact</a></p>
            </div>
          </div>

          {/* Col 3: Direct Inquiry & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="space-y-2 text-left md:text-right">
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B] mb-1 font-semibold">
                DIRECT CONTACT
              </p>
              
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                <a href="#contact" className="text-xs font-mono text-[#E8D5B7] hover:text-[#C6A15B] hover:underline transition-colors">
                  Send Message
                </a>
              </div>

              <div className="flex items-center md:justify-end gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#25D366] hover:underline transition-colors">
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B] group-hover:text-[#E8D5B7] transition-colors">
                BACK TO TOP
              </span>
              <div className="w-10 h-10 rounded-full border border-[#C6A15B]/30 group-hover:border-[#C6A15B] bg-[#2B2622] text-[#E8D5B7] group-hover:bg-[#C6A15B] group-hover:text-[#16130F] flex items-center justify-center transition-all duration-300 shadow-md">
                <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F3ECE3]/50 font-mono gap-4">
          <p>© 2026 AURA Creative Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#C6A15B] transition-colors">Contact Studio</a>
            <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp Direct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
