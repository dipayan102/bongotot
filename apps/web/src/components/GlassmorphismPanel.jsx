import React from 'react';
import { cn } from '@/lib/utils';

const GlassmorphismPanel = ({ 
  children, 
  className, 
  variant = 'default',
  glow = false,
  glowColor = 'golden',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'glass-panel',
    strong: 'glass-panel-strong',
    subtle: 'bg-white/[0.03] backdrop-blur-md border border-white/[0.08]'
  };

  const glowClasses = glow ? (glowColor === 'orange' ? 'glow-orange' : 'glow-golden') : '';

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        glowClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassmorphismPanel;