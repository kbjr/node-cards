
const { useArc4, seedArc4 } = require('./rand');

const { Card, FoolCard, JokerCard, TrumpCard, MajorArcanaCard } = require('./card');
const { Suit, spades, hearts, diamonds, clubs, trump, swords, cups, coins, wands, majorArcana, none } = require('./suits');

const { Deck } = require('./deck');
const { StandardDeck } = require('./decks/standard');
const { MajorArcanaDeck } = require('./decks/major-arcana');
const { EuchreDeck } = require('./decks/euchre');
const { PinochelDeck } = require('./decks/pinochel');
const { BarajaDeck } = require('./decks/baraja');
const { TarotDeck } = require('./decks/tarot');

const unicode = require('./unicode');

module.exports = {
	useArc4,
	seedArc4,
	Card,
	FoolCard,
	JokerCard,
	TrumpCard,
	MajorArcanaCard,
	Deck,
	StandardDeck,
	MajorArcanaDeck,
	EuchreDeck,
	PinochelDeck,
	BarajaDeck,
	TarotDeck,
	unicode,
	Suit,
	suits: {
		spades, hearts, diamonds, clubs, trump,
		swords, cups, coins, wands, majorArcana,
		none
	}
};
