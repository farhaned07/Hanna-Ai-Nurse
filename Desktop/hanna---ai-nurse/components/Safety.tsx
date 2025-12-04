import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAFETY_CONTENT } from '../constants';
import { ShieldCheck, Lock, ChevronDown } from 'lucide-react';

const Safety: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-hana-soft/30">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-hana-main/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Mobile: Collapsible Header */}
                    <div
                        className="md:hidden text-center mb-8 cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm active:scale-95 transition-transform">
                            <h2 className="text-2xl font-bold text-hana-dark">
                                {SAFETY_CONTENT.title}
                            </h2>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="text-hana-main w-6 h-6" />
                            </motion.div>
                        </div>
                        <p className="text-sm text-hana-dark/60 mt-2">แตะเพื่อ{isExpanded ? 'ซ่อน' : 'ดูรายละเอียด'}</p>
                    </div>

                    {/* Desktop: Normal Title */}
                    <div className="hidden md:block text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-hana-dark mb-6 tracking-tight"
                        >
                            {SAFETY_CONTENT.title}
                        </motion.h2>
                    </div>

                    {/* Mobile: Collapsible Content */}
                    <AnimatePresence>
                        {(isExpanded || window.innerWidth >= 768) && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:!block overflow-hidden"
                            >
                                {/* Steps */}
                                <div className="relative mb-20">
                                    {/* Connecting Line */}
                                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hana-main/0 via-hana-main/20 to-hana-main/0 -translate-x-1/2 hidden md:block"></div>
                                    <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-hana-main/0 via-hana-main/20 to-hana-main/0 -translate-x-1/2 md:hidden"></div>

                                    <div className="space-y-8 md:space-y-12">
                                        {SAFETY_CONTENT.steps.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                            >
                                                {/* Number Bubble */}
                                                <div className="w-14 h-14 rounded-2xl bg-white border border-hana-main/10 flex items-center justify-center text-2xl font-bold shrink-0 relative z-10 shadow-lg shadow-hana-main/5 text-hana-main">
                                                    {index + 1}
                                                </div>

                                                {/* Content */}
                                                <div className={`flex-1 bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                                    <p className="text-lg md:text-xl font-medium text-hana-dark leading-relaxed">
                                                        {step}
                                                    </p>
                                                </div>

                                                {/* Spacer for alternating layout */}
                                                <div className="flex-1 hidden md:block"></div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                                    {SAFETY_CONTENT.badges.map((badge, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (index * 0.1) }}
                                            className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <div className={`p-2 rounded-xl ${index === 0 ? 'bg-hana-soft text-hana-main' : 'bg-green-50 text-green-600'}`}>
                                                {index === 0 ? <Lock size={20} /> : <ShieldCheck size={20} />}
                                            </div>
                                            <span className="text-hana-dark/80 font-medium text-lg">{badge}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default Safety;
