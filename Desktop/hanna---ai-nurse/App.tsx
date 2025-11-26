import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import TrustBadges from './components/TrustBadges';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-hana-soft text-hana-dark selection:bg-hana-main selection:text-white font-sans">

      {/* Logo Only */}
      <nav className="absolute top-6 left-6 md:left-12 z-50">
        <span className="text-2xl font-bold tracking-tight text-hana-dark">
          hanna<span className="text-hana-main">.</span>
        </span>
      </nav>

      <Hero />
      <TrustBadges />
      <Timeline />
      <Pricing />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default App;