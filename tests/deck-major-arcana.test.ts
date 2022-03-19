
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('MajorArcanaDeck', function() {
	it('should exist, and be a function', function() {
		expect(decks.MajorArcanaDeck).to.be.a('function');
	});

	it('should be creatable', function() {
		expect(create).to.not.throw();

		function create() {
			return new decks.MajorArcanaDeck();
		}
	});

	it('should extend Deck', function() {
		expect(new decks.MajorArcanaDeck()).to.be.instanceof(decks.Deck);
	});
	
	// TODO: Test rng option
});
