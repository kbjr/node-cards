
const { suits, spades, hearts, diamonds, clubs, trumps, majorArcana } = require('./unicode');

const Suit = exports.Suit = class Suit {
	constructor({ name, unicodeSuit, unicodeCards }) {
		this.name = name;
		this.unicode = unicodeSuit;
		this.unicodeCards = unicodeCards;

		Object.freeze(this);
	}

	toString() {
		return `<Suit ${this.name}>`;
	}
};



// "Standard" Cards

exports.spades = new Suit({
	name: 'spades',
	unicodeSuit: suits.spade,
	unicodeCards: spades
});

exports.hearts = new Suit({
	name: 'hearts',
	unicodeSuit: suits.heart,
	unicodeCards: hearts
});

exports.diamonds = new Suit({
	name: 'diamonds',
	unicodeSuit: suits.diamond,
	unicodeCards: diamonds
});

exports.clubs = new Suit({
	name: 'clubs',
	unicodeSuit: suits.club,
	unicodeCards: clubs
});

exports.trump = new Suit({
	name: 'trump',
	unicodeSuit: 'trump',
	unicodeCards: trumps
});



// Minor / Major Arcana (Tarot)

exports.swords = new Suit({
	name: 'swords',
	unicodeSuit: suits.sword,
	unicodeCards: { }
});

exports.cups = new Suit({
	name: 'cups',
	unicodeSuit: suits.cup,
	unicodeCards: { }
});

exports.coins = new Suit({
	name: 'coins',
	unicodeSuit: suits.coin,
	unicodeCards: { }
});

exports.wands = new Suit({
	name: 'wands',
	unicodeSuit: suits.wand,
	unicodeCards: { }
});

exports.majorArcana = new Suit({
	name: 'major arcana',
	unicodeSuit: 'major arcana',
	unicodeCards: majorArcana
});



// None

exports.none = new Suit({
	name: '',
	unicodeSuit: '',
	unicodeCards: { }
});
