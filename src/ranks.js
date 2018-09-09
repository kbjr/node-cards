
const Rank = exports.Rank = class Rank {
	constructor(shortName, longName) {
		this.shortName = shortName;
		this.longName = longName;
	}
};

// Standard card ranks
exports.ace   = new Rank('A',  'Ace');
exports.two   = new Rank('2',  'Two');
exports.three = new Rank('3',  'Three');
exports.four  = new Rank('4',  'Four');
exports.five  = new Rank('5',  'Five');
exports.six   = new Rank('6',  'Six');
exports.seven = new Rank('7',  'Seven');
exports.eight = new Rank('8',  'Eight');
exports.nine  = new Rank('9',  'Nine');
exports.ten   = new Rank('10', 'Ten');
exports.jack  = new Rank('J',  'Jack');
exports.queen = new Rank('Q',  'Queen');
exports.king  = new Rank('K',  'King');

// Non-standard card ranks
exports.cavalier = new Rank('C',  'Cavalier');
exports.knight   = new Rank('KN', 'Knight');
exports.page     = new Rank('P',  'Page');
