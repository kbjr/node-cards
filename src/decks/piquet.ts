
import { Deck } from './_deck';
import { Card } from '../cards';
import { RandomGenerator } from '../shuffle';
import { spades, hearts, diamonds, clubs } from '../suits';
import { standard } from '../ranks';

export interface PiquetDeckOpts {
	rng?: RandomGenerator;
}

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [
	standard.ace,
	standard.seven,
	standard.eight,
	standard.nine,
	standard.ten,
	standard.jack,
	standard.queen,
	standard.king
];

export class PiquetDeck extends Deck {
	constructor(opts: PiquetDeckOpts = { }) {
		const cards = PiquetDeck.generateCards();

		super({
			cards,
			rng: opts.rng
		});
	}

	private static generateCards() {
		const cards: Card[] = [ ];
	
		suits.forEach((suit) => {
			ranks.forEach((rank) => {
				cards.push(new Card(suit, rank));
			});
		});
	
		return cards;
	}
}
