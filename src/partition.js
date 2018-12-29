const curry = require('./curry');

const partition = curry((func, list) => {
    const result = [[], []];

    list.forEach((item) => {
        result[func(item) ? 0 : 1].push(item);
    });

    return result;
});

module.exports = partition;
