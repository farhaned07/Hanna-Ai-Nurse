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
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <FadeIn>
                        <span className="text-hana-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Nurse Scaling Paradox</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-hana-accent mb-6 font-sans tracking-tight">
                            {PROBLEM_B2B.headline}
                        </h2>
                        <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
                            Traditional care management is blind 99% of the time. Hanna sees what others miss.
                        </p>
                    </FadeIn>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {PROBLEM_B2B.columns.map((col, index) => (
                        <SpotlightCard key={index} col={col} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpotlightCard: React.FC<{ col: any; index: number }> = ({ col, index }) => {
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
            className={`group relative border border-slate-200 bg-white overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 ${index === 1 ? 'md:-mt-8 md:mb-8 border-hana-primary/30 shadow-hana-primary/10' : ''}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(109, 157, 173, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className="p-8 h-full flex flex-col relative z-10">
                <div className={`w-14 h-14 mb-8 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${index === 1 ? 'bg-hana-primary text-white shadow-lg shadow-hana-primary/25' : 'bg-hana-primary/10 text-hana-primary'}`}>
                    {React.cloneElement(col.icon as React.ReactElement, {
                        className: 'w-7 h-7 stroke-[1.5]'
                    })}
                </div>

                <h3 className="text-2xl font-bold text-hana-accent mb-4 font-sans">{col.title}</h3>

                <ul className="space-y-4 mt-auto">
                    {col.stats.map((stat: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-hana-primary mt-2 shrink-0 opacity-80" />
                            <span className="text-slate-600 font-body leading-relaxed text-[15px]">
                                {stat}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ProblemB2B;
