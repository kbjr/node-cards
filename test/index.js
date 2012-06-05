
global.cards = require('../lib/cards');

global.createDeck = function() {
	var deck = new cards.PokerDeck();
	deck.shuffleAll();
	return deck;
};



