import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_MVP } from '../constants-mvp';

const TrustCredibility: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hana-dark leading-[1.15] tracking-tight">
                        {TRUST_MVP.headline}
                    </h2>
                </motion.div>

                {/* 3 Trust Pillars */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {TRUST_MVP.pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group bg-gradient-to-br from-white to-hana-soft/20 rounded-3xl p-8 md:p-10 border border-hana-main/10 hover:border-hana-main/20 hover:shadow-lg hover:shadow-hana-main/5 hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            {/* Icon */}
                            <div className="text-6xl md:text-7xl mb-6">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-6 leading-snug">
                                {pillar.title}
                            </h3>

                            {/* Points */}
                            <ul className="space-y-3 text-left">
                                {pillar.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-hana-main text-lg shrink-0 mt-0.5">•</span>
                                        <span className="text-base md:text-lg text-hana-dark/80 leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustCredibility;
