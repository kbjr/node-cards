
const { Deck } = require('../deck');
const { MajorArcanaCard } = require('../card');

exports.MajorArcanaDeck = class MajorArcanaDeck extends Deck {
	constructor() {
		const cards = [ ];

		for (let i = 0; i < 22; i++) {
			cards.push(new MajorArcanaCard(i));
		}

		super(cards);
	}
};
