
const { arc4, shuffle } = require('rand-utils');

let useArc4 = false;

/**
 * @module rand
 * @description
 *
 * Provides access to the randomization tools and config used for shuffling cards.
 *
 * ```javascript
 * const { rand } = require('cards');
 * ```
 *
 * The optional {@link https://en.wikipedia.org/wiki/RC4|ARC4 PRNG} can be enabled for
 * randomization if you want to be able to provide a seed value for the PRNG. Otherwise,
 * the built-in `Math.random` is used.
 *
 * ```javascript
 * const { rand } = require('cards');
 *
 * // Enable the ARC4 PRNG and provide a seed value
 * rand.useArc4(true);
 * rand.seedArc4('some seed value');
 * ```
 */

/**
 * Sets whether or not to use the ARC4 PRNG instead of the built-in Math.random
 *
 * @alias module:rand.useArc4
 * @param newValue {boolean}
 * @return {void}
 */
exports.useArc4 = (newValue) => {
	useArc4 = !! newValue;
};

/**
 * Seeds the ARC4 PRNG with the given value
 *
 * @alias module:rand.seedArc4
 * @param seed {string}
 * @return {string}
 */
exports.seedArc4 = (seed) => arc4.seed(seed);

/**
 * Shuffles the given array, using either the ARC4 PRNG or with the built-in `Math.random`. This
 * is the function used to shuffle decks of cards when any of the shuffle methods are called.
 *
 * @alias module:rand.shuffle
 * @param array {any[]}
 * @return {array}
 * @see Deck#shuffleAll
 * @see Deck#shuffleRemaining
 * @see Deck#shuffleDiscard
 * @see Deck#shuffleDeckAndDiscard
 */
exports.shuffle = (array) => shuffle(array, useArc4 ? 'ARC4' : 'SIMPLE');
