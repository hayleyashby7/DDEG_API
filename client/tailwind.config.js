/** @type {import('tailwindcss').Config} */

module.exports = {
    content: {
        relative: true,
        files: ['./index.html', '././src/**/*.{js,jsx}', '././src/*.{js,jsx}'],
    },
    theme: {
        extend: {
            backgroundImage: {
                dragon: "url('/src/assets/dragon.svg')",
                paper: "url('/src/assets/paper.svg')",
            },
        },
    },
    plugins: ['@tailwindcss/forms'],
};
