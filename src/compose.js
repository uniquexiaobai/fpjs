const compose = (...fns) => {
	return (arg) => {
		return fns.reduceRight((feed, func) => {
			return func(feed);
		}, arg);
	};
};

module.exports = compose;
