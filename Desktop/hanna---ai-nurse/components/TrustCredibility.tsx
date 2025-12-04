import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_CONTENT } from '../constants';
import { ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustCredibility: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-hana-soft/30 to-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-hana-main/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-hana-dark mb-4 tracking-tight">
                            {TRUST_CONTENT.title}
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

                        {/* Safety - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-hana-main/5 border border-hana-main/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative gradient */}
                            <div className="absolute -right-8 -top-8 w-40 h-40 bg-hana-soft/50 rounded-full blur-3xl group-hover:bg-hana-soft/70 transition-colors pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon & Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-hana-soft to-hana-main/10 p-4 rounded-2xl text-hana-main shrink-0 shadow-sm border border-hana-main/10">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-2">
                                            {TRUST_CONTENT.safety.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-hana-dark/70 leading-relaxed">
                                            {TRUST_CONTENT.safety.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Points */}
                                <ul className="space-y-4 mb-6">
                                    {TRUST_CONTENT.safety.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1 bg-hana-soft rounded-full p-1">
                                                <CheckCircle className="text-hana-main w-4 h-4" />
                                            </div>
                                            <span className="text-base md:text-lg text-hana-dark/80 font-medium leading-relaxed">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Link */}
                                <Link
                                    to="/safety"
                                    className="text-hana-main font-semibold hover:text-hana-dark transition-colors inline-flex items-center gap-2 group/link"
                                >
                                    ดูรายละเอียดระบบความปลอดภัย
                                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Audience - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-hana-main/5 border border-hana-main/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative gradient */}
                            <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-green-100/40 rounded-full blur-3xl group-hover:bg-green-100/60 transition-colors pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon & Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl text-green-600 shrink-0 shadow-sm border border-green-100">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-hana-dark">
                                        {TRUST_CONTENT.audience.title}
                                    </h3>
                                </div>

                                {/* Suitable List */}
                                <ul className="space-y-4 mb-6">
                                    {TRUST_CONTENT.audience.suitable.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-100 rounded-full p-1">
                                                <CheckCircle className="text-green-600 w-4 h-4" />
                                            </div>
                                            <span className="text-base md:text-lg text-hana-dark/80 font-medium leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Not Suitable Note */}
                                <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="text-amber-600 w-5 h-5 mt-0.5 shrink-0" />
                                        <p className="text-sm md:text-base text-amber-900/80 font-medium leading-relaxed">
                                            {TRUST_CONTENT.audience.note}
                                        </p>
                                    </div>
                                </div>

                                {/* Learn More Link */}
                                <Link
                                    to="/audience"
                                    className="text-hana-main font-semibold hover:text-hana-dark transition-colors inline-flex items-center gap-2 group/link"
                                >
                                    ดูรายละเอียดเพิ่มเติม
                                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustCredibility;
