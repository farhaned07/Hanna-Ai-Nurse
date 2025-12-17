import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SOLUTION_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';

const SolutionB2B: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden" id="solution">
            {/* Minimalist Grid BG */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <FadeIn>
                        <span className="text-hana-accent font-bold tracking-wider uppercase text-sm mb-4 block">The Solution</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-hana-accent mb-6 font-sans tracking-tight">
                            {SOLUTION_B2B.headline}
                        </h2>
                        <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
                            {SOLUTION_B2B.subheadline}
                        </p>
                    </FadeIn>
                </div>

                {/* Steps Process with Connection Line */}
                <div className="relative">
                    {/* Glowing Connection Line */}
                    <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-hana-primary/30 to-transparent -z-10"></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {SOLUTION_B2B.steps.map((step, index) => (
                            <TiltCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TiltCard: React.FC<{ step: any; index: number }> = ({ step, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            style={{ perspective: 1000 }}
            className="group relative"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 min-h-[320px] flex flex-col items-center text-center relative z-10 overflow-visible transition-all duration-300"
            >
                {/* Floating Icon */}
                <div
                    className="w-20 h-20 -mt-16 mb-8 bg-white rounded-2xl shadow-lg shadow-hana-primary/10 border border-slate-50 flex items-center justify-center text-hana-primary transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110"
                    style={{ transform: "translateZ(30px)" }}
                >
                    {React.cloneElement(step.icon as React.ReactElement, {
                        className: 'w-10 h-10 stroke-[1.5]'
                    })}
                </div>

                <div style={{ transform: "translateZ(20px)" }}>

                    <h3 className="text-xl font-bold text-hana-accent mb-4 font-sans leading-tight">
                        {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-body">
                        {step.description}
                    </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-hana-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

export default SolutionB2B;
