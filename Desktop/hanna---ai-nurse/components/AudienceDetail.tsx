import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Audience from './Audience';

const AudienceDetail: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header with Back Button */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-hana-main/10">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-hana-main hover:text-hana-dark transition-colors font-semibold"
                    >
                        <ArrowLeft size={20} />
                        กลับหน้าหลัก
                    </Link>
                </div>
            </nav>

            {/* Audience Content */}
            <Audience />

            {/* CTA Section */}
            <section className="py-16 bg-hana-soft/30">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-hana-dark mb-6">
                        พร้อมให้ฮันนาดูแลคุณแล้วหรือยัง?
                    </h3>
                    <Link
                        to="/"
                        className="inline-block bg-hana-main hover:bg-[#7A33FF] text-white py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-lg shadow-hana-main/20"
                    >
                        ทดลองใช้ฟรี 7 วัน
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AudienceDetail;
