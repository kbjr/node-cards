
const { Hand } = require('./hand');
const { ace, king } = require('../ranks');
const { acesLowRankOrder, acesHighRankOrder, findHighCard } = require('./ranking');

exports.FiveOfAKind = class FiveOfAKind extends Hand {
	static find({ wildCards, bugCards, groupsBySize, aces }) {
		const acesHigh = aces !== 'low';

		let found;
		const ranks = acesHigh ? acesHighRankOrder : acesLowRankOrder;

		// If you've got five wild cards, you've automatically got five of a kind
		if (wildCards.length + bugCards.length >= 5) {
			// If aces are low, and you've got enough full wilds, go five of a kind kings
			if (! acesHigh && wildCards.length >= 5) {
				const cards = [ ...wildCards ];

				cards.length = 5;

				found = new FiveOfAKind({
					cards,
					rank: king,
					highCard: cards[0]
				});
			}

			// Otherwise, go five of a kind aces
			else {
				const cards = [ ...bugCards, ...wildCards ];

				cards.length = 5;

				found = new FiveOfAKind({
					cards,
					rank: ace,
					highCard: cards[0]
				});
			}
		}

		groupsBySize[5].forEach((cards) => {
			const rank = cards[0].rank;
			const rankIndex = ranks.indexOf(rank);

			// If this five of a kind is better than any we've previously seen, take it
			if (! found || rankIndex >= ranks.indexOf(found.rank)) {
				// 
			}
		});
	}
};

const findHighestRank = (cards, acesHigh) => {
	// 
};












exports.findLargestRankGroup = (naturalCardsByRank, wildCards, aces) => {
	let largestGroup;

	naturalCardsByRank.forEach((cards, rank) => {
		// 
	});
};
