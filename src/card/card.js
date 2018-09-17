
const { Deck } = require('../deck');
const { Rank } = require('../ranks');
const { Suit } = require('../suits');

const props = new WeakMap();

exports.Card = class Card {
	/**
	 * The main class for representing a single card
	 *
	 * @param suit {Suit}
	 * @param rank {Rank}
	 */
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

		this.suit = suit;
		this.rank = rank;

		Object.freeze(this);
	}
	
	toString() {
		return `<Card suit=${this.suit} value=${this.rank}>`;
	}

	/**
	 * @type {Deck}
	 */
	get deck() {
		return props.get(this).deck;
	}

	set deck(deck) {
		const _props = props.get(this);

		if (deck instanceof Deck) {
			if (_props.deck) {
				_props.deck = null;
				_props.deck.remove(this);
			}

			_props.deck = deck;
		}

		else if (deck == null) {
			_props.deck = null;
		}
	}

	/**
	 * @type {string|void}
	 */
	get unicode() {
		return this.suit.unicodeCards.get(this.rank);
	}
};
