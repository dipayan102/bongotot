import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';

const CulturalHighlights = () => {
  const highlights = [
    {
      title: 'Pohela Boishakh',
      description: 'Bengali New Year celebration with traditional music, dance, and cultural performances',
      image: 'https://images.unsplash.com/photo-1675670186055-3fa1564f7077'
    },
    {
      title: 'Rabindra Sangeet',
      description: 'Classical music tradition honoring the works of Rabindranath Tagore',
      image: 'https://images.unsplash.com/photo-1616388560850-89b6a8df572d'
    },
    {
      title: 'Traditional Dance',
      description: 'Preserving classical Bengali dance forms and contemporary interpretations',
      image: 'https://images.unsplash.com/photo-1675670186055-3fa1564f7077'
    },
    {
      title: 'Bengali Cuisine',
      description: 'Culinary heritage showcasing authentic recipes and cooking traditions',
      image: 'https://images.unsplash.com/photo-1616388560850-89b6a8df572d'
    }
  ];

  return (
    <section id="culture" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
            <GlowingText color="golden" intensity="medium">
              Cultural highlights
            </GlowingText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the beauty and richness of Bengali cultural traditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <GlassmorphismPanel className="overflow-hidden h-full hover:border-primary/40 transition-all duration-300 relative">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-300 pointer-events-none glow-golden opacity-0 group-hover:opacity-100" />
              </GlassmorphismPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;