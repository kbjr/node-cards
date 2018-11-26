
Node.js library for dealing with playing cards of all types

[https://github.com/kbjr/node-cards](https://github.com/kbjr/node-cards)

Fully extensible, you can create custom versions of any component to make different types of deck, including support for custom decks, suits, ranks, and cards.

And the API is fully documented at http://kbjr.github.io/node-cards/index.html

### Install

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
  - Trump suit / Fool card
  - [Minor Arcana][1]
    - Suits: coins, wands, cups, swords
    - Values: 2 - 10, [Page](https://en.wikipedia.org/wiki/Page_of_Wands), [Knight / Cavalier][2], Queen, King, Ace
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

### Example

```javascript
const { decks } = require('cards');

// Create a standard 52 card deck + 2 jokers
const deck = new decks.StandardDeck({ jokers: 2 });

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

### TODO

- Finish building out poker hand evaluation logic

[1]: https://en.wikipedia.org/wiki/Minor_Arcana
[2]: https://en.wikipedia.org/wiki/Knight_(playing_card)

---

Like my work?

[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/U7U8MIC8)
