
const { Deck } = require('../deck');
const { Card } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');

exports.PiquetDeck = class PiquetDeck extends Deck {
	constructor() {
		super(generateDeck());
	}
};

const suits = [ spades, hearts, diamonds, clubs ];

const cardTypes = [
	{ value: 1,  shortText: 'A',  longText: 'Ace' },
	{ value: 7,  shortText: '7',  longText: '7' },
	{ value: 8,  shortText: '8',  longText: '8' },
	{ value: 9,  shortText: '9',  longText: '9' },
	{ value: 10, shortText: '10', longText: '10' },
	{ value: 11, shortText: 'J',  longText: 'Jack' },
	{ value: 12, shortText: 'Q',  longText: 'Queen' },
	{ value: 13, shortText: 'K',  longText: 'King' }
];

const generateDeck = () => {
	const cards = [ ];

	suits.forEach((suit) => {
		cardTypes.forEach(({ value, shortText, longText }) => {
			cards.push(new Card({ suit, value, shortText, longText }));
		});
	});

	return cards;
};
