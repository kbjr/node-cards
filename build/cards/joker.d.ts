import { Card } from './_card';
export declare enum jokerColor {
    black = "black",
    white = "white",
    red = "red"
}
/**
 * Sets the prefered joker color to use when creating joker cards. Effects the unicode character
 * for the card.
 *
 * @param color
 */
export declare function preferedJokerColor(color: jokerColor): void;
/**
 * Special sub-class for representing Joker cards
 *
 * @param color Controls the specific unicode character used to represent the card; Defaults
 *   to whatever is set as the prefered color (see `preferedJokerColor()`)
 */
export declare class JokerCard extends Card {
    readonly color: jokerColor;
    constructor(color?: jokerColor);
    /**
     * Returns a human-readable string representation of the card object
     *
     * eg. `"<JokerCard color=red>"`
     */
    toString(): string;
    get unicode(): string;
}
