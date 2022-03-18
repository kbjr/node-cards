
import { Deck } from './_deck';
import { Card, JokerCard } from '../cards';
import { RandomGenerator } from '../shuffle';
import { spades, hearts, diamonds, clubs } from '../suits';
import { standard } from '../ranks';

export interface StandardDeckOpts {
	/** Either a number of jokers to generate, or an array of specific joker cards to add to the deck */
	jokers?: number | JokerCard[];
	rng?: RandomGenerator;
}

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [
	standard.ace,
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
	standard.queen,
	standard.king
];

export class StandardDeck extends Deck {
	constructor(opts: StandardDeckOpts = { }) {
		const cards = StandardDeck.generateCards(opts);

		super({
			cards,
			rng: opts.rng
		});
	}

	private static generateCards({ jokers }: StandardDeckOpts) {
		const cards: Card[] = [ ];
	
		suits.forEach((suit) => {
			ranks.forEach((rank) => {
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
