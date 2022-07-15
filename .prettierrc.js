/** Simple logger. */
/* istanbul ignore next: Unnecessary. */
if (!global.log) global.log = console;

/** prettier formatter configuration. */
const config = {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	printWidth: 80,
	proseWrap: 'never',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['**/*.json', '**/*.yaml', '**/*.yml'],
			options: {
				useTabs: false,
			},
		},
	],
};

if (typeof require !== 'undefined' && require.main === module) {
	// When a script.
	log.debug(JSON.stringify(config, null, 2));
} else {
	// When a module.
	module.exports = config;
}
