
const { Card } = require('./card');
const { none } = require ('../suits');
const { fool } = require('../unicode');

exports.FoolCard = class FoolCard extends Card {
	constructor() {
		super({
			suit: none,
			value: 0,
			shortText: 'Fool',
			longText: 'The Fool'
		});
	}

	toString() {
		return '<FoolCard>';
	}

	get unicode() {
		return fool;
	}
};
