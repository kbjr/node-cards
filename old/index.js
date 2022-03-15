
const { useArc4, seedArc4, shuffle } = require('./rand');

const { Card, JokerCard, preferedJokerColor } = require('./card');
const { spades, hearts, diamonds, clubs, trump, swords, cups, coins, wands, majorArcana, none } = require('./suits');
const { Suit } = require('./suit');
const { Rank } = require('./rank');
const {
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

/**
 * @module cards
 * @description
 *
 * The main import
 *
 * ```javascript
 * const cards = require('cards');
 * ```
 */
module.exports = {
	/**
	 * @alias module:cards.rand
	 * @see module:rand
	 */
	rand: {
		useArc4,
		seedArc4,
		shuffle
	},
	/**
	 * @member Card
	 * @see Card
	 */
	Card,
	/**
	 * @member JokerCard
	 * @see JokerCard
	 */
	JokerCard,
	/**
	 * @member preferedJokerColor
	 * @see preferedJokerColor
	 */
	preferedJokerColor,
	/**
	 * @member Deck
	 * @see Deck
	 */
	Deck,
	/**
	 * @alias module:cards.decks
	 * @see module:decks
	 */
	decks: {
		StandardDeck, MajorArcanaDeck, EuchreDeck,
		PinochelDeck, BarajaDeck, TarotDeck, PiquetDeck
	},
	/**
	 * @member Suit
	 * @see Suit
	 */
	Suit,
	/**
	 * @alias module:cards.suits
	 * @see module:suits
	 */
	suits: {
		spades, hearts, diamonds, clubs, trump,
		swords, cups, coins, wands, majorArcana,
		none
	},
	/**
	 * @member Rank
	 * @see Rank
	 */
	Rank,
	/**
	 * @alias module:cards.ranks
	 * @see module:ranks
	 */
	ranks: {
		ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, joker, one, cavalier, knight, page,
		arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10, arcana11,
		arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21,
		trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10, trump11,
		trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
	},
	/**
	 * @alias module:cards.unicode
	 * @see module:unicode
	 */
	unicode
};
