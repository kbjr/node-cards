
const unicodeSuits = exports.unicodeSuits = new Map();
const unicodeCards = exports.unicodeCards = new Map();

const Suit = exports.Suit = class Suit {
	/**
	 * The main class for representing a suit of cards
	 *
	 * @param name {string}
	 */
	constructor(name) {
		this.name = name;

		Object.freeze(this);
	}

	toString() {
		return `<Suit ${this.name}>`;
	}

	get unicode() {
		return unicodeSuits.get(this);
	}

	get unicodeCards() {
		return unicodeCards.get(this);
	}
};

// "Standard" Cards
exports.spades = new Suit('spades');
exports.hearts = new Suit('hearts');
exports.diamonds = new Suit('diamonds');
exports.clubs = new Suit('clubs');
exports.trump = new Suit('trump');

// Minor / Major Arcana (Tarot)
exports.swords = new Suit('swords');
exports.cups = new Suit('cups');
exports.coins = new Suit('coins');
exports.wands = new Suit('wands');
exports.majorArcana = new Suit('major arcana');

// None
exports.none = new Suit('none');
