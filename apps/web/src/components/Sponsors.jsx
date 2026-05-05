import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative py-24 overflow-hidden bg-transparent">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] z-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
            <GlowingText color="golden" intensity="medium">
              Our Sponsors
            </GlowingText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We extend our heartiest gratitude to the sponsors who support our mission and make these cultural celebrations possible.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <GlassmorphismPanel className="p-4 md:p-8 max-w-5xl w-full hover:border-primary/30 transition-all duration-300">
            <img 
              src="/sponsors.jpg" 
              alt="Bongotot Event Sponsors Thank You" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </GlassmorphismPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
