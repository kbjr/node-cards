
import { Deck } from './_deck';
import { Card } from '../cards';
import { RandomGenerator } from '../shuffle';
import { spades, hearts, diamonds, clubs } from '../suits';
import { standard } from '../ranks';

export interface PinochelDeckOpts {
	rng?: RandomGenerator;
}

const suits = [ spades, hearts, diamonds, clubs ];
const ranks = [
	standard.ace,
	standard.nine,
	standard.ten,
	standard.jack,
	standard.queen,
	standard.king
];

export class PinochelDeck extends Deck {
	constructor(opts: PinochelDeckOpts = { }) {
		const cards = PinochelDeck.generateCards();

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
				cards.push(new Card(suit, rank));
			});
		});
	
		return cards;
	}
}
