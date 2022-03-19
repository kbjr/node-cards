
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('TarotDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.TarotDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.TarotDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.TarotDeck()).to.be.instanceof(decks.Deck);
	});
	
	// TODO: Test rng option
	// TODO: Test trumpSuit option
});
