
const { findHighCard } = require('./ranking');

/**
 * @typedef HandOptions
 * @property cards {Card[]}
 * @property rank {rank|rank[]=}
 * @property highCard {Card=}
 */

exports.Hand = class Hand {
	constructor(/** @type {HandOptions} */ { cards, rank, highCard, acesHigh }) {
		this.cards = cards;
		this.highCard = highCard || findHighCard(cards, acesHigh);
		this.rank = rank;

		Object.freeze(this);
	}
};

exports.HighCard = class HighCard extends exports.Hand {
	constructor({ cards, acesHigh }) {
		const highCard = findHighCard(cards, acesHigh);

		super({
			cards,
			highCard,
			rank: highCard.rank
		});
	}
};
