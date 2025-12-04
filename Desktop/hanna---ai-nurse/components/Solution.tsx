import React from 'react';
import { motion } from 'framer-motion';
import { SOLUTION_CONTENT } from '../constants';
import { CheckCircle, Activity, Heart, Sparkles } from 'lucide-react';

const Solution: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-hana-soft/30">
            {/* Background Glow Orb */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-hana-main/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
                        {/* Cards Grid - Left (Desktop order 1) */}
                        <div className="order-2 lg:order-1 relative">
                            {/* Connecting Lines (Desktop only) */}
                            <div className="absolute inset-0 hidden md:block pointer-events-none">
                                {/* Horizontal Line */}
                                <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-hana-main/10 to-transparent border-t border-dashed border-hana-main/20" />
                                {/* Vertical Line */}
                                <div className="absolute left-1/2 top-[10%] bottom-[10%] w-0.5 bg-gradient-to-b from-transparent via-hana-main/10 to-transparent border-l border-dashed border-hana-main/20" />
                                {/* Center Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-hana-main/10 shadow-sm flex items-center justify-center z-0">
                                    <div className="w-3 h-3 bg-hana-main/20 rounded-full animate-pulse" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
                                {SOLUTION_CONTENT.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-hana-main/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-hana-main/10 group relative overflow-hidden"
                                    >
                                        {/* Decorative background element */}
                                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-hana-soft/30 rounded-full blur-2xl group-hover:bg-hana-soft/50 transition-colors" />

                                        <div className="flex flex-col items-start gap-4 relative z-10">
                                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl text-green-600 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-green-100/50">
                                                <CheckCircle size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-hana-dark mb-2 md:mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="text-hana-dark/70 text-base md:text-lg leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Text Content - Right (Desktop order 2) */}
                        <div className="order-1 lg:order-2 text-center lg:text-left relative">
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-bold text-hana-dark tracking-tight mb-8"
                            >
                                {SOLUTION_CONTENT.title}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                <p className="inline-block text-hana-dark/60 bg-white/50 px-6 py-3 rounded-2xl md:rounded-full text-xs md:text-sm font-medium border border-hana-main/5 leading-relaxed backdrop-blur-sm">
                                    {SOLUTION_CONTENT.note}
                                </p>

                                {/* Floating Elements for Visual Interest */}
                                <div className="hidden lg:block absolute -right-10 top-0 animate-bounce duration-[3000ms]">
                                    <Sparkles className="text-hana-main/30 w-8 h-8" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Solution;
