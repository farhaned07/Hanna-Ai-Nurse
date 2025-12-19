import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { PROBLEM_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';

const ProblemB2B: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden" id="problem">
            {/* Light abstract bg */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hana-primary/5 via-slate-50 to-slate-50"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hana-accent mb-4 font-sans tracking-tight">
                            {PROBLEM_B2B.headline}
                        </h2>
                        <p className="text-xl md:text-2xl text-hana-primary font-bold font-sans">
                            {PROBLEM_B2B.subheadline}
                        </p>
                        <p className="text-slate-500 font-medium mt-6 uppercase tracking-widest text-sm">
                            {PROBLEM_B2B.context}
                        </p>
                    </FadeIn>
                </div>

                {/* 5-Column Grid (Responsive wrapping) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {PROBLEM_B2B.points.map((point, index) => (
                        <SpotlightCard key={index} point={point} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <FadeIn delay={0.6}>
                        <p className="inline-block border-b-2 border-hana-accent pb-1 text-xl md:text-2xl font-bold text-hana-accent font-sans">
                            {PROBLEM_B2B.summary}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

const SpotlightCard: React.FC<{ point: any; index: number }> = ({ point, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative border border-slate-200 bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(109, 157, 173, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className="p-6 h-full flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 mb-4 rounded-xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-800 font-sans leading-tight">
                    {point.title}
                </h3>
            </div>
        </motion.div>
    );
};

export default ProblemB2B;
