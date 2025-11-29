import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hana-soft via-white to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-hana-dark mb-6">เลือกแผนที่เหมาะกับคุณ</h2>
          <div className="inline-block bg-hana-soft px-4 py-3 md:px-5 md:py-2.5 rounded-2xl md:rounded-full border border-hana-main/20 mx-4">
            <p className="text-hana-main text-sm md:text-base font-semibold leading-relaxed">ทุกแผนลด 50% ตลอดชีพสำหรับกลุ่มแรก 2,000 คน</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: plan.highlight ? -30 : -5 }}
              className={`relative rounded-[2rem] p-8 transition-colors duration-300 flex flex-col h-full ${plan.highlight
                ? 'bg-white shadow-2xl shadow-hana-main/20 border-2 border-hana-main md:-translate-y-6 z-10 mt-6 md:mt-0'
                : 'bg-white border border-hana-soft hover:border-hana-main/30'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hana-main text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-hana-main/30 whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-4 ${plan.highlight ? 'text-hana-main' : 'text-hana-dark'}`}>{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-sm text-hana-dark/60 mr-1">฿</span>
                  <span className="text-5xl font-bold text-hana-dark tracking-tight">{plan.price}</span>
                  <span className="text-hana-dark/60 ml-2 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-hana-main' : 'text-hana-dark/30'}`} />
                    <span className="text-hana-dark/80 text-sm leading-tight pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://line.me/R/ti/p/@hanna"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg block text-center ${plan.highlight
                  ? 'bg-hana-main text-white hover:bg-[#7A33FF] shadow-hana-main/30'
                  : 'bg-white text-hana-dark border border-hana-main/20 hover:bg-hana-soft shadow-hana-main/10'
                  }`}>
                เลือกแผน {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;