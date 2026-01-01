import React from 'react';
import { motion } from 'framer-motion';
import { CLOSING_B2B } from '../constants-b2b';
import { ArrowRight } from 'lucide-react';

const ClosingB2B: React.FC = () => {
    return (
        <section className="py-12 px-4 md:px-6 bg-surface">
            <div className="container mx-auto max-w-[1280px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative bg-surface-subtle rounded-[2.5rem] px-8 py-24 md:py-32 overflow-hidden text-center shadow-2xl border border-white/10"
                >
                    {/* Dot Grid Background */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans tracking-tight leading-[1.1]">
                            {CLOSING_B2B.tagline}
                        </h2>

                        <p className="text-lg text-slate-400 font-body leading-relaxed max-w-2xl mx-auto">
                            If you're ready to help us prove this—not with your money, but with your patients and your feedback—let's build together.
                        </p>

                        <div className="pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.location.href = 'mailto:farhan@hanna.care'}
                                className="bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-200 transition-all shadow-xl inline-flex items-center gap-3 group"
                            >
                                Schedule a Pilot Discussion
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClosingB2B;
