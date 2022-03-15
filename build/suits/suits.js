"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.none = exports.majorArcana = exports.wands = exports.coins = exports.cups = exports.swords = exports.trump = exports.clubs = exports.diamonds = exports.hearts = exports.spades = void 0;
const _suit_1 = require("./_suit");
// "Standard" Cards
exports.spades = new _suit_1.Suit('spades');
exports.hearts = new _suit_1.Suit('hearts');
exports.diamonds = new _suit_1.Suit('diamonds');
exports.clubs = new _suit_1.Suit('clubs');
exports.trump = new _suit_1.Suit('trump');
// Minor / Major Arcana (Tarot)
exports.swords = new _suit_1.Suit('swords');
exports.cups = new _suit_1.Suit('cups');
exports.coins = new _suit_1.Suit('coins');
exports.wands = new _suit_1.Suit('wands');
exports.majorArcana = new _suit_1.Suit('major arcana');
// None
exports.none = new _suit_1.Suit('none');
//# sourceMappingURL=suits.js.map