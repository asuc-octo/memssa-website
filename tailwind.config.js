/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/pages/Office/**/*.{js,jsx,ts,tsx}',
        './src/pages/Resources**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                dm: '"Intent"',
                open: '"Open Sans"',
                'noto-serif-ethiopic': ['"Noto Serif Ethiopic"', 'mono'],
                caladea: ['"Caladea"', 'mono'],
                'noto-sans': ['"Noto Sans"', 'mono'],
                'pacifico': ['"Pacifico"', 'mono'],
            },
            screens: {
                mb: { max: '512px' },
                sm: { max: '768px' },
            },
            colors: {
                black: "#000000",
                white: "#ffffff",
                red: "#B2675E",
                'dark-red': "#590E17",
                'light-brown': "#EBDCCB",
                'light-purple': "#673F3D",
                brown: "#C4A381",
                bgdefault: "#E6D7C3",
                subheader: "#721720"
            },
            backgroundColor: {
                'light-brown': "#EBDCCB",
            },
            textColor: {
                primary: "#000000",
            },
            borderRadius: {
                box: "0.5rem",
            },
            boxShadow: {
                card: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
                'card-hover': '0 10px 36px 0 rgba(68, 88, 144, 0.3)',
            },
            dropShadow: {
                'default': '0 1.2px 1.2px rgba(0,0,0,0.8)'
            },
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                DEFAULT: '4px',
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
                'large': '12px',
                'large-custom': '80px',
            },
        },
    },
    plugins: [],
}