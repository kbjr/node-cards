
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');

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

const cardTypes = [
	{ value: 1,  shortText: 'A',  longText: 'Ace' },
	{ value: 2,  shortText: '2',  longText: '2' },
	{ value: 3,  shortText: '3',  longText: '3' },
	{ value: 4,  shortText: '4',  longText: '4' },
	{ value: 5,  shortText: '5',  longText: '5' },
	{ value: 6,  shortText: '6',  longText: '6' },
	{ value: 7,  shortText: '7',  longText: '7' },
	{ value: 8,  shortText: '8',  longText: '8' },
	{ value: 9,  shortText: '9',  longText: '9' },
	{ value: 10, shortText: '10', longText: '10' },
	{ value: 11, shortText: 'J',  longText: 'Jack' },
	{ value: 12, shortText: 'Q',  longText: 'Queen' },
	{ value: 13, shortText: 'K',  longText: 'King' }
];

const generateDeck = (jokers) => {
	const cards = [ ];

	suits.forEach((suit) => {
		cardTypes.forEach(({ value, shortText, longText }) => {
			cards.push(new Card({ suit, value, shortText, longText }));
		});
	});

	for (let i = 0; i < jokers; i++) {
		cards.push(new JokerCard());
	}

	return cards;
};
