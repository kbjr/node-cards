/** Simple logger. */
/* istanbul ignore next: Unnecessary. */
if (!global.log) global.log = console;

/** Unit test coverage configuration. */
const config = {
	exclude: ['node_modules/', 'tmp/', 'docs/', '.github/', 'report/', 'tests/'],
	reporter: ['html', 'json-summary', 'text', 'cobertura'],
	'report-dir': 'report/test/unit/coverage',
	'temp-directory': 'report/test/unit/coverage/.nyc_output',

	// Report coverage (or lack of) for all, not just the ones with tests.
	all: true,

	// Check whether within thresholds provided.
	'check-coverage': true,

	cache: true,
	'cache-dir': 'report/test/unit/coverage/.cache',
	clean: true,

	// What percentages of coverage are required.
	branches: 0,
	lines: 0,
	functions: 0,
	statements: 0,

	// Provides the green, yellow, red you see in text and bar charts.
	watermarks: {
		branches: [0, 0],
		lines: [75, 95],
		functions: [75, 95],
		statements: [75, 95],
	},
};

if (typeof require !== 'undefined' && require.main === module) {
	// When a script.
	log.debug(JSON.stringify(config, null, 2));
} else {
	// When a module.
	module.exports = config;
}
