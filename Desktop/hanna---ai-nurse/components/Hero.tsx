import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { HERO_MVP } from '../constants-mvp';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center pt-32 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden bg-hana-soft">
      {/* Background Gradients with Parallax & Floating */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-hana-main/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-hana-main/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-[-0.02em] mb-5 md:mb-6 text-hana-dark max-w-2xl lg:max-w-none">
            {HERO_MVP.headline}
          </h1>

          <p className="text-xl md:text-2xl text-hana-dark/80 font-medium mb-5 md:mb-6 leading-relaxed max-w-lg">
            {HERO_MVP.subheadline}
          </p>

          <p className="text-lg md:text-xl text-hana-dark/60 mb-6 md:mb-8 whitespace-pre-line leading-relaxed max-w-lg">
            {HERO_MVP.description}
          </p>

          {/* Trial Info Badge */}
          <div className="inline-block bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 mb-6 md:mb-8 text-left">
            <p className="text-green-700 font-medium whitespace-pre-line text-sm md:text-base leading-relaxed">
              {HERO_MVP.trial}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
            {HERO_MVP.trustIndicators.map((tag, index) => (
              <div key={index} className="flex items-center gap-2 text-hana-dark/70 font-medium bg-white/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-hana-main/10 text-sm md:text-base">
                <CheckCircle size={16} className="text-hana-main shrink-0" />
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual / QR */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end w-full"
        >
          {/* Decorative Blob behind QR */}
          <div className="absolute inset-0 bg-hana-main/20 rounded-[3rem] rotate-6 scale-90 blur-xl opacity-60"></div>

          <div className="relative bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(45,27,105,0.1)] border border-white/50 backdrop-blur-sm max-w-[320px] md:max-w-sm w-full text-center group">
            {/* QR Container with Main Purple Border */}
            <div className="bg-white p-4 md:p-6 rounded-3xl mb-6 shadow-sm border-2 border-hana-main relative transform group-hover:rotate-2 transition-transform duration-300">
              {/* Context Badge in Success Green */}
              <div className="absolute -top-3 -right-3 bg-[#06C755] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md animate-bounce z-10">
                LINE
              </div>
              <img
                src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                alt="Scan to join Hanna"
                className="w-full aspect-square object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-hana-dark mb-2 flex items-center justify-center gap-2 leading-snug">
              สแกนทดลองฟรี
            </h3>
            <p className="text-hana-dark/60 mb-6 text-sm md:text-base leading-normal">{HERO_MVP.subCta}</p>

            {/* CTA Button */}
            <a
              href="https://line.me/R/ti/p/@hanna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] hover:bg-[#05b54c] text-white py-3 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20 w-full"
            >
              {HERO_MVP.cta} <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;