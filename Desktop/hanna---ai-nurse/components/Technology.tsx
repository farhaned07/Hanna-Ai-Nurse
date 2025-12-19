import React from 'react';
import { TECHNOLOGY_B2B } from '../constants-b2b';
import { CheckCircle } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Technology: React.FC = () => {
    return (
        <section className="py-24 bg-white text-hana-accent">
            <div className="container mx-auto px-6 max-w-[1280px]">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl lg:text-[40px] font-bold mb-4 font-sans tracking-tight">
                            {TECHNOLOGY_B2B.headline}
                        </h2>
                        <p className="text-lg text-slate-body font-body">
                            {TECHNOLOGY_B2B.subheadline}
                        </p>
                    </FadeIn>
                </div>

                {/* 4 Pillars Grid (Updated to support 4 items as per new constants) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TECHNOLOGY_B2B.pillars.map((pillar, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="h-full border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-slate-50/30">
                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 text-hana-accent bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100">
                                    {React.cloneElement(pillar.icon as React.ReactElement, {
                                        className: 'w-6 h-6 stroke-[1.5]'
                                    })}
                                </div>

                                <h3 className="text-xl font-bold mb-4 font-sans text-hana-accent">{pillar.title}</h3>

                                <ul className="space-y-3">
                                    {pillar.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-hana-primary shrink-0 mt-0.5" />
                                            <span className="text-slate-600 font-body text-sm leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Footer Quote */}
                <div className="text-center mt-16">
                    <FadeIn delay={0.5}>
                        <p className="text-xl md:text-2xl font-bold text-hana-primary font-sans">
                            {TECHNOLOGY_B2B.footer}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Technology;
