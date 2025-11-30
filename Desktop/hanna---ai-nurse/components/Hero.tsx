import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import LiveCounter from './LiveCounter';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-hana-soft">
      {/* Background Gradients - Adjusted for soft purple theme */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-hana-main/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-hana-main/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Social Proof Badge */}
          <div className="flex items-center gap-4 mb-8 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full lg:bg-transparent lg:p-0 inline-flex">
            <div className="text-xs md:text-sm font-medium text-hana-dark/80">
              <p className="leading-tight">
                {HERO_CONTENT.socialProof}
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-hana-dark tracking-tight max-w-2xl lg:max-w-none">
            {HERO_CONTENT.headline.split("ICU")[0]}
            <span className="text-hana-main">ICU</span>
            {HERO_CONTENT.headline.split("ICU")[1]}
          </h1>

          <p className="text-lg md:text-2xl text-hana-dark/70 font-normal mb-8 leading-relaxed max-w-lg">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto justify-center lg:justify-start">
            <div className="px-4 py-2 md:px-5 md:py-3 rounded-full bg-white text-hana-main border border-hana-main/20 flex items-center gap-2 text-xs md:text-sm font-medium animate-pulse text-center shadow-sm">
              <ShieldCheck size={16} className="shrink-0" />
              {HERO_CONTENT.urgency}
            </div>
          </div>

          <a
            href="#pricing"
            className="hidden lg:inline-flex items-center gap-2 text-hana-main font-bold hover:gap-3 transition-all"
          >
            ดูแพ็กเกจราคา <ArrowRight size={20} />
          </a>
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
            {/* QR Container with Main Purple Border as requested */}
            <div className="bg-white p-4 md:p-6 rounded-3xl mb-6 shadow-sm border-2 border-hana-main relative overflow-hidden group-hover:border-hana-main/80 transition-colors duration-300">
              {/* Context Badge in Success Green */}
              <div className="absolute top-0 right-0 bg-hana-green text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl shadow-sm z-10">
                LINE
              </div>
              <img
                src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                alt="Scan to join Hanna"
                className="w-full aspect-square object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-hana-dark mb-2 flex items-center justify-center gap-2">
              สแกนจองสิทธิ์
            </h3>
            <p className="text-hana-dark/60 mb-6 text-sm">{HERO_CONTENT.qrText}</p>

            {/* CTA Button in Main Purple */}
            <a href="https://line.me/R/ti/p/@hanna" target="_blank" rel="noopener noreferrer" className="bg-hana-main hover:bg-[#7A33FF] text-white py-3 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-hana-main/20">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {HERO_CONTENT.qrSub}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;