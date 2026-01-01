/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // ========================================
                // DARK MODE APPLE-LIKE PALETTE
                // ========================================

                // Brand Identity - Refined for Dark Mode
                'hana': {
                    'primary': '#6d9dad',   // Electric Cyan - Main accent
                    'accent': '#0d465f',    // Deep Teal - Gradient anchor
                    'dark': '#082f40',      // Darkest brand color
                    'light': '#1e3a4c',     // Subtle tint on dark
                },

                // Surfaces (The Core of Dark Mode)
                'surface': {
                    'DEFAULT': '#0a0a0a',   // Obsidian Black - Main page bg
                    'subtle': '#111113',    // Carbon Gray - Cards, containers
                    'raised': '#1c1c1e',    // Graphite - Hover states
                    'dark': '#0a0a0a',      // Same as default for consistency
                },

                // Borders (Subtle, low contrast)
                'border': {
                    'DEFAULT': '#2c2c2e',   // Midnight Edge
                    'subtle': '#1c1c1e',    // Very subtle
                    'strong': '#3a3a3c',    // More visible
                    'focus': '#6d9dad',     // Accent for focus rings
                },

                // Text (High contrast on dark)
                'text': {
                    'primary': '#f5f5f7',   // Anti-Flash White
                    'secondary': '#a1a1a6', // Silver
                    'tertiary': '#6e6e73',  // Dim Gray
                },

                // Legacy / Direct Access
                'hana-primary': '#6d9dad',
                'hana-accent': '#f5f5f7',  // Changed from dark blue to white for headings
                'slate-body': '#a1a1a6',
                'cool-gray': '#111113',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'], // For technical details
            },
            letterSpacing: {
                'tightest': '-0.04em',
                'tighter': '-0.02em',
                'normal': '0em',
                'wide': '0.025em',
                'widest': '0.1em',
            },
            borderRadius: {
                'sm': '4px',
                DEFAULT: '8px',
                'md': '10px',
                'lg': '12px',
                'xl': '16px',
                '2xl': '24px',
                '3xl': '32px',
            },
            boxShadow: {
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                // Colored Shadows (The "Unicorn" Polish)
                'brand': '0 20px 40px -10px rgba(109, 157, 173, 0.3)', // hana-primary shadow
                'brand-sm': '0 10px 20px -5px rgba(109, 157, 173, 0.2)',
                'glow': '0 0 20px rgba(109, 157, 173, 0.5)',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'shimmer': 'shimmer 2.5s infinite linear',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
