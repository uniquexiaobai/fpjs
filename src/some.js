const curry = require('./curry');

const some = curry((func, list) => {
    return list.some(func);
});

module.exports = some;
