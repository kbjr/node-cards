
const { Deck } = require('../deck');
const { trump } = require ('../suits');
const { Card, FoolCard } = require('../card');

exports.MajorArcana = class MajorArcana extends Deck {
	constructor() {
		super(exports.majorArcana({ includeFool: true }));
	}
};

exports.fool = () => new FoolCard();

exports.majorArcana = ({ includeFool = false } = { }) => {
	const cards = [ ];

	if (includeFool) {
		cards.push(exports.fool());
	}

	for (let i = 1; i < 22; i++) {
		cards.push(trumpCard(i));
	}

	return cards;
};

const trumpCard = (value) => new Card({
	suit: trump,
	value,
	shortText: numerals[value],
	longText: `${names[value]} (${numerals[value]})`
});

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
