
const { suits, spades, hearts, diamonds, clubs, jokers, trumps } = require('./unicode');

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

exports.joker = new Suit({
	name: 'joker',
	unicodeSuit: 'joker',
	unicodeCards: jokers
});

exports.trump = new Suit({
	name: 'trump',
	unicodeSuit: 'trump',
	unicodeCards: trumps
});

exports.none = new Suit({
	name: '',
	unicodeSuit: '',
	unicodeCards: { }
});
