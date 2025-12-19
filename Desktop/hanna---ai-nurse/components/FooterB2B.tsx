import React from 'react';
import { FOOTER_B2B } from '../constants-b2b';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const FooterB2B: React.FC = () => {
    return (
        <footer className="bg-hana-accent text-slate-300 py-16 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/hanna-logo.png" alt="Hanna" className="h-8 w-auto" />
                            <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1 font-sans">
                                hanna<span className="text-hana-primary">.</span>
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed mb-8 font-body text-slate-400">
                            Empowering insurers and hospitals with AI-driven nurse supervision.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide font-sans text-sm uppercase">Company</h4>
                        <ul className="space-y-3 text-sm font-medium font-body">
                            {FOOTER_B2B.links.map((link, i) => (
                                <li key={i}><a href={link.href} className="hover:text-hana-primary transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide font-sans text-sm uppercase">Legal</h4>
                        <ul className="space-y-3 text-sm font-medium font-body">
                            {FOOTER_B2B.resources.slice(1).map((link, i) => (
                                <li key={i}><a href={link.href} className="hover:text-hana-primary transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-xs text-slate-500 leading-relaxed font-medium font-body text-center md:text-left">
                    <p>
                        {FOOTER_B2B.legal}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterB2B;
