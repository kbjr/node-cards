
const { Card } = require('./card');
const { shuffle } = require('./rand');

/**
 * @type {Map.<Deck, Object>}
 */
const props = new WeakMap();

/**
 * @type {Set.<string>}
 */
const piles = new Set([ 'deck', 'discard', 'held' ]);

const Deck = exports.Deck = class Deck {
	/**
	 * @param cards {Card[]}
	 */
	constructor(cards = [ ]) {
		props.set(this, {
			cards: new Set(cards),
			deck: cards.slice(),
			held: [ ],
			discard: [ ]
		});

		// Assign each card to the deck
		cards.forEach((card) => {
			card.deck = this;
		});
	}

	/**
	 * @type {number}
	 */
	get totalLength() {
		return props.get(this).cards.size;
	}

	/**
	 * @type {number}
	 */
	get remainingLength() {
		return props.get(this).deck.length;
	}

	/**
	 * @param card {Card}
	 * @param pile {'deck'|'discard'|'held'}
	 * @return void
	 */
	add(card, pile = 'deck') {
		if (! piles.has(pile)) {
			throw new Error(`Deck - cannot add card to unknown pile "${pile}"`);
		}

		const _props = props.get(this);

		card.deck = this;

		_props.cards.add(card);
		_props[pile].push(card);
	}

	/**
	 * @param card {Card}
	 * @return void
	 */
	remove(card) {
		const { cards, deck, discard, held } = props.get(this);

		cards.delete(card);
		remove(deck, card);
		remove(discard, card);
		remove(held, card);

		card.deck = null;
	}

	/**
	 * @param count {number}
	 * @return {Card[]}
	 */
	draw(count = 1) {
		const { deck, held } = props.get(this);

		if (! deck.length) {
			throw new Error('Deck - Cannot draw from deck, no cards remaining');
		}

		const cards = a;
	}

	drawToDiscard() {
		// 
	}

	discard() {
		// 
	}
};

const remove = (array, value) => {
	const index = array.indexOf(value);

	if (index >= 0) {
		array.splice(index, 1);
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
	shuffle(this.deck, exports.useArc4 ? 'ARC4' : 'SIMPLE');
};

/**
 * Shuffle the discard pile and append them to the deck
 *
 * @access  public
 * @return  void
 */
Deck.prototype.shuffleDiscard = function() {
	shuffle(this.discard, exports.useArc4 ? 'ARC4' : 'SIMPLE');
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
	exports[name].prototype = new Deck();
};
