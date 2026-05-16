import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, BookOpen, Users, Sparkles, Feather, Sun, ArrowRight, X } from 'lucide-react';
import AnimatedCard from './AnimatedCard.jsx';
import GlowingText from './GlowingText.jsx';
import { Button } from '@/components/ui/button';

const CommunityFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  useEffect(() => {
    if (expandedIndex !== null) {
      // Small delay to allow the panel to render and the expansion animation to start
      const timer = setTimeout(() => {
        // Find all detail panels for the current index and pick the visible one
        const id = `event-detail-${expandedIndex}`;
        const elements = document.querySelectorAll(`[id="${id}"]`);
        const visibleElement = Array.from(elements).find(el => {
          // Check if element is visible in the layout (not display: none)
          return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        });

        if (visibleElement) {
          visibleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [expandedIndex]);
  
  const features = [
    {
      icon: Feather,
      title: 'Nanan Ronge Bangla',
      subtitle: 'নানান রঙের বাংলা',
      date: 'May 17, 2026',
      time: '3:00 PM – 6:00 PM',
      location: 'Ruggieri Senior Center, 33997 Alvarado-Niles Rd, Union City, CA',
      description: 'Experience a vibrant celebration of Bengali culture and heritage through rhythm, drama, and melody.',
      extendedDescription: 'Bongotot invites you to a curated afternoon of performing arts that brings together the community through rhythm, drama, and melody. This special event features a diverse lineup designed to showcase the "many colors" of our traditions.',
      highlights: [
        { 
          title: 'Meghmallar (মেঘমল্লার)', 
          desc: 'A soul-stirring presentation of songs and dance sketches inspired by the monsoon.',
          image: '/meghmallar.png'
        },
        { 
          title: 'Lanka Dahan Pala (লঙ্কাদহন পালা)', 
          desc: "An engaging children's play bringing classic mythology to life with youthful energy.",
          image: '/lanka_dahan.png'
        },
        { 
          title: 'Nanan Ronger Dali (নানান রঙের ডালি)', 
          desc: 'A diverse "basket" of cultural performances featuring a variety of local talent.',
          image: '/nanan_ronger_dali.png'
        }
      ],
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
      color: 'golden',
      hoverImage: '/durga.jpg'
    },
    {
      icon: Sparkles,
      title: 'Many more to come...',
      description: 'We are constantly planning new cultural events, workshops, and gatherings. Stay tuned for more announcements!',
      color: 'orange'
    }
  ];

  return (
    <section id="upcoming-events" className="relative py-24 overflow-hidden bg-transparent">
      {/* Dynamic Background Image Layer */}
      <div 
        className="fixed inset-0 w-full h-full transition-all duration-700 pointer-events-none z-0"
        style={{ 
          backgroundImage: hoveredImage ? `url(${hoveredImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: hoveredImage ? 0.35 : 0,
          filter: 'grayscale(0%)'
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      
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

        {/* Top Row: Featured Event */}
        <div className="max-w-4xl mx-auto mb-10 group/container">
          {(() => {
            const feature = features[0];
            const index = 0;
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            const isOther = hoveredIndex !== null && !isHovered;
            
            return (
              <div 
                className={`transition-all duration-500 ${
                  isOther 
                    ? 'opacity-40 scale-[0.98] blur-[1px]' 
                    : 'opacity-100 scale-100'
                }`}
              >
                <AnimatedCard
                  delay={0}
                  glowColor={feature.color}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (feature.hoverImage) setHoveredImage(feature.hoverImage);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setHoveredImage(null);
                  }}
                  className="relative z-10"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full group p-2">
                    <div className={`w-20 h-20 rounded-2xl ${feature.color === 'orange' ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 ${feature.color === 'orange' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
                        <h3 className="text-3xl font-bold text-foreground">
                          {feature.title}
                        </h3>
                        {feature.subtitle && (
                          <span className="text-xl text-muted-foreground font-medium">({feature.subtitle})</span>
                        )}
                      </div>
                      
                      {feature.date && (
                        <p className={`text-lg font-bold mb-4 ${feature.color === 'orange' ? 'text-secondary' : 'text-primary'}`}>
                          {feature.date} • {feature.time}
                        </p>
                      )}
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className={`relative z-20 border-white/30 text-foreground hover:text-primary-foreground font-semibold px-8 h-12 ${feature.color === 'orange' ? 'hover:bg-secondary border-secondary/30' : 'hover:bg-primary border-primary/30'} ${expandedIndex === index ? (feature.color === 'orange' ? 'bg-secondary' : 'bg-primary') : ''}`}
                      >
                        {expandedIndex === index ? 'Show less' : 'Learn more'}
                        <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            );
          })()}
        </div>

        {/* Featured Item Expansion (Immediately after top row) */}
        <EventDetailPanel 
          expandedIndex={expandedIndex} 
          setExpandedIndex={setExpandedIndex} 
          features={features} 
          targetIndex={0} 
        />

        {/* Bottom Row: Other Events */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group/container">
          {features.slice(1).map((feature, idx) => {
            const index = idx + 1;
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            const isOther = hoveredIndex !== null && !isHovered;
            
            return (
              <div 
                key={feature.title}
                className={`flex flex-col transition-all duration-500 ${
                  isOther 
                    ? 'opacity-40 scale-[0.98] blur-[1px]' 
                    : 'opacity-100 scale-100'
                }`}
              >
                <AnimatedCard
                  delay={index * 0.1}
                  glowColor={feature.color}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (feature.hoverImage) setHoveredImage(feature.hoverImage);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setHoveredImage(null);
                  }}
                  className="relative z-10 h-auto md:h-full"
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
                  
                  <div className="mt-6">
                    {feature.hoverImage ? (
                      <Button 
                        variant="outline" 
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className={`w-full border-white/30 text-foreground hover:text-primary-foreground font-semibold ${feature.color === 'orange' ? 'hover:bg-secondary border-secondary/30' : 'hover:bg-primary border-primary/30'} ${expandedIndex === index ? (feature.color === 'orange' ? 'bg-secondary' : 'bg-primary') : ''}`}
                      >
                        {expandedIndex === index ? 'Show less' : 'Learn more'}
                        <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : ''}`} />
                      </Button>
                    ) : feature.title !== 'Many more to come...' ? (
                      <Button 
                        disabled
                        variant="outline" 
                        className="w-full border-white/10 text-muted-foreground/50 font-semibold cursor-not-allowed bg-white/5"
                      >
                        Coming soon
                      </Button>
                    ) : null}
                  </div>
                </div>
              </AnimatedCard>
              
              {/* Mobile Detail Expansion (Immediately after each card) */}
              <div className="md:hidden">
                <EventDetailPanel 
                  expandedIndex={expandedIndex} 
                  setExpandedIndex={setExpandedIndex} 
                  features={features} 
                  targetIndex={index} 
                />
              </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Other Items Expansion (Bottom of grid) */}
        <div className="hidden md:block">
          <EventDetailPanel 
            expandedIndex={expandedIndex} 
            setExpandedIndex={setExpandedIndex} 
            features={features} 
            excludeIndex={0} 
          />
        </div>
      </div>
    </section>
  );
};

const EventDetailPanel = ({ expandedIndex, setExpandedIndex, features, targetIndex, excludeIndex }) => {
  const isCorrectPanel = (targetIndex !== undefined && expandedIndex === targetIndex) || 
                        (excludeIndex !== undefined && expandedIndex !== null && expandedIndex !== excludeIndex);

  return (
    <AnimatePresence mode="wait">
      {isCorrectPanel && (
        <motion.div 
          key={expandedIndex}
          id={`event-detail-${expandedIndex}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="relative z-30 mb-12 overflow-hidden scroll-mt-24"
        >
          {(() => {
            const event = features[expandedIndex];
            const isRGB = event.title === 'Nanan Ronge Bangla';
            const accentColor = event.color === 'orange' ? 'secondary' : 'primary';
            
            return (
              <div className={`relative p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl ${isRGB ? 'shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]' : ''}`}>
                {/* Animated Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 overflow-hidden`}>
                  {isRGB ? (
                    <div className="w-full h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient-x" />
                  ) : (
                    <div className={`w-full h-full bg-${accentColor}`} />
                  )}
                </div>
                
                {/* RGB Background Glow */}
                {isRGB && (
                  <>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                  </>
                )}
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${isRGB ? 'bg-gradient-to-br from-red-500/20 via-green-500/20 to-blue-500/20' : (event.color === 'orange' ? 'bg-secondary/20' : 'bg-primary/20')} flex items-center justify-center p-[2px]`}>
                        <div className="w-full h-full rounded-[14px] bg-black/40 flex items-center justify-center">
                          {React.createElement(event.icon, { 
                            className: `w-7 h-7 ${isRGB ? 'text-white' : (event.color === 'orange' ? 'text-secondary' : 'text-primary')}` 
                          })}
                        </div>
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold ${isRGB ? 'bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-green-400 to-blue-400' : 'text-foreground'}`}>
                          {event.title}
                        </h3>
                        {event.subtitle && (
                          <span className="block text-lg font-medium text-muted-foreground mt-1">
                            {event.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xl text-foreground/90 leading-relaxed mb-10 font-medium italic">
                      {event.extendedDescription || event.description}
                    </p>

                    {event.highlights && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <Sparkles className={`w-5 h-5 ${isRGB ? 'text-yellow-400' : 'text-primary'}`} />
                          Event Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {event.highlights.map((item, i) => {
                            let highlightColor = "primary";
                            let highlightBg = "bg-white/5";
                            let highlightBorder = "border-white/5";
                            
                            if (isRGB) {
                              if (i === 0) { highlightColor = "text-blue-400"; highlightBg = "bg-blue-500/5"; highlightBorder = "border-blue-500/20"; }
                              if (i === 1) { highlightColor = "text-red-400"; highlightBg = "bg-red-500/5"; highlightBorder = "border-red-500/20"; }
                              if (i === 2) { highlightColor = "text-green-400"; highlightBg = "bg-green-500/5"; highlightBorder = "border-green-500/20"; }
                            }

                            return (
                              <div key={i} className={`flex flex-col overflow-hidden rounded-2xl ${highlightBg} border ${highlightBorder} hover:border-white/20 transition-all duration-300 group/item`}>
                                {/* Image Placeholder/Space */}
                                <div className="relative aspect-[16/10] bg-white/5 overflow-hidden">
                                  {item.image ? (
                                    <img 
                                      src={item.image} 
                                      alt={item.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                  ) : null}
                                  <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm" style={{ display: item.image ? 'none' : 'flex' }}>
                                    <div className={`w-12 h-12 rounded-full border-2 border-dashed ${isRGB ? highlightBorder : 'border-white/20'} flex items-center justify-center opacity-40`}>
                                      <Sparkles className="w-5 h-5" />
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-5">
                                  <span className={`block font-bold mb-2 text-lg ${isRGB ? highlightColor : 'text-primary'}`}>
                                    {item.title}
                                  </span>
                                  <span className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-80 space-y-6">
                    <div className={`p-6 rounded-3xl bg-white/5 border border-white/5 space-y-6 relative overflow-hidden ${isRGB ? 'border-white/10' : ''}`}>
                      <h4 className="text-lg font-semibold text-foreground">Event Logistics</h4>
                      
                      <div className="space-y-5">
                        <div className="flex gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isRGB ? 'bg-red-500/10' : 'bg-primary/10'}`}>
                            <Calendar className={`w-5 h-5 ${isRGB ? 'text-red-400' : 'text-primary'}`} />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Date</p>
                            <p className="font-semibold text-foreground">{event.date}</p>
                          </div>
                        </div>
                        
                        {event.time && (
                          <div className="flex gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isRGB ? 'bg-green-500/10' : 'bg-primary/10'}`}>
                              <BookOpen className={`w-5 h-5 ${isRGB ? 'text-green-400' : 'text-primary'}`} />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Time</p>
                              <p className="font-semibold text-foreground">{event.time}</p>
                            </div>
                          </div>
                        )}
                        
                        {event.location && (
                          <div className="flex gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isRGB ? 'bg-blue-500/10' : 'bg-primary/10'}`}>
                              <Users className={`w-5 h-5 ${isRGB ? 'text-blue-400' : 'text-primary'}`} />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                              <p className="font-semibold text-foreground text-sm leading-snug">{event.location}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className={`pt-6 border-t border-white/10 ${isRGB ? 'bg-gradient-to-r from-red-500/5 via-green-500/5 to-blue-500/5 -mx-6 px-6 -mb-6 pb-6' : ''}`}>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                          Join us for an unforgettable afternoon of community and creativity. We look forward to seeing you there!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setExpandedIndex(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground z-20"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            );
          })()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommunityFeatures;