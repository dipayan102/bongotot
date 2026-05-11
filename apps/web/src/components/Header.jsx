
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, ChevronDown, Instagram, Home, Calendar, Handshake, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingText from './GlowingText.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'Events', 
      href: '/#upcoming-events',
      icon: Calendar,
      dropdown: [
        { name: 'Upcoming Events', href: '/#upcoming-events' },
        { name: 'Past Events', href: '/#past-events' }
      ]
    },
    { name: 'Sponsors', href: '/#sponsors', icon: Handshake },
    { name: 'Contact', href: '/#contact', icon: Mail }
  ];

  const handleNavClick = (e, href) => {
    const isHashLink = href.includes('#');
    const targetPath = href.split('#')[0] || '/';
    const targetHash = href.split('#')[1];

    if (location.pathname === targetPath && isHashLink) {
      e.preventDefault();
      const element = document.getElementById(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent py-2 pointer-events-none' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'w-full px-4 sm:px-6' 
          : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group pointer-events-auto">
            <motion.img 
              src="/logo.png"
              alt="Bongotot Logo"
              className={`object-cover rounded-full drop-shadow-xl transition-all duration-300 ${
                isScrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-20 h-20 md:w-32 md:h-32'
              }`}
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
            <GlowingText 
              color="golden" 
              intensity="medium"
              className={`font-bold text-primary transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
              }`}
            >
              Bongotot
            </GlowingText>
          </Link>

          <nav className={`hidden md:flex items-center transition-all duration-300 pointer-events-auto ${
            isScrolled 
              ? 'glass-panel-strong shadow-lg rounded-full px-4 py-2 space-x-1' 
              : 'space-x-2'
          }`}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-2 px-4 py-2 text-foreground/90 hover:text-primary font-medium text-lg transition-all duration-300 group-hover:bg-white/5 rounded-xl"
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                      isScrolled 
                        ? 'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100' 
                        : 'max-w-[120px] opacity-100'
                    }`}>
                      {link.name}
                    </span>
                    {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48">
                      <div className="glass-panel-strong rounded-xl p-2 shadow-xl border border-white/10 flex flex-col gap-1 bg-background/95 backdrop-blur-md">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            onClick={(e) => handleNavClick(e, sublink.href)}
                            className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200 text-base whitespace-nowrap"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6 ml-2">
              <a 
                href="https://www.facebook.com/Baybongotot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-[#1877F2] transition-all duration-200 p-2"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/bongotot_bayarea?igsh=NTc4MTIwNjQ2YQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-[#E1306C] transition-all duration-200 p-2"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-panel hover:bg-white/10 transition-all duration-200 pointer-events-auto"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-foreground" />
            ) : (
              <Menu className="w-7 h-7 text-foreground" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel-strong border-t border-white/10 overflow-hidden pointer-events-auto"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between text-foreground/90 hover:text-primary font-medium text-lg transition-all duration-200 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary/70" />
                        {link.name}
                      </div>
                      {link.dropdown && <ChevronDown className="w-5 h-5" />}
                    </Link>
                  {link.dropdown && (
                    <div className="pl-4 border-l-2 border-white/10 ml-2 mt-1 flex flex-col space-y-1">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.href}
                          onClick={(e) => handleNavClick(e, sublink.href)}
                          className="block text-foreground/70 hover:text-primary font-medium text-base transition-all duration-200 py-2"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                    </div>
                  );
                })}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                <a 
                  href="https://www.facebook.com/Baybongotot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-foreground/90 hover:text-[#1877F2] transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-medium text-lg">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/bongotot_bayarea?igsh=NTc4MTIwNjQ2YQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-foreground/90 hover:text-[#E1306C] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium text-lg">Instagram</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
