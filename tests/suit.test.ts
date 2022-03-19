
import { suits } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Suit', function() {
	it('should exist, and be a function', function() {
		expect(suits.Suit).to.be.a('function');
	});
});
