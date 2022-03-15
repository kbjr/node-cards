
import { shuffle } from '../src';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('shuffle', function() {
	it('should exist, and be a function', function() {
		expect(shuffle).to.be.a('function');
	});
});
