
// 
// This files just contains a bunch of mappings of suits/ranks to various unicode characters
// that can be used to render them in varying levels of "graphical" ways. There are a number
// of these that don't really have good unicode representations, but this is mostly a "best match"
// 

/**
 * @module unicode
 * @see {@link https://github.com/Crissov/unicode-proposals/issues/289}
 * @see {@link https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf}
 * @see {@link https://www.unicode.org/L2/L2014/14223-tarot.pdf}
 * @description
 *
 * Contains all of the mappings of suits / ranks to various unicode characters that can be used to
 * render them in varying level of "graphical" ways. Many of these don't really have good unicode
 * representations at the moment, so those are mostly a "best match" at the moment.
 *
 * ```javascript
 * const { unicode } = require('cards');
 * ```
 */

const { unicodeSuits, unicodeCards } = require('./suit');
const { spades, hearts, diamonds, clubs, trump, swords, cups, coins, wands, majorArcana, none } = require('./suits');
const {
	ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, joker, one, cavalier, knight, page,
	arcana0, arcana1, arcana2, arcana3, arcana4, arcana5, arcana6, arcana7, arcana8, arcana9, arcana10, arcana11,
	arcana12, arcana13, arcana14, arcana15, arcana16, arcana17, arcana18, arcana19, arcana20, arcana21,
	trump0, trump1, trump2, trump3, trump4, trump5, trump6, trump7, trump8, trump9, trump10, trump11,
	trump12, trump13, trump14, trump15, trump16, trump17, trump18, trump19, trump20, trump21
} = require('./ranks');

/**
 * @alias module:unicode.back
 * @type {string}
 * @see {@link https://www.compart.com/en/unicode/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/character.jsp?a=1F0A0}
 * @description Renders a generic back of a playing card
 */
exports.back = '\u{1F0A0}';

/**
 * @alias module:unicode.unicodeSuits
 * @type {Map.<Suit, string>}
 * @description
 * 
 * Generic symbols for the various playing card suits. Specifically, the "wands" suit doesn't
 * really have a good match for a character, so the "clubs" character is reused. Also, the "trump",
 * "major arcana", and "none" suits do not have characters defined.
 */
exports.unicodeSuits = unicodeSuits;

/**
 * @alias module:unicode.unicodeCards
 * @type {Map.<Suit, Map.<Rank, string|Map.<string, string>>>}
 * @see {@link https://www.compart.com/en/unicode/block/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/list-unicodeset.jsp?a=[:Block=Playing_Cards:]}
 * @description
 *
 * A nested map structure containing the unicode characters for specific playing cards. The only cards
 * that have "well defined" characters in unicode right now are the standard 52 card deck, jokers, and
 * the modernized trump suit. The major arcana suit currently uses the same characters as the modern trump
 * suit. The other suits do not have unicode characters defined.
 *
 * There is also the special case of the joker cards. The {@link module:ranks.joker|Joker rank}, rather
 * than having a single character definde, nests another level deep to a `Map.<string, string>` where the
 * key is the color ("red", "black", or "white"), and the value is a unicode character.
 */
exports.unicodeCards = unicodeCards;

unicodeSuits.set(spades,   '\u2660');
unicodeSuits.set(hearts,   '\u2665');
unicodeSuits.set(diamonds, '\u2666');
unicodeSuits.set(clubs,    '\u2663');
unicodeSuits.set(swords,   '\u2628');
unicodeSuits.set(cups,     '\u2615');
unicodeSuits.set(coins,    '\u26AA');
// This is currently the same as "club", update this if/when a more appropriate character exists
unicodeSuits.set(wands,    '\u2663');

// These don't really have a "suit" symbol
unicodeSuits.set(trump,       null);
unicodeSuits.set(majorArcana, null);
unicodeSuits.set(none,        null);

unicodeCards.set(spades, new Map([
	[ ace,      '\u{1F0A1}' ],
	[ one,      '\u{1F0A1}' ],
	[ two,      '\u{1F0A2}' ],
	[ three,    '\u{1F0A3}' ],
	[ four,     '\u{1F0A4}' ],
	[ five,     '\u{1F0A5}' ],
	[ six,      '\u{1F0A6}' ],
	[ seven,    '\u{1F0A7}' ],
	[ eight,    '\u{1F0A8}' ],
	[ nine,     '\u{1F0A9}' ],
	[ ten,      '\u{1F0AA}' ],
	[ jack,     '\u{1F0AB}' ],
	[ cavalier, '\u{1F0AC}' ],
	[ knight,   '\u{1F0AC}' ],
	[ queen,    '\u{1F0AD}' ],
	[ king,     '\u{1F0AE}' ],
	[ page,     null ]
]));

unicodeCards.set(hearts, new Map([
	[ ace,      '\u{1F0B1}' ],
	[ one,      '\u{1F0B1}' ],
	[ two,      '\u{1F0B2}' ],
	[ three,    '\u{1F0B3}' ],
	[ four,     '\u{1F0B4}' ],
	[ five,     '\u{1F0B5}' ],
	[ six,      '\u{1F0B6}' ],
	[ seven,    '\u{1F0B7}' ],
	[ eight,    '\u{1F0B8}' ],
	[ nine,     '\u{1F0B9}' ],
	[ ten,      '\u{1F0BA}' ],
	[ jack,     '\u{1F0BB}' ],
	[ cavalier, '\u{1F0BC}' ],
	[ knight,   '\u{1F0BC}' ],
	[ queen,    '\u{1F0BD}' ],
	[ king,     '\u{1F0BE}' ],
	[ page,     null ]
]));

unicodeCards.set(diamonds, new Map([
	[ ace,      '\u{1F0C1}' ],
	[ one,      '\u{1F0C1}' ],
	[ two,      '\u{1F0C2}' ],
	[ three,    '\u{1F0C3}' ],
	[ four,     '\u{1F0C4}' ],
	[ five,     '\u{1F0C5}' ],
	[ six,      '\u{1F0C6}' ],
	[ seven,    '\u{1F0C7}' ],
	[ eight,    '\u{1F0C8}' ],
	[ nine,     '\u{1F0C9}' ],
	[ ten,      '\u{1F0CA}' ],
	[ jack,     '\u{1F0CB}' ],
	[ cavalier, '\u{1F0CC}' ],
	[ knight,   '\u{1F0CC}' ],
	[ queen,    '\u{1F0CD}' ],
	[ king,     '\u{1F0CE}' ],
	[ page,     null ]
]));

unicodeCards.set(clubs, new Map([
	[ ace,      '\u{1F0D1}' ],
	[ one,      '\u{1F0D1}' ],
	[ two,      '\u{1F0D2}' ],
	[ three,    '\u{1F0D3}' ],
	[ four,     '\u{1F0D4}' ],
	[ five,     '\u{1F0D5}' ],
	[ six,      '\u{1F0D6}' ],
	[ seven,    '\u{1F0D7}' ],
	[ eight,    '\u{1F0D8}' ],
	[ nine,     '\u{1F0D9}' ],
	[ ten,      '\u{1F0DA}' ],
	[ jack,     '\u{1F0DB}' ],
	[ cavalier, '\u{1F0DC}' ],
	[ knight,   '\u{1F0DC}' ],
	[ queen,    '\u{1F0DD}' ],
	[ king,     '\u{1F0DE}' ],
	[ page,     null ]
]));

unicodeCards.set(none, new Map([
	[ joker, new Map([
		[ 'white', '\u{1F0BF}' ],
		[ 'red',   '\u{1F0CF}' ],
		[ 'black', '\u{1F0DF}' ]
	]) ]
]));

unicodeCards.set(trump, new Map([
	[ trump0,  '\u{1F0E0}' ],
	[ trump1,  '\u{1F0E1}' ],
	[ trump2,  '\u{1F0E2}' ],
	[ trump3,  '\u{1F0E3}' ],
	[ trump4,  '\u{1F0E4}' ],
	[ trump5,  '\u{1F0E5}' ],
	[ trump6,  '\u{1F0E6}' ],
	[ trump7,  '\u{1F0E7}' ],
	[ trump8,  '\u{1F0E8}' ],
	[ trump9,  '\u{1F0E9}' ],
	[ trump10, '\u{1F0EA}' ],
	[ trump11, '\u{1F0EB}' ],
	[ trump12, '\u{1F0EC}' ],
	[ trump13, '\u{1F0ED}' ],
	[ trump14, '\u{1F0EE}' ],
	[ trump15, '\u{1F0EF}' ],
	[ trump16, '\u{1F0F0}' ],
	[ trump17, '\u{1F0F1}' ],
	[ trump18, '\u{1F0F2}' ],
	[ trump19, '\u{1F0F3}' ],
	[ trump20, '\u{1F0F4}' ],
	[ trump21, '\u{1F0F5}' ]
]));

// For the time being, these are mapped to the trump characters. There was at one point a proposal to
// add proper tarot cards to the spec (https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf),
// as well as a proposal to add variant selectors to the existing cards to add support for tarot cards
// (https://www.unicode.org/L2/L2014/14223-tarot.pdf) but it seems to so far neither have been followed
// through with. If that ever happens, update these to point to the actual, correct characters
unicodeCards.set(majorArcana, new Map([
	[ arcana0,  '\u{1F0E0}' ],
	[ arcana1,  '\u{1F0E1}' ],
	[ arcana2,  '\u{1F0E2}' ],
	[ arcana3,  '\u{1F0E3}' ],
	[ arcana4,  '\u{1F0E4}' ],
	[ arcana5,  '\u{1F0E5}' ],
	[ arcana6,  '\u{1F0E6}' ],
	[ arcana7,  '\u{1F0E7}' ],
	[ arcana8,  '\u{1F0E8}' ],
	[ arcana9,  '\u{1F0E9}' ],
	[ arcana10, '\u{1F0EA}' ],
	[ arcana11, '\u{1F0EB}' ],
	[ arcana12, '\u{1F0EC}' ],
	[ arcana13, '\u{1F0ED}' ],
	[ arcana14, '\u{1F0EE}' ],
	[ arcana15, '\u{1F0EF}' ],
	[ arcana16, '\u{1F0F0}' ],
	[ arcana17, '\u{1F0F1}' ],
	[ arcana18, '\u{1F0F2}' ],
	[ arcana19, '\u{1F0F3}' ],
	[ arcana20, '\u{1F0F4}' ],
	[ arcana21, '\u{1F0F5}' ]
]));
