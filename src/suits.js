
const { Suit } = require('./suit');

// "Standard" Cards
exports.spades = new Suit('spades');
exports.hearts = new Suit('hearts');
exports.diamonds = new Suit('diamonds');
exports.clubs = new Suit('clubs');
exports.trump = new Suit('trump');

// Minor / Major Arcana (Tarot)
exports.swords = new Suit('swords');
exports.cups = new Suit('cups');
exports.coins = new Suit('coins');
exports.wands = new Suit('wands');
exports.majorArcana = new Suit('major arcana');

// None
exports.none = new Suit('none');
