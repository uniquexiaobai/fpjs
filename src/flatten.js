const flatten = (array) => {
	return array.reduce((acc, item) => {
		return acc.concat(Array.isArray(item) ? flatten(item) : [item]);
	}, []);
};

module.exports = flatten;
