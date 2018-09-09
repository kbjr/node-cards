
const { arc4, shuffle } = require('rand-utils');

let useArc4 = false;

/**
 * Sets whether or not to use the ARC4 PRNG instead of the built-in Math.random
 *
 * @param newValue {boolean}
 * @return {void}
 */
exports.useArc4 = (newValue) => {
	useArc4 = !! newValue;
};

/**
 * Seeds the ARC4 PRNG with the given value
 *
 * @param seed {string}
 * @return {string}
 */
exports.seedArc4 = (seed) => arc4.seed(seed);

/**
 * Shuffles the given array, using either the ARC4 PRNG or with the built-in Math.random
 *
 * @param array {any[]}
 * @return {array}
 */
exports.shuffle = (array) => shuffle(array, useArc4 ? 'ARC4' : 'SIMPLE');
