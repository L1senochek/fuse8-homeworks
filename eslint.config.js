import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import sortExports from 'eslint-plugin-sort-exports';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintPluginPrettier],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			import: importPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'sort-exports': sortExports,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,
			'import/prefer-default-export': 'off',
			'import/no-unresolved': 'off',
			'import/no-default-export': 'off',
			'import/named': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'jsx-a11y/alt-text': 'error',
			'sort-exports/sort-exports': [
				'error',
				{
					sortDir: 'asc',
					ignoreCase: false,
					sortExportKindFirst: 'type',
					pattern: '**/index.*',
				},
			],
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						['internal', 'parent', 'sibling', 'index', 'type'],
						['object'],
					],
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '{react,react-dom/**,redux}',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '*.{scss,css}',
							group: 'object',
							patternOptions: { matchBase: true },
							position: 'after',
						},
					],
					warnOnUnassignedImports: true,
					pathGroupsExcludedImportTypes: ['react', 'react-dom/**'],
					distinctGroup: false,
					alphabetize: {
						order: 'asc',
						orderImportKind: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'sort-imports': [
				'error',
				{
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
					allowSeparatedGroups: false,
				},
			],
		},
		ignores: ['./src/App.tsx', 'index.html'],
	},
);
