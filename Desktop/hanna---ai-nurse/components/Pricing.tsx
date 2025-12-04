import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, RISK_REVERSAL } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-hana-soft/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-hana-dark mb-4"
          >
            เลือกการดูแลที่เหมาะกับคุณ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-hana-dark/70"
          >
            ทดลองใช้ฟรี 7 วัน เข้าถึงฟีเจอร์ระดับ Plus
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 ${plan.highlight
                ? 'border-2 border-hana-main shadow-xl scale-105 z-10'
                : 'border border-gray-100 shadow-lg hover:shadow-xl'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hana-main text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-hana-main/20 whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-hana-dark mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-hana-dark">฿{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-hana-dark/60">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-hana-dark/80">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-hana-main' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.footer && (
                <p className="text-center text-sm text-green-600 font-medium mb-4">
                  {plan.footer}
                </p>
              )}

              <a
                href="https://line.me/R/ti/p/@hanna"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg block text-center active:scale-95 ${plan.highlight
                  ? 'bg-hana-main text-white hover:bg-[#7A33FF] shadow-hana-main/30'
                  : 'bg-white text-hana-dark border border-hana-main/20 hover:bg-hana-soft shadow-hana-main/10'
                  }`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 border border-green-100 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6">
            {RISK_REVERSAL.title}
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            {RISK_REVERSAL.items.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-green-700 font-medium">
                <ShieldCheck size={20} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;