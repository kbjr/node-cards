"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suit = void 0;
const unicode_1 = require("./unicode");
/**
 * The main class for representing a suit of cards
 */
class Suit {
    constructor(name) {
        this.name = name;
    }
    /**
     * Returns a human-readable string representation of the suit object
     *
     * eg. `"<Suit name=spades>"`
     */
    toString() {
        return `<Suit name=${this.name}>`;
    }
    /**
     * The unicode character that represents this particular suit
     */
    get unicode() {
        return unicode_1.unicodeSuits.get(this);
    }
    /**
     * A map of ranks to the appropriate unicode character for that card
     */
    get unicodeCards() {
        return unicode_1.unicodeCards.get(this);
    }
}
exports.Suit = Suit;
//# sourceMappingURL=_suit.js.map