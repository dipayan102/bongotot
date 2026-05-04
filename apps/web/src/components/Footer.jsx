import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import GlowingText from './GlowingText.jsx';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Community', href: '#community' },
    { name: 'Culture', href: '#culture' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative glass-panel border-t border-white/10 mt-24 bg-background z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <GlowingText 
              color="golden" 
              intensity="medium"
              className="text-2xl font-bold text-primary mb-4 inline-block"
            >
              Bongotot
            </GlowingText>
            <p className="text-muted-foreground leading-relaxed">
              Celebrating and preserving Bengali culture, traditions, and heritage for generations to come.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-foreground">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-foreground">Connect With Us</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Bongotot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;