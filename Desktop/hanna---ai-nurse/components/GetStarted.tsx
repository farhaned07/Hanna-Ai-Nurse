import React from 'react';
import { motion } from 'framer-motion';
import { GET_STARTED } from '../constants-mvp';

const GetStarted: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-hana-dark leading-[1.15] tracking-tight">
                        {GET_STARTED.headline}
                    </h2>
                </motion.div>

                {/* Steps Flow */}
                <div className="space-y-8 md:space-y-12">
                    {GET_STARTED.steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="bg-gradient-to-br from-hana-soft/30 to-white rounded-3xl p-6 md:p-10 border-2 border-hana-main/10 hover:border-hana-main/20 hover:shadow-lg hover:shadow-hana-main/5 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                        {/* Step Number */}
                                        <div className="text-6xl md:text-7xl flex-shrink-0">
                                            {step.number}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-3 leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-base md:text-lg text-hana-dark/70 leading-relaxed whitespace-pre-line">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* QR Code (if applicable) */}
                                        {step.hasQR && (
                                            <div className="flex-shrink-0">
                                                <div className="bg-white p-4 rounded-2xl shadow-md border-2 border-hana-main">
                                                    <img
                                                        src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                                                        alt="LINE QR Code"
                                                        className="w-32 h-32 md:w-40 md:h-40"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Arrow Connector (except for last step) */}
                            {index < GET_STARTED.steps.length - 1 && (
                                <div className="flex justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.1 }}
                                        className="text-4xl md:text-5xl text-hana-main/40"
                                    >
                                        ↓
                                    </motion.div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
