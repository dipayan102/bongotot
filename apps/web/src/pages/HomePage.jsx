
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import CommunityFeatures from '@/components/CommunityFeatures.jsx';
import CulturalHighlights from '@/components/CulturalHighlights.jsx';
import Sponsors from '@/components/Sponsors.jsx';
import CallToAction from '@/components/CallToAction.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Bongotot - Celebrate Bengali Culture Together</title>
        <meta 
          name="description" 
          content="Join Bongotot, a vibrant community celebrating Bengali heritage, traditions, and cultural excellence. Connect with fellow enthusiasts and participate in cultural events." 
        />
      </Helmet>

      <div className="min-h-screen bg-transparent text-foreground flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <CommunityFeatures />
          <CulturalHighlights />
          <Sponsors />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
