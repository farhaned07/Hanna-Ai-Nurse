import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhyLine from './components/WhyLine';
import TrustCredibility from './components/TrustCredibility';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import SafetyDetail from './components/SafetyDetail';
import AudienceDetail from './components/AudienceDetail';
import StickyMobileCTA from './components/StickyMobileCTA';

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
      <Problem />
      <Solution />
      <WhyLine />
      <TrustCredibility />
      <Pricing />
      <FinalCTA />
      <Footer />

      {/* Mobile Sticky CTA */}
      <StickyMobileCTA />
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
        <Route path="/safety" element={<SafetyDetail />} />
        <Route path="/audience" element={<AudienceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;