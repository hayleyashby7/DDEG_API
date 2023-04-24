module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['prettier', 'import'],
	rules: {
		'import/no-unresolved': 2,
		'import/no-commonjs': 2,
		'import/extensions': [2, 'ignorePackages'],
	},
};
