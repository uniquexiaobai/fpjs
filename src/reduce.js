const curry = require('./curry');

const reduce = curry((func, acc, list) => {
    return list.reduce(func, acc);
});

module.exports = reduce;
