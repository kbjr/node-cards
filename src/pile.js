
exports.Pile = class Pile extends Array {
	constructor(...args) {
		super(...args);
	}

	empty() {
		return this.splice(0, this.length);
	}

	copyInto(array) {
		array.push(...this);
	}

	emptyInto(array) {
		array.push(...this.empty());
	}

	shiftInto(array) {
		const value = this.shift();

		array.push(value);

		return value;
	}
};
