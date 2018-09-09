
const { arc4, shuffle } = require('rand-utils');

let useArc4 = false;

exports.useArc4 = (bool) => {
	useArc4 = !! bool;
};

// Expose a way to seed the ARC4 PRNG
exports.seedArc4 = (seed) => arc4.seed(seed);

// Shuffle the given array
exports.shuffle = (array) => shuffle(array, useArc4 ? 'ARC4' : 'SIMPLE');
