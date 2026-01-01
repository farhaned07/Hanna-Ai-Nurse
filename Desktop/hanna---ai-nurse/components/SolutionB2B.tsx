import React from 'react';
import { SOLUTION_B2B } from '../constants-b2b';
import { MessageCircle, Activity, UserCheck, Database } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const SolutionB2B: React.FC = () => {
    // Custom icons for the steps to ensure visual consistency
    const stepIcons = [
        <MessageCircle className="w-6 h-6 text-white" />,
        <Activity className="w-6 h-6 text-white" />,
        <UserCheck className="w-6 h-6 text-white" />,
        <Database className="w-6 h-6 text-white" />,
    ];

    return (
        <section className="py-24 lg:py-32 bg-surface-subtle relative overflow-hidden" id="solution">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-hana-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-hana-accent/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <FadeIn>
                        <span className="text-hana-primary font-bold tracking-widest uppercase text-xs font-mono mb-4 block">
                            The Continuous Care Loop
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-sans leading-tight tracking-tight mb-6">
                            {SOLUTION_B2B.headline}
                        </h2>
                        <p className="text-xl text-text-secondary font-medium font-body leading-relaxed">
                            {SOLUTION_B2B.subheadline}
                        </p>
                    </FadeIn>
                </div>

                {/* Horizontal Process Flow */}
                <div className="relative">
                    {/* The Connecting Lifeline (Desktop) */}
                    <div className="hidden lg:block absolute top-[88px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-hana-primary/30 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {SOLUTION_B2B.steps.slice(0, 4).map((step, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="relative group text-center lg:text-left">
                                    {/* Card Container */}
                                    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">

                                        {/* Icon Orb */}
                                        <div className="relative z-10 mx-auto lg:mx-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-hana-primary to-hana-accent shadow-lg shadow-hana-primary/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                            {stepIcons[index]}
                                        </div>

                                        {/* Step Number Background */}
                                        <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none select-none font-sans group-hover:text-hana-primary/10 transition-colors">
                                            0{index + 1}
                                        </div>

                                        <h3 className="text-xl font-bold text-text-primary mb-3 font-sans relative z-10">
                                            {step.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm font-body leading-relaxed relative z-10">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Outcome Statement */}
                <FadeIn delay={0.6}>
                    <div className="mt-20 text-center">
                        <p className="inline-flex items-center gap-2 text-lg font-medium text-text-primary bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 shadow-sm">
                            <Activity className="w-5 h-5 text-hana-primary" />
                            {SOLUTION_B2B.outcome[0]}
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default SolutionB2B;
