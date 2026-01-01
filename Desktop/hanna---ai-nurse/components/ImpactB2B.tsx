import React from 'react';
import { IMPACT_B2B, ECONOMICS_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';

const ImpactB2B: React.FC = () => {
    return (
        <section className="py-32 bg-surface-subtle text-text-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <FadeIn>
                        <span className="text-hana-primary font-bold tracking-widest uppercase text-xs font-mono mb-4 block">The Proof</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-sans leading-tight tracking-tight mb-6">
                            Why This Works
                        </h2>
                        <p className="text-xl text-text-secondary font-light leading-relaxed">
                            The logic is unavoidable. The timing is right.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Why This Works (from Impact) */}
                    <div>
                        <FadeIn delay={0.1}>
                            <h3 className="text-xs font-bold text-hana-primary uppercase tracking-widest mb-8 font-mono">The Logic</h3>
                        </FadeIn>
                        <div className="space-y-5">
                            {IMPACT_B2B.strategy.reductions.map((item, i) => (
                                <FadeIn key={i} delay={0.1 + i * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                                        <p className="text-base leading-relaxed text-text-secondary font-body">
                                            {item}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Right: Why This Moment (from Economics) */}
                    <div>
                        <FadeIn delay={0.3}>
                            <h3 className="text-xs font-bold text-hana-primary uppercase tracking-widest mb-8 font-mono">Why Now</h3>
                        </FadeIn>
                        <div className="space-y-5 mb-10">
                            {ECONOMICS_B2B.points.map((point, i) => (
                                <FadeIn key={i} delay={0.3 + i * 0.1}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-bold text-text-primary font-mono">{String(i + 1).padStart(2, '0')}</span>
                                        </div>
                                        <p className="text-lg text-text-primary font-semibold font-sans pt-1">
                                            {point}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Punchline Box */}
                        <FadeIn delay={0.6}>
                            <div className="bg-white text-surface p-8 rounded-2xl shadow-xl">
                                <p className="text-xl font-bold font-sans leading-tight text-black">
                                    "{IMPACT_B2B.strategy.quote}"
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactB2B;
