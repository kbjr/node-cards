
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('StandardDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.StandardDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.StandardDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.StandardDeck()).to.be.instanceof(decks.Deck);
	});
	
	// TODO: Test rng option
	// TODO: Test jokers option
});
