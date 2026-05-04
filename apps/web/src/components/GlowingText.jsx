import React from 'react';
import { cn } from '@/lib/utils';

const GlowingText = ({ 
  children, 
  className,
  color = 'golden',
  intensity = 'medium',
  ...props 
}) => {
  const glowStyles = {
    golden: {
      low: 'drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]',
      medium: 'drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]',
      high: 'drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]'
    },
    orange: {
      low: 'drop-shadow-[0_0_10px_rgba(255,140,66,0.3)]',
      medium: 'drop-shadow-[0_0_15px_rgba(255,140,66,0.5)]',
      high: 'drop-shadow-[0_0_25px_rgba(255,140,66,0.7)]'
    },
    green: {
      low: 'drop-shadow-[0_0_10px_rgba(45,80,22,0.3)]',
      medium: 'drop-shadow-[0_0_15px_rgba(45,80,22,0.5)]',
      high: 'drop-shadow-[0_0_25px_rgba(45,80,22,0.7)]'
    }
  };

  return (
    <span 
      className={cn(
        'transition-all duration-300',
        glowStyles[color][intensity],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default GlowingText;