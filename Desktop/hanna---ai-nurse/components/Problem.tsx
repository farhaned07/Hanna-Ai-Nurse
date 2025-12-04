import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_MVP } from '../constants-mvp';

const Problem: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-hana-soft/30">
            {/* Floating Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-hana-main/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-hana-soft/40 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hana-dark mb-4 leading-[1.15] tracking-tight">
                        {PROBLEM_MVP.headline}
                    </h2>
                    <p className="text-xl md:text-2xl text-hana-main font-medium">
                        {PROBLEM_MVP.subheadline}
                    </p>
                </motion.div>

                {/* 3 Pain Point Cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    {PROBLEM_MVP.painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-white rounded-3xl p-6 md:p-8 border border-hana-main/10 hover:border-hana-main/20 hover:shadow-lg hover:shadow-hana-main/5 hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            {/* Emoji */}
                            <div className="text-5xl md:text-6xl mb-4">
                                {point.emoji}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold text-hana-dark mb-3 leading-snug">
                                {point.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base md:text-lg text-hana-dark/70 leading-relaxed whitespace-pre-line">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Transition Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block bg-gradient-to-br from-hana-soft to-hana-main/10 rounded-3xl px-8 md:px-12 py-6 md:py-8 border-2 border-hana-main/20">
                        <p className="text-2xl md:text-3xl font-bold text-hana-main mb-2">
                            {PROBLEM_MVP.transition}
                        </p>
                        <p className="text-lg md:text-xl text-hana-dark/80 font-medium">
                            {PROBLEM_MVP.transitionSub}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-hana-soft/30"></path>
                </svg>
            </div>
        </section>
    );
};

export default Problem;
