
import { unicodeCards, unicodeSuits } from './unicode';

/**
 * The main class for representing a suit of cards
 */
export class Suit {
	constructor(
		public readonly name: string
	) { }

	/**
	 * Returns a human-readable string representation of the suit object
	 *
	 * eg. `"<Suit name=spades>"`
	 */
	public toString() {
		return `<Suit name=${this.name}>`;
	}

	/**
	 * The unicode character that represents this particular suit
	 */
	public get unicode() {
		return unicodeSuits.get(this);
	}

	/**
	 * A map of ranks to the appropriate unicode character for that card
	 */
	public get unicodeCards() {
		return unicodeCards.get(this);
	}
}
