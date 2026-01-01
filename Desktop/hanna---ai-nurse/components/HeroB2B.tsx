import React from 'react';
import { HERO_B2B } from '../constants-b2b';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const HeroB2B: React.FC = () => {
    return (
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-surface">
            {/* Subtle Ambient Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-hana-primary/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-hana-accent/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Centered Content */}
                <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto px-2">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            Production-Ready Q4 2025
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.08] tracking-tight text-text-primary font-sans mb-5 md:mb-8">
                            {HERO_B2B.headline}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-[55ch] mx-auto font-body font-normal mb-8 md:mb-10 px-2">
                            {HERO_B2B.subheadline}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex justify-center mb-8 md:mb-12">
                            <button
                                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-2 md:gap-3 bg-white text-black px-6 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold transition-all hover:bg-hana-primary hover:text-white hover:shadow-glow hover:-translate-y-1 active:scale-95 group shadow-xl">
                                See the Platform
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </FadeIn>
                </div>

                {/* Product Dashboard Showcase */}
                <FadeIn delay={0.5} direction="up">
                    <div className="relative max-w-[1100px] mx-auto">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-hana-primary/20 via-transparent to-transparent blur-[80px] scale-110 opacity-50"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface-subtle ring-1 ring-white/5">
                            <img
                                src="/nurse-dashboard-hero.jpg"
                                alt="Hanna Nurse Mission Control"
                                className="w-full h-auto object-cover"
                            />

                            {/* Live Indicator */}
                            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl px-4 py-2 rounded-lg flex items-center gap-2.5 shadow-lg border border-white/10">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest font-mono">Live System</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Trust Indicators */}
                <FadeIn delay={0.6}>
                    <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 mt-10 md:mt-16 text-text-secondary">
                        {HERO_B2B.socialProof.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-medium font-mono uppercase tracking-wider">
                                <Check className="w-4 h-4 text-green-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default HeroB2B;
