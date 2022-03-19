
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('PinochelDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.PinochelDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.PinochelDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.PinochelDeck()).to.be.instanceof(decks.Deck);
	});
	
	// TODO: Test rng option
});
