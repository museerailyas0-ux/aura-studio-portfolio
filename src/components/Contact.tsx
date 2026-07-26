import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Send, CheckCircle2, Sparkles, Globe, ShieldCheck, AlertCircle, RefreshCw, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { sendContactEmail, validateEmailParams } from '../services/emailService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Free Demo Website Request',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validation = validateEmailParams({
      name: formData.name,
      email: formData.email,
      service: formData.projectType,
      message: formData.message
    });

    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        service: formData.projectType,
        message: formData.message
      });
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Free Demo Website Request',
        message: ''
      });
    } catch (err: unknown) {
      console.error('EmailJS Form Submission Error:', err);
      const message = err instanceof Error ? err.message : "Unable to send your message. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#16130F] text-[#FBF7F2] relative overflow-hidden bg-grain">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#C6A15B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold mb-3">
            — DIRECT CONSULTATION
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#FBF7F2] font-normal tracking-tight">
            Let's <span className="italic gold-gradient-text">Work Together</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F3ECE3]/75 font-light max-w-xl mt-4">
            Have a project in mind? Reach out directly via WhatsApp or the contact form below. I respond to all international inquiries promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2B2622] border border-[#C6A15B]/30 text-xs text-[#E8D5B7] font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
              </span>
              <span>DIRECT CHAT AVAILABLE 24/7</span>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Direct Card */}
              <div className="glass-card-dark p-6 rounded-2xl border border-[#25D366]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#25D366] font-semibold">WHATSAPP DIRECT</p>
                    <p className="text-base font-serif text-[#FBF7F2] font-medium">
                      {CONTACT_INFO.whatsappDisplay}
                    </p>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Direct Inquiry Card */}
              <div className="glass-card-dark p-6 rounded-2xl border border-[#C6A15B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2B2622] text-[#C6A15B] border border-[#C6A15B]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B] font-semibold">INBOX CONSULTATION</p>
                    <p className="text-sm sm:text-base font-serif text-[#FBF7F2]">
                      Guaranteed 24-Hour Response
                    </p>
                  </div>
                </div>

                <a
                  href="#contact-form"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-wider hover:bg-[#E8D5B7] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-[0_0_15px_rgba(198,161,91,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </a>
              </div>

            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#F3ECE3]/70 font-light">
                <Sparkles className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Free Demo Website built before payment</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F3ECE3]/70 font-light">
                <Globe className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Working with international clients across all timezones</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F3ECE3]/70 font-light">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Guaranteed 48-Hour delivery upon demo approval</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glass Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark p-8 sm:p-10 rounded-3xl border border-[#C6A15B]/30 relative overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif-display text-3xl text-[#E8D5B7] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-sm sm:text-base text-[#F3ECE3]/90 font-light max-w-md leading-relaxed">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-3 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 hover:border-[#C6A15B] text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-start justify-between gap-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold mb-0.5">Delivery Issue</p>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-widest text-[#C6A15B] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#16130F]/80 border border-[#C6A15B]/30 text-[#FBF7F2] placeholder-[#55504A] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all text-sm font-light"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs uppercase font-mono tracking-widest text-[#C6A15B] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@brand.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#16130F]/80 border border-[#C6A15B]/30 text-[#FBF7F2] placeholder-[#55504A] focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all text-sm font-light"
                        />
                      </div>

                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-widest text-[#C6A15B] mb-2">
                        Service Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#16130F] border border-[#C6A15B]/30 text-[#FBF7F2] focus:outline-none focus:border-[#C6A15B] transition-all text-sm font-light cursor-pointer"
                      >
                        <option value="Free Demo Website Request">Free Demo Website Request</option>
                        <option value="Full Website Build (48h Turnaround)">Full Website Build (48h Turnaround)</option>
                        <option value="AI Ad Campaign Series">AI Ad Campaign Series</option>
                        <option value="AI Video Production / Creator Editing">AI Video Production / Creator Editing</option>
                        <option value="Full Creative Retainer">Full Creative Retainer</option>
                      </select>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-widest text-[#C6A15B] mb-2">
                        Project Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your brand, goals, or requirements..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#16130F]/80 border border-[#C6A15B]/30 text-[#FBF7F2] placeholder-[#55504A] focus:outline-none focus:border-[#C6A15B] transition-all text-sm font-light resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#C6A15B] text-[#16130F] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(198,161,91,0.4)] hover:shadow-[0_0_40px_rgba(198,161,91,0.7)] hover:bg-[#E8D5B7] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

