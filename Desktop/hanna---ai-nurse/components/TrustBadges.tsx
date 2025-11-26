import React from 'react';
import { Award, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBadges: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-12 bg-white border-b border-hana-soft relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-hana-soft/30 opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-8 md:gap-12 lg:gap-24"
        >
          
          {/* BOI Promoted */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-default w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-2xl bg-hana-soft flex items-center justify-center text-hana-main shadow-sm border border-hana-main/10 shrink-0"
            >
              <Award size={24} strokeWidth={2.5} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-hana-dark text-lg leading-tight tracking-tight group-hover:text-hana-main transition-colors">BOI Promoted</span>
              <span className="text-sm text-hana-dark/60 font-medium">ได้รับการส่งเสริมจาก BOI</span>
            </div>
          </motion.div>

          {/* Vertical Divider (Hidden on mobile) */}
          <motion.div variants={itemVariants} className="hidden md:block w-px h-12 bg-hana-dark/10"></motion.div>

          {/* PDPA Compliant */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-default w-full sm:w-auto">
             <motion.div 
               whileHover={{ scale: 1.1, rotate: -5 }}
               className="w-12 h-12 rounded-2xl bg-hana-soft flex items-center justify-center text-hana-main shadow-sm border border-hana-main/10 shrink-0"
             >
              <ShieldCheck size={24} strokeWidth={2.5} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-hana-dark text-lg leading-tight tracking-tight group-hover:text-hana-main transition-colors">PDPA Compliant</span>
               <span className="text-sm text-hana-dark/60 font-medium">รักษาข้อมูลส่วนตัวสูงสุด</span>
            </div>
          </motion.div>

          {/* Vertical Divider (Hidden on mobile) */}
          <motion.div variants={itemVariants} className="hidden md:block w-px h-12 bg-hana-dark/10"></motion.div>

          {/* Secure Payments */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group cursor-default w-full sm:w-auto">
             <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="w-12 h-12 rounded-2xl bg-hana-soft flex items-center justify-center text-hana-main shadow-sm border border-hana-main/10 shrink-0"
             >
              <Lock size={24} strokeWidth={2.5} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-hana-dark text-lg leading-tight tracking-tight group-hover:text-hana-main transition-colors">Secure Payments</span>
              <span className="text-sm text-hana-dark/60 font-medium">ชำระเงินปลอดภัย 100%</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;