import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VIDEO_SHOWCASE_ITEMS } from '../data/portfolioData';
import { VideoShowcaseItem } from '../types';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, X, Maximize2, MessageCircle } from 'lucide-react';
import { DemoType } from './DemoModal';

interface VideoShowcaseProps {
  onOpenDemoModal?: (type: DemoType) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenDemoModal }) => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);
  const [isPlayingMain, setIsPlayingMain] = useState(true);
  const [isMutedMain, setIsMutedMain] = useState(true);

  const mainVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const togglePlayMain = () => {
    if (!mainVideoRef.current) return;
    if (isPlayingMain) {
      mainVideoRef.current.pause();
      setIsPlayingMain(false);
    } else {
      mainVideoRef.current.play();
      setIsPlayingMain(true);
    }
  };

  const toggleMuteMain = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !isMutedMain;
    setIsMutedMain(!isMutedMain);
  };

  return (
    <section id="video-showcase" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F3ECE3] text-[#2B2622] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Film className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono font-semibold">
              — AI VIDEO PRODUCTION
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2B2622] font-normal tracking-tight max-w-3xl">
            Cinematic Renders & <span className="italic gold-gradient-text">AI Brand Teasers</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55504A] font-light max-w-xl mt-4">
            Generative 4K video storytelling engineered with temporal neural consistency and custom-scored luxury audio design.
          </p>
        </div>

        {/* Featured Main Showreel Video Block */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C6A15B]/40 bg-[#16130F] shadow-2xl mb-12 aspect-[16/9] max-w-5xl mx-auto group">
          <video
            ref={mainVideoRef}
            src={VIDEO_SHOWCASE_ITEMS[0].videoUrl}
            poster={VIDEO_SHOWCASE_ITEMS[0].thumbnail}
            autoPlay
            loop
            muted={isMutedMain}
            playsInline
            className="w-full h-full object-cover filter saturate-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/80 via-transparent to-[#16130F]/40 pointer-events-none" />

          {/* Video Control Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8D5B7] px-3 py-1 rounded-full bg-[#16130F]/80 border border-[#C6A15B]/30 backdrop-blur-md">
                FEATURED SHOWREEL
              </span>
              <h3 className="font-serif-display text-xl sm:text-2xl text-[#FBF7F2] font-semibold mt-2">
                {VIDEO_SHOWCASE_ITEMS[0].title}
              </h3>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlayMain}
                className="w-10 h-10 rounded-full bg-[#16130F]/80 text-[#E8D5B7] border border-[#C6A15B]/30 hover:border-[#C6A15B] flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                aria-label="Toggle Play"
              >
                {isPlayingMain ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMuteMain}
                className="w-10 h-10 rounded-full bg-[#16130F]/80 text-[#E8D5B7] border border-[#C6A15B]/30 hover:border-[#C6A15B] flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                aria-label="Toggle Sound"
              >
                {isMutedMain ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Row of Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="glass-card-light p-4 rounded-2xl border border-[#C6A15B]/25 hover:border-[#C6A15B] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#16130F]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#16130F]/40 group-hover:bg-[#16130F]/20 transition-colors" />

                {/* Animated Gold Play Icon Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C6A15B] text-[#16130F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                </div>

                <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-[#16130F]/80 text-[#E8D5B7] px-2 py-0.5 rounded border border-[#C6A15B]/30">
                  {item.duration}
                </span>
              </div>

              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C6A15B]">
                {item.category}
              </span>
              <h4 className="font-serif-display text-lg text-[#2B2622] font-semibold mt-1">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Micro CTA for Video Portfolio */}
        {onOpenDemoModal && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenDemoModal('video')}
              className="px-8 py-4 rounded-full bg-[#25D366] text-[#16130F] font-bold text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-all duration-300 inline-flex items-center gap-2.5 shadow-[0_4px_25px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#16130F]" />
              <span>View Video Portfolio</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightweight Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveVideo(null);
            }}
            className="fixed inset-0 z-[100] bg-[#16130F]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#16130F] border border-[#C6A15B]/40 rounded-3xl overflow-hidden shadow-2xl p-4"
            >
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-serif-display text-xl text-[#E8D5B7]">{activeVideo.title}</h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-10 h-10 rounded-full bg-[#2B2622] text-[#E8D5B7] border border-[#C6A15B]/30 flex items-center justify-center hover:bg-[#C6A15B] hover:text-[#16130F] transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
