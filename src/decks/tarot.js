
const { Deck } = require('../deck');
const { Card, MajorArcanaCard, TrumpCard } = require('../card');
const { swords, cups, coins, wands } = require ('../suits');

/**
 * @typedef TarotDeckOptions
 * @property trumpSuit {'traditional'|'modern'}
 */

exports.TarotDeck = class TarotDeck extends Deck {
	constructor(/** @type {TarotDeckOptions} */ { trumpSuit = 'modern' }) {
		super(generateDeck(trumpSuit));
	}
};

const suits = [ swords, cups, coins, wands ];

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
	{ value: 11, shortText: 'P',  longText: 'Page' },
	{ value: 12, shortText: 'KN', longText: 'Knight' },
	{ value: 13, shortText: 'Q',  longText: 'Queen' },
	{ value: 14, shortText: 'K',  longText: 'King' }
];

const generateDeck = (trumpSuit) => {
	const cards = [ ];

	// The minor arcana
	suits.forEach((suit) => {
		cardTypes.forEach(({ value, shortText, longText }) => {
			cards.push(new Card({ suit, value, shortText, longText }));
		});
	});

	// The major arcana
	for (let i = 0; i < 22; i++) {
		if (trumpSuit === 'modern') {
			cards.push(new TrumpCard(i));
		}

		else if (trumpSuit === 'traditional') {
			cards.push(new MajorArcanaCard(i));
		}
	}

	return cards;
};
