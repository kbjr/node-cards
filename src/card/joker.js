
const { Card } = require('./card');
const { none } = require ('../suits');
const { Rank } = require('../rank');
const { joker } = require('../ranks');

const props = new WeakMap();

let preferedColor = 'black';

const colors = new Set([ 'black', 'white', 'red' ]);

exports.preferedJokerColor = (color) => {
	if (! colors.has(color)) {
		throw new Error('Unexpected color for joker; Must be "black", "white", or "red"');
	}
	
	preferedColor = color;
};

exports.JokerCard = class JokerCard extends Card {
	constructor(color = preferedColor) {
		if (! colors.has(color)) {
			throw new Error('Unexpected color for joker; Must be "black", "white", or "red"');
		}
	
		super({ suit: none, rank: joker });

		props.set(this, {
			color,
			rank: null
		});
	}

	toString() {
		const { color } = props.get(this);

		return `<JokerCard color=${color}>`;
	}

	get unicode() {
		return super.unicode.get(props.get(this).color);
	}

	get rank() {
		return props.get(this).rank;
	}

	set rank(rank) {
		if (rank instanceof Rank) {
			props.get(this).rank = rank;
		}
	}
};
