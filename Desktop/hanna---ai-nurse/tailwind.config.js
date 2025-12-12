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
                'hana-primary': '#6d9dad', // Formerly Green, now Hanna Blue
                'hana-accent': '#0d465f', // Deep Teal Accent
                'navy': '#0F172A',
                'slate-body': '#334155',
                'cool-gray': '#F8FAFC',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem', // 72px
                '22': '5.5rem', // 88px
                // 96px is usually '24' (6rem) in default tailwind, but let's be explicit if needed
            },
            borderRadius: {
                DEFAULT: '8px',
                'lg': '16px',
                'xl': '24px',
            },
            boxShadow: {
                DEFAULT: '0px 1px 3px rgba(15, 23, 42, 0.1)',
                'hover': '0px 10px 15px -3px rgba(15, 23, 42, 0.1)',
            }
        },
    },
    plugins: [],
}
