
const { useArc4, seedArc4 } = require('./rand');

const { Card } = require('./card');
const { Joker } = require('./card/joker');
const { Maid } = require('./card/maid');

const { Deck } = require('./deck');

const unicode = require('./unicode');

module.exports = {
	useArc4,
	seedArc4,
	Card,
	Joker,
	Maid,
	Deck,
	unicode,
};










// ------------------------------------------------------------------
//  @class  PokerDeck

var PokerDeck = exports.PokerDeck = function(cfg) {
	Deck.call(this, 'poker');
	if (cfg && cfg.jokers) {
		for (var i = 0; i < cfg.jokers; i++) {
			this.add(new Card('other', 'joker'));
		}
	}
};

PokerDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @class  OldMaidDeck

var OldMaidDeck = exports.OldMaidDeck = function() {
	Deck.call(this, 'oldMaid');
};

OldMaidDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @class  EuchreDeck

var EuchreDeck = exports.EuchreDeck = function() {
	Deck.call(this, 'euchre');
};

EuchreDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @class  PinochelDeck

var PinochelDeck = exports.PinochelDeck = function() {
	Deck.call(this, 'pinochel');
};

PinochelDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @class  PiquetDeck

var PiquetDeck = exports.PiquetDeck = function() {
	Deck.call(this, 'piquet');
};

PiquetDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @class  BarajaDeck

var BarajaDeck = exports.BarajaDeck = function() {
	Deck.call(this, 'baraja');
};

BarajaDeck.prototype = new Deck();

// ------------------------------------------------------------------
//  @object  generators

exports.generators = {
	poker: function(deck) {
		['club', 'diamond', 'heart', 'spade'].forEach(function(suit) {
			[2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'].forEach(function(value) {
				deck.add(new Card(suit, value));
			});
		});
	},
	
	oldMaid: function(deck) {
		exports.generators.poker(deck);
		deck.add(new Card('other', 'maid'));
	},
	
	euchre: function(deck) {
		['club', 'diamond', 'heart', 'spade'].forEach(function(suit) {
			[9, 10, 'J', 'Q', 'K', 'A'].forEach(function(value) {
				deck.add(new Card(suit, value));
			});
		});
	},
	
	pinochel: function(deck) {
		exports.generators.euchre(deck);
		exports.generators.euchre(deck);
	},
	
	piquet: function(deck) {
		['club', 'diamond', 'heart', 'spade'].forEach(function(suit) {
			[7, 8, 9, 10, 'J', 'Q', 'K', 'A'].forEach(function(value) {
				deck.add(new Card(suit, value));
			});
		});
	},

	baraja: function(deck){
		['sword', 'club', 'coin', 'cup'].forEach(function(suit) {
			[1, 2, 3, 4, 5, 6, 7, 10, 11, 12].forEach(function(value) {
				deck.add(new Card(suit, value));
			});
		});
	}

};

