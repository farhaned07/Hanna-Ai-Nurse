import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
      <a
        href="https://lin.ee/2k1oG3l"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-hana-main text-white p-4 rounded-xl shadow-lg shadow-hana-main/40 backdrop-blur-md border border-white/10"
      >
        <span className="font-bold text-lg pl-2">เพิ่มฮันนาเลย</span>
        <div className="bg-white/20 p-2 rounded-lg">
          <ArrowRight className="w-5 h-5" />
        </div>
      </a>
    </div>
  );
};

export default StickyCTA;