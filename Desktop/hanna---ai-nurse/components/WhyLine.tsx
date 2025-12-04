import React from 'react';
import { motion } from 'framer-motion';
import { WHY_LINE_CONTENT } from '../constants';

const WhyLine: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-hana-dark"
                        >
                            {WHY_LINE_CONTENT.title}
                        </motion.h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {WHY_LINE_CONTENT.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-hana-soft/20 p-6 rounded-2xl text-center hover:bg-hana-soft/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-hana-main mx-auto mb-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-hana-dark">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-xl md:text-2xl text-hana-main font-medium">
                            {WHY_LINE_CONTENT.subtitle}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyLine;
