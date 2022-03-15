"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = exports.Pile = void 0;
const util_1 = require("../util");
const shuffle_1 = require("../shuffle");
var Pile;
(function (Pile) {
    Pile["deck"] = "deck";
    Pile["held"] = "held";
    Pile["discard"] = "discard";
})(Pile = exports.Pile || (exports.Pile = {}));
class Deck {
    constructor(opts = {}) {
        this.heldPile = [];
        this.discardPile = [];
        const cards = opts.cards || [];
        this.cards = new Set(cards);
        this.deckPile = cards.slice();
        this.rng = opts.rng || new shuffle_1.MathRandomGenerator();
        // Assign each card to the deck
        cards.forEach((card) => {
            card.deck = this;
        });
    }
    /**
     * The total number of all cards belonging to this deck, regardless of what pile
     * they are currently in
     */
    get totalLength() {
        return this.cards.size;
    }
    /**
     * The current number of cards remaining in the deck pile
     */
    get remainingLength() {
        return this.deckPile.length;
    }
    /**
     * Copy of the array of cards in deck pile
     */
    get remainingCards() {
        return this.deckPile.slice();
    }
    /**
     * Copy of the array of cards in held pile
     */
    get heldCards() {
        return this.heldPile.slice();
    }
    /**
     * Copy of the array of cards in discard pile
     */
    get discardedCards() {
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
    add(card, pile = Pile.deck) {
        card.deck = this;
        this.cards.add(card);
        this[pile].push(card);
    }
    /**
     * Removes a card from the deck entirely.
     *
     * _Note: Does not confirm that the card belongs to this deck before removing._
     *
     * @param card
     */
    remove(card) {
        this.cards.delete(card);
        (0, util_1.remove)(this.deckPile, card);
        (0, util_1.remove)(this.discardPile, card);
        (0, util_1.remove)(this.heldPile, card);
        card.deck = null;
    }
    /**
     * Merge the given deck into this one, moving all cards belonging to the given deck into this deck.
     *
     * @param deck
     * @param pile
     */
    merge(deck, pile = Pile.deck) {
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
    draw(count = 1) {
        if (count <= 0) {
            return [];
        }
        if (count > this.deckPile.length) {
            throw new Error('Cannot draw from deck; not enough cards remaining');
        }
        const cards = this.deckPile.splice(0, count);
        this.heldCards.push(...cards);
        return cards;
    }
    /**
     * Draw the given number of cards from the bottom of the deck pile, place them in the held pile,
     * and return the drawn cards
     *
     * @param count
     */
    drawFromBottom(count = 1) {
        if (count <= 0) {
            return [];
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
    drawToDiscard(count = 1) {
        if (count <= 0) {
            return [];
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
    drawToDiscardFromBottom(count = 1) {
        if (count <= 0) {
            return [];
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
    discard(card) {
        if (Array.isArray(card)) {
            return card.forEach((card) => this.discard(card));
        }
        if (!this.cards.has(card)) {
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
    locateCard(card) {
        if (!this.cards.has(card)) {
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
    shuffleAll() {
        this.deckPile.push(...this.heldPile);
        this.deckPile.push(...this.discardPile);
        this.heldPile.length = 0;
        this.discardPile.length = 0;
        (0, shuffle_1.shuffle)(this.deckPile, this.rng);
    }
    /**
     * Shuffles the cards remaining in the deck
     */
    shuffleRemaining() {
        (0, shuffle_1.shuffle)(this.deckPile, this.rng);
    }
    /**
     * Shuffles the cards in the discard pile and then places them at the end of the deck
     */
    shuffleDiscard() {
        (0, shuffle_1.shuffle)(this.discardPile, this.rng);
        this.deckPile.push(...this.discardPile);
        this.discardPile.length = 0;
    }
    /**
     * Moves all cards in the discard back to the deck and shuffles the deck
     */
    shuffleDeckAndDiscard() {
        this.deckPile.push(...this.discardPile);
        this.discardPile.length = 0;
        (0, shuffle_1.shuffle)(this.deckPile, this.rng);
    }
    /**
     * Moves all currently held cards to the discard pile
     */
    discardAllHeld() {
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
    findCards(filter) {
        const matching = [];
        this.cards.forEach((card) => {
            if (filter(card)) {
                matching.push(card);
            }
        });
        return matching;
    }
}
exports.Deck = Deck;
//# sourceMappingURL=_deck.js.map