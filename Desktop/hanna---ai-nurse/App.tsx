import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import TrustBadges from './components/TrustBadges';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-hana-soft text-hana-dark selection:bg-hana-main selection:text-white font-sans">
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
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;