import React from 'react';
import { ECONOMICS_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';
import { Check } from 'lucide-react';

const EconomicsB2B: React.FC = () => {
    return (
        <section className="py-32 bg-hana-accent text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Economics List */}
                    <div>
                        <FadeIn>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-sans tracking-tight">
                                {ECONOMICS_B2B.headline}
                            </h2>
                            <p className="text-xl text-slate-300 mb-10 font-body">
                                {ECONOMICS_B2B.subheadline}
                            </p>

                            <div className="space-y-6">
                                {ECONOMICS_B2B.points.map((point, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-full bg-hana-primary/20 flex items-center justify-center text-hana-primary shrink-0">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        {point}
                                    </div>
                                ))}
                            </div>

                            <p className="mt-12 text-sm font-bold tracking-widest uppercase text-hana-primary border-l-4 border-hana-primary pl-4 py-1">
                                {ECONOMICS_B2B.punchline}
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right: Strategic Shift Card */}
                    <div className="lg:pl-10">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-hana-primary/20 blur-[60px] rounded-full"></div>

                                <h3 className="text-2xl font-bold text-hana-primary mb-6 font-sans">
                                    {ECONOMICS_B2B.strategicShift.headline}
                                </h3>

                                <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
                                    "{ECONOMICS_B2B.strategicShift.text}"
                                </p>

                                <div className="inline-block bg-white text-hana-accent px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                                    {ECONOMICS_B2B.strategicShift.highlight}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EconomicsB2B;
