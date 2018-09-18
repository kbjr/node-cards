
const unicodeSuits = exports.unicodeSuits = new Map();
const unicodeCards = exports.unicodeCards = new Map();

/**
 * @class
 *
 * The main class for representing a suit of cards
 *
 * @param name {string}
 */
class Suit {
	constructor(name) {
		/** @member {string} */
		this.name = name;

		Object.freeze(this);
	}

	/**
	 * Returns a human-readable string representation of the suit object
	 *
	 * eg. `"<Suit name=spades>"`
	 *
	 * @methodof Suit
	 * @return {string}
	 */
	toString() {
		return `<Suit name=${this.name}>`;
	}

	/**
	 * @type {string}
	 * @description The unicode character that represents this particular suit
	 */
	get unicode() {
		return unicodeSuits.get(this);
	}

	/**
	 * @type {Map.<Rank, string|Map.<string, string>>}
	 * @description A map of ranks to the appropriate unicode character for that card
	 */
	get unicodeCards() {
		return unicodeCards.get(this);
	}
}

exports.Suit = Suit;
