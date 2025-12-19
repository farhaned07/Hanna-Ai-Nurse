import React from 'react';
import { COMPARISON_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';
import { Check, X } from 'lucide-react';

const ComparisonB2B: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-hana-accent font-sans">
                            {COMPARISON_B2B.headline}
                        </h2>
                    </FadeIn>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
                    <div className="grid grid-cols-2 bg-slate-100 p-4 border-b border-slate-200">
                        {COMPARISON_B2B.columns.map((col, i) => (
                            <div key={i} className={`text-center font-bold text-lg uppercase tracking-wider py-2 ${col.accessor === 'hanna' ? 'text-hana-primary' : 'text-slate-500'}`}>
                                {col.header}
                            </div>
                        ))}
                    </div>

                    <div className="divide-y divide-slate-100">
                        {COMPARISON_B2B.rows.map((row: any, i) => (
                            <div key={i} className="grid grid-cols-2 hover:bg-slate-50/50 transition-colors">
                                <div className="p-6 text-center text-slate-500 font-medium flex items-center justify-center gap-3 md:text-lg">
                                    <X className="w-5 h-5 text-red-200 shrink-0 hidden md:block" />
                                    {row.others}
                                </div>
                                <div className="p-6 text-center text-hana-accent font-bold md:text-lg bg-hana-primary/5 flex items-center justify-center gap-3 border-l border-hana-primary/10">
                                    <Check className="w-5 h-5 text-hana-primary shrink-0 hidden md:block" />
                                    {row.hanna}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonB2B;
