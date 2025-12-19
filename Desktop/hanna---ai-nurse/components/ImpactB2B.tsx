import React from 'react';
import { IMPACT_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';
import { Check, X } from 'lucide-react';

const ImpactB2B: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-[1280px]">

                {/* Main Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hana-accent mb-6 font-sans tracking-tight">
                            {IMPACT_B2B.headline}
                        </h2>
                        <p className="text-xl text-hana-primary font-bold font-sans">
                            {IMPACT_B2B.subheadline}
                        </p>
                    </FadeIn>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {/* Traditional */}
                    <FadeIn delay={0.2} direction="right">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
                            <h3 className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider">
                                {IMPACT_B2B.comparison.traditional.label}
                            </h3>
                            <ul className="space-y-4">
                                {IMPACT_B2B.comparison.traditional.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Hanna */}
                    <FadeIn delay={0.3} direction="left">
                        <div className="bg-hana-accent text-white p-8 rounded-2xl shadow-xl h-full relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-hana-primary/20 blur-[40px] rounded-full"></div>

                            <h3 className="text-lg font-bold text-white/80 mb-6 uppercase tracking-wider relative z-10">
                                Hanna Approach
                            </h3>
                            <p className="text-2xl font-bold leading-tight relative z-10">
                                {IMPACT_B2B.comparison.hanna.label}
                            </p>
                            <p className="mt-4 text-hana-primary font-bold text-lg relative z-10">
                                {IMPACT_B2B.comparison.hanna.highlight}
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Strategy Section */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg text-center">
                    <FadeIn>
                        <h3 className="text-2xl md:text-3xl font-bold text-hana-accent mb-6 font-sans">
                            {IMPACT_B2B.strategy.headline}
                        </h3>
                        <p className="text-lg text-slate-600 mb-10 font-medium">
                            {IMPACT_B2B.strategy.text}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-10">
                            {IMPACT_B2B.strategy.reductions.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 font-medium text-slate-700">
                                    <Check className="w-5 h-5 text-hana-primary shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="inline-block bg-hana-primary/10 px-6 py-3 rounded-full text-hana-primary font-bold text-sm uppercase tracking-wider">
                            {IMPACT_B2B.strategy.quote}
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};

export default ImpactB2B;
