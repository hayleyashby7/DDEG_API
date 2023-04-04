module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:testing-library/react',
        'plugin:react/recommended',
        'airbnb',
        'plugin:vitest/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'vitest'],
    rules: { 'react/jsx-props-no-spreading': 'off' },
};
