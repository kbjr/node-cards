
const { max, indexArray } = require('../utils');
const { HighCard } = require('./hand');
const { StraightFlush, Flush, Straight } = require('./straights-and-flushes');
const { FiveOfAKind, FourOfAKind, FullHouse, ThreeOfAKind, TwoPair, Pair } = require('./x-of-a-kind');
const { Rank, ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king } = require('../ranks');

exports.acesLowRankOrder = indexArray([ ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king ]);
exports.acesHighRankOrder = indexArray([ two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace ]);

// TODO - Find a way to rank wild cards as the card they are actually representing

exports.findHighCard = (cards, acesHigh) => {
	const ranks = acesHigh
		? exports.acesHighRankOrder
		: exports.acesLowRankOrder;
	
	return max(cards, (card) => getRank(card, ranks));
};

exports.compareCards = (cardA, cardB, acesHigh) => {
	const ranks = acesHigh
		? exports.acesHighRankOrder
		: exports.acesLowRankOrder;

	return getRank(cardA, ranks) - getRank(cardB, ranks);
};

exports.standardHandRanking = Object.freeze([
	FiveOfAKind,
	StraightFlush,
	FourOfAKind,
	FullHouse,
	Flush,
	Straight,
	ThreeOfAKind,
	TwoPair,
	Pair,
	HighCard
]);

// exports.lowballHandRanking = Object.freeze([
// 	// 
// ]);

const getRank = (cardOrRank, ranks) => {
	if (cardOrRank instanceof Rank) {
		return ranks.get(cardOrRank);
	}

	return ranks.get(cardOrRank.rank);
};
