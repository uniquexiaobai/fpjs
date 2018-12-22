const pipe = (...fns) => {
	return (arg) => {
		return fns.reduce((feed, func) => {
			return func(feed);
		}, arg);
	};
};

module.exports = pipe;
