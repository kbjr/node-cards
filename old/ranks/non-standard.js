
const { Rank } = require('../rank');

/**
 * @alias module:ranks.one
 * @type {Rank}
 * @property shortName {'1'}
 * @property longName {'One'}
 */
exports.one = new Rank('1',  'One');

/**
 * @alias module:ranks.cavalier
 * @type {Rank}
 * @property shortName {'C'}
 * @property longName {'Cavalier'}
 */
exports.cavalier = new Rank('C',  'Cavalier');

/**
 * @alias module:ranks.knight
 * @type {Rank}
 * @property shortName {'KN'}
 * @property longName {'Knight'}
 */
exports.knight = new Rank('KN', 'Knight');

/**
 * @alias module:ranks.page
 * @type {Rank}
 * @property shortName {'P'}
 * @property longName {'Page'}
 */
exports.page = new Rank('P',  'Page');
