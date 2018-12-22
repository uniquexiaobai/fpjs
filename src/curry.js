const curry = (func) => {
	return function _curry(..._args) {
		if (_args.length >= func.length) {
			return func(..._args);
		} else {
			return (...args) => _curry(..._args, ...args);
		}
	};
};

module.exports = curry;
