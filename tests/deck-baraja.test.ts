
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('BarajaDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.BarajaDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.BarajaDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.BarajaDeck()).to.be.instanceof(decks.Deck);
	});

	// TODO: Test stripped flag
	// TODO: Test rng option
	// TODO: Test jokers option
});
