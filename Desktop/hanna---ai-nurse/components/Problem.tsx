import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_CONTENT } from '../constants';

const Problem: React.FC = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-hana-soft/30">
            {/* Floating Background Orbs - Softer purple tones */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-hana-main/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-hana-soft/40 rounded-full blur-[120px]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
                    {/* Text Content - Left */}
                    <div className="text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-hana-dark mb-6 tracking-tight"
                        >
                            {PROBLEM_CONTENT.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-2xl text-hana-main font-medium mb-8"
                        >
                            {PROBLEM_CONTENT.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <p className="text-lg md:text-xl text-hana-dark/80 font-bold bg-white/90 border border-hana-main/10 px-8 py-4 rounded-3xl shadow-sm shadow-hana-main/5 backdrop-blur-sm">
                                {PROBLEM_CONTENT.summary}
                            </p>
                        </motion.div>
                    </div>

                    {/* Cards Grid - Right */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {PROBLEM_CONTENT.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 md:p-8 rounded-3xl border border-hana-main/5 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:shadow-hana-main/5 hover:border-hana-main/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Subtle gradient overlay */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-hana-soft/40 rounded-full blur-2xl group-hover:bg-hana-soft/60 transition-colors pointer-events-none" />

                                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 text-center sm:text-left relative z-10">
                                    <div className="bg-gradient-to-br from-hana-soft to-hana-main/10 p-4 rounded-2xl text-hana-main group-hover:scale-110 transition-transform duration-300 shrink-0 mx-auto sm:mx-0 shadow-sm border border-hana-main/10">
                                        {item.icon}
                                    </div>
                                    <p className="text-base md:text-xl text-hana-dark/80 font-medium pt-2 leading-relaxed">
                                        {item.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>


            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-hana-soft/30"></path>
                </svg>
            </div>
        </section >
    );
};

export default Problem;
