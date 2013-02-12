var cards = require('../lib/cards')
 , vows = require('vows')


 vows.describe("Card Deck").addBatch({
  "Poker Deck": {
    topic: new cards.PokerDeck(),
    shuffleAll : function(deck){
      deck.shuffleAll()
    }
  }


 }).run()


