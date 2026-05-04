import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section id="events" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassmorphismPanel 
            variant="strong"
            className="p-12 text-center depth-shadow animate-glow-pulse relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
              <GlowingText color="golden" intensity="high">
                Ready to join our community?
              </GlowingText>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Become part of a thriving Bengali cultural community. Connect with like-minded individuals, participate in events, and celebrate our rich heritage together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group transition-all duration-200 active:scale-[0.98] px-8"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <a 
                href="#community"
                className="text-foreground/80 hover:text-primary font-medium underline underline-offset-4 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
          </GlassmorphismPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;