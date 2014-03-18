/**
 * Playing Card Module
 *
 * @author     James Brumond
 * @copyright  Copyright 2012 James Brumond
 * @license    Dual licensed under MIT and GPL
 *
 * ----------------------------------------------
 *
 * cards.useArc4 boolean
 * 
 * cards.Card ( string suit, string value )
 *       Card::suit string
 *       Card::value string
 *       Card::deck Deck
 *       Card::unicodeString ( void )
 * 
 * cards.Pile < Array ( void )
 *       Pile::empty ( void )
 *       Pile::emptyInto ( mixed arr )
 *       Pile::copyInto ( mixed arr )
 *       Pile::shiftInto ( mixed arr )
 * 
 * cards.Deck ( mixed generator )
 *       Deck::add ( Card card[, object cfg ])
 *       Deck::remove ( Card card )
 *       Deck::draw ([ number count ])
 *       Deck::drawToDiscard ([ number count ])
 *       Deck::discard ( mixed card )
 *       Deck::find ( mixed card )
 *       Deck::shuffleAll ( void )
 *       Deck::shuffleRemaining ( void )
 *       Deck::shuffleDiscard ( void )
 *       Deck::discardAllHeld ( void )
 * 
 * cards.PokerDeck < Deck ([ object cfg { jokers: number } ])
 * cards.OldMaidDeck < Deck ( void )
 * cards.EuchreDeck < Deck ( void )
 * cards.PinochelDeck < Deck ( void )
 * cards.PiquetDeck < Deck ( void )
 * cards.BarajaDeck < Deck ( void )
 * cards.generators { name: function }
 */

var rand = require('rand-utils');

exports.useArc4 = false;

// ------------------------------------------------------------------
//  @class  Card

var Card = exports.Card = function(suit, value) {
	this.suit   = suit;
	this.value  = String(value);
	this.deck   = null;
};

Card.prototype.toString = function() {
	return '[Card ' + this.suit + ':' + this.value + ']';
};

Card.prototype.unicodeString = function() {
	var suit = Card.suitUnicodeStrings[this.suit] || this.suit;
	return this.value + suit;
};

Card.suitUnicodeStrings = {
	heart:    '♥',
	diamond:  '♦',
	club:     '♣',
	spade:    '♠',
	sword:    '☨',
	coin:     '⚪',
	cup:      '☕'
};

// ------------------------------------------------------------------
//  @class  Pile < Array

var Pile = exports.Pile = function() {
	Array.call(this);
};
Pile.prototype = new Array();

/**
 * Empty out the pile
 *
 * @access  public
 * @return  array
 */
Pile.prototype.empty = function() {
	return this.splice(0, this.length);
};

/**
 * Copy all values into a different pile
 *
 * @access  public
 * @param   object    an array-like object
 * @return  void
 */
Pile.prototype.copyInto = function(arr) {
	arr.push.apply(arr, this.slice());
};

/**
 * Empty all values and move them into a different pile
 *
 * @access  public
 * @param   object    an array-like object
 * @return  void
 */
Pile.prototype.emptyInto = function(arr) {
	arr.push.apply(arr, this.empty());
};

/**
 * Shift off the first value and push it onto a different pile
 *
 * @access  public
 * @param   object    an array-like object
 * @return  mixed
 */
Pile.prototype.shiftInto = function(arr) {
	var value = this.shift();
	arr.push(value);
	return value;
};

// ------------------------------------------------------------------
//  @class  Deck

var piles = ['deck', 'discard', 'held'];

var Deck = exports.Deck = function(generator) {
	this.cards    = new Pile();
	this.deck     = new Pile();
	this.held     = new Pile();
	this.discard  = new Pile();
	
	if (generator) {
		if (typeof generator === 'string') {
			generator = exports.generators[generator];
		}
		generator(this);
	}
};

/**
 * Add a card to the deck
 *
 * @access  public
 * @param   object    the card object
 * @param   object    {pile: string}
 * @return  void
 */
Deck.prototype.add = function(card, cfg) {
	if (card.deck) {
		card.deck.remove(card);
	}
	card.deck = this;
	
	var pile = (cfg && cfg.pile) ? cfg.pile : 'deck';
	if (piles.indexOf(pile) < 0) {
		throw new Error('Cannot add card to non-existent pile "' + pile + '"');
	}
	
	this.cards.push(card);
	this[pile].push(card);
};

/**
 * Remove a card from the deck
 *
 * @access  public
 * @param   object    the card object
 * @return  void
 */
Deck.prototype.remove = function(card) {
	var self = this;
	
	Deck._remove(this.cards, card);
	piles.forEach(function(pile) {
		Deck._remove(self[pile], card);
	});
	
	card.deck = null;
};

Deck._remove = function(pile, card) {
	var index = pile.indexOf(card);
	if (index >= 0) {
		pile.splice(index, 1);
	}
};

/**
 * Draw a card(s) from the deck
 *
 * @access  public
 * @param   number    the number of cards to draw
 * @param   object    the deck to draw into
 * @return  object
 */
Deck.prototype.draw = function(count, _into) {
	var self = this;
	
	if (! this.deck.length) {
		throw new RangeError('Cannot draw card from deck; No cards remaining.');
	}
	
	if (! count){
		return this.deck.shiftInto(_into || this.held);
	}
	
	var cards = [ ];
	for (var i = 0; i < count; i++){	
		cards.push(self.draw(0, _into || this.held));
	}
	
	return cards;
};

/**
 * Draw a card(s) from the deck and discard
 *
 * @access  public
 * @param   number    the number of cards to draw
 * @return  object
 */
Deck.prototype.drawToDiscard = function(count) {
	return this.draw(count, this.discard);
};

/**
 * Discard a card
 *
 * @access  public
 * @param   object    the card object
 * @return  void
 */
Deck.prototype.discard = function(card) {
	if (Array.isArray(card) && typeof card[0] !== 'string') {
		card.forEach(this.discard.bind(this));
	}
	
	card = this.find(card);
	if (! card) {
		throw new Error('Given "card" value does not belong to this deck');
	}
	card.pile.splice(card.index, 1);
	this.discard.push(card.card);
};

/**
 * Find a card object and its location
 *
 * @access  public
 * @param   object    the card to find
 * @return  object
 */
Deck.prototype.find = function(card) {
	var self = this;
	if (Array.isArray(card)) { // Allow card to be an array [suit, value]
		var cards = [ ];
		card[1] = String(card[1]);
		for (var i = 0, c = this.cards.length; i < c; i++) {
			if (this.cards[i].suit === card[0] && this.cards[i].value === card[1]) {
				cards.push(this.cards[i]);
			}
		}
		return cards.map(this.find.bind(this));
	}
	if (! card instanceof Card) {
		throw new Error('Cannot find non-card value');
	}
	var ret = null;
	piles.forEach(function(pile) {
		if (! ret) {
			var index = self[pile].indexOf(card);
			if (index >= 0) {
				ret = [{
					index: index,
					pileName: pile,
					pile: self[pile],
					card: card
				}];
			}
		}
	});
	return ret;
};

/**
 * Shuffle all cards into the deck pile
 *
 * @access  public
 * @return  void
 */
Deck.prototype.shuffleAll = function() {
	this.held.empty();
	this.discard.empty();
	this.deck.empty();
	this.cards.copyInto(this.deck);
	this.shuffleRemaining();
};

/**
 * Shuffle all cards remaining in the deck
 *
 * @access  public
 * @return  void
 */
Deck.prototype.shuffleRemaining = function() {
	rand.shuffle(this.deck, exports.useArc4 ? 'ARC4' : 'SIMPLE');
};

/**
 * Shuffle the discard pile and append them to the deck
 *
 * @access  public
 * @return  void
 */
Deck.prototype.shuffleDiscard = function() {
	rand.shuffle(this.discard, exports.useArc4 ? 'ARC4' : 'SIMPLE');
	this.discard.emptyInto(this.deck);	
};

/**
 * Move all cards in the held pile to discard
 *
 * @access  public
 * @return  void
 */
Deck.prototype.discardAllHeld = function() {
	this.held.emptyInto(this.discard);
};

/**
 * Creates new simple deck constructors
 */
Deck.createType = function(name, generator, constructor) {
	exports[name] = function() {
		Deck.call(this, generator);
		if (typeof constructor === 'function') {
			constructor.apply(this, arguments);
		}
	};
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

