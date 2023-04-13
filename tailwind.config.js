/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: {
        relative: true,
        files: ['./index.html', './src/**/*.{js,jsx}', './src/*.{js,jsx}'],
    },
    theme: {
        extend: {
            backgroundImage: {
                dragon: "url('/src/assets/dragon.png')",
            },
            fontFamily: {
                sans: ['Alegreya Sans', 'Alegreya Sans SC', ...defaultTheme.fontFamily.sans],
                serif: ['Fraunces', 'Libre Baskerville', ...defaultTheme.fontFamily.serif],
                cursive: ['Goblin One'],
            },
        },
    },
    plugins: ['@tailwindcss/forms'],
};
