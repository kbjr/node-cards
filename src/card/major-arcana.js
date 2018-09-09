
const { Card } = require('./card');
const { trump } = require ('../suits');
const { majorArcana } = require('../unicode');

exports.MajorArcanaCard = class MajorArcanaCard extends Card {
	constructor(value) {
		super({
			suit: trump,
			value,
			shortText: numerals[value],
			longText: `${names[value]} (${numerals[value]})`
		});
	}

	toString() {
		return `<MajorArcanaCard value=${this.value}>`;
	}

	get unicode() {
		return majorArcana[this.value];
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
	'The Magician',
	'The High Priestess',
	'The Empress',
	'The Emperor',
	'The Hierophant',
	'The Lovers',
	'The Chariot',
	'Strength',
	'The Hermit',
	'Wheel of Fortune',
	'Justice',
	'The Hanged Man',
	'Death',
	'Temperance',
	'The Devil',
	'The Tower',
	'The Star',
	'The Moon',
	'The Sun',
	'Judgement',
	'The World'
];
