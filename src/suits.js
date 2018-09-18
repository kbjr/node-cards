
const { Suit } = require('./suit');

/**
 * @module suits
 * @description
 *
 * Provides represesntations for the suits of cards (eg. "spades" or "hearts").
 *
 * ```javascript
 * const { suits } = require('cards');
 * ```
 */


// "Standard" Cards

/**
 * @alias module:suits.spades
 * @type {Suit}
 * @property name {'spades'}
 */
exports.spades = new Suit('spades');

/**
 * @alias module:suits.hearts
 * @type {Suit}
 * @property name {'hearts'}
 */
exports.hearts = new Suit('hearts');

/**
 * @alias module:suits.diamonds
 * @type {Suit}
 * @property name {'diamonds'}
 */
exports.diamonds = new Suit('diamonds');

/**
 * @alias module:suits.clubs
 * @type {Suit}
 * @property name {'clubs'}
 */
exports.clubs = new Suit('clubs');

/**
 * @alias module:suits.trump
 * @type {Suit}
 * @property name {'trump'}
 */
exports.trump = new Suit('trump');



// Minor / Major Arcana (Tarot)


/**
 * @alias module:suits.swords
 * @type {Suit}
 * @property name {'swords'}
 */
exports.swords = new Suit('swords');

/**
 * @alias module:suits.cups
 * @type {Suit}
 * @property name {'cups'}
 */
exports.cups = new Suit('cups');

/**
 * @alias module:suits.coins
 * @type {Suit}
 * @property name {'coins'}
 */
exports.coins = new Suit('coins');

/**
 * @alias module:suits.wands
 * @type {Suit}
 * @property name {'wands'}
 */
exports.wands = new Suit('wands');

/**
 * @alias module:suits.majorArcana
 * @type {Suit}
 * @property name {'major arcana'}
 */
exports.majorArcana = new Suit('major arcana');



// None

/**
 * @alias module:suits.none
 * @type {Suit}
 * @property name {'none'}
 */
exports.none = new Suit('none');
