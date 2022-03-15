
const { Deck } = require('../deck');
const { Card } = require('../card');
const { swords, cups, coins, wands, trump, majorArcana } = require ('../suits');
const {
	ace, two, three, four, five, six, seven, eight, nine, ten, page, jack, queen, king,
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10,
	arcana11, arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21,
	trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10,
	trump11, trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
} = require('../ranks');

/**
 * @class TarotDeck
 * @extends Deck
 * @param options {Object?}
 * @param [options.trumpSuit='modern'] {('modern'|'traditional')?} - Which style of trump suit should be used
 */
class TarotDeck extends Deck {
	constructor(/** @type {TarotDeckOptions} */ { trumpSuit = 'modern' }) {
		super(generateDeck(trumpSuit));
	}
};

exports.TarotDeck = TarotDeck;

const suits = [ swords, cups, coins, wands ];
const ranks = [ ace, two, three, four, five, six, seven, eight, nine, ten, page, jack, queen, king ];
const trumpRanks = [
	trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10,
	trump11, trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
];
const arcanaRanks = [
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10,
	arcana11, arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21
];

const generateDeck = (trumpSuit) => {
	const cards = [ ];

	// The minor arcana
	suits.forEach((suit) => {
		ranks.forEach((rank) => {
			cards.push(new Card(suit, rank));
		});
	});

	// The major arcana
	if (trumpSuit === 'modern') {
		trumpRanks.forEach((rank) => {
			cards.push(new Card(trump, rank));
		});
	}

	else if (trumpSuit === 'traditional') {
		arcanaRanks.forEach((rank) => {
			cards.push(new Card(majorArcana, rank));
		});
	}

	return cards;
};
