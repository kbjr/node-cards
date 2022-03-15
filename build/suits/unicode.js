"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeJokers = exports.unicodeCards = exports.unicodeSuits = void 0;
/**
 * Generic symbols for the various playing card suits. Specifically, the "wands" suit doesn't
 * really have a good match for a character, so the "clubs" character is reused. Also, the "trump",
 * "major arcana", and "none" suits do not have characters defined.
 */
exports.unicodeSuits = new Map();
/**
 * A nested map structure containing the unicode characters for specific playing cards. The only cards
 * that have "well defined" characters in unicode right now are the standard 52 card deck, jokers, and
 * the modernized trump suit. The major arcana suit currently uses the same characters as the modern trump
 * suit. The other suits do not have unicode characters defined.
 *
 * _Note: Joker unicode characters are listed separately in `unicodeJokers`_
 *
 * @see {@link https://www.compart.com/en/unicode/block/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/list-unicodeset.jsp?a=[:Block=Playing_Cards:]}
 */
exports.unicodeCards = new Map();
/**
 *
 */
exports.unicodeJokers = new Map();
//# sourceMappingURL=unicode.js.map