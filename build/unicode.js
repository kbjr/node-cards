"use strict";
/*
 * This files just contains a bunch of mappings of suits/ranks to various unicode characters
 * that can be used to render them in varying levels of "graphical" ways. There are a number
 * of these that don't really have good unicode representations, but this is mostly a "best match"
 *
 * https://github.com/Crissov/unicode-proposals/issues/289
 * https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf
 * https://www.unicode.org/L2/L2014/14223-tarot.pdf
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUnicode = exports.cards = exports.suits = exports.back = void 0;
const suits_1 = require("./suits");
const unicode_1 = require("./suits/unicode");
const ranks = require("./ranks");
const cards_1 = require("./cards");
/**
 * Renders a generic back of a playing card
 *
 * @see {@link https://www.compart.com/en/unicode/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/character.jsp?a=1F0A0}
 */
exports.back = '\u{1F0A0}';
var suits;
(function (suits) {
    suits["spades"] = "\u2660";
    suits["hearts"] = "\u2665";
    suits["diamonds"] = "\u2666";
    suits["clubs"] = "\u2663";
    suits["swords"] = "\u2628";
    suits["cups"] = "\u2615";
    suits["coins"] = "\u26AA";
    suits["wands"] = "\u2663";
})(suits = exports.suits || (exports.suits = {}));
var cards;
(function (cards) {
    let spades;
    (function (spades) {
        spades["ace"] = "\uD83C\uDCA1";
        spades["one"] = "\uD83C\uDCA1";
        spades["two"] = "\uD83C\uDCA2";
        spades["three"] = "\uD83C\uDCA3";
        spades["four"] = "\uD83C\uDCA4";
        spades["five"] = "\uD83C\uDCA5";
        spades["six"] = "\uD83C\uDCA6";
        spades["seven"] = "\uD83C\uDCA7";
        spades["eight"] = "\uD83C\uDCA8";
        spades["nine"] = "\uD83C\uDCA9";
        spades["ten"] = "\uD83C\uDCAA";
        spades["jack"] = "\uD83C\uDCAB";
        spades["cavalier"] = "\uD83C\uDCAC";
        spades["knight"] = "\uD83C\uDCAC";
        spades["queen"] = "\uD83C\uDCAD";
        spades["king"] = "\uD83C\uDCAE";
    })(spades = cards.spades || (cards.spades = {}));
    let hearts;
    (function (hearts) {
        hearts["ace"] = "\uD83C\uDCB1";
        hearts["one"] = "\uD83C\uDCB1";
        hearts["two"] = "\uD83C\uDCB2";
        hearts["three"] = "\uD83C\uDCB3";
        hearts["four"] = "\uD83C\uDCB4";
        hearts["five"] = "\uD83C\uDCB5";
        hearts["six"] = "\uD83C\uDCB6";
        hearts["seven"] = "\uD83C\uDCB7";
        hearts["eight"] = "\uD83C\uDCB8";
        hearts["nine"] = "\uD83C\uDCB9";
        hearts["ten"] = "\uD83C\uDCBA";
        hearts["jack"] = "\uD83C\uDCBB";
        hearts["cavalier"] = "\uD83C\uDCBC";
        hearts["knight"] = "\uD83C\uDCBC";
        hearts["queen"] = "\uD83C\uDCBD";
        hearts["king"] = "\uD83C\uDCBE";
    })(hearts = cards.hearts || (cards.hearts = {}));
    let diamonds;
    (function (diamonds) {
        diamonds["ace"] = "\uD83C\uDCC1";
        diamonds["one"] = "\uD83C\uDCC1";
        diamonds["two"] = "\uD83C\uDCC2";
        diamonds["three"] = "\uD83C\uDCC3";
        diamonds["four"] = "\uD83C\uDCC4";
        diamonds["five"] = "\uD83C\uDCC5";
        diamonds["six"] = "\uD83C\uDCC6";
        diamonds["seven"] = "\uD83C\uDCC7";
        diamonds["eight"] = "\uD83C\uDCC8";
        diamonds["nine"] = "\uD83C\uDCC9";
        diamonds["ten"] = "\uD83C\uDCCA";
        diamonds["jack"] = "\uD83C\uDCCB";
        diamonds["cavalier"] = "\uD83C\uDCCC";
        diamonds["knight"] = "\uD83C\uDCCC";
        diamonds["queen"] = "\uD83C\uDCCD";
        diamonds["king"] = "\uD83C\uDCCE";
    })(diamonds = cards.diamonds || (cards.diamonds = {}));
    let clubs;
    (function (clubs) {
        clubs["ace"] = "\uD83C\uDCD1";
        clubs["one"] = "\uD83C\uDCD1";
        clubs["two"] = "\uD83C\uDCD2";
        clubs["three"] = "\uD83C\uDCD3";
        clubs["four"] = "\uD83C\uDCD4";
        clubs["five"] = "\uD83C\uDCD5";
        clubs["six"] = "\uD83C\uDCD6";
        clubs["seven"] = "\uD83C\uDCD7";
        clubs["eight"] = "\uD83C\uDCD8";
        clubs["nine"] = "\uD83C\uDCD9";
        clubs["ten"] = "\uD83C\uDCDA";
        clubs["jack"] = "\uD83C\uDCDB";
        clubs["cavalier"] = "\uD83C\uDCDC";
        clubs["knight"] = "\uD83C\uDCDC";
        clubs["queen"] = "\uD83C\uDCDD";
        clubs["king"] = "\uD83C\uDCDE";
    })(clubs = cards.clubs || (cards.clubs = {}));
    let none;
    (function (none) {
        none["jokerWhite"] = "\uD83C\uDCBF";
        none["jokerRed"] = "\uD83C\uDCCF";
        none["jokerBlack"] = "\uD83C\uDCDF";
    })(none = cards.none || (cards.none = {}));
    let trump;
    (function (trump) {
        trump["trump0"] = "\uD83C\uDCE0";
        trump["trump1"] = "\uD83C\uDCE1";
        trump["trump2"] = "\uD83C\uDCE2";
        trump["trump3"] = "\uD83C\uDCE3";
        trump["trump4"] = "\uD83C\uDCE4";
        trump["trump5"] = "\uD83C\uDCE5";
        trump["trump6"] = "\uD83C\uDCE6";
        trump["trump7"] = "\uD83C\uDCE7";
        trump["trump8"] = "\uD83C\uDCE8";
        trump["trump9"] = "\uD83C\uDCE9";
        trump["trump10"] = "\uD83C\uDCEA";
        trump["trump11"] = "\uD83C\uDCEB";
        trump["trump12"] = "\uD83C\uDCEC";
        trump["trump13"] = "\uD83C\uDCED";
        trump["trump14"] = "\uD83C\uDCEE";
        trump["trump15"] = "\uD83C\uDCEF";
        trump["trump16"] = "\uD83C\uDCF0";
        trump["trump17"] = "\uD83C\uDCF1";
        trump["trump18"] = "\uD83C\uDCF2";
        trump["trump19"] = "\uD83C\uDCF3";
        trump["trump20"] = "\uD83C\uDCF4";
        trump["trump21"] = "\uD83C\uDCF5";
    })(trump = cards.trump || (cards.trump = {}));
    // For the time being, these are mapped to the trump characters. There was at one point a proposal to
    // add proper tarot cards to the spec (https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf),
    // as well as a proposal to add variant selectors to the existing cards to add support for tarot cards
    // (https://www.unicode.org/L2/L2014/14223-tarot.pdf) but it seems to so far neither have been followed
    // through with. If that ever happens, update these to point to the actual, correct characters
    let majorArcana;
    (function (majorArcana) {
        majorArcana["arcana0"] = "\uD83C\uDCE0";
        majorArcana["arcana1"] = "\uD83C\uDCE1";
        majorArcana["arcana2"] = "\uD83C\uDCE2";
        majorArcana["arcana3"] = "\uD83C\uDCE3";
        majorArcana["arcana4"] = "\uD83C\uDCE4";
        majorArcana["arcana5"] = "\uD83C\uDCE5";
        majorArcana["arcana6"] = "\uD83C\uDCE6";
        majorArcana["arcana7"] = "\uD83C\uDCE7";
        majorArcana["arcana8"] = "\uD83C\uDCE8";
        majorArcana["arcana9"] = "\uD83C\uDCE9";
        majorArcana["arcana10"] = "\uD83C\uDCEA";
        majorArcana["arcana11"] = "\uD83C\uDCEB";
        majorArcana["arcana12"] = "\uD83C\uDCEC";
        majorArcana["arcana13"] = "\uD83C\uDCED";
        majorArcana["arcana14"] = "\uD83C\uDCEE";
        majorArcana["arcana15"] = "\uD83C\uDCEF";
        majorArcana["arcana16"] = "\uD83C\uDCF0";
        majorArcana["arcana17"] = "\uD83C\uDCF1";
        majorArcana["arcana18"] = "\uD83C\uDCF2";
        majorArcana["arcana19"] = "\uD83C\uDCF3";
        majorArcana["arcana20"] = "\uD83C\uDCF4";
        majorArcana["arcana21"] = "\uD83C\uDCF5";
    })(majorArcana = cards.majorArcana || (cards.majorArcana = {}));
})(cards = exports.cards || (exports.cards = {}));
function initUnicode() {
    initSuits();
    initCards();
}
exports.initUnicode = initUnicode;
function initSuits() {
    unicode_1.unicodeSuits.set(suits_1.spades, suits.spades);
    unicode_1.unicodeSuits.set(suits_1.hearts, suits.hearts);
    unicode_1.unicodeSuits.set(suits_1.diamonds, suits.diamonds);
    unicode_1.unicodeSuits.set(suits_1.clubs, suits.clubs);
    unicode_1.unicodeSuits.set(suits_1.swords, suits.swords);
    unicode_1.unicodeSuits.set(suits_1.cups, suits.cups);
    unicode_1.unicodeSuits.set(suits_1.coins, suits.coins);
    // This is currently the same as "club", update this if/when a more appropriate character exists
    unicode_1.unicodeSuits.set(suits_1.wands, suits.wands);
    // These don't really have a "suit" symbol
    unicode_1.unicodeSuits.set(suits_1.trump, null);
    unicode_1.unicodeSuits.set(suits_1.majorArcana, null);
    unicode_1.unicodeSuits.set(suits_1.none, null);
}
function initCards() {
    unicode_1.unicodeCards.set(suits_1.spades, new Map([
        [ranks.standard.ace, cards.spades.ace],
        [ranks.nonStandard.one, cards.spades.one],
        [ranks.standard.two, cards.spades.two],
        [ranks.standard.three, cards.spades.three],
        [ranks.standard.four, cards.spades.four],
        [ranks.standard.five, cards.spades.five],
        [ranks.standard.six, cards.spades.six],
        [ranks.standard.seven, cards.spades.seven],
        [ranks.standard.eight, cards.spades.eight],
        [ranks.standard.nine, cards.spades.nine],
        [ranks.standard.ten, cards.spades.ten],
        [ranks.standard.jack, cards.spades.jack],
        [ranks.nonStandard.cavalier, cards.spades.cavalier],
        [ranks.nonStandard.knight, cards.spades.knight],
        [ranks.standard.queen, cards.spades.queen],
        [ranks.standard.king, cards.spades.king],
        [ranks.nonStandard.page, null]
    ]));
    unicode_1.unicodeCards.set(suits_1.hearts, new Map([
        [ranks.standard.ace, cards.hearts.ace],
        [ranks.nonStandard.one, cards.hearts.one],
        [ranks.standard.two, cards.hearts.two],
        [ranks.standard.three, cards.hearts.three],
        [ranks.standard.four, cards.hearts.four],
        [ranks.standard.five, cards.hearts.five],
        [ranks.standard.six, cards.hearts.six],
        [ranks.standard.seven, cards.hearts.seven],
        [ranks.standard.eight, cards.hearts.eight],
        [ranks.standard.nine, cards.hearts.nine],
        [ranks.standard.ten, cards.hearts.ten],
        [ranks.standard.jack, cards.hearts.jack],
        [ranks.nonStandard.cavalier, cards.hearts.cavalier],
        [ranks.nonStandard.knight, cards.hearts.knight],
        [ranks.standard.queen, cards.hearts.queen],
        [ranks.standard.king, cards.hearts.king],
        [ranks.nonStandard.page, null]
    ]));
    unicode_1.unicodeCards.set(suits_1.diamonds, new Map([
        [ranks.standard.ace, cards.diamonds.ace],
        [ranks.nonStandard.one, cards.diamonds.one],
        [ranks.standard.two, cards.diamonds.two],
        [ranks.standard.three, cards.diamonds.three],
        [ranks.standard.four, cards.diamonds.four],
        [ranks.standard.five, cards.diamonds.five],
        [ranks.standard.six, cards.diamonds.six],
        [ranks.standard.seven, cards.diamonds.seven],
        [ranks.standard.eight, cards.diamonds.eight],
        [ranks.standard.nine, cards.diamonds.nine],
        [ranks.standard.ten, cards.diamonds.ten],
        [ranks.standard.jack, cards.diamonds.jack],
        [ranks.nonStandard.cavalier, cards.diamonds.cavalier],
        [ranks.nonStandard.knight, cards.diamonds.knight],
        [ranks.standard.queen, cards.diamonds.queen],
        [ranks.standard.king, cards.diamonds.king],
        [ranks.nonStandard.page, null]
    ]));
    unicode_1.unicodeCards.set(suits_1.clubs, new Map([
        [ranks.standard.ace, cards.clubs.ace],
        [ranks.nonStandard.one, cards.clubs.one],
        [ranks.standard.two, cards.clubs.two],
        [ranks.standard.three, cards.clubs.three],
        [ranks.standard.four, cards.clubs.four],
        [ranks.standard.five, cards.clubs.five],
        [ranks.standard.six, cards.clubs.six],
        [ranks.standard.seven, cards.clubs.seven],
        [ranks.standard.eight, cards.clubs.eight],
        [ranks.standard.nine, cards.clubs.nine],
        [ranks.standard.ten, cards.clubs.ten],
        [ranks.standard.jack, cards.clubs.jack],
        [ranks.nonStandard.cavalier, cards.clubs.cavalier],
        [ranks.nonStandard.knight, cards.clubs.knight],
        [ranks.standard.queen, cards.clubs.queen],
        [ranks.standard.king, cards.clubs.king],
        [ranks.nonStandard.page, null]
    ]));
    unicode_1.unicodeCards.set(suits_1.trump, new Map([
        [ranks.trump.trump0, cards.trump.trump0],
        [ranks.trump.trump1, cards.trump.trump1],
        [ranks.trump.trump2, cards.trump.trump2],
        [ranks.trump.trump3, cards.trump.trump3],
        [ranks.trump.trump4, cards.trump.trump4],
        [ranks.trump.trump5, cards.trump.trump5],
        [ranks.trump.trump6, cards.trump.trump6],
        [ranks.trump.trump7, cards.trump.trump7],
        [ranks.trump.trump8, cards.trump.trump8],
        [ranks.trump.trump9, cards.trump.trump9],
        [ranks.trump.trump10, cards.trump.trump10],
        [ranks.trump.trump11, cards.trump.trump11],
        [ranks.trump.trump12, cards.trump.trump12],
        [ranks.trump.trump13, cards.trump.trump13],
        [ranks.trump.trump14, cards.trump.trump14],
        [ranks.trump.trump15, cards.trump.trump15],
        [ranks.trump.trump16, cards.trump.trump16],
        [ranks.trump.trump17, cards.trump.trump17],
        [ranks.trump.trump18, cards.trump.trump18],
        [ranks.trump.trump19, cards.trump.trump19],
        [ranks.trump.trump20, cards.trump.trump20],
        [ranks.trump.trump21, cards.trump.trump21]
    ]));
    unicode_1.unicodeCards.set(suits_1.majorArcana, new Map([
        [ranks.majorArcana.arcana0, cards.majorArcana.arcana0],
        [ranks.majorArcana.arcana1, cards.majorArcana.arcana1],
        [ranks.majorArcana.arcana2, cards.majorArcana.arcana2],
        [ranks.majorArcana.arcana3, cards.majorArcana.arcana3],
        [ranks.majorArcana.arcana4, cards.majorArcana.arcana4],
        [ranks.majorArcana.arcana5, cards.majorArcana.arcana5],
        [ranks.majorArcana.arcana6, cards.majorArcana.arcana6],
        [ranks.majorArcana.arcana7, cards.majorArcana.arcana7],
        [ranks.majorArcana.arcana8, cards.majorArcana.arcana8],
        [ranks.majorArcana.arcana9, cards.majorArcana.arcana9],
        [ranks.majorArcana.arcana10, cards.majorArcana.arcana10],
        [ranks.majorArcana.arcana11, cards.majorArcana.arcana11],
        [ranks.majorArcana.arcana12, cards.majorArcana.arcana12],
        [ranks.majorArcana.arcana13, cards.majorArcana.arcana13],
        [ranks.majorArcana.arcana14, cards.majorArcana.arcana14],
        [ranks.majorArcana.arcana15, cards.majorArcana.arcana15],
        [ranks.majorArcana.arcana16, cards.majorArcana.arcana16],
        [ranks.majorArcana.arcana17, cards.majorArcana.arcana17],
        [ranks.majorArcana.arcana18, cards.majorArcana.arcana18],
        [ranks.majorArcana.arcana19, cards.majorArcana.arcana19],
        [ranks.majorArcana.arcana20, cards.majorArcana.arcana20],
        [ranks.majorArcana.arcana21, cards.majorArcana.arcana21]
    ]));
    unicode_1.unicodeJokers.set(cards_1.jokerColor.white, cards.none.jokerWhite);
    unicode_1.unicodeJokers.set(cards_1.jokerColor.red, cards.none.jokerRed);
    unicode_1.unicodeJokers.set(cards_1.jokerColor.black, cards.none.jokerBlack);
}
//# sourceMappingURL=unicode.js.map