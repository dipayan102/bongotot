import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';

const CulturalHighlights = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (hoveredEvent) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => prev + 1);
      }, 3000);
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [hoveredEvent]);

  const highlights = [
    {
      title: 'Saraswati Puja 2026',
      description: 'Community members gathered to seek blessings and celebrate knowledge, arts, and culture.',
      images: [
        '/saraswati_pujo_2026_1.jpg',
        '/saraswati_pujo_2026_2.jpg'
      ]
    },
    {
      title: 'Durga Pujo 2025',
      description: 'A grand celebration of Durga Puja, capturing the spirit and devotion of our community.',
      images: [
        '/durga_pujo_2025_1.jpg',
        '/durga_pujo_2025_2.jpg'
      ]
    },
    {
      title: 'Durga Pujo 2024',
      description: 'Memorable moments from our 2024 Durga Puja festivities, filled with joy and tradition.',
      images: [
        '/durga_pujo_2024_2.jpg',
        '/durga_pujo_2024_1.heic'
      ]
    },
    {
      title: 'Nanan Ronger Bangla 2024',
      description: 'A vibrant showcase of Bengali culture through music, dance, and artistic performances.',
      images: [
        '/nanan_ronger_bangla_2024_1.jpg',
        '/nanan_ronger_bangla_2024_2.jpg',
        '/nanan_ronger_bangla_2024_3.jpg'
      ]
    }
  ];

  return (
    <section id="past-events" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
            <GlowingText color="golden" intensity="medium">
              Past Events
            </GlowingText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take a look at memorable moments from our past celebrations and gatherings
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
              onMouseEnter={() => setHoveredEvent(highlight.title)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <Link to={`/past-events#${highlight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block h-full">
                <GlassmorphismPanel className="overflow-hidden h-full hover:border-primary/40 transition-all duration-300 relative">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    {highlight.images.map((img, i) => (
                      <div 
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          (hoveredEvent === highlight.title && i === (currentImageIndex % highlight.images.length)) ||
                          (hoveredEvent !== highlight.title && i === 0)
                            ? 'opacity-100 z-10'
                            : 'opacity-0 z-0'
                        }`}
                      >
                        <img 
                          src={img}
                          alt={`${highlight.title} ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300 z-20 pointer-events-none" />
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
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/past-events">
            <Button size="lg" className="bg-primary/20 hover:bg-primary/40 text-primary border border-primary/30 font-semibold px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;