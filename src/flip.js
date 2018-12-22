const flip = (func) => {
    return (a, b, ...args) => {
        return func(b, a, ...args);
    };
};

module.exports = flip;
