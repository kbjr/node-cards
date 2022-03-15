import { Card } from '../cards';
import { RandomGenerator } from '../shuffle';
export interface DeckOpts {
    cards?: Card[];
    rng?: RandomGenerator;
}
export interface CardLocation {
    pile: Pile;
    index: number;
    card: Card;
}
interface FindCardCallback {
    (card: Card): boolean;
}
export declare enum Pile {
    deck = "deck",
    held = "held",
    discard = "discard"
}
export declare class Deck {
    private rng;
    private cards;
    private deckPile;
    private heldPile;
    private discardPile;
    constructor(opts?: DeckOpts);
    /**
     * The total number of all cards belonging to this deck, regardless of what pile
     * they are currently in
     */
    get totalLength(): number;
    /**
     * The current number of cards remaining in the deck pile
     */
    get remainingLength(): number;
    /**
     * Copy of the array of cards in deck pile
     */
    get remainingCards(): Card[];
    /**
     * Copy of the array of cards in held pile
     */
    get heldCards(): Card[];
    /**
     * Copy of the array of cards in discard pile
     */
    get discardedCards(): Card[];
    /**
     * Add a new Card to the deck, placing at the end of the given pile (defaults to `"deck"`).
     *
     * _Note: Does not confirm that the Card does not already belong to a deck before adding._
     *
     * @param card
     * @param pile
     */
    add(card: Card, pile?: Pile): void;
    /**
     * Removes a card from the deck entirely.
     *
     * _Note: Does not confirm that the card belongs to this deck before removing._
     *
     * @param card
     */
    remove(card: Card): void;
    /**
     * Merge the given deck into this one, moving all cards belonging to the given deck into this deck.
     *
     * @param deck
     * @param pile
     */
    merge(deck: Deck, pile?: Pile): void;
    /**
     * Draw the given number of cards, place them in the held pile, and return the drawn cards
     *
     * @param count
     */
    draw(count?: number): Card[];
    /**
     * Draw the given number of cards from the bottom of the deck pile, place them in the held pile,
     * and return the drawn cards
     *
     * @param count
     */
    drawFromBottom(count?: number): Card[];
    /**
     * Draw the given number of cards, place them in the discard pile, and return the drawn cards
     *
     * @param count
     */
    drawToDiscard(count?: number): Card[];
    /**
     * Draw the given number of cards from the bottom of the deck, place them in the discard pile,
     * and return the drawn cards
     *
     * @param count
     */
    drawToDiscardFromBottom(count?: number): Card[];
    /**
     * Move the given card into the discard pile
     *
     * @param card
     */
    discard(card: Card): any;
    /**
     * Finds the given card and returns an object representing its current location (pile, and index in that pile)
     *
     * @param card
     */
    locateCard(card: Card): CardLocation;
    /**
     * Moves all cards back to the deck pile and shuffles the deck
     */
    shuffleAll(): void;
    /**
     * Shuffles the cards remaining in the deck
     */
    shuffleRemaining(): void;
    /**
     * Shuffles the cards in the discard pile and then places them at the end of the deck
     */
    shuffleDiscard(): void;
    /**
     * Moves all cards in the discard back to the deck and shuffles the deck
     */
    shuffleDeckAndDiscard(): void;
    /**
     * Moves all currently held cards to the discard pile
     */
    discardAllHeld(): void;
    /**
     * Finds all cards in the deck matching the given filtering function
     *
     * ```javascript
     * const aces = deck.findCards((card) => card.rank === ace);
     * ```
     *
     * @param filter
     */
    findCards(filter: FindCardCallback): Card[];
}
export {};
