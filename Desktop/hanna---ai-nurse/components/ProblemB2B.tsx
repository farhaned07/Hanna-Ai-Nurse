import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_B2B } from '../constants-b2b';
import { Clock, AlertTriangle, UserX, Activity } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ProblemB2B: React.FC = () => {
    // Override icons for specific visual impact in this dark section
    const problemIcons = [
        <Clock className="w-6 h-6 text-red-400" />,
        <AlertTriangle className="w-6 h-6 text-amber-400" />,
        <UserX className="w-6 h-6 text-orange-400" />,
        <Activity className="w-6 h-6 text-rose-400" />,
    ];

    return (
        <section className="py-32 lg:py-40 bg-surface relative overflow-hidden text-text-primary" id="problem">
            {/* Background Texture - subtle dotted grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hana-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: The Anchor (Typography) */}
                    <div className="relative">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-8">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                CRITICAL SYSTEM FAILURE
                            </div>

                            <h2 className="text-4xl md:text-5xl font-sans font-bold text-text-secondary mb-2">
                                The Patient
                            </h2>
                            <div className="relative">
                                <h1 className="text-[80px] leading-[0.9] md:text-[120px] md:leading-[0.85] font-bold font-sans tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-hana-accent via-hana-primary to-slate-400 animate-[text-shimmer_5s_ease-in-out_infinite_alternate] bg-[length:200%_auto]">
                                    361<br />DAYS
                                </h1>
                                <div className="hidden md:block absolute -right-4 top-4 w-24 h-24 border-t-2 border-r-2 border-hana-primary/30 rounded-tr-3xl"></div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-sans font-bold text-text-secondary mt-2 mb-8">
                                Are Unmonitored.
                            </h2>

                            <p className="text-lg text-text-secondary font-body leading-relaxed max-w-md border-l-4 border-hana-primary/30 pl-6">
                                The average patient sees a doctor 4 times a year.
                                For the other 361 days, they are alone with their condition.
                                <strong className="text-text-primary block mt-2">This is the "Blind Gap" where care fails.</strong>
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Column: The Pain Points (Alert Cards) */}
                    <div className="space-y-4">
                        {PROBLEM_B2B.points.slice(0, 4).map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-hana-primary/30 transition-all duration-500 ease-spring shadow-sm hover:shadow-brand hover:-translate-y-1 overflow-hidden">
                                    {/* Noise Texture */}
                                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hana-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-hana-light flex items-center justify-center border border-hana-primary/20 group-hover:border-hana-primary/30 transition-colors">
                                            {problemIcons[index] || <AlertTriangle className="w-5 h-5 text-amber-500" />}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-text-primary font-sans mb-1 group-hover:text-hana-accent transition-colors">
                                                {point.title.split('.')[0]}.
                                            </h3>
                                            <p className="text-sm text-text-secondary font-body leading-relaxed">
                                                {point.title.split('.').slice(1).join('.').trim() || "Critical failure in care delivery."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemB2B;
