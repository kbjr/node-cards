
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shuffle, RandomGenerator, MathRandomGenerator, NodeCryptoRandomGenerator } from '../src';

describe('shuffle', function() {
	it('should exist, and be a function', function() {
		expect(shuffle).to.be.a('function');
	});

	it('should shuffle the given list in a non-predictable way', function() {
		// TODO: Should use some kind of seeded RandomGenerator implementation
		// for tests so test runs can be made reproducable
		const rng = new MathRandomGenerator();

		const list = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
		const listA = list.slice();
		const listB = list.slice();
		const listC = list.slice();

		shuffle(listA, rng);
		shuffle(listB, rng);
		shuffle(listC, rng);

		// The contents of the lists should not have changed
		expect(listA).to.have.same.members(list);
		expect(listB).to.have.same.members(list);
		expect(listC).to.have.same.members(list);

		// But the orders should have...
		expect(listA).not.to.deep.eq(list);
		expect(listB).not.to.deep.eq(list);
		expect(listC).not.to.deep.eq(list);

		// And they should not match each other, either
		expect(listA).not.to.deep.eq(listB);
		expect(listB).not.to.deep.eq(listC);
		expect(listC).not.to.deep.eq(listA);
	});
});

describe('RandomGenerator implementations', function() {
	describeRandomGenerator('MathRandomGenerator', MathRandomGenerator);
	describeRandomGenerator('NodeCryptoRandomGenerator', NodeCryptoRandomGenerator);
});

interface RandomGeneratorConstructor {
	new (): RandomGenerator;
}

function describeRandomGenerator(desc: string, Generator: RandomGeneratorConstructor) {
	describe(desc, function() {
		it('should exist, and be a function', function() {
			expect(Generator).to.be.a('function');
		});

		describe('#int(max)', function() {
			it('should generate numbers between 0 and `max`', function() {
				const rng = new Generator();

				[ 10, 30, 50, 70, 90 ].forEach((max) => {
					for (let i = 0; i < 50; i++) {
						const rand = rng.int(max);
						expect(rand).to.be.gte(0);
						expect(rand).to.be.lt(max, 'expected to be less than `max`');
						expect(rand | 0).to.eq(rand, 'expected an int');
					}
				});
			});
		});
	});
}
