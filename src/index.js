
const { useArc4, seedArc4 } = require('./rand');

const { Card, JokerCard } = require('./card');
const { Suit, spades, hearts, diamonds, clubs, trump, swords, cups, coins, wands, majorArcana, none } = require('./suits');
const {
	Rank,
	ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, joker, one, cavalier, knight, page,
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10, arcana11,
	arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21,
	trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10, trump11,
	trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
} = require('./ranks');

const { Deck } = require('./deck');
const { StandardDeck, MajorArcanaDeck, EuchreDeck, PinochelDeck, BarajaDeck, TarotDeck, PiquetDeck } = require('./decks');

// Always make sure this is imported last, as it has to populate maps defined in the suits file
const unicode = require('./unicode');

module.exports = {
	useArc4,
	seedArc4,
	Card,
	JokerCard,
	Deck,
	decks: {
		StandardDeck, MajorArcanaDeck, EuchreDeck,
		PinochelDeck, BarajaDeck, TarotDeck, PiquetDeck
	},
	Suit,
	suits: {
		spades, hearts, diamonds, clubs, trump,
		swords, cups, coins, wands, majorArcana,
		none
	},
	Rank,
	ranks: {
		ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, joker, one, cavalier, knight, page,
		arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10, arcana11,
		arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21,
		trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10, trump11,
		trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
	},
	unicode
};
