"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokerCard = exports.preferedJokerColor = exports.jokerColor = void 0;
const suits_1 = require("../suits");
const _card_1 = require("./_card");
const ranks_1 = require("../ranks");
const unicode_1 = require("../suits/unicode");
var jokerColor;
(function (jokerColor) {
    jokerColor["black"] = "black";
    jokerColor["white"] = "white";
    jokerColor["red"] = "red";
})(jokerColor = exports.jokerColor || (exports.jokerColor = {}));
let preferedColor = jokerColor.black;
/**
 * Sets the prefered joker color to use when creating joker cards. Effects the unicode character
 * for the card.
 *
 * @param color
 */
function preferedJokerColor(color) {
    preferedColor = color;
}
exports.preferedJokerColor = preferedJokerColor;
/**
 * Special sub-class for representing Joker cards
 *
 * @param color Controls the specific unicode character used to represent the card; Defaults
 *   to whatever is set as the prefered color (see `preferedJokerColor()`)
 */
class JokerCard extends _card_1.Card {
    constructor(color = preferedColor) {
        super(suits_1.none, ranks_1.standard.joker);
        this.color = color;
    }
    /**
     * Returns a human-readable string representation of the card object
     *
     * eg. `"<JokerCard color=red>"`
     */
    toString() {
        return `<JokerCard color=${this.color}>`;
    }
    get unicode() {
        return unicode_1.unicodeJokers.get(this.color);
    }
}
exports.JokerCard = JokerCard;
//# sourceMappingURL=joker.js.map