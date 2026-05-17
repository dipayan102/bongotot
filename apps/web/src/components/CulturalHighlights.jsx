import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassmorphismPanel from './GlassmorphismPanel.jsx';
import GlowingText from './GlowingText.jsx';

import { getAllEventsFlat } from '@/lib/events.js';

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

  const [modalData, setModalData] = useState(null);

  const allEvents = getAllEventsFlat();

  const getImagesForTitle = (title) => {
    const event = allEvents.find(e => e.name === title);
    return event?.images?.length ? event.images : [];
  };

  const highlights = [
    {
      title: 'Saraswati Puja 2026',
      description: 'Community members gathered to seek blessings and celebrate knowledge, arts, and culture.',
      images: getImagesForTitle('Saraswati Puja 2026')
    },
    {
      title: 'Durga Pujo 2025',
      description: 'A grand celebration of Durga Puja, capturing the spirit and devotion of our community.',
      images: getImagesForTitle('Durga Pujo 2025')
    },
    {
      title: 'Durga Pujo 2024',
      description: 'Memorable moments from our 2024 Durga Puja festivities, filled with joy and tradition.',
      images: getImagesForTitle('Durga Pujo 2024')
    },
    {
      title: 'Nanan Ronge Bangla 2024',
      description: 'A vibrant showcase of Bengali culture through music, dance, and artistic performances.',
      images: getImagesForTitle('Nanan Ronge Bangla 2024')
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setModalData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setModalData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  return (
    <section id="past-events" className="relative py-24 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-black/40" />

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
              onClick={() => {
                const currentImages = highlight.images;
                const startIndex = currentImageIndex % currentImages.length;
                setModalData({ images: currentImages, index: startIndex });
              }}
            >
              <GlassmorphismPanel className="overflow-hidden h-full hover:border-primary/40 transition-all duration-300 relative">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  {highlight.images.map((img, i) => {
                    // Only render subsequent slides when the card is hovered, preventing loading tens of megabytes of raw image bytes on start
                    const shouldRender = i === 0 || hoveredEvent === highlight.title;
                    if (!shouldRender) return null;

                    return (
                      <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ${(hoveredEvent === highlight.title && i === (currentImageIndex % highlight.images.length)) ||
                            (hoveredEvent !== highlight.title && i === 0)
                            ? 'opacity-100 z-10'
                            : 'opacity-0 z-0'
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${highlight.title} ${i + 1}`}
                          loading={i === 0 ? "eager" : "lazy"}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    );
                  })}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300 z-20 pointer-events-none" />
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <Link
                      to={`/past-events#${highlight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 bg-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm"
                      >
                        View all
                      </Button>
                    </Link>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-300 pointer-events-none glow-golden opacity-0 group-hover:opacity-100" />
              </GlassmorphismPanel>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/past-events">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-7 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Our journey from the beginning
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out"
          >
            <div className="relative max-w-6xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Previous Button */}
              {modalData.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
              )}

              <motion.div
                key={modalData.index}
                initial={{ scale: 0.9, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.9, opacity: 0, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
              >
                <img
                  src={modalData.images[modalData.index]}
                  alt="Selected event"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Next Button */}
              {modalData.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              )}

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/70 font-medium">
                {modalData.index + 1} / {modalData.images.length}
              </div>
            </div>

            <button
              onClick={() => setModalData(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:rotate-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>


  );
};

export default CulturalHighlights;