import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageB2B from './components/LandingPageB2B';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* B2B Page as Main Home */}
        <Route path="/" element={<LandingPageB2B />} />

        {/* Legal & Details */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;