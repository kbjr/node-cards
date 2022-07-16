import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import { Suit } from '../src/suits';
import { Rank } from '../src/ranks';
import { Deck } from '../src/decks';
import { Card } from '../src';

describe('Card', function () {
	describe('Given a suit', function () {
		beforeEach(function () {
			this.suit001 = new Suit('suit001');
		});

		describe('and a rank', function () {
			beforeEach(function () {
				this.rank001 = new Rank('1', 'rank001');
			});

			describe('then toString', function () {
				beforeEach(function () {
					this.card = new Card(this.suit001, this.rank001);
				});

				it('should return a suit and rank string.', function () {
					const expected = `<Card suit=${this.suit001.name} value=${this.rank001.name}>`;
					expect(this.card.toString()).to.equal(expected);
				});
			});

			describe('when a deck is set', function () {
				beforeEach(function () {
					this.deck001 = new Deck();
					this.card = new Card(this.suit001, this.rank001);
					this.card.deck = this.deck001;
				});

				it('then deck should return instance of Deck.', function () {
					expect(this.card.deck).to.be.instanceof(Deck);
				});
			});

			describe('when an invalid desk is set', function () {
				beforeEach(function () {
					this.deckInvalid = new Suit('notADeck');
					this.card = new Card(this.suit001, this.rank001);
				});

				it('then it should throw an invalid value error.', function () {
					expect(() => {
						this.card.deck = this.deckInvalid;
					}).to.throw('Must be an instance of Deck');
				});
			});
		});
	});
});
