import { Deck } from './_deck';
import { JokerCard } from '../cards';
import { RandomGenerator } from '../shuffle';
export interface StandardDeckOpts {
    /** Either a number of jokers to generate, or an array of jokers to add to the deck */
    jokers?: number | JokerCard[];
    rng?: RandomGenerator;
}
export declare class StandardDeck extends Deck {
    constructor(opts?: StandardDeckOpts);
    private static generateCards;
}
