import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GlowingText from '@/components/GlowingText.jsx';

const pastEventsData = [
  {
    year: '2026',
    events: [
      {
        month: 'January',
        name: 'Saraswati Puja 2026',
        images: [
          '/saraswati_pujo_2026_1.jpg',
          '/saraswati_pujo_2026_2.jpg'
        ]
      }
    ]
  },
  {
    year: '2025',
    events: [
      {
        month: 'October',
        name: 'Durga Pujo 2025',
        images: [
          '/durga_pujo_2025_1.jpg',
          '/durga_pujo_2025_2.jpg'
        ]
      }
    ]
  },
  {
    year: '2024',
    events: [
      {
        month: 'October',
        name: 'Durga Pujo 2024',
        images: [
          '/durga_pujo_2024_1.jpg',
          '/durga_pujo_2024_2.jpg'
        ]
      },
      {
        month: 'April',
        name: 'Nanan Ronger Bangla 2024',
        images: [
          '/nanan_ronger_bangla_2024_1.jpg',
          '/nanan_ronger_bangla_2024_2.jpg',
          '/nanan_ronger_bangla_2024_3.jpg'
        ]
      }
    ]
  },
  {
    year: '2023',
    events: [
      {
        month: 'October',
        name: 'Durga Puja 2023',
        images: [
          '/durga_puja_2023_1.jpg',
          '/durga_puja_2023_2.jpg',
          '/durga_puja_2023_3.jpg',
          '/durga_puja_2023_4.jpg'
        ]
      }
    ]
  },
  {
    year: '2018',
    events: [
      {
        month: 'May',
        name: 'Picnic 2018',
        images: ['/picnic_2018_1.jpg', '/picnic_2018_2.jpg']
      },
      {
        month: 'June',
        name: 'Kobi Pronaam 2018',
        images: [
          '/kobi_pronaam_2018_1.jpg',
          '/kobi_pronaam_2018_2.jpg',
          '/kobi_pronaam_2018_3.jpg',
          '/kobi_pronaam_2018_4.jpg'
        ]
      }
    ]
  }
];

const PastEventsPage = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Past Events - Bongotot</title>
        <meta
          name="description"
          content="Take a look at memorable moments from our past celebrations and gatherings."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                <GlowingText color="golden" intensity="high">
                  Our Journey
                </GlowingText>
              </h1>
              <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                A timeline of our cherished memories and cultural celebrations.
              </p>
            </div>

            <div className="relative flex">
              {/* Timeline Vertical Axis */}
              <div className="w-1/3 md:w-1/4 border-r-2 border-primary/20 pr-8 py-8 relative">
                {pastEventsData.map((yearGroup, yearIndex) => (
                  <div key={yearGroup.year} className="mb-24 last:mb-0 relative">
                    <h2 className="text-3xl font-bold text-primary mb-8 sticky top-32">{yearGroup.year}</h2>
                    <div className="space-y-16">
                      {yearGroup.events.map((event, eventIndex) => (
                        <div key={event.name} className="relative group">
                          {/* Timeline dot */}
                          <div className="absolute -right-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300 z-10" />
                          <h3 className="text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {event.month}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline Horizontal Axis (Events & Pictures) */}
              <div className="w-2/3 md:w-3/4 pl-12 py-8">
                {pastEventsData.map((yearGroup, yearIndex) => (
                  <div key={`events-${yearGroup.year}`} className="mb-24 last:mb-0 pt-[68px]">
                    <div className="space-y-16">
                      {yearGroup.events.map((event, eventIndex) => (
                        <div
                          key={`event-${event.name}`}
                          id={event.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                          className="relative flex items-center gap-8 scroll-mt-32"
                          onMouseEnter={() => setHoveredEvent(event.name)}
                          onMouseLeave={() => setHoveredEvent(null)}
                        >
                          <h3 className="text-3xl font-semibold cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300 w-1/2">
                            {event.name}
                          </h3>

                          {/* Images grid that appears on hover */}
                          <div
                            className={`w-1/2 grid grid-cols-2 gap-4 transition-all duration-500 origin-left ${hoveredEvent === event.name
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-95 pointer-events-none absolute right-0'
                              }`}
                          >
                            {event.images.map((img, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: hoveredEvent === event.name ? 1 : 0, x: hoveredEvent === event.name ? 0 : -20 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="relative h-32 md:h-40 rounded-xl overflow-hidden shadow-xl shadow-primary/10 border border-primary/20 cursor-zoom-in group/img"
                                onClick={() => setSelectedImage(img)}
                              >
                                <img
                                  src={img}
                                  alt={`${event.name} memory ${i + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Selected event"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PastEventsPage;
