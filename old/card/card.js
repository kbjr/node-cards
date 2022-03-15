
const { Rank } = require('../rank');
const { Suit } = require('../suit');

const props = new WeakMap();

/**
 * @class Card
 * @param suit {Suit}
 * @param rank {Rank}
 * @description The main class for representing a single card
 */
class Card {
	constructor(suit, rank) {
		if (! (suit instanceof Suit)) {
			throw new Error('Card: Invalid card suit provided, must be an instance of Suit');
		}

		if (! (rank instanceof Rank)) {
			throw new Error('Card: Invalid card rank provided, must be an instance of Rank');
		}

		props.set(this, {
			deck: null
		});

		/** @member {Suit} */
		this.suit = suit;

		/** @member {Rank} */
		this.rank = rank;

		Object.freeze(this);
	}
	
	/**
	 * Returns a human-readable string representation of the card object
	 *
	 * eg. `"<Card suit=spades rank=Ace>"`
	 *
	 * @return {string}
	 */
	toString() {
		return `<Card suit=${this.suit.name} value=${this.rank.longName}>`;
	}

	/**
	 * @type {Deck}
	 * @description The deck instance that this card belongs to
	 */
	get deck() {
		return props.get(this).deck;
	}

	set deck(deck) {
		const { Deck } = require('../deck');

		const _props = props.get(this);

		if (deck instanceof Deck) {
			if (_props.deck) {
				_props.deck.remove(this);
				_props.deck = null;
			}

			_props.deck = deck;
		}

		else if (deck == null) {
			_props.deck = null;
		}
	}

	/**
	 * @type {string|void}
	 * @description The unicode character that represents this particular card if one exists
	 */
	get unicode() {
		return this.suit.unicodeCards.get(this.rank);
	}
}

exports.Card = Card;
