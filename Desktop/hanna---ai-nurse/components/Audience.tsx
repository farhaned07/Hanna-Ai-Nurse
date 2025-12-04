import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUDIENCE_CONTENT } from '../constants';
import { CheckCircle, XCircle, ChevronDown } from 'lucide-react';

const Audience: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hana-main/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Mobile: Collapsible Header */}
                    <div
                        className="md:hidden text-center mb-8 cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <div className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm active:scale-95 transition-transform">
                            <h2 className="text-2xl font-bold text-hana-dark">
                                {AUDIENCE_CONTENT.title}
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
                            className="text-3xl md:text-5xl font-bold text-hana-dark tracking-tight"
                        >
                            {AUDIENCE_CONTENT.title}
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
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Suitable */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-hana-main/5 border border-white/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-green-400/20 transition-colors duration-500" />

                                        <div className="flex items-center gap-4 mb-10 relative z-10">
                                            <div className="bg-green-100/80 backdrop-blur-sm p-3 rounded-2xl text-green-600 shadow-sm">
                                                <CheckCircle size={28} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-hana-dark">เหมาะกับใคร</h3>
                                        </div>
                                        <ul className="space-y-6 relative z-10">
                                            {AUDIENCE_CONTENT.suitable.map((item, index) => (
                                                <li key={index} className="flex items-start gap-4">
                                                    <div className="mt-1 bg-green-100 rounded-full p-1">
                                                        <CheckCircle className="text-green-600 w-4 h-4" />
                                                    </div>
                                                    <span className="text-lg text-hana-dark/90 font-medium leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Not Suitable */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white/40 backdrop-blur-lg p-8 md:p-10 rounded-[2.5rem] border border-white/40 relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

                                        <div className="flex items-center gap-4 mb-10 relative z-10">
                                            <div className="bg-red-50/80 backdrop-blur-sm p-3 rounded-2xl text-red-500 shadow-sm">
                                                <XCircle size={28} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-hana-dark/80">ไม่เหมาะกับใคร</h3>
                                        </div>
                                        <ul className="space-y-6 relative z-10">
                                            {AUDIENCE_CONTENT.notSuitable.map((item, index) => (
                                                <li key={index} className="flex items-start gap-4">
                                                    <div className="mt-1 bg-red-50 rounded-full p-1">
                                                        <XCircle className="text-red-400 w-4 h-4" />
                                                    </div>
                                                    <span className="text-lg text-hana-dark/60 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default Audience;
