const curry = require('./curry');

const prop = curry((p, obj) => {
    return obj && obj[p];
});

module.exports = prop;
