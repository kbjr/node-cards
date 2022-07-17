import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import { decks } from '../src';
import { Card } from '../src';
import { Suit } from '../src/suits';
import { Rank } from '../src/ranks';

describe('StandardDeck', function () {
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

	describe('Given default standard deck options', function () {
		// No actual options given. Go with default.
		describe('and a standard deck', function () {
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

			describe('and one new card', function () {
				beforeEach(function () {
					this.suit001 = new Suit('suit001');
					this.rank001 = new Rank('r1', 'rank001');
					this.card001 = new Card(this.suit001, this.rank001);
				});

				describe('when the card is added to the deck', function () {
					beforeEach(function () {
						this.deck.add(this.card001);
					});

					describe('then it should have', function () {
						it('total of 53 cards.', function () {
							expect(this.deck.totalLength).to.equal(53);
						});

						it('53 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(53);
							expect(this.deck.remainingCards).to.have.length(53);
						});

						it('0 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(0);
						});

						it('0 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(0);
						});
					});

					describe('and then it is removed', function () {
						beforeEach(function () {
							this.deck.remove(this.card001);
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
					});
				});
			});

			describe('and a second standard deck', function () {
				beforeEach(function () {
					this.deck002 = new decks.StandardDeck();
				});

				describe('when the two decks are merged', function () {
					beforeEach(function () {
						this.deck.merge(this.deck002);
					});

					describe('then it should have', function () {
						it('total of 104 cards.', function () {
							expect(this.deck.totalLength).to.equal(104);
						});

						it('104 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(104);
							expect(this.deck.remainingCards).to.have.length(104);
						});

						it('0 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(0);
						});

						it('0 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(0);
						});
					});
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

				it('then my cards should total 2.', function () {
					expect(this.cards).to.have.length(2);
					this.cards.forEach((card) => {
						expect(card).to.be.instanceof(Card);
					});
				});
			});

			describe('when -46 cards are drawn', function () {
				beforeEach(function () {
					this.cards = this.deck.draw(-46);
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

				it('then my cards should total 0.', function () {
					expect(this.cards).to.have.length(0);
				});
			});

			describe('when 999888777 cards are drawn', function () {
				it('then a not enough cards error should be raised.', function () {
					expect(() => {
						this.cards = this.deck.draw(999888777);
					}).to.throw('not enough cards');
				});
			});

			describe('when default number of cards are drawn from the bottom of the deck', function () {
				beforeEach(function () {
					this.cards = this.deck.drawFromBottom(1);
				});

				describe('then it should have', function () {
					it('total of 52 cards.', function () {
						expect(this.deck.totalLength).to.equal(52);
					});

					it('51 cards remaining.', function () {
						expect(this.deck.remainingLength).to.equal(51);
						expect(this.deck.remainingCards).to.have.length(51);
					});

					it('1 held cards.', function () {
						expect(this.deck.heldCards).to.have.length(1);
					});

					it('0 discarded cards.', function () {
						expect(this.deck.discardedCards).to.have.length(0);
					});
				});

				it('then my cards should total 1.', function () {
					expect(this.cards).to.have.length(1);
				});

				describe('and then 3 more cards are drawn from the bottom of the deck', function () {
					beforeEach(function () {
						this.cards = [...this.cards, ...this.deck.drawFromBottom(3)];
					});

					describe('then it should have', function () {
						it('total of 52 cards.', function () {
							expect(this.deck.totalLength).to.equal(52);
						});

						it('48 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(48);
							expect(this.deck.remainingCards).to.have.length(48);
						});

						it('4 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(4);
						});

						it('0 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(0);
						});
					});

					it('then my cards should total 4.', function () {
						expect(this.cards).to.have.length(4);
					});
				});
			});

			describe('when 999888777 cards are drawn from the bottom of the deck', function () {
				it('then a not enough cards error should be raised.', function () {
					expect(() => {
						this.cards = this.deck.drawFromBottom(999888777);
					}).to.throw('not enough cards');
				});
			});

			describe('when default number of cards are drawn to discard', function () {
				beforeEach(function () {
					this.cards = this.deck.drawToDiscard();
				});

				describe('then it should have', function () {
					it('total of 52 cards.', function () {
						expect(this.deck.totalLength).to.equal(52);
					});

					it('51 cards remaining.', function () {
						expect(this.deck.remainingLength).to.equal(51);
						expect(this.deck.remainingCards).to.have.length(51);
					});

					it('0 held cards.', function () {
						expect(this.deck.heldCards).to.have.length(0);
					});

					it('1 discarded cards.', function () {
						expect(this.deck.discardedCards).to.have.length(1);
					});
				});

				it('then my cards should total 1.', function () {
					expect(this.cards).to.have.length(1);
				});
			});

			describe('when 999888777 cards are drawn to discard', function () {
				it('then a not enough cards error should be raised.', function () {
					expect(() => {
						this.cards = this.deck.drawToDiscard(999888777);
					}).to.throw('not enough cards');
				});
			});

			describe('when default number of cards are drawn from bottom of the deck to discard', function () {
				beforeEach(function () {
					this.cards = this.deck.drawToDiscardFromBottom();
				});

				describe('then it should have', function () {
					it('total of 52 cards.', function () {
						expect(this.deck.totalLength).to.equal(52);
					});

					it('51 cards remaining.', function () {
						expect(this.deck.remainingLength).to.equal(51);
						expect(this.deck.remainingCards).to.have.length(51);
					});

					it('0 held cards.', function () {
						expect(this.deck.heldCards).to.have.length(0);
					});

					it('1 discarded cards.', function () {
						expect(this.deck.discardedCards).to.have.length(1);
					});
				});

				it('then my cards should total 1.', function () {
					expect(this.cards).to.have.length(1);
				});
			});

			describe('when 999888777 cards are drawn to discard', function () {
				it('then a not enough cards error should be raised.', function () {
					expect(() => {
						this.cards = this.deck.drawToDiscardFromBottom(999888777);
					}).to.throw('not enough cards');
				});
			});
		});
	});

	describe('Given a standard deck option of three jokers', function () {
		beforeEach(function () {
			this.options = {
				jokers: 3,
			};
		});

		describe('and a standard deck', function () {
			beforeEach(function () {
				this.deck = new decks.StandardDeck(this.options);
			});

			describe('then it should have', function () {
				it('total of 55 cards.', function () {
					expect(this.deck.totalLength).to.equal(55);
				});

				it('55 cards remaining.', function () {
					expect(this.deck.remainingLength).to.equal(55);
					expect(this.deck.remainingCards).to.have.length(55);
				});

				it('0 held cards.', function () {
					expect(this.deck.heldCards).to.have.length(0);
				});

				it('0 discarded cards.', function () {
					expect(this.deck.discardedCards).to.have.length(0);
				});

				it('3 jokers.', function () {
					this.cards = this.deck.findCards((card) => {
						return card.rank.name == 'Joker';
					});

					expect(this.cards).to.have.length(3);
				});
			});

			describe('when 2 cards are drawn', function () {
				beforeEach(function () {
					this.cards = this.deck.draw(2);
				});

				describe('then it should have', function () {
					it('total of 55 cards.', function () {
						expect(this.deck.totalLength).to.equal(55);
					});

					it('53 cards remaining.', function () {
						expect(this.deck.remainingLength).to.equal(53);
						expect(this.deck.remainingCards).to.have.length(53);
					});

					it('2 held cards.', function () {
						expect(this.deck.heldCards).to.have.length(2);
					});

					it('0 discarded cards.', function () {
						expect(this.deck.discardedCards).to.have.length(0);
					});
				});

				it('then my cards should total 2.', function () {
					expect(this.cards).to.have.length(2);
					this.cards.forEach((card) => {
						expect(card).to.be.instanceof(Card);
					});
				});

				it('then three jokers should still be present.', function () {
					const jokers = this.deck.findCards((card) => {
						return card.rank.name == 'Joker';
					});

					expect(jokers).to.have.length(3);
				});

				describe('and 2 cards are discarded', function () {
					beforeEach(function () {
						this.deck.drawToDiscard(2);
					});

					describe('then it should have', function () {
						it('total of 55 cards.', function () {
							expect(this.deck.totalLength).to.equal(55);
						});

						it('51 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(51);
							expect(this.deck.remainingCards).to.have.length(51);
						});

						it('2 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(2);
						});

						it('2 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(2);
						});
					});

					it('then three jokers should still be present.', function () {
						const jokers = this.deck.findCards((card) => {
							return card.rank.name == 'Joker';
						});

						expect(jokers).to.have.length(3);
					});
				});

				describe('and the deck is shuffled', function () {
					beforeEach(function () {
						this.deck.shuffleAll();
					});

					describe('then it should have', function () {
						it('total of 55 cards.', function () {
							expect(this.deck.totalLength).to.equal(55);
						});

						it('55 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(55);
							expect(this.deck.remainingCards).to.have.length(55);
						});

						it('0 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(0);
						});

						it('0 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(0);
						});
					});

					it('then three jokers should still be present.', function () {
						const jokers = this.deck.findCards((card) => {
							return card.rank.name == 'Joker';
						});

						expect(jokers).to.have.length(3);
					});
				});

				describe('and the discard pile is shuffled and placed at end of the deck', function () {
					beforeEach(function () {
						this.deck.shuffleDiscard();
					});

					describe('then it should have', function () {
						it('total of 55 cards.', function () {
							expect(this.deck.totalLength).to.equal(55);
						});

						it('53 cards remaining.', function () {
							expect(this.deck.remainingLength).to.equal(53);
							expect(this.deck.remainingCards).to.have.length(53);
						});

						it('2 held cards.', function () {
							expect(this.deck.heldCards).to.have.length(2);
						});

						it('0 discarded cards.', function () {
							expect(this.deck.discardedCards).to.have.length(0);
						});
					});

					it('then three jokers should still be present.', function () {
						const jokers = this.deck.findCards((card) => {
							return card.rank.name == 'Joker';
						});

						expect(jokers).to.have.length(3);
					});
				});
			});
		});
	});
});
