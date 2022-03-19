
import { Deck } from './_deck';
import { Card } from '../cards';
import { RandomGenerator } from '../shuffle';
import { majorArcana } from '../suits';
import { majorArcana as ma } from '../ranks';

export interface MajorArcanaDeckOpts {
	rng?: RandomGenerator;
}

const arcanaRanks = [
	ma.arcana0, ma.arcana1, ma.arcana2, ma.arcana3, ma.arcana4, ma.arcana5, ma.arcana6, ma.arcana7,
	ma.arcana8, ma.arcana9, ma.arcana10, ma.arcana11, ma.arcana12, ma.arcana13, ma.arcana14,
	ma.arcana15, ma.arcana16, ma.arcana17, ma.arcana18, ma.arcana19, ma.arcana20, ma.arcana21
];

export class MajorArcanaDeck extends Deck {
	constructor(opts: MajorArcanaDeckOpts = { }) {
		const cards = MajorArcanaDeck.generateCards();

		super({
			cards,
			rng: opts.rng
		});
	}

	private static generateCards() {
		const cards: Card[] = [ ];

		arcanaRanks.forEach((rank) => {
			cards.push(new Card(majorArcana, rank));
		});
		
		return cards;
	}
}
