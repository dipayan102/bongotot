import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Calendar, TrendingUp, Clock, MapPin, Sparkles, Tv } from 'lucide-react';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Community Members', value: '2,847', color: 'golden' },
    { icon: Calendar, label: 'Cultural Events', value: '127', color: 'orange' },
    { icon: TrendingUp, label: 'Active Participants', value: '1,923', color: 'golden' }
  ];

  const heroImages = [
    { src: '/durga.jpg', alt: 'Goddess Durga illustration' },
    { src: '/my_new_flyer.jpg', alt: 'Upcoming Event Details' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 2800ms for Slide 0 (2s fully visible + 0.8s transition)
    // 5800ms for Slide 1 (5s fully visible + 0.8s transition)
    const delay = currentImageIndex === 0 ? 2800 : 5800;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentImageIndex, heroImages.length]);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[url('/hero_bg.jpg')] bg-cover bg-center bg-scroll md:bg-fixed"
      aria-label="Large group photo of Bengali community members wearing colorful traditional attire at a cultural celebration event"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/80 z-0" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mt-8 md:mt-0"
          >
            <motion.h1 
              className="text-4xl md:text-7xl lg:text-8xl font-artistic leading-tight mb-6 md:mb-8 text-balance"
              style={{ letterSpacing: '0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlowingText color="golden" intensity="medium">
                Bay Area
              </GlowingText>
              <br />
              <span className="text-foreground drop-shadow-md">Bongotot</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-3xl text-foreground mb-8 md:mb-10 leading-relaxed max-w-prose mx-auto lg:mx-0 drop-shadow-lg font-artistic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nurturing a sense of belonging and preserving the rich traditions and rituals of Bengali heritage, we create a home away from home in the heart of Silicon Valley.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#join-community">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group transition-all duration-200 active:scale-[0.98]"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center w-full max-w-md mx-auto relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl drop-shadow-[0_0_25px_rgba(255,165,0,0.3)] border border-white/10 bg-black/20"
          >
            <AnimatePresence>
              {currentImageIndex === 0 ? (
                <motion.img
                  key="slide-durga"
                  src="/durga.jpg"
                  alt="Goddess Durga illustration"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
              ) : (
                <motion.div
                  key="slide-event"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full flex flex-col bg-background/30 backdrop-blur-sm select-none"
                >
                  {/* Top Half: Flyer Image (Properly Contained & Uncropped) */}
                  <div className="relative h-[48%] w-full bg-black/45 p-3 flex items-center justify-center border-b border-white/10 overflow-hidden">
                    {/* Dimmed Blurred background for beautiful texture */}
                    <img
                      src="/my_new_flyer.jpg"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-md brightness-[0.2] scale-110 pointer-events-none"
                    />
                    {/* Sharp properly contained foreground image */}
                    <img
                      src="/my_new_flyer.jpg"
                      alt="Nanan Ronge Bangla Event Flyer"
                      className="relative z-10 max-h-full max-w-full object-contain rounded-lg shadow-lg border border-white/5"
                    />

                    {/* Floating Red Live Stream Button in the bottom corner of the flyer section */}
                    <a
                      href="https://youtube.com/live/qoF4htfNPic?feature=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 z-30"
                    >
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-red-500/20 active:scale-[0.98] transition-all flex items-center gap-1.5 h-9 rounded-full border border-white/10 px-4"
                      >
                        <Tv className="w-4 h-4 shrink-0" />
                        <span>Watch Live</span>
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                      </Button>
                    </a>
                  </div>

                  {/* Bottom Half: Key Details */}
                  <div className="h-[52%] w-full p-5 flex flex-col justify-between text-left">
                    <div className="flex flex-col gap-2">
                      <span className="w-fit px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/80 text-primary-foreground border border-primary/20 backdrop-blur-md animate-pulse">
                        UPCOMING EVENT
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-green-400 to-blue-400 font-artistic leading-tight drop-shadow-md">
                          Nanan Ronge Bangla
                        </h3>
                        <p className="text-[10px] text-muted-foreground italic font-medium -mt-0.5">নানান রঙে বাংলা</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 bg-black/35 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-xs font-semibold text-foreground">May 17, 2026 • 3:00 PM – 6:00 PM</span>
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Ruggieri Senior Center, 33997 Alvarado-Niles Rd, Union City, CA")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-foreground hover:text-primary transition-colors duration-200"
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold leading-snug hover:underline">Ruggieri Senior Center, Union City</span>
                      </a>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" /> Event Highlights
                      </p>
                      <ul className="grid grid-cols-1 gap-0.5">
                        <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span className="truncate">Meghmallar (Monsoon Songs & Dance)</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          <span className="truncate">Lanka Dahan Pala (Children's Play)</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                          <span className="truncate">Nanan Ronger Dali (Cultural basket)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
