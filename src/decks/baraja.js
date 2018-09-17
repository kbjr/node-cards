
const { Deck } = require('../deck');
const { Card, JokerCard } = require('../card');
const { swords, cups, coins, wands } = require ('../suits');
const { one, two, three, four, five, six, seven, eight, nine, jack, knight, king } = require('../ranks');

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

	for (let i = 0; i < jokers; i++) {
		cards.push(new JokerCard());
	}

	return cards;
};
