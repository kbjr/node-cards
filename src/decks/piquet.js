
const { Deck } = require('../deck');
const { Card } = require('../card');
const { spades, hearts, diamonds, clubs } = require ('../suits');
const { ace, seven, eight, nine, ten, jack, queen, king } = require('../ranks');

exports.PiquetDeck = class PiquetDeck extends Deck {
	constructor() {
		super(generateDeck());
	}
};

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [ ace, seven, eight, nine, ten, jack, queen, king ];

const generateDeck = () => {
	const cards = [ ];

	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank));
		});
	});

	return cards;
};
