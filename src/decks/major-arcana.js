
const { Deck } = require('../deck');
const { Card } = require('../card');
const { majorArcana } = require('../suits');
const {
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10,
	arcana11, arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21
} = require('../ranks');

const ranks = [
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10,
	arcana11, arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21
];

/**
 * @class MajorArcanaDeck
 * @extends Deck
 */
class MajorArcanaDeck extends Deck {
	constructor() {
		const cards = ranks.map((rank) => {
			return new Card(majorArcana, rank);
		});

		super(cards);
	}
}

exports.MajorArcanaDeck = MajorArcanaDeck;
