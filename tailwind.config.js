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
        typography: ({ theme }) => ({
            slate: {
              css: {
                '--tw-prose-body': theme('colors.slate[800]'),
                '--tw-prose-headings': theme('colors.slate[900]'),
                '--tw-prose-lead': theme('colors.slate[700]'),
                '--tw-prose-links': theme('colors.slate[900]'),
                '--tw-prose-bold': theme('colors.slate[900]'),
                '--tw-prose-counters': theme('colors.slate[600]'),
                '--tw-prose-bullets': theme('colors.slate[400]'),
                '--tw-prose-hr': theme('colors.slate[300]'),
                '--tw-prose-quotes': theme('colors.slate[900]'),
                '--tw-prose-quote-borders': theme('colors.slate[300]'),
                '--tw-prose-captions': theme('colors.slate[700]'),
                '--tw-prose-code': theme('colors.slate[900]'),
                '--tw-prose-pre-code': theme('colors.slate[100]'),
                '--tw-prose-pre-bg': theme('colors.slate[900]'),
                '--tw-prose-th-borders': theme('colors.slate[300]'),
                '--tw-prose-td-borders': theme('colors.slate[200]'),
                '--tw-prose-invert-body': theme('colors.slate[200]'),
                '--tw-prose-invert-headings': theme('colors.white'),
                '--tw-prose-invert-lead': theme('colors.slate[300]'),
                '--tw-prose-invert-links': theme('colors.white'),
                '--tw-prose-invert-bold': theme('colors.white'),
                '--tw-prose-invert-counters': theme('colors.slate[400]'),
                '--tw-prose-invert-bullets': theme('colors.slate[600]'),
                '--tw-prose-invert-hr': theme('colors.slate[700]'),
                '--tw-prose-invert-quotes': theme('colors.slate[100]'),
                '--tw-prose-invert-quote-borders': theme('colors.slate[700]'),
                '--tw-prose-invert-captions': theme('colors.slate[400]'),
                '--tw-prose-invert-code': theme('colors.white'),
                '--tw-prose-invert-pre-code': theme('colors.slate[300]'),
                '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                '--tw-prose-invert-th-borders': theme('colors.slate[600]'),
                '--tw-prose-invert-td-borders': theme('colors.slate[700]'),
              },
            },
          }),
    },
    plugins: [require('daisyui'),  require('@tailwindcss/typography'),],
};
