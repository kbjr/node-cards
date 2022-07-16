/** Test results report title. */
const reportTitle = 'Unit Test Results';

/** Test results report path. */
const reportPath = 'report/test/unit/results';

/** Unit test configuration. */
const config = {
	exit: true,
	recursive: true,
	require: 'ts-node/register',
	extension: ['ts'],
	spec: ['tests/**/*.test.*'],
	reporter: 'mochawesome',
	reporterOptions: `reportDir=${reportPath}, reportFilename=index.html, html=true, json=true, reportTitle=${reportTitle}, reportPageTitle=${reportTitle}, showSkipped=true`,
};

if (typeof require !== 'undefined' && require.main === module) {
	// When a script.
	log.debug(JSON.stringify(config, null, 2));
} else {
	// When a module.
	module.exports = config;
}
