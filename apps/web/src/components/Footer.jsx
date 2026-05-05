import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';
import GlowingText from './GlowingText.jsx';

const Footer = () => {
  const contactPersons = [
    { name: 'Tapan Kumar Nayak', role: 'CEO' },
    { name: 'Sourov Ghosh', role: 'CFO' },
    { name: 'Samiran Saha', role: 'Secretary' },
    { name: 'Snehashis Ghosh', role: 'Assistant Secretary' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/bongotot_bayarea?igsh=NTc4MTIwNjQ2YQ==', label: 'Instagram' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative glass-panel border-t border-white/10 mt-24 bg-transparent z-10">
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
              Bongotot is a non-profit corporation registered in the state of California.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-foreground">Contact Persons</span>
            <ul className="space-y-2">
              {contactPersons.map((person) => (
                <li key={person.name} className="text-muted-foreground flex flex-col">
                  <span className="font-medium text-foreground">{person.name}</span>
                  <span className="text-sm opacity-80">{person.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-foreground">Connect With Us</span>
            <div className="flex items-center gap-3 text-muted-foreground mb-6 group">
              <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-200">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </div>
              <a href="mailto:bongotot2016@gmail.com" className="hover:text-primary transition-colors duration-200 font-medium">
                bongotot2016@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 group/social"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors duration-200" />
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