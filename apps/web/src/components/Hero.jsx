
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar, TrendingUp } from 'lucide-react';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Community Members', value: '2,847', color: 'golden' },
    { icon: Calendar, label: 'Cultural Events', value: '127', color: 'orange' },
    { icon: TrendingUp, label: 'Active Participants', value: '1,923', color: 'golden' }
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(https://horizons-cdn.hostinger.com/f1221676-1231-45d7-acd9-65ec70449579/36e12d3db17cd4fb0d8092e27b32afb6.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      aria-label="Large group photo of Bengali community members wearing colorful traditional attire at a cultural celebration event"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/80" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlowingText color="golden" intensity="medium">
                Celebrate Bengali Culture
              </GlowingText>
              <br />
              <span className="text-foreground drop-shadow-md">Together</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-prose mx-auto lg:mx-0 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join a vibrant community preserving and celebrating Bengali heritage, traditions, and cultural excellence across generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group transition-all duration-200 active:scale-[0.98]"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 bg-background/20 backdrop-blur-sm text-foreground hover:bg-primary/20 font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <img 
              src="/durga.jpg" 
              alt="Goddess Durga illustration" 
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl drop-shadow-[0_0_25px_rgba(255,165,0,0.3)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
