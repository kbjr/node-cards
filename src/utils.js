
exports.indexArray = (array) => {
	const map = new Map();

	array.forEach((value, index) => {
		map.set(value, index);
	});

	return map;
};
