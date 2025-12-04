import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_MVP } from '../constants-mvp';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-hana-soft/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-hana-dark mb-4 leading-[1.15] tracking-tight"
          >
            {PRICING_MVP.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-hana-dark/70"
          >
            {PRICING_MVP.subheadline}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {PRICING_MVP.plans.map((plan, index) => (
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
                <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-2">{plan.name}</h3>

                {/* Monthly Price */}
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-hana-dark">฿{plan.price}</span>
                  <span className="text-gray-500 mb-2">{plan.period}</span>
                </div>

                {/* Annual Price */}
                {plan.priceAnnual && (
                  <p className="text-sm text-hana-main font-medium mb-2">
                    หรือ ฿{plan.priceAnnual}/ปี ({plan.savings})
                  </p>
                )}

                <p className="text-sm text-hana-dark/60">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-hana-dark/80">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? 'text-hana-main' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Footer Badge */}
              {plan.footer && (
                <p className="text-center text-sm font-medium text-hana-main mb-4 px-4 py-2 bg-hana-soft/50 rounded-xl">
                  {plan.footer}
                </p>
              )}

              {/* Footer Note */}
              {plan.footerNote && (
                <p className="text-center text-sm text-green-600 font-medium mb-4">
                  {plan.footerNote}
                </p>
              )}

              {/* CTA Button */}
              <a
                href="https://line.me/R/ti/p/@hanna"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg block text-center active:scale-95 ${plan.highlight
                    ? 'bg-hana-main text-white hover:bg-[#7A33FF] shadow-hana-main/30'
                    : 'bg-white text-hana-dark border border-hana-main/20 hover:bg-hana-soft shadow-hana-main/10'
                  }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Family Add-on */}
        {PRICING_MVP.familyAddon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-white rounded-2xl px-6 py-4 border border-hana-main/10 shadow-sm">
              <p className="text-base md:text-lg font-medium text-hana-dark">
                {PRICING_MVP.familyAddon.title}: <span className="text-hana-main font-bold">{PRICING_MVP.familyAddon.price}</span> {PRICING_MVP.familyAddon.note}
              </p>
            </div>
          </motion.div>
        )}

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 border border-green-100 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
            {PRICING_MVP.riskReversal.title}
          </h3>
          <p className="text-base md:text-lg text-green-700 whitespace-pre-line">
            {PRICING_MVP.riskReversal.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;