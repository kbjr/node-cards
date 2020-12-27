
const { Hand } = require('./hand');
const { jokers, deuces, oneEyedJacks, suicidalKings } = require('./wild-cards');
const { FiveOfAKind, FourOfAKind, FullHouse, ThreeOfAKind, TwoPair, Pair } = require('./x-of-a-kind');
const { standardHandRanking } = require('./ranking');

module.exports = {
	Hand,
	standardHandRanking,
	wilds: { jokers, deuces, oneEyedJacks, suicidalKings },
	hands: {
		FiveOfAKind, FourOfAKind, FullHouse, ThreeOfAKind, TwoPair, Pair
	}
};
