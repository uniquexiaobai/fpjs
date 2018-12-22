const complement = (func) => {
    return (...args) => {
        return !func(...args);
    };
};

module.exports = complement;
