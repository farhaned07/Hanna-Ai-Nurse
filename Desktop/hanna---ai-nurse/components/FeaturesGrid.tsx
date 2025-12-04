import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES_GRID } from '../constants-mvp';

const FeaturesGrid: React.FC = () => {
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
                        {FEATURES_GRID.headline}
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {FEATURES_GRID.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-gradient-to-br from-white to-hana-soft/20 rounded-3xl p-6 md:p-8 border border-hana-main/10 hover:border-hana-main/20 hover:shadow-lg hover:shadow-hana-main/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="bg-gradient-to-br from-hana-soft to-hana-main/10 p-4 rounded-2xl text-hana-main inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-hana-main/10">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-hana-dark mb-3 leading-snug">
                                {feature.title}
                            </h3>
                            <p className="text-base md:text-lg text-hana-dark/70 leading-relaxed whitespace-pre-line">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
