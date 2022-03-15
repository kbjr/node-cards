"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardDeck = void 0;
const _deck_1 = require("./_deck");
const cards_1 = require("../cards");
const suits_1 = require("../suits");
const ranks_1 = require("../ranks");
const suits = [suits_1.spades, suits_1.hearts, suits_1.diamonds, suits_1.clubs];
const ranks = [
    ranks_1.standard.ace,
    ranks_1.standard.two,
    ranks_1.standard.three,
    ranks_1.standard.four,
    ranks_1.standard.five,
    ranks_1.standard.six,
    ranks_1.standard.seven,
    ranks_1.standard.eight,
    ranks_1.standard.nine,
    ranks_1.standard.ten,
    ranks_1.standard.jack,
    ranks_1.standard.queen,
    ranks_1.standard.king
];
class StandardDeck extends _deck_1.Deck {
    constructor(opts = {}) {
        const cards = StandardDeck.generateCards(opts);
        super({
            cards,
            rng: opts.rng
        });
    }
    static generateCards({ jokers }) {
        const cards = [];
        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                cards.push(new cards_1.Card(suit, rank));
            });
        });
        if (Array.isArray(jokers)) {
            if (!jokers.every((card) => card instanceof cards_1.JokerCard)) {
                throw new Error('Only joker cards may be provided in the jokers parameter');
            }
            cards.push(...jokers);
        }
        else {
            for (let i = 0; i < jokers; i++) {
                cards.push(new cards_1.JokerCard());
            }
        }
        return cards;
    }
}
exports.StandardDeck = StandardDeck;
//# sourceMappingURL=standard.js.map