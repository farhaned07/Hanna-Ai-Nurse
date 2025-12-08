import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-hana-dark py-12 px-4 border-t border-hana-soft text-sm md:text-base">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                {/* Column 1: Brand & Info (Span 2) */}
                <div className="md:col-span-2 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-hana-dark">
                            hanna<span className="text-hana-main">.</span>
                        </span>
                    </div>
                    <p className="text-hana-dark/60 text-sm leading-relaxed max-w-sm">
                        ผู้ช่วย AI ดูแลสุขภาพพ่อแม่ของคุณ ตลอด 24 ชั่วโมง ป้องกันความเสี่ยงก่อนเกิดเหตุ ด้วยเทคโนโลยีปัญญาประดิษฐ์มาตรฐานสากล
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-hana-dark/40 mt-4 md:mt-auto">
                        <span>{FOOTER_LINKS.copyright}</span>
                        <span className="text-hana-soft/50">•</span>
                        <span>{FOOTER_LINKS.support}</span>
                        <span className="text-hana-soft/50">•</span>
                        <span>{FOOTER_LINKS.privacy}</span>
                    </div>
                </div>

                {/* Column 2: Contact Links */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-hana-dark mb-1">ติดต่อเรา</h4>
                    <a href={`mailto:${FOOTER_LINKS.email}`} className="hover:text-hana-main transition-colors flex items-center gap-2 text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-dark/30"></span>
                        {FOOTER_LINKS.email}
                    </a>
                    <a href="https://lin.ee/2k1oG3l" target="_blank" rel="noopener noreferrer" className="hover:text-hana-main transition-colors flex items-center gap-2 font-medium text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-green"></span>
                        LINE: @hanna
                    </a>
                </div>

                {/* Column 3: Legal & Info Links */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-hana-dark mb-1">ข้อมูลเพิ่มเติม</h4>
                    <Link to="/safety" className="hover:text-hana-main transition-colors flex items-center gap-2 text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-dark/30"></span>
                        ระบบความปลอดภัย
                    </Link>
                    <Link to="/audience" className="hover:text-hana-main transition-colors flex items-center gap-2 text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-dark/30"></span>
                        ฮันนาเหมาะกับใคร
                    </Link>
                    <Link to="/terms" className="hover:text-hana-main transition-colors flex items-center gap-2 text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-dark/30"></span>
                        {FOOTER_LINKS.terms}
                    </Link>
                    <Link to="/privacy" className="hover:text-hana-main transition-colors flex items-center gap-2 text-hana-dark/80">
                        <span className="w-1 h-1 rounded-full bg-hana-dark/30"></span>
                        {FOOTER_LINKS.policy}
                    </Link>
                </div>

                {/* Column 4: Small QR */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 bg-hana-soft p-4 rounded-2xl border border-hana-main/10">
                    <div className="bg-white p-1.5 rounded-xl border-2 border-hana-main shadow-sm shrink-0">
                        <img
                            src="https://qr-official.line.me/gs/M_519fiets_BW.png?oat_content=qr"
                            alt="LINE QR"
                            className="w-20 h-20 object-contain opacity-90 mix-blend-multiply"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs text-hana-dark/50 mb-0.5">สอบถามเพิ่มเติม</p>
                        <p className="font-bold text-hana-dark text-sm">LINE ID: @hanna</p>
                        <a href="https://lin.ee/2k1oG3l" className="text-[10px] text-hana-main font-semibold mt-1 flex items-center gap-1 hover:underline">
                            คลิกเพื่อแอดไลน์
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;