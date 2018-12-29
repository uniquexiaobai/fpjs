const curry = require('./curry');

const map = curry((func, list) => {
    return list.map(func);
});

module.exports = map;
