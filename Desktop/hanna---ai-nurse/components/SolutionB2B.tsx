import React from 'react';
import { SOLUTION_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const SolutionB2B: React.FC = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden" id="solution">
            <div className="container mx-auto px-6 max-w-[1280px]">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <FadeIn delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl font-bold text-hana-accent mb-6 font-sans tracking-tight">
                            {SOLUTION_B2B.headline}
                        </h2>
                        <p className="text-xl text-slate-600 font-body leading-relaxed">
                            {SOLUTION_B2B.subheadline}
                        </p>
                    </FadeIn>
                </div>

                {/* Steps Flow */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-hana-primary/20 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12 md:space-y-0">
                        {SOLUTION_B2B.steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Timeline Node */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-8 h-8 rounded-full bg-white border-4 border-hana-primary z-10 shadow-sm items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-hana-primary"></div>
                                </div>

                                {/* Content Side */}
                                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <FadeIn direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 0.1}>
                                        <div className="inline-flex p-3 rounded-full bg-hana-primary/5 text-hana-primary mb-4">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 font-sans mb-2">
                                            {step.title}
                                        </h3>
                                        {step.description && (
                                            <p className="text-slate-500 font-medium font-body">
                                                {step.description}
                                            </p>
                                        )}
                                    </FadeIn>
                                </div>

                                {/* Empty Side (Mirror) */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcome Footer */}
                <FadeIn delay={0.6}>
                    <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            {SOLUTION_B2B.outcome.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 font-bold text-hana-accent text-lg">
                                    <CheckCircle2 className="w-6 h-6 text-hana-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default SolutionB2B;
