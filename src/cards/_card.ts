
import { Deck } from '../decks';
import { Rank } from '../ranks';
import { Suit } from '../suits';

export class Card {
	private _deck: Deck;

	constructor(
		public readonly suit: Suit,
		public readonly rank: Rank
	) { }

	/**
	 * Returns a human-readable string representation of the card object
	 *
	 * eg. `"<Card suit=spades rank=Ace>"`
	 *
	 * @return {string}
	 */
	public toString() {
		return `<Card suit=${this.suit.name} value=${this.rank.name}>`;
	}

	/**
	 * The deck instance that this card belongs to
	 */
	public get deck() {
		return this._deck;
	}

	set deck(deck) {
		if (deck instanceof Deck) {
			if (this._deck) {
				this._deck.remove(this);
				this._deck = null;
			}

			this._deck = deck;
		}

		else if (deck == null) {
			this._deck = null;
		}

		else {
			throw new Error('Attempted to set `deck` to an invalid value; Must be an instance of Deck, or null');
		}
	}

	/**
	 * The unicode character that represents this particular card if one exists
	 */
	public get unicode() {
		return this.suit.unicodeCards.get(this.rank);
	}
}
