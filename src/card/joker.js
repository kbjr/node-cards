
const { Card } = require('./card');
const { none } = require ('../suits');
const { jokers } = require('../unicode');

const props = new WeakMap();

exports.FoolCard = class FoolCard extends Card {
	constructor(color) {
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
