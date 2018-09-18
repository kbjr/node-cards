
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { swords, cups, coins, wands } = require ('../suits');
const { one, two, three, four, five, six, seven, eight, nine, jack, knight, king } = require('../ranks');

/**
 * @class BarajaDeck
 * @extends Deck
 * @param options {Object?}
 * @param [options.jokers=0] {number|JokerCard[]} - Either a number of jokers to generate, or an array of jokers to add to the deck
 * @param [options.stripped=false] {boolean} - Create a stripped deck (no 8 or 9 rank cards)
 */
class BarajaDeck extends Deck {
	constructor({ stripped = false, jokers = 0 }) {
		super(generateDeck(stripped, jokers));
	}
}

exports.BarajaDeck = BarajaDeck;

const suits = [ swords, cups, coins, wands ];
const ranks = [ one, two, three, four, five, six, seven, eight, nine, jack, knight, king ];

const generateDeck = (stripped, jokers) => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			if (stripped && (rank.shortName === 8 || rank.shortName === 9)) {
				return;
			}

			cards.push(new Card(suit, rank));
		});
	});

	if (Array.isArray(jokers)) {
		if (! jokers.every((card) => card instanceof JokerCard)) {
			throw new Error('BarajaDeck: Only joker cards may be provided in the jokers parameter');
		}

		cards.push(...jokers);
	}

	else {
		for (let i = 0; i < jokers; i++) {
			cards.push(new JokerCard());
		}
	}

	return cards;
};
