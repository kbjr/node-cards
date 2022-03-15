"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCryptoRandomGenerator = exports.MathRandomGenerator = exports.shuffle = void 0;
/**
 * Shuffles the given array using the given (psuedo-)random number generator
 *
 * @param array
 * @param rng
 */
function shuffle(array, rng) {
    let j;
    for (let i = array.length - 1; i > 0; i--) {
        j = rng.int(i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
exports.shuffle = shuffle;
/**
 * A simple PRNG implementation using the built-in `Math.random()`
 */
class MathRandomGenerator {
    int(max) {
        return (Math.random() * max) | 0;
    }
}
exports.MathRandomGenerator = MathRandomGenerator;
/**
 * A PRNG implementation using the nodejs `crypto` module's `psuedoRandomBytes()`
 */
class NodeCryptoRandomGenerator {
    int(max) {
        if (!this.pool || this.poolIndex >= NodeCryptoRandomGenerator.poolSize) {
            this.refreshPool();
        }
        const int = this.pool.readUInt32LE(this.poolIndex);
        this.poolIndex += 4;
        return ((int / 0xffffffff) * max) | 0;
    }
    refreshPool() {
        const { pseudoRandomBytes } = require('crypto');
        this.pool = pseudoRandomBytes(NodeCryptoRandomGenerator.poolSize);
        this.poolIndex = 0;
    }
}
exports.NodeCryptoRandomGenerator = NodeCryptoRandomGenerator;
// NOTE: Should be a multiple of 4; We don't check this assumption for efficiency sake,
// so violating it will break things
NodeCryptoRandomGenerator.poolSize = 1024;
//# sourceMappingURL=shuffle.js.map