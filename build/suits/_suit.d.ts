/**
 * The main class for representing a suit of cards
 */
export declare class Suit {
    readonly name: string;
    constructor(name: string);
    /**
     * Returns a human-readable string representation of the suit object
     *
     * eg. `"<Suit name=spades>"`
     */
    toString(): string;
    /**
     * The unicode character that represents this particular suit
     */
    get unicode(): string;
    /**
     * A map of ranks to the appropriate unicode character for that card
     */
    get unicodeCards(): Map<import("../ranks").Rank, string>;
}
