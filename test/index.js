var cards = require('../lib/cards')
 , vows = require('vows')
 , assert = require('assert')


 vows.describe("Card Deck").addBatch({
  "Poker Deck": {
    topic: function(){return new cards.PokerDeck()},

    draw : function(deck){
      var card = deck.draw();
      assert.equal(card.toString(), "[Card club:2]");
      assert.equal(card.unicodeString(), "2♣");
    },

    shuffleAll : function(deck){
      deck.shuffleAll()
    }

  }


 }).run()


