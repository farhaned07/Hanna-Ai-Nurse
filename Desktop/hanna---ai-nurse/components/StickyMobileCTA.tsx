import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approximately 100vh)
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
                >
                    <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.1)] px-4 py-3">
                        <a
                            href="https://line.me/R/ti/p/@hanna"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#06C755] hover:bg-[#05b54c] active:scale-95 text-white py-3 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20 w-full"
                        >
                            ทดลองให้ฮันนาดูแลใน LINE ฟรี <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyMobileCTA;
