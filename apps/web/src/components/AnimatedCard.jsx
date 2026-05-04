import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';

const AnimatedCard = ({ 
  children, 
  className,
  delay = 0,
  glow = true,
  glowColor = 'golden',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={cn("h-full", className)}
    >
      <GlassmorphismPanel 
        glow={glow}
        glowColor={glowColor}
        className="h-full p-6 hover:border-primary/30 transition-all duration-300"
        {...props}
      >
        {children}
      </GlassmorphismPanel>
    </motion.div>
  );
};

export default AnimatedCard;