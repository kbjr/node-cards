
const { Hand } = require('./hand');
const { Card } = require('../card');
const { standardHandRanking } = require('./ranking');

/**
 * @typedef HandEvaluatorOptions
 * @property wilds {Card[]}
 * @property bugs {Card[]}
 * @property aces {'low'|'high'|'split'|'low-or-high'}
 * @property handRanking {Function.<Hand>[]}
 */

const props = new WeakMap();

/**
 * Used to evaluate a set of cards for poker hands
 *
 * wilds - A list of all cards that should be treated as full wild cards
 * bugs - A list of all cards that should be treated as [bug cards](https://en.wikipedia.org/wiki/Bug_\(poker\))
 * aces - The rule for Ace ranking; "high", "low", "high-or-low", or "split"
 * handRanking - An array of Hand classes, in order from best to worst, to determine what the best hand is
 *
 * @class HandEvaluator
 */
exports.HandEvaluator = class HandEvaluator {
	constructor(/** @type {HandEvaluatorOptions} */ { wilds = [ ], bugs = [ ], aces = 'low-or-high', handRanking = standardHandRanking }) {
		props.set(this, {
			wilds: new Set(wilds),
			bugs: new Set(bugs),
			aces,
			handRanking
		});
	}

	evaluateHand(cards) {
		const { wilds, bugs, aces, handRanking } = props.get(this);
		const { naturalCards, wildCards, bugCards } = separateWildCards(cards, wilds, bugs);

		const { cardsByRank, cardsBySuit } = separateCardsByRankAndSuit(naturalCards);
		const { groupsBySize } = findRankGroupings(cardsByRank);

		const handDetails = new HandDetail({ cards, naturalCards, wildCards, bugCards, cardsByRank, cardsBySuit, groupsBySize, aces });

		let hand;

		handRanking.some((HandType) => {
			hand = HandType.find(handDetails);

			if (hand) {
				return true;
			}
		});

		return hand;
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
 * @return {{ cardsByRank: Map.<Rank, Card[]>, cardsBySuit: Map.<Rank, Card[]> }}
 */
const separateCardsByRankAndSuit = (cards) => {
	const cardsByRank = new Map();
	const cardsBySuit = new Map();

	cards.forEach((card) => {
		const { rank, suit } = card;

		if (! cardsByRank.has(rank)) {
			cardsByRank.set(rank, [ ]);
		}

		if (! cardsBySuit.has(suit)) {
			cardsBySuit.set(suit, [ ]);
		}

		cardsByRank.get(rank).push(card);
		cardsBySuit.get(suit).push(card);
	});

	return { cardsByRank, cardsBySuit };
};

/**
 * Organizes cards by the number of cards for that rank that exists (ie. it finds pairs, three of a kinds, etc)
 *
 * @param naturalCardsByRank {Map.<Rank, Card[]>}
 * @return {{ groupsBySize: { [size: number]: Card[][] } }}
 */
const findRankGroupings = (naturalCardsByRank) => {
	const groupsBySize = {
		'5': [ ],
		'4': [ ],
		'3': [ ],
		'2': [ ]
	};

	naturalCardsByRank.forEach((cards/*, rank*/) => {
		if (cards.length > 1) {
			groupsBySize[cards.length].push(cards);
		}
	});

	return { groupsBySize };
};

/**
 * Contains some general metadata about a hand of cards, used for determining the value
 * of the hand.
 *
 * @class HandDetail
 */
class HandDetail {
	constructor({ cards, naturalCards, wildCards, bugCards, cardsByRank, cardsBySuit, groupsBySize, aces }) {
		this.cards = cards;
		this.naturalCards = naturalCards;
		this.wildCards = wildCards;
		this.bugCards = bugCards;
		this.cardsByRank = cardsByRank;
		this.cardsBySuit = cardsBySuit;
		this.groupsBySize = groupsBySize;
		this.aces = aces;

		Object.freeze(this);
	}
}
