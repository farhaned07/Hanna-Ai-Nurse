import React from 'react';
import { FOOTER_B2B } from '../constants-b2b';
import { Mail } from 'lucide-react';

const FooterB2B: React.FC = () => {
    return (
        <footer className="pb-6 px-4 md:px-6 bg-surface">
            <div className="container mx-auto max-w-[1400px]">
                <div className="bg-surface-subtle rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-sm border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
                        {/* Brand Column - Large & Bold */}
                        <div className="lg:col-span-6 space-y-8">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-6">
                                <img src="/hanna-logo.png" alt="Logo" className="w-6 h-6 brightness-0" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tighter">
                                hanna.
                            </h2>
                            <p className="text-xl text-text-secondary max-w-md font-medium leading-relaxed">
                                Supervised care infrastructure for closing the gap between clinical visits.
                            </p>
                        </div>

                        {/* Spacer */}
                        <div className="lg:col-span-1"></div>

                        {/* Links Columns - Clean & Minimal */}
                        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
                            <div>
                                <h4 className="text-text-tertiary font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
                                <ul className="space-y-4">
                                    <li><a href="#solution" className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        Features
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                    <li><a href="#impact" className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        Impact
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                    <li><a href="#security" className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        Security
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-tertiary font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                                <ul className="space-y-4">
                                    <li><a href="#" className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        Mission
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                    <li><a href="#" className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        About
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                    <li><a href={`mailto:${FOOTER_B2B.social.email}`} className="text-text-secondary font-semibold hover:text-text-primary transition-colors inline-block relative group">
                                        Contact
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-hana-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-tertiary font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
                                <div className="flex gap-4">
                                    <a href={`mailto:${FOOTER_B2B.social.email}`} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
                        <p className="text-sm font-medium text-text-tertiary">
                            © {new Date().getFullYear()} Hanna AI. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm font-bold text-text-secondary">
                            <a href="#" className="hover:text-text-primary">Privacy Policy</a>
                            <a href="#" className="hover:text-text-primary">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterB2B;
