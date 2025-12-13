import React from 'react';
import { HERO_B2B } from '../constants-b2b';
import { ArrowRight, FileText } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const HeroB2B: React.FC = () => {
    return (
        <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-24 overflow-hidden bg-white selection:bg-hana-primary/20">
            {/* Background Decorations (Subtle DLS aligned) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-hana-primary/5 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[0%] left-[-10%] w-[800px] h-[800px] bg-hana-accent/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 relative z-10 text-center lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-hana-primary text-hana-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-hana-primary animate-pulse"></span>
                                Now Live in Thailand
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-hana-accent font-sans">
                                Reduce Claims by <span className="text-hana-primary">30%+</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-slate-body leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
                                {HERO_B2B.subheadline}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => window.location.href = 'mailto:farhan@hanna.care'}
                                    className="flex items-center justify-center gap-2 bg-hana-primary text-white px-8 py-4 rounded-lg text-base font-semibold transition-all hover:bg-hana-accent hover:shadow-hover shadow-sm active:scale-95 group w-full sm:w-auto font-body">
                                    {HERO_B2B.ctaPrimary}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-hana-accent text-hana-accent px-8 py-4 rounded-lg text-base font-semibold transition-all hover:bg-hana-accent hover:text-white w-full sm:w-auto font-body">
                                    <FileText className="w-5 h-5" />
                                    {HERO_B2B.ctaSecondary}
                                </button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-body pt-8 font-medium font-body">
                                <p>Designed in collaboration with Thai insurers</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Visual */}
                    <div className="relative w-full">
                        <FadeIn delay={0.4} direction="left">
                            <div className="relative rounded-3xl overflow-hidden shadow-hover border border-slate-100 bg-white group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
                                <img
                                    src="/hero-b2b-v2.jpg"
                                    alt="Hanna AI Nurse Dashboard"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                                />

                                {/* Overlay Card */}
                                <div className="absolute bottom-8 left-8 bg-white p-5 rounded-lg flex items-center gap-4 shadow-lg border border-slate-50 z-30">
                                    <div className="w-12 h-12 bg-hana-primary/10 rounded-lg flex items-center justify-center text-2xl shrink-0">
                                        💰
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-sans">Impact Realized</p>
                                        <p className="text-hana-accent font-bold text-xl font-sans">฿250k Saved</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroB2B;
