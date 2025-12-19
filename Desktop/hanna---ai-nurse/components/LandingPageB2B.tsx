import React from 'react';
import HeroB2B from './HeroB2B';
import ProblemB2B from './ProblemB2B';
import SolutionB2B from './SolutionB2B';
import ImpactB2B from './ImpactB2B';
import RoiCalculator from './RoiCalculator';
import Technology from './Technology';
import ComparisonB2B from './ComparisonB2B';
import EconomicsB2B from './EconomicsB2B';
import WhoItsFor from './WhoItsFor';
import ClosingB2B from './ClosingB2B';
import FAQB2B from './FAQB2B';
import FooterB2B from './FooterB2B';

const LandingPageB2B: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-hana-primary/30 selection:text-hana-dark">
            {/* Floating Navbar */}
            <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-lg shadow-black/5 px-6 py-3 md:px-8 flex items-center gap-12 max-w-5xl w-full justify-between transition-all duration-300">
                    <div className="flex items-center gap-2">
                        <img src="/hanna-logo.png" alt="Hanna" className="h-8 w-auto brightness-0" />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                            hanna<span className="text-hana-primary">.</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">Platform</button>
                        <button onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">Impact</button>
                        <button onClick={() => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">ROI</button>
                        <button onClick={() => document.getElementById('economics')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">Economics</button>
                    </div>

                    <button
                        onClick={() => window.location.href = 'mailto:farhan@hanna.care'}
                        className="bg-hana-primary hover:bg-hana-accent text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all hover:scale-105 shadow-md">
                        Book Demo
                    </button>
                </div>
            </nav>

            <main>
                <HeroB2B />
                <ProblemB2B />
                <SolutionB2B />
                <div id="impact"><ImpactB2B /></div>
                <RoiCalculator />
                <Technology />
                <ComparisonB2B />
                <div id="economics"><EconomicsB2B /></div>
                <WhoItsFor />
                <FAQB2B />
                <ClosingB2B />
            </main>

            <FooterB2B />
        </div>
    );
};

export default LandingPageB2B;
