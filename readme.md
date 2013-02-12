# Install

```bash
$ npm install cards
```

# Usage

```javascript
var cards = require('cards');

// Create a new 52 card poker deck
var deck = new cards.PokerDeck();

// Shuffle the deck
deck.shuffleAll();

// Draw a card
var card = deck.draw();
console.log(card);
```

## Creating a Deck

There are multiple built-in deck types. These include `PokerDeck`, `OldMaidDeck`, `EuchreDeck`, `BarajaDeck` `PinochelDeck`, and `PiquetDeck`. The only one of these that can take any parameters is the poker deck which takes a config object, allowing the addition of jokers.

```javascript
var deckWithJokers = new cards.PokerDeck({ jokers: 2 });
```

Optionally, you can also create an empty deck and add cards to it your self. This is done with the base `Deck` constructor.

```javascript
var deck = new cards.Deck();

// The new deck is completely empty
console.log(deck.cards.length);  // 0

// Add a new card to the deck
deck.add(new cards.Card('spade', 3));
```

You can extend the base constructor to create your own custom deck types.

```javascript
// The generators object contains functions for creating new decks
cards.generators.ourWeirdDeck = function(deck) {
	['club', 'diamond', 'heart', 'spade'].forEach(function(suit) {
		[2, 4, 6, 8, 10, 'Q'].forEach(function(value) {
			deck.add(new cards.Card(suit, value));
		});
	});
};

// Create the new deck constructor and point it to our generator
cards.Deck.createType('WeirdDeck', 'ourWeirdDeck');

// Now we can create instances of our new deck type
var weirdDeck = new cards.WeirdDeck();
```

## Piles

Each deck consists of three "piles" of cards. No card can appear in more than one pile at a time and every card exists in one of the three piles at all times. These piles are `"deck"`, `"held"`, and `"discard"`. By default, all cards in a deck are in the `deck` pile. When a card is drawn, it is moved to the `held` pile and when discarded, it is moved to the `discard` pile.

```javascript
var deck = new cards.PokerDeck();

deck.deck.length === 52;
deck.held.length === 0;
deck.discard.length === 0;

deck.draw();

deck.deck.length === 51;
deck.held.length === 1;
deck.discard.length === 0;

// This is a shortcut for deck.discard(deck.draw())
deck.drawToDiscard();

deck.deck.length === 50;
deck.held.length === 1;
deck.discard.length === 1;
```

## API

### Boolean cards.useArc4 = false

The `useArc4` flag changes how cards are shuffled. By default, the randomization needed for shuffling is creating using the built-in `Math.random()` function. By setting this flag to true, all shuffle functions will instead use the better (but slower) ARC4 <abbr title="Psuedo-Random Number Generator">PRNG</abbr>.

### cards.Card ( String suit, String value )

The constructor for creating new playing card objects.

#### String Card::suit

The suit of the card. The only suits created by the built-in types are "spade", "heart", "club", "diamond", and "other" (for special cards like jokers).

#### String Card::value

The value of the card. This value is cast to a string, so things like `new Card("spade", 3)` will work, but this property will produce the value `"3"` as a string.

#### Deck Card::deck

The deck object that this card belongs to.

#### String Card::unicodeString ( void )

Get a unicode string representing the card, eg.

```javascript
var card = new cards.Card("spade", 3);

card.unicodeString();  // "3♠"
```

### cards.Pile < Array ( void )

This constructor creates the "deck", "held", and "discard" piles inside of each deck. The pile constructor inherits from `Array`.

#### Array Pile::empty ( void )

Empties out the pile and returns an array of the values removed.

#### void Pile::copyInto ( Array arr )

Copy all values onto the end of another array (or array-like object).

#### void Pile::emptyInto ( Array arr )

Empty out the pile and append all of the values onto the end of another array (or array-like object).

#### mixed Pile::shiftInto ( Array arr )

Shift one value off of the pile and push it onto another array (or array-like object).

### cards.Deck ([ mixed generator ])

The base constructor for creating new decks of cards. The generator argument is either a string (the name of a function on the `cards.generators` object) or a function.

#### void Deck::add ( Card card[, Object cfg { pile: "deck" } ])

Adds a card to the deck. If the card is already in a deck, it will first be removed from that deck. The optional config object takes one property `pile` which controlls which of the three piles the card will be added to.

#### void Deck::remove ( Card card )

Removes a card from the deck.

#### mixed Deck::draw ([ Number count ])

Draws a card(s) from the "deck" pile, moving them into the "held" pile and returns it. If there are no cards left in the deck, a `RangeError` will be thrown. If a count value is given, that many cards will be drawn and returned in an array. If there are cards in the deck, but not enough to meet the count requirement, all of the remaining cards will be returned in an array and no error will be throw. As such, you should check the length of the array you get back when doing multiple card draws.

#### mixed Deck::drawToDiscard ([ Number count ])

This method works the same as `Deck::draw()` except that cards are moved to "discard" instead of held.

#### Array Deck::find ([ mixed card ])

Finds a card in the deck. If the argument given is a `Card` object, that specific card will be found and returned with some extra positional information (see below). An array argument can also be given, though, in the format `[suit, value]`. If this is the case, all matching cards will be found (there can be more than one of the same kind of card in a deck, for example, in a Pinochel deck where every card is duplicated).

```javascript
var card = deck.draw();

var found = deck.find(card);

// 
// found = [
//   {
//     pileName: String,  (eg. "deck" or "discard")
//     pile: cards.Pile,  (the actual Pile object)
//     index: Number,     (the card's index in the pile)
//     card: cards.Card   (the actual Card object)
//   }
// ]
//

// You can also search for a card by description, like so:
deck.find([ "spade", "A" ]);
```

#### void Deck::shuffleAll ( void )

Moves all cards back into the "deck" pile and shuffles.

#### void Deck::shuffleRemaining ( void )

Shuffles all cards remaining in the "deck" pile.

#### void Deck::shuffleDiscard ( void )

Shuffles all cards in the "discard" pile and then appends them to the deck.

#### void Deck::discardAllHeld ( void )

Moves all cards from the "held" pile to the "discard" pile.

### void cards.Deck.createType ( String name[, mixed generator[, function constructor ]])

Creates a new constructor at `cards[name]` that will create a new deck using the given generator. If a constructor function is given it will be called after invoking the `Deck` constructor.

### cards.PokerDeck < cards.Deck ([ Object cfg { jokers: 0 } ])

Creates a new Poker deck. If the config object is given, the number given in the `jokers` property will determine the number of joker cards added to the deck.

### cards.OldMaidDeck < cards.Deck ( void )

Creates a new Old Maid deck: a standard Poker deck with no jokers and a special card called a "maid" card.

### cards.EuchreDeck < cards.Deck ( void )

Creates a new Euchre deck.

### cards.BarajaDeck < cards.Deck ( void )

Creates a new Baraja deck.

### cards.PinochelDeck < cards.Deck ( void )

Creates a new Pinochel deck.

### cards.PiquetDeck < cards.Deck ( void )

Creates a new Piquet deck.

# MIT License

Copyright (c) 2012 James Brumond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


