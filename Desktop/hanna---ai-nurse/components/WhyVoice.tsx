import React from 'react';
import { motion } from 'framer-motion';
import { WHY_VOICE } from '../constants-mvp';

const WhyVoice: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-hana-soft/30 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hana-dark mb-3 leading-[1.15] tracking-tight">
                        {WHY_VOICE.headline}
                    </h2>
                    <p className="text-xl md:text-2xl text-hana-main font-medium">
                        {WHY_VOICE.subheadline}
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="bg-white rounded-3xl shadow-lg border border-hana-main/10 overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-2 gap-4 p-6 md:p-8 bg-gradient-to-r from-hana-soft/50 to-hana-main/5 border-b border-hana-main/10">
                            <div className="text-center">
                                <div className="text-2xl mb-2">❌</div>
                                <h3 className="text-lg md:text-xl font-bold text-hana-dark">แอปธรรมดา</h3>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl mb-2">✅</div>
                                <h3 className="text-lg md:text-xl font-bold text-hana-main">ฮันนา</h3>
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="divide-y divide-hana-main/5">
                            {WHY_VOICE.comparison.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="grid grid-cols-2 gap-4 p-4 md:p-6 hover:bg-hana-soft/20 transition-colors"
                                >
                                    {/* Regular App */}
                                    <div className="flex items-center gap-3 text-hana-dark/60">
                                        <div className="text-red-400 flex-shrink-0">{item.regularIcon}</div>
                                        <span className="text-sm md:text-base">{item.regular}</span>
                                    </div>

                                    {/* Hanna */}
                                    <div className="flex items-center gap-3 text-hana-dark font-medium">
                                        <div className="text-green-500 flex-shrink-0">{item.hannaIcon}</div>
                                        <span className="text-sm md:text-base">{item.hanna}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Key Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-green-50 to-hana-soft/30 rounded-2xl p-6 md:p-8 border border-green-200/50">
                        <p className="text-xl md:text-2xl font-bold text-hana-dark mb-2">
                            {WHY_VOICE.keyMessage}
                        </p>
                        <p className="text-base md:text-lg text-hana-dark/70">
                            {WHY_VOICE.keyMessageSub}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyVoice;
