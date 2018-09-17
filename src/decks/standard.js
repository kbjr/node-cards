
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');
const { ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king } = require('../ranks');

/**
 * @typedef StandardDeckOptions
 * @property jokers {number=0}
 */

exports.StandardDeck = class StandardDeck extends Deck {
	constructor(/** @type {StandardDeckOptions} */ { jokers = 0 } = { }) {
		super(generateDeck(jokers));
	}
};

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [ ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king ];

const generateDeck = (jokers) => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank));
		});
	});

	for (let i = 0; i < jokers; i++) {
		cards.push(new JokerCard());
	}

	return cards;
};
