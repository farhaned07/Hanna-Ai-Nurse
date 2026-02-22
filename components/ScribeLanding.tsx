import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mic, Fingerprint, Zap, Globe, Shield, ArrowRight, Activity, Command } from 'lucide-react';

// Custom Hook for Mouse Position
function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => setMousePosition({ x: ev.clientX, y: ev.clientY });
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return mousePosition;
}

const ScribeLanding: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const mousePosition = useMousePosition();
    const heroRef = useRef<HTMLDivElement>(null);

    // Scroll Transforms
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

    // Parallax Text
    const textY1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const textY2 = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

    // Audio Visualizer Simulation
    const [loudness, setLoudness] = useState<number[]>(Array(10).fill(10));
    useEffect(() => {
        const interval = setInterval(() => {
            setLoudness(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#050505] text-white font-sans min-h-screen selection:bg-emerald-500/30 overflow-x-hidden">

            {/* Dynamic Cursor Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(48, 209, 88, 0.08), transparent 40%)`
                }}
            />

            {/* Modern Floating Nav */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl px-6 py-4 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex justify-between items-center shadow-2xl">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
                    <span className="font-bold tracking-tight">Hanna Scribe</span>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
                    <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                    <a href="/scribe" className="px-4 py-2 rounded-full bg-white text-black hover:scale-105 transition-transform">Get Started</a>
                </div>
            </nav>

            {/* ═══════ HERO: CINEMATIC ═══════ */}
            <motion.section
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 origin-top"
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>

                {/* Massive Typography */}
                <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
                        className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-8 flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Vocal AI Engine
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
                        className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter mb-8"
                    >
                        Speak freely.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-shimmer bg-[length:200%_auto]">
                            Chart instantly.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
                    >
                        The #1 cause of burnout is paperwork. Hanna Scribe turns your natural patient conversation into a structured SOAP note in seconds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a href="/scribe" className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:shadow-[0_0_40px_rgba(48,209,88,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                            Try It Risk-Free <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Floating Glass Component (The "Product" Shot) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.2, type: 'spring' }}
                    className="mt-20 relative z-20 w-full max-w-4xl perspective-1000"
                >
                    <div className="relative rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 p-8 shadow-[0_0_100px_rgba(48,209,88,0.1)] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Fake Audio Visualizer */}
                            <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 border-r border-white/10 border-dashed hidden md:flex">
                                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(48,209,88,0.3)]">
                                    <Mic className="text-emerald-400 w-8 h-8" />
                                </div>
                                <div className="flex items-center gap-1 h-12">
                                    {loudness.map((h, i) => (
                                        <motion.div key={i} animate={{ height: h }} className="w-1.5 bg-emerald-400 rounded-full" />
                                    ))}
                                </div>
                                <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest">Listening...</p>
                            </div>

                            {/* Fake Generated Note */}
                            <div className="flex-[2] w-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Activity className="text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">SOAP Note Generation</h3>
                                        <p className="text-xs text-gray-500 font-mono">Real-time processing</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">Subjective</span>
                                        <p className="text-gray-300 text-sm leading-relaxed">Patient reports a 3-day history of fatigue and dull headache. Denies nausea, fever, or recent travel.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 opacity-50 blur-[1px]">
                                        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">Objective</span>
                                        <div className="bg-white/10 h-3 w-3/4 rounded mb-2"></div>
                                        <div className="bg-white/10 h-3 w-1/2 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* ═══════ BENTO BOX FEATURES ═══════ */}
            <section id="features" className="py-32 px-6 relative z-10 bg-[#020202]">
                <div className="max-w-7xl mx-auto">
                    <motion.div style={{ y: textY1 }} className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Designed for speed.<br />
                            <span className="text-gray-500">Built for accuracy.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Box 1: Large Span */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="md:col-span-2 rounded-[2.5rem] bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 p-10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Globe className="w-10 h-10 text-emerald-400 mb-6" />
                                    <h3 className="text-3xl font-bold mb-4">Bilingual Intelligence.</h3>
                                    <p className="text-gray-400 text-lg max-w-md">Speak in Thai, switch to English medical terms, code switch back. Hanna understands it all perfectly and generates notes in your preferred language.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Box 2: Tall */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                            className="md:row-span-2 rounded-[2.5rem] bg-gradient-to-b from-[#111] to-[#050505] border border-white/5 p-10 relative overflow-hidden group flex flex-col items-center text-center justify-center"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
                            <Activity className="w-16 h-16 text-cyan-400 mb-8" />
                            <h3 className="text-3xl font-bold mb-4">Custom Templates.</h3>
                            <p className="text-gray-400 text-lg">SOAP. Progress. Pre-op. Discharge. Whatever format your hospital uses, Scribe adapts to your workflow, not the other way around.</p>

                            <div className="mt-12 w-full space-y-3">
                                <div className="h-12 w-full rounded-xl border border-dashed border-cyan-500/30 flex items-center justify-center text-cyan-500/50">SOAP Matrix</div>
                                <div className="h-12 w-full rounded-xl border border-dashed border-cyan-500/30 flex items-center justify-center text-cyan-500/50">ER Admission</div>
                            </div>
                        </motion.div>

                        {/* Box 3: Small */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="rounded-[2.5rem] bg-[#111] border border-white/5 p-10 relative overflow-hidden group"
                        >
                            <Command className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-xl font-bold mb-2">Voice Commands.</h3>
                            <p className="text-gray-400 text-sm">"Make it concise", "Add fever to subjective". Edit with just your voice.</p>
                        </motion.div>

                        {/* Box 4: Small */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="rounded-[2.5rem] bg-[#111] border border-white/5 p-10 relative overflow-hidden group"
                        >
                            <Shield className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-xl font-bold mb-2">Supervised AI.</h3>
                            <p className="text-gray-400 text-sm">You review every note before it saves. AI assists, but you pilot.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════ PRICING (HIGH CONTRAST) ═══════ */}
            <section id="pricing" className="py-32 px-6 bg-[#000] relative">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto">

                    <motion.div style={{ y: textY2 }} className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Pay for value.<br />Not <span className="text-emerald-400">complexity.</span>
                        </h2>
                        <p className="text-xl text-gray-500">Unbelievably simple pricing designed to get you back to your patients instantly.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Free */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-[2.5rem] bg-white/5 border border-white/10 p-10 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold mb-2">Free Pilot</h3>
                            <p className="text-gray-400 mb-8">Perfect to test the magic.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-black">฿0</span>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div> 10 Notes / Month
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Standard SOAP Template
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Thai & English Dictionary
                                </li>
                            </ul>
                            <a href="/scribe" className="block w-full py-4 text-center rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors">
                                Start For Free
                            </a>
                        </motion.div>

                        {/* Pro */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="rounded-[2.5rem] bg-gradient-to-b from-[#1a2e25] to-[#0a1410] border border-emerald-500/30 p-10 relative isolate overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[80px] -z-10"></div>

                            <div className="absolute top-6 right-6 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Pro Choice
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white">Scribe Unlimited</h3>
                            <p className="text-emerald-500/70 mb-8">For the solo clinician.</p>
                            <div className="mb-8">
                                <span className="text-5xl font-black text-white">฿1,990</span>
                                <span className="text-gray-400 ml-2">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-200">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> <span className="font-bold">Unlimited Notes</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> All Premium Templates
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> AI Voice Commands
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> PDF Export & Handover
                                </li>
                            </ul>
                            <a href="/scribe" className="block w-full py-4 text-center rounded-2xl bg-emerald-500 text-black font-extrabold hover:bg-emerald-400 shadow-[0_0_30px_rgba(48,209,88,0.3)] transition-all">
                                Get Unlimited
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ═══════ FOOTER ═══════ */}
            <footer className="py-12 px-6 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                        <span className="font-bold text-gray-300 tracking-tight">Hanna Care Intelligence</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                        <a href="mailto:hello@hanna.care" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ScribeLanding;
