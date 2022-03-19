
import { decks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Deck', function() {
	it('should exist, and be a function', function() {
		expect(decks.Deck).to.be.a('function');
	});
});
