import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, UserPlus, Store } from 'lucide-react';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section id="join-community" className="relative py-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-black/40" />

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

            <div className="flex flex-col items-center gap-6 relative z-10">
              <Button
                size="lg"
                onClick={() => setShowOptions(!showOptions)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group transition-all duration-200 active:scale-[0.98] px-8"
              >
                {showOptions ? 'Close Options' : 'Get Started'}
                <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-200 ${showOptions ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </Button>

              <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center overflow-hidden"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/50 text-primary hover:bg-primary/10 font-semibold flex items-center gap-2"
                    >
                      <UserPlus className="w-5 h-5" />
                      Register as member
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-secondary/50 text-secondary hover:bg-secondary/10 font-semibold flex items-center gap-2"
                      asChild
                    >
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf3ZDg9IkXtqQ7I1U8fL4JupQxV8_K7DCNYk3bVhpGdiHmYMg/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Store className="w-5 h-5" />
                        Register as vendor
                      </a>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
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