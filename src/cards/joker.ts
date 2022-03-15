
import { none } from '../suits';
import { Card } from './_card';
import { standard } from '../ranks';
import { unicodeJokers } from '../suits/unicode';

export enum jokerColor {
	black = 'black',
	white = 'white',
	red   = 'red',
}

let preferedColor: jokerColor = jokerColor.black;

/**
 * Sets the prefered joker color to use when creating joker cards. Effects the unicode character
 * for the card.
 * 
 * @param color 
 */
export function preferedJokerColor(color: jokerColor) {
	preferedColor = color;
}

/**
 * Special sub-class for representing Joker cards
 * 
 * @param color Controls the specific unicode character used to represent the card; Defaults
 *   to whatever is set as the prefered color (see `preferedJokerColor()`)
 */
export class JokerCard extends Card {
	constructor(
		public readonly color: jokerColor = preferedColor
	) {
		super(none, standard.joker);
	}

	/**
	 * Returns a human-readable string representation of the card object
	 *
	 * eg. `"<JokerCard color=red>"`
	 */
	public toString() {
		return `<JokerCard color=${this.color}>`;
	}
	
	public get unicode() {
		return unicodeJokers.get(this.color);
	}
}
