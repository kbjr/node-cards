
import { Deck } from './_deck';
import { Card } from '../cards';
import { RandomGenerator } from '../shuffle';
import { swords, cups, coins, wands, trump, majorArcana } from '../suits';
import { standard, trump as t, majorArcana as ma } from '../ranks';

export interface TarotDeckOpts {
	rng?: RandomGenerator;
	/** Which style of trump suit should be used */
	trumpSuit?: TarotTrumpSuit;
}

export enum TarotTrumpSuit {
	modern      = 'modern',
	traditional = 'traditional',
}

const suits = [ swords, cups, coins, wands ];
const ranks = [
	standard.ace,
	standard.nine,
	standard.ten,
	standard.jack,
	standard.queen,
	standard.king
];

const trumpRanks = [
	t.trump0, t.trump1, t.trump2, t.trump3, t.trump4, t.trump5, t.trump6, t.trump7,
	t.trump8, t.trump9, t.trump10, t.trump11, t.trump12, t.trump13, t.trump14,
	t.trump15, t.trump16, t.trump17, t.trump18, t.trump19, t.trump20, t.trump21
];

const arcanaRanks = [
	ma.arcana0, ma.arcana1, ma.arcana2, ma.arcana3, ma.arcana4, ma.arcana5, ma.arcana6, ma.arcana7,
	ma.arcana8, ma.arcana9, ma.arcana10, ma.arcana11, ma.arcana12, ma.arcana13, ma.arcana14,
	ma.arcana15, ma.arcana16, ma.arcana17, ma.arcana18, ma.arcana19, ma.arcana20, ma.arcana21
];

export class TarotDeck extends Deck {
	constructor(opts: TarotDeckOpts = { }) {
		const cards = TarotDeck.generateCards(opts.trumpSuit || TarotTrumpSuit.modern);

		super({
			cards,
			rng: opts.rng
		});
	}

	private static generateCards(trumpSuit: TarotTrumpSuit) {
		const cards: Card[] = [ ];

		// The minor arcana
		suits.forEach((suit) => {
			ranks.forEach((rank) => {
				cards.push(new Card(suit, rank));
			});
		});
	
		// The major arcana
		if (trumpSuit === 'modern') {
			trumpRanks.forEach((rank) => {
				cards.push(new Card(trump, rank));
			});
		}
	
		else if (trumpSuit === 'traditional') {
			arcanaRanks.forEach((rank) => {
				cards.push(new Card(majorArcana, rank));
			});
		}
	
		return cards;
	}
}
