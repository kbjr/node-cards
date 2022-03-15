
exports.indexArray = (array) => {
	const map = new Map();

	array.forEach((value, index) => {
		map.set(value, index);
	});

	return map;
};

exports.max = (array, getValue) => {
	let highItem;
	let highValue = -Infinity;

	array.forEach((item) => {
		const value = getValue(item);

		if (value > highValue) {
			highItem = item;
			highValue = value;
		}
	});

	return highItem;
};
