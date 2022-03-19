
/**
 * Shuffles the given array using the given (psuedo-)random number generator
 * 
 * @param array 
 * @param rng 
 */
export function shuffle<T>(array: T[], rng: RandomGenerator) {
	let j: number;

	for (let i = array.length - 1; i > 0; i--) {
		j = rng.int(i);
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

/**
 * A (Psuedo-)Random Number Generator used to provide randomization for shuffling.
 * 
 * @param max The generator's maximum value (int, exclusive)
 * @returns An integer between 0 (inclusive) and `max` (exclusive)
 */
export interface RandomGenerator {
	int(max: number) : number;
}

/**
 * A simple PRNG implementation using the built-in `Math.random()`
 */
export class MathRandomGenerator implements RandomGenerator {
	int(max: number) : number {
		return (Math.random() * max) | 0;
	}
}

/**
 * A PRNG implementation using the nodejs `crypto` module's `psuedoRandomBytes()`
 */
export class NodeCryptoRandomGenerator implements RandomGenerator {
	// NOTE: Should be a multiple of 4; We don't check this assumption for efficiency sake,
	// so violating it will break things
	private static poolSize = 1024;

	private pool: Buffer;
	private poolIndex: number;

	int(max: number) : number {
		if (! this.pool || this.poolIndex >= NodeCryptoRandomGenerator.poolSize) {
			this.refreshPool();
		}

		const int = this.pool.readUInt32LE(this.poolIndex);
		this.poolIndex += 4;

		return ((int / 0xffffffff) * max) | 0;
	}

	private refreshPool() {
		const { pseudoRandomBytes } = require('crypto') as typeof import('crypto');

		this.pool = pseudoRandomBytes(NodeCryptoRandomGenerator.poolSize);
		this.poolIndex = 0;
	}
}
