import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_STEPS } from '../constants';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 relative bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-hana-main font-semibold tracking-wide uppercase text-sm mb-2 block">Daily Routine</span>
          <h2 className="text-3xl md:text-5xl font-bold text-hana-dark mb-4">ฮันนาดูแลทุกวันแบบนี้</h2>
          <p className="text-hana-dark/60 text-lg">เสมือนมีพยาบาลส่วนตัวเฝ้าดูตลอด 24 ชั่วโมง</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-hana-soft md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Time & Icon Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-hana-soft z-10 shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-hana-main"></div>
                </div>
                
                {/* Content Card */}
                {/* Mobile: pl-14 to clear the marker at left-8 (2rem = 32px) + width */}
                <div className="pl-16 md:pl-0 md:w-1/2 md:px-12 w-full">
                  <div className={`bg-white p-6 md:p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(45,27,105,0.05)] border border-hana-soft hover:shadow-[0_20px_40px_-10px_rgba(45,27,105,0.1)] transition-shadow duration-300 relative`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-hana-soft text-hana-main">
                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-5 h-5 text-hana-main" })}
                      </div>
                      <span className="text-lg font-bold text-hana-dark/40 font-mono">{step.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-hana-dark mb-2">{step.title}</h3>
                    <p className="text-hana-dark/70 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>

                   {/* Conditional Alert Action Branch */}
                  {step.action && (
                    <div className="mt-6 md:ml-0 relative group cursor-pointer pl-4 md:pl-0">
                       <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-hana-main/20 md:hidden ml-8"></div>
                       <div className={`bg-hana-soft border border-hana-main/20 p-5 rounded-2xl flex items-start gap-4 transition-transform hover:scale-[1.02] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="bg-white p-2 rounded-full shrink-0 text-hana-main shadow-sm">
                             <AlertTriangle size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-hana-main font-bold mb-1 text-sm md:text-base">
                              {step.action.text}
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-xs md:text-sm text-hana-dark/80">{step.action.subText}</p>
                          </div>
                       </div>
                    </div>
                  )}
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;