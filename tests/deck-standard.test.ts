import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import { decks } from '../src';
import { Card } from '../src';

describe.only('StandardDeck', function () {
	it('should exist, and be a function', function () {
		expect(decks.StandardDeck).to.be.a('function');
	});

	it('should be creatable', function () {
		expect(create).to.not.throw();

		function create() {
			return new decks.StandardDeck();
		}
	});

	it('should extend Deck', function () {
		expect(new decks.StandardDeck()).to.be.instanceof(decks.Deck);
	});

	// TODO: Test rng option
	// TODO: Test jokers option

	describe('Given a standard deck', function () {
		beforeEach(function () {
			this.deck = new decks.StandardDeck();
		});

		describe('then it should have', function () {
			it('total of 52 cards.', function () {
				expect(this.deck.totalLength).to.equal(52);
			});

			it('52 cards remaining.', function () {
				expect(this.deck.remainingLength).to.equal(52);
				expect(this.deck.remainingCards).to.have.length(52);
			});

			it('0 held cards.', function () {
				expect(this.deck.heldCards).to.have.length(0);
			});

			it('0 discarded cards.', function () {
				expect(this.deck.discardedCards).to.have.length(0);
			});
		});

		describe('when 2 cards are drawn', function () {
			beforeEach(function () {
				this.cards = this.deck.draw(2);
			});

			describe('then it should have', function () {
				it('total of 52 cards.', function () {
					expect(this.deck.totalLength).to.equal(52);
				});

				it('50 cards remaining.', function () {
					expect(this.deck.remainingLength).to.equal(50);
					expect(this.deck.remainingCards).to.have.length(50);
				});

				it('2 held cards.', function () {
					expect(this.deck.heldCards).to.have.length(2);
				});

				it('0 discarded cards.', function () {
					expect(this.deck.discardedCards).to.have.length(0);
				});
			});

			it('then my cards should be 2.', function () {
				expect(this.cards).to.have.length(2);
				this.cards.forEach((card) => {
					expect(card).to.be.instanceof(Card);
				});
			});
		});
	});
});
