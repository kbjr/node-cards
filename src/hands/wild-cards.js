
const { hearts, spades } = require('../suits');
const { joker, two, jack, king } = require('../ranks');

/**
 * Locates joker cards, used for jokers wild rules
 *
 * @param card {Card}
 * @return {boolean}
 */
exports.jokers = (card) => {
	return card.rank === joker;
};

/**
 * Locates cards with a rank of two, used for deuces wild rules
 *
 * @param card {Card}
 * @return {boolean}
 */
exports.deuces = (card) => {
	return card.rank === two;
};

/**
 * Locates one-eyed jacks (jack of hearts or spades), used for one-eyed jacks wild rules
 *
 * @param card {Card}
 * @return {boolean}
 */
exports.oneEyedJacks = (card) => {
	return card.rank === jack && (card.suit === hearts || card.suit === spades);
};

/**
 * Locates suicidal kings (king of hearts), used for suicidal kings wild rules
 *
 * @param card {Card}
 * @return {boolean}
 */
exports.suicidalKings = (card) => {
	return card.rank === king && card.suit === hearts;
};
