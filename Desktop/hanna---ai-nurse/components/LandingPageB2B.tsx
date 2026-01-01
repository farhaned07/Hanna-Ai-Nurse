import React from 'react';
import HeroB2B from './HeroB2B';
import ProblemB2B from './ProblemB2B';
import SolutionB2B from './SolutionB2B';
import ImpactB2B from './ImpactB2B';
import ComparisonB2B from './ComparisonB2B';
import ClosingB2B from './ClosingB2B';
import FooterB2B from './FooterB2B';

const LandingPageB2B: React.FC = () => {
    return (
        <div className="min-h-screen bg-surface font-sans text-text-primary selection:bg-hana-primary/30 selection:text-white">
            {/* Floating Navbar - Dark Glass */}
            <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-lg shadow-black/20 px-6 py-3 md:px-8 flex items-center gap-12 max-w-4xl w-full justify-between transition-all duration-300 pointer-events-auto ring-1 ring-white/5">
                    <div className="flex items-center gap-2">
                        <img src="/hanna-logo.png" alt="Hanna" className="h-7 w-auto brightness-0 invert opacity-90" />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-0.5 font-sans">
                            hanna<span className="text-hana-primary">.</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-white font-medium text-sm transition-colors font-sans">Platform</button>
                        <button onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-white font-medium text-sm transition-colors font-sans">Impact</button>
                        <button onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-secondary hover:text-white font-medium text-sm transition-colors font-sans">Timeline</button>
                    </div>

                    <button
                        onClick={() => window.location.href = 'mailto:farhan@hanna.care'}
                        className="bg-white text-black px-5 py-2.5 md:px-6 rounded-full text-xs md:text-sm font-bold transition-all hover:bg-hana-primary hover:text-white transform active:scale-95 shadow-md font-sans">
                        Book Demo
                    </button>
                </div>
            </nav>

            <main>
                {/* 1. Hero - The Hook */}
                <HeroB2B />

                {/* 2. Problem - The Gap */}
                <ProblemB2B />

                {/* 3. Solution - How Hanna Works (merged with Technology) */}
                <div id="solution">
                    <SolutionB2B />
                </div>

                {/* 4. Proof - Why This Works (merged with Economics) */}
                <div id="impact">
                    <ImpactB2B />
                </div>

                {/* 5. Implementation - What Happens Next */}
                <div id="timeline">
                    <ComparisonB2B />
                </div>

                {/* 6. Closing CTA */}
                <ClosingB2B />
            </main>

            {/* 7. Footer */}
            <FooterB2B />
        </div>
    );
};

export default LandingPageB2B;
