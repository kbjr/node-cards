
const { Card } = require('./card');
const { trump } = require ('../suits');
const { trumps } = require('../unicode');

exports.TrumpCard = class TrumpCard extends Card {
	constructor(value) {
		super({
			suit: trump,
			value,
			shortText: `Trump ${numerals[value]}`,
			longText: `${names[value]} (${numerals[value]})`
		});
	}

	toString() {
		return `<TrumpCard value=${this.value}>`;
	}

	get unicode() {
		return trumps[this.value];
	}
};

const numerals = [
	'0',
	'I',
	'II',
	'III',
	'IV',
	'V',
	'VI',
	'VII',
	'VIII',
	'IX',
	'X',
	'XI',
	'XII',
	'XIII',
	'XIV',
	'XV',
	'XVI',
	'XVII',
	'XVIII',
	'XIX',
	'XX',
	'XXI'
];

const names = [
	'The Fool',
	'The Individual',
	'Childhood',
	'Youth',
	'Maturity',
	'Old Age',
	'Morning',
	'Afternoon',
	'Evening',
	'Night',
	'Earth & Air',
	'Water & Fire',
	'Dance',
	'Shopping',
	'The Outdoors',
	'Visual Arts',
	'Spring',
	'Summer',
	'Autumn',
	'Winter',
	'The Game',
	'The Collective'
];
