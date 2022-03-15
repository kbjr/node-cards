import { Deck } from '../decks';
import { Rank } from '../ranks';
import { Suit } from '../suits';
export declare class Card {
    readonly suit: Suit;
    readonly rank: Rank;
    private _deck;
    constructor(suit: Suit, rank: Rank);
    /**
     * Returns a human-readable string representation of the card object
     *
     * eg. `"<Card suit=spades rank=Ace>"`
     *
     * @return {string}
     */
    toString(): string;
    /**
     * The deck instance that this card belongs to
     */
    get deck(): Deck;
    set deck(deck: Deck);
    /**
     * The unicode character that represents this particular card if one exists
     */
    get unicode(): string;
}
