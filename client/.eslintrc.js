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
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:json/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'vitest', 'tailwindcss'],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
