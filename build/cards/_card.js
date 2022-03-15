"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const decks_1 = require("../decks");
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    /**
     * Returns a human-readable string representation of the card object
     *
     * eg. `"<Card suit=spades rank=Ace>"`
     *
     * @return {string}
     */
    toString() {
        return `<Card suit=${this.suit.name} value=${this.rank.name}>`;
    }
    /**
     * The deck instance that this card belongs to
     */
    get deck() {
        return this._deck;
    }
    set deck(deck) {
        if (deck instanceof decks_1.Deck) {
            if (this._deck) {
                this._deck.remove(this);
                this._deck = null;
            }
            this._deck = deck;
        }
        else if (deck == null) {
            this._deck = null;
        }
        else {
            throw new Error('Attempted to set `deck` to an invalid value; Must be an instance of Deck, or null');
        }
    }
    /**
     * The unicode character that represents this particular card if one exists
     */
    get unicode() {
        return this.suit.unicodeCards.get(this.rank);
    }
}
exports.Card = Card;
//# sourceMappingURL=_card.js.map