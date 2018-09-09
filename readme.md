
```bash
$ npm install cards
```

### Features

- Ability to create decks of cards of various configurations
  - Shuffle the deck
  - Draw cards and discard cards
- Card types
  - Standard suits and values
    - Suits: spades, hearts, diamonds, clubs
    - Values: 2 - 10, Jack, Queen, King, Ace
    - Supports the [Knight / Cavalier card](https://en.wikipedia.org/wiki/Knight_\(playing_card\)) card value found in some decks
    - Supports the [Page](https://en.wikipedia.org/wiki/Page_of_Wands) card value found in the [Minor Arcana](https://en.wikipedia.org/wiki/Minor_Arcana)
  - Trump suit / Fool card
  - Minor Arcana
    - Suits: coins, wands, cups, swords
    - Values: 2 - 10, Page, Knight, Queen, King, Ace
  - Major Arcana (Tarot cards)
  - Jokers
- Deck types
  - Standard 52 card deck
  - 78 card tarot deck
  - 24 card euchre deck
  - 48 card pinochel deck
  - 32 card piquet deck
  - 40 card baraja deck
  - 22 card major arcana deck
  - Support for creating custom decks
- Supports unicode playing card characters where available
- Helper utilities for finding and ranking poker hands
  - Includes support for defining rules around wild cards

### Example

```javascript
const { StandardDeck } = require('cards');

// Create a standard 52 card deck + 2 jokers
const deck = new StandardDeck({ jokers: 2 });

// Shuffle the deck
deck.shuffleAll();

// Draw a hand of five cards from the deck
const hand = deck.draw(5);

// Pull 2 cards out of the hand to exchange
const toExchange = hand.splice(2, 2);

// Discard those 2 cards
deck.discard(toExchange);

// Draw 2 new ones from the deck
hand.push(...deck.draw(2));
```
