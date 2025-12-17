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
                            Audit-ready infrastructure designed for clinical risk management.
                        </p>
                    </FadeIn>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {TECHNOLOGY_B2B.pillars.map((pillar, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className="h-full border border-slate-200 rounded-lg p-8 hover:shadow-hover transition-shadow duration-300">
                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 text-hana-accent">
                                    {React.cloneElement(pillar.icon as React.ReactElement, {
                                        className: 'w-12 h-12 stroke-[1.5]'
                                    })}
                                </div>

                                <h3 className="text-2xl font-bold mb-6 font-sans text-hana-accent">{pillar.title}</h3>

                                <ul className="space-y-4">
                                    {pillar.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-hana-primary shrink-0 mt-0.5" />
                                            <span className="text-slate-body font-body text-sm leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;
