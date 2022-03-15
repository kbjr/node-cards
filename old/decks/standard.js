
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');
const { ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king } = require('../ranks');

/**
 * @class StandardDeck
 * @extends Deck
 * @param options {Object?}
 * @param [options.jokers=0] {number|JokerCard[]} - Either a number of jokers to generate, or an array of jokers to add to the deck
 */
class StandardDeck extends Deck {
	constructor({ jokers = 0 } = { }) {
		super(generateDeck(jokers));
	}
}

exports.StandardDeck = StandardDeck;

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [ ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king ];

const generateDeck = (jokers) => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank));
		});
	});

	if (Array.isArray(jokers)) {
		if (! jokers.every((card) => card instanceof JokerCard)) {
			throw new Error('StandardDeck: Only joker cards may be provided in the jokers parameter');
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
