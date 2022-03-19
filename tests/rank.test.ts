
import { ranks } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Rank', function() {
	it('should exist, and be a function', function() {
		expect(ranks.Rank).to.be.a('function');
	});
});
