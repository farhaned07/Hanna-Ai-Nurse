import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FINAL_CTA_CONTENT } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-[3rem] bg-[#F4F1FF] overflow-hidden relative text-center py-20 px-6 md:px-12"
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-hana-main/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-hana-main/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">

          {/* Icon Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 bg-white p-4 rounded-2xl shadow-sm shadow-hana-main/10 inline-flex"
          >
            <Sparkles className="text-hana-main w-8 h-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-hana-dark mb-6 tracking-tight"
          >
            เริ่มดูแลสุขภาพให้ดีขึ้น <span className="text-hana-main">ตั้งแต่วันนี้</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-hana-dark/70 mb-12 font-medium"
          >
            ให้ฮันนาช่วยดูแลคุณทุกวัน
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-hana-main/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-3xl mx-auto"
          >
            {/* QR Code Section */}
            <div className="relative group">
              <div className="bg-white p-4 rounded-3xl border-4 border-hana-main shadow-lg transform group-hover:rotate-2 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 bg-[#06C755] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md animate-bounce">
                  LINE
                </div>
                <img
                  src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                  alt="Scan to join Hanna"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <p className="text-hana-dark/60 font-medium mb-2">สแกนเลยค่ะ</p>
              <h3 className="text-3xl font-bold text-hana-dark mb-6">@hanna</h3>

              <a
                href="https://line.me/R/ti/p/@hanna"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hana-main hover:bg-[#7A33FF] text-white py-3 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-hana-main/20 w-full md:w-auto"
              >
                แอดไลน์เลย <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-hana-dark/50 font-medium text-sm md:text-base"
          >
            ทดลองใช้ฟรี 7 วัน • ไม่ต้องใส่บัตร • ยกเลิกได้ตลอด
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;