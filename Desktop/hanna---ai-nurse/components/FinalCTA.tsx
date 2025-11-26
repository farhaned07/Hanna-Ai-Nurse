import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-8 px-4 md:px-8 bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-hana-soft overflow-hidden relative text-center py-24 px-6 md:px-12 shadow-2xl shadow-hana-main/10 border border-hana-main/10"
      >
        
        {/* Abstract shapes with breathing animation */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-64 h-64 bg-hana-main/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-hana-main/10 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3"
        />

        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 p-3 bg-white rounded-2xl inline-flex items-center justify-center shadow-md shadow-hana-main/10"
          >
              <Sparkles className="text-hana-main w-8 h-8" />
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-6xl font-bold mb-6 text-hana-dark tracking-tight"
          >
            เหลือสิทธิ์ส่วนลด <span className="text-hana-main">50% ตลอดชีพ</span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-hana-dark/70 mb-12 max-w-2xl"
          >
            อีกไม่ถึง <span className="font-bold text-white bg-hana-main px-2 rounded">2,000</span> ที่นั่ง เริ่มดูแลคนที่คุณรักได้ทันที วันนี้
          </motion.p>

          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-8 rounded-3xl border border-hana-main/20 shadow-xl shadow-hana-main/5"
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 relative border-4 border-hana-main">
               <div className="absolute top-0 right-0 bg-hana-green w-8 h-8 rounded-bl-xl z-10 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">LINE</span>
               </div>
               <img 
                src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr" 
                alt="Scan CTA" 
                className="w-[180px] h-[180px] object-contain"
              />
            </div>
            
            <div className="text-center md:text-left text-hana-dark">
              <p className="text-lg text-hana-dark/60 mb-1">สแกน LINE เพื่อเริ่มใช้งาน</p>
              <p className="text-3xl font-bold mb-4">@hanna</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://line.me/R/ti/p/@hanna" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-hana-main text-white px-6 py-3 rounded-xl font-bold hover:bg-[#7A33FF] transition-colors shadow-lg shadow-hana-main/20"
              >
                แอดไลน์เลย <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;