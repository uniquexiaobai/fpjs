const curry = require('./curry');

const filter = curry((func, list) => {
    return list.filter(func);
});

module.exports = filter;
