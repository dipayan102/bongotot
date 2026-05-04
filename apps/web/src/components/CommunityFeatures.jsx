import React from 'react';
import { Calendar, BookOpen, Users, Sparkles } from 'lucide-react';
import AnimatedCard from './AnimatedCard.jsx';
import GlowingText from './GlowingText.jsx';

const CommunityFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Cultural Events',
      description: 'Participate in traditional festivals, celebrations, and cultural gatherings that bring our community together throughout the year.',
      color: 'golden'
    },
    {
      icon: BookOpen,
      title: 'Language Learning',
      description: 'Master Bengali language and literature through interactive classes, workshops, and cultural immersion programs for all ages.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with fellow Bengali enthusiasts, share experiences, and build lasting friendships within our vibrant community.',
      color: 'golden'
    },
    {
      icon: Sparkles,
      title: 'Traditions Showcase',
      description: 'Explore and preserve Bengali art, music, dance, and culinary traditions through dedicated showcases and exhibitions.',
      color: 'orange'
    }
  ];

  return (
    <section id="community" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
            <GlowingText color="golden" intensity="medium">
              What we offer
            </GlowingText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the rich tapestry of experiences and opportunities within our Bengali cultural community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.1}
                glowColor={feature.color}
              >
                <div className="flex flex-col h-full group">
                  <div className={`w-14 h-14 rounded-xl ${feature.color === 'orange' ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${feature.color === 'orange' ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;