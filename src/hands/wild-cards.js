
const { JokerCard } = require('../card');
const { hearts, spades } = require('../suits');

/**
 * Locates joker cards, used for joker-wild rules
 *
 * @param card {Card}
 * @return {boolean}
 */
exports.jokers = (card) => {
	return card instanceof JokerCard;
};

exports.deuces = (card) => {
	return card.value === 2;
};

exports.oneEyedJacks = (card) => {
	return card.name === 'J' && (card.suit === hearts || card.suit === spades);
};

exports.suicidalKings = (card) => {
	return card.name === 'K' && card.suit === hearts;
};
