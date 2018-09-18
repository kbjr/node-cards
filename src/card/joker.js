
const { Card } = require('./card');
const { none } = require ('../suits');
const { Rank } = require('../rank');
const { joker } = require('../ranks');

const props = new WeakMap();

let preferedColor = 'black';

const colors = new Set([ 'black', 'white', 'red' ]);

/**
 * Sets the prefered joker color to use when creating joker cards. Effects the unicode character
 * for the card.
 *
 * @param color {'red'|'black'|'white'}
 * @return void
 */
exports.preferedJokerColor = (color) => {
	if (! colors.has(color)) {
		throw new Error('Unexpected color for joker; Must be "black", "white", or "red"');
	}
	
	preferedColor = color;
};

/**
 * @class JokerCard
 * @extends Card
 * @param color {('red'|'black'|'white')?} - Defaults to whatever is set as the prefered color
 * @see preferedJokerColor
 * @description Special sub-class for representing Joker cards
 */
class JokerCard extends Card {
	constructor(color = preferedColor) {
		if (! colors.has(color)) {
			throw new Error('Unexpected color for joker; Must be "black", "white", or "red"');
		}
	
		super(none, joker);

		props.set(this, {
			color,
			rank: null
		});
	}

	/**
	 * Returns a human-readable string representation of the card object
	 *
	 * eg. `"<JokerCard color=red>"`
	 *
	 * @return {string}
	 */
	toString() {
		const { color } = props.get(this);

		return `<JokerCard color=${color}>`;
	}

	/**
	 * @type {string|void}
	 * @description The unicode character that represents this particular card if one exists
	 */
	get unicode() {
		return super.unicode.get(props.get(this).color);
	}

	// /** @type {Rank} */
	// get rank() {
	// 	return props.get(this).rank;
	// }

	// set rank(rank) {
	// 	if (rank instanceof Rank) {
	// 		props.get(this).rank = rank;
	// 	}
	// }
}

exports.JokerCard = JokerCard;
