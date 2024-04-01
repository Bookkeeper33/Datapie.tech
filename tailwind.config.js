/** @type {import('tailwindcss').Config} */

export default {
    content: [],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                roboto: ["'Roboto', sans-serif"],
                lato: ["'Lato', sans-serif"],
                dm: ["'DM Sans', sans-serif"]
            },
            colors: {
                themePurple: "#7354F2",
                themeBlue: "#6EDEF6",
                themeGreen: "#80F08B",
            },
            backgroundImage: {
                'radial-dark':'radial-gradient(1500px circle at var(--glow-x) var(--glow-y),rgba(80, 246, 158, 0.9), transparent 18%)',
                'radial': 'radial-gradient(1500px circle at var(--glow-x) var(--glow-y), rgba(31, 115, 233, 0.9), transparent 18%)',
            }
        },
    },
    plugins: [require('daisyui')],
};
