import React, { useEffect, useState } from 'react';
import { GOOGLE_SHEETS_API_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface CounterData {
    total: number;
    claimed: number;
    remaining: number;
    socialProof?: number; // Added for the social proof counter
}

interface LiveCounterProps {
    defaultCount: number;
    className?: string;
    type: 'remaining' | 'socialProof'; // Differentiate between the two counters
}

const LiveCounter: React.FC<LiveCounterProps> = ({
    defaultCount,
    className = "",
    type
}) => {
    const [count, setCount] = useState<number>(defaultCount);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!GOOGLE_SHEETS_API_URL) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(GOOGLE_SHEETS_API_URL);
                if (!response.ok) throw new Error('Network response was not ok');

                const data: CounterData = await response.json();

                if (type === 'remaining') {
                    const remaining = Math.max(0, data.remaining);
                    setCount(remaining);
                } else if (type === 'socialProof') {
                    // If socialProof is not in the sheet, we might want to fallback or calculate it
                    // For now, let's assume the sheet returns 'claimed' as the social proof number 
                    // OR a specific 'socialProof' field if we add it.
                    // Let's use 'claimed' as the social proof number (people who booked).
                    setCount(data.claimed);
                }

                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch counter data:", err);
                setLoading(false);
            }
        };

        fetchData();

        // Poll every 30 seconds
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [type]);

    return (
        <span className={`inline-flex items-center ${className}`}>
            <span className="tabular-nums relative">
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="inline-block"
                        >
                            {defaultCount.toLocaleString()}
                        </motion.span>
                    ) : (
                        <motion.span
                            key="value"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block"
                        >
                            {count.toLocaleString()}
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>
        </span>
    );
};

export default LiveCounter;
