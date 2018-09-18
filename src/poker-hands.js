
const { JokerCard } = require('./card');

const jokersWild = (card) => {
	return card instanceof JokerCard;
};

exports.evaluateHand = (cards, { handSize = 5, isWild } = { }) => {
	// 
};

exports.containsFlush = (cards, { handSize = 5, wildCardSuits = [ ],  } = { }) => {
	let wildCards = 0;
	const cardsBySuit = { };
	const wildSuits = new Set(wildCardSuits);

	for (let i = 0; i < cards.length; i++) {
		// 
	}
};

const findWildCards = (cards, wildCardSuits) => {
	let wildCards = 0;
	const wildCardSuitSet = new Set(wildCardSuits);

	const nonWildCards = cards.slice();

	for (let i = 0; i < cards.length; i++) {
		if (wildCardSuitSet.has(card.suit)) {
			// 
		}
	}
};

const findFlush = ({ cards, wildCardCount, handSize }) => {
	const cardsBySuit = { };
};
