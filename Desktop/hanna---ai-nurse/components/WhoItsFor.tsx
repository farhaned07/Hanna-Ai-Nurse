import React, { useState } from 'react';
import { AUDIENCE_B2B } from '../constants-b2b';
import FadeIn from './animations/FadeIn';

const WhoItsFor: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-cool-gray">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="text-center mb-12">
                    <FadeIn>
                        <h2 className="text-4xl lg:text-[40px] font-bold text-hana-accent mb-4 font-sans tracking-tight">Built for Healthcare Leaders</h2>
                    </FadeIn>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Tabs */}
                    <FadeIn delay={0.2}>
                        <div className="flex justify-center mb-12">
                            <div className="bg-white p-1 rounded-full border border-slate-200 inline-flex shadow-sm">
                                {AUDIENCE_B2B.map((audience, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 font-sans ${activeTab === index
                                                ? 'bg-hana-accent text-white shadow-md'
                                                : 'text-slate-500 hover:text-hana-accent hover:bg-slate-50'
                                            }`}
                                    >
                                        {audience.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Dynamic Content Panel */}
                    <FadeIn delay={0.3}>
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm min-h-[400px] flex items-center">
                            <div className="grid md:grid-cols-2 gap-12 w-full" key={activeTab}>
                                {/* Left: Challenge */}
                                <div>
                                    <span className="text-hana-primary font-bold text-xs uppercase tracking-widest mb-4 block font-sans">The Challenge</span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-hana-accent mb-6 font-sans leading-tight">
                                        "{AUDIENCE_B2B[activeTab].challenge}"
                                    </h3>
                                    <div className="w-16 h-1 bg-slate-100 rounded-full"></div>
                                </div>

                                {/* Right: Solution */}
                                <div>
                                    <span className="text-hana-accent font-bold text-xs uppercase tracking-widest mb-4 block font-sans">Hanna's Solution</span>
                                    <p className="text-lg text-slate-body font-body leading-relaxed mb-6">
                                        {AUDIENCE_B2B[activeTab].solution}
                                    </p>

                                    <div className="bg-cool-gray p-4 rounded-lg border border-slate-100">
                                        <span className="text-xs font-bold text-slate-500 uppercase block mb-1 font-sans">Ideal Fit</span>
                                        <p className="text-sm text-hana-accent font-medium font-body">{AUDIENCE_B2B[activeTab].fit}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
