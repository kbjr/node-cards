
const { Deck } = require('../deck');
const { Card } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');
const { ace, nine, ten, jack, queen, king } = require('../ranks');

/**
 * @class PinochelDeck
 * @extends Deck
 */
class PinochelDeck extends Deck {
	constructor() {
		super(generateDeck());
	}
}

exports.PinochelDeck = PinochelDeck;

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [ ace, nine, ten, jack, queen, king ];

const generateDeck = () => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank));
			cards.push(new Card(suit, rank));
		});
	});

	return cards;
};
