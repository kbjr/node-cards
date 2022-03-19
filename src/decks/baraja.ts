
import { Deck } from './_deck';
import { Card, JokerCard } from '../cards';
import { RandomGenerator } from '../shuffle';
import { swords, cups, coins, wands } from '../suits';
import { standard, nonStandard } from '../ranks';

export interface BarajaDeckOpts {
	/** Either a number of jokers to generate, or an array of specific joker cards to add to the deck */
	jokers?: number | JokerCard[];
	/** Create a stripped deck (no 8 or 9 rank cards) */
	stripped?: boolean;
	rng?: RandomGenerator;
}

const suits = [ swords, cups, coins, wands ];
const ranks = [
	nonStandard.one,
	standard.two,
	standard.three,
	standard.four,
	standard.five,
	standard.six,
	standard.seven,
	standard.eight,
	standard.nine,
	standard.ten,
	standard.jack,
	nonStandard.knight,
	standard.king
];

export class BarajaDeck extends Deck {
	constructor(opts: BarajaDeckOpts = { }) {
		const cards = BarajaDeck.generateCards(opts);

		super({
			cards,
			rng: opts.rng
		});
	}

	private static generateCards({ jokers, stripped }: BarajaDeckOpts) {
		const cards: Card[] = [ ];
	
		suits.forEach((suit) => {
			ranks.forEach((rank) => {
				if (stripped && (rank.abbrn === '8' || rank.abbrn === '9')) {
					return;
				}
	
				cards.push(new Card(suit, rank));
			});
		});
	
		if (Array.isArray(jokers)) {
			if (! jokers.every((card) => card instanceof JokerCard)) {
				throw new Error('Only joker cards may be provided in the jokers parameter');
			}
	
			cards.push(...jokers);
		}
	
		else {
			for (let i = 0; i < jokers; i++) {
				cards.push(new JokerCard());
			}
		}
	
		return cards;
	}
}
