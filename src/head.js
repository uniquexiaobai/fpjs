const head = (list) => {
	return typeof list === 'string' ? list.charAt(0) : list[0];
};

module.exports = head;
