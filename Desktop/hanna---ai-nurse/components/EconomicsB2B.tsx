import React from 'react';
import { ECONOMICS_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';

const EconomicsB2B: React.FC = () => {
    return (
        <section className="py-32 bg-surface-subtle overflow-hidden" id="economics">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <span className="text-hana-primary font-bold tracking-widest uppercase text-xs mb-4 block font-mono">The Context</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hana-accent mb-6 font-sans tracking-tight">
                                {ECONOMICS_B2B.headline}
                            </h2>
                            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
                                {ECONOMICS_B2B.subheadline}
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {ECONOMICS_B2B.points.map((point, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-surface p-10 rounded-2xl shadow-sm border border-border h-full hover:shadow-brand-sm hover:border-hana-primary/20 transition-all duration-500 hover:-translate-y-1">
                                    <div className="text-6xl font-bold text-slate-100 mb-6 font-sans select-none">0{index + 1}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-hana-accent leading-tight tracking-tight">
                                        {point}
                                    </h3>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="mt-16 p-12 md:p-14 bg-hana-accent rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
                            {/* Texture overlay via noise class in parent or pseudo */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <div className="relative z-10 space-y-8">
                                <h3 className="text-3xl md:text-4xl font-bold font-sans leading-tight tracking-tight">
                                    {ECONOMICS_B2B.punchline}
                                </h3>
                                <div className="w-16 h-1 bg-hana-primary mx-auto rounded-full opacity-60"></div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default EconomicsB2B;
