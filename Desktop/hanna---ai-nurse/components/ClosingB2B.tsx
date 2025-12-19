import React from 'react';
import { CLOSING_B2B, FINAL_CTA_B2B } from '../constants-b2b';
import { ArrowRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ClosingB2B: React.FC = () => {
    return (
        <section className="py-40 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hana-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10 text-center">
                <FadeIn>
                    <div className="max-w-4xl mx-auto mb-16 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-400 font-body leading-tight">
                            {CLOSING_B2B.headline}
                        </h2>
                        <p className="text-5xl md:text-7xl font-bold text-hana-accent font-sans tracking-tight">
                            {CLOSING_B2B.subheadline}
                        </p>
                        <p className="text-2xl text-slate-600 font-medium">
                            {CLOSING_B2B.text}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <button
                            onClick={() => window.location.href = 'mailto:farhan@hanna.care'}
                            className="bg-hana-primary text-white px-10 py-5 rounded-lg text-xl font-bold shadow-lg hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 font-sans group"
                        >
                            {FINAL_CTA_B2B.ctaPrimary}
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <p className="text-sm font-bold tracking-[0.2em] text-hana-primary/60 uppercase">
                        {CLOSING_B2B.tagline}
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};

export default ClosingB2B;
