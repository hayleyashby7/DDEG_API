/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        relative: true,
        files: ['./index.html', './src/**/*.{js,jsx}', './src/*.{js,jsx}'],
    },
    theme: {
        extend: {},
    },
    plugins: ['@tailwindcss/forms'],
};
