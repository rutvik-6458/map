/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    50: '#f0f9f1',
                    100: '#dcf1df',
                    200: '#bbe3c3',
                    300: '#8fcc9d',
                    400: '#5eaa71',
                    500: '#3e8d53',
                    600: '#2e7141',
                    700: '#265b36',
                    800: '#1f482d',
                    900: '#1a3c26',
                    950: '#0e2115',
                },
                earth: {
                    50: '#f7f6f5',
                    100: '#eceae6',
                    200: '#d9d4cc',
                    300: '#bfb5a8',
                    400: '#a39380',
                    500: '#8a7765',
                    600: '#756255',
                    700: '#625148',
                    800: '#52453f',
                    900: '#463c38',
                    950: '#251f1d',
                }
            },
            fontFamily: {
                outfit: ['var(--font-outfit)', 'sans-serif'],
                cormorant: ['var(--font-cormorant)', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
};
