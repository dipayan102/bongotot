import React, { useState } from 'react';
import { Calendar, BookOpen, Users, Sparkles, Feather, Sun, ArrowRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const CommunityFeatures = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const features = [
    {
      icon: Feather,
      title: 'Nanan Ronge Bangla',
      date: 'May 16, 2026',
      description: 'Join us for a vibrant celebration of Bengali culture featuring music, dance, and traditional performances.',
      color: 'golden',
      hoverImage: '/tagore.jpg'
    },
    {
      icon: Sun,
      title: 'Community Picnic',
      date: 'June 16, 2026',
      description: 'Annual outdoor gathering with traditional games, authentic Bengali cuisine, and family fun.',
      color: 'orange',
      hoverImage: '/picnic.jpg'
    },
    {
      icon: Sparkles,
      title: 'Durga Puja',
      date: 'October 2026',
      description: 'The heart and soul of our community and our grandest flagship celebration. Join us for the most awaited festival of the year, a vibrant tapestry of tradition, art, and cultural excellence.',
      color: 'golden'
    },
    {
      icon: Sparkles,
      title: 'Many more to come...',
      description: 'We are constantly planning new cultural events, workshops, and gatherings. Stay tuned for more announcements!',
      color: 'orange'
    }
  ];

  return (
    <section id="upcoming-events" className="relative py-24 overflow-hidden bg-background">
      {/* Dynamic Background Image Layer */}
      <div 
        className="absolute inset-0 transition-all duration-700 pointer-events-none z-0"
        style={{ 
          backgroundImage: hoveredImage ? `url(${hoveredImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: hoveredImage ? 0.5 : 0,
          filter: 'grayscale(0%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-0" />
      
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
            <GlowingText color="golden" intensity="medium">
              Upcoming Events in 2026
            </GlowingText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mark your calendars and join us for these exciting upcoming celebrations and gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOtherCard = hoveredImage && feature.hoverImage !== hoveredImage;
            return (
              <div 
                key={feature.title}
                className={`transition-all duration-500 ${isOtherCard ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
              >
                <AnimatedCard
                  delay={index * 0.1}
                  glowColor={feature.color}
                  onMouseEnter={() => feature.hoverImage && setHoveredImage(feature.hoverImage)}
                  onMouseLeave={() => setHoveredImage(null)}
                  className="relative z-10"
                >
                <div className="flex flex-col h-full group">
                  <div className={`w-14 h-14 rounded-xl ${feature.color === 'orange' ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${feature.color === 'orange' ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1 text-foreground">
                    {feature.title}
                  </h3>
                  
                  {feature.date && (
                    <p className={`text-sm font-bold mb-3 ${feature.color === 'orange' ? 'text-secondary' : 'text-primary'}`}>
                      {feature.date}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  
                  {feature.hoverImage && (
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <Button 
                        variant="outline" 
                        className={`w-full border-white/30 text-foreground hover:text-primary-foreground font-semibold ${feature.color === 'orange' ? 'hover:bg-secondary border-secondary/30' : 'hover:bg-primary border-primary/30'}`}
                      >
                        Know more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </AnimatedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;