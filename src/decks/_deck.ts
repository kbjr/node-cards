
import { Card } from '../cards';
import { remove } from '../util';
import { MathRandomGenerator, RandomGenerator, shuffle } from '../shuffle';

export interface DeckOpts {
	cards?: Card[];
	rng?: RandomGenerator;
}

export interface CardLocation {
	pile: Pile;
	index: number;
	card: Card;
}

export interface FindCardCallback {
	(card: Card): boolean;
}

export enum Pile {
	deck = 'deck',
	held = 'held',
	discard = 'discard',
}

export class Deck {
	private rng: RandomGenerator;
	private cards: Set<Card>;
	private deckPile: Card[];
	private heldPile: Card[] = [ ];
	private discardPile: Card[] = [ ];

	constructor(opts: DeckOpts = { }) {
		const cards = opts.cards || [ ];

		this.cards = new Set(cards);
		this.deckPile = cards.slice();
		this.rng = opts.rng || new MathRandomGenerator();

		// Assign each card to the deck
		cards.forEach((card) => {
			card.deck = this;
		});
	}

	/**
	 * The total number of all cards belonging to this deck, regardless of what pile
	 * they are currently in
	 */
	public get totalLength() {
		return this.cards.size;
	}

	/**
	 * The current number of cards remaining in the deck pile
	 */
	public get remainingLength() {
		return this.deckPile.length;
	}

	/**
	 * Copy of the array of cards in deck pile
	 */
	public get remainingCards() {
		return this.deckPile.slice();
	}

	/**
	 * Copy of the array of cards in held pile
	 */
	public get heldCards() {
		return this.heldPile.slice();
	}

	/**
	 * Copy of the array of cards in discard pile
	 */
	public get discardedCards() {
		return this.discardPile.slice();
	}

	/**
	 * Add a new Card to the deck, placing at the end of the given pile (defaults to `"deck"`).
	 * 
	 * _Note: Does not confirm that the Card does not already belong to a deck before adding._
	 * 
	 * @param card 
	 * @param pile 
	 */
	public add(card: Card, pile: Pile = Pile.deck) {
		card.deck = this;
		this.cards.add(card);
		this[`${pile}Pile`].push(card);
	}

	/**
	 * Removes a card from the deck entirely.
	 * 
	 * _Note: Does not confirm that the card belongs to this deck before removing._
	 *
	 * @param card
	 */
	public remove(card: Card) {
		this.cards.delete(card);
		remove(this.deckPile, card);
		remove(this.discardPile, card);
		remove(this.heldPile, card);
		card.deck = null;
	}
	
	/**
	 * Merge the given deck into this one, moving all cards belonging to the given deck into this deck.
	 *
	 * @param deck
	 * @param pile
	 */
	public merge(deck: Deck, pile: Pile = Pile.deck) {
		deck.cards.forEach((card) => {
			deck.remove(card);
			this.add(card, pile);
		});
	}

	/**
	 * Draw the given number of cards, place them in the held pile, and return the drawn cards
	 *
	 * @param count
	 */
	public draw(count: number = 1) {
		if (count <= 0) {
			return [ ];
		}

		if (count > this.deckPile.length) {
			throw new Error('Cannot draw from deck; not enough cards remaining');
		}

		const cards = this.deckPile.splice(0, count);
		this.heldPile.push(...cards);
		return cards;
	}

	/**
	 * Draw the given number of cards from the bottom of the deck pile, place them in the held pile,
	 * and return the drawn cards
	 *
	 * @param count
	 */
	public drawFromBottom(count: number = 1) {
		if (count <= 0) {
			return [ ];
		}

		if (count > this.deckPile.length) {
			throw new Error('Cannot draw from deck; not enough cards remaining');
		}

		const start = Math.max(this.deckPile.length - count, 0);
		const cards = this.deckPile.splice(start, count).reverse();
		this.heldPile.push(...cards);
		return cards;
	}

	/**
	 * Draw the given number of cards, place them in the discard pile, and return the drawn cards
	 *
	 * @param count
	 */
	public drawToDiscard(count: number = 1) {
		if (count <= 0) {
			return [ ];
		}

		if (count > this.deckPile.length) {
			throw new Error('Cannot draw from deck; not enough cards remaining');
		}

		const cards = this.deckPile.splice(0, count);
		this.discardPile.push(...cards);
		return cards;
	}

	/**
	 * Draw the given number of cards from the bottom of the deck, place them in the discard pile,
	 * and return the drawn cards
	 *
	 * @param count
	 */
	public drawToDiscardFromBottom(count: number = 1) {
		if (count <= 0) {
			return [ ];
		}

		if (count > this.deckPile.length) {
			throw new Error('Cannot draw from deck; not enough cards remaining');
		}

		const start = Math.max(this.deckPile.length - count, 0);
		const cards = this.deckPile.splice(start, count).reverse();
		this.discardPile.push(...cards);
		return cards;
	}

	/**
	 * Move the given card into the discard pile
	 *
	 * @param card
	 */
	public discard(card: Card) {
		if (Array.isArray(card)) {
			return card.forEach((card) => this.discard(card));
		}

		if (! this.cards.has(card)) {
			throw new Error('Provided card does not belong to this deck');
		}

		const deckIndex = this.deckPile.indexOf(card);

		if (deckIndex >= 0) {
			this.deckPile.splice(deckIndex, 1);
			this.discardPile.push(card);
		}

		else {
			const heldIndex = this.heldPile.indexOf(card);

			if (heldIndex >= 0) {
				this.heldPile.splice(heldIndex, 1);
				this.discardPile.push(card);
			}
		}
	}

	/**
	 * Finds the given card and returns an object representing its current location (pile, and index in that pile)
	 *
	 * @param card
	 */
	public locateCard(card: Card) : CardLocation {
		if (! this.cards.has(card)) {
			throw new Error('Provided card does not belong to this deck');
		}

		const deckIndex = this.deckPile.indexOf(card);

		if (deckIndex >= 0) {
			return {
				pile: Pile.deck,
				index: deckIndex,
				card
			};
		}

		const heldIndex = this.heldPile.indexOf(card);

		if (heldIndex >= 0) {
			return {
				pile: Pile.held,
				index: heldIndex,
				card
			};
		}

		const discardIndex = this.discardPile.indexOf(card);

		if (discardIndex >= 0) {
			return {
				pile: Pile.discard,
				index: discardIndex,
				card
			};
		}

		// This should never happen
		throw new Error('Failed to find the given card');
	}

	/**
	 * Moves all cards back to the deck pile and shuffles the deck
	 */
	public shuffleAll() {
		this.deckPile.push(...this.heldPile);
		this.deckPile.push(...this.discardPile);

		this.heldPile.length = 0;
		this.discardPile.length = 0;

		shuffle(this.deckPile, this.rng);
	}

	/**
	 * Shuffles the cards remaining in the deck
	 */
	public shuffleRemaining() {
		shuffle(this.deckPile, this.rng);
	}

	/**
	 * Shuffles the cards in the discard pile and then places them at the end of the deck
	 */
	public shuffleDiscard() {
		shuffle(this.discardPile, this.rng);
		this.deckPile.push(...this.discardPile);
		this.discardPile.length = 0;
	}

	/**
	 * Moves all cards in the discard back to the deck and shuffles the deck
	 */
	public shuffleDeckAndDiscard() {
		this.deckPile.push(...this.discardPile);
		this.discardPile.length = 0;
		shuffle(this.deckPile, this.rng);
	}

	/**
	 * Moves all currently held cards to the discard pile
	 */
	public discardAllHeld() {
		this.discardPile.push(...this.heldPile);
		this.heldPile.length = 0;
	}

	/**
	 * Finds all cards in the deck matching the given filtering function
	 *
	 * ```javascript
	 * const aces = deck.findCards((card) => card.rank === ace);
	 * ```
	 *
	 * @param filter
	 */
	public findCards(filter: FindCardCallback) {
		const matching: Card[] = [ ];

		this.cards.forEach((card) => {
			if (filter(card)) {
				matching.push(card);
			}
		});

		return matching;
	}
}
