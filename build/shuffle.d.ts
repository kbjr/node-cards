/**
 * Shuffles the given array using the given (psuedo-)random number generator
 *
 * @param array
 * @param rng
 */
export declare function shuffle<T>(array: T[], rng: RandomGenerator): void;
/**
 * A (Psuedo-)Random Number Generator used to provide randomization for shuffling.
 *
 * @param max The generator's maximum value (int, exclusive)
 * @returns An integer between 0 (inclusive) and `max` (exclusive)
 */
export interface RandomGenerator {
    int(max: number): number;
}
/**
 * A simple PRNG implementation using the built-in `Math.random()`
 */
export declare class MathRandomGenerator implements RandomGenerator {
    int(max: number): number;
}
/**
 * A PRNG implementation using the nodejs `crypto` module's `psuedoRandomBytes()`
 */
export declare class NodeCryptoRandomGenerator implements RandomGenerator {
    private static poolSize;
    private pool;
    private poolIndex;
    int(max: number): number;
    private refreshPool;
}
