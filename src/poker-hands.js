
const { Joker } = require('./card');

// Ace also counts as low card for the purposes of a straight, but that is checked elsewhere
const cardOrder = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

const jokersWild = (card) => {
	// 
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
