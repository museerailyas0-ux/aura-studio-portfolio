import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, MessageCircle, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { sendContactEmail, validateEmailParams } from '../services/emailService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultTopic }) => {
  if (!isOpen) return null;

  const [serviceType, setServiceType] = useState(defaultTopic || 'Free Demo Website Request');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const serviceOptions = [
    'Free Demo Website Request',
    'Full Website Build (48h Turnaround)',
    'AI Ad Campaign Series',
    'AI Video Production / Creator Editing',
    'Full Creative Retainer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validation = validateEmailParams({
      name,
      email,
      service: serviceType,
      message: projectDetails || 'Project booking inquiry from modal'
    });

    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name,
        email,
        service: serviceType,
        message: projectDetails || 'Project booking inquiry from modal'
      });
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error('EmailJS Booking Form Submission Error:', err);
      const message = err instanceof Error ? err.message : "Unable to send your message. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[110] bg-[#16130F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#16130F] text-[#FBF7F2] border border-[#C6A15B]/40 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative p-6 sm:p-8 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#16130F] transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">
                  INTERNATIONAL CONSULTATION
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#E8D5B7] mb-2">
                Start Your Project
              </h3>

              <p className="text-xs text-[#F3ECE3]/70 font-light mb-6">
                Need an immediate answer? Chat directly on WhatsApp or submit your project details below.
              </p>

              {/* Instant WhatsApp Banner inside modal */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-6 p-3.5 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-[#16130F] transition-all duration-300 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant Chat on WhatsApp</span>
                </div>
                <span className="text-[10px] font-mono underline">Open Chat →</span>
              </a>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-0.5">Submission Error</p>
                        <p className="text-red-200/80 font-light">{errorMessage}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="text-[10px] font-mono uppercase tracking-wider text-red-300 hover:text-white underline cursor-pointer shrink-0"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#2B2622]/80 border border-[#C6A15B]/30 text-sm font-light text-[#FBF7F2] focus:outline-none focus:border-[#C6A15B] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#2B2622]/80 border border-[#C6A15B]/30 text-sm font-light text-[#FBF7F2] focus:outline-none focus:border-[#C6A15B] transition-all"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2B2622]/80 border border-[#C6A15B]/30 text-sm font-light text-[#FBF7F2] focus:outline-none focus:border-[#C6A15B] transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#16130F] text-[#FBF7F2]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-1.5">
                    Project Details *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell me briefly about your brand, goals, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#2B2622]/80 border border-[#C6A15B]/30 text-sm font-light text-[#FBF7F2] focus:outline-none focus:border-[#C6A15B] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(198,161,91,0.4)] mt-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#16130F]" />
                      <span>Sending Message...</span>
                    </>
                  ) : errorMessage ? (
                    <>
                      <RefreshCw className="w-4 h-4 text-[#16130F]" />
                      <span>Retry Sending</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#F3ECE3]/50 font-light flex items-center justify-center gap-1 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>No obligation. 100% confidential inquiry.</span>
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#E8D5B7] mb-3">
                Message Sent!
              </h3>

              <p className="text-sm text-[#F3ECE3]/90 font-light max-w-sm mb-6 leading-relaxed">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/40 text-xs font-mono uppercase tracking-widest hover:border-[#C6A15B] hover:text-[#FBF7F2] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
