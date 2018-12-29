const curry = require('./curry');

const every = curry((func, list) => {
    return list.every(func);
});

module.exports = every;
