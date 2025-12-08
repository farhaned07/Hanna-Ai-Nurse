import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FINAL_CTA_MVP } from '../constants-mvp';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-hana-soft/30 to-white">
      {/* Floating Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-hana-main/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-hana-soft/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-hana-dark mb-4 md:mb-6 leading-[1.15] tracking-tight"
          >
            {FINAL_CTA_MVP.headline}
          </h2>
          <p
            className="text-2xl md:text-3xl text-hana-main font-medium mb-3"
          >
            {FINAL_CTA_MVP.subheadline}
          </p>
          <p
            className="text-xl md:text-2xl text-hana-dark/70 font-medium"
          >
            {FINAL_CTA_MVP.subtitle}
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-hana-main/10"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: QR Code */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* QR Code Container */}
                <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md border-2 border-hana-main relative group">
                  <div className="absolute -top-3 -right-3 bg-[#06C755] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md animate-bounce z-10">
                    LINE
                  </div>
                  <img
                    src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                    alt="Scan to join Hanna"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <p className="text-hana-dark/60 font-medium mb-2 mt-6">สแกนเพื่อเพิ่มฮันนาในไลน์</p>
              <h3 className="text-3xl font-bold text-hana-dark mb-6">{FINAL_CTA_MVP.lineId}</h3>

              {/* Alternative CTA Button */}
              <a
                href="https://lin.ee/2k1oG3l"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hana-main hover:bg-[#7A33FF] text-white py-3 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-hana-main/20 w-full md:w-auto active:scale-95"
              >
                {FINAL_CTA_MVP.cta} <ArrowRight size={20} />
              </a>
            </div>

            {/* Right: Benefits */}
            <div>
              <ul className="space-y-4">
                {FINAL_CTA_MVP.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-lg md:text-xl font-medium text-hana-dark"
                  >
                    <span className="text-green-500 text-2xl">✓</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-hana-main mb-2">
            {FINAL_CTA_MVP.socialProof}
          </p>
          <p className="text-base md:text-lg text-hana-dark/70">
            {FINAL_CTA_MVP.socialProofSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;