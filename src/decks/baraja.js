
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { swords, cups, coins, wands } = require ('../suits');

/**
 * @typedef BarajaDeckOptions
 * @property stripped {boolean=false}
 * @property jokers {number=0}
 */

exports.BarajaDeck = class BarajaDeck extends Deck {
	constructor(/** @type {BarajaDeckOptions} */ { stripped = false, jokers = 0 }) {
		super(generateDeck(stripped, jokers));
	}
};

const suits = [ swords, cups, coins, wands ];

const cardTypes = [
	{ value: 1,  shortText: '1',  longText: '1' },
	{ value: 2,  shortText: '2',  longText: '2' },
	{ value: 3,  shortText: '3',  longText: '3' },
	{ value: 4,  shortText: '4',  longText: '4' },
	{ value: 5,  shortText: '5',  longText: '5' },
	{ value: 6,  shortText: '6',  longText: '6' },
	{ value: 7,  shortText: '7',  longText: '7' },
	{ value: 8,  shortText: '8',  longText: '8' },
	{ value: 9,  shortText: '9',  longText: '9' },
	{ value: 10, shortText: 'J',  longText: 'Jack' },
	{ value: 11, shortText: 'KN', longText: 'Knight' },
	{ value: 12, shortText: 'K',  longText: 'King' },
];

const generateDeck = (stripped, jokers) => {
	const cards = [ ];

	suits.forEach((suit) => {
		cardTypes.forEach(({ value, shortText, longText }) => {
			if (stripped && (value === 8 || value === 9)) {
				return;
			}

			cards.push(new Card({ suit, value, shortText, longText }));
		});
	});

	for (let i = 0; i < jokers; i++) {
		cards.push(new JokerCard());
	}

	return cards;
};
