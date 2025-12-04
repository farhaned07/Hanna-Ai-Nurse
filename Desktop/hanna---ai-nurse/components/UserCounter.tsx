import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface UserCounterProps {
    target?: number;
    duration?: number;
}

const UserCounter: React.FC<UserCounterProps> = ({ target = 2000, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (hasAnimated) return;

        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                setHasAnimated(true);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration, hasAnimated]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg shadow-hana-main/10 border border-hana-main/10"
        >
            <div className="bg-hana-soft p-2 rounded-full">
                <Users className="text-hana-main w-5 h-5" />
            </div>
            <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-hana-dark tabular-nums">
                    {count.toLocaleString()}+
                </span>
                <span className="text-xs text-hana-dark/60 font-medium">ผู้ใช้ไว้วางใจ</span>
            </div>
        </motion.div>
    );
};

export default UserCounter;
