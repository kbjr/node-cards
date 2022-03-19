
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('PiquetDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.PiquetDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.PiquetDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.PiquetDeck()).to.be.instanceof(decks.Deck);
	});
	
	// TODO: Test rng option
});
