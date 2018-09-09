
const { Card } = require('./card');
const { none } = require ('../suits');
const { jokers } = require('../unicode');

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
	
		super({
			suit: none,
			value: 0,
			shortText: 'Joker',
			longText: 'Joker'
		});

		props.set(this, {
			color
		});
	}

	toString() {
		const { color } = props.get(this);

		return `<JokerCard color=${color}>`;
	}

	get unicode() {
		return jokers[props.get(this).color];
	}
};
