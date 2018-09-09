
const { Card } = require('../card');
const { jokers, deuces, oneEyedJacks, suicidalKings } = require('./wild-cards');

exports.wilds = { jokers, deuces, oneEyedJacks, suicidalKings };

/**
 * @typedef HandEvaluatorOptions
 * @property wilds {Card[]}
 * @property bugs {Card[]}
 */

const props = new WeakMap();

/**
 * Used to evaluate a set of cards for poker hands
 *
 * wilds - A list of all cards that should be treated as full wild cards
 * bugs - A list of all cards that should be treated as [bug cards](https://en.wikipedia.org/wiki/Bug_\(poker\))
 *
 * @class HandEvaluator
 */
exports.HandEvaluator = class HandEvaluator {
	constructor(/** @type {HandEvaluatorOptions} */ { wilds = [ ], bugs = [ ] }) {
		props.set(this, {
			wilds: new Set(wilds),
			bugs: new Set(bugs)
		});
	}

	evaluateHand(cards) {
		const { wilds, bugs } = props.get(this);
		const { naturalCards, wildCards, bugCards } = separateWildCards(cards, wilds, bugs);

		const cardsByRank = separateCardsByRank(naturalCards, wildCards, bugCards);
	}
};

/**
 * Separates out a hand of cards into 3 lists: natural cards, wild cards, and bug cards
 *
 * @param cards {Card[]}
 * @param wildCardSet {Set.<Card>}
 * @param bugCardSet {Set.<Card>}
 * @return {{ naturalCards: Card[], wildCards: Card[], bugCards: Card[] }}
 */
const separateWildCards = (cards, wildCardSet, bugCardSet) => {
	let wildCards = [ ];
	let bugCards = [ ];

	const naturalCards = cards.slice();

	for (let i = 0; i < naturalCards.length; i++) {
		const card = naturalCards[i];

		if (wildCardSet.has(card)) {
			wildCards.push(card);
			naturalCards.splice(i--, 1);
		}

		else if (bugCardSet.has(card)) {
			bugCards.push(card);
			naturalCards.splice(i--, 1);
		}
	}

	return {
		naturalCards,
		wildCards,
		bugCards
	};
};

/**
 * Separates cards into buckets by rank
 *
 * @param cards {Card[]}
 * @return {string}
 */
const separateCardsByRank = (cards) => {
	const cardsByRank = {
		'2': [ ],
		'3': [ ],
		'4': [ ],
		'5': [ ],
		'6': [ ],
		'7': [ ],
		'8': [ ],
		'9': [ ],
		'10': [ ],
		'J': [ ],
		'Q': [ ],
		'K': [ ]
	};
};
