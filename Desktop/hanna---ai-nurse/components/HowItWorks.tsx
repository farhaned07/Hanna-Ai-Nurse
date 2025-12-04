import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../constants-mvp';

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hana-dark mb-4 leading-[1.15] tracking-tight">
                        {HOW_IT_WORKS.headline}
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
                    {HOW_IT_WORKS.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Step Card */}
                            <div className="bg-gradient-to-br from-hana-soft/30 to-white border border-hana-main/10 rounded-3xl p-6 md:p-8 hover:shadow-lg hover:shadow-hana-main/5 transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    {/* Left: Content */}
                                    <div className="flex-1">
                                        <div className="text-4xl mb-3">{step.number}</div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-3 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-hana-dark/70 leading-relaxed whitespace-pre-line">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Right: Mockup */}
                                    <div className="w-full md:w-64 flex-shrink-0">
                                        {step.mockupType === 'line-chat' && (
                                            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                                                <div className="space-y-3">
                                                    {step.mockupContent.map((msg, i) => (
                                                        <div key={i} className="bg-gray-100 rounded-2xl px-4 py-3 text-sm text-hana-dark">
                                                            {msg}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step.mockupType === 'notification' && (
                                            <div className="bg-white rounded-2xl p-5 shadow-lg border border-hana-main/20">
                                                <div className="space-y-2">
                                                    {step.mockupContent.map((line, i) => (
                                                        <p key={i} className={`${i === 0 ? 'text-base font-bold text-hana-main' : 'text-sm text-hana-dark/80'}`}>
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step.mockupType === 'gemini-live' && (
                                            <div className="bg-gradient-to-br from-hana-main/10 to-hana-soft rounded-2xl p-6 text-center">
                                                <div className="text-2xl mb-3">{step.mockupContent[0]}</div>
                                                <div className="flex justify-center gap-1 h-12 items-end">
                                                    {[...Array(5)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="w-2 bg-hana-main rounded-full"
                                                            animate={{
                                                                height: ['20%', '100%', '20%']
                                                            }}
                                                            transition={{
                                                                duration: 1,
                                                                repeat: Infinity,
                                                                delay: i * 0.1
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {step.mockupType === 'nurse-badge' && (
                                            <div className="bg-gradient-to-br from-hana-soft to-white rounded-2xl p-6 text-center border-2 border-hana-main/20">
                                                <div className="text-5xl mb-3">👩‍⚕️</div>
                                                <p className="text-sm font-bold text-hana-dark">
                                                    {step.mockupContent[0]}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Arrow connector (except for last item) */}
                            {index < HOW_IT_WORKS.steps.length - 1 && (
                                <div className="flex justify-center my-6">
                                    <div className="text-3xl text-hana-main/40">↓</div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://line.me/R/ti/p/@hanna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-hana-main hover:bg-[#7A33FF] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-lg shadow-hana-main/20 active:scale-95"
                    >
                        {HOW_IT_WORKS.cta}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
