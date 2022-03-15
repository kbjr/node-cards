/**
 * The main base class for representing a rank of card (eg. "ace" or "king")
 */
export declare class Rank {
    readonly abbrn: string;
    readonly name: string;
    constructor(abbrn: string, name: string);
    /**
     * Returns a human-readable string representation of the rank object
     *
     * eg. `"<Rank name=Ace abbrn=A>"`
     */
    toString(): string;
}
